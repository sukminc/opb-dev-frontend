"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

const notes = [
  "Shipping simple ideas fast is the current point.",
  "The funding page exists to buy time to keep learning and building.",
  "The poker products are still early and not the headline right now.",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:pb-24">
      <div className="absolute inset-0 paper-grid opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd8cf] bg-[#fbfaf7] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#5f5a52]">
              one core value
            </span>
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-[#111111] sm:text-7xl lg:text-[6.1rem] lg:leading-[0.95]">
            Ship small.
            <br />
            Learn fast.
            <br />
            Keep going.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5f5a52] sm:text-xl">
            onepercentbetter started from a poker idea, but right now it is a
            product studio for fast learning loops: simple apps, LLM experiments,
            and public reps that make the next build better than the last one.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8b857b]">
            Built by{" "}
            <a
              href="https://linkedin.com/in/sukminyoon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] underline decoration-[#b9b2a7] underline-offset-4 transition-colors hover:text-[#5f5a52]"
            >
              Chris S. Yoon
            </a>
            . Senior data engineer, currently in a learn-fast season, using this
            page to ship ideas quickly while buying runway for what comes next.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-[#f5f3ef] transition-colors hover:bg-[#2d2d2d]"
            >
              See what&apos;s shipping
              <ArrowDown size={15} />
            </a>
            <a
              href="#fund"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#d0c8bc] bg-[#fbfaf7] px-5 py-3 text-sm text-[#111111] transition-colors hover:border-[#b9b2a7] hover:bg-[#f1efea]"
            >
              Why this page exists
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
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
                  Better every cycle is a strategy, not a slogan.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
                  2
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  Tracks in progress: today&apos;s simple apps and tomorrow&apos;s deeper products.
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[#111111]">
                  Now
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a52]">
                  Focus and 1% Better Today are about shipping fast and learning in public.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#8b857b]">
              What changes next
            </p>
            <div className="mt-5 flex flex-col gap-4">
              {notes.map((note, index) => (
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
