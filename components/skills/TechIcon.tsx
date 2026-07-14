import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiClaude,
  SiPytorch,
  SiTelegram,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiAuth0,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiSqlalchemy,
  SiSocketdotio,
  SiJupyter,
} from "react-icons/si";

interface TechIconProps {
  name: string;
  className?: string;
}

// Official brand colors for each technology
export const brandColors: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#FFFFFF",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "NestJS": "#E0234E",
  "Express.js": "#CCCCCC",
  "FastAPI": "#009688",
  "Django": "#44B78B",
  "GraphQL": "#E10098",
  "LLM Integration": "#D97706",
  "Machine Learning": "#EE4C2C",
  "Telegram Bot API": "#26A5E4",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "Prisma ORM": "#5A67D8",
  "Redis": "#DC382D",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "CI/CD": "#2088FF",
  "Authentication": "#EB5424",
  "Python": "#3776AB",
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "SQLAlchemy": "#D7191C",
  "Socket.IO": "#FFFFFF",
  "Data Science": "#F37626",
  "REST API": "#6BA539",
};

type SiIcon = ComponentType<{ className?: string; style?: React.CSSProperties }>;

const siIconMap: Record<string, SiIcon> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "GraphQL": SiGraphql,
  "LLM Integration": SiClaude,
  "Machine Learning": SiPytorch,
  "Telegram Bot API": SiTelegram,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Prisma ORM": SiPrisma,
  "Redis": SiRedis,
  "Docker": SiDocker,
  "CI/CD": SiGithubactions,
  "Authentication": SiAuth0,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQLAlchemy": SiSqlalchemy,
  "Socket.IO": SiSocketdotio,
  "Data Science": SiJupyter,
};

// Custom inline SVG paths for tech without a matching Si icon
const customSvgPaths: Record<string, React.ReactNode> = {
  "AWS": (
    <path d="M5.8 12.2c1.8 1.3 4.4 2 6.7 2 1.4 0 2.9-.3 4-.8.3-.1.5.1.2.3-1.4 1.2-3.8 2-6.1 2-2.9 0-5.5-.9-7.3-2.3-.3-.2-.1-.5.2-.4.8.3 1.6.7 2.3 1.2zm11.4-1c.3-.4.1-.9-.4-1.1-.4-.1-.8 0-1.1.3l-.1.1c-1.8 1.2-4.6 1.6-6.8 1-.3-.1-.5.1-.4.3.8 2.4 3.3 1.8 7.1.8.5-.1.9-.3 1.7-.4zm-8.5-6.5.9 2.7h.1l1-2.7h1.5L9.8 11H8.4L6.8 7.4h-.1L5.1 11H3.7l-1.8-6.3h1.6l.9 2.8h.1l1-2.8h1.3zm7.2 4.1c0 .5-.3.7-.9.7h-.8V6.7h.9c.5 0 .8.2.8.7v2.4zm1.5-2.5c0-1.2-.9-1.9-2.4-1.9H13v6.3h1.4V9.8h.2l1.4 2.2h1.7l-1.6-2.3c.9-.3 1.3-1 1.3-1.9z" />
  ),
  "REST API": (
    <path d="M3.5 6h3v8h-3V6zm5 0h3v8h-3V6zm5 0h3v8h-3V6z" />
  ),
  "AI Systems": (
    <path d="M10 3.5 4.5 6.5v7L10 16.5l5.5-3v-7L10 3.5zm0 1.7 3.8 2.1v4.4L10 14.8 6.2 12.7V8.3L10 6.2zM9.2 8.5h1.6v1.6H9.2V8.5zm0 2.8h1.6v1.6H9.2v-1.6z" />
  ),
  "Cloud Deployment": (
    <path d="M7.5 13.5h7c1.7 0 3-1.2 3-2.8 0-1.4-1-2.5-2.4-2.8-.3-1.8-1.8-3.1-3.6-3.1-1.4 0-2.6.8-3.2 1.9-.3-.1-.6-.2-1-.2-1.5 0-2.8 1.2-2.8 2.8 0 1.6 1.3 4.2 3 4.2z" />
  ),
  "SaaS Architecture": (
    <path d="M4 5h5v4H4V5zm7 0h5v4h-5V5zM4 11h5v4H4v-4zm7 0h5v4h-5v-4z" />
  ),
};

export function TechIcon({ name, className }: TechIconProps) {
  const IconComponent = siIconMap[name];

  if (IconComponent) {
    return (
      <IconComponent
        className={cn("h-4 w-4 shrink-0", className)}
      />
    );
  }

  const customPath = customSvgPaths[name];
  if (!customPath) return null;

  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={cn("h-4 w-4 shrink-0", className)}
    >
      {customPath}
    </svg>
  );
}
