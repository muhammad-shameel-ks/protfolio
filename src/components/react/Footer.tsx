import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.footer
      ref={ref}
      style={{ opacity, y }}
      className="px-6 md:px-12 lg:px-20 py-24 md:py-36 relative overflow-hidden"
    >
      {/* Big pastel background blob */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-pastel-orange/25 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Icon + eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-12 h-12 rounded-2xl bg-pastel-pink flex items-center justify-center text-pink-600 shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.div>
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Let's Talk
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-2xl leading-[1.08]">
          Got a project?
          <br />
          <span className="relative inline-block text-accent">
            I'm all ears.
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 240 12"
              fill="none"
            >
              <motion.path
                d="M2 8C40 2 80 5 120 7C160 9 200 3 238 6"
                stroke="#FF6B35"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.svg>
          </span>
        </h2>

        <p className="text-fg-muted text-lg font-light mb-12 max-w-lg leading-relaxed">
          Whether it's a SaaS product, a mobile app, or you need someone to
          untangle your Kubernetes manifests — let's chat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:hello@shameel.dev"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-accent text-white text-sm font-bold rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Say Hello
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/muhammad-shameel-ks"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border-2 border-border text-fg text-sm font-bold rounded-full hover:border-fg hover:bg-fg hover:text-white transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Profile
          </motion.a>
        </div>

        {/* Fun stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "4+", label: "Shipped Projects", color: "bg-pastel-blue" },
            { value: "1", label: "Home Server (VAIO)", color: "bg-pastel-purple" },
            { value: "∞", label: "Cups of Chai", color: "bg-pastel-orange" },
            { value: "btw", label: "I use Arch", color: "bg-pastel-green" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${stat.color} rounded-2xl p-5 text-center border border-white/40`}
            >
              <span className="text-2xl md:text-3xl font-extrabold text-fg block mb-1">{stat.value}</span>
              <span className="text-xs text-fg-muted font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-fg-faint font-light flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            {new Date().getFullYear()} Muhammad Shameel KS. Crafted with Astro & too much chai.
          </p>
          <p className="text-xs text-fg-faint font-mono">
            Built from Kerala, deployed from a VAIO.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}