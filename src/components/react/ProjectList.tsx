import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface Project {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  funNote: string;
  tags: { name: string; color: string }[];
  link: string;
  highlights: string[];
  cardBg: string;
  iconColor: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "Stock Salt",
    subtitle: "Real-time Retail SaaS",
    description: "Multi-outlet inventory management with real-time sync. When one branch sells something, every other branch knows instantly — no refresh, no lag, no \"oops we oversold.\"",
    funNote: "Because spreadsheets shouldn't be the backbone of a business.",
    tags: [
      { name: "Next.js 15", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Supabase Realtime", color: "bg-pastel-green/50 text-green-700" },
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: [
      "Real-time stock sync across all POS terminals",
      "Centralized master stock with auto-distribution",
      "Hourly revenue momentum analytics",
    ],
    cardBg: "bg-gradient-to-br from-pastel-blue/25 to-pastel-green/10",
    iconColor: "bg-pastel-blue/40 text-blue-600",
  },
  {
    index: "02",
    title: "Office Pal",
    subtitle: "College Management System",
    description: "Replaces the mountain of paperwork in college administration. Features an algorithm that auto-generates exam seating so no two students with the same exam sit next to each other.",
    funNote: "Yes, I automated away someone's entire job. They thanked me.",
    tags: [
      { name: "Flutter", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Supabase", color: "bg-pastel-green/50 text-green-700" },
      { name: "Riverpod", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: [
      "Automated anti-cheat seating algorithm",
      "Print-ready PDF generation engine",
      "4 distinct role-based dashboards",
    ],
    cardBg: "bg-gradient-to-br from-pastel-purple/25 to-pastel-pink/10",
    iconColor: "bg-pastel-purple/40 text-purple-600",
  },
  {
    index: "03",
    title: "KSDC Smart Helper",
    subtitle: "Government Database Utility",
    description: "Built for the Kerala State Development Corporation. Their APIs were silently crashing in production due to encryption mismatches. I found the bug, fixed the infra, and hardened everything.",
    funNote: "Debugging government software is its own extreme sport.",
    tags: [
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Node.js", color: "bg-pastel-green/50 text-green-700" },
      { name: "MSSQL", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: [
      "Fixed silent encryption-related API crashes",
      "Centralized CORS & env management",
      "Production security hardening",
    ],
    cardBg: "bg-gradient-to-br from-pastel-orange/20 to-pastel-yellow/10",
    iconColor: "bg-pastel-orange/40 text-orange-600",
  },
  {
    index: "04",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Tunneling",
    description: "Makes local n8n development painless. No public IP, no port forwarding — just run it and a Cloudflare Tunnel appears out of thin air, ready to receive webhooks.",
    funNote: "I was too lazy to configure tunnels manually. So I automated it. Peak engineering.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700" },
      { name: "Docker", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Cloudflare", color: "bg-pastel-orange/50 text-orange-700" },
    ],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: [
      "Auto Cloudflare Tunnel provisioning",
      "Dynamic webhook URL configuration",
      "Dual CLI + TUI interface",
    ],
    cardBg: "bg-gradient-to-br from-pastel-green/20 to-pastel-blue/10",
    iconColor: "bg-pastel-green/40 text-green-600",
  },
];

const projectIcons: Record<string, React.ReactNode> = {
  "01": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  "02": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  "03": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  "04": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
};

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.35"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 0.97, 1]);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotateX.set((y - rect.height / 2) / 25 * -1);
    rotateY.set((x - rect.width / 2) / 25);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y: cardY, scale, rotateX: smoothRotateX, rotateY: smoothRotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
      className="group rounded-2xl border border-border/50 p-6 md:p-7 bg-white hover:shadow-lg hover:shadow-black/[0.03] transition-shadow duration-500 cursor-pointer relative overflow-hidden"
    >
      <div className={`absolute inset-0 ${project.cardBg} opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl`} />
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/30 blur-2xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-10 h-10 rounded-xl ${project.iconColor} flex items-center justify-center`}
            >
              {projectIcons[project.index]}
            </motion.div>
            <span className="font-[Silkscreen] text-[11.5px] text-fg-faint tracking-wider uppercase">
              {project.index} / {project.subtitle}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-8 rounded-full bg-white/80 border border-border/50 group-hover:border-accent/30 flex items-center justify-center transition-colors shrink-0"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-fg-muted group-hover:text-accent transition-colors">
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2.5 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-fg-muted font-light leading-relaxed mb-3 text-sm">
          {project.description}
        </p>

        {/* Fun note */}
        <div className="flex items-start gap-2 mb-4 px-3 py-2.5 rounded-lg bg-white/60 border border-border/30">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0">
            <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
          <p className="text-xs text-accent/80 italic font-medium leading-snug">
            {project.funNote}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag.name} className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${tag.color}`}>
              {tag.name}
            </span>
          ))}
        </div>

        {/* Expanded */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-4 border-t border-border/30">
                <span className="font-[Silkscreen] text-[14px] text-accent tracking-widest uppercase block mb-3">
                  HIGHLIGHTS
                </span>
                <ul className="space-y-2.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                      className="flex items-start gap-2.5 text-sm text-fg-muted"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  View on GitHub
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: -8 }}
            className="w-10 h-10 rounded-xl bg-pastel-orange/40 flex items-center justify-center text-accent shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </motion.div>
          <span className="font-[Silkscreen] text-[15px] text-accent tracking-widest uppercase">
            The Work
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
        >
          Things I've built that <span className="text-accent">actually ship.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-fg-muted text-base font-light mb-14 max-w-lg"
        >
          Real tools solving real problems for real people. Not proof-of-concepts that never launched.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <TiltCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}