import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    label: "Push Code",
    desc: "Git push to GitHub",
    color: "bg-pastel-blue",
    iconColor: "text-blue-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>
      </svg>
    ),
  },
  {
    label: "GitHub Actions",
    desc: "Build & containerize",
    color: "bg-pastel-orange",
    iconColor: "text-accent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Tailscale Tunnel",
    desc: "Encrypted zero-trust link",
    color: "bg-pastel-green",
    iconColor: "text-green-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    label: "Home K8s Cluster",
    desc: "Auto-deploy to VAIO",
    color: "bg-pastel-purple",
    iconColor: "text-purple-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
];

export default function InfraFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.15"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-surface-warm relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pastel-purple/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-pastel-orange/20 blur-[80px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: -10 }}
            className="w-12 h-12 rounded-2xl bg-pastel-green flex items-center justify-center text-green-600 shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </motion.div>
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Infrastructure
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          My code <span className="text-accent">deploys itself.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-fg-muted text-lg font-light mb-16 max-w-2xl leading-relaxed"
        >
          A zero-trust CI/CD pipeline. Push to GitHub, container builds, encrypted tunnel,
          lands on my private home server. No ports exposed. No cloud bills.{' '}
          <span className="font-medium text-fg">Just vibes and YAML.</span>
        </motion.p>

        {/* Flow visualization */}
        <div className="relative">
          {/* Animated connecting line — desktop only */}
          <div className="hidden md:block absolute top-[3.5rem] left-8 right-8 h-[3px] rounded-full bg-border z-0">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-blue-400 via-accent to-purple-400 origin-left rounded-full"
            />
          </div>

          {/* Animated packet traveling the line */}
          <div className="hidden md:block absolute top-[3.25rem] left-8 right-8 h-[6px] z-[1] overflow-hidden">
            <motion.div
              animate={{ x: ["-5%", "105%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
              className="w-8 h-2 rounded-full bg-accent shadow-lg shadow-accent/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-[4.5rem] h-[4.5rem] rounded-2xl ${step.color} ${step.iconColor} flex items-center justify-center mb-4 shadow-sm border border-white/60`}
                >
                  {step.icon}
                </motion.div>
                <span className="text-sm font-bold text-fg mb-1">{step.label}</span>
                <span className="text-xs text-fg-muted font-light">{step.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The VAIO story card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 rounded-2xl bg-white border border-border p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pastel-orange/30 blur-xl" />
          <div className="flex items-start gap-4 relative z-10">
            <motion.div
              whileHover={{ rotate: -5 }}
              className="w-12 h-12 rounded-2xl bg-pastel-purple flex items-center justify-center text-purple-600 shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </motion.div>
            <div>
              <p className="text-sm font-bold text-fg mb-2">The "Home Server"</p>
              <p className="text-sm text-fg-muted leading-relaxed">
                It's a Sony VAIO sitting on my desk running Arch Linux. It handles DNS blocking via Pi-hole,
                serves PocketBase backends, and runs my K8s cluster. Some people have gaming setups.
                I have a <span className="font-medium text-fg">production environment in my bedroom.</span> Don't judge.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}