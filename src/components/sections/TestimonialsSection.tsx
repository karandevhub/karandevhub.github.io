"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[idx];

  return (
    <section
      className="relative w-full bg-bg-primary px-6 py-24 lg:px-10 lg:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <SectionLabel className="mb-4 justify-center">
            <span>Said about me</span>
          </SectionLabel>
          <h2 className="text-display font-display font-semibold text-text-primary">
            Words that mean something.
          </h2>
        </div>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative rounded-3xl p-10 md:p-14"
            >
              <Quote
                className="absolute -top-4 left-8 h-16 w-16"
                style={{ color: "var(--accent)", opacity: 0.6 }}
                fill="currentColor"
              />
              <blockquote className="font-display text-2xl font-medium leading-snug text-text-primary md:text-3xl">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  style={{ height: 'auto' }}
                  className="h-12 w-12 rounded-full border border-border-medium object-cover"
                />
                <div>
                  <div className="font-display text-base font-semibold text-text-primary">
                    {t.name}
                  </div>
                  <div className="font-mono text-xs text-text-muted">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === idx ? 28 : 8,
                background:
                  i === idx ? "var(--accent)" : "var(--border-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
