import { Section, SectionHeader } from "@/components/common/Section";
import { FadeIn } from "@/components/common/FadeIn";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";
import { SECTION_COPY } from "@/constants/content";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const { title, subtitle } = SECTION_COPY.skills;

  return (
    <Section id="skills">
      <SectionHeader id="skills" title={title} subtitle={subtitle} />

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.id} delay={index * 0.04} className="min-w-0">
            <SkillCategoryCard category={category} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
