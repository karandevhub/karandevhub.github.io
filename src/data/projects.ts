import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "lumen-analytics",
    title: "Lumen Analytics",
    tagline: "Realtime product analytics, rebuilt from scratch.",
    description:
      "A privacy-first analytics platform handling 4B events/month. Re-architected the ingestion pipeline and shipped a sub-200ms query layer used by 12k teams.",
    tags: ["SaaS", "Realtime"],
    tech: ["Next.js", "Rust", "ClickHouse", "Redis", "Kubernetes"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    metrics: [
      { label: "P95 latency", value: "184ms", delta: "-72%" },
      { label: "Events/mo", value: "4.1B", delta: "+310%" },
      { label: "Active teams", value: "12k", delta: "+8x" },
    ],
  },
  {
    slug: "atlas-design-system",
    title: "Atlas Design System",
    tagline: "A 380-component design system shipped across 9 products.",
    description:
      "Led the unification of nine product surfaces into a single themable design system. Cut design-to-prod time by 4x and lifted Lighthouse a11y to 100 across the board.",
    tags: ["Design Systems", "DX"],
    tech: ["React", "Radix", "Tailwind", "Storybook", "Figma API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    metrics: [
      { label: "Components", value: "380+" },
      { label: "Adoption", value: "9 apps" },
      { label: "A11y score", value: "100" },
    ],
  },
  {
    slug: "northwind-commerce",
    title: "Northwind Commerce",
    tagline: "An edge-rendered storefront pushing $40M GMV/yr.",
    description:
      "Migrated a legacy Magento storefront to a fully edge-rendered React stack. TTFB dropped from 1.4s to 90ms and conversion lifted 23% on mobile.",
    tags: ["E-commerce", "Performance"],
    tech: ["TanStack Start", "Cloudflare", "Stripe", "Algolia"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    coverImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    metrics: [
      { label: "TTFB", value: "90ms", delta: "-93%" },
      { label: "Mobile CR", value: "+23%" },
      { label: "GMV/yr", value: "$40M" },
    ],
  },
];
