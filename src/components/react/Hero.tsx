import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20"
    >
      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm font-medium text-fg-muted"
        >
          shameel.dev
        </motion.span>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          href="https://github.com/muhammad-shameel-ks"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-fg-muted hover:text-accent transition-colors"
        >
          GitHub ↗
        </motion.a>
      </div>

      {/* Greeting */}
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-mono text-fg-muted tracking-wide">Available for work</span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-fg"
          >
            Hi, I'm <span className="text-accent">Shameel</span>.
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-fg-muted font-light leading-relaxed max-w-2xl"
          >
            I build things that work — and occasionally things that 
            <span className="italic"> actually</span> work. Full-stack engineer 
            from Kerala who thinks Kubernetes is a personality trait.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap gap-3"
        >
          {["Next.js", "Flutter", "TypeScript", "Supabase", "K8s", "Python"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="px-3 py-1.5 text-xs font-mono text-fg-muted border border-border rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-fg-faint font-mono">Keep scrolling, it gets better</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-fg-faint">
            <path d="M10 4V16M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}