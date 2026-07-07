export const SECTION_COPY = {
  about: {
    title: "About",
    subtitle: "Engineering products that scale.",
  },
  skills: {
    title: "Skills & Technologies",
    subtitle: "Core stack for building production SaaS and AI products.",
  },
  projects: {
    title: "Selected Work",
    subtitle: "Products built for real business outcomes.",
  },
  contact: {
    title: "Contact",
    subtitle: "Available for SaaS, AI, and platform engineering projects.",
  },
} as const;

export const ABOUT_CONTENT = {
  intro:
    "I'm a Full Stack Developer who builds SaaS platforms and AI-powered systems for teams that need more than prototypes — they need production infrastructure.",
  pillars: [
    {
      title: "Who I Am",
      description:
        "Full-stack developer focused on building modern SaaS products and scalable backend systems. I enjoy turning business ideas into production-ready applications with clean architecture, maintainable code, and intuitive user experiences.",
    },
    {
      title: "What I Build",
      description:
        "I build AI-powered SaaS platforms, CRM systems, real-time applications, REST APIs, analytics backends, and Telegram automation tools. Every project is designed to be scalable, secure, and ready for real business environments.",
    },
    {
      title: "How I Work",
      description:
        "I begin with the business requirements, design a scalable architecture, and deliver features through clear, iterative development. My primary stack is JavaScript and Python, using modern frameworks including Next.js, React, NestJS, Express.js, FastAPI, and Django, together with PostgreSQL, Prisma ORM, Docker, and cloud deployment.",
    },
  ],
} as const;

export const CONTACT_CTA = {
  headline: "Let's build something great together.",
  description:
    "Open to full-time opportunities, contract work, and long-term product partnerships. Reach out through any platform below.",
} as const;
