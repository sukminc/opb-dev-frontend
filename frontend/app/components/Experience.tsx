interface Role {
  period: string;
  title: string;
  company: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    period: "Jul 2023 — Jun 2025",
    title: "Data QA Architect",
    company: "theScore",
    bullets: [
      "Proposed, designed, and implemented a QA regression DAG in Apache Airflow — promoted to production — running parallel Python/SQL validation checks across 15+ ETL workflows.",
      "Operated Airflow pipelines across BigQuery and Redshift processing millions of daily sports-betting transactions, including bets placed at self-service retail kiosks, validated from terminal to backend.",
      "Built source-to-target reconciliation with critical-failure gates and real-time Slack alerting, so corrupt or incomplete data never reached downstream reporting.",
      "Delivered SQL/Python reconciliation pipelines for SOX-facing financial and regulatory reporting, with audit-ready exception handling and release evidence.",
    ],
  },
  {
    period: "Apr 2021 — Mar 2023",
    title: "Tech Lead",
    company: "QA Consultants",
    bullets: [
      "Led a five-person data quality team delivering data-migration automation for health-claims data.",
      "Designed a QA framework for scanned extended-health claims collected across multiple U.S. states — template comparison, field normalization, and promotion to a validated gold layer in GCP.",
      "Built Python and SQL automation suites that bulk-processed legacy PHI claims into clean, verified datasets for client handoff.",
    ],
  },
  {
    period: "Feb 2020 — Apr 2021",
    title: "Data QA Team Lead",
    company: "QA Consultants",
    bullets: [
      "Led a three-person QA team embedded within Data Engineering during an enterprise AWS-to-GCP migration spanning four data business units.",
      "Established source-to-target SQL reconciliation pipelines and automated ETL validation at daily checkpoints, validating millions of delivered records.",
      "Supplied the concrete test evidence used for final release sign-off.",
    ],
  },
  {
    period: "2014 — 2020",
    title: "QA & Data Migration Roles",
    company: "Avesis · Expedia Group · Wisetail",
    bullets: [
      "Data-migration automation at Avesis, moving scanned health-related data from multiple states into GCP.",
      "Software QA roles at Expedia Group and Wisetail — the foundation in test design and automation that everything since builds on.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-16 px-6">
      <div className="relative mx-auto max-w-5xl">
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#2d6a47]">
          Experience
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl">
          Where I&apos;ve worked, what I owned.
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.title}`}
              className="glass-panel rounded-[1.8rem] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight text-[#111111]">
                  {role.title}
                  <span className="text-[#2d6a47]"> · {role.company}</span>
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#2d6a47]">
                  {role.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 32)}
                    className="flex gap-3 text-sm leading-7 text-[#5f5a52]"
                  >
                    <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d6a47]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#8a6f50]">
          QA since 2014 · ISTQB CTFL certified · Chemical Engineering studies,
          University of Waterloo · Korean (native) · English (fluent)
        </p>
      </div>
    </section>
  );
}
