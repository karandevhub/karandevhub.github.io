import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border-subtle bg-bg-primary/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md font-display text-sm font-bold text-bg-primary"
            style={{ background: "var(--accent)" }}
          >
            KK
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-text-primary sm:inline">
            Karan Kumar
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-border-medium bg-bg-secondary/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-primary transition-all hover:border-accent hover:bg-accent-glow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
          Hire me
        </a>
      </nav>
    </header>
  );
}
