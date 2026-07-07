export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
