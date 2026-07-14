import type { SkillCategory } from "@/types";
import type React from "react";
import { TechIcon, brandColors } from "@/components/skills/TechIcon";
import { cn } from "@/lib/utils";
import { Layout, Server, Database, Brain, Cloud, Code2 } from "lucide-react";

interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  frontend: Layout,
  backend: Server,
  databases: Database,
  "ai-integrations": Brain,
  infrastructure: Cloud,
  languages: Code2,
};

export function SkillCategoryCard({ category, className }: SkillCategoryCardProps) {
  const Icon = categoryIcons[category.id] || Code2;

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-[20px] p-6 md:p-8 transition-all duration-500 overflow-hidden",
        "bg-graphite-900/35 border border-white/5 backdrop-blur-xl",
        "hover:-translate-y-1.5 hover:border-accent/25 hover:bg-graphite-900/50 hover:shadow-[0_12px_40px_-12px_rgba(139,156,247,0.08)]",
        className
      )}
    >
      {/* Dynamic top-left radial glow on card hover */}
      <div className="absolute -left-16 -top-16 h-32 w-32 bg-accent/8 rounded-full blur-[40px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

      {/* Header section */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.02] border border-white/6 text-graphite-300 transition-all duration-500 group-hover:bg-accent-soft group-hover:border-accent/25 group-hover:text-accent group-hover:scale-105 group-hover:rotate-3">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-graphite-200 group-hover:text-graphite-50 transition-colors duration-300">
              {category.title}
            </h3>
          </div>
        </div>
        
        {/* Count Badge */}
        <span className="text-[10px] text-graphite-400 font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-accent/20 group-hover:text-accent transition-colors duration-300">
          {category.skills.length} {category.skills.length === 1 ? "Tech" : "Techs"}
        </span>
      </div>

      {/* Skills list */}
      <div className="relative z-10 grid grid-cols-2 gap-2">
        {category.skills.map((skill) => {
          const brandColor = brandColors[skill.name] || "#8b9cf7";
          const hoverStyle = {
            "--brand-color": brandColor,
            "--brand-color-light": `${brandColor}12`, // ~7% opacity
            "--brand-color-border": `${brandColor}25`, // ~15% opacity
          } as React.CSSProperties;

          return (
            <div
              key={skill.name}
              style={hoverStyle}
              className={cn(
                "group/pill relative flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium cursor-default transition-all duration-300",
                "border-white/5 bg-white/[0.02] text-graphite-300",
                "hover:-translate-y-0.5 hover:border-[var(--brand-color-border)] hover:bg-[var(--brand-color-light)] hover:text-graphite-50 hover:shadow-[0_6px_16px_var(--brand-color-light)]"
              )}
            >
              <TechIcon
                name={skill.name}
                className="h-4 w-4 text-graphite-400 transition-all duration-300 group-hover/pill:text-[var(--brand-color)] group-hover/pill:scale-110"
              />
              <span className="tracking-wide">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
