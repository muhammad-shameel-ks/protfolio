/**
 * Case study content for deep-dive pages.
 * Extends projects.tsx with narrative sections.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  projectIndex: string;
  heroImage: string;
  link: string;
  linkLabel: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcome: string[];
  highlights: string[];
  quote?: { text: string; author: string };
}

export const caseStudies: Record<string, CaseStudy> = {
  scentance: {
    slug: "scentance",
    title: "Scentance",
    subtitle: "Premium Fragrance E-commerce — live business, real revenue",
    projectIndex: "04",
    heroImage: "/projects/scentence.webp",
    link: "https://scentenceparfum.com",
    linkLabel: "View Live Store",
    problem:
      "A fragrance retailer needed a premium, fast storefront that felt like a luxury brand — not a template. Existing Shopify themes were slow, generic, and locked them into app fees. They needed orders, inventory, and customer comms in one place without paying for five tools.",
    approach: [
      "Built on Next.js 16 + TypeScript for server rendering and edge performance — sub-500ms TTFB on Cloudflare.",
      "Designed a 3D mesh hero with Three.js/R3F to give the brand its signature depth without killing Lighthouse.",
      "Supabase for auth, orders, and inventory — realtime stock updates for the admin, row-level security for customers.",
      "Resend for transactional email (order confirmations, shipping updates) — no homelab dependency.",
      "Custom admin dashboard: order tracking, fulfillment, and customer lookups in one view.",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Three.js / R3F",
      "Supabase",
      "Resend",
      "Tailwind",
    ],
    outcome: [
      "Live at scentenceparfum.com with real customers and paid orders — not a demo.",
      "Lighthouse 98+ on performance, zero layout shift on the 3D hero.",
      "Admin handles orders without switching tools — fulfillment time cut in half (founder-reported).",
      "No vendor lock-in: owned codebase, portable Supabase backend.",
    ],
    highlights: [
      "Live production with real customers",
      "3D interactive mesh background",
      "Admin dashboard with order tracking",
    ],
  },
  "stock-salt": {
    slug: "stock-salt",
    title: "Stock Salt",
    subtitle: "Real-time Inventory SaaS — one source of truth for 5 outlets",
    projectIndex: "05",
    heroImage: "/projects/stock-salt.webp",
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    linkLabel: "View on GitHub",
    problem:
      "A retail chain tracked inventory in spreadsheets across 5 branches. POS terminals drifted, stock counts were fiction, and managers spent hours reconciling. They needed realtime truth — one number, everywhere, instantly.",
    approach: [
      "Next.js 15 + Supabase Realtime: every POS terminal subscribes to the same inventory channel — updates propagate in <200ms.",
      "Master stock as source of truth, branch allocations as views — no double counting.",
      "Optimistic UI for sales, conflict resolution on the server for concurrent edits.",
      "Revenue analytics dashboard: daily/seasonal trends, low-stock alerts, branch comparisons.",
      "Role-based access: outlet staff vs central inventory manager.",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Supabase Realtime",
      "Tailwind",
      "PostgreSQL",
    ],
    outcome: [
      "Realtime sync across terminals — ‘is this in stock?’ now has one answer.",
      "Spreadsheets retired; managers get a single dashboard instead of five files.",
      "Revenue view surfaced slow movers and stockouts that spreadsheets hid.",
      "Foundation for a SaaS: multi-tenant ready, branch-per-tenant model.",
    ],
    highlights: [
      "Real-time stock sync across terminals",
      "Centralized master stock management",
      "Revenue analytics dashboard",
    ],
  },
  "office-pal": {
    slug: "office-pal",
    title: "Office Pal",
    subtitle: "College Management — from paperwork to one-tap exam seating",
    projectIndex: "06",
    heroImage: "/projects/office-pal.webp",
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    linkLabel: "View on GitHub",
    problem:
      "A college scheduled exam seating by hand for 2000 students. The superintendent spent days ensuring no two students with the same exam sat adjacent — error prone, exhausting, and paper heavy. They asked: can you automate this?",
    approach: [
      "Built in Flutter (single codebase for Android/iOS/desktop) with Riverpod for state — needed on tablets in exam halls.",
      "Designed an anti-cheat seating algorithm: graph-coloring approach that guarantees no adjacent same-exam neighbors, then verified with property tests.",
      "Print-ready PDFs: seating charts, room-wise lists, and invigilator sheets — exact college format, not generic tables.",
      "4 role-based dashboards: admin, superintendent, invigilator, student view.",
      "Supabase backend for exams, students, and seating plans — offline-friendly where needed.",
    ],
    stack: ["Flutter", "Supabase", "Riverpod", "Dart", "PDF generation"],
    outcome: [
      "Seating for 2000 students generated in minutes, not days — superintendent confirmed the output matched manual rules.",
      "Zero adjacent same-exam neighbors — algorithmically guaranteed, manually verified on first deployment.",
      "Paperwork replaced; staff asked for attendance automation next (the real proof).",
      "Reusable for any exam schedule — not a one-off script.",
    ],
    highlights: [
      "Anti-cheat seating algorithm",
      "Print-ready PDF generation",
      "4 role-based dashboards",
    ],
  },
  "speehive-social": {
    slug: "speehive-social",
    title: "SpeeHive Social",
    subtitle: "Agentic AI social media planner — Flutter + Clean Architecture",
    projectIndex: "01",
    heroImage: "",
    link: "https://github.com/muhammad-shameel-ks/speehive_social",
    linkLabel: "View on GitHub",
    problem:
      "Social managers juggle calendars, content calendars, and posting engines as separate apps. Scheduling a post means copying a draft, opening LinkedIn, pasting it, and hoping the tone matches the brand. SpeeHive Social replaces that with one app where an agentic AI core decides when and how to publish.",
    approach: [
      "Flutter single codebase with Clean Architecture split across four layers — presentation, domain, data, core — so UI, business rules, and integrations stay independently testable.",
      "Riverpod for declarative dependency injection and state management; Notifiers drive every screen (chat, drafts, settings).",
      "Agentic AI core using tool-calling + real-time streaming: it decides which tool to call (query Google/Outlook calendar, generate a draft, publish a post) rather than following a fixed prompt script.",
      "Integrations: Google Calendar + Outlook Calendar readers, LinkedIn REST publishing engine, OAuth 2.0, multi-tone draft generation.",
      "Clean, modular docs with a Mermaid architecture diagram — the kind of repo you can hand to an onboarding engineer.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "OpenAI",
      "Google Calendar",
      "Outlook",
      "LinkedIn API",
      "OAuth 2.0",
    ],
    outcome: [
      "One app replaces calendars + posting engines — drafts generated in multiple tones and published to LinkedIn autonomously.",
      "Agentic tool-calling means the AI queries live calendar data instead of acting on a static prompt.",
      "Clean Architecture keeps integrations swappable and the core business logic unit-testable.",
      "Enterprise-grade structure that doubles as living proof of how I organize real Flutter/AI code.",
    ],
    highlights: [
      "Agentic AI tool-calling core",
      "Clean Architecture + Riverpod",
      "Google / Outlook → LinkedIn automation",
    ],
  },
  "expence-hive": {
    slug: "expence-hive",
    title: "ExpenseHive Modernization",
    subtitle:
      "Domain-driven greenfield modernization — specs, ADRs, Azure-ready",
    projectIndex: "09",
    heroImage: "",
    link: "https://github.com/muhammad-shameel-ks/expence-hive-modernization",
    linkLabel: "View on GitHub",
    problem:
      "A legacy expense application had grown unmaintainable — tangled state, no clear domain boundaries, and decisions nobody documented. The modernization needed a greenfield rewrite that captures real business rules and stops stale approvals piling up.",
    approach: [
      "Wrote a formal specification, UX research doc, and an approval-workflow domain model before writing features — requirements as a first-class artifact.",
      "Locked architecture choices into an ADR (0001: Azure-native + Next.js MVP) so decisions are recorded and contestable.",
      "Containerized local stack with Docker Compose — PostgreSQL, Azurite blob, Mailpit — plus idempotent migrations and seed (organizations, employees, roles, a draft workflow).",
      "A scheduled absence sweep worker (ADR-0018) advances stale claims even when nobody opens the app — enforcement at the data layer, not the UI.",
      "Every integration documented; side services (sweep) run as separate Compose services with healthchecks.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Azure (Azurite)",
      "Docker Compose",
      "Mailpit",
    ],
    outcome: [
      "A room to grow: spec, UX, domain model, and ADRs mean the next engineer understands why before touching how.",
      "Approval workflow captured as a domain model instead of scattered if-statements.",
      "Idempotent seed + migrations make onboarding local dev a few commands.",
      "Scheduled sweep keeps the system correct even when idle — a production-grade operational rethink.",
    ],
    highlights: [
      "Formal spec + ADRs",
      "Approval-workflow domain model",
      "Scheduled sweep worker (ADR-0018)",
    ],
  },
  "linear-ai-agent": {
    slug: "linear-ai-agent",
    title: "Linear AI Agent",
    subtitle: "Tool-calling agent inside Linear",
    projectIndex: "02",
    heroImage: "",
    link: "https://github.com/muhammad-shameel-ks/speehive-linear-bot",
    linkLabel: "View on GitHub",
    problem:
      "Teams live in Linear, but answering routine workspace questions still means switching context — looking up coordinates, weather, or local time manually and posting the result. The team needed an agent that lives inside Linear and answers from live tools, not a static prompt.",
    approach: [
      "Built as an OpenAI-compatible tool-calling agent deployed as a Cloudflare Worker — calls an OpenAI-compatible LLM endpoint (baseURL opencode.ai/zen/go/v1, model mimo-v2.5), zero servers, edge-hosted, auto-scales.",
      "Integrates with Linear via AgentSession webhooks: when a user prompts the agent, the Worker receives the session payload, runs the LLM tool loop, and streams AgentActivity entries back.",
      "Tools: getCoordinates, getWeather, getTime — each hits a live API so answers are grounded, not hallucinated.",
      "Writes AgentActivity entries directly to the Linear session so responses appear inline in the workspace, not in a separate chat app.",
    ],
    stack: [
      "OpenAI",
      "Cloudflare Workers",
      "TypeScript",
      "Linear API",
      "Webhooks",
      "Tool Calling",
    ],
    outcome: [
      "Agent responds inside Linear — no context switch, no separate bot UI.",
      "Tool calling grounds answers in live data: coordinates, weather, and time are fetched, not guessed.",
      "Edge hosting means zero maintenance: deploy via Wrangler, no server to patch or scale.",
      "Clean pattern for adding more tools without changing the transport layer.",
    ],
    highlights: [
      "OpenAI tool-calling on Cloudflare Workers",
      "Linear AgentSession webhook integration",
      "Live tools: coordinates, weather, time",
      "AgentActivity entries in Linear",
    ],
  },
  "asana-coding-agent": {
    slug: "asana-coding-agent",
    title: "Asana Coding Agent",
    subtitle: "AI-powered development automation",
    projectIndex: "03",
    heroImage: "",
    link: "https://github.com/muhammad-shameel-ks/asana-agent",
    linkLabel: "View on GitHub",
    problem:
      "At SpeeHive, development tasks live in Asana but turning a task into code still meant manual repo wrangling — clone, read context, edit, push, then update the task. As an AI Automation Engineer, I needed a way for an agent to do that loop automatically while staying tied to the Asana source of truth.",
    approach: [
      "Professional work at SpeeHive: built an AI agent that retrieves repositories, works on code, and automatically updates development tasks from Asana — part of an agentic development workflow where AI handles implementation and investigation.",
      "Public MCP wiring at github.com/muhammad-shameel-ks/asana-agent connects Asana to opencode via OAuth or PAT — so AI can read tasks, search workspaces, and take actions from the editor. The repo configures the official Asana MCP Server V2 at https://mcp.asana.com/v2/mcp (remote type, OAuth option 1 / PAT option 2).",
      "Auth: OAuth flow for team use, PAT for quick local setup; both expose the same tool set through the Model Context Protocol.",
      "Keeps Asana as the system of record — the agent reads tasks and writes updates back, so the task status always reflects what the code did.",
      "The repo ships a SpeeHive/AGENTS.md encoding the workflow: acknowledge task, clone/pull from SpeeHive/Projects/, branch, test, Conventional Commits, open PR.",
    ],
    stack: [
      "Python",
      "MCP",
      "Asana API",
      "opencode",
      "OAuth",
      "Asana MCP Server V2",
    ],
    outcome: [
      "Development tasks go from Asana → repo work → Asana update without manual copy-paste.",
      "MCP setup is reusable: opencode can now act on Asana tasks.",
      "Part of daily agentic workflow at SpeeHive: AI handles repetitive implementation while I focus on architecture and product decisions.",
      "No invented metrics — the value is the workflow: less context switching, faster task throughput.",
    ],
    highlights: [
      "Built at SpeeHive as AI Automation Engineer",
      "Retrieves repos, works on code, updates Asana tasks",
      "Asana MCP wiring via OAuth/PAT",
      "Agentic development workflow",
    ],
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
