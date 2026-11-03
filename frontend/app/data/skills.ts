// ── Icon registry ────────────────────────────────────────────────────────────
// Single source of truth for SimpleIcons slugs + brand hex values.
// Used by: project cards (TechStack), About page (SkillBadge), morning health check.
// Add a new entry here → icons appear everywhere automatically.

export interface TechIcon {
  slug: string; // simpleicons.org slug
  hex: string;  // brand hex without #
}

export const ICON_MAP: Record<string, TechIcon> = {
  // Languages
  "Python":           { slug: "python",          hex: "3776AB" },
  "TypeScript":       { slug: "typescript",       hex: "3178C6" },
  "Dart":             { slug: "dart",             hex: "0175C2" },
  "SQL":              { slug: "postgresql",        hex: "4169E1" },

  // Web & Mobile Frameworks
  "Next.js":          { slug: "nextdotjs",         hex: "FFFFFF" },
  "React":            { slug: "react",             hex: "61DAFB" },
  "FastAPI":          { slug: "fastapi",           hex: "009688" },
  "Flutter":          { slug: "flutter",           hex: "02569B" },
  "Tailwind CSS":     { slug: "tailwindcss",       hex: "06B6D4" },
  "Framer Motion":    { slug: "framer",            hex: "0055FF" },

  // Data & ML Libraries
  "Pandas":           { slug: "pandas",            hex: "150458" },
  "NumPy":            { slug: "numpy",             hex: "013243" },
  "Pytest":           { slug: "pytest",            hex: "0A9EDC" },
  "Playwright":       { slug: "playwright",        hex: "2EAD33" },
  "Selenium":         { slug: "selenium",          hex: "43B02A" },

  // Data Infrastructure
  "Apache Airflow":   { slug: "apacheairflow",     hex: "017CEE" },
  "PostgreSQL":       { slug: "postgresql",        hex: "4169E1" },
  "SQLite":           { slug: "sqlite",            hex: "003B57" },
  "BigQuery":         { slug: "googlebigquery",    hex: "4285F4" },
  "Redshift":         { slug: "amazonredshift",    hex: "391715" },
  "Supabase":         { slug: "supabase",          hex: "3ECF8E" },

  // DevOps & Cloud
  "Docker":           { slug: "docker",            hex: "2496ED" },
  "GitHub Actions":   { slug: "githubactions",     hex: "2088FF" },
  "Jenkins":          { slug: "jenkins",           hex: "D24939" },
  "Vercel":           { slug: "vercel",            hex: "FFFFFF" },
  "Git":              { slug: "git",               hex: "F05032" },
  "GCP":              { slug: "googlecloud",       hex: "4285F4" },
  "AWS":              { slug: "amazonaws",         hex: "FF9900" },

  // AI / APIs
  "Claude API":       { slug: "anthropic",         hex: "D4A27F" },
  "OpenAI":           { slug: "openai",            hex: "412991" },
  "LangChain":        { slug: "langchain",         hex: "1C3C3C" },

  // Services & Tools
  "Stripe":           { slug: "stripe",            hex: "635BFF" },
  "DataDog":          { slug: "datadog",           hex: "632CA4" },
};

// ── Skill groups (About page resume) ─────────────────────────────────────────
// Names here are looked up in ICON_MAP — icons appear where a match exists.
// Text-only items (no ICON_MAP entry) render as plain badges.

export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Test Automation",
    items: [
      "Playwright", "Selenium", "Python", "Pytest", "API Testing",
      "E2E Testing", "Test Strategy", "CI/CD Gates",
    ],
  },
  {
    label: "Data Quality & Reliability",
    items: [
      "SQL", "Apache Airflow", "ETL/ELT Validation",
      "Source-to-Target Reconciliation", "DQ Gates", "Schema Drift",
      "Data Observability", "SOX Reporting Controls",
    ],
  },
  {
    label: "Data Platforms & Cloud",
    items: ["BigQuery", "Redshift", "PostgreSQL", "GCP", "AWS", "Docker"],
  },
  {
    label: "Engineering & Delivery",
    items: ["Jenkins", "GitHub Actions", "Git", "FastAPI", "TypeScript", "Next.js"],
  },
  {
    label: "Leadership",
    items: [
      "Team Leadership", "QA Strategy", "Mentoring",
      "Release Sign-off", "Stakeholder Reporting",
    ],
  },
];

// ── Per-project tech stacks ───────────────────────────────────────────────────
// Names must match ICON_MAP keys for icons to render.
// This drives project card TechStack badges AND the "Live from Projects" section
// on the About page — add a project here → it appears everywhere automatically.

export const TECH_TAGS: Record<string, string[]> = {
  "onepercentbetter":     ["Next.js", "FastAPI", "Python", "PostgreSQL", "Vercel"],
  "bluejays-moneyball":   ["Python", "Apache Airflow", "PostgreSQL", "Docker", "GitHub Actions"],
  "actionkeeper":         ["Python", "TypeScript", "Next.js", "PostgreSQL", "Docker", "Stripe"],
  "onepercent-focus":     ["Flutter", "Dart", "Supabase"],
  "twelvelabs-validator": ["Python", "Pytest"],
};

// All unique tech across all active projects — auto-updates when TECH_TAGS changes
export const ALL_PROJECT_TECH: string[] = [
  ...new Set(Object.values(TECH_TAGS).flat()),
].sort();
