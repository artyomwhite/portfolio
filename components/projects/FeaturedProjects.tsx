import { Section, SectionHeader } from "@/components/common/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SECTION_COPY } from "@/constants/content";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const { title, subtitle } = SECTION_COPY.projects;

  return (
    <Section id="projects">
      <SectionHeader id="projects" title={title} subtitle={subtitle} />

      <div className="flex flex-col gap-8 md:gap-12">
        {featured.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
