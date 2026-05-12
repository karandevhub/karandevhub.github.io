"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/button";

const POSTS = [
  {
    slug: "render-perf",
    title: "I rebuilt our app's render path in 9 days. Here's what I learned.",
    excerpt:
      "A field report on stripping a React app down to its render primitives — what survived, what didn't, and what to never do again.",
    cover:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tag: "Performance",
    date: "Apr 14, 2026",
    read: 9,
  },
  {
    slug: "typed-apis",
    title: "Type-perfect APIs: a pattern I steal from Linear constantly.",
    excerpt:
      "How a tiny convention around discriminated unions kills entire categories of bugs and makes refactors a joy.",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "TypeScript",
    date: "Mar 03, 2026",
    read: 6,
  },
  {
    slug: "design-eng-bridge",
    title: "The design–engineering bridge is built one component at a time.",
    excerpt:
      "Notes from building Atlas, a 380-component design system that actually got adopted across nine product surfaces.",
    cover:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    tag: "Design Systems",
    date: "Feb 11, 2026",
    read: 12,
  },
];

export default function BlogSection({ isPage = false }: { isPage?: boolean }) {
  return (
    <section className={`relative w-full bg-bg-primary px-6 lg:px-10 ${
      isPage ? "pt-20 pb-24 lg:pt-28 lg:pb-40" : "py-24 lg:py-40"
    }`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">Writing</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Things I think about, out loud.
            </h2>
          </div>
          <Button asChild variant="ghost" className="inline-flex items-center gap-2 text-sm font-medium text-text-primary">
            <a href="#">
              Read all articles
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.a
              key={p.slug}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block overflow-hidden rounded-2xl border border-border-medium bg-bg-secondary transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
                  style={{
                    backgroundImage: `url(${p.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                  style={{
                    background: "var(--accent-glow)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold leading-tight text-text-primary group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-text-muted">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {p.read} min
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
