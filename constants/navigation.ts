export const SECTION_IDS = {
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
  hero: "hero",
} as const;

export const NAV_LINKS = [
  { href: `#${SECTION_IDS.about}`, id: SECTION_IDS.about, label: "About" },
  { href: `#${SECTION_IDS.skills}`, id: SECTION_IDS.skills, label: "Skills" },
  { href: `#${SECTION_IDS.projects}`, id: SECTION_IDS.projects, label: "Work" },
  { href: `#${SECTION_IDS.contact}`, id: SECTION_IDS.contact, label: "Contact" },
] as const;

export const FOOTER_NAV_LINKS = [
  { href: `/#${SECTION_IDS.about}`, label: "About" },
  { href: `/#${SECTION_IDS.skills}`, label: "Skills" },
  { href: `/#${SECTION_IDS.projects}`, label: "Work" },
  { href: `/#${SECTION_IDS.contact}`, label: "Contact" },
] as const;
