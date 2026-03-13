export type ProjectStatus = "live" | "building" | "idea";
export type ProjectRepoType = "mobile-app" | "web-app" | "automation" | "platform" | "data-pipeline" | "validation";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  repoType: ProjectRepoType;
  tags: string[];
  url?: string;
  featured?: boolean;
  seed: number;
  mvpEta?: string;
  repoName?: string;   // GitHub repo name under sukminc/ (omit if no repo)
}

export const projects: Project[] = [
  {
    slug: "opb-today",
    repoName: "one-percent-better-today",
    title: "1% Better Today",
    tagline: "A tiny daily reset for staying in motion.",
    description:
      "A tiny daily reset app built to ship quickly and prove the loop: one action, one tap, no guilt, no setup friction. This is the kind of product 1% Better is focused on right now: small, clear, and easy to release.",
    status: "building",
    repoType: "mobile-app",
    tags: ["FastAPI", "Supabase", "Stripe", "iOS", "Android"],
    url: "https://github.com/sukminc/one-percent-better-today",
    featured: true,
    seed: 74,
    mvpEta: "Target MVP: April 2026",
  },
  {
    slug: "onepercentbetter",
    repoName: "one-percent-better-poker",
    title: "1% Better Edge",
    tagline: "A deeper decision-support product still in the idea phase.",
    description:
      "A longer-horizon analytics product where model-driven signals and LLM-assisted workflows may eventually converge. Important to the bigger story, but not the primary focus of this landing page right now.",
    status: "idea",
    repoType: "platform",
    tags: ["Next.js", "FastAPI", "SQLAlchemy", "Pandas", "NumPy", "Vercel"],
    url: "https://onepercentbetter.poker",
    seed: 47,
    mvpEta: "Target MVP: June 2026",
  },
  {
    slug: "opb-os",
    repoName: "one-percent-better-os",
    title: "1% Better OS",
    tagline: "Workflow automation for repeatable project shipping.",
    description:
      "An internal operating system for the 1% Better build loop. It already scaffolds new projects, audits sprint windows, syncs landing-page entries, checks README quality, and generates weekly operating reviews so the portfolio stays current without manual drift.",
    status: "building",
    repoType: "automation",
    tags: ["Python", "GitHub Actions", "JSON", "CLI"],
    url: "https://github.com/sukminc/one-percent-better-os",
    seed: 56,
    mvpEta: "Target MVP: March 2026",
  },
  {
    slug: "bluejays-moneyball",
    repoName: "bluejays-financial-mlops",
    title: "Blue Jays Moneyball ETL",
    tagline: "Production-Grade ELT & Self-Validating Pipeline",
    description:
      "Airflow + PostgreSQL pipeline integrating Spotrac payroll vs. MLB stats; DQ gates block all downstream transformation until checks pass — no silent failures. Regression DAG fires known-bad datasets against DQ gates, asserting failure — guardrails are CI/CD citizens that break the build if the safety net breaks.",
    status: "live",
    repoType: "data-pipeline",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "GitHub Actions"],
    url: "https://github.com/sukminc/bluejays-financial-mlops",
    seed: 18,
  },
  {
    slug: "actionkeeper",
    repoName: "one-percent-better-poker-staking",
    title: "ActionKeeper",
    tagline: "Structured deal workflows for trust-heavy decisions.",
    description:
      "A structured workflow product for offers, counters, and agreement tracking. More mature than a sketch, still early enough that it belongs in the second-wave bucket rather than the current hero story.",
    status: "idea",
    repoType: "platform",
    tags: ["Python (FastAPI)", "TypeScript (Next.js)", "PostgreSQL", "Docker", "Stripe"],
    url: "https://github.com/sukminc/one-percent-better-poker-staking",
    seed: 31,
    mvpEta: "Target MVP: July 2026",
  },
  {
    slug: "onepercent-focus",
    repoName: "one-percent-better-focus",
    title: "1% Better Focus",
    tagline: "A lightweight focus timer built to ship fast.",
    description:
      "A lightweight focus timer built as a fast-release product: simple loop, clear value, and low friction. It represents the current 1% Better thesis better than the deeper products do.",
    status: "building",
    repoType: "mobile-app",
    tags: ["Flutter", "Dart", "Supabase", "iOS", "Android"],
    url: "https://github.com/sukminc/one-percent-better-focus",
    seed: 63,
    mvpEta: "Target MVP: March 2026",
  },
  {
    slug: "twelvelabs-validator",
    repoName: "TwelveLabs",
    title: "TwelveLabs API Validator",
    tagline: "Multimodal Search Validation Framework",
    description:
      "JSON-driven validation suite for TwelveLabs multimodal video search API — decouples test logic from test data; covers linguistic edge cases (plurals, i18n: Korean/Japanese/Arabic), fuzzy matching, and injection attempts. Built to the same standard as a production observability tool.",
    status: "live",
    repoType: "validation",
    tags: ["Python", "TwelveLabs", "Pytest"],
    url: "https://github.com/sukminc/TwelveLabs",
    seed: 12,
  },
];
