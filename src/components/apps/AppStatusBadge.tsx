import type { AppStatus } from "@/types";
import { cn } from "@/lib/utils";

const LABELS: Record<AppStatus, string> = {
  live: "Live on Google Play",
  "coming-soon": "Coming soon",
};

export default function AppStatusBadge({ status, className }: { status: AppStatus; className?: string }) {
  const live = status === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest backdrop-blur",
        className,
      )}
      style={{
        background: live ? "rgba(34,197,94,0.15)" : "rgba(250,204,21,0.15)",
        color: live ? "#4ade80" : "#facc15",
        border: `1px solid ${live ? "rgba(34,197,94,0.35)" : "rgba(250,204,21,0.35)"}`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "currentColor" }} />
      {LABELS[status]}
    </span>
  );
}
