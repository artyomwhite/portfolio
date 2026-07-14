import { Section } from "@/components/common/Section";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { SECTION_IDS } from "@/constants/navigation";
import { CONTACT_CTA } from "@/constants/content";

export function Contact() {
  const linkedin = siteConfig.social.find((s) => s.id === "linkedin");

  return (
    <Section id="contact">
      <FadeIn>
        <div className="glass hover-lift mx-auto max-w-4xl p-8 text-center md:p-12 lg:p-16">
          <h2 className="text-balance text-2xl font-medium tracking-tight text-graphite-50 md:text-3xl lg:text-4xl">
            {CONTACT_CTA.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-7 text-graphite-300 md:text-base md:leading-8">
            {CONTACT_CTA.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={`/#${SECTION_IDS.projects}`} variant="primary">
              View Projects
            </Button>
            {linkedin && (
              <Button href={linkedin.href} variant="outline">
                LinkedIn
              </Button>
            )}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
