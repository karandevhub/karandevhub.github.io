import { Github, Linkedin, Twitter, Sparkles, Wrench, Compass, Instagram, Mail } from "lucide-react";

export const IDENTITY = {
  name: "Karan Kumar",
  title: "Full Stack & AI Engineer",
  roles: [
    "Full Stack Developer",
    "AI & ML Enthusiast",
  ],
  bio: "I build intelligent systems and immersive interfaces that bridge the gap between AI and reality. Turning complex problems into elegant solutions.",
  available: true,
  location: "Noida, India 🇮🇳",
  currentWork: "Full Stack & AI Engineer @ Building cool stuff",
};

export const CONTACT = {
  email: "karanmahatocse@gmail.com",
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
    "I'm a Full Stack & AI Engineer who lives at the intersection of complex logic and intuitive design.",
    "I specialize in building intelligent applications that don't just function—they anticipate. My work ranges from deep neural network integrations to high-performance web ecosystems.",
    "I believe the best technology is invisible, seamlessly empowering users to achieve more. When I'm not coding, I'm likely exploring the next frontier of AI or contributing to the open-source community.",
  ],
  values: [
    {
      icon: Sparkles,
      label: "Craft is the strategy",
      desc: "Details aren't decoration — they're the product. I sweat the 100ms.",
    },
    {
      icon: Wrench,
      label: "Build for the team behind you",
      desc: "Code that reads well outlives code that runs fast. I optimize for the next person.",
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
  description: "Portfolio of Karan Kumar — building intelligent systems and immersive interfaces that bridge the gap between AI and reality. Specializing in React, Node.js, Python, and AI/ML.",
  keywords: "Karan Kumar, Full Stack Developer, AI Engineer, ML Engineer, Software Architect, React Developer, Node.js, Python, LangChain, Next.js, TanStack, Portfolio, Web Developer India, AI Developer, karandevhub",
  author: "Karan Kumar",
  url: "https://karandevhub.github.io/",
  twitter: "@KaranKumar37664",
  ogImage: "https://karandevhub.github.io/og-image.jpeg",
  googleAnalyticsId: "G-LT9995K7ZD",
};
