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
}

export const projects: Project[] = [
  {
    slug: "private-ai-poker-backend",
    title: "Private AI Poker Backend",
    tagline: "Current main build in poker, rebuilt from the foundation up to support backend truth, memory, and product iteration.",
    description:
      "A private poker performance system focused on session ingestion, cumulative memory, runtime outputs, and reviewable product logic. The public surface shows the technical depth, not the private strategy.",
    status: "building",
    repoType: "platform",
    category: "featured",
    stage: "workflow-build",
    tags: ["Python", "PostgreSQL", "FastAPI", "Pytest", "JSON"],
    featured: true,
    url: "https://onepercentbetter.poker",
    visibility: "private",
    mvpEta: "Private build · technical proof only",
  },
  {
    slug: "opb-today",
    repoName: "opb-dev-today",
    title: "1% Better Today",
    tagline: "A smaller daily product loop that now sits behind the current main build.",
    description:
      "A narrow loop still worth showing, but no longer the center of the public story now that the poker backend has become the main focus.",
    status: "building",
    repoType: "mobile-app",
    category: "secondary",
    stage: "prototype",
    tags: ["FastAPI", "Supabase", "Stripe", "iOS", "Android"],
    visibility: "private",
    mvpEta: "Target MVP: April 2026",
  },
  {
    slug: "this-website",
    repoName: "opb-dev-frontend",
    title: "1% Better - This Website",
    tagline: "The public front door for hiring, trust, and the whole shipping story.",
    description:
      "The live portfolio surface itself. Part frontend product, part operating layer, and part proof that the build loop is real and active in public for recruiters and hiring managers.",
    status: "live",
    repoType: "web-app",
    category: "ops",
    stage: "ops-layer",
    tags: ["Next.js", "TypeScript", "Vercel"],
    url: "https://github.com/sukminc/opb-dev-frontend",
    visibility: "public",
  },
  {
    slug: "opb-os",
    repoName: "opb-os",
    title: "1% Better - OS",
    tagline: "Workflow automation for repeatable project shipping.",
    description:
      "An internal operating system for the 1% Better build loop. It keeps the portfolio and recruiter-facing surfaces current without manual drift, while staying clearly internal.",
    status: "live",
    repoType: "automation",
    category: "ops",
    stage: "ops-layer",
    tags: ["Python", "GitHub Actions", "JSON", "CLI"],
    url: "https://github.com/sukminc/opb-os",
    visibility: "internal",
    readinessSignals: ["Workflow engine active", "Landing sync in use", "Weekly ops layer running"],
  },
  {
    slug: "bluejays-moneyball",
    repoName: "deng-bluejays-financial",
    title: "Blue Jays Moneyball ETL",
    tagline: "Archive of data engineering work and pipeline thinking.",
    description:
      "An archive project that captures data engineering work: Airflow orchestration, PostgreSQL modeling, and testable pipeline quality gates. It stays on the site as proof of craft, not as an active product line.",
    status: "live",
    repoType: "data-pipeline",
    category: "archive",
    stage: "archive",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "GitHub Actions"],
    url: "https://github.com/sukminc/deng-bluejays-financial",
    visibility: "public",
  },
  {
    slug: "onepercent-focus",
    repoName: "opb-dev-focus",
    title: "1% Better - Focus",
    tagline: "A lightweight focus timer kept as a secondary build rather than the current main focus.",
    description:
      "A supporting product loop that still shows scope control and shipping instinct, but it is no longer the main build driving the story.",
    status: "building",
    repoType: "mobile-app",
    category: "secondary",
    stage: "mvp-loop",
    tags: ["Flutter", "Dart", "Supabase", "iOS", "Android"],
    url: "https://github.com/sukminc/opb-dev-focus",
    visibility: "public",
    mvpEta: "Target MVP: Q2 2026",
  },
  {
    slug: "twelvelabs-validator",
    repoName: "sdet-twelvelabs",
    title: "TwelveLabs API Validator",
    tagline: "Interview challenge archive for multimodal API validation.",
    description:
      "A technical interview challenge delivered as a serious validation suite. Useful as proof of engineering quality, but it is an archive item rather than a live brand product.",
    status: "live",
    repoType: "validation",
    category: "archive",
    stage: "archive",
    tags: ["Python", "TwelveLabs", "Pytest"],
    url: "https://github.com/sukminc/sdet-twelvelabs",
    visibility: "public",
  },
];
