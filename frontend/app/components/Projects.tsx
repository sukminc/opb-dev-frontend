"use client";

import { Clock, ExternalLink, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  projects,
  type Project,
  type ProjectCategory,
  type ProjectRepoType,
  type ProjectStage,
  type ProjectStatus,
} from "../data/projects";

const GH_OWNER = "sukminc";

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

function isInternalProject(project: Project) {
  return project.visibility === "internal";
}

function hasPublicRepo(project: Project) {
  return Boolean(project.repoName) && project.visibility === "public";
}

function shouldShowRepoDetails(project: Project) {
  return hasPublicRepo(project) && !isInternalProject(project);
}

const STAGE_BASELINE_PROGRESS: Record<ProjectStage, number> = {
  prototype: 36,
  "mvp-loop": 52,
  "workflow-build": 42,
  concept: 26,
  "ops-layer": 60,
  archive: 100,
};

const REPO_TYPE_BASELINE: Record<ProjectRepoType, number> = {
  "mobile-app": 20,
  "web-app": 18,
  automation: 10,
  platform: 28,
  "data-pipeline": 22,
  validation: 14,
};

const STATUS_MULTIPLIER: Record<ProjectStatus, number> = {
  live: 1,
  building: 0.9,
  idea: 1.35,
};

const CATEGORY_PRIORITY: Record<ProjectCategory, number> = {
  featured: 0,
  secondary: 1,
  ops: 2,
  archive: 3,
};

const STAGE_LABELS: Record<ProjectStage, string> = {
  prototype: "Prototype",
  "mvp-loop": "MVP Loop",
  "workflow-build": "Workflow Build",
  concept: "Concept",
  "ops-layer": "Ops Layer",
  archive: "Archive",
};

const CATEGORY_META: Record<ProjectCategory, { title: string; description: string }> = {
  featured: {
    title: "Featured Project",
    description: "A personal build that shows how I design data systems and quality gates end to end.",
  },
  secondary: {
    title: "More Builds",
    description: "Additional builds.",
  },
  ops: {
    title: "This Site",
    description: "The portfolio itself — designed, built, and maintained by me.",
  },
  archive: {
    title: "Proof of Work",
    description: "Earlier builds demonstrating pipeline, validation, and automation craft.",
  },
};

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  live: { label: "Live", color: "text-[#111111]", dot: "bg-[#111111]" },
  building: { label: "Building", color: "text-[#1a3a2e]", dot: "bg-[#2d6a47] animate-pulse" },
  idea: { label: "Idea", color: "text-[#2d6a47]", dot: "bg-[#6aaa88]" },
};

const STATUS_BAR: Record<ProjectStatus, string> = {
  live: "bg-[#111111]",
  building: "bg-[#2d6a47]",
  idea: "bg-[#6aaa88]",
};

const TECH_COLORS: Record<string, string> = {
  "Next.js": "#111111",
  "FastAPI": "#57d1b2",
  "Python": "#8eb9ff",
  "Python (FastAPI)": "#57d1b2",
  "TypeScript": "#66a8ff",
  "TypeScript (Next.js)": "#111111",
  "SQLAlchemy": "#ff8a70",
  "Pandas": "#b89cff",
  "NumPy": "#82d4ff",
  "Vercel": "#111111",
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
  "iOS": "#111111",
  "Android": "#7de38d",
};

function getRecommendedMvpTarget(project: Project, recent14Count: number | null): number {
  if (project.status === "live") return 1;

  const baseline = REPO_TYPE_BASELINE[project.repoType];
  const recent = recent14Count ?? 0;
  const activityAdjustment = Math.min(12, recent * 2);
  const featuredAdjustment = project.category === "featured" ? 0.72 : 1;
  const target = Math.round((baseline + activityAdjustment) * STATUS_MULTIPLIER[project.status] * featuredAdjustment);

  return Math.max(6, target);
}

function getMvpProgress(project: Project, totalCount: number | null, recent14Count: number | null): number {
  if (project.status === "live") return 100;
  if (!project.repoName || isInternalProject(project)) {
    return STAGE_BASELINE_PROGRESS[project.stage];
  }
  if (totalCount === null) return 0;
  const target = getRecommendedMvpTarget(project, recent14Count);
  return Math.max(0, Math.min(100, Math.round((totalCount / target) * 100)));
}

