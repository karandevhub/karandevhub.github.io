import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    items: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "C++", level: 4 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "React Native", level: 5 },
      { name: "Redux", level: 4 },
      { name: "TanStack Query", level: 5 },
    ],
  },
  {
    category: "AI & ML Tools",
    icon: "Sparkles",
    items: [
      { name: "LangChain", level: 4 },
      { name: "GenKit", level: 4 },
      { name: "RAG", level: 4 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "Database",
    items: [
      { name: "Node.js", level: 5 },
      { name: "Express.js", level: 5 },
      { name: "Fastify", level: 4 },
      { name: "Socket.io", level: 4 },
      { name: "MongoDB", level: 5 },
      { name: "MySQL", level: 4 },
      { name: "Prisma ORM", level: 5 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "AWS", level: 4 },
      { name: "Docker", level: 5 },
      { name: "Google Cloud", level: 4 },
      { name: "Git/GitHub", level: 5 },
    ],
  },
];

export const radarAxes = [
  { label: "Frontend", value: 0.95 },
  { label: "Backend", value: 0.92 },
  { label: "AI/ML", value: 0.85 },
  { label: "Cloud", value: 0.88 },
  { label: "Database", value: 0.90 },
];
