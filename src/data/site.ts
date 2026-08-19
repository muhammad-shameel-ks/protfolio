/**
 * Single source of truth for all portfolio content.
 *
 * Every component imports personal info, chapter definitions, and shared
 * constants from here. Changing a value here updates every reference
 * across the site — no more hunting through 9+ files.
 */

// ── Personal Info ──────────────────────────────────────────────

export const SITE = {
  name: "Muhammad Shameel KS",
  title: "Full-Stack Engineer & Sysadmin",
  email: "muhammadshameelks@gmail.com",
  phone: "+91 9605796725",
  phoneHref: "tel:+919605796725",
  linkedin: "https://linkedin.com/in/muhammad-shameel-k-s",
  github: "https://github.com/muhammad-shameel-ks",
  location: "Palakkad, Kerala, India",
  resumePath: "/resume.pdf",
  resumeFilename: "Shameel_Resume.pdf",
  siteUrl: "https://shameel.barchy.online",
} as const;

// ── Section / Chapter Definitions ──────────────────────────────
//
// Used by PersistentNav (scroll targets), ChapterHeader (chapter labels),
// and index.astro (section IDs). One edit here updates all three.

export interface Chapter {
  id: string;
  number: string;
  label: string;
  navLabel: string;
}

export const CHAPTERS: Chapter[] = [
  { id: "hero", number: "00", label: "The Beginning", navLabel: "Home" },
  { id: "chapter-01", number: "01", label: "The Origin", navLabel: "Story" },
  {
    id: "chapter-02",
    number: "02",
    label: "The Philosophy",
    navLabel: "Ethos",
  },
  { id: "chapter-03", number: "03", label: "The Sysadmin", navLabel: "Admin" },
  { id: "projects", number: "WORK", label: "The Work", navLabel: "Work" },
  { id: "chapter-04", number: "04", label: "The Multiplier", navLabel: "AI" },
  { id: "chapter-05", number: "05", label: "The Toolkit", navLabel: "Tools" },
  { id: "contact", number: "06", label: "The Connection", navLabel: "Reach" },
] as const;

/** Navigation items for PersistentNav (derived from CHAPTERS) */
export const NAV_ITEMS = CHAPTERS.map(({ id, navLabel }) => ({
  id,
  label: navLabel,
}));

/** Chapter items for ChapterHeader (derived from CHAPTERS) */
export const CHAPTER_ITEMS = CHAPTERS.map(({ id, number, label }) => ({
  id,
  number,
  label,
}));

// ── Floating Icons (Hero background) ──────────────────────────

export const FLOAT_ICONS = [
  "/reactjs.svg",
  "/nextjs-light.svg",
  "/typescript.svg",
  "/kubernetes.svg",
  "/docker-engine.svg",
  "/python.svg",
  "/nodejs.svg",
  "/supabase.svg",
  "/tailwind.svg",
  "/arch-linux.svg",
] as const;

// ── Contact Info Links ─────────────────────────────────────────

export interface ContactLink {
  label: string;
  value: string;
  href: string | null;
  color: "green" | "blue" | "purple" | "orange";
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    color: "green",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    color: "blue",
  },
  {
    label: "LinkedIn",
    value: "muhammad-shameel-k-s",
    href: SITE.linkedin,
    color: "purple",
  },
  {
    label: "Location",
    value: SITE.location,
    href: null,
    color: "orange",
  },
];
