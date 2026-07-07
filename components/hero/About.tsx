import { Layers } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { FadeIn } from "@/components/common/FadeIn";
import { ABOUT_CONTENT, SECTION_COPY } from "@/constants/content";
import { cn } from "@/lib/utils";

export function About() {
  const { title, subtitle } = SECTION_COPY.about;

  return (
    <Section id="about">
      <SectionHeader id="about" title={title} subtitle={subtitle} />

      <FadeIn>
        <p className="mb-8 max-w-3xl text-pretty text-base leading-7 text-graphite-300 md:mb-9 md:text-lg md:leading-8">
          {ABOUT_CONTENT.intro}
        </p>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        {ABOUT_CONTENT.pillars.map((pillar, index) => {
          const isHighlight = pillar.title === "What I Build";

          return (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <div
                className={cn(
                  "glass glass-hover hover-lift h-full p-6 md:p-8",
                  isHighlight &&
                    "border-accent/25 bg-accent-soft md:-translate-y-0.5 md:shadow-lg md:shadow-black/20"
                )}
              >
                <div className="flex items-center gap-2">
                  {isHighlight && (
                    <Layers
                      size={15}
                      className="shrink-0 text-accent"
                      aria-hidden
                    />
                  )}
                  <h3
                    className={cn(
                      "text-sm font-medium tracking-wide",
                      isHighlight ? "text-accent" : "text-graphite-100"
                    )}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-pretty text-[0.9375rem] leading-7 text-graphite-300 md:text-base md:leading-8">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
