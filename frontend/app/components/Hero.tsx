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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.13),_transparent_72%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#23402e] bg-[linear-gradient(180deg,#12241a_0%,#0c1710_100%)] px-4 py-2 shadow-[inset_0_1px_0_rgba(74,222,128,0.12)]">
          <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#d9ecdf]">
            Senior SDET · Data Quality · Toronto, Canada
          </span>
        </div>

        <h1 className="mt-8 text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.07em] text-[#e9f4ec] sm:text-[5rem] lg:text-[6.8rem]">
          Chris Yoon.<br className="hidden sm:block" /> Senior SDET.<br className="hidden sm:block" /> <span className="text-[#4ade80]">Data Quality.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-[1.05rem] leading-8 text-[#9db3a5] sm:text-[1.15rem]">
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4ade80] bg-[#4ade80] px-5 py-3 text-sm font-semibold text-[#0a0e0c] transition-colors hover:bg-[#22c55e]"
          >
            See experience
            <ArrowRight size={16} />
          </a>
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2b4234] bg-[#0e1a12] px-5 py-3 text-sm font-medium text-[#d9ecdf] transition-colors hover:border-[#4ade80]"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.2rem] border border-[#223128] bg-[#0d130f] shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-2 border-b border-[#1b261e] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-[#7d8f84]">qa_regression — daily run</span>
          </div>
          <div className="px-5 py-4 font-mono text-[12.5px] leading-7 text-[#c9dccd]">
            <p><span className="text-[#4ade80]">$</span> airflow dags trigger qa_regression</p>
            <p><span className="text-[#4ade80]">✓</span> 15+ ETL workflows validated</p>
            <p><span className="text-[#4ade80]">✓</span> reconciliation: source ↔ target matched</p>
            <p><span className="text-[#4ade80]">✓</span> dq gates: all green — no corrupt data shipped</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-[1.5rem] border border-[#223128] bg-[linear-gradient(180deg,rgba(18,26,20,0.96),rgba(11,17,13,0.94))] p-5"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4ade80]">
                {signal.label}
              </p>
              <p className="mt-3 text-[1.05rem] font-semibold tracking-[-0.04em] text-[#e9f4ec]">
                {signal.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#9db3a5]">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
