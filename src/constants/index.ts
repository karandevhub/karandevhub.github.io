import { Github, Linkedin, Twitter, Sparkles, Wrench, Compass, Instagram, Mail } from "lucide-react";

export const IDENTITY = {
  name: "Karan Kumar Mahato",
  title: "Full Stack & AI Engineer",
  roles: [
    "Full Stack Developer",
    "AI & ML Specialist",
    "Mobile App Developer",
  ],
  bio: "I build scalable, high-performance applications and intelligent systems using modern frameworks and AI-powered technologies. Bridging the gap between complex logic and seamless user experiences.",
  available: true,
  location: "Jharkhand, India 🇮🇳",
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
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "work", label: "Work", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
};

export const ABOUT = {
  paragraphs: [
    "I'm a Computer Science student at Dumka Engineering College specializing in Full-Stack Web and Mobile Development.",
    "Experienced in building scalable, high-performance applications using modern frameworks and AI-powered technologies like LangChain and GenKit to deliver seamless, production-ready user experiences across platforms.",
    "My work spans from building RAG-based LLM systems to high-performance geospatial dashboards and cross-platform mobile apps.",
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
  title: "Karan Kumar Mahato | Full Stack & AI Engineer",
  description: "Portfolio of Karan Kumar Mahato — specialized in Full-Stack Web and Mobile Development, building scalable AI-powered applications with React Native, Next.js, and LangChain.",
  keywords: "Karan Kumar Mahato, Full Stack Developer, AI Engineer, ML Engineer, React Native Developer, LangChain, GenKit, RAG, Next.js, Node.js, India AI Developer, karandevhub",
  author: "Karan Kumar Mahato",
  url: "https://karandevhub.github.io/",
  twitter: "@KaranKumar37664",
  ogImage: "https://karandevhub.github.io/og-image.jpeg",
  googleAnalyticsId: "G-LT9995K7ZD",
};
