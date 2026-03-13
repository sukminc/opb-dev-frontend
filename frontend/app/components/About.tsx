"use client";

import { ArrowUpRight } from "lucide-react";

const experience = [
  {
    company: "onepercentbetter",
    role: "Founder",
    period: "2025 - Present",
    summary:
      "Using this studio as a live learning loop for LLMs, product iteration, and fast deployment.",
  },
  {
    company: "TheScore / ESPN Bet",
    role: "Senior Data Engineer",
    period: "2023 - 2025",
    summary:
      "Built and maintained data pipelines, observability tooling, and reporting systems for high-volume betting operations.",
  },
  {
    company: "Earlier roles",
    role: "Data / QA / Automation",
    period: "2016 - 2023",
    summary:
      "Spent years building the habits that still shape this work: validate the data, automate the pain, and ship carefully.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8b857b]">
            About
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            This is a working season, not a finished story.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-[#5f5a52]">
            <p>
              I built data systems for over a decade, most recently as a senior
              data engineer at TheScore / ESPN Bet. After that chapter, I started
              using onepercentbetter as a place to keep moving: learn LLMs, ship
              simple apps quickly, and turn ideas into real product reps instead
              of waiting for perfect conditions.
            </p>
            <p>
              The original domain came from a poker product idea. That part of the
              story is still there, but it is not the main thing I want this page
              to communicate right now. The poker apps are early. The more honest
              story is that I am building small, fast, useful things while I create
              runway for the next chapter.
            </p>
            <p>
              That is also why the funding page exists. It is not startup theater.
              It is a practical way to keep learning, keep deploying, and keep the
              momentum alive while I look for a job or a more durable revenue path.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Core value
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              One percent better.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              Small improvements, repeated often enough, become direction.
            </p>
          </div>
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Right now
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              Fast shipping.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              Focus and 1% Better Today are lightweight products meant to get out
              fast and teach me something immediately.
            </p>
          </div>
          <div className="glass-panel rounded-[1.6rem] p-6">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
              Later
            </p>
            <p className="mt-4 text-lg font-medium text-[#111111]">
              Deeper bets.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5f5a52]">
              If income or runway improves, I expect to return to the poker-side
              products with more focus and more patience.
            </p>
          </div>
        </div>

        <div className="mt-10 glass-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#8b857b]">
            Experience
          </p>
          <div className="mt-8 space-y-6">
            {experience.map((item) => (
              <div key={item.company} className="border-t border-[#ebe5db] pt-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-medium text-[#111111]">{item.company}</p>
                    <p className="text-sm text-[#5f5a52]">{item.role}</p>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#8b857b]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#5f5a52]">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-[#f5f3ef] transition-colors hover:bg-[#2d2d2d]"
          >
            Connect on LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#ddd8cf] px-5 py-3 text-sm text-[#5f5a52] transition-colors hover:border-[#b9b2a7] hover:text-[#111111]"
          >
            View GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
