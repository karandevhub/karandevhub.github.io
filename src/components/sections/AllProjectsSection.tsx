"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AppCover from "@/components/apps/AppCover";
import { appLinksOf } from "@/components/apps/appLinks";
import Link from "next/link";
import { appPath, projects } from "@/data/projects";

export default function AllProjectsSection() {
  return (
    <section className="relative w-full bg-bg-primary px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Apps</SectionLabel>
            <h1 className="text-display font-display font-semibold text-text-primary">
              Apps I've built.
            </h1>
          </div>
          <p className="max-w-md text-sm text-text-secondary md:text-base">
            Every mobile app and game I've designed, built and published, with store links and privacy
            policies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              id={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex h-full"
            >
              <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border-medium bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <Link href={appPath(p.slug)} aria-label={`Explore ${p.title}`} className="block">
                  <AppCover
                    project={p}
                    className="aspect-[16/10] rounded-none border-0"
                    iconClassName="h-20 w-20 lg:h-24 lg:w-24"
                  />
                </Link>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight text-text-primary transition-colors duration-200 group-hover:text-accent">
                    <Link href={appPath(p.slug)}>{p.title}</Link>
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-text-muted">
                    {p.tagline}
                  </p>
                  <p className="mt-3 flex-grow text-xs leading-relaxed text-text-secondary">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="whitespace-nowrap rounded border border-border-subtle bg-bg-primary/40 px-1.5 py-0.5 font-mono text-[9px] text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border-subtle pt-4">
                    <Link
                      href={appPath(p.slug)}
                      className="inline-flex items-center gap-1 rounded-full border border-accent bg-accent-glow px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-text-primary transition-colors hover:text-accent"
                    >
                      Explore
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    {appLinksOf(p).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="inline-flex items-center gap-1 rounded-full border border-border-strong bg-bg-primary/20 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-text-primary transition-colors hover:border-accent hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
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
