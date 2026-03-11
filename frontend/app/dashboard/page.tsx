"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, ProjectStatus } from "../data/projects";

const STATUS_META: Record<ProjectStatus, { label: string; dot: string; text: string; bar: string }> = {
  live:     { label: "Live",     dot: "bg-emerald-400", text: "text-emerald-400", bar: "bg-emerald-500" },
  building: { label: "Building", dot: "bg-[#5E5CE6]",   text: "text-[#5E5CE6]",  bar: "bg-[#5E5CE6]"  },
  idea:     { label: "Idea",     dot: "bg-[#4B4C58]",   text: "text-[#4B4C58]",  bar: "bg-[#4B4C58]"  },
};

const GITHUB_SLUGS: Record<string, string> = {
  "onepercentbetter":    "one-percent-better",
  "bluejays-moneyball":  "bluejays-financial-mlops",
  "actionkeeper":        "action-keeper",
  "onepercent-focus":    "OneBetterFocus",
  "twelvelabs-validator":"TwelveLabs",
};

type Filter = "all" | ProjectStatus;

export default function DashboardPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all"
    ? projects
    : projects.filter((p) => p.status === filter);

  const live     = projects.filter((p) => p.status === "live").length;
  const building = projects.filter((p) => p.status === "building").length;
  const avgPct   = Math.round(
    projects.reduce((sum, p) => sum + p.mvpProgress, 0) / projects.length
  );

  return (
    <main className="min-h-screen bg-[#0F0F11] text-[#F7F8F8]">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#4B4C58] hover:text-[#8A8B97] transition-colors mb-12"
        >
          <ArrowLeft size={13} /> Back
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F7F8F8] mb-2">
            Project Dashboard
          </h1>
          <p className="text-sm text-[#8A8B97]">
            github.com/sukminc · Live build status
          </p>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Portfolio",  value: `${avgPct}%`,  sub: "avg completion" },
            { label: "Live",       value: String(live),  sub: "deployed"       },
            { label: "Building",   value: String(building), sub: "in progress" },
          ].map((k) => (
            <div
              key={k.label}
              className="border border-[#232329] rounded-xl p-4 bg-[#161618]"
            >
              <p className="text-[10px] text-[#4B4C58] uppercase tracking-widest mb-1">{k.label}</p>
              <p className="text-2xl font-bold text-[#F7F8F8] leading-none mb-1">{k.value}</p>
              <p className="text-[10px] text-[#4B4C58]">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Portfolio bar */}
        <div className="border border-[#232329] rounded-xl p-4 bg-[#161618] mb-8">
          <div className="flex justify-between text-xs text-[#4B4C58] mb-3">
            <span className="text-[#8A8B97] font-medium">Overall Completion</span>
            <span className="text-[#5E5CE6] font-semibold">{avgPct}%</span>
          </div>
          <div className="h-1.5 bg-[#232329] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5E5CE6] rounded-full transition-all duration-700"
              style={{ width: `${avgPct}%` }}
            />
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 mb-6">
          {(["all", "building", "live"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all capitalize ${
                filter === f
                  ? "border-[#5E5CE6] text-[#5E5CE6] bg-[#5E5CE6]/10"
                  : "border-[#232329] text-[#4B4C58] hover:border-[#36363F] hover:text-[#8A8B97]"
              }`}
            >
              {f === "all" ? `All (${projects.length})` : f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {visible.map((p) => {
            const meta   = STATUS_META[p.status];
            const ghSlug = GITHUB_SLUGS[p.slug] ?? p.slug;
            const ghUrl  = p.url?.startsWith("https://github.com")
              ? p.url
              : `https://github.com/sukminc/${ghSlug}`;

            return (
              <div
                key={p.slug}
                className={`border rounded-xl p-5 bg-[#161618] transition-all duration-200 hover:border-[#36363F] ${
                  p.featured
                    ? "border-[#5E5CE6]/25 bg-[#5E5CE6]/[0.03]"
                    : "border-[#232329]"
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span className="text-sm font-semibold text-[#F7F8F8]">{p.title}</span>
                      {p.featured && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded border border-[#5E5CE6]/30 text-[#5E5CE6] bg-[#5E5CE6]/10 font-medium tracking-wide">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#4B4C58]">{p.tagline}</p>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full border ${
                      p.status === "live"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                        : p.status === "building"
                        ? "border-[#5E5CE6]/20 bg-[#5E5CE6]/5 text-[#5E5CE6]"
                        : "border-[#232329] text-[#4B4C58]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${meta.dot} ${
                        p.status === "live" ? "animate-pulse" : ""
                      }`}
                    />
                    {meta.label}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-[10px] text-[#4B4C58] mb-1.5">
                    <span>MVP Completion</span>
                    <span className={`font-semibold ${meta.text}`}>{p.mvpProgress}%</span>
                  </div>
                  <div className="h-1 bg-[#232329] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${meta.bar} rounded-full transition-all duration-700`}
                      style={{ width: `${p.mvpProgress}%` }}
                    />
                  </div>
                </div>

                {/* Tags + link */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] text-[#4B4C58] bg-[#1C1C1F] border border-[#232329] rounded px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="text-[9px] text-[#36363F] px-1">+{p.tags.length - 3}</span>
                    )}
                  </div>

                  <a
                    href={ghUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-[#4B4C58] hover:text-[#8A8B97] transition-colors"
                  >
                    <Github size={11} /> GitHub <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-[#232329] flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#5E5CE6] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#7B79F7] transition-colors"
          >
            <Github size={14} /> github.com/sukminc
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-[#232329] text-[#8A8B97] text-sm px-5 py-2.5 rounded-xl hover:border-[#36363F] hover:text-[#F7F8F8] transition-all"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
