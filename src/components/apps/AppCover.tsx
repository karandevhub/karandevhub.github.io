import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import AppStatusBadge from "./AppStatusBadge";

interface AppCoverProps {
  project: Project;
  className?: string;
  iconClassName?: string;
}

export default function AppCover({ project, className, iconClassName }: AppCoverProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-2xl border border-border-medium", className)}
      style={{
        background: `radial-gradient(circle at 50% 45%, ${project.accent}55 0%, ${project.accent}14 45%, var(--bg-secondary) 75%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={project.icon}
          alt={`${project.title} app icon`}
          className={cn(
            "h-28 w-28 rounded-[28%] shadow-2xl transition-transform duration-700 group-hover:scale-[1.06] lg:h-36 lg:w-36",
            iconClassName,
          )}
          loading="lazy"
        />
      </div>
      <AppStatusBadge status={project.status} className="absolute left-4 top-4" />
    </div>
  );
}
