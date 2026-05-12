"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediumIcon from "@/components/ui/MediumIcon";
import { CONTACT } from "@/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

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



        <div className="mt-10 flex justify-center gap-3">
          {CONTACT.socials.map((s) => {
            const Icon = s.icon;
            return (
              <MagneticButton
                key={s.label}
                as="a"
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                title={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border-medium bg-bg-secondary text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
              >
                {s.mediumIcon ? (
                  <MediumIcon className="h-4 w-4" />
                ) : Icon ? (
                  <Icon className="h-4 w-4" />
                ) : null}
              </MagneticButton>
            );
          })}
        </div>


        <form
          onSubmit={submit}
          className="glass mx-auto mt-16 grid max-w-2xl gap-4 rounded-3xl p-6 text-left md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-eyebrow">Name</Label>
              <Input
                id="name"
                name="name"
                required
                className="h-12 bg-bg-tertiary"
                placeholder="Jane Doe"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-eyebrow">Email</Label>
              <Input
                id="email"
                name="email"
                required
                type="email"
                className="h-12 bg-bg-tertiary"
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-eyebrow">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="resize-none bg-bg-tertiary"
              placeholder="Tell me about what you're building…"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-mono text-xs text-text-muted">
              Replies within 48h.
            </span>
            <Button
              type="submit"
              className="rounded-full px-6 py-5 text-sm"
            >
              {submitted ? "Sent ✓" : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
