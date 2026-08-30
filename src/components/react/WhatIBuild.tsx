import { motion } from "framer-motion";
import { Bot, Zap, Puzzle, Layers } from "lucide-react";

const cards = [
  {
    Icon: Bot,
    title: "AI Agents",
    desc: "Agents that can reason, call tools, interact with APIs and actually perform tasks.",
    tags: ["Tool Calling", "MCP", "OpenAI", "Agent Workflows"],
    bg: "bg-pastel-purple/20",
    border: "border-purple-200/40",
    accent: "text-purple-600",
  },
  {
    Icon: Zap,
    title: "Automation",
    desc: "Replacing repetitive human workflows with software.",
    tags: ["n8n", "Webhooks", "APIs", "Background Jobs"],
    bg: "bg-pastel-orange/20",
    border: "border-orange-200/40",
    accent: "text-orange-600",
  },
  {
    Icon: Puzzle,
    title: "AI Applications",
    desc: "Not just chatbots — useful products built around AI.",
    tags: ["Next.js", "TypeScript", "Supabase", "Python"],
    bg: "bg-pastel-blue/20",
    border: "border-blue-200/40",
    accent: "text-blue-600",
  },
  {
    Icon: Layers,
    title: "Full-Stack Products",
    desc: "From frontend to database to deployment.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    bg: "bg-pastel-green/20",
    border: "border-green-200/40",
    accent: "text-green-600",
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-surface-warm border-y border-border/60 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-pastel-purple/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-pastel-orange/10 blur-[60px] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div whileHover={{ rotate: -8 }} className="w-10 h-10 rounded-xl bg-pastel-purple/40 flex items-center justify-center text-purple-500 shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 3h-8M12 7v-4M8 14h8M9 17h6" />
            </svg>
          </motion.div>
          <span className="font-[Silkscreen] text-[12px] tracking-widest uppercase text-accent">
            What I Build
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-fg mb-3"
        >
          Useful software that <span className="text-accent">automates real work.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-fg-muted text-base font-light mb-10 max-w-2xl leading-relaxed"
        >
          I focus on AI automation and full-stack development — from idea to deployed product.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border ${card.border} ${card.bg} p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-border/60 flex items-center justify-center shrink-0">
                  <card.Icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <span className={`font-[Silkscreen] text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-white border border-border/60 ${card.accent}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-bold text-fg mb-2">{card.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-4">{card.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full bg-white border border-border/50 text-[11px] font-medium text-fg-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
