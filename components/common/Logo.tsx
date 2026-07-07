import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-[8px] border border-accent/40 bg-accent-soft text-xs font-bold tracking-tight text-accent",
        className
      )}
      aria-hidden
    >
      AW
    </span>
  );
}
