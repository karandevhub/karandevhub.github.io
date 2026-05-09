"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  trigger?: boolean;
  stagger?: number;
}

export default function RevealText({
  text,
  className,
  as: Tag = "h2",
  trigger = true,
  stagger = 0.06,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!ref.current || reduced) return;
    const words = ref.current.querySelectorAll<HTMLElement>("[data-word]");
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 110 });
      gsap.to(words, {
        yPercent: 0,
        ease: "expo.out",
        duration: 1.1,
        stagger,
        scrollTrigger: trigger
          ? { trigger: ref.current, start: "top 85%" }
          : undefined,
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced, stagger, trigger]);

  const words = text.split(" ");
  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((w, i) => (
        <span key={i} className="reveal-line mr-[0.25em]">
          <span data-word>{w}</span>
        </span>
      ))}
    </Tag>
  );
}
