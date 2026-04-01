import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const signals = [
  {
    label: "Background",
    value: "10+ years",
    detail: "QA → SDET / automation → Data Engineering at theScore / ESPN Bet.",
  },
  {
    label: "Building with",
    value: "AI tools",
    detail: "Claude Code, Codex, and the full AI-assisted dev loop — learning in public.",
  },
  {
    label: "Current build",
    value: "opb-poker",
    detail: "A poker performance backend I built because the right tool didn't exist.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-24 sm:pb-16 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-20 sm:opacity-24" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_72%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#aacfbe] bg-[linear-gradient(180deg,#f2faf6_0%,#d8f0e4_100%)] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <span className="h-2 w-2 rounded-full bg-[#2d6a47]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#1a3a2e]">
            engineer. builder. obsessed.
          </span>
        </div>

        <h1 className="mt-8 text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.07em] text-[#111111] sm:text-[5rem] lg:text-[6.8rem]">
          AI builder.<br className="hidden sm:block" /> Data engineer.<br className="hidden sm:block" /> Building in public.
        </h1>

        <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#5f5a52] sm:text-[1.15rem]">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] underline decoration-[#7abba0] underline-offset-4 transition-colors hover:text-[#1a3a2e]"
          >
            Chris S. Yoon
          </a>
          . 10 years across QA, SDET / automation, and Data Engineering — now using AI tools to build products I actually want to use.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a3a2e] bg-[#1a3a2e] px-5 py-3 text-sm font-medium text-[#f2faf6] transition-colors hover:bg-[#24523a]"
          >
            See the work
            <ArrowRight size={16} />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9abfb0] bg-[linear-gradient(180deg,#f2faf6_0%,#ddf0e8_100%)] px-5 py-3 text-sm font-medium text-[#1a3a2e] transition-colors hover:border-[#5a9a78]"
          >
            Background
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-[1.5rem] border border-[#bdd8ca] bg-[linear-gradient(180deg,rgba(242,250,246,0.96),rgba(216,240,228,0.92))] p-5"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#2d6a47]">
                {signal.label}
              </p>
              <p className="mt-3 text-[1.05rem] font-semibold tracking-[-0.04em] text-[#111111]">
                {signal.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#5f5a52]">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
