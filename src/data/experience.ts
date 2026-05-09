import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Linear",
    role: "Staff Frontend Engineer",
    period: "2023 — Present",
    location: "Remote",
    logo: "L",
    description:
      "Leading the web platform team. Architecting realtime collaboration primitives and the next-gen editor.",
    bullets: [
      "Shipped a CRDT-based realtime cursor system with <40ms perceived latency.",
      "Reduced bundle size 38% via route-level islands and aggressive code-splitting.",
      "Mentored 6 engineers; led performance and a11y guilds.",
    ],
    tech: ["React", "TypeScript", "Rust/WASM", "Y.js", "GraphQL"],
    current: true,
  },
  {
    company: "Vercel",
    role: "Senior Software Engineer",
    period: "2020 — 2023",
    location: "Remote",
    logo: "V",
    description:
      "Worked on the Vercel dashboard, deploy pipeline UI, and the open-source Next.js core team.",
    bullets: [
      "Built the streaming logs UI used by 1M+ developers.",
      "Contributed App Router primitives and Server Actions DX.",
      "Owned analytics dashboards rendering 200M+ datapoints.",
    ],
    tech: ["Next.js", "React", "Turbopack", "PostgreSQL"],
    current: false,
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    period: "2018 — 2020",
    location: "San Francisco, CA",
    logo: "S",
    description:
      "Payments dashboard and developer experience. Owned the migration from Backbone to React.",
    bullets: [
      "Migrated 280k LoC from Backbone to React with zero downtime.",
      "Co-authored the Stripe Elements v3 design language.",
      "Cut p95 dashboard load time from 3.2s to 700ms.",
    ],
    tech: ["React", "Ruby", "GraphQL", "Sorbet"],
    current: false,
  },
  {
    company: "Independent",
    role: "Freelance Designer & Engineer",
    period: "2016 — 2018",
    location: "Lisbon, PT",
    logo: "•",
    description:
      "Designed and shipped MVPs for early-stage startups across fintech, climate, and consumer.",
    bullets: [
      "Shipped 14 MVPs end-to-end (design → infra).",
      "3 portfolio companies raised seed rounds totaling $11M.",
    ],
    tech: ["React", "Node", "Figma", "AWS"],
    current: false,
  },
];
