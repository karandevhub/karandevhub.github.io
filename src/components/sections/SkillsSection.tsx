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
              cat.category === "Programming Languages" ? "md:col-span-4" :
              cat.category === "Frontend Development" ? "md:col-span-5" :
              cat.category === "AI & ML Tools" ? "md:col-span-3" :
              cat.category === "Backend & Database" ? "md:col-span-8" :
              "md:col-span-4";

            const gridCols = 
              cat.category === "Backend & Database" ? "grid-cols-4 md:grid-cols-8" :
              cat.category === "Frontend Development" ? "grid-cols-4 md:grid-cols-5" :
              cat.category === "AI & ML Tools" ? "grid-cols-3" :
              "grid-cols-4";

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
                    className={`grid gap-1.5 sm:gap-2 w-full ${gridCols}`}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                  >
                    {cat.items.map((s) => {
                      const isDarkLogo = ["Next.js", "Express.js", "Git/GitHub", "Fastify", "Rust"].includes(s.name);
                      const isRAG = s.name === "RAG";
                      return (
                        <motion.li
                          key={s.name}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            show: { opacity: 1, y: 0 },
                          }}
                          className="group flex flex-col items-center justify-center gap-2 cursor-default rounded-xl border border-transparent bg-transparent p-1.5 sm:p-2 transition-all hover:-translate-y-1 hover:border-border-medium hover:bg-bg-tertiary/30 hover:shadow-[0_0_20px_-4px_var(--accent-glow)] w-full"
                        >
                          {isRAG ? (
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                              <span className="font-display font-black tracking-tighter text-text-primary text-xl sm:text-2xl drop-shadow-sm opacity-90">
                                RAG
                              </span>
                            </div>
                          ) : (
                            <img 
                              src={getLogoUrl(s.name)} 
                              alt={s.name} 
                              className={`h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 ${isDarkLogo ? 'invert opacity-90' : ''}`} 
                              loading="lazy"
                            />
                          )}
                          <span className="text-[10px] sm:text-[11px] text-center leading-tight transition-colors group-hover:text-text-primary text-text-secondary font-medium">
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
