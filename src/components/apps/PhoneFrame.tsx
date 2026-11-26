import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  natural?: boolean;
}

export default function PhoneFrame({ src, alt, className, eager, natural }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2.2rem] border-[6px] border-[#1d1d24] bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "block h-full rounded-[1.75rem]",
          natural ? "w-auto max-w-none" : "w-full object-cover object-top",
        )}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
