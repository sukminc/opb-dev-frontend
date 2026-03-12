"use client";

import { ArrowUpRight, Clock, ExternalLink, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, type Project, type ProjectStatus } from "../data/projects";

const BMAC = "https://buymeacoffee.com/chris.yoon";
const GH_OWNER = "sukminc";

const REPO_MAP: Record<string, string> = Object.fromEntries(
  projects.filter((p) => p.repoName).map((p) => [p.slug, p.repoName!])
);

interface Commit {
  sha:     string;
  message: string;
  date:    string;
  url:     string;
}

interface CommitState {
  commits:    Commit[];
  totalCount: number | null;
  loading:    boolean;
}

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  live:     { label: "Live",     color: "text-emerald-400", dot: "bg-emerald-400" },
  building: { label: "Building", color: "text-[#5E5CE6]",   dot: "bg-[#5E5CE6] animate-pulse" },
  idea:     { label: "Idea",     color: "text-[#4B4C58]",   dot: "bg-[#4B4C58]" },
};

const STATUS_BAR: Record<string, string> = {
  live:     "bg-emerald-400",
  building: "bg-[#5E5CE6]",
  idea:     "bg-[#4B4C58]",
};

// Simple Icons CDN: https://cdn.simpleicons.org/{slug}/{hex-color}
const TECH_ICONS: Record<string, { slug: string; color: string }> = {
  "Next.js":              { slug: "nextdotjs",      color: "ffffff" },
  "FastAPI":              { slug: "fastapi",         color: "009688" },
  "Python":               { slug: "python",          color: "3776AB" },
  "Python (FastAPI)":     { slug: "fastapi",         color: "009688" },
  "TypeScript":           { slug: "typescript",      color: "3178C6" },
  "TypeScript (Next.js)": { slug: "nextdotjs",       color: "ffffff" },
  "Pandas":               { slug: "pandas",          color: "9575CD" },
  "NumPy":                { slug: "numpy",           color: "4DABF7" },
  "Vercel":               { slug: "vercel",          color: "ffffff" },
  "PostgreSQL":           { slug: "postgresql",      color: "4169E1" },
  "Docker":               { slug: "docker",          color: "2496ED" },
  "Apache Airflow":       { slug: "apacheairflow",   color: "017CEE" },
  "GitHub Actions":       { slug: "githubactions",   color: "2088FF" },
  "Flutter":              { slug: "flutter",         color: "54C5F8" },
  "Dart":                 { slug: "dart",            color: "0175C2" },
  "Supabase":             { slug: "supabase",        color: "3ECF8E" },
  "Stripe":               { slug: "stripe",          color: "635BFF" },
  "Pytest":               { slug: "pytest",          color: "0A9EDC" },
  "iOS":                  { slug: "apple",           color: "ffffff" },
  "Android":              { slug: "android",         color: "34A853" },
};

function TechBadge({ tag }: { tag: string }) {
  const icon = TECH_ICONS[tag];
  if (icon) {
    return (
      <div
        title={tag}
        className="w-6 h-6 rounded-md bg-[#1C1C1F] border border-[#232329] flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
          alt={tag}
          width={14}
          height={14}
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <span className="text-[10px] text-[#4B4C58] bg-[#1C1C1F] border border-[#232329] rounded-md px-2 py-0.5">
      {tag}
    </span>
  );
}

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60)   return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60)   return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24)   return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30)   return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

