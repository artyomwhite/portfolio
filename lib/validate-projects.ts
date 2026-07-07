import type { Project } from "@/types";

export function validateProjects(projects: Project[]): void {
  const ids = new Set<string>();

  for (const project of projects) {
    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: "${project.id}"`);
    }
    ids.add(project.id);
  }
}
