"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"default" | "hover" | "project" | "click">(
    "default"
  );
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      setHidden(true);
      return;
    }

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onDown = () => setMode("click");
    const onUp = () => setMode((m) => (m === "click" ? "default" : m));

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const c = t.closest<HTMLElement>("[data-cursor]");
      if (c) {
        const v = c.dataset.cursor;
        if (v === "project") setMode("project");
        else setMode("hover");
      } else if (t.closest("a, button, input, textarea, [role=button]")) {
        setMode("hover");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    let rafId = 0;
    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted || hidden) return null;

  const ringSize =
    mode === "project" ? 72 : mode === "hover" ? 48 : mode === "click" ? 20 : 32;
  const ringBg =
    mode === "hover" || mode === "project" ? "var(--accent-glow)" : "transparent";
  const ringBorder =
    mode === "hover" || mode === "project"
      ? "1px solid var(--accent)"
      : "1px solid var(--accent-border)";

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full transition-[width,height,background,border] duration-200 ease-out md:flex md:items-center md:justify-center"
        style={{
          width: ringSize,
          height: ringSize,
          background: ringBg,
          border: ringBorder,
          mixBlendMode: "difference",
        }}
      >
        {mode === "project" && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-primary">
            View →
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full md:block"
        style={{ background: "var(--accent)" }}
      />
    </>
  );
}
