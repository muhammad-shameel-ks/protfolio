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
    screenshot: "/projects/scentence.png",
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
    screenshot: "/projects/stock-salt.png",
    isLive: true,
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
    screenshot: "/projects/office-pal.png",
  },
  {
    index: "04",
    title: "KSDC Smart Helper",
    subtitle: "SQL Command Generator",
    description: "Auto-generates SQL commands for non-technical staff.",
    funNote: "Making SQL accessible to everyone, one query at a time.",
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
      "Simplified UI for non-tech users",
      "Query validation",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-yellow/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
    showInternshipBadge: true,
    screenshot: "/projects/ksdc-smart.png",
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
    title: "MSSQL MCP Server",
    subtitle: "Model Context Protocol server for SQL Server",
    description:
      "Lets AI agents like Claude query and administer Microsoft SQL Server directly over MCP, with a configurable read-only mode so an agent can't accidentally mutate production data.",
    funNote:
      "Built so the AI doing my devops chores can't accidentally DROP TABLE.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700" },
      { name: "MCP", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "SQL Server", color: "bg-pastel-blue/50 text-blue-700" },
    ],
    stackIcons: ["/python.svg", "/microsoft-sql-server.svg"],
    link: "https://github.com/muhammad-shameel-ks/sql-server-mcp",
    highlights: [
      "Read-only mode guards against destructive queries",
      "Exposes schema browsing and query tools over MCP to any compatible AI client",
      "ODBC-based, works against self-hosted or cloud SQL Server",
    ],
    cardBg: "bg-gradient-to-br from-pastel-yellow/20 to-pastel-purple/10",
    iconColor: "bg-pastel-yellow/40 text-yellow-700",
    kind: "MCP SERVER",
  },
  {
    index: "07",
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
    index: "08",
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
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
      <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
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
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  ),
};
