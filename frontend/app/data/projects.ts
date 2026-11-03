export type ProjectStatus = "live" | "building" | "idea";
export type ProjectRepoType = "mobile-app" | "web-app" | "automation" | "platform" | "data-pipeline" | "validation";
export type ProjectCategory = "featured" | "secondary" | "ops" | "archive";
export type ProjectStage = "prototype" | "mvp-loop" | "workflow-build" | "concept" | "ops-layer" | "archive";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  repoType: ProjectRepoType;
  category: ProjectCategory;
  stage: ProjectStage;
  tags: string[];
  url?: string;
  featured?: boolean;
  mvpEta?: string;
  visibility?: "public" | "private" | "internal";
  readinessSignals?: string[];
  repoName?: string;   // GitHub repo name under sukminc/ (omit if no repo)
  technicalProof?: string[];   // bullet points for featured card (poker)
  productWhy?: string;         // "why I built this" shown on featured card
}

export const projects: Project[] = [
  {
    slug: "private-ai-poker-backend",
    title: "OPB Poker",
    tagline: "Personal project: a poker performance backend with a three-layer data pipeline (raw → normalized → derived) over an entity-centric PostgreSQL schema. TDD-first build with deterministic output contracts, Pytest regression suites, and operator QA gates.",
    description:
      "Solvers and coaching tell you the right play — but they don't know your patterns. I wanted a system that remembers how I play, identifies what I keep getting wrong, and helps me fix one thing per session. So I built it. It is also where I practice the same data-quality discipline I bring to work: provenance, reconciliation, and testable contracts.",
    status: "building",
    repoType: "platform",
    category: "featured",
    stage: "workflow-build",
    tags: ["Python", "PostgreSQL", "psycopg2", "Pytest", "Playwright", "Supabase", "Next.js", "TypeScript"],
    featured: true,
    url: "https://onepercentbetter.poker",
    visibility: "private",
    mvpEta: "Private build · technical proof only",
    technicalProof: [
      "Ingestion pipeline treats each upload as a session packet: parsed, deduplicated, and reconciled into canonical truth before any derived layer runs — provenance preserved end-to-end.",
      "Entity-centric PostgreSQL schema: player, session, tournament, hand, pattern, and intervention as first-class entities. Raw, normalized, and derived layers kept separate and independently queryable.",
      "TDD-first across the full stack: output contracts defined before implementation, Pytest regression suite from ingestion through runtime serving, Playwright E2E on the consumer surface.",
    ],
    productWhy:
      "I started wanting to build for everyone. Then I realized: I am the tester. I am the audience. If I can't satisfy myself first, I can't satisfy anyone like me.",
  },
  {
    slug: "this-website",
    repoName: "opb-dev-frontend",
    title: "1% Better - This Website",
    tagline: "My portfolio and proof-of-work surface for Senior SDET and Data Quality roles.",
    description:
      "The site you are reading. Rebuilt as a hiring surface — experience first, projects as proof — and maintained by me end to end: Next.js, TypeScript, and Vercel, with a Playwright test suite in CI.",
    status: "live",
    repoType: "web-app",
    category: "ops",
    stage: "ops-layer",
    tags: ["Next.js", "TypeScript", "Vercel"],
    url: "https://github.com/sukminc/opb-dev-frontend",
    visibility: "public",
  },
  {
    slug: "bluejays-moneyball",
    repoName: "deng-bluejays-financial",
    title: "Blue Jays Moneyball ETL",
    tagline: "Data pipeline proof of work: Airflow orchestration and PostgreSQL modeling with testable quality gates.",
    description:
      "An archive project kept on the site so the work can be inspected: pipeline design, PostgreSQL modeling, and quality gates that are testable end to end. Proof of craft, not an active product line.",
    status: "live",
    repoType: "data-pipeline",
    category: "archive",
    stage: "archive",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "GitHub Actions"],
    url: "https://github.com/sukminc/deng-bluejays-financial",
    visibility: "public",
  },
  {
    slug: "twelvelabs-validator",
    repoName: "sdet-twelvelabs",
    title: "TwelveLabs API Validator",
    tagline: "API validation, delivered like production work.",
    description:
      "A technical interview challenge built as a serious validation suite — contract checks, edge cases, and a Pytest harness. Kept as proof of validation craft.",
    status: "live",
    repoType: "validation",
    category: "archive",
    stage: "archive",
    tags: ["Python", "TwelveLabs", "Pytest"],
    url: "https://github.com/sukminc/sdet-twelvelabs",
    visibility: "public",
  },
];
