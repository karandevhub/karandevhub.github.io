"use client";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { skills, radarAxes } from "@/data/skills";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

function RadarChart() {
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 24;
  const n = radarAxes.length;
  const angle = (i: number) => (-Math.PI / 2) + (i * 2 * Math.PI) / n;
  const point = (i: number, v: number) => {
    const a = angle(i);
    return [cx + Math.cos(a) * r * v, cy + Math.sin(a) * r * v] as const;
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const valuePath = radarAxes
    .map((ax, i) => {
      const [x, y] = point(i, ax.value);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ") + " Z";

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
      {rings.map((ring) => (
        <polygon
          key={ring}
          points={radarAxes
            .map((_, i) => {
              const [x, y] = point(i, ring);
              return `${x},${y}`;
            })
            .join(" ")}
          fill="none"
          stroke="var(--border-subtle)"
        />
      ))}
      {radarAxes.map((_, i) => {
        const [x, y] = point(i, 1);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="var(--border-subtle)"
          />
        );
      })}
      <motion.path
        d={valuePath}
        fill="var(--accent-glow)"
        stroke="var(--accent)"
        strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {radarAxes.map((ax, i) => {
        const [x, y] = point(i, 1.15);
        return (
          <text
            key={ax.label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--text-secondary)"
            fontSize={10}
            fontFamily="JetBrains Mono"
            style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            {ax.label}
          </text>
        );
      })}
    </svg>
  );
}

function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  const background = useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, rgba(14,165,233,0.10), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-999);
    mouseY.set(-999);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl ${className ?? ""}`}
    >
      {/* Spotlight layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
        style={{ background }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel className="mb-4">What I do</SectionLabel>
            <h2 className="text-display font-display font-semibold text-text-primary">
              Tools I reach for, daily.
            </h2>
          </div>
          <p className="max-w-md text-sm text-text-secondary md:text-base">
            A pragmatic stack — sharp where it matters, boring where it doesn't.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
          {skills.map((cat, idx) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              cat.icon
            ] || Icons.Sparkles;
            const span = idx === 3 ? "md:col-span-4" : "md:col-span-2";
            return (
              <ScrollReveal key={cat.category} delay={idx * 0.05} className={span}>
                <SpotlightCard className="h-full glass border border-border-medium p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-medium bg-bg-tertiary"
                        style={{ color: "var(--accent)" }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.ul
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                  >
                    {cat.items.map((s) => (
                      <motion.li
                        key={s.name}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                        className="group cursor-default rounded-full border border-border-medium bg-bg-tertiary px-3 py-1.5 text-xs text-text-secondary transition-all hover:-translate-y-0.5 hover:border-accent hover:text-text-primary hover:shadow-[0_0_20px_-4px_var(--accent-glow)]"
                      >
                        {s.name}
                        <span className="ml-2 font-mono text-[10px] inline-flex">
                          <span style={{ color: "var(--accent)" }}>{"●".repeat(s.level)}</span>
                          <span className="text-text-muted">{"○".repeat(5 - s.level)}</span>
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <SpotlightCard className="h-full glass border border-border-medium p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Profile
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  radar
                </span>
              </div>
              <div className="-mt-2 aspect-square w-full">
                <RadarChart />
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
