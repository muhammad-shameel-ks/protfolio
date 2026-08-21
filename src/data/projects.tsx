/**
 * Project definitions — single source of truth for all portfolio projects.
 *
 * Imported by ProjectList.tsx. Edit here to add/remove/reorder projects.
 */

export interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  funNote: string;
  tags: { name: string; color: string }[];
  stackIcons?: string[];
  link: string;
  highlights: string[];
  cardBg: string;
  iconColor: string;
  showInternshipBadge?: boolean;
  screenshot?: string;
  isLive?: boolean;
  isWip?: boolean;
  kind?: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Scentance",
    subtitle: "Premium Fragrance E-commerce",
    description:
      "A premium fragrance e-commerce platform built for a client. Live at scentenceparfum.com with real customers and orders.",
    funNote:
      "This isn't a portfolio piece — it's a production business with real revenue.",
    tags: [
      { name: "Next.js 16", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Three.js/R3F", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Supabase", color: "bg-pastel-green/50 text-green-700" },
    ],
    stackIcons: [
      "/nextjs-light.svg",
      "/typescript.svg",
      "/supabase.svg",
      "/resend.svg",
    ],
    link: "https://scentenceparfum.com",
    highlights: [
      "Live production with real customers",
      "3D interactive mesh background",
      "Admin dashboard with order tracking",
    ],
    cardBg: "bg-gradient-to-br from-pastel-purple/25 to-pastel-pink/10",
    iconColor: "bg-pastel-purple/40 text-purple-600",
    screenshot: "/projects/scentence.webp",
    isLive: true,
  },
  {
    index: "02",
    title: "Stock Salt",
    subtitle: "Real-time Inventory SaaS",
    description:
      "Multi-outlet inventory management with real-time sync across all POS terminals.",
    funNote: "Because spreadsheets shouldn't be the backbone of a business.",
    tags: [
      { name: "Next.js 15", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Supabase Realtime", color: "bg-pastel-green/50 text-green-700" },
    ],
    stackIcons: [
      "/nextjs-light.svg",
      "/typescript.svg",
      "/supabase.svg",
      "/reactjs.svg",
    ],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: [
      "Real-time stock sync across terminals",
      "Centralized master stock management",
      "Revenue analytics dashboard",
    ],
    cardBg: "bg-gradient-to-br from-pastel-blue/25 to-pastel-green/10",
    iconColor: "bg-pastel-blue/40 text-blue-600",
    screenshot: "/projects/stock-salt.webp",
  },
  {
    index: "03",
    title: "Office Pal",
    subtitle: "College Management System",
    description:
      "Replaces paperwork with automated exam seating and administration.",
    funNote: "Yes, I automated away someone's entire job. They thanked me.",
    tags: [
      { name: "Flutter", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Supabase", color: "bg-pastel-green/50 text-green-700" },
      { name: "Riverpod", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    stackIcons: ["/flutter.svg", "/supabase.svg"],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: [
      "Anti-cheat seating algorithm",
      "Print-ready PDF generation",
      "4 role-based dashboards",
    ],
    cardBg: "bg-gradient-to-br from-pastel-purple/25 to-pastel-pink/10",
    iconColor: "bg-pastel-purple/40 text-purple-600",
    screenshot: "/projects/office-pal.webp",
  },
  {
    index: "04",
    title: "KSDC Smart Helper",
    subtitle: "SQL tooling for non-technical staff",
    description:
      "Tooling built for the Kerala State Development Corporation for SC/ST: auto-generates SQL commands for non-tech staff and includes an EMI + GST calculator. Ships a solved production bug in duplicate-receipt checks.",
    funNote:
      "Making SQL and numbers accessible to everyone — staff use it daily.",
    tags: [
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Node.js", color: "bg-pastel-green/50 text-green-700" },
    ],
    stackIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/nodejs.svg",
      "/microsoft-sql-server.svg",
    ],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: [
      "Auto SQL query generation",
      "EMI + GST calculator",
      "Solved duplicate-receipt production bug",
      "Simplified UI for non-tech users",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-yellow/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
    showInternshipBadge: true,
    screenshot: "/projects/ksdc-smart.webp",
  },
  {
    index: "08",
    title: "SpeeHive Social",
    subtitle: "Agentic AI Social Media Planner",
    description:
      "Flutter app with Clean Architecture that lets an agentic AI core decide when to query calendars and post to LinkedIn. Tool-calling AI, OAuth, multi-tone drafts.",
    funNote:
      "The agent stops reminding you to post — it just reads your calendar and drafts.",
    tags: [
      { name: "Flutter", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Dart", color: "bg-pastel-green/50 text-green-700" },
      { name: "Riverpod", color: "bg-pastel-orange/50 text-orange-700" },
      { name: "OpenAI", color: "bg-pastel-purple/50 text-purple-700" },
    ],
    stackIcons: ["/flutter.svg", "/reactjs.svg"],
    link: "https://github.com/muhammad-shameel-ks/speehive_social",
    highlights: [
      "Agentic AI tool-calling core",
      "Clean Architecture + Riverpod",
      "Google / Outlook → LinkedIn automation",
    ],
    cardBg: "bg-gradient-to-br from-pastel-blue/20 to-pastel-green/10",
    iconColor: "bg-pastel-blue/40 text-blue-600",
    kind: "AGENTIC APP",
  },
  {
    index: "09",
    title: "ExpenseHive Modernization",
    subtitle: "Domain-driven Greenfield Rewrite",
    description:
      "Documented greenfield modernization — formal spec, UX research, approval-workflow domain model, ADR-driven architecture (Azure-native + Next.js), scheduled sweep worker.",
    funNote:
      "The repo is a spec-first thesis on how to modernize a legacy app without guessing.",
    tags: [
      { name: "Next.js", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "PostgreSQL", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Azure", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/postgresql.svg"],
    link: "https://github.com/muhammad-shameel-ks/expence-hive-modernization",
    highlights: [
      "Formal spec + ADRs",
      "Approval-workflow domain model",
      "Scheduled sweep worker (ADR-0018)",
    ],
    cardBg: "bg-gradient-to-br from-pastel-purple/20 to-pastel-blue/10",
    iconColor: "bg-pastel-purple/40 text-purple-600",
    kind: "ARCHITECTURE",
  },
  {
    index: "05",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Tunneling",
    description: "Auto Cloudflare Tunnel for local n8n development.",
    funNote: "I was too lazy to configure tunnels manually. So I automated it.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700" },
      { name: "Docker", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Cloudflare", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    stackIcons: ["/python.svg", "/docker-engine.svg", "/cloudflare.svg"],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: [
      "Auto Cloudflare Tunnel provisioning",
      "Dynamic webhook URL config",
      "Dual CLI + TUI interface",
    ],
    cardBg: "bg-gradient-to-br from-pastel-green/20 to-pastel-blue/10",
    iconColor: "bg-pastel-green/40 text-green-600",
  },
  {
    index: "06",
    title: "DMS Speech-to-Text",
    subtitle: "Zero-idle dictation plugin for Hyprland",
    description:
      "A minimal-resource dictation plugin for Dank Material Shell — records voice, transcribes it with Mistral Voxtral cloud STT, and auto-pastes the transcript into whatever window is focused. Nothing runs at idle.",
    funNote: "Because reaching for the keyboard mid-thought kills the thought.",
    tags: [
      { name: "QML", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Shell", color: "bg-pastel-green/50 text-green-700" },
      { name: "Mistral API", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/dms-stt",
    highlights: [
      "No resident processes — just a ~15KB C mic-meter binary while recording",
      "Global toggle bindable to any Hyprland keybind",
      "Cloud STT at $0.003/min instead of a local model hogging RAM",
    ],
    cardBg: "bg-gradient-to-br from-pastel-blue/20 to-pastel-green/10",
    iconColor: "bg-pastel-blue/40 text-blue-600",
    kind: "HYPRLAND PLUGIN",
  },
  {
    index: "07",
    title: "Unified Agent Control",
    subtitle: "One config layer for Claude, opencode, Gemini CLI agents",
    description:
      "A Linux-first tool that unifies scattered AI-agent config files (~/.claude.json, ~/.config/opencode, ~/.gemini/config) into a single managed layout via symlinks, so switching between agent CLIs doesn't mean reconfiguring each one from scratch.",
    funNote:
      "Pre-1.0 and it says so loudly — I'd rather ship an honest work-in-progress than a polished lie.",
    tags: [
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Linux", color: "bg-pastel-orange/50 text-orange-700" },
      { name: "CLI", color: "bg-pastel-green/50 text-green-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/unified-agent-control",
    highlights: [
      "Symlinks scattered agent configs into a single ~/.config/uac source of truth",
      "Tested on X11 and Wayland, including Hyprland",
      "Ships its own data-safety warnings — it reads and rewrites real config files",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-blue/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
    isWip: true,
    kind: "CLI TOOL",
  },
  {
    index: "10",
    title: "Menma Catering & Events",
    subtitle: "Premium Event Company Landing",
    description:
      "Astro static landing for a high-end wedding and event company — video hero, masonry gallery, testimonials, 19-service accordion.",
    funNote:
      "Full-viewport auto-cycling video hero with a mobile static fallback.",
    tags: [
      { name: "Astro", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "CSS", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Bun", color: "bg-pastel-yellow/50 text-yellow-700" },
    ],
    stackIcons: ["/typescript.svg"],
    link: "https://menma-catering-and-events.vercel.app",
    highlights: [
      "Video hero with mobile fallback",
      "Masonry gallery + testimonials",
      "19-service accordion",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-yellow/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
    screenshot: "/projects/menma.webp",
    isLive: true,
    kind: "LANDING PAGE",
  },
  {
    index: "11",
    title: "Chemmeenz",
    subtitle: "Kerala Seafood Restaurant Landing",
    description:
      "Astro site for a Palakkad restaurant — cinematic hero, signature dish gallery, reviews carousel, contact/location.",
    funNote: "Seafood photography you could almost smell.",
    tags: [
      { name: "Astro", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "CSS", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Bun", color: "bg-pastel-yellow/50 text-yellow-700" },
    ],
    stackIcons: ["/typescript.svg"],
    link: "https://chemmeenz.vercel.app",
    highlights: [
      "Cinematic vignette hero",
      "Dish gallery + reviews carousel",
      "Responsive single-page",
    ],
    cardBg: "bg-gradient-to-br from-pastel-blue/20 to-pastel-green/10",
    iconColor: "bg-pastel-blue/40 text-blue-600",
    screenshot: "/projects/chemmeenz.webp",
    isLive: true,
    kind: "LANDING PAGE",
  },
  {
    index: "12",
    title: "SpeeHive Linear Bot",
    subtitle: "Cloudflare Worker AI Agent",
    description:
      "OpenAI-powered Cloudflare Worker agent that integrates with Linear — responds to AgentSession webhooks, answers from a tool set, writes AgentActivity entries.",
    funNote:
      "An agent that lives in Linear and answers weather/time questions from your team.",
    tags: [
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Cloudflare", color: "bg-pastel-orange/50 text-orange-700" },
      { name: "OpenAI", color: "bg-pastel-purple/50 text-purple-700" },
    ],
    stackIcons: ["/typescript.svg", "/cloudflare.svg"],
    link: "https://github.com/muhammad-shameel-ks/speehive-linear-bot",
    highlights: [
      "Linear webhook + OAuth integration",
      "Tool-based agent on Cloudflare Workers",
      "Runs free on the edge, no server",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-blue/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
    kind: "AGENT",
  },
  {
    index: "13",
    title: "Clinic Management",
    subtitle: "Tauri Desktop App",
    description:
      "Tauri + React + TypeScript desktop app with a GitHub Actions pipeline that builds and releases Windows + Linux binaries on version tags.",
    funNote:
      "Native desktop from web tech — with CI that ships real installers.",
    tags: [
      { name: "Tauri", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Rust", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    stackIcons: ["/reactjs.svg", "/typescript.svg"],
    link: "https://github.com/muhammad-shameel-ks/clinic-management",
    highlights: [
      "Tauri + React desktop app",
      "Automated Win/Linux release pipeline",
      "GitHub Releases per version tag",
    ],
    cardBg: "bg-gradient-to-br from-pastel-green/20 to-pastel-blue/10",
    iconColor: "bg-pastel-green/40 text-green-600",
    kind: "DESKTOP",
  },
  {
    index: "14",
    title: "Bakery POS",
    subtitle: "Tauri Desktop POS",
    description:
      "Tauri + React + TypeScript point-of-sale desktop app with the same CI/CD release pipeline for Windows and Linux.",
    funNote: "Inventory on your coffee counter, not a cloud you don't control.",
    tags: [
      { name: "Tauri", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Rust", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    stackIcons: ["/reactjs.svg", "/typescript.svg"],
    link: "https://github.com/muhammad-shameel-ks/bakery-pos",
    highlights: [
      "Tauri desktop POS",
      "Cross-platform installers",
      "Local-first, no cloud dependency",
    ],
    cardBg: "bg-gradient-to-br from-pastel-yellow/20 to-pastel-orange/10",
    iconColor: "bg-pastel-yellow/40 text-yellow-700",
    kind: "DESKTOP",
  },
  {
    index: "15",
    title: "Asana Agent",
    subtitle: "Asana MCP Agent",
    description:
      "Python MCP setup that wires Asana into OpenAI-compatible agents (opencode/Claude) via OAuth or PAT, so AI can read tasks and take actions.",
    funNote: "The agent does Asana — you keep the meetings.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700" },
      { name: "MCP", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Asana", color: "bg-pastel-blue/50 text-blue-700" },
    ],
    stackIcons: ["/python.svg"],
    link: "https://github.com/muhammad-shameel-ks/asana-agent",
    highlights: [
      "OAuth + PAT auth flows",
      "MCP for AI tool access",
      "Task read/action via agent",
    ],
    cardBg: "bg-gradient-to-br from-pastel-yellow/20 to-pastel-green/10",
    iconColor: "bg-pastel-yellow/40 text-yellow-700",
    kind: "AGENT",
  },
];

/** SVG icon elements keyed by project index */
export const projectIcons: Record<string, React.ReactNode> = {
  "01": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  "02": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  "03": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "04": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "05": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="4" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  "06": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  ),
  "07": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  ),
  "08": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3 3 3 0 000 6 3 3 0 003 3v1a4 4 0 008 0v-1a3 3 0 003-3 3 3 0 000-6 3 3 0 00-3-3V6a4 4 0 00-4-4z" />
      <path d="M12 2v20" />
    </svg>
  ),
  "09": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h20v14H2z" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "10": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  "11": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  "12": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "13": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "14": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M9 17l6-6" />
    </svg>
  ),
  "15": (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l3 7 7 1-5 5 1.5 7L12 18l-6.5 4L7 15l-5-5 7-1z" />
    </svg>
  ),
};
