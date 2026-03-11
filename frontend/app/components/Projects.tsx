"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "../data/projects";

const BMAC = "https://buymeacoffee.com/chris.yoon";

const statusConfig: Record<ProjectStatus, { label: string; color: string; dot: string }> = {
  live:     { label: "Live",     color: "text-emerald-400", dot: "bg-emerald-400" },
  building: { label: "Building", color: "text-[#5E5CE6]",   dot: "bg-[#5E5CE6] animate-pulse" },
  idea:     { label: "Idea",     color: "text-[#4B4C58]",   dot: "bg-[#4B4C58]" },
};

type FilterKey = "All" | "Poker" | "Data" | "Automation";

const FILTERS: { key: FilterKey; match: string[] }[] = [
  { key: "All",        match: [] },
  { key: "Poker",      match: ["Poker", "Fintech", "AR", "Computer Vision"] },
  { key: "Data",       match: ["Data Engineering", "ETL", "Airflow", "Analytics", "PostgreSQL", "Apache Airflow"] },
  { key: "Automation", match: ["Python", "pytest", "AI APIs", "SDK Engineering", "Automation", "Pytest"] },
];

const FUNDING_TIERS = [
  { label: "Check",     sub: "$10 — I'd use this",     amount: 10,   style: "text-[#8A8B97] border-[#232329] hover:border-[#36363F] hover:text-[#F7F8F8]" },
  { label: "Call",      sub: "$20 — Build this",       amount: 20,   style: "text-[#F7F8F8] border-[#5E5CE6]/30 hover:border-[#5E5CE6] hover:bg-[#5E5CE6]/10" },
  { label: "10x Raise", sub: "$100+ — Need this ASAP", amount: 100,  style: "text-[#5E5CE6] border-[#5E5CE6]/50 hover:border-[#5E5CE6] hover:bg-[#5E5CE6]/15 font-medium" },
  { label: "All-In",    sub: "$1,000 — Sponsor",       amount: 1000, style: "text-amber-400 border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/10 font-medium" },
];

function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const cfg = statusConfig[project.status];

  function handleFund(amount: number) {
    window.open(`${BMAC}?amount=${amount}`, "_blank", "noopener,noreferrer");
  }

  return (
    <motion.div
      className="relative h-full"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full grid"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ── FRONT ── */}
        <div
          className={`[grid-area:1/1] flex flex-col rounded-2xl p-6 bg-[#161618] border transition-all duration-300 h-full min-h-[400px] ${
            flipped
              ? "border-[#5E5CE6]/50 shadow-[0_0_30px_rgba(94,92,230,0.12)]"
              : "border-[#232329] hover:border-[#5E5CE6]/30 hover:shadow-[0_0_20px_rgba(94,92,230,0.08)]"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Status row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
              <span className={`text-xs ${cfg.color}`}>{cfg.label}</span>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg border border-[#232329] flex items-center justify-center text-[#4B4C58] hover:border-[#5E5CE6]/40 hover:text-[#5E5CE6] transition-all"
              >
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 mb-5">
            <h3 className="text-base font-semibold text-[#F7F8F8] mb-1">{project.title}</h3>
            <p className="text-sm text-[#5E5CE6] mb-3">{project.tagline}</p>
            <p className="text-sm text-[#8A8B97] leading-relaxed">{project.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-[#A0A1B0] bg-[#1E1E22] border border-[#36363F] rounded-md px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* MVP Progress */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-[#4B4C58] tracking-wide">MVP Progress</span>
              <span className={`text-[10px] font-medium ${cfg.color}`}>
                {project.mvpProgress === 100 ? "Live ✓" : `${project.mvpProgress}%`}
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-[#232329] overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  project.status === "live"
                    ? "bg-emerald-400"
                    : project.status === "building"
                    ? "bg-[#5E5CE6]"
                    : "bg-[#4B4C58]"
                }`}
                style={{ width: `${project.mvpProgress}%` }}
              />
            </div>
          </div>

          <p className="text-[10px] text-[#4B4C58] text-center tracking-wide">
            hover to fund →
          </p>
        </div>

        {/* ── BACK ── */}
        <div
          className="[grid-area:1/1] flex flex-col justify-center rounded-2xl p-6 bg-[#161618] border border-[#5E5CE6]/50 shadow-[0_0_30px_rgba(94,92,230,0.12)] h-full min-h-[400px]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm text-[#8A8B97] text-center mb-1">{project.title}</p>
          <p className="text-xs text-[#4B4C58] text-center mb-6">What&apos;s your action?</p>

          <div className="flex flex-col gap-2">
            {FUNDING_TIERS.map((tier) => (
              <button
                key={tier.label}
                onClick={() => handleFund(tier.amount)}
                className={`flex items-center justify-between w-full rounded-xl px-4 py-2.5 text-sm border transition-all duration-150 cursor-pointer ${tier.style}`}
              >
                <span>{tier.label}</span>
                <span className="text-[11px] opacity-60">{tier.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
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
    <section id="projects" className="py-24 px-6 border-t border-[#232329]">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <p className="text-xs text-[#8A8B97] mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F8F8] tracking-tight">
            Hover a card —{" "}
            <span className="text-[#4B4C58]">put money on what matters.</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {FILTERS.map(({ key }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                activeFilter === key
                  ? "border-[#5E5CE6]/50 bg-[#5E5CE6]/10 text-[#5E5CE6]"
                  : "border-[#232329] text-[#4B4C58] hover:border-[#36363F] hover:text-[#8A8B97]"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
