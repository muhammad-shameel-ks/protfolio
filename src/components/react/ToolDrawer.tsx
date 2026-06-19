import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from './SoundSystem';

interface Tool {
  name: string;
  desc: string;
  icon: string;
  color: string;
  experience: string; // e.g. "2+ Years", "Daily Driver"
  usage: string; // how Shameel uses it
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  tools: Tool[];
}

const CATEGORIES: Category[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    tools: [
      { name: "React", desc: "UI Library", icon: "/reactjs.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Production Ready", usage: "Main libraries for interactive components, dashboard widgets, and client UIs." },
      { name: "Next.js", desc: "React Framework", icon: "/nextjs-light.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Production Ready", usage: "Utilized for complex dashboards requiring Server-Side Rendering (SSR) and SEO optimizations." },
      { name: "TypeScript", desc: "Typed JavaScript", icon: "/typescript.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Ensures type safety across all full-stack repositories, catching bugs before deploy." },
      { name: "Flutter", desc: "Cross-platform Mobile", icon: "/flutter.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "1.5 Years", usage: "Developed mobile college management apps with local offline syncing capabilities." },
      { name: "Tailwind CSS", desc: "Utility-first Styles", icon: "/tailwind.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Speeds up UI construction. Utilizes Tailwind CSS v4 in current configurations." }
    ]
  },
  {
    id: "backend",
    name: "Backend & DB",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    tools: [
      { name: "PocketBase", desc: "Single-file Backend", icon: "/resend.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Daily Driver", usage: "Handles real-time databases and user auth. Hosted directly inside Kubernetes pods." },
      { name: "Supabase", desc: "Open-source Firebase", icon: "/supabase.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Production Ready", usage: "Used for Postgres database instances, realtime channel triggers, and object storage buckets." },
      { name: "PostgreSQL", desc: "Relational Database", icon: "/postgresql.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Capable", usage: "Configures tables, schemas, relations, and indexed triggers for full-scale applications." },
      { name: "Node.js", desc: "JS Runtime", icon: "/nodejs.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Capable", usage: "Used for API routing endpoints, server entrypoints, and standalone automation scripts." },
      { name: "MSSQL", desc: "SQL Server", icon: "/microsoft-sql-server.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Intership", usage: "Integrated with React interfaces for office databases during professional internships." }
    ]
  },
  {
    id: "devops",
    name: "DevOps & OS",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      </svg>
    ),
    tools: [
      { name: "Kubernetes", desc: "Orchestration", icon: "/kubernetes.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "Learning (Active)", usage: "Hosts homelab node pods, routing traffic, setting service configurations." },
      { name: "Docker", desc: "Container Engine", icon: "/docker-engine.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Containers are compiled for frontend pages, PocketBase instances, and cron operations." },
      { name: "Tailscale", desc: "WireGuard VPN", icon: "/tailscale-light.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Daily Driver", usage: "Maintains encrypted zero-trust tunnels between local VAIO nodes and GitHub CI/CD builders." },
      { name: "Cloudflare", desc: "DNS & CDN Edge", icon: "/cloudflare.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Daily Driver", usage: "Secures websites, provisions SSL certificates, and tunnels internal ports to public domains." },
      { name: "Arch Linux", desc: "Rolling OS", icon: "/arch-linux.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "The main operating system. Preloaded with customized tiling window configurations." }
    ]
  },
  {
    id: "automation",
    name: "Automation",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    tools: [
      { name: "Python", desc: "Scripting Language", icon: "/python.svg", color: "bg-pastel-yellow/40 dark:bg-[#2E2D14] text-yellow-600 dark:text-yellow-400", experience: "Comfortable", usage: "Automates local folder configurations, database scripts, and webhook tunnel parsers." },
      { name: "GitHub Actions", desc: "CI/CD Orchestration", icon: "/github-light.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "Production Ready", usage: "Compiles container builds automatically on commits, deploying to homelab cluster nodes." },
      { name: "n8n", desc: "Workflow Engine", icon: "/n8n.svg", color: "bg-pastel-pink/40 dark:bg-[#2E1423] text-pink-600 dark:text-pink-400", experience: "Daily Driver", usage: "Coordinates cron processes, system health warnings, database backups, and contact forms." }
    ]
  }
];

export default function ToolDrawer() {
  const [activeCat, setActiveCat] = useState("frontend");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleCatSelect = (id: string) => {
    playClickSound();
    setActiveCat(id);
    setSelectedTool(null); // Clear selected details on tab change
  };

  const handleToolSelect = (tool: Tool) => {
    playClickSound();
    setSelectedTool(tool === selectedTool ? null : tool);
  };

  const category = CATEGORIES.find(c => c.id === activeCat) || CATEGORIES[0];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 relative">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pastel-orange/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-pastel-purple/10 blur-[80px] pointer-events-none" />

      {/* Section Indicator */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-pastel-blue/40 flex items-center justify-center text-blue-500 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <span className="font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase">
          The Toolkit
        </span>
      </div>

      <h2 className="text-center text-2xl md:text-4xl font-bold tracking-tight mb-3 text-fg">
        The systems I deploy & <span className="text-accent">languages I speak.</span>
      </h2>
      <p className="text-center text-fg-muted text-sm md:text-base font-light mb-12 max-w-lg mx-auto leading-relaxed">
        Categorized index of packages, systems, databases, and workflow utilities. Click on a badge to check detailed production usage.
      </p>

      {/* Tabs list */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-surface-warm dark:bg-[#161514] p-1.5 rounded-2xl max-w-xl mx-auto border border-border dark:border-border-dark transition-colors">
        {CATEGORIES.map(cat => {
          const isActive = cat.id === activeCat;
          return (
            <button
              key={cat.id}
              onClick={() => handleCatSelect(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider font-[Silkscreen] uppercase transition-all duration-300
                ${isActive 
                  ? 'bg-white dark:bg-surface text-accent shadow-sm' 
                  : 'text-fg-muted dark:text-fg-faint hover:text-fg hover:bg-white/40 dark:hover:bg-white/5'}
              `}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Drawer Grid area */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Badges Grid (Left / Full on mobile) */}
        <div className={selectedTool ? "lg:col-span-7 transition-all duration-300" : "lg:col-span-12 transition-all duration-300"}>
          <motion.div 
            layout
            className="flex flex-wrap gap-3 justify-center"
          >
            <AnimatePresence mode="popLayout">
              {category.tools.map(tool => {
                const isSelected = selectedTool?.name === tool.name;
                return (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    key={tool.name}
                    onClick={() => handleToolSelect(tool)}
                    className={`inline-flex items-center gap-2.5 px-5 py-3 text-xs font-bold rounded-full border cursor-pointer transition-all duration-300
                      ${isSelected 
                        ? 'border-accent ring-2 ring-accent/20 scale-105 shadow-md ' + tool.color
                        : 'border-border dark:border-border-dark bg-white dark:bg-surface hover:scale-105 hover:y-[-2px] hover:shadow-sm ' + tool.color}
                    `}
                  >
                    <img src={tool.icon} alt="" className="w-4.5 h-4.5 object-contain" />
                    <span className="text-fg">{tool.name}</span>
                    <span className="text-[10px] text-fg-faint font-light">({tool.desc})</span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Detailed Pane (Slides in on right) */}
        <AnimatePresence>
          {selectedTool && (
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 rounded-3xl border border-border dark:border-border-dark bg-white dark:bg-surface p-6 shadow-xl shadow-black/[0.02] dark:shadow-none"
            >
              <div className="flex items-center justify-between mb-4 border-b border-border/80 dark:border-border-dark pb-3">
                <div className="flex items-center gap-2.5">
                  <img src={selectedTool.icon} alt="" className="w-6 h-6 object-contain" />
                  <h4 className="font-bold text-lg text-fg">{selectedTool.name}</h4>
                </div>
                <button
                  onClick={() => { playClickSound(); setSelectedTool(null); }}
                  className="text-fg-faint hover:text-fg text-sm cursor-pointer"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {/* Level badge */}
                <div>
                  <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1">PRO EXP</span>
                  <div className="inline-block px-2.5 py-1 bg-accent-light dark:bg-accent-light border border-accent/25 text-accent text-[10px] font-[Silkscreen] tracking-wider uppercase rounded-md font-bold">
                    {selectedTool.experience}
                  </div>
                </div>

                {/* Concept definition */}
                <div>
                  <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1">DEFINITION</span>
                  <p className="text-xs text-fg-muted font-light leading-relaxed">
                    {selectedTool.name} is a {selectedTool.desc.toLowerCase()}.
                  </p>
                </div>

                {/* Shameel's utilization */}
                <div>
                  <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1">PRO UTILIZATION</span>
                  <p className="text-xs text-fg-muted font-light leading-relaxed">
                    {selectedTool.usage}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
