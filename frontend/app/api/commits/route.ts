import { NextRequest, NextResponse } from "next/server";

const GH_OWNER = "sukminc";
const COMMITS_PER_PAGE = 100;
const RECENT_LOOKBACK_DAYS = 14;

export async function GET(request: NextRequest) {
  const repo = request.nextUrl.searchParams.get("repo");
  if (!repo) {
    return NextResponse.json({ error: "Missing repo param" }, { status: 400 });
  }

  try {
    const recentCutoff = new Date();
    recentCutoff.setUTCDate(recentCutoff.getUTCDate() - RECENT_LOOKBACK_DAYS);

    const res = await fetch(
      `https://api.github.com/repos/${GH_OWNER}/${repo}/commits?per_page=${COMMITS_PER_PAGE}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 300 }, // 5-min server-side cache
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: res.status }, { status: res.status });
    }

    const linkHeader = res.headers.get("Link") ?? "";
    const lastMatch = linkHeader.match(/[?&]page=(\d+)>; rel="last"/);
    const data = (await res.json()) as Array<{
      sha: string;
      html_url: string;
      commit: { message: string; author: { date: string } };
    }>;

    const commits = (Array.isArray(data) ? data : []).map((c) => ({
        sha:     c.sha,
        message: c.commit.message,
        date:    c.commit.author.date,
        url:     c.html_url,
      }));
    const recent14Count = commits.filter((commit) => new Date(commit.date) >= recentCutoff).length;

    return NextResponse.json(
      {
        commits,
        totalCount: lastMatch ? parseInt(lastMatch[1], 10) : commits.length,
        recent14Count,
      },
      { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" } }
    );
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
