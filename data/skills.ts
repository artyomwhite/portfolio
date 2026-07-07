import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "Django" },
      { name: "GraphQL" },
    ],
  },
  {
    id: "ai-integrations",
    title: "AI & Integrations",
    skills: [
      { name: "LLM Integration" },
      { name: "Machine Learning" },
      { name: "Telegram Bot API" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "Redis" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Authentication" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
];
