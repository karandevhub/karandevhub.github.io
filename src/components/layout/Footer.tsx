import { contact, navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <div className="font-display text-2xl font-semibold text-text-primary">
            Karan Kumar
          </div>
          <p className="mt-2 max-w-xs text-sm text-text-secondary">
            Full Stack & AI Engineer building intelligent systems and immersive interfaces. Turning complex problems into elegant solutions.
          </p>
        </div>
        <div>
          <div className="text-eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-text-secondary">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} className="hover:text-text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="text-eyebrow">Connect</div>
          <div className="flex gap-4 text-xs text-text-muted">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="transition-colors hover:text-text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-text-muted md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Karan Kumar — All rights reserved.</span>
          <span>Crafted in the dark, with care.</span>
        </div>
      </div>
    </footer>
  );
}
