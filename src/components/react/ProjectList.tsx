import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, playSuccessSound } from './SoundSystem';

interface Project {
  index: string;
  title: string;
  subtitle: string;
  category: 'saas' | 'mobile' | 'devops';
  description: string;
  funNote: string;
  tags: { name: string; color: string }[];
  stackIcons?: string[];
  link: string;
  highlights: string[];
  role: string;
  status: string;
  complexity: string;
  cardBg: string;
  iconColor: string;
  screenshot?: string;
  isLive?: boolean;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Scentance",
    subtitle: "Premium Fragrance E-commerce",
    category: "saas",
    description: "A premium fragrance e-commerce platform built for a client. Handles active customers, card processing, inventory, and order pipelines.",
    funNote: "This isn't a portfolio demo — it's a production business running with real revenue.",
    tags: [
      { name: "Next.js 16", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Three.js/R3F", color: "bg-pastel-purple/40 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
      { name: "Supabase", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/resend.svg"],
    link: "https://scentenceparfum.com",
    highlights: [
      "Live production with real customers",
      "3D interactive mesh background",
      "Admin dashboard with order tracking",
    ],
    role: "Lead Full-Stack Developer",
    status: "99.9% Uptime (Production)",
    complexity: "High / 12,000+ lines",
    cardBg: "from-pastel-purple/20 to-pastel-pink/5 dark:from-[#23142E]/10 dark:to-transparent",
    iconColor: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400",
    screenshot: "/projects/scentence.png",
    isLive: true,
  },
  {
    index: "02",
    title: "Stock Salt",
    subtitle: "Real-time Inventory SaaS",
    category: "saas",
    description: "Multi-outlet inventory management SaaS with instant stock syncing across active POS cash registers and registers database.",
    funNote: "Because spreadsheets are a terrible backbone for retail businesses.",
    tags: [
      { name: "Next.js 15", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Supabase Realtime", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/reactjs.svg"],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: [
      "Real-time stock sync across terminals",
      "Centralized master stock management",
      "Revenue analytics dashboard",
    ],
    role: "Full-Stack Creator",
    status: "Live Demo",
    complexity: "Medium / 7,500 lines",
    cardBg: "from-pastel-blue/20 to-pastel-green/5 dark:from-[#14222E]/10 dark:to-transparent",
    iconColor: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400",
    screenshot: "/projects/stock-salt.png",
    isLive: true,
  },
  {
    index: "03",
    title: "Office Pal",
    subtitle: "College Management System",
    category: "mobile",
    description: "Replaces student administration spreadsheets with auto-generated exam seating maps and automated role dashboards.",
    funNote: "Created an algorithm that ensures no two students with same exam sit adjacent.",
    tags: [
      { name: "Flutter", color: "bg-pastel-purple/40 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
      { name: "Supabase", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
      { name: "Riverpod", color: "bg-pastel-orange/40 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400" },
    ],
    stackIcons: ["/flutter.svg", "/supabase.svg"],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: [
      "Anti-cheat seating algorithm",
      "Print-ready PDF generation",
      "4 role-based dashboards",
    ],
    role: "Lead Mobile Architect",
    status: "Production Ready",
    complexity: "High / 9,000 lines",
    cardBg: "from-pastel-purple/20 to-pastel-pink/5 dark:from-[#23142E]/10 dark:to-transparent",
    iconColor: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400",
    screenshot: "/projects/office-pal.png",
  },
  {
    index: "04",
    title: "KSDC Smart Helper",
    subtitle: "SQL Command Generator",
    category: "mobile",
    description: "Generates SQL commands from visual UI controls for non-technical office administrative staff to safely fetch server details.",
    funNote: "Making SQL tables querying accessible to anyone, one block at a time.",
    tags: [
      { name: "React", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Node.js", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
    ],
    stackIcons: ["/reactjs.svg", "/typescript.svg", "/nodejs.svg", "/microsoft-sql-server.svg"],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: [
      "Auto SQL query generation",
      "Simplified UI for non-tech users",
      "Query validation",
    ],
    role: "Frontend Engineer (Intern)",
    status: "Completed & Deployed",
    complexity: "Medium / 3,200 lines",
    cardBg: "from-pastel-orange/15 to-pastel-yellow/5 dark:from-[#302116]/10 dark:to-transparent",
    iconColor: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400",
    screenshot: "/projects/ksdc-smart.png",
  },
  {
    index: "05",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Development Tunneling",
    category: "devops",
    description: "Command-line tool orchestrating Cloudflare Tunnels dynamically for local container n8n webhook workflow development.",
    funNote: "I got tired of editing tunnel config maps manually, so I wrote an automation.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/40 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" },
      { name: "Docker", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Cloudflare", color: "bg-pastel-orange/40 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400" },
    ],
    stackIcons: ["/python.svg", "/docker-engine.svg", "/cloudflare.svg"],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: [
      "Auto Cloudflare Tunnel provisioning",
      "Dynamic webhook URL config",
      "Dual CLI + TUI interface",
    ],
    role: "DevOps Creator",
    status: "Completed (Open Source)",
    complexity: "Low / 1,200 lines",
    cardBg: "from-pastel-green/15 to-pastel-blue/5 dark:from-[#142E1F]/10 dark:to-transparent",
    iconColor: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400",
  },
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Projects' },
  { id: 'saas', label: 'Production SaaS' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'devops', label: 'DevOps & CLI' },
];

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "01": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  "02": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  "03": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  "04": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  "05": <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/><path d="M2 2l20 20"/></svg>,
};

export default function ProjectList() {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleFilterSelect = (id: string) => {
    playClickSound();
    setFilter(id);
  };

  const openLightbox = (project: Project) => {
    playSuccessSound();
    setModalProject(project);
    document.body.setAttribute('data-modal-open', 'true');
  };

  const closeLightbox = () => {
    playClickSound();
    setModalProject(null);
    document.body.removeAttribute('data-modal-open');
  };

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.93, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 15, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-surface w-full max-w-4xl rounded-3xl overflow-hidden border border-border dark:border-border-dark flex flex-col md:flex-row shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>

              {/* Image Column */}
              <div className="flex-1 bg-surface-warm dark:bg-bg flex items-center justify-center relative min-h-[220px] md:min-h-[400px]">
                {modalProject.screenshot ? (
                  <img
                    src={modalProject.screenshot}
                    alt={modalProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-fg-faint select-none">
                    <div className="w-16 h-16 rounded-xl bg-pastel-green/20 dark:bg-green-950/20 flex items-center justify-center text-green-500">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/><path d="M2 2l20 20"/>
                      </svg>
                    </div>
                    <span className="font-[Silkscreen] text-[10px] tracking-wider uppercase">CLI DEV TOOL</span>
                  </div>
                )}
                
                {modalProject.isLive && (
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-green-500 text-white font-[Silkscreen] text-[9px] font-bold tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE SITE
                  </div>
                )}
              </div>

              {/* Details Column */}
              <div className="w-full md:w-[360px] p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border dark:border-border-dark max-h-[85vh] overflow-y-auto bg-white dark:bg-surface">
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-6 h-6 rounded-md ${modalProject.iconColor} flex items-center justify-center scale-90`}>
                        {PROJECT_ICONS[modalProject.index]}
                      </div>
                      <span className="font-[Silkscreen] text-[10px] text-accent tracking-wider uppercase font-bold">{modalProject.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-fg">{modalProject.title}</h3>
                  </div>

                  <p className="text-xs text-fg-muted font-light leading-relaxed">
                    {modalProject.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div>
                    <span className="text-[9px] font-[Silkscreen] text-fg-faint block uppercase mb-2 tracking-wider">PROJECT HIGHLIGHTS</span>
                    <ul className="space-y-1.5 list-none">
                      {modalProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-fg-muted font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs Table */}
                  <div className="border-t border-border/80 dark:border-border-dark pt-3.5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-fg-faint font-light">Project Role</span>
                      <span className="font-semibold text-fg">{modalProject.role}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-fg-faint font-light">System Status</span>
                      <span className="font-mono text-fg font-medium">{modalProject.status}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-fg-faint font-light">Scale Metric</span>
                      <span className="font-mono text-fg font-medium">{modalProject.complexity}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/80 dark:border-border-dark flex items-center justify-between">
                  <span className="text-[10px] font-mono text-fg-faint font-light">ID: {modalProject.index}</span>
                  <a
                    href={modalProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    <span>{modalProject.isLive ? 'Visit Page' : 'Get Code'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: -8 }}
            className="w-10 h-10 rounded-xl bg-pastel-orange/40 dark:bg-[#302116] flex items-center justify-center text-accent shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </motion.div>
          <span className="font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase">
            The Work
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 text-fg">
              Things I've built that <span className="text-accent">actually ship.</span>
            </h2>
            <p className="text-fg-muted text-sm md:text-base font-light max-w-lg leading-relaxed">
              Real systems solving active issues for real clients. No generic boilerplate templates.
            </p>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-1.5 bg-surface-warm dark:bg-[#161514] p-1 rounded-xl border border-border dark:border-border-dark transition-colors">
            {FILTER_OPTIONS.map(opt => {
              const isActive = opt.id === filter;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleFilterSelect(opt.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer
                    ${isActive 
                      ? 'bg-white dark:bg-surface text-accent shadow-sm' 
                      : 'text-fg-muted dark:text-fg-faint hover:text-fg'}
                  `}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.index}
                className="group rounded-2xl border border-border/60 dark:border-border-dark bg-white dark:bg-surface hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-none hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                
                {/* Visual Screenshot / Placeholder */}
                <div 
                  className={`relative h-44 ${project.screenshot ? 'cursor-zoom-in' : 'flex items-center justify-center'} bg-surface-warm dark:bg-bg overflow-hidden`}
                  onClick={() => openLightbox(project)}
                >
                  {project.screenshot ? (
                    <>
                      <img 
                        src={project.screenshot} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Click overlay hint */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-[Silkscreen] tracking-wider bg-black/60 px-3 py-1.5 rounded-lg transition-opacity">
                          EXPAND PROJECT
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1.5 text-fg-faint select-none">
                      <div className="w-14 h-14 rounded-xl bg-pastel-green/20 dark:bg-green-950/20 flex items-center justify-center text-green-500">
                        {PROJECT_ICONS[project.index]}
                      </div>
                      <span className="font-[Silkscreen] text-[9px] tracking-wider uppercase">DEV CORE UTILITY</span>
                    </div>
                  )}

                  {/* Live Badge */}
                  {project.isLive && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-green-500/90 text-white text-[9px] font-bold font-[Silkscreen] tracking-wider flex items-center gap-1 shadow-sm">
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>

                {/* Details Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${project.iconColor} flex items-center justify-center`}>
                          {PROJECT_ICONS[project.index]}
                        </div>
                        <span className="font-bold text-fg text-base">{project.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-fg-faint">#{project.index}</span>
                    </div>

                    <p className="text-sm text-fg-muted font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats mini tag row */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono border-t border-b border-border/40 dark:border-border-dark/60 py-2">
                      <div className="text-fg-faint">
                        ROLE: <span className="text-fg font-semibold">{project.role.split(' ')[0]}</span>
                      </div>
                      <div className="text-fg-faint text-right">
                        SCALE: <span className="text-fg font-semibold">{project.complexity.split(' ')[0]}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.color}`}>
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand link trigger */}
                  <div className="mt-6 pt-3.5 border-t border-border/30 flex items-center justify-between">
                    <button
                      onClick={() => openLightbox(project)}
                      className="text-xs text-accent hover:text-accent-dark font-bold tracking-wider font-[Silkscreen] uppercase cursor-pointer"
                    >
                      Inspect Logs ❯
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClickSound}
                      className="text-fg-faint hover:text-fg text-xs flex items-center gap-1 font-mono transition-colors"
                    >
                      <span>{project.isLive ? 'Live Link' : 'GitHub'}</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}