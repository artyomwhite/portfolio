import type { SkillCategory } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { TechIcon } from "@/components/skills/TechIcon";
import { cn } from "@/lib/utils";

interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

export function SkillCategoryCard({ category, className }: SkillCategoryCardProps) {
  return (
    <div className={cn("glass glass-hover h-full p-4 md:p-5", className)}>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-graphite-300">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <Badge key={skill.name} accent className="text-graphite-100">
            <TechIcon name={skill.name} className="text-accent" />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
