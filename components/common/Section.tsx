import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabelledBy?: string;
}

export function Section({
  id,
  children,
  className,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy ?? `${id}-heading`}
      className={cn("relative z-10 py-6 md:py-8 lg:py-10", className)}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-6 md:mb-8", className)}>
      <h2
        id={`${id}-heading`}
        className="text-balance text-2xl font-medium tracking-tight text-graphite-50 md:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-pretty text-base text-graphite-400 md:mt-3 md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}
