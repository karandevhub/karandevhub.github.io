"use client";
import { motion } from "framer-motion";
import { Star, GitFork, Github } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";

const REPOS = [
  {
    name: "tanstack-flux",
    desc: "Reactive data primitives for TanStack Router with sub-frame invalidation.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 4820,
    forks: 312,
  },
  {
    name: "edge-codec",
    desc: "Streaming MDX compiler that runs on Cloudflare Workers in 12kb.",
    lang: "Rust",
    color: "#dea584",
    stars: 3140,
    forks: 184,
  },
  {
    name: "lerp-cursor",
    desc: "Tiny, accessible custom cursor with magnetic targets. Zero deps.",
    lang: "TypeScript",
    color: "#3178c6",
    stars: 2090,
    forks: 96,
  },
];

// Generate a faux contribution grid: 53 weeks × 7 days
function genGrid() {
  const weeks: number[][] = [];
  for (let w = 0; w < 53; w++) {
    const col: number[] = [];
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      const wave = Math.sin((w + d) * 0.3) * 0.4 + 0.5;
      const v = r * wave;
      col.push(v < 0.15 ? 0 : v < 0.35 ? 1 : v < 0.55 ? 2 : v < 0.75 ? 3 : 4);
    }
    weeks.push(col);
  }
  return weeks;
}

const COLORS = [
  "rgba(255,255,255,0.04)",
  "rgba(14,165,233,0.20)",
  "rgba(14,165,233,0.40)",
  "rgba(14,165,233,0.65)",
  "rgba(14,165,233,0.95)",
];

export default function OpenSourceSection() {
  const grid = genGrid();

  return (
    <section className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">In the open</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Building in public.
            </h2>
          </div>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Github className="h-4 w-4" />
            @alexrivera
          </a>
        </div>

        <GlassCard className="mb-12 overflow-x-auto">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-eyebrow">Last 12 months</span>
            <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted">
              less
              {COLORS.map((c, i) => (
                <span
                  key={i}
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ background: c }}
                />
              ))}
              more
            </div>
          </div>
          <div className="flex min-w-fit gap-[3px]">
            {grid.map((col, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {col.map((v, d) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: (w + d) * 0.005,
                      ease: "easeOut",
                    }}
                    className="h-3 w-3 rounded-sm"
                    style={{ background: COLORS[v] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="grid gap-4 md:grid-cols-3">
          {REPOS.map((r) => (
            <a
              key={r.name}
              href="https://github.com"
              className="group block rounded-2xl border border-border-medium bg-bg-secondary p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_60px_-20px_var(--accent-glow)]"
            >
              <div className="mb-2 flex items-center gap-2">
                <Github className="h-4 w-4 text-text-muted" />
                <span className="font-mono text-sm text-text-primary group-hover:underline">
                  {r.name}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{r.desc}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: r.color }}
                  />
                  {r.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3" /> {r.stars.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" /> {r.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
