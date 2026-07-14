import Image from "next/image";
import { Activity, ExternalLink, FileText, Github } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { TechIcon } from "@/components/skills/TechIcon";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const liveLabel = project.liveDemoLabel ?? "Live Demo";
  const apiLabel = project.apiDocsLabel ?? "API Docs";
  const isDashboard = liveLabel === "Dashboard";

  return (
    <FadeIn>
      <article
        className={cn(
          "group glass overflow-hidden border border-white/6 shadow-lg shadow-black/20",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-black/30"
        )}
      >
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
          <div className="relative min-h-[240px] w-full overflow-hidden rounded-[20px] border border-white/6 bg-graphite-900/60 sm:min-h-[280px] md:min-h-[320px]">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03] md:p-4"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-4 md:gap-6">
            <span className="font-mono text-sm tracking-wider text-accent/70">
              {number}
            </span>

            <div>
              <h3 className="text-balance text-xl font-medium tracking-tight text-graphite-50 md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-graphite-300">
                {project.role}
              </p>
            </div>

            <p className="text-pretty text-sm leading-7 text-graphite-300 md:text-base md:leading-8">
              {project.description}
            </p>

            <div className="flex min-w-0 flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={`${tech}-${i}`}>
                  <TechIcon name={tech} className="text-accent/80" />
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {project.github && (
                  <Button
                    href={project.github}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <Github size={16} aria-hidden />
                    GitHub
                  </Button>
                )}
                {project.liveDemo && !isDashboard && (
                  <Button
                    href={project.liveDemo}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink size={16} aria-hidden />
                    Live Demo
                  </Button>
                )}
              </div>

              {(project.apiDocs ||
                project.healthUrl ||
                (project.liveDemo && isDashboard)) && (
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {project.liveDemo && isDashboard && (
                    <Button
                      href={project.liveDemo}
                      variant="ghost"
                      className="w-full sm:w-auto"
                    >
                      <ExternalLink size={16} aria-hidden />
                      Dashboard
                    </Button>
                  )}
                  {project.apiDocs && (
                    <Button
                      href={project.apiDocs}
                      variant="ghost"
                      className="w-full sm:w-auto"
                    >
                      <FileText size={16} aria-hidden />
                      {apiLabel}
                    </Button>
                  )}
                  {project.healthUrl && (
                    <Button
                      href={project.healthUrl}
                      variant="ghost"
                      className="w-full sm:w-auto"
                    >
                      <Activity size={16} aria-hidden />
                      Health
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
