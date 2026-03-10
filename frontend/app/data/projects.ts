export type ProjectStatus = "live" | "building" | "idea";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  url?: string;        // CTA link (if live)
  featured?: boolean;  // takes wider card
  seed: number;        // baseline interest count
}

export const projects: Project[] = [
  // ── Active Build ───────────────────────────────────────────────────────────
  {
    slug: "onepercentbetter",
    title: "onepercentbetter.poker",
    tagline: "GTO Defends. We Exploit.",
    description:
      "Full-stack poker analytics platform. Parses GGPoker hand histories, quantifies opponent GTO deviations, and surfaces bb/100 exploit edges by position. The backend analytical engine is live — UI is next.",
    status: "building",
    tags: ["Poker", "Analytics", "FastAPI", "Next.js"],
    url: "https://buymeacoffee.com/chris.yoon",
    featured: true,
    seed: 47,
  },

  // ── Shipped ────────────────────────────────────────────────────────────────
  {
    slug: "actionkeeper",
    title: "ActionKeeper",
    tagline: "DocuSign for poker staking.",
    description:
      "Mobile-first staking agreement app. Players and backers draft terms, negotiate turn-by-turn, and lock in a tamper-evident PDF receipt — cryptographically hashed, QR-verifiable. Never holds funds. Revenue on contract generation via Stripe.",
    status: "building",
    tags: ["Poker", "Fintech", "FastAPI", "Next.js", "Stripe"],
    url: "https://buymeacoffee.com/chris.yoon",
    seed: 31,
  },
  {
    slug: "stackvision",
    title: "StackVision",
    tagline: "Point your camera. Know your stack.",
    description:
      "Augmented reality poker chip counter. Overlay your phone camera on any chip stack and get an instant count — no manual math, no mistakes under pressure.",
    status: "idea",
    tags: ["Poker", "AR", "Mobile", "Computer Vision"],
    seed: 24,
  },

  // ── Data Engineering ───────────────────────────────────────────────────────
  {
    slug: "bluejays-moneyball",
    title: "Blue Jays Moneyball",
    tagline: "Production ETL meets sabermetrics. If the data's bad, the pipeline dies.",
    description:
      "End-to-end Data Lakehouse on Apache Airflow + PostgreSQL. Ingests MLB salary vs. performance data, runs a fail-fast DQ gate that hard-blocks bad payloads, and a regression suite that verifies the guardrails themselves — the same architecture pattern I used at TheScore.",
    status: "live",
    tags: ["Data Engineering", "Airflow", "PostgreSQL", "ETL", "Python"],
    url: "https://github.com/sukminc/bluejays-financial-mlops",
    seed: 18,
  },
  {
    slug: "twelvelabs-validator",
    title: "TwelveLabs API Validator",
    tagline: "JSON-driven. CI-ready. Reliability-first SDK framework.",
    description:
      "Modular Python framework for validating TwelveLabs' multimodal video search SDK. Decouples test logic from data via JSON configs, ships a custom GUI batch runner, and covers i18n edge cases (Korean, Japanese, Arabic). Built to the same standard as a production observability tool.",
    status: "live",
    tags: ["Python", "pytest", "AI APIs", "SDK Engineering", "Automation"],
    url: "https://github.com/sukminc/TwelveLabs",
    seed: 12,
  },
];
