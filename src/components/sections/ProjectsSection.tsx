"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Selected work</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Things I've shipped.
            </h2>
          </div>
          <p className="max-w-md text-sm text-text-secondary md:text-base">
            Three I'm proudest of. The full archive lives on the projects page.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="project"
                className={cn(
                  "group relative grid gap-10 lg:grid-cols-2 lg:items-center",
                  reverse && "lg:[&>*:first-child]:order-2"
                )}
              >
                {/* image */}
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -top-16 select-none font-display text-[180px] font-bold leading-none text-text-primary/[0.04] transition-transform duration-700 group-hover:-translate-y-2 lg:text-[220px]"
                    style={
                      reverse
                        ? { right: "-1rem" }
                        : { left: "-1rem" }
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border-medium">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{
                        backgroundImage: `url(${p.coverImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 30%, rgba(10,10,11,0.7) 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* content */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-medium bg-bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-h1 font-display font-semibold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-display text-lg text-text-secondary">
                    {p.tagline}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
                    {p.description}
                  </p>

                  {p.metrics && (
                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-2xl font-semibold text-text-primary">
                            {m.value}
                          </div>
                          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-muted">
                            {m.label}
                          </div>
                          {m.delta && (
                            <div
                              className="mt-0.5 font-mono text-[10px]"
                              style={{ color: "var(--accent)" }}
                            >
                              {m.delta}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border-subtle px-2 py-0.5 font-mono text-[10px] text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={p.liveUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-bg-primary transition-transform hover:scale-[1.02]"
                    >
                      Live demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={p.githubUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-glow"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="story-link group/link relative inline-flex items-center gap-1 text-sm font-medium text-text-primary"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-glow"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
