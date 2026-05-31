import {
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Wrench,
  Compass,
  Instagram,
  Mail,
} from "lucide-react";

export const IDENTITY = {
  name: "Karan Kumar",
  title: "Full Stack & AI Engineer",
  roles: ["build AI-powered systems", "turn ideas into production code", "make mobile apps feel fast"],
  bio: "I build scalable, high-performance applications and intelligent systems using modern frameworks and AI-powered technologies. Bridging the gap between complex logic and seamless user experiences.",
  available: true,
  location: "Noida, India 🇮🇳",
  currentWork: "Application Developer @ Lawazia Tech Pvt. Ltd.",
};

export const CONTACT = {
  email: "karanmahatocse@gmail.com",
  phone: "+91 7079648675",
  resumeUrl: "#",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/itskaran/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/karandevhub", icon: Github },
    { label: "Medium", href: "https://medium.com/@karanmahatocse", icon: null, mediumIcon: true },
    { label: "Instagram", href: "https://www.instagram.com/justsaykaran", icon: Instagram },
    { label: "X", href: "https://x.com/KaranKumar37664", icon: Twitter },
    { label: "Email", href: "mailto:karanmahatocse@gmail.com", icon: Mail },
  ],
};

export const NAVIGATION = {
  links: [
    { id: "about", label: "About", href: "/#about" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "work", label: "Work", href: "/#work" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ],
};

export const ABOUT = {
  paragraphs: [
    "Full Stack & AI engineer from Noida, India. I spend most of my time building agentic AI systems, wiring up LLM pipelines, and making mobile apps feel fast.",
    "I've shipped real-time platforms, RAG-based AI systems, and cross-platform apps — the kind of work where if something breaks, someone actually notices.",
    "Currently obsessed with AI agents and what happens when you give LLMs the ability to do things, not just say things.",
  ],
  values: [
    {
      icon: Sparkles,
      label: "Craft is the strategy",
      desc: "Details aren't decoration — they're the product. I sweat the 100ms.",
    },
    {
      icon: Wrench,
      label: "Build for the team",
      desc: "Code that reads well outlives code that runs fast. I optimize for maintainability.",
    },
    {
      icon: Compass,
      label: "Ship with conviction",
      desc: "Strong opinions, weakly held. Ship, learn, refactor — repeat.",
    },
  ],
};

export const SEO = {
  title: "Karan Kumar | Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer from India. I build agentic AI systems, LLM pipelines, and high-performance mobile apps — production systems with real users and real consequences.",
  keywords:
    "Karan Kumar, Full Stack Developer, AI Engineer, Agentic AI, LLM Engineer, RAG Systems, AI Agents, React Developer, Node.js, TypeScript, LangChain, GenKit, Next.js, React Native, TanStack, MongoDB, Rust, Docker, AWS, Portfolio, Web Developer India, karandevhub",
  author: "Karan Kumar",
  url: "https://karandevhub.github.io/",
  twitter: "@KaranKumar37664",
  ogImage: "https://karandevhub.github.io/og-image.jpeg",
  googleAnalyticsId: "G-LT9995K7ZD",
};