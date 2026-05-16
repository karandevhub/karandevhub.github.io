import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Lawazia Tech Pvt. Ltd.",
    role: "Application Developer",
    period: "Feb 2024 – Present",
    location: "India",
    logo: "LT",
    description:
      "Engineering advanced agentic AI systems and full-stack web/mobile applications, specializing in complex feature integrations and scalable architectures.",
    bullets: [
      "Developing autonomous agentic AI systems and full-stack web platforms to automate complex workflows.",
      "Integrating advanced features and real-time capabilities into high-performance mobile applications.",
    ],
    tech: ["React Native", "MongoDB", "LangChain", "AWS", "REST APIs", "GenKit", "Google Cloud Run"],
    current: true,
  },
  {
    company: "Jaipur Smart City Limited",
    role: "Software Developer Intern",
    period: "July 2024 – Oct 2024",
    location: "Jaipur, India",
    logo: "JS",
    description:
      "Developed a smart surveillance platform and geospatial dashboards for municipal monitoring.",
    bullets: [
      "Developed full-stack surveillance software to support ANPR, crowd detection, and municipal monitoring.",
      "Built an advanced dashboard using Electron.js and Leaflet.js to visualize real-time data from municipal cameras.",
    ],
    tech: ["React", "Electron.js", "Redux", "TanStack Query", "Leaflet.js", "PostgreSQL"],
    current: false,
  },
];
