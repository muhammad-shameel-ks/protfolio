import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  q: string;
  a: string;
}

export const HIRE_FAQS: FAQItem[] = [
  {
    q: "Are you available for hire right now?",
    a: "Yes — I'm open to freelance and full-time opportunities. I reply within 12 hours (usually same day). Tell me your timeline in the form and I'll confirm availability within one message.",
  },
  {
    q: "How do you charge and scope projects?",
    a: "Fixed price for well-scoped MVPs, weekly rate for open-ended builds. I scope from your problem, not your ticket list — you get a clear milestone plan, what’s in/out, and a fixed or capped price before we start. No surprises.",
  },
  {
    q: "How fast can you ship an MVP?",
    a: "Small tools in 1–2 weeks, multi-tenant SaaS or e-commerce in 3–6 weeks depending on scope. I use AI as a force multiplier (architecture, tests, scaffolding) but I read every diff — speed without cutting quality.",
  },
  {
    q: "Will you work with my existing stack?",
    a: "Yes. I pick the right tool, not the trendy one — I’ve shipped React / Next.js / TypeScript, Flutter, Supabase, PostgreSQL, Python, and Node. If your stack is MSSQL, Docker, or self-hosted K8s, even better — I live there. If it’s a mismatch, I’ll tell you upfront.",
  },
  {
    q: "How do we work together remotely?",
    a: "Async-first, Palakkad (IST, UTC+5:30) — overlapping hours with EU/MENA, morning overlap with US East. GitHub, weekly demos, and plain-English updates. You always see the repo and the deployment pipeline, not just screenshots.",
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
