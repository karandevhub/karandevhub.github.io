"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import { stats, achievements } from "@/data/achievements";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(Math.round(v).toLocaleString());
    });
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  return (
    <section className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionLabel className="mb-4">By the numbers</SectionLabel>
          <h2 className="text-display font-display font-semibold text-text-primary">
            A few measurable things.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-medium bg-border-medium md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg-secondary p-8">
              <div className="font-display text-5xl font-semibold tracking-tight text-text-primary md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ||
              Icons.Award;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <GlassCard className="flex items-start gap-4 p-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-medium bg-bg-tertiary"
                    style={{ color: "var(--accent)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-text-primary">
                      {a.label}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-text-muted">
                      {a.issuer} · {a.date}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
