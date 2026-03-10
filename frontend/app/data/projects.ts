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
  {
    slug: "onepercentbetter",
    title: "onepercentbetter.poker",
    tagline: "GTO Defends. We Exploit.",
    description:
      "Full-stack poker analytics platform. Parses GGPoker hand histories, quantifies opponent GTO deviations, and surfaces bb/100 exploit edges by position.",
    status: "live",
    tags: ["Poker", "AI", "Analytics", "FastAPI"],
    url: "https://buymeacoffee.com/chris.yoon",
    featured: true,
    seed: 47,
  },
  // ── Add your next ideas below ──────────────────────────────────────────────
  // {
  //   slug: "your-idea-slug",
  //   title: "Your Idea Title",
  //   tagline: "One-liner pitch",
  //   description: "2-3 sentence description of the problem and solution.",
  //   status: "idea",
  //   tags: ["Tag1", "Tag2"],
  //   seed: 0,
  // },
];
