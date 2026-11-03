import { ArrowRight, ArrowUpRight } from "lucide-react";

const signals = [
  {
    label: "Experience",
    value: "10+ years",
    detail: "QA, SDET / test automation, and data quality — Expedia, QA Consultants, theScore.",
  },
  {
    label: "Most recently",
    value: "Data QA Architect",
    detail: "theScore (2023–2025) — Airflow QA regression framework promoted to production; SOX-facing reconciliation.",
  },
  {
    label: "Based in",
    value: "Toronto, Canada",
    detail: "Open to Toronto/GTA and Canada-remote roles. Korean (native) · English (fluent).",
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
            Senior SDET · Data Quality · Toronto, Canada
          </span>
        </div>

        <h1 className="mt-8 text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.07em] text-[#111111] sm:text-[5rem] lg:text-[6.8rem]">
          Chris Yoon.<br className="hidden sm:block" /> Senior SDET.<br className="hidden sm:block" /> Data Quality.
        </h1>

        <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#5f5a52] sm:text-[1.15rem]">
          10+ years across QA, test automation, and data quality — most recently
          Data QA Architect at theScore, where I designed the QA regression
          framework (Airflow, Python, SQL) that guarded millions of daily
          betting transactions across BigQuery and Redshift. I design and
          operate the automation frameworks and quality controls that let teams
          ship data they can trust.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a3a2e] bg-[#1a3a2e] px-5 py-3 text-sm font-medium text-[#f2faf6] transition-colors hover:bg-[#24523a]"
          >
            See experience
            <ArrowRight size={16} />
          </a>
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9abfb0] bg-[linear-gradient(180deg,#f2faf6_0%,#ddf0e8_100%)] px-5 py-3 text-sm font-medium text-[#1a3a2e] transition-colors hover:border-[#5a9a78]"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
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
