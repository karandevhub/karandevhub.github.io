"use client";
import { motion } from "framer-motion";
import { Compass, Sparkles, Wrench } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const VALUES = [
  {
    icon: Sparkles,
    label: "Craft is the strategy",
    desc: "Details aren't decoration — they're the product. I sweat the 100ms.",
  },
  {
    icon: Wrench,
    label: "Build for the team behind you",
    desc: "Code that reads well outlives code that runs fast. I optimize for the next person.",
  },
  {
    icon: Compass,
    label: "Ship with conviction",
    desc: "Strong opinions, weakly held. Ship, learn, refactor — repeat.",
  },
];

const PARAGRAPHS = [
  "I'm a Full Stack & AI Engineer who lives at the intersection of complex logic and intuitive design.",
  "I specialize in building intelligent applications that don't just function—they anticipate. My work ranges from deep neural network integrations to high-performance web ecosystems.",
  "I believe the best technology is invisible, seamlessly empowering users to achieve more. When I'm not coding, I'm likely exploring the next frontier of AI or contributing to the open-source community.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <ScrollReveal>
          <div className="relative aspect-[4/5] w-full max-w-md">
            <div
              className="absolute inset-0 -rotate-2 rounded-2xl border border-border-strong bg-bg-secondary transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "inset 0 0 60px rgba(0,0,0,0.5), 0 30px 60px -20px rgba(0,0,0,0.6)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 rounded-xl border border-border-medium bg-bg-tertiary px-4 py-3 font-mono text-xs"
              style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.8)" }}
            >
              <div className="text-text-muted">// currently</div>
              <div className="text-text-primary">building AI agents</div>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <SectionLabel className="mb-6">About me</SectionLabel>
          <h2 className="text-display font-display font-semibold text-text-primary">
            A decade obsessed with the
            <span style={{ color: "var(--accent)" }}> seam </span>
            between design and code.
          </h2>
          <motion.div
            className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary md:text-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          <div className="my-10 h-px w-full bg-border-subtle" />

          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <ScrollReveal key={v.label}>
                <div className="group">
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-border-medium bg-bg-secondary transition-colors group-hover:border-accent"
                  >
                    <v.icon className="h-4 w-4 text-text-primary" />
                  </div>
                  <div className="font-display text-base font-semibold text-text-primary">
                    {v.label}
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
