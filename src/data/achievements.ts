import type { Achievement, Stat } from "@/types";

export const stats: Stat[] = [
  { label: "Years building", value: 9, suffix: "+" },
  { label: "Projects shipped", value: 84 },
  { label: "GitHub stars", value: 12400, suffix: "+" },
  { label: "Cups of coffee", value: 9421 },
];

export const achievements: Achievement[] = [
  { label: "Awwwards SOTD", issuer: "Awwwards", date: "2024", icon: "Trophy" },
  { label: "Featured in CSS Design Awards", issuer: "CSSDA", date: "2024", icon: "Award" },
  { label: "GitHub Star", issuer: "GitHub", date: "2023", icon: "Star" },
  { label: "Conference Speaker", issuer: "ReactConf EU", date: "2023", icon: "Mic" },
  { label: "Open Source Maintainer", issuer: "TanStack", date: "2022", icon: "Code2" },
  { label: "Top 1% Stack Overflow", issuer: "SO", date: "2022", icon: "Hexagon" },
];
