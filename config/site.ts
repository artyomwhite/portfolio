import type { SocialLink } from "@/types";

export const siteConfig = {
  name: "Artem White",
  author: "Artem White",
  role: "Full Stack Developer",
  headline: [
    "Building SaaS products,",
    "AI systems,",
    "and scalable backend architecture.",
  ],
  tagline: "Building SaaS & AI systems",
  bio: "I design and ship production-grade software for teams that need reliable systems, clean interfaces, and architecture that scales. From AI-powered dashboards to multi-tenant SaaS platforms — I focus on products that solve real business problems.",
  description:
    "Full Stack Developer building SaaS and AI systems. Portfolio showcasing engineering-grade products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://artemwhite.dev",
  locale: "en_US",
  copyright: "All rights reserved.",
  keywords: [
    "Full Stack Developer",
    "SaaS",
    "AI Systems",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  metadata: {
    title: "Artem White — Full Stack Developer",
    titleTemplate: "%s | Artem White",
    ogImage: "/images/my_photo.jpg",
    ogImageWidth: 959,
    ogImageHeight: 1044,
  },
  images: {
    profile: "/images/my_photo.jpg?v=20260704b",
  },
  social: [
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/artyomwhite",
      icon: "/icons/github.svg",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/artyomwhite/",
      icon: "/icons/linkedin.svg",
    },
    {
      id: "upwork",
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~018a2b0ddd2a6c5bde",
      icon: "/icons/upwork.svg",
    },
    {
      id: "fiverr",
      name: "Fiverr",
      href: "https://www.fiverr.com/artem_white",
      icon: "/icons/fiverr.svg",
    },
  ] satisfies SocialLink[],
} as const;

export const socialLinks: SocialLink[] = siteConfig.social;
