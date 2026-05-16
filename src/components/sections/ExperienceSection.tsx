"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!wrap.current || !line.current) return;
    const ctx = gsap.context(() => {
      const l = line.current!;
      const length = 1000;
      gsap.set(l, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(l, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full bg-bg-primary px-6 py-12 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionLabel className="mb-4">The path</SectionLabel>
          <h2 className="text-display font-display font-semibold text-text-primary">
            Where I've been useful.
          </h2>
        </div>

        <div ref={wrap} className="relative">
          {/* timeline line */}
          <svg
            aria-hidden
            className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
            preserveAspectRatio="none"
            viewBox="0 0 1 1000"
          >
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1000"
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
            <line
              ref={line}
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1000"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </svg>

          <ul className="space-y-16">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.company} className="relative">
                  {/* node */}
                  <div
                    className={cn(
                      "absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2",
                      "flex h-9 w-9 items-center justify-center rounded-full border bg-bg-primary font-display text-sm font-bold",
                      e.current
                        ? "border-accent text-text-primary"
                        : "border-border-strong text-text-secondary"
                    )}
                    style={
                      e.current
                        ? { boxShadow: "0 0 0 6px var(--accent-glow)" }
                        : undefined
                    }
                  >
                    {e.logo}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      "ml-14 md:w-[44%]",
                      left ? "md:ml-0 md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl border bg-bg-secondary p-4 sm:p-6 transition-colors hover:border-border-strong",
                        e.current ? "border-accent" : "border-border-medium"
                      )}
                      style={
                        e.current
                          ? { boxShadow: "0 0 60px -20px var(--accent-glow)" }
                          : undefined
                      }
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                          {e.period}
                        </span>
                        {e.current && (
                          <Badge
                            className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest font-normal"
                            style={{
                              background: "var(--accent-glow)",
                              color: "var(--accent)",
                            }}
                          >
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-text-primary">
                        {e.role}
                      </h3>
                      <div className="mt-1 text-sm text-text-secondary">
                        {e.company} · {e.location}
                      </div>
                      <p className="mt-4 text-sm text-text-secondary">
                        {e.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span style={{ color: "var(--accent)" }}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                        {e.tech.map((t) => (
                          <Badge key={t} variant="outline" className="font-mono text-[10px] text-text-muted border-border-subtle rounded px-2 py-0.5 font-normal">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
