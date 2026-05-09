import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8" style={{ background: "var(--accent)" }} />
      <span className="text-eyebrow">{children}</span>
    </div>
  );
}
