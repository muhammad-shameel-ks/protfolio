import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    icon: "01",
    label: "Push Code",
    desc: "Git push to GitHub",
    color: "bg-fg text-white",
  },
  {
    icon: "02",
    label: "GitHub Actions",
    desc: "Build & containerize",
    color: "bg-accent text-white",
  },
  {
    icon: "03",
    label: "Tailscale Tunnel",
    desc: "Encrypted zero-trust link",
    color: "bg-fg text-white",
  },
  {
    icon: "04",
    label: "Home K8s Cluster",
    desc: "Auto-deploy to VAIO server",
    color: "bg-accent text-white",
  },
];

export default function InfraFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-surface-warm">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-accent tracking-widest uppercase block mb-4"
        >
          Infrastructure
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          My code deploys itself.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-fg-muted text-lg font-light mb-16 max-w-2xl"
        >
          A zero-trust CI/CD pipeline. Push to GitHub → container builds → encrypted tunnel → 
          lands on my private home server. No ports exposed. No cloud bills. Just vibes and YAML.
        </motion.p>

        {/* Flow visualization */}
        <div className="relative">
          {/* Animated connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-border z-0">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-accent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-lg font-bold mb-4 shadow-sm`}>
                  {step.icon}
                </div>
                <span className="text-sm font-semibold text-fg mb-1">{step.label}</span>
                <span className="text-xs text-fg-muted font-light">{step.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun aside */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 border border-border rounded-xl p-6 bg-white"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl shrink-0">🖥️</span>
            <div>
              <p className="text-sm font-medium text-fg mb-1">The "Home Server"</p>
              <p className="text-sm text-fg-muted font-light leading-relaxed">
                It's a Sony VAIO sitting on my desk running Arch Linux. It handles DNS blocking via Pi-hole, 
                serves PocketBase backends, and runs my K8s cluster. Some people have gaming setups. 
                I have a production environment in my bedroom. Don't judge.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}