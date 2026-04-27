import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  funNote: string;
  tags: string[];
  link: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    index: "01",
    title: "Stock Salt",
    subtitle: "Real-time Retail SaaS",
    description: "Multi-outlet inventory management with real-time sync. When one branch sells something, every other branch knows instantly — no refresh, no lag, no \"oops we oversold.\"",
    funNote: "Because spreadsheets shouldn't be the backbone of a business.",
    tags: ["Next.js 15", "TypeScript", "Supabase Realtime", "Tailwind 4"],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: [
      "Real-time stock sync across all POS terminals",
      "Centralized master stock with auto-distribution",
      "Hourly revenue momentum analytics"
    ]
  },
  {
    index: "02",
    title: "Office Pal",
    subtitle: "College Management System",
    description: "Replaces the mountain of paperwork in college administration. Features an algorithm that auto-generates exam seating so no two students with the same exam sit next to each other.",
    funNote: "Yes, I automated away someone's entire job. They thanked me.",
    tags: ["Flutter", "Supabase", "Riverpod", "GoRouter"],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: [
      "Automated anti-cheat seating algorithm",
      "Print-ready PDF generation",
      "4 distinct role-based dashboards"
    ]
  },
  {
    index: "03",
    title: "KSDC Smart Helper",
    subtitle: "Government Database Utility",
    description: "Built for the Kerala State Development Corporation. Their APIs were silently crashing in production due to encryption mismatches. I found the bug, fixed the infra, and hardened everything.",
    funNote: "Debugging government software is its own extreme sport.",
    tags: ["React", "TypeScript", "Node.js", "MSSQL"],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: [
      "Fixed silent encryption-related API crashes",
      "Centralized CORS & env management",
      "Production security hardening"
    ]
  },
  {
    index: "04",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Tunneling",
    description: "Makes local n8n development painless. No public IP, no port forwarding — just run it and a Cloudflare Tunnel appears out of thin air, ready to receive webhooks.",
    funNote: "I was too lazy to configure tunnels manually. So I automated it. Peak engineering.",
    tags: ["Python", "Docker", "Cloudflare API", "TUI"],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: [
      "Auto Cloudflare Tunnel provisioning",
      "Dynamic webhook URL configuration",
      "Dual CLI + TUI interface"
    ]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      onClick={() => setIsOpen(!isOpen)}
      className="group border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors duration-300 cursor-pointer bg-white"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-accent font-medium">{project.index}</span>
          <span className="text-xs font-mono text-fg-faint">/</span>
          <span className="text-xs font-mono text-fg-faint">{project.subtitle}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-8 h-8 rounded-full border border-border group-hover:border-accent/40 flex items-center justify-center transition-colors shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-fg-muted group-hover:text-accent transition-colors">
            <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-fg-muted font-light leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Fun note */}
      <p className="text-sm text-accent italic mb-5">
        "{project.funNote}"
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 text-[11px] font-mono text-fg-muted bg-surface rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-4 border-t border-border">
              <span className="text-xs font-mono text-accent tracking-widest uppercase block mb-4">
                Highlights
              </span>
              <ul className="space-y-3 mb-6">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-fg-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-accent tracking-widest uppercase block mb-4"
        >
          The Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Things I've built that
          <br />
          <span className="text-accent">actually ship.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-fg-muted text-lg font-light mb-16 max-w-xl"
        >
          Not proof-of-concepts. Not side-projects-that-never-launched.
          Real tools solving real problems for real people.
        </motion.p>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.index} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}