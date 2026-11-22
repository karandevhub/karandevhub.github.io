"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/ui/SectionLabel";
import AppCover from "@/components/apps/AppCover";
import { appLinksOf } from "@/components/apps/appLinks";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="relative w-full bg-bg-primary px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Selected work</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Apps I've built.
            </h2>
          </div>
          <p className="max-w-md text-sm text-text-secondary md:text-base">
            Mobile apps and games I design, build and publish myself. Every one of them on this page.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {featured.map((p, i) => {
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
                  reverse && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -top-16 select-none font-display text-[180px] font-bold leading-none text-text-primary/[0.04] transition-transform duration-700 group-hover:-translate-y-2 lg:text-[220px]"
                    style={reverse ? { right: "-1rem" } : { left: "-1rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <AppCover project={p} className="aspect-[16/11]" />
                </div>

                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="font-mono text-[10px] uppercase tracking-widest text-text-secondary bg-bg-secondary border-border-medium"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-h1 font-display font-semibold text-text-primary">{p.title}</h3>
                  <p className="mt-2 font-display text-lg text-text-secondary">{p.tagline}</p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="font-mono text-[10px] text-text-muted border-border-subtle rounded px-2 py-0.5 font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {appLinksOf(p).map((link) =>
                      link.primary ? (
                        <Button
                          key={link.label}
                          asChild
                          className="rounded-full px-5 py-5 text-sm transition-transform hover:scale-[1.02]"
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            Get it on {link.label}
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                          </a>
                        </Button>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                          className="story-link group/link relative inline-flex items-center gap-1 text-sm font-medium text-text-primary"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-glow"
          >
            View all apps
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
