"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

interface AllProjectsSectionProps {
  isPage?: boolean;
}

export default function AllProjectsSection({ isPage = true }: AllProjectsSectionProps) {
  return (
    <section className="relative w-full bg-bg-primary px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Portfolio</SectionLabel>
            <h1 className="text-display font-display font-semibold text-text-primary">
              Things I've shipped.
            </h1>
          </div>
          <p className="max-w-md text-sm text-text-secondary md:text-base">
            A comprehensive archive of applications, systems, and digital tools I have designed,
            built, and optimized.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.length === 0 && (
            <div className="col-span-3 text-center text-text-secondary py-12">
              No projects found.
            </div>
          )}
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex h-full"
            >
              <div className="group relative flex flex-col w-full overflow-hidden rounded-2xl border border-border-medium bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                    style={{
                      backgroundImage: `url(${p.coverImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent" />

                  {/* Category / First tag Badge */}
                  {p.tags && p.tags[0] && (
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-semibold"
                      style={{
                        background: "var(--accent-glow)",
                        color: "var(--accent)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      {p.tags[0]}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-semibold leading-tight text-text-primary group-hover:text-accent transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] tracking-wide text-text-muted uppercase">
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-text-secondary flex-grow">
                    {p.description}
                  </p>

                  {/* Metrics Block (if available) */}
                  {p.metrics && (
                    <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border-subtle pt-4">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="min-w-0">
                          <div className="font-display text-sm font-semibold text-text-primary truncate">
                            {m.value}
                          </div>
                          <div className="font-mono text-[8px] uppercase tracking-wider text-text-muted mt-0.5 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer Actions & Key Tech stack */}
                  <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
                    <div className="flex gap-1.5 flex-wrap max-w-[60%]">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] text-text-muted border border-border-subtle rounded px-1.5 py-0.5 bg-bg-primary/40 whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent transition-colors p-1"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-text-primary hover:text-accent transition-colors font-semibold border border-border-strong hover:border-accent px-3 py-1.5 rounded-full bg-bg-primary/20"
                        >
                          Demo
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
