"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import HeroCanvas from "@/components/three/HeroCanvas";
import { IDENTITY } from "@/constants";

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.set("[data-hero-char]", { yPercent: 110 });
      tl.set("[data-hero-fade]", { autoAlpha: 0, y: 24 });
      tl.to("[data-hero-char]", {
        yPercent: 0,
        duration: 1.4,
        stagger: 0.04,
      });
      tl.to(
        "[data-hero-fade]",
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
        "-=0.8"
      );
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const i = setInterval(() => setRoleIdx((r) => (r + 1) % IDENTITY.roles.length), 2400);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <section
      ref={root}
      id="top"
      className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 50%, var(--bg-primary) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div className="flex flex-col justify-center">
          <div data-hero-fade className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-eyebrow">{IDENTITY.availabilityText}</span>
          </div>

          <h1 className="text-hero md:whitespace-nowrap font-display font-semibold text-text-primary leading-[1.1]">
            {IDENTITY.name.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block">
                {word.split("").map((c, i) => (
                  <span key={i} className="reveal-line">
                    <span data-hero-char>{c}</span>
                  </span>
                ))}
                {wordIdx < IDENTITY.name.split(" ").length - 1 && (
                  <span className="reveal-line">&nbsp;</span>
                )}
              </span>
            ))}
          </h1>

          <div
            data-hero-fade
            className="mt-6 flex items-baseline gap-3 text-h2 font-display text-text-secondary"
          >
            <span className="font-mono text-sm text-text-muted">→</span>
            <span className="relative inline-block min-h-[1.2em] min-w-[280px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={roleIdx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 whitespace-nowrap"
                  style={{ color: "var(--accent)" }}
                >
                  {IDENTITY.roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p
            data-hero-fade
            className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {IDENTITY.bio}
          </p>

          <div data-hero-fade className="mt-10 flex items-center gap-3">
            <a
              href="#work"
              className="group inline-flex whitespace-nowrap items-center gap-3 rounded-full bg-text-primary px-4 py-2 text-sm font-medium text-bg-primary transition-transform hover:scale-[1.02] md:px-6 md:py-3"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="group inline-flex whitespace-nowrap items-center gap-3 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-glow md:px-6 md:py-3"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div data-hero-fade className="mt-12 flex items-center gap-6 font-mono text-xs text-text-muted">
            <div>
              <div className="text-text-primary">3+ yrs</div>
              <div>building the future</div>
            </div>
            <div className="h-8 w-px bg-border-medium" />
            <div>
              <div className="text-text-primary">Full Stack & AI</div>
              <div>Open Source</div>
            </div>
            <div className="hidden h-8 w-px bg-border-medium sm:block" />
            <div className="hidden sm:block">
              <div className="text-text-primary">Remote ⇄ Local</div>
              <div>IST</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <motion.div
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-eyebrow">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-text-secondary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