function getMvpLabel(project: Project, progress: number, loading: boolean): string {
  if (project.stage === "archive") return "Archive";
  if (project.status === "live") return "Live ✓";
  if (!project.repoName || isInternalProject(project)) return `${STAGE_LABELS[project.stage]} · Ready`;
  if (loading) return "Syncing...";
  if (progress >= 100) return `${STAGE_LABELS[project.stage]} · Ready`;
  return `${STAGE_LABELS[project.stage]} · ${progress}%`;
}

function getMvpHint(project: Project, recent14Count: number | null): string {
  if (project.category === "archive") return "Proof-of-work archive";
  if (project.category === "featured") return "Core brand product";
  if (isInternalProject(project)) return "Internal workflow system already supporting the portfolio";
  if (!project.repoName) return "Brand shell, naming, and product direction are already set";
  if (project.status === "live") return "MVP reached";
  const target = getRecommendedMvpTarget(project, recent14Count);
  const recent = recent14Count ?? 0;
  return `Auto target ${target} commits · 14d activity ${recent}`;
}

function TechBadge({ tag }: { tag: string }) {
  return (
    <div title={tag} className="h-7 flex items-center gap-2 rounded-full border border-[#aacfbe] bg-[linear-gradient(180deg,#f0f8f4_0%,#d8f0e4_100%)] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: TECH_COLORS[tag] ?? "#4a7a62" }}
      />
      <span className="text-[10px] text-[#1a3a2e] leading-none">{tag}</span>
    </div>
  );
}

