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
      { name: "Redux", level: 4 },
      { name: "React Native", level: 5 },
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

export const getLogoUrl = (name: string) => {
  const map: Record<string, string> = {
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "Prisma ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    "Git/GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "TanStack Query": "https://cdn.simpleicons.org/reactquery/FF4154",
    "LangChain": "https://cdn.simpleicons.org/langchain/1C3C3C",
    "GenKit": "https://cdn.simpleicons.org/firebase/FFCA28", 
    "RAG": "https://cdn.simpleicons.org/openai/412991", 
    "Fastify": "https://cdn.simpleicons.org/fastify/000000",
    "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  };
  return map[name] || `https://cdn.simpleicons.org/${name.toLowerCase().replace(/[^a-z0-9]/g, '')}/0ea5e9`;
};
