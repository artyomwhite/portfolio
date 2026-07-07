import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  hover = false,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn("glass", hover && "glass-hover", className)}
    >
      {children}
    </Component>
  );
}