function timeAgo(iso: string): string {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return `${Math.floor(d / 30)}mo ago`;
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const cfg = statusConfig[project.status];
  const repoVisibility = project.visibility === "public" ? "Public repo" : "Private build";
  const stageLabel = STAGE_LABELS[project.stage];
  const variants = [
    {
      shell:
        "border-[#111111]/15 bg-[radial-gradient(circle_at_top_left,_rgba(17,17,17,0.08),_transparent_48%),linear-gradient(135deg,#fbf7f1_0%,#f1e9df_100%)]",
      badge: "border-[#111111]/20 bg-[#111111] text-[#f8f3ea]",
      accent: "bg-[#111111]",
      note: "Current main build",
    },
    {
      shell:
        "border-[#8d8574]/20 bg-[radial-gradient(circle_at_top_left,_rgba(166,145,109,0.18),_transparent_45%),linear-gradient(135deg,#fbf7f1_0%,#efe8dc_100%)]",
      badge: "border-[#a6916d]/25 bg-[#f6ecda] text-[#7a6745]",
      accent: "bg-[#a6916d]",
      note: "Supporting build",
    },
  ][index % 2];

  return (
    <div className="rounded-[2rem] border border-[#bdd8ca] bg-[linear-gradient(135deg,#fbf7f1_0%,#f1e9df_100%)] px-8 py-8 sm:px-10 sm:py-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#2d6a47]" />
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#4a7a62]">Active build</p>
        </div>
        <span className="rounded-full border border-[#111111]/20 bg-[#111111] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f8f3ea]">
          {cfg.label}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-2xl">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f4a43]">{project.tagline}</p>

      {project.technicalProof && project.technicalProof.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {project.technicalProof.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2d6a47]" />
              <p className="text-sm leading-7 text-[#5f5a52]">{point}</p>
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
            className="inline-flex items-center gap-2 rounded-full border border-[#1a3a2e] bg-[#1a3a2e] px-5 py-2.5 text-sm font-medium text-[#f2faf6] transition-colors hover:bg-[#24523a]"
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

function RichProjectCard({ project, commitState }: { project: Project; commitState: CommitState }) {
  const cfg = statusConfig[project.status];
  const repoName = shouldShowRepoDetails(project) ? REPO_MAP[project.slug] : undefined;
  const progress = getMvpProgress(project, commitState.totalCount, commitState.recent14Count);
  const progressLabel = getMvpLabel(project, progress, commitState.loading);
  const progressHint = getMvpHint(project, commitState.recent14Count);
  const readinessSignals = project.readinessSignals ?? [];

  return (
    <div className={project.featured ? "md:col-span-2" : ""}>
      <div className="glass-panel flex h-full flex-col rounded-[1.75rem] border-[#c0d8cc] p-6 transition-colors hover:border-[#7abba0] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_20px_60px_rgba(17,17,17,0.05),0_8px_28px_rgba(45,106,71,0.08)]">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
              <h3 className="text-sm font-semibold text-[#111111] truncate">{project.title}</h3>
            </div>
            {repoName && (
              <div className="flex items-center gap-1.5 pl-3.5 text-[10px] text-[#2d6a47]">
                <GitBranch size={9} />
                <span className="font-mono">{GH_OWNER}/{repoName}</span>
              </div>
            )}
          </div>
          {commitState.totalCount !== null && repoName && (
            <div className="text-right flex-shrink-0">
              <span className="text-base font-bold text-[#111111] leading-none">{commitState.totalCount}</span>
              <p className="text-[9px] text-[#4a7a62]">commits</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="mb-1.5 flex justify-between text-[10px] text-[#4a7a62]">
            <span className="truncate pr-2">{project.tagline}</span>
            <span className="flex-shrink-0">{progressLabel}</span>
          </div>
          <div className="h-1 bg-[#ccddd4] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${STATUS_BAR[project.status]}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {project.mvpEta && (
            <p className="mt-2 text-[10px] text-[#4a7a62]">{project.mvpEta}</p>
          )}
          <p className="mt-1 text-[10px] text-[#5a9a7a]">{progressHint}</p>
        </div>

        <div className="flex flex-col gap-0.5 mb-4 flex-1">
          {readinessSignals.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2">
              {readinessSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-[#a8ccb8] bg-[linear-gradient(180deg,#f2faf6_0%,#d8f0e4_100%)] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#1a3a2e]"
                >
                  {signal}
                </span>
              ))}
            </div>
          )}
          {commitState.loading && repoName && (
            <div className="space-y-2 py-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex gap-2.5 animate-pulse">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8d4c8] flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2.5 bg-[#e0f0e8] rounded w-3/4" />
                    <div className="h-2 bg-[#e0f0e8] rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {!commitState.loading && repoName && commitState.commits.slice(0, 1).map((c, i) => (
            <a
              key={c.sha}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-1.5 flex items-start gap-2.5 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-[#e8f4ee]"
            >
              <div className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${i === 0 ? "bg-[#2d6a47]" : "bg-[#7abba0]"}`} />
              <div className="flex-1 min-w-0">
                <p className={`text-xs truncate leading-snug ${i === 0 ? "text-[#111111]" : "text-[#5f5a52]"} group-hover:text-[#111111] transition-colors`}>
                  {c.message.split("\n")[0]}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <code className="text-[9px] text-[#4a7a62] font-mono">{c.sha.slice(0, 7)}</code>
                  <span className="text-[9px] text-[#9abfb0]">·</span>
                  <span className="flex items-center gap-1 text-[9px] text-[#4a7a62]">
                    <Clock size={8} />
                    {timeAgo(c.date)}
                  </span>
                </div>
              </div>
              <ExternalLink size={10} className="mt-1 flex-shrink-0 text-[#2d6a47] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} tag={tag} />
          ))}
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
  const archiveProjects = displayOrder.filter((p) => p.category === "archive" || p.category === "ops");

  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Section label */}
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
          Work
        </p>

        {/* Featured — poker card, full width */}
        <div className="mt-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Archive — simple text list */}
        {archiveProjects.length > 0 && (
          <div className="mt-12 border-t border-[#c8ddd4] pt-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
              Proof of Work
            </p>
            <div className="mt-4 divide-y divide-[#d4e8dc]">
              {archiveProjects.map((project) => (
                <div key={project.slug} className="flex items-baseline justify-between gap-6 py-3">
                  <span className="text-sm text-[#111111]">{project.title}</span>
                  <span className="flex-shrink-0 text-xs text-[#4a7a62]">
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
