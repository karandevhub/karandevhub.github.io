"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, MapPin, Briefcase } from "lucide-react";
import HeroCanvas from "@/components/three/HeroCanvas";
import { IDENTITY, CONTACT } from "@/constants";
import SpotifyWidget from "@/components/ui/SpotifyWidget";
import MediumIcon from "@/components/ui/MediumIcon";

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
    const i = setInterval(
      () => setRoleIdx((r) => (r + 1) % IDENTITY.roles.length),
      2400
    );
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
      className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden px-6 pt-16 lg:px-10"
    >
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient fade at bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 50%, var(--bg-primary) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-8 sm:py-12 md:py-16">

        {/* ── "Hey 👋 I am Karan." headline ── */}
        <div data-hero-fade className="mb-2 sm:mb-3">
          <span className="font-display text-base sm:text-lg font-medium text-text-secondary">
            Hey 👋 I am
          </span>
        </div>

        <h1 className="text-hero md:whitespace-nowrap font-display font-semibold text-text-primary leading-[1.05] mb-3 sm:mb-5">
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

        {/* Animated role */}
        <div
          data-hero-fade
          className="mb-5 sm:mb-7 flex items-baseline gap-3 text-h2 font-display text-text-secondary"
        >
          <span className="font-mono text-sm text-text-muted">→</span>
          <span className="relative inline-block min-h-[1.2em] min-w-[260px] sm:min-w-[300px]">
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
                I am a {IDENTITY.roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        {/* ── Meta: location + current work ── */}
        <div data-hero-fade className="mb-5 sm:mb-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
            <span>{IDENTITY.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
            <span>{IDENTITY.currentWork}</span>
          </div>
        </div>

        {/* ── Social links row ── */}
        <div data-hero-fade className="mb-5 sm:mb-6 flex flex-wrap items-center gap-2 md:gap-3">
          {CONTACT.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              title={s.label}
              className={`group flex h-9 w-9 items-center justify-center rounded-full border border-border-medium bg-bg-secondary/60 text-text-secondary transition-all duration-200 hover:border-accent hover:bg-accent-glow hover:text-accent hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                s.label === "Medium" || s.label === "Instagram" ? "hidden sm:flex" : "flex"
              }`}
            >
              {s.mediumIcon ? (
                <MediumIcon className="h-4 w-4" />
              ) : s.icon ? (
                <s.icon className="h-4 w-4" />
              ) : null}
            </a>
          ))}

          {/* Resume pill */}
          <a
            href={CONTACT.resumeUrl}
            className="group inline-flex items-center gap-2 rounded-full border border-border-medium bg-bg-secondary/60 px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent hover:bg-accent-glow hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* ── Spotify widget ── */}
        <div data-hero-fade className="mb-4 sm:mb-8">
          <SpotifyWidget />
        </div>

        {/* ── Stats bar — hidden on mobile, shown on tablet/desktop ── */}
        <div
          data-hero-fade
          className="hidden items-center gap-6 font-mono text-xs text-text-muted md:flex"
        >
          <div>
            <div className="text-text-primary">3+ yrs</div>
            <div>building the future</div>
          </div>
          <div className="h-8 w-px bg-border-medium" />
          <div>
            <div className="text-text-primary">Full Stack &amp; AI</div>
            <div>Open Source</div>
          </div>
          <div className="h-8 w-px bg-border-medium" />
          <div>
            <div className="text-text-primary">Remote ⇄ Local</div>
            <div>IST</div>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
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
