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
  title: "Software Engineer — AI Automation & Full-Stack Development",
  email: "hi@shameel.dev",
  phone: "+91 9605796725",
  phoneHref: "tel:+919605796725",
  linkedin: "https://linkedin.com/in/muhammad-shameel-k-s",
  github: "https://github.com/muhammad-shameel-ks",
  location: "Palakkad, Kerala, India",
  resumePath: "/resume.pdf",
  resumeFilename: "Muhammad_Shameel_KS_Resume.pdf",
  siteUrl: "https://shameel.dev",

  // Search console verification — paste your codes after registering
  googleVerification: "",   // Google Search Console → HTML tag → content="..."
  bingVerification: "",     // Bing Webmaster Tools → meta tag → content="..."
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
  { id: "what-i-build", number: "02", label: "What I Build", navLabel: "Build" },
  { id: "projects", number: "WORK", label: "The Work", navLabel: "Work" },
  { id: "how-i-work", number: "03", label: "How I Work", navLabel: "How" },
  { id: "experience", number: "04", label: "Selected Experience", navLabel: "Experience" },
  { id: "infra", number: "ENG", label: "The Engineering", navLabel: "Infra" },
  { id: "stack", number: "STACK", label: "The Stack", navLabel: "Stack" },
  { id: "contact", number: "05", label: "The Connection", navLabel: "Reach" },
] as const;

/** Navigation items for PersistentNav — a focused subset of CHAPTERS */
export const NAV_ITEMS = [
  { id: "chapter-01", label: "Story" },
  { id: "what-i-build", label: "Build" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

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
  "/python.svg",
  "/n8n.svg",
  "/supabase.svg",
  "/nodejs.svg",
  "/cloudflare.svg",
  "/tailwind.svg",
  "/linux.svg",
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
