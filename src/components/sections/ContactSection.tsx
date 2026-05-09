"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Copy, Check } from "lucide-react";
import { contact } from "@/data/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";

const ICONS = { Github, Linkedin, Twitter, Dribbble };

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-bg-primary px-6 py-32 lg:px-10 lg:py-48"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--accent-glow), transparent 60%)",
          opacity: 0.4,
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionLabel className="mb-6 justify-center">Contact</SectionLabel>
        <h2 className="text-display font-display font-semibold text-text-primary">
          Let's build something
          <br />
          <span style={{ color: "var(--accent)" }}>remarkable.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
          I'm picky about who I work with — and so are the best clients. If
          you're shipping something that deserves real care, say hello.
        </p>

        <div className="mt-12 flex justify-center">
          <button
            onClick={copy}
            className="group relative inline-flex items-center gap-3 font-display text-lg font-medium md:text-4xl"
          >
            <span className="shimmer-text break-all text-text-primary transition-colors">
              {contact.email}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border-medium text-text-secondary transition-colors group-hover:border-accent group-hover:text-accent">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </span>
          </button>
        </div>
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-3 font-mono text-xs"
              style={{ color: "var(--accent)" }}
            >
              Copied to clipboard.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-3">
          {contact.socials.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS] || Github;
            return (
              <MagneticButton
                key={s.label}
                as="a"
                href={s.href}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border-medium bg-bg-secondary text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
              >
                <Icon className="h-4 w-4" />
              </MagneticButton>
            );
          })}
        </div>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-border-medium bg-bg-secondary/60 px-4 py-2 font-mono text-xs">
          <span
            className={`h-2 w-2 rounded-full pulse-dot ${contact.available ? "bg-emerald-400" : "bg-red-400"}`}
          />
          <span className="text-text-secondary">
            {contact.available
              ? "Available for freelance & full-time roles"
              : "Currently unavailable"}
          </span>
        </div>

        <form
          onSubmit={submit}
          className="glass mx-auto mt-16 grid max-w-2xl gap-4 rounded-3xl p-6 text-left md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-eyebrow">Name</span>
              <input
                required
                className="mt-2 w-full rounded-lg border border-border-medium bg-bg-tertiary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block">
              <span className="text-eyebrow">Email</span>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-lg border border-border-medium bg-bg-tertiary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
                placeholder="jane@company.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-eyebrow">Message</span>
            <textarea
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-lg border border-border-medium bg-bg-tertiary px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
              placeholder="Tell me about what you're building…"
            />
          </label>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-text-muted">
              Replies within 48h.
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-bg-primary transition-transform hover:scale-[1.02]"
            >
              {submitted ? "Sent ✓" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
