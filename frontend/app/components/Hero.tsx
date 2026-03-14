import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BrandMark from "./BrandMark";

const signals = [
  {
    label: "Role",
    value: "Senior Data Engineer",
    detail: "Shipping small product loops while staying sharp on production systems.",
  },
  {
    label: "Mode",
    value: "Build in public",
    detail: "Use visible work to create signal instead of waiting for a perfect launch.",
  },
  {
    label: "Focus",
    value: "Useful first",
    detail: "Tight scope, fast feedback, and enough clarity to ship again tomorrow.",
  },
];

const principles = [
  "Keep the product small enough to ship before it turns into a systems project.",
  "Use this site as the public trust layer for hiring, product, and next-step conversations.",
  "Let each new release earn more surface area instead of claiming it early.",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-30 sm:pb-24 sm:pt-34">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-24 sm:opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_72%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-20 hidden h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(111,98,80,0.12),_transparent_68%)] lg:block" />
      <div className="pointer-events-none absolute left-[-10rem] bottom-[-12rem] hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.55),_transparent_68%)] lg:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd3c6] bg-[#fbf7f0] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#111111]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#6f6250]">
                public build surface
              </span>
            </div>
            <h1 className="mt-8 max-w-5xl text-[3.45rem] font-semibold leading-[0.92] tracking-[-0.08em] text-[#111111] sm:text-[4.6rem] lg:text-[6.2rem]">
              Build useful things in public.
            </h1>

            <p className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-[#5f5a52] sm:text-[1.18rem]">
              1% Better.dev is the public layer for my next season of work:
              small products, fast feedback loops, and visible execution that
              creates real signal for hiring, product, and future bets.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7f7569]">
              Built by{" "}
              <a
                href="https://linkedin.com/in/sukminyoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] underline decoration-[#b9b2a7] underline-offset-4 transition-colors hover:text-[#5f5a52]"
              >
                Chris S. Yoon
              </a>
              . Senior data engineer using this surface to keep shipping while
              the next role, product, and operating system take shape.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111111] bg-[#111111] px-5 py-3 text-sm font-medium text-[#fbf7f0] transition-colors hover:bg-[#252525]"
              >
                See current work
                <ArrowRight size={16} />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2c7b6] bg-[#fbf7f0] px-5 py-3 text-sm font-medium text-[#111111] transition-colors hover:border-[#b9b2a7] hover:bg-[#f4eee5]"
              >
                Read the story
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {signals.map((signal) => (
                <div key={signal.label} className="rounded-[1.5rem] border border-[#ddd3c6] bg-[#fbf7f0]/92 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8b857b]">
                    {signal.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[#111111]">
                    {signal.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                    {signal.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="glass-panel overflow-hidden rounded-[2.5rem] border px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8b857b]">
                    one percent, repeated
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-3xl">
                    Small enough to ship. Strong enough to mean something.
                  </h2>
                </div>
                <span className="hidden rounded-full border border-[#ddd3c6] bg-[#f7f0e4] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#7d6850] sm:inline-flex">
                  1% Better.dev
                </span>
              </div>

              <div className="mt-8 flex justify-center rounded-[2.4rem] border border-[#ddd3c6] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(247,240,228,0.94)_58%,_rgba(241,231,216,0.92)_100%)] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:px-8 lg:justify-start">
                <BrandMark size="hero" showWordmark={true} subtitle="dev · ship small. learn fast." />
              </div>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#5f5a52] sm:text-[15px]">
                The brand is not about motivational copy. It is about a working
                pace: keep the surface simple, ship the useful version first, and
                let repeated proof build trust over time.
              </p>

              <div className="mt-8 space-y-4">
                {principles.map((principle, index) => (
                  <div key={principle} className="flex gap-4 border-t border-[#e8e0d4] pt-4 first:border-t-0 first:pt-0">
                    <span className="w-7 flex-shrink-0 text-xs font-mono text-[#8b857b]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-[#5f5a52]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8b857b]">
              Current thesis
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
                  1%
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  Improvement is a compounding operating system, not branding theater.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
                  Useful
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  The first version should help someone before it tries to impress everyone.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
                  Visible
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  Public proof matters because it shortens the distance between idea and trust.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8b857b]">
              Scope control
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {[
                "Keep poker as a separate specialist vertical until it earns more brand surface.",
                "Use the landing page as a clean hiring, product, and credibility layer.",
                "Let the operating system stay underneath the brand instead of dominating it.",
              ].map((note, index) => (
                <div key={note} className="flex gap-4 border-t border-[#ebe5db] pt-4 first:border-t-0 first:pt-0">
                  <span className="text-xs font-mono text-[#8b857b]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-[#5f5a52]">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
