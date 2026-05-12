import { IDENTITY, CONTACT, NAVIGATION } from "@/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <div className="font-display text-2xl font-semibold text-text-primary">
            {IDENTITY.name}
          </div>
          <p className="mt-2 max-w-xs text-sm text-text-secondary">
            {IDENTITY.bio}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:contents">
          <div>
            <div className="text-eyebrow mb-4">Navigate</div>
            <ul className="space-y-2 text-sm text-text-secondary">
              {NAVIGATION.links.map((l) => (
                <li key={l.id}>
                  <a href={l.href} className="hover:text-text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-1">
              <div className="text-eyebrow text-[10px]">Location</div>
              <div className="text-xs text-text-secondary">{IDENTITY.location}</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="text-eyebrow">Connect</div>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              {CONTACT.socials.map((s) => (
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
      </div>
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-text-muted md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} {IDENTITY.name} — All rights reserved.</span>
          <span>Crafted in the dark, with care.</span>
        </div>
      </div>
    </footer>
  );
}
