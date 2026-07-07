"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";
import { NAV_LINKS, SECTION_IDS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const SECTION_ORDER = [
  SECTION_IDS.hero,
  SECTION_IDS.about,
  SECTION_IDS.skills,
  SECTION_IDS.projects,
  SECTION_IDS.contact,
] as const;

export function Nav() {
  const [activeId, setActiveId] = useState<string>(SECTION_IDS.about);

  useEffect(() => {
    const elements = SECTION_ORDER.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/4 bg-graphite-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-6 md:px-8">
        <Link
          href={`#${SECTION_IDS.hero}`}
          className="flex items-center gap-2.5 text-sm font-medium text-graphite-100 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`${siteConfig.name} — Home`}
        >
          <Logo />
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-graphite-400 hover:text-graphite-100"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
