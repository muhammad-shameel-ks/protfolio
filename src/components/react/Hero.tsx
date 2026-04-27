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

  const waveHand = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: { duration: 2.5, ease: "easeInOut", delay: 1.2 }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="text-sm font-semibold text-fg hidden sm:inline">shameel.dev</span>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          href="https://github.com/muhammad-shameel-ks"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-fg text-white text-sm font-medium hover:scale-105 transition-transform"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </motion.a>
      </div>

      {/* Decorative pastel card behind hero — tilted */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[15vh] right-[5vw] w-64 h-72 rounded-3xl bg-pastel-orange/40 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[18vh] right-[8vw] w-64 h-72 rounded-3xl bg-pastel-blue/30 hidden lg:block"
      />

      {/* Main content */}
      <div className="max-w-4xl relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full bg-pastel-green/60 border border-green-200/50"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-800">Available for work</span>
        </motion.div>

        {/* Main heading with wave */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg"
          >
            Hey, I'm{' '}
            <span className="relative inline-block">
              <span className="text-accent">Shameel</span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C30 2 60 4 100 6C140 8 170 3 198 7"
                  stroke="#FF6B35"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
            <motion.span
              {...waveHand}
              className="inline-block ml-3 origin-[70%_70%]"
              style={{ display: 'inline-block' }}
            >
              <svg width="48" height="48" viewBox="0 0 36 36" className="inline w-[0.8em] h-[0.8em]">
                <path fill="#FFDC5D" d="M18.5 3.5c0-1.1-.9-2-2-2s-2 .9-2 2v10h4v-10z"/>
                <path fill="#FFDC5D" d="M23.5 7.5c0-1.1-.9-2-2-2s-2 .9-2 2v8h4v-8z"/>
                <path fill="#FFDC5D" d="M28.5 8.5c0-1.1-.9-2-2-2s-2 .9-2 2v7h4v-7z"/>
                <path fill="#FFDC5D" d="M13.5 8.5c0-1.1-.9-2-2-2s-2 .9-2 2v13.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2.5c-1.5-2.5-4-1.5-3 1 1 2.5 2 5 3 7 2 4 5 6 10 6 6 0 10-4 10-10v-8c0-1.1-.9-2-2-2s-2 .9-2 2"/>
              </svg>
            </motion.span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1rem,2.2vw,1.4rem)] text-fg-muted font-light leading-relaxed max-w-xl"
          >
            I build things that work — and occasionally things that{' '}
            <span className="wavy-underline italic font-medium text-fg">actually</span>{' '}
            work. Full-stack engineer from Kerala who thinks
            Kubernetes is a personality trait.
          </motion.p>
        </div>

        {/* Colorful tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap gap-2.5"
        >
          {[
            { name: "Next.js", color: "bg-pastel-blue text-blue-800 border-blue-200" },
            { name: "Flutter", color: "bg-pastel-purple text-purple-800 border-purple-200" },
            { name: "TypeScript", color: "bg-pastel-blue text-blue-800 border-blue-200" },
            { name: "Supabase", color: "bg-pastel-green text-green-800 border-green-200" },
            { name: "K8s", color: "bg-pastel-purple text-purple-800 border-purple-200" },
            { name: "Python", color: "bg-pastel-yellow text-yellow-800 border-yellow-200" },
          ].map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border cursor-default ${tech.color}`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-fg-faint font-mono">Keep scrolling, it gets better</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-fg-faint/40 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}