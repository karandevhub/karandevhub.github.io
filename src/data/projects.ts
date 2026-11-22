import type { Project } from "@/types";

export const APP_SUPPORT_EMAIL = "kids.cocoloops@gmail.com";

export const projects: Project[] = [
  {
    slug: "cocoloops",
    title: "Cocoloops",
    tagline: "Audiobooks made for kids.",
    description:
      "A kid-friendly audiobook library where children and parents can browse and listen to stories, build playlists and enjoy screen-free listening time.",
    tags: ["Kids", "Audiobooks"],
    tech: ["React Native", "TypeScript", "Next.js", "MongoDB", "Firebase"],
    icon: "/apps/cocoloops.png",
    accent: "#8b5cf6",
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.cocoloops.app",
      website: "https://cocoloops.com",
      privacy: "https://cocoloops.com/privacy",
    },
    featured: true,
  },
  {
    slug: "magnet-tiles",
    title: "Magnet Tiles",
    tagline: "A logic puzzle game about magnetic poles.",
    description:
      "Slide magnetic tiles across the board, let opposite poles snap together and solve over a hundred hand-checked puzzles with sticky cells, pinned tiles and a new daily challenge.",
    tags: ["Game", "Puzzle"],
    tech: ["React Native", "TypeScript", "Reanimated", "Zustand"],
    icon: "/apps/magnet-tiles.png",
    accent: "#3d8bff",
    status: "coming-soon",
    links: {},
    privacy: {
      lastUpdated: "22 November 2026",
      summary: "Magnet Tiles is a puzzle game.",
      storedOnDevice:
        "Your game progress, stars, coins, purchased items and settings (such as sound and haptics) are saved only on your device so you can continue where you left off.",
    },
    featured: true,
  },
  {
    slug: "mind-lab",
    title: "Mind Lab",
    tagline: "Brain training for memory, focus and speed.",
    description:
      "Short, science-based exercises for memory, focus, speed and reasoning, with regular checkups and insights that show how you improve over time.",
    tags: ["Brain training", "Health"],
    tech: ["React Native", "TypeScript", "Notifee", "Zustand"],
    icon: "/apps/mind-lab.png",
    accent: "#f5a33b",
    status: "coming-soon",
    links: {},
    privacy: {
      lastUpdated: "22 November 2026",
      summary: "Mind Lab is a brain training app.",
      storedOnDevice:
        "Your exercise results, checkup scores, training progress, habits and settings are saved only on your device so you can track your progress over time.",
      extraSections: [
        {
          heading: "Notifications",
          body: "If you allow notifications, Mind Lab schedules training reminders directly on your device. Reminders are created and delivered locally; no information is sent to us or any server to do this. You can turn notifications off at any time in the app or in your device settings.",
        },
        {
          heading: "Not medical advice",
          body: "Mind Lab is designed for general training and enjoyment. Its results are not a medical assessment and should not be used to diagnose or treat any condition.",
        },
      ],
    },
    featured: true,
  },
];

export const privacyPath = (slug: string) => `/apps/${slug}/privacy`;

export const privacyUrlOf = (project: Project) =>
  project.links.privacy ?? (project.privacy ? privacyPath(project.slug) : undefined);
