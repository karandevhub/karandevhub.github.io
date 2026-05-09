import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Frontend Mastery",
    icon: "Sparkles",
    items: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "TanStack", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "GSAP", level: 4 },
      { name: "Three.js", level: 3 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    items: [
      { name: "Node.js", level: 5 },
      { name: "Rust", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "Redis", level: 4 },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    items: [
      { name: "Cloudflare", level: 5 },
      { name: "Kubernetes", level: 3 },
      { name: "Terraform", level: 4 },
      { name: "Docker", level: 4 },
    ],
  },
  {
    category: "Tooling & Workflow",
    icon: "Wrench",
    items: [
      { name: "Vite", level: 5 },
      { name: "Vitest", level: 4 },
      { name: "Playwright", level: 4 },
      { name: "Figma", level: 5 },
    ],
  },
  {
    category: "Currently Learning",
    icon: "Compass",
    items: [
      { name: "WebGPU", level: 2 },
      { name: "Zig", level: 2 },
      { name: "DuckDB", level: 3 },
    ],
  },
];

export const radarAxes = [
  { label: "Frontend", value: 0.95 },
  { label: "Backend", value: 0.78 },
  { label: "DevOps", value: 0.7 },
  { label: "Design", value: 0.88 },
  { label: "Performance", value: 0.92 },
];
