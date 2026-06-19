import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from './SoundSystem';

interface Event {
  year: string;
  title: string;
  desc: string;
  aside: string;
  command: string;
  output: string[];
}

const TIMELINE_EVENTS: Event[] = [
  {
    year: "2021",
    title: "Broken Laptop & Curiosity",
    desc: "Discovered programming trying to make a 2GB RAM Intel Core 2 Duo laptop functional. Installed lightweight Linux distros to keep it alive. First time seeing a terminal.",
    aside: "Accidentally wiped the partition table twice. Learned how hard drives actually partition and boot.",
    command: "shameel@old-laptop:~$ neofetch --minimal",
    output: [
      "OS: Puppy Linux / Lubuntu",
      "CPU: Intel Core 2 Duo T6500",
      "Memory: 2048MB RAM (DDR2)",
      "Status: Struggling but running",
      "Motivation: 'How does this work?'"
    ]
  },
  {
    year: "2022",
    title: "The Arch Linux Era",
    desc: "Moved to daily driving Arch Linux. Ditched desktop environments for custom tiling window managers (i3wm, bspwm). Learned shell scripting to automate dotfile management.",
    aside: "Spent 3 days configuring custom borders and window gaps. Realized text configuration files are incredibly powerful.",
    command: "shameel@arch:~$ cat install_scripts/setup.sh",
    output: [
      "#!/bin/bash",
      "echo 'Installing base packages...'",
      "pacman -Syu xorg i3-gaps rofi polybar alacritty neovim",
      "cp -r ./dotfiles/* ~/.config/",
      "echo 'Arch installed. I use Arch BTW.'"
    ]
  },
  {
    year: "2023",
    title: "Hyprland & Barchy Reborn",
    desc: "Configured custom Wayland window manager setup on Hyprland. Built Barchy Reborn — a lean desktop environment adaptation inspired by Omarchy/DHH setup. Advanced scripting in Python/Bash.",
    aside: "Learned deep OS concepts: compositor rendering, Wayland security protocols, and systemd services.",
    command: "shameel@hyprland:~$ hyprctl monitors",
    output: [
      "Monitor eDP-1 (ID 0): 1920x1080@60.00Hz",
      "Active workspace: 1 (Code)",
      "Window Manager: Hyprland (Wayland)",
      "Animation scale: 1.0 (Snappy)",
      "System load: 0.12 (Lean and mean)"
    ]
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    desc: "Transitioned from OS configurations to building full-stack web and mobile apps. Discovered React, Next.js, and Supabase. Built first production apps for clients and automated processes.",
    aside: "Created an exam seating arrangements algorithm for a college that replaced weeks of manual paper shuffling with a 2-second click.",
    command: "shameel@dev:~/office_pal$ flutter run --release",
    output: [
      "Building flutter app in release mode...",
      "✓ Built build/app/outputs/flutter-apk/app-release.apk (18.2MB)",
      "Syncing data to PocketBase backend...",
      "Status: Exam seating arrangements deployed",
      "Revenue: Admin workflow automation successful!"
    ]
  },
  {
    year: "2025/2026",
    title: "Homelab & Kubernetes",
    desc: "Configured a self-hosted Kubernetes cluster on a desk Sony VAIO laptop. Handled CI/CD container builds, Tailscale zero-trust tunnels, PocketBase databases, and n8n autonomous AI workflows.",
    aside: "VAIO cluster crashed at 2 AM. Debugged Pod scheduling, DNS resolvers, and persistent volumes. Real-world learning beat any tutorial.",
    command: "shameel@vaio-node:~$ kubectl get pods -n prod",
    output: [
      "NAME                                 READY   STATUS    RESTARTS   AGE",
      "pod/pocketbase-db-7d4bc8f9b2-cnd82   1/1     Running   0          45d",
      "pod/portfolio-web-54b9d8fc6c-8s9v2   1/1     Running   1          28d",
      "pod/n8n-automation-89cdd5c88-m9x12   1/1     Running   0          92d",
      "pod/pihole-dns-749c89dc9d-bb822      1/1     Running   0          104d"
    ]
  }
];

export default function TimelineWidget() {
  const [activeIndex, setActiveIndex] = useState(4); // Default to current era

  const handleSelect = (idx: number) => {
    playClickSound();
    setActiveIndex(idx);
  };

  const activeEvent = TIMELINE_EVENTS[activeIndex];

  return (
    <div className="mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors">
      {/* Timeline tracker top */}
      <div className="relative mb-10 flex justify-between items-center px-4 max-w-2xl mx-auto">
        {/* Progress bar line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[3px] bg-border dark:bg-border-dark rounded-full z-0" />
        
        {/* Animated fill line */}
        <motion.div 
          className="absolute left-6 h-[3px] bg-accent rounded-full z-0 origin-left"
          animate={{ width: `${(activeIndex / (TIMELINE_EVENTS.length - 1)) * 90}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ width: '0%' }}
        />

        {TIMELINE_EVENTS.map((evt, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <button
              key={evt.year}
              onClick={() => handleSelect(idx)}
              className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
            >
              {/* Year dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 1,
                  backgroundColor: isActive ? 'var(--color-accent)' : isPassed ? 'var(--color-accent-dark)' : 'var(--color-bg)',
                  borderColor: isActive || isPassed ? 'var(--color-accent)' : 'var(--color-border-dark)',
                }}
                transition={{ duration: 0.3 }}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white shadow-md transition-colors`}
              >
                {isActive && (
                  <motion.div
                    layoutId="timeline-inner-dot"
                    className="w-2 h-2 rounded-full bg-white"
                  />
                )}
              </motion.div>
              
              {/* Year text */}
              <span className={`mt-2 font-[Silkscreen] text-[10px] md:text-[12px] tracking-wider uppercase transition-colors duration-300
                ${isActive ? 'text-accent font-extrabold' : 'text-fg-muted dark:text-fg-faint group-hover:text-fg'}
              `}>
                {evt.year}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline display cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Text Details */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-pastel-orange/50 dark:bg-accent-light text-accent text-xs font-[Silkscreen] tracking-wider uppercase">
                Era: {activeEvent.year}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-fg">{activeEvent.title}</h3>
              <p className="text-sm md:text-base text-fg-muted leading-relaxed font-light mb-6">
                {activeEvent.desc}
              </p>
            </div>

            {/* Note box */}
            <div className="rounded-2xl bg-surface-warm dark:bg-bg border border-border dark:border-border-dark p-4 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 2Z" />
                  <path d="M12 16V12" />
                  <path d="M12 8H12.01" />
                </svg>
                <p className="text-xs text-fg-muted leading-relaxed font-light">
                  <span className="font-semibold text-fg">Fun Fact:</span> {activeEvent.aside}
                </p>
              </div>
            </div>
          </div>

          {/* Terminal Box display */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1f1e1d]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] text-fg-faint select-none">shameel@sony-vaio: ~ ({activeEvent.year})</span>
                <span className="w-10" />
              </div>
              
              {/* Body */}
              <div className="p-4 space-y-3 min-h-[180px] select-text">
                <div className="flex items-center gap-2">
                  <span className="text-accent select-none font-bold">❯</span>
                  <span>{activeEvent.command}</span>
                </div>
                <div className="space-y-1 pl-4 text-fg-muted font-light leading-relaxed">
                  {activeEvent.output.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
