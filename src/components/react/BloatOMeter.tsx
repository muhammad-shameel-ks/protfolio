import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playClickSound } from './SoundSystem';

interface StackPreset {
  level: number;
  name: string;
  desc: string;
  lighthouse: number;
  jsSize: string;
  loadTime: string;
  fanSpeed: number; // 0 = static, larger = faster rotation
  domNodes: number;
  trackers: number;
  commentary: string;
}

const PRESETS: StackPreset[] = [
  {
    level: 0,
    name: "Shameel's Ethos (Astro SSG + React Islands)",
    desc: "Optimized HTML, minimal inline styling, JS loaded only on demand via islands. Ultra-fast rendering.",
    lighthouse: 100,
    jsSize: "12 KB",
    loadTime: "0.08s",
    fanSpeed: 0,
    domNodes: 280,
    trackers: 0,
    commentary: "Silent. Cold. Loads instantly. Recruiter reads it, is impressed, and hires instantly."
  },
  {
    level: 1,
    name: "Typical Modern SPA (Next.js client-side heavy)",
    desc: "Single Page Application with full hydration, React Context, Tailwind, and Google Analytics.",
    lighthouse: 82,
    jsSize: "380 KB",
    loadTime: "1.2s",
    fanSpeed: 1,
    domNodes: 1400,
    trackers: 2,
    commentary: "Warm. Needs a second to bundle-load. Standard experience for most modern web apps."
  },
  {
    level: 2,
    name: "Enterprise Corporate Site (Standard SaaS)",
    desc: "Dozens of dependencies, Hotjar heatmaps, HubSpot chat widget, Cookie consent wall, uncompressed PNGs.",
    lighthouse: 48,
    jsSize: "2.1 MB",
    loadTime: "4.5s",
    fanSpeed: 3,
    domNodes: 4500,
    trackers: 14,
    commentary: "Heats up the room. CPU fan starts spinning. Loading spinner gets more screen time than actual content."
  },
  {
    level: 3,
    name: "Legacy Monolith CMS (Corporate Hellscape)",
    desc: "48 tracking scripts, multiple GTM tags, giant hero video, legacy jQuery plugins, complex enterprise architecture.",
    lighthouse: 14,
    jsSize: "8.4 MB",
    loadTime: "11.2s",
    fanSpeed: 8,
    domNodes: 9500,
    trackers: 42,
    commentary: "Thermal throttling. Laptop fan sounds like a commercial jet preparing for takeoff. Users exit before page load."
  }
];

export default function BloatOMeter() {
  const [level, setLevel] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val !== level) {
      playClickSound();
      setLevel(val);
    }
  };

  const preset = PRESETS[level];

  // Map lighthouse score to color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500 border-green-500 bg-green-500/10';
    if (score >= 50) return 'text-amber-500 border-amber-500 bg-amber-500/10';
    return 'text-red-500 border-red-500 bg-red-500/10';
  };

  return (
    <div className="mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Interactive Side */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 text-fg">The Web Bloat-o-Meter</h3>
            <p className="text-xs text-fg-muted font-light mb-6">
              Drag the slider to increase the stack size. See how adding features without discipline ruins the user experience.
            </p>

            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between font-[Silkscreen] text-[10px] text-fg-faint mb-2.5">
                <span>0. LEAN ETHOS</span>
                <span>1. MID SPA</span>
                <span>2. SAAS APP</span>
                <span>3. MONOLITH</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                value={level}
                onChange={handleSliderChange}
                className="w-full h-2 rounded-full appearance-none bg-border dark:bg-border-dark cursor-pointer outline-none accent-accent"
                style={{
                  background: `linear-gradient(to right, var(--color-accent) ${(level / 3) * 100}%, var(--color-border) ${(level / 3) * 100}%)`
                }}
              />
            </div>
            
            {/* Preset Title */}
            <div className="mb-4">
              <span className="font-[Silkscreen] text-[10px] text-accent tracking-wider uppercase block mb-1">Current Stack Preset</span>
              <h4 className="text-lg font-bold text-fg">{preset.name}</h4>
              <p className="text-sm text-fg-muted font-light mt-1.5 leading-relaxed">
                {preset.desc}
              </p>
            </div>
          </div>

          {/* Commentary */}
          <div className="mt-4 p-4 rounded-2xl bg-surface-warm dark:bg-bg border border-border dark:border-border-dark">
            <span className="text-[9px] font-[Silkscreen] text-fg-faint block uppercase mb-1">System Diagnostic</span>
            <p className="text-xs italic text-fg-muted font-light">
              "{preset.commentary}"
            </p>
          </div>
        </div>

        {/* Diagnostic Metrics Panel */}
        <div className="w-full lg:w-[320px] rounded-2xl border border-border dark:border-border-dark bg-surface-warm dark:bg-bg/40 p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-[Silkscreen] text-[10px] text-fg-faint tracking-wider block uppercase border-b border-border/80 dark:border-border-dark pb-2">
              Performance metrics
            </span>

            {/* Lighthouse Circular Indicator */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-fg-muted font-light">Lighthouse Score</span>
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-[Silkscreen] text-xs font-bold ${getScoreColor(preset.lighthouse)}`}>
                {preset.lighthouse}
              </div>
            </div>

            {/* JS Bundle Size */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-fg-muted font-light">JavaScript Bundle</span>
              <span className="font-mono text-fg font-medium">{preset.jsSize}</span>
            </div>

            {/* Load Time */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-fg-muted font-light">FCP (Load Speed)</span>
              <span className={`font-mono font-medium ${level === 0 ? 'text-green-500' : level === 1 ? 'text-fg' : level === 2 ? 'text-amber-500' : 'text-red-500'}`}>
                {preset.loadTime}
              </span>
            </div>

            {/* DOM Nodes count */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-fg-muted font-light">DOM Tree Nodes</span>
              <span className="font-mono text-fg font-medium">{preset.domNodes.toLocaleString()}</span>
            </div>

            {/* Trackers count */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-fg-muted font-light">External Trackers</span>
              <span className={`font-mono font-medium ${preset.trackers === 0 ? 'text-green-500' : 'text-fg'}`}>
                {preset.trackers}
              </span>
            </div>
          </div>

          {/* Fan Simulation Widget */}
          <div className="mt-6 pt-4 border-t border-border/80 dark:border-border-dark flex items-center gap-4">
            <div className="relative w-12 h-12 bg-surface border border-border/80 dark:border-border-dark dark:bg-[#121110] rounded-full flex items-center justify-center overflow-hidden">
              {/* Fan Spinner */}
              <motion.div
                animate={preset.fanSpeed > 0 ? { rotate: 360 } : { rotate: 0 }}
                transition={preset.fanSpeed > 0 ? {
                  repeat: Infinity,
                  duration: 2.5 / preset.fanSpeed,
                  ease: "linear"
                } : { duration: 0.5 }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-fg-muted dark:text-fg-faint">
                  <path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="2" className="fill-bg stroke-fg-muted" />
                </svg>
              </motion.div>
            </div>
            
            <div className="flex-1 min-w-0">
              <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase">CPU THERMALS</span>
              <span className="text-xs font-mono text-fg font-semibold truncate block">
                {preset.fanSpeed === 0 ? "FAN: SILENT (0 RPM)" : `FAN: ${preset.fanSpeed * 900} RPM (${preset.fanSpeed > 4 ? 'HOT' : 'WARM'})`}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
