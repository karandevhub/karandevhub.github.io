export type AppStatus = "live" | "coming-soon";

export interface AppLinks {
  playStore?: string;
  appStore?: string;
  website?: string;
  privacy?: string;
}

export interface PolicySection {
  heading: string;
  body: string;
}

export interface PrivacyPolicy {
  lastUpdated: string;
  summary: string;
  storedOnDevice: string;
  extraSections?: PolicySection[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  tech: string[];
  icon: string;
  accent: string;
  status: AppStatus;
  links: AppLinks;
  privacy?: PrivacyPolicy;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  bullets: string[];
  tech: string[];
  current: boolean;
}

export interface Skill {
  category: string;
  icon: string;
  items: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Achievement {
  label: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}
