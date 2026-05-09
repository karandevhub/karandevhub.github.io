export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  coverImage: string;
  featured: boolean;
  metrics?: { label: string; value: string; delta?: string }[];
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
