import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-6 transition-all duration-500 lg:px-10",
        scrolled
          ? "border-b border-border-subtle bg-bg-primary/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-logo text-4xl sm:text-3xl md:text-4xl text-text-primary">
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

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border-medium bg-bg-secondary/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-primary transition-all hover:border-accent hover:bg-accent-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Hire me
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-medium bg-bg-secondary/60 text-text-primary transition-colors hover:border-accent md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full border-b border-border-subtle bg-bg-primary/95 px-6 py-6 shadow-lg backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-display text-2xl font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
