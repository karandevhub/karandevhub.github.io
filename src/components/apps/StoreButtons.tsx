import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path fill="#34A853" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
    <path fill="#FBBC04" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.8-2.2c1-.6 1-1.8 0-2.4l-3.8-2.2Z" />
    <path fill="#4285F4" d="M13.4 12 3.6 22.2c.4.2.9.2 1.4-.1l11.8-6.7L13.4 12Z" />
    <path fill="#EA4335" d="M3.6 1.8 13.4 12l3.4-3.4L5 1.9c-.5-.3-1-.3-1.4-.1Z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1.1-2.8-4.1ZM13.9 4.9c.7-.9 1.2-2 1-3.2-1 .1-2.2.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.3-.6 3-1.4Z" />
  </svg>
);

function StoreBadge({ href, store, icon }: { href?: string; store: string; icon: React.ReactNode }) {
  const body = (
    <>
      {icon}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] uppercase tracking-wider opacity-70">
          {href ? "Get it on" : "Coming soon to"}
        </span>
        <span className="font-display text-base font-semibold">{store}</span>
      </span>
    </>
  );
  const base =
    "inline-flex min-h-14 items-center gap-3 rounded-2xl border px-5 py-2.5 transition-all duration-200";
  if (!href) {
    return (
      <span
        className={cn(base, "cursor-default border-border-medium bg-bg-secondary/60 text-text-secondary")}
        aria-label={`${store}, coming soon`}
      >
        {body}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        "border-border-strong bg-text-primary text-bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--accent)]",
      )}
    >
      {body}
    </a>
  );
}

export default function StoreButtons({ project, className }: { project: Project; className?: string }) {
  const { playStore, appStore } = project.links;
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <StoreBadge href={playStore} store="Google Play" icon={<PlayIcon />} />
      {(appStore || project.status === "coming-soon") && (
        <StoreBadge href={appStore} store="App Store" icon={<AppleIcon />} />
      )}
    </div>
  );
}
