import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export function Badge({ children, className, accent = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium tracking-wide",
        accent
          ? "border-accent/25 bg-accent-soft text-graphite-100"
          : "border-white/6 bg-white/4 text-graphite-200",
        className
      )}
    >
      {children}
    </span>
  );
}
