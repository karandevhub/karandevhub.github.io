import type { Project } from "@/types";

export const APP_SUPPORT_EMAIL = "kids.cocoloops@gmail.com";

const screens = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/apps/${slug}/screen-${i + 1}.jpg`);

export const projects: Project[] = [
  {
    slug: "cocoloops",
    title: "Cocoloops",
    tagline: "Audio stories for kids, in six languages.",
    description:
      "An ad-free audio story app for kids aged 2 to 12. Calm bedtime stories, told in English, Hindi, Spanish, French, German and Italian, so children can listen, imagine and pick up a new language.",
    tags: ["Kids", "Audio stories"],
    tech: ["React Native", "TypeScript", "Next.js", "MongoDB", "Firebase"],
    icon: "/apps/cocoloops.png",
    accent: "#8b5cf6",
    status: "live",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.cocoloops.app",
      website: "https://cocoloops.com",
      privacy: "https://cocoloops.com/privacy",
    },
    landing: {
      headline: "One story, six languages.",
      intro:
        "An ad-free audio story app for kids aged 2 to 12. Press play at bedtime, in the car or during quiet time, and let your child listen, imagine and pick up a new language along the way.",
      stats: [
        { value: "6", label: "Languages" },
        { value: "2–12", label: "Ages" },
        { value: "0", label: "Ads" },
        { value: "7 days", label: "Free trial" },
      ],
      about: {
        title: "Screen-free stories that grow with your child",
        paragraphs: [
          "Play a story in the language your child knows best, then listen to the same story in Hindi, Spanish, French, German or Italian. Because they already know what happens, children understand much more of the new language.",
          "It's a gentle way to raise a bilingual child, even if you don't speak the language yourself, and it helps families living abroad keep Hindi alive at home.",
        ],
        list: {
          title: "Every story in",
          items: ["English", "Hindi", "Spanish", "French", "German", "Italian"],
        },
      },
      features: [
        {
          icon: "languages",
          title: "One story, six languages",
          body: "Switch the same story between six languages so new words make sense straight away.",
        },
        {
          icon: "moon",
          title: "Calm bedtime stories",
          body: "Soothing narration with gentle music, split into short chapters you can finish tomorrow.",
        },
        {
          icon: "cat",
          title: "Meet Zuzu the Cat",
          body: "Follow Zuzu, Mimi, Toto and the Whiskers family, with new episodes added regularly.",
        },
        {
          icon: "heart",
          title: "Stories with values",
          body: "Kindness, sharing, friendship, courage and good choices, learned by living the story.",
        },
        {
          icon: "badge",
          title: "Checked by teachers",
          body: "Every chapter in every language is proofread by native-speaking teachers.",
        },
        {
          icon: "users",
          title: "Made for families",
          body: "No ads, no autoplay videos, no games. One subscription covers up to 3 devices.",
        },
      ],
      steps: [
        { title: "Pick a story", body: "Browse bedtime stories, fairy tales and adventures made for kids." },
        { title: "Choose a language", body: "Start in a language your child knows, then switch to a new one." },
        { title: "Press play", body: "Lights off, screen down. Let the story do the rest." },
      ],
      screenshots: screens("cocoloops", 5),
      trust: ["No ads", "Made for ages 2–12", "7-day free trial", "Cancel anytime"],
    },
    featured: true,
  },
  {
    slug: "magnet-tiles",
    title: "Magnet Tiles",
    tagline: "A logic puzzle game about magnetic poles.",
    description:
      "Slide magnetic tiles across the board, let opposite poles snap together and solve 75 hand-checked puzzles with sticky cells, pinned tiles and a new daily challenge.",
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
    landing: {
      headline: "Opposites attract. Can you make them snap?",
      intro:
        "A calm but clever logic puzzle. Every tile is a little magnet. Swipe one, watch it slide, and let opposite poles snap together until the board matches the goal.",
      stats: [
        { value: "75", label: "Puzzles" },
        { value: "5", label: "Chapters" },
        { value: "Daily", label: "New puzzle" },
        { value: "100%", label: "Offline" },
      ],
      about: {
        title: "Easy to learn, surprisingly deep",
        paragraphs: [
          "Tiles slide until they hit a wall or another tile. Opposite poles pull together, matching poles push apart. Arrange them to match the goal in as few moves as you can.",
          "Every level is hand-made and checked by a solver, so there is always a perfect solution waiting to be found, and you can never get stuck in a dead end.",
        ],
        list: {
          title: "Five chapters, five twists",
          items: ["Attraction", "Repulsion", "Sticky Cells", "Anchors", "Fusion"],
        },
      },
      features: [
        {
          icon: "magnet",
          title: "Real magnet logic",
          body: "Opposite poles snap together and matching poles push apart, so every swipe changes the board.",
        },
        {
          icon: "star",
          title: "Earn 3 stars",
          body: "Solve each puzzle in the perfect number of moves to earn every star and unlock new chapters.",
        },
        {
          icon: "calendar",
          title: "A new daily puzzle",
          body: "A fresh challenge every day. Keep your streak going to earn bonus coins.",
        },
        {
          icon: "lightbulb",
          title: "Gentle hints",
          body: "A hint shows your next move without spoiling the puzzle. Undo and restart any time.",
        },
        {
          icon: "palette",
          title: "Skins and themes",
          body: "Spend the coins you earn on colourful tile skins and board themes.",
        },
        {
          icon: "trophy",
          title: "Achievements",
          body: "Unlock achievements for perfect streaks, hint-free chapters and daily habits.",
        },
      ],
      steps: [
        { title: "Swipe a tile", body: "Send any free tile up, down, left or right." },
        { title: "Watch it slide", body: "It keeps going until a wall, a sticky cell or another tile stops it." },
        { title: "Snap the poles", body: "Line up opposite poles so the board matches the goal." },
      ],
      screenshots: screens("magnet-tiles", 7),
      trust: ["Plays offline", "No account needed", "No personal data collected", "All ages"],
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
    landing: {
      headline: "Train your mind. Measure what's real.",
      intro:
        "Short daily sessions of science-based exercises for speed, memory, focus, flexibility and reasoning, with a weekly check-up that shows whether your gains are real.",
      stats: [
        { value: "22", label: "Exercises" },
        { value: "7", label: "Skills" },
        { value: "10–32", label: "Minutes a day" },
        { value: "Weekly", label: "Check-up" },
      ],
      about: {
        title: "Brain training that doesn't fool you",
        paragraphs: [
          "Most brain games make you better at the game. Mind Lab measures a baseline first, rotates tasks every day and learns your normal ups and downs, so it only calls something progress when it really is.",
          "A weekly check-up uses tasks you never practise, to show whether your training is transferring to everyday thinking.",
        ],
        list: {
          title: "Exercises include",
          items: [
            "Stroop colour test",
            "Dual n-back",
            "Corsi blocks",
            "Pattern matrices",
            "Flanker arrows",
            "Task switching",
          ],
        },
      },
      features: [
        {
          icon: "gauge",
          title: "Baseline first",
          body: "Your first session measures where you start across speed, memory, focus, flexibility and reasoning.",
        },
        {
          icon: "shuffle",
          title: "Adapts to you",
          body: "Tasks rotate daily and adjust their difficulty, so you build skills, not habits for one game.",
        },
        {
          icon: "chart",
          title: "Only real change counts",
          body: "Improvement is shown only when you beat your normal range, not on a lucky day.",
        },
        {
          icon: "check",
          title: "Weekly check-up",
          body: "Tests on untrained skills reveal whether your gains carry over to real thinking.",
        },
        {
          icon: "activity",
          title: "Habits and insights",
          body: "Log sleep, exercise, meditation and screen time to see what really moves your score.",
        },
        {
          icon: "bell",
          title: "Gentle reminders",
          body: "Optional training reminders, scheduled on your device, keep you on track.",
        },
      ],
      steps: [
        { title: "Take your baseline", body: "A 32-minute first session measures every skill." },
        { title: "Train a little each day", body: "Follow today's session, or the 10-minute version when you're busy." },
        { title: "See what's real", body: "Watch your brain score and weekly check-up results grow." },
      ],
      screenshots: screens("mind-lab", 5),
      trust: ["Results stay on your device", "No account needed", "No ads or tracking", "Not medical advice"],
    },
    featured: true,
  },
];

export const appPath = (slug: string) => `/apps/${slug}`;

export const privacyPath = (slug: string) => `${appPath(slug)}/privacy`;

export const privacyUrlOf = (project: Project) =>
  project.links.privacy ?? (project.privacy ? privacyPath(project.slug) : undefined);
