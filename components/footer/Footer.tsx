import Link from "next/link";
import { SocialLinks } from "@/components/social/SocialLinks";
import { siteConfig } from "@/config/site";
import { FOOTER_NAV_LINKS } from "@/constants/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/4 py-8 md:py-10">
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-8 px-6 md:px-8">
        <div className="flex min-w-0 flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs text-graphite-600">
            &copy; {year} {siteConfig.name}. {siteConfig.copyright}
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-5" role="list">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-graphite-400 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
