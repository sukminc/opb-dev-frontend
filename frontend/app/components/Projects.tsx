"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Flame, Check } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "../data/projects";

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  live:     { label: "Live",     color: "text-emerald-400", dot: "bg-emerald-400" },
  building: { label: "Building", color: "text-[#007AFF]",   dot: "bg-[#007AFF] animate-pulse" },
  idea:     { label: "Idea",     color: "text-[#555]",       dot: "bg-[#333]" },
};

type FilterKey = "All" | "Poker" | "Data" | "Automation";

const FILTERS: { key: FilterKey; match: string[] }[] = [
  { key: "All",        match: [] },
  { key: "Poker",      match: ["Poker", "Fintech", "AR", "Computer Vision"] },
  { key: "Data",       match: ["Data Engineering", "ETL", "Airflow", "Analytics", "PostgreSQL"] },
  { key: "Automation", match: ["Python", "pytest", "AI APIs", "SDK Engineering", "Automation"] },
];

function ProjectCard({ project }: { project: Project }) {
  const [count, setCount]         = useState(project.seed);
  const [voted, setVoted]         = useState(false);
  const [animating, setAnimating] = useState(false);

  const storageKey = `interest_${project.slug}`;

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "1") setVoted(true);
  }, [storageKey]);

  function handleInterest() {
    if (voted) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCount((n) => n + 1);
    setVoted(true);
    localStorage.setItem(storageKey, "1");
  }

  const cfg = statusConfig[project.status];

  return (
    <div
      className={`relative flex flex-col border rounded-xl p-6 bg-black transition-all duration-300 hover:bg-[#050505] group ${
        project.featured
          ? "border-[#007AFF]/30 md:col-span-2"
          : "border-[#1a1a1a]"
      }`}
    >
      {/* Status */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          <span className={`text-xs font-mono ${cfg.color}`}>{cfg.label}</span>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-md border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#007AFF] hover:text-[#007AFF] transition-all opacity-0 group-hover:opacity-100"
          >
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 mb-6">
        <h3 className="text-lg font-semibold text-white mb-1 font-mono">
          {project.title}
        </h3>
        <p className="text-sm text-[#007AFF] mb-3">{project.tagline}</p>
        <p className="text-sm text-[#555] leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono text-[#444] border border-[#1a1a1a] rounded px-2 py-0.5 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Interest button */}
      <button
        onClick={handleInterest}
        disabled={voted}
        className={`flex items-center justify-between w-full rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 border ${
          voted
            ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400 cursor-default"
            : "border-[#2a2a2a] bg-[#0a0a0a] text-[#666] hover:border-[#007AFF] hover:text-white hover:bg-[#007AFF]/5 cursor-pointer"
        }`}
      >
        <span className="flex items-center gap-2">
          {voted ? (
            <Check size={14} className="text-emerald-400" />
          ) : (
            <Flame
              size={14}
              className={`transition-transform ${animating ? "scale-125" : ""}`}
            />
          )}
          {voted ? "You're interested" : "I'm interested"}
        </span>
        <span
          className={`font-mono text-xs tabular-nums transition-all duration-300 ${
            animating ? "text-[#007AFF] scale-110" : ""
          } ${voted ? "text-emerald-400" : "text-[#444]"}`}
        >
          {count}
        </span>
      </button>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    const matchTags = FILTERS.find((f) => f.key === activeFilter)?.match ?? [];
    return p.tags.some((t) => matchTags.includes(t));
  });

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-[#007AFF] tracking-widest uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight text-white">
            What I&apos;m building —{" "}
            <span className="text-[#333]">vote for what&apos;s next.</span>
          </h2>
          <p className="text-[#444] mt-3 text-sm">
            Click &ldquo;I&apos;m interested&rdquo; on anything that resonates. It tells
            me where to focus.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {FILTERS.map(({ key }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
                activeFilter === key
                  ? "border-[#007AFF] bg-[#007AFF]/10 text-[#007AFF]"
                  : "border-[#2a2a2a] text-[#555] hover:border-[#444] hover:text-[#888]"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
