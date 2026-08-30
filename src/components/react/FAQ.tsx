import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  q: string;
  a: string;
}

export const HIRE_FAQS: FAQItem[] = [
  {
    q: "What do you build?",
    a: "AI agents, automation, and full-stack products. Agents that reason, call tools, and interact with APIs — like the Linear AI Agent and Asana Coding Agent I built at SpeeHive — plus useful products from Next.js and TypeScript to Supabase and deployment. See the work at #projects — Scentance (live e-commerce), Stock Salt, and Office Pal are good starting points.",
  },
  {
    q: "How do you use AI in your workflow?",
    a: "AI doesn't replace me — it makes me dangerous. I use AI as an engineering multiplier: agents that call tools, interact with APIs, and reason over context to handle repetitive implementation and investigation. I focus on architecture, product decisions, debugging, and shipping. Agentic development, tool calling, API integration, workflow automation — that's the stack.",
  },
  {
    q: "What's the Asana Coding Agent?",
    a: "Professional work at SpeeHive as an AI Automation Engineer: an AI agent that retrieves repositories, works on code, and automatically updates development tasks from Asana. Publicly, I ship the Asana MCP wiring at github.com/muhammad-shameel-ks/asana-agent — it connects Asana to opencode via OAuth or PAT so AI can read tasks and take actions. The repo configures the official Asana MCP Server V2 at https://mcp.asana.com/v2/mcp (remote type, OAuth option 1 / PAT option 2). The agent is the workflow; the repo is the wiring.",
  },
  {
    q: "What's the Linear AI Agent?",
    a: "An OpenAI-compatible tool-calling agent on Cloudflare Workers that lives inside Linear. It responds to AgentSession webhooks, looks up coordinates/weather/time with live tools, and writes AgentActivity entries back to the session. Zero-maintenance edge hosting, grounded answers, no context switch. See /projects/linear-ai-agent for the case study and github.com/muhammad-shameel-ks/speehive-linear-bot for the code.",
  },
  {
    q: "Will you work with my existing stack?",
    a: "Yes — I pick the right tool, not the trendy one. TypeScript, Next.js, React, Node.js, Python, Flutter, Astro, Supabase, PostgreSQL, MySQL, MSSQL. For AI: OpenAI tool calling, MCP, n8n, Cloudflare Workers. If your stack is infra-heavy (Docker, K8s, Tailscale, Linux) that's a plus — I run that myself. If it's a mismatch, I'll tell you upfront.",
  },
  {
    q: "Are you available for remote work?",
    a: "Yes — Palakkad, Kerala (IST, UTC+5:30), async-first, overlapping EU/MENA hours and mornings with US East. GitHub, weekly demos, plain-English updates. You see the repo and deployment, not just screenshots. I reply within 12 hours — tell me your timeline at #contact and I'll confirm in one message.",
  },
];

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[15px] font-semibold text-fg group-hover:text-accent transition-colors">
          {item.q}
        </span>
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-accent border-accent text-white rotate-45" : "border-border text-fg-faint group-hover:border-accent/40"}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-fg-muted">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ items = HIRE_FAQS }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-pastel-orange/40 flex items-center justify-center text-accent">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <span className="font-[Silkscreen] text-[12px] tracking-widest uppercase text-accent">
            FAQ
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg mb-2">
          Questions before you hire me?
        </h2>
        <p className="text-sm text-fg-muted mb-8">
          Straight answers. If yours isn’t here,{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="underline underline-offset-4 hover:text-accent"
          >
            ask directly
          </a>{" "}
          — I reply within 12h.
        </p>
        <div className="rounded-2xl border border-border bg-white px-5 md:px-6">
          {items.map((it, i) => (
            <FAQRow
              key={it.q}
              item={it}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
