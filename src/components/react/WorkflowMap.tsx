import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from './SoundSystem';

interface WorkflowNode {
  id: string;
  name: string;
  role: string;
  icon: string;
  color: string;
  badgeBg: string;
  desc: string;
  bullets: string[];
}

const NODES: WorkflowNode[] = [
  {
    id: "human",
    name: "Shameel (Human Taste)",
    role: "Architect & Coordinator",
    icon: "🧠",
    color: "text-orange-500 border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 dark:border-orange-900/50",
    badgeBg: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    desc: "Provides the vision, software architecture, UX guidelines, database schemas, and final code verification. Taste and intent are human responsibilities.",
    bullets: [
      "Writes system designs & specs",
      "Performs code quality gatekeeping",
      "Assembles final integration",
      "Defines business logic requirements"
    ]
  },
  {
    id: "claude",
    name: "Claude (Architect & Debugger)",
    role: "Structural Assistant",
    icon: "🤖",
    color: "text-purple-500 border-purple-200 bg-purple-50/50 dark:bg-purple-950/20 dark:border-purple-900/50",
    badgeBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    desc: "An advanced coding partner used for pair programming complex React components, refactoring algorithms, writing Kubernetes YAML configurations, and explaining deep stack traces.",
    bullets: [
      "Generates boilerplate-free code structures",
      "Reviews diffs for security issues",
      "Provides architecture design alternatives",
      "Assists in writing clean Dockerfiles"
    ]
  },
  {
    id: "copilot",
    name: "Copilot (Inline Accelerator)",
    role: "Syntax Auto-complete",
    icon: "⚡",
    color: "text-blue-500 border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-900/50",
    badgeBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    desc: "Runs inside the editor to speed up routine typing. Instantly generates TypeScript types, mock test arrays, boilerplate interfaces, and routine script layouts.",
    bullets: [
      "Fills out long TypeScript interfaces",
      "Creates standard unit testing arrays",
      "Finishes repeating code structures",
      "Completes CSS layout attributes"
    ]
  },
  {
    id: "n8n",
    name: "n8n (Autonomous Workflows)",
    role: "System Automation Agent",
    icon: "⚙️",
    color: "text-pink-500 border-pink-200 bg-pink-50/50 dark:bg-pink-950/20 dark:border-pink-900/50",
    badgeBg: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
    desc: "A self-hosted automation runner executing cron workflows. It parses server health checks, backs up database files, triggers Discord/Slack build webhooks, and syncs dev logs.",
    bullets: [
      "Executes daily DB backups to local storage",
      "Pushes container build alerts to Slack",
      "Performs background health monitoring",
      "Dispatches incoming contact form details"
    ]
  }
];

export default function WorkflowMap() {
  const [activeId, setActiveId] = useState("human");

  const handleSelect = (id: string) => {
    playClickSound();
    setActiveId(id);
  };

  const activeNode = NODES.find(n => n.id === activeId) || NODES[0];

  return (
    <div className="mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Visual Map (Left Side) */}
        <div className="lg:col-span-6 flex flex-col justify-center relative min-h-[300px] border border-dashed border-border dark:border-border-dark rounded-2xl p-6 bg-surface-warm dark:bg-bg/40 overflow-hidden">
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Connected Lines Visualized */}
          <svg className="absolute inset-0 w-full h-full hidden md:block pointer-events-none z-0">
            <line x1="50%" y1="20%" x2="25%" y2="55%" stroke="var(--color-border-dark)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="20%" x2="75%" y2="55%" stroke="var(--color-border-dark)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="var(--color-border-dark)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="25%" y1="55%" x2="50%" y2="80%" stroke="var(--color-border-dark)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="75%" y1="55%" x2="50%" y2="80%" stroke="var(--color-border-dark)" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Node Grid Layout */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full gap-8">
            
            {/* Row 1: The Human Creator */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect("human")}
              className={`px-5 py-3 rounded-2xl border-2 flex items-center gap-3 shadow-md transition-all
                ${activeId === "human" ? 'border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface' : 'border-border dark:border-border-dark bg-white dark:bg-surface/50'}
              `}
            >
              <span className="text-xl">🧠</span>
              <div className="text-left">
                <span className="font-[Silkscreen] text-[9px] text-fg-faint block uppercase">Vision</span>
                <span className="text-xs font-bold text-fg">Shameel (Human Taste)</span>
              </div>
            </motion.button>

            {/* Row 2: AI Coding Assistants */}
            <div className="flex justify-between w-full max-w-sm gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect("claude")}
                className={`px-4 py-3 rounded-2xl border-2 flex items-center gap-2.5 shadow-sm transition-all flex-1 justify-center
                  ${activeId === "claude" ? 'border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface' : 'border-border dark:border-border-dark bg-white dark:bg-surface/50'}
                `}
              >
                <span className="text-lg">🤖</span>
                <div className="text-left">
                  <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase">Architect</span>
                  <span className="text-[11px] font-bold text-fg">Claude</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelect("copilot")}
                className={`px-4 py-3 rounded-2xl border-2 flex items-center gap-2.5 shadow-sm transition-all flex-1 justify-center
                  ${activeId === "copilot" ? 'border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface' : 'border-border dark:border-border-dark bg-white dark:bg-surface/50'}
                `}
              >
                <span className="text-lg">⚡</span>
                <div className="text-left">
                  <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase">Accelerator</span>
                  <span className="text-[11px] font-bold text-fg">Copilot</span>
                </div>
              </motion.button>
            </div>

            {/* Row 3: Operations & Automation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect("n8n")}
              className={`px-5 py-3 rounded-2xl border-2 flex items-center gap-3 shadow-md transition-all
                ${activeId === "n8n" ? 'border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface' : 'border-border dark:border-border-dark bg-white dark:bg-surface/50'}
              `}
            >
              <span className="text-xl">⚙️</span>
              <div className="text-left">
                <span className="font-[Silkscreen] text-[9px] text-fg-faint block uppercase">Automation</span>
                <span className="text-xs font-bold text-fg">n8n Workflows</span>
              </div>
            </motion.button>

          </div>
        </div>

        {/* Detailed Description Card (Right Side) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-full space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`px-2.5 py-1 text-[10px] font-[Silkscreen] rounded-md tracking-wider uppercase ${activeNode.badgeBg}`}>
                    {activeNode.role}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-fg flex items-center gap-2">
                  <span>{activeNode.icon}</span>
                  <span>{activeNode.name}</span>
                </h3>

                <p className="text-sm md:text-base text-fg-muted font-light mt-3 leading-relaxed">
                  {activeNode.desc}
                </p>
              </div>

              {/* Bullets */}
              <div>
                <span className="text-[10px] font-[Silkscreen] text-fg-faint block uppercase mb-3 tracking-widest border-b border-border/80 dark:border-border-dark pb-2">
                  Workflow outputs
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeNode.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-fg-muted font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
