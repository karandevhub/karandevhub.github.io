"use client";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { skills, getLogoUrl } from "@/data/skills";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";



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

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-12">
          {skills.map((cat, idx) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[
              cat.icon
            ] || Icons.Sparkles;
            const span =
              idx < 3
                ? "md:col-span-4"
                : idx === 3
                ? "md:col-span-7"
                : "md:col-span-5";
            return (
              <ScrollReveal key={cat.category} delay={idx * 0.05} className={span}>
                <SpotlightCard className="h-full glass border border-border-medium p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                  >
                    {cat.items.map((s) => {
                      const isDarkLogo = ["Next.js", "Express.js", "Git/GitHub", "Fastify"].includes(s.name);
                      const isRAG = s.name === "RAG";
                      return (
                        <motion.li
                          key={s.name}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            show: { opacity: 1, y: 0 },
                          }}
                          className="group flex items-center gap-2.5 cursor-default rounded-xl border border-border-medium bg-bg-tertiary/50 px-3 py-2 transition-all hover:-translate-y-1 hover:border-accent hover:bg-bg-tertiary hover:shadow-[0_0_20px_-4px_var(--accent-glow)]"
                        >
                          {!isRAG && (
                            <img 
                              src={getLogoUrl(s.name)} 
                              alt={s.name} 
                              className={`h-5 w-5 object-contain ${isDarkLogo ? 'invert opacity-90' : ''}`} 
                              loading="lazy"
                            />
                          )}
                          <span className={`text-sm text-text-secondary group-hover:text-text-primary ${isRAG ? 'font-bold' : 'font-medium'}`}>
                            {s.name}
                          </span>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
  );
}
