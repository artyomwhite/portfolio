import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/social/SocialLinks";
import { FadeIn } from "@/components/common/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-10 pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-20">
        <FadeIn className="flex min-w-0 flex-col gap-8">
          <div className="flex min-w-0 flex-col gap-3">
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-graphite-50 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              {siteConfig.name}
            </h1>
            <p className="text-lg font-medium tracking-tight text-graphite-300 md:text-xl">
              {siteConfig.role}
            </p>
          </div>

          <p className="text-balance text-lg leading-snug text-graphite-400 md:text-xl">
            {siteConfig.headline.map((line, i) => (
              <span key={line}>
                {line}
                {i < siteConfig.headline.length - 1 && <br />}
              </span>
            ))}
          </p>

          <p className="max-w-lg text-pretty text-sm leading-7 text-graphite-300 md:text-base md:leading-8">
            {siteConfig.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={`/#${SECTION_IDS.projects}`} variant="primary">
              View Projects
            </Button>
            <Button href={`/#${SECTION_IDS.contact}`} variant="outline">
              Contact
            </Button>
          </div>

          <SocialLinks />
        </FadeIn>

        <FadeIn delay={0.15} className="flex min-w-0 justify-center md:justify-end">
          <div className="glass glass-hover glass-portrait hover-lift relative w-full max-w-xs overflow-hidden p-1.5 shadow-xl shadow-black/30 md:max-w-sm">
            <div className="relative aspect-[959/1044] w-full overflow-hidden rounded-[16px]">
              <Image
                src={siteConfig.images.profile}
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
