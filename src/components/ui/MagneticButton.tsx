"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  as = "button",
  href,
  target,
  rel,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} className="inline-flex">
        {Inner}
      </a>
    );
  }
  return (
    <button {...rest} className="inline-flex">
      {Inner}
    </button>
  );
}