function ProjectCard({ project, commitState }: { project: Project; commitState: CommitState }) {
  const cfg = statusConfig[project.status];
  const repoName = REPO_MAP[project.slug];

  function handleFund(amount: number) {
    window.open(`${BMAC}?amount=${amount}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={project.featured ? "md:col-span-2" : ""}>
      <div
        className={`flex flex-col rounded-2xl p-6 bg-[#161618] border transition-colors h-full ${
          project.featured
            ? "border-[#5E5CE6]/25 hover:border-[#5E5CE6]/40"
            : "border-[#232329] hover:border-[#36363F]"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
              <h3 className="text-sm font-semibold text-[#F7F8F8] truncate">{project.title}</h3>
            </div>
            {repoName && (
              <div className="flex items-center gap-1.5 text-[10px] text-[#4B4C58] pl-3.5">
                <GitBranch size={9} />
                <span className="font-mono">{GH_OWNER}/{repoName}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {commitState.totalCount !== null && (
              <div className="text-right">
                <span className="text-base font-bold text-[#F7F8F8] leading-none">{commitState.totalCount}</span>
                <p className="text-[9px] text-[#4B4C58]">commits</p>
              </div>
            )}
            <a
              href={BMAC}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg border border-[#232329] flex items-center justify-center text-[#4B4C58] hover:border-[#5E5CE6]/40 hover:text-[#5E5CE6] transition-all"
            >
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-[#4B4C58] mb-1.5">
            <span className="truncate pr-2">{project.tagline}</span>
            <span className="flex-shrink-0">
              {project.mvpProgress === 100 ? "Live ✓" : `${project.mvpProgress}%`}
            </span>
          </div>
          <div className="h-1 bg-[#232329] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${STATUS_BAR[project.status] ?? "bg-[#4B4C58]"}`}
              style={{ width: `${project.mvpProgress}%` }}
            />
          </div>
        </div>

        {/* Commit feed */}
        <div className="flex flex-col gap-0.5 mb-4 flex-1">
          {commitState.loading && (
            <div className="space-y-2 py-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex gap-2.5 animate-pulse">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#232329] flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2.5 bg-[#1C1C1F] rounded w-3/4" />
                    <div className="h-2 bg-[#1C1C1F] rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!commitState.loading &&
            commitState.commits.map((c, i) => (
              <a
                key={c.sha}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 py-1.5 hover:bg-white/[0.02] rounded-lg px-1.5 -mx-1.5 transition-colors"
              >
                <div
                  className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    i === 0 ? "bg-[#5E5CE6]" : "bg-[#36363F]"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs truncate leading-snug ${
                      i === 0 ? "text-[#F7F8F8]" : "text-[#8A8B97]"
                    } group-hover:text-[#F7F8F8] transition-colors`}
                  >
                    {c.message.split("\n")[0]}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <code className="text-[9px] text-[#4B4C58] font-mono">{c.sha.slice(0, 7)}</code>
                    <span className="text-[9px] text-[#36363F]">·</span>
                    <span className="flex items-center gap-1 text-[9px] text-[#4B4C58]">
                      <Clock size={8} />
                      {timeAgo(c.date)}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  size={10}
                  className="mt-1 flex-shrink-0 text-[#4B4C58] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
        </div>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} tag={tag} />
          ))}
        </div>

        {/* Funding tiers */}
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Open",  amount: 30,  style: "text-[#8A8B97] border-[#232329] hover:border-[#36363F] hover:text-[#F7F8F8]" },
              { label: "3-Bet", amount: 150, style: "text-[#F7F8F8] border-[#5E5CE6]/30 hover:border-[#5E5CE6] hover:bg-[#5E5CE6]/10" },
            ].map((tier) => (
              <button
                key={tier.label}
                onClick={() => handleFund(tier.amount)}
                className={`rounded-xl py-2 text-xs border transition-all duration-150 cursor-pointer text-center ${tier.style}`}
              >
                {tier.label} · ${tier.amount}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleFund(500)}
            className="w-full rounded-xl border border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-150 cursor-pointer px-4 py-3 text-left group"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-semibold text-amber-400">Over Bet · $500</span>
                <p className="text-[11px] text-[#4B4C58] mt-0.5 group-hover:text-[#8A8B97] transition-colors">
                  Most players fold here. You don&apos;t.
                </p>
              </div>
              <ArrowUpRight size={14} className="text-amber-500/50 group-hover:text-amber-400 transition-colors shrink-0" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [commitMap, setCommitMap] = useState<Record<string, CommitState>>(() =>
    Object.fromEntries(
      projects.map((p) => [
        p.slug,
        { commits: [], totalCount: null, loading: !!REPO_MAP[p.slug] },
      ])
    )
  );

  useEffect(() => {
    projects.forEach(async (project) => {
      const repoName = REPO_MAP[project.slug];
      if (!repoName) return;
      try {
        const res = await fetch(
          `https://api.github.com/repos/${GH_OWNER}/${repoName}/commits?per_page=3`,
          { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!res.ok) {
          setCommitMap((prev) => ({
            ...prev,
            [project.slug]: { commits: [], totalCount: null, loading: false },
          }));
          return;
        }
        const linkHeader = res.headers.get("Link") ?? "";
        const lastMatch = linkHeader.match(/[?&]page=(\d+)>; rel="last"/);
        const data = await res.json();
        const commits: Commit[] = (Array.isArray(data) ? data : []).map(
          (c: { sha: string; html_url: string; commit: { message: string; author: { date: string } } }) => ({
            sha:     c.sha,
            message: c.commit.message,
            date:    c.commit.author.date,
            url:     c.html_url,
          })
        );
        setCommitMap((prev) => ({
          ...prev,
          [project.slug]: {
            commits,
            totalCount: lastMatch ? parseInt(lastMatch[1], 10) : commits.length,
            loading: false,
          },
        }));
      } catch {
        setCommitMap((prev) => ({
          ...prev,
          [project.slug]: { commits: [], totalCount: null, loading: false },
        }));
      }
    });
  }, []);

  // Sort by most recent commit (falls back to original order while loading)
  const sorted = [...projects].sort((a, b) => {
    const aDate = commitMap[a.slug]?.commits[0]?.date ?? "";
    const bDate = commitMap[b.slug]?.commits[0]?.date ?? "";
    return bDate.localeCompare(aDate);
  });

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#232329]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-[#8A8B97]">Projects · Live from GitHub</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8F8] tracking-tight">
            Sorted by{" "}
            <span className="text-[#4B4C58]">latest activity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sorted.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              commitState={
                commitMap[p.slug] ?? { commits: [], totalCount: null, loading: false }
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
