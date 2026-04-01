import Link from "next/link";
import { ExternalLink } from "lucide-react";

const timeline = [
  {
    period: "2025 — Now",
    role: "AI Builder",
    company: "1% Better",
    detail:
      "Using Claude Code, Codex, and the full AI-assisted dev loop to build products I actually want to exist. Current build: opb-poker — a backend that remembers every session and knows my patterns. I am the target user.",
    active: true,
  },
  {
    period: "2023 — 2025",
    role: "Senior Data Engineer",
    company: "theScore / ESPN Bet",
    detail:
      "Pipelines, observability, and reporting for high-volume betting operations. Correctness and reliability at scale, daily.",
    active: false,
  },
  {
    period: "2016 — 2023",
    role: "QA → SDET / Automation → Data",
    company: "Multiple roles",
    detail:
      "Ten years of evolution across the same core instinct: understand the system before you trust it. QA first, then automation engineering, then data. Each step built on the last.",
    active: false,
  },
];

const tools = [
  "Claude Code",
  "Codex",
  "Python · FastAPI",
  "PostgreSQL",
  "Next.js · TypeScript",
  "Pytest · QA systems",
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-20">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
            About
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-5xl md:text-6xl">
            Engineer. Builder.<br className="hidden sm:block" /> Obsessed.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f5a52] sm:text-lg">
            Ten years across QA, SDET / automation, and data engineering — now
            using AI tools to build products I actually want to use. The
            background informs the build. The obsession drives it.
          </p>
        </div>

        {/* Two-column: timeline + sidebar */}
        <div className="grid gap-12 lg:grid-cols-[1fr_260px]">

          {/* Timeline */}
          <div className="relative pl-7">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#bdd8ca]" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative mb-10 pb-10 border-b border-[#c8ddd4] last:border-0 last:pb-0 last:mb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-7 top-[6px] h-3 w-3 rounded-full border-2 border-[#1a3a2e] ${
                    item.active ? "bg-[#1a3a2e]" : "bg-[#bdd8ca]"
                  }`}
                />

                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#2d6a47]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#111111]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#2d6a47] mt-0.5">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-[#5f5a52]">
                  {item.detail}
                </p>

                {item.active && (
                  <div className="mt-5">
                    <a
                      href="https://onepercentbetter.poker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#1a3a2e] bg-[#1a3a2e] px-4 py-2 text-xs font-medium text-[#f2faf6] transition-colors hover:bg-[#24523a]"
                    >
                      onepercentbetter.poker
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">

            {/* Building with */}
            <div className="rounded-[1.5rem] border border-[#bdd8ca] bg-[linear-gradient(180deg,rgba(242,250,246,0.96),rgba(216,240,228,0.92))] p-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#2d6a47]">
                Building with
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="text-sm text-[#1a3a2e] border-l-2 border-[#aacfbe] pl-3"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Open to */}
            <div className="rounded-[1.5rem] border border-[#bdd8ca] bg-[linear-gradient(180deg,rgba(242,250,246,0.96),rgba(216,240,228,0.92))] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2d6a47] animate-pulse" />
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#2d6a47]">
                  Open to
                </p>
              </div>
              <p className="text-sm leading-6 text-[#111111]">
                AI Product<br />Senior Data<br />Platform roles
              </p>
              <a
                href="https://linkedin.com/in/sukminyoon"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#2d6a47] hover:text-[#1a3a2e] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
