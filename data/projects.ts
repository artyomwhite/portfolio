import type { Project } from "@/types";
import { validateProjects } from "@/lib/validate-projects";

export const projects: Project[] = [
  {
    id: "1",
    title: "Nexus AI",
    role: "Full-Stack Developer",
    description:
      "Nexus AI is a full-stack AI SaaS dashboard MVP simulating a production startup product. Built with Next.js, TypeScript, Prisma, and SQLite, it features an AI chat system with persistent conversations, a modern SaaS dashboard interface, and scalable architecture. The project demonstrates full-stack engineering, AI integration, and production-ready deployment.",
    image: "/images/nexus-ai.jpg",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma ORM"],
    github: "https://github.com/artyomwhite/ai-saas-dashboard",
    liveDemo:
      "https://ai-saas-dashboard-git-main-artyomwhites-projects.vercel.app/",
    apiDocs: null,
    healthUrl: null,
    featured: true,
  },
  {
    id: "2",
    title: "CRM SaaS Dashboard",
    role: "Full-Stack Developer",
    description:
      "CRM SaaS Dashboard is a production-style CRM MVP built for managing clients, deals, and workflows. The application demonstrates clean SaaS dashboard architecture, CRUD operations, reusable components, and scalable frontend organization using Next.js.",
    image: "/images/crm-saas.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],
    github: "https://github.com/artyomwhite/crm-saas-dashboard",
    liveDemo: "https://crm-saas-dashboard-ashy.vercel.app/dashboard",
    apiDocs: null,
    healthUrl: null,
    featured: true,
  },
  {
    id: "3",
    title: "TaskFlow Realtime",
    role: "Full-Stack Developer",
    description:
      "TaskFlow is a real-time task management SaaS built with Next.js, NestJS, PostgreSQL, Prisma, and Socket.IO. It includes JWT authentication, real-time synchronization, scalable backend architecture, and production-ready deployment.",
    image: "/images/taskflow.jpg",
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Socket.IO",
    ],
    github: "https://github.com/artyomwhite/taskflow-realtime",
    liveDemo: "https://taskflow-realtime-ruddy.vercel.app",
    apiDocs: "https://taskflow-realtime.onrender.com/api/health",
    apiDocsLabel: "API",
    healthUrl: null,
    featured: true,
  },
  {
    id: "4",
    title: "Insight API",
    role: "Backend Engineer",
    description:
      "Insight API is a production-ready analytics backend focused on event tracking and reporting. Built with FastAPI, PostgreSQL, SQLAlchemy, and Docker, it provides secure REST APIs, event ingestion, authentication, funnels, and time-series analytics designed for scalable SaaS systems.",
    image: "/images/insight-api.jpg",
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "REST API",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/artyomwhite/insight-api",
    liveDemo: null,
    apiDocs: "https://insight-api-ycdn.onrender.com/docs",
    healthUrl: "https://insight-api-ycdn.onrender.com/api/v1/health",
    featured: true,
  },
  {
    id: "5",
    title: "AI Telegram CRM",
    role: "Full-Stack Developer",
    description:
      "AI Telegram CRM is a SaaS platform that combines Telegram automation with AI-powered task management. Users can manage tasks directly from Telegram while keeping everything synchronized with a web dashboard in real time. The project demonstrates backend architecture, AI integration, authentication, and scalable SaaS development.",
    image: "/images/telegram-crm.jpg",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Telegram Bot API",
    ],
    github: "https://github.com/artyomwhite/telegram-ai-workspace",
    liveDemo: "https://telegram-ai-workspace.vercel.app/dashboard",
    apiDocs: "https://telegram-ai-workspace.onrender.com/api/docs",
    healthUrl: null,
    featured: true,
  },
  {
    id: "6",
    title: "LinkPilot",
    role: "Full-Stack Developer",
    description:
      "LinkPilot is a production-ready URL shortener SaaS built with Next.js, NestJS, GraphQL, PostgreSQL, Prisma, and Redis. The application features JWT authentication, GraphQL APIs, Redis-powered caching, link analytics, custom aliases, expiration dates, and a modern dashboard. The project demonstrates scalable full-stack architecture, backend performance optimization, and production deployment.",
    image: "/images/link-pilot.jpg",
    techStack: [
      "Next.js",
      "NestJS",
      "GraphQL",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "TypeScript",
    ],
    github: "https://github.com/artyomwhite/linkpilot",
    liveDemo: "https://linkpilot-frontend-six.vercel.app",
    apiDocs: "https://linkpilot-6e4h.onrender.com/graphql",
    apiDocsLabel: "API",
    healthUrl: null,
    featured: true,
  },
];

validateProjects(projects);

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
