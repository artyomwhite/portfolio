import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  target?: never;
  rel?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: never;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-accent/30 bg-accent-soft text-accent shadow-sm shadow-black/20 hover:border-accent/45 hover:bg-accent-muted hover:shadow-md hover:shadow-black/30",
  outline:
    "border-white/10 bg-transparent text-graphite-100 hover:border-accent/30 hover:bg-accent-soft hover:text-accent",
  ghost:
    "border-transparent bg-transparent text-graphite-400 hover:bg-white/4 hover:text-graphite-200",
};

export function Button({
  children,
  className,
  variant = "outline",
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-[12px] border px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          className={styles}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
