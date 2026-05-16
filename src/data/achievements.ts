import type { Achievement, Stat } from "@/types";

export const stats: Stat[] = [
  { label: "Years building", value: 4, suffix: "+" },
  { label: "Projects shipped", value: 15, suffix: "+" },
  { label: "Production users", value: 1.2, suffix: "k+" },
  { label: "CGPA", value: 7.95 },
];

export const achievements: Achievement[] = [
  { label: "Startup Pitch Winner", issuer: "Vikshit Bharat Abhiyan (JUT)", date: "2024", icon: "Trophy" },
  { label: "Google IT Automation with Python", issuer: "Google", date: "2023", icon: "Award" },
  { label: "B.Tech in Computer Science", issuer: "Dumka Engineering College", date: "2021-2025", icon: "GraduationCap" },
];
