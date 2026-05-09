import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-6 transition-colors",
        "hover:border-[color:var(--border-strong)]",
        className
      )}
    >
      {children}
    </div>
  );
}
