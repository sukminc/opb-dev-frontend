"use client";

import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  projects,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
} from "../data/projects";

const REPO_MAP: Record<string, string> = Object.fromEntries(
  projects.filter((p) => p.repoName).map((p) => [p.slug, p.repoName!])
);

const FETCHABLE_PROJECTS = projects.filter(
  (project) => Boolean(project.repoName) && project.visibility === "public" && project.category !== "featured"
);

interface Commit {
  sha: string;
  message: string;
  date: string;
  url: string;
}

interface CommitState {
  commits: Commit[];
  totalCount: number | null;
  recent14Count: number | null;
  loading: boolean;
}

const CATEGORY_PRIORITY: Record<ProjectCategory, number> = {
  featured: 0,
  secondary: 1,
  ops: 2,
  archive: 3,
};

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  live: { label: "Live", color: "text-[#e9f4ec]", dot: "bg-[#111111]" },
  building: { label: "Building", color: "text-[#d9ecdf]", dot: "bg-[#4ade80] animate-pulse" },
  idea: { label: "Idea", color: "text-[#4ade80]", dot: "bg-[#6aaa88]" },
};

const TECH_COLORS: Record<string, string> = {
  "Next.js": "#e9f4ec",
  "FastAPI": "#57d1b2",
  "Python": "#8eb9ff",
  "Python (FastAPI)": "#57d1b2",
  "TypeScript": "#66a8ff",
  "TypeScript (Next.js)": "#e9f4ec",
  "SQLAlchemy": "#ff8a70",
  "Pandas": "#b89cff",
  "NumPy": "#82d4ff",
  "Vercel": "#e9f4ec",
  "PostgreSQL": "#7ea8ff",
  "Docker": "#79ccff",
  "Apache Airflow": "#5fb7ff",
  "GitHub Actions": "#6ab0ff",
  "Flutter": "#78d3ff",
  "Dart": "#56c3ff",
  "Supabase": "#6fe2a5",
  "Stripe": "#b8a1ff",
  "Pytest": "#6fdcff",
  "JSON": "#f3a86b",
  "CLI": "#6e6a62",
  "iOS": "#e9f4ec",
  "Android": "#7de38d",
};

function TechBadge({ tag }: { tag: string }) {
  return (
    <div title={tag} className="h-7 flex items-center gap-2 rounded-full border border-[#23402e] bg-[linear-gradient(180deg,#12241a_0%,#0c1710_100%)] px-3 shadow-[inset_0_1px_0_rgba(74,222,128,0.10)]">
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: TECH_COLORS[tag] ?? "#86b598" }}
      />
      <span className="text-[10px] text-[#d9ecdf] leading-none">{tag}</span>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const cfg = statusConfig[project.status];

  return (
    <div className="rounded-[2rem] border border-[#223128] bg-[linear-gradient(135deg,#10160f_0%,#0b100d_100%)] px-8 py-8 sm:px-10 sm:py-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#4ade80]" />
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#86b598]">Active build</p>
        </div>
        <span className="rounded-full border border-[#4ade80]/40 bg-[#4ade80] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a0e0c]">
          {cfg.label}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#e9f4ec] sm:text-2xl">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9db3a5]">{project.tagline}</p>

      {project.technicalProof && project.technicalProof.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {project.technicalProof.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4ade80]" />
              <p className="text-sm leading-7 text-[#9db3a5]">{point}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#4ade80] bg-[#4ade80] px-5 py-2.5 text-sm font-semibold text-[#0a0e0c] transition-colors hover:bg-[#22c55e]"
          >
            onepercentbetter.poker
            <ExternalLink size={13} />
          </a>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [, setCommitMap] = useState<Record<string, CommitState>>(() =>
    Object.fromEntries(
      projects.map((p) => [
        p.slug,
        {
          commits: [],
          totalCount: null,
          recent14Count: null,
          loading: FETCHABLE_PROJECTS.some((project) => project.slug === p.slug),
        },
      ])
    )
  );

  const sortedSlugsRef = useRef<string[] | null>(null);
  const loadedCount = useRef(0);
  const totalRepos = FETCHABLE_PROJECTS.length;

  useEffect(() => {
    FETCHABLE_PROJECTS.forEach(async (project) => {
      const repoName = REPO_MAP[project.slug];
      if (!repoName) return;
      try {
        const res = await fetch(`/api/commits?repo=${repoName}`);
        if (!res.ok) throw new Error(`${res.status}`);
        const data = await res.json();
        setCommitMap((prev) => ({
          ...prev,
          [project.slug]: {
            commits: data.commits,
            totalCount: data.totalCount,
            recent14Count: data.recent14Count ?? null,
            loading: false,
          },
        }));
      } catch {
        setCommitMap((prev) => ({
          ...prev,
          [project.slug]: { commits: [], totalCount: null, recent14Count: null, loading: false },
        }));
      } finally {
        loadedCount.current += 1;
        if (loadedCount.current >= totalRepos && !sortedSlugsRef.current) {
          setCommitMap((snap) => {
            sortedSlugsRef.current = [...projects]
              .sort((a, b) => {
                const categoryDelta = CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category];
                if (categoryDelta !== 0) return categoryDelta;
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                const aDate = snap[a.slug]?.commits[0]?.date ?? "";
                const bDate = snap[b.slug]?.commits[0]?.date ?? "";
                return bDate.localeCompare(aDate);
              })
              .map((p) => p.slug);
            return snap;
          });
        }
      }
    });
  }, [totalRepos]);

  const displayOrder = sortedSlugsRef.current
    ? sortedSlugsRef.current.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean)
    : projects;

  const featuredProjects = displayOrder.filter((p) => p.category === "featured");
  const secondaryProjects = displayOrder.filter((p) => p.category === "secondary");
  const archiveProjects = displayOrder.filter((p) => p.category === "archive" || p.category === "ops");

  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Section label */}
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#4ade80]">
          Work
        </p>

        {/* Featured — poker card, full width */}
        <div className="mt-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {secondaryProjects.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {secondaryProjects.map((project) => (
              <Link key={project.slug} href={project.url ?? "#projects"} className="rounded-2xl border border-[#223128] bg-[#101511] p-6 transition-colors hover:border-[#4ade80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4ade80]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4ade80]">A OnePercentBetter project</p>
                <h3 className="mt-3 text-xl font-semibold text-[#e9f4ec]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9db3a5]">{project.tagline}</p>
                <span className="mt-5 inline-block text-xs text-[#4ade80]">Explore project →</span>
              </Link>
            ))}
          </div>
        )}

        {/* Archive — simple text list */}
        {archiveProjects.length > 0 && (
          <div className="mt-12 border-t border-[#223128] pt-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#4ade80]">
              Proof of Work
            </p>
            <div className="mt-4 divide-y divide-[#1d2a21]">
              {archiveProjects.map((project) => (
                <div key={project.slug} className="flex items-baseline justify-between gap-6 py-3">
                  <span className="text-sm text-[#e9f4ec]">{project.title}</span>
                  <span className="flex-shrink-0 text-xs text-[#86b598]">
                    {project.tags.slice(0, 3).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
