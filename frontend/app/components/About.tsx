import { ExternalLink } from "lucide-react";

const timeline = [
  {
    period: "2025 — Now",
    role: "Independent Projects",
    company: "Personal projects",
    detail:
      "Building OPB Poker — a poker analytics platform with a three-layer PostgreSQL data pipeline (raw → normalized → derived), built TDD-first with Pytest regression suites and Playwright E2E — alongside a backend-first LLM project studying prompts, tool calls, and evaluation. Personal projects, kept clearly separate from my employment history.",
    active: true,
  },
  {
    period: "2023 — 2025",
    role: "Data QA Architect",
    company: "theScore",
    detail:
      "Designed and operated the QA framework guarding theScore's betting data: a QA regression DAG in Airflow that I proposed and promoted to production, source-to-target reconciliation across BigQuery and Redshift, and SOX-facing reporting controls over millions of daily transactions.",
    active: false,
  },
  {
    period: "2021 — 2023",
    role: "Tech Lead",
    company: "QA Consultants",
    detail:
      "Led a five-person data quality team delivering data-migration automation for health-claims data — scanned claims from multiple U.S. states, normalized and promoted to a validated gold layer in GCP.",
    active: false,
  },
  {
    period: "2020 — 2021",
    role: "Data QA Team Lead",
    company: "QA Consultants",
    detail:
      "Led a three-person QA team embedded in Data Engineering during an enterprise AWS-to-GCP migration across four data business units, with source-to-target SQL reconciliation and automated ETL validation at daily checkpoints.",
    active: false,
  },
  {
    period: "2014 — 2020",
    role: "QA & Data Migration Roles",
    company: "Avesis · Expedia Group · Wisetail",
    detail:
      "Data-migration automation at Avesis (scanned health data from multiple states into GCP) and software QA roles at Expedia Group and Wisetail. ISTQB CTFL certified.",
    active: false,
  },
];

const tools = [
  "Python · SQL",
  "Playwright · Selenium",
  "Apache Airflow",
  "BigQuery · Redshift · PostgreSQL",
  "Jenkins · Docker",
  "FastAPI",
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-20">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#4ade80]">
            About
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#e9f4ec] sm:text-5xl md:text-6xl">
            Senior SDET.<br className="hidden sm:block" /> Data Quality.<br className="hidden sm:block" /> Test Automation.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#9db3a5] sm:text-lg">
            I&apos;m Chris Yoon, a Toronto-based Senior SDET and Data Quality
            engineer with 10+ years across QA, test automation, and data
            reliability. I design and operate the automation frameworks and
            quality controls that prove software and data are correct.
            Korean (native) · English (fluent).
          </p>
        </div>

        {/* Two-column: timeline + sidebar */}
        <div className="grid gap-12 lg:grid-cols-[1fr_260px]">

          {/* Timeline */}
          <div className="relative pl-7">
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#223128]" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative mb-10 pb-10 border-b border-[#223128] last:border-0 last:pb-0 last:mb-0"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-7 top-[6px] h-3 w-3 rounded-full border-2 border-[#4ade80] ${
                    item.active ? "bg-[#4ade80]" : "bg-[#223128]"
                  }`}
                />

                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4ade80]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#e9f4ec]">
                  {item.role}
                </h3>
                <p className="text-sm text-[#4ade80] mt-0.5">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-[#9db3a5]">
                  {item.detail}
                </p>

                {item.active && (
                  <div className="mt-5">
                    <a
                      href="https://onepercentbetter.poker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#4ade80] bg-[#4ade80] px-4 py-2 text-xs font-semibold text-[#0a0e0c] transition-colors hover:bg-[#22c55e]"
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

            {/* Core stack */}
            <div className="rounded-[1.5rem] border border-[#223128] bg-[linear-gradient(180deg,rgba(18,26,20,0.96),rgba(11,17,13,0.94))] p-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4ade80]">
                Core stack
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="text-sm text-[#d9ecdf] border-l-2 border-[#23402e] pl-3"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Open to */}
            <div className="rounded-[1.5rem] border border-[#223128] bg-[linear-gradient(180deg,rgba(18,26,20,0.96),rgba(11,17,13,0.94))] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#4ade80]">
                  Open to
                </p>
              </div>
              <p className="text-sm leading-6 text-[#e9f4ec]">
                Senior SDET<br />QA Automation<br />Data Quality &amp; Reliability<br />QA Lead / Manager
              </p>
              <p className="mt-3 text-xs leading-5 text-[#9db3a5]">
                Toronto · GTA · Canada remote
              </p>
              <div className="mt-4 flex flex-col gap-1.5">
                <a
                  href="https://linkedin.com/in/sukminyoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/sukminc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href="mailto:sukminc@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4ade80] hover:text-[#4ade80] transition-colors"
                >
                  sukminc@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
