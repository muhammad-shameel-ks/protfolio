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
      className="px-6 md:px-12 lg:px-20 py-24 md:py-36 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-mono text-accent tracking-widest uppercase block mb-6">
          Let's Talk
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-2xl leading-[1.08]">
          Got a project?
          <br />
          <span className="text-accent">I'm all ears.</span>
        </h2>

        <p className="text-fg-muted text-lg font-light mb-12 max-w-lg">
          Whether it's a SaaS product, a mobile app, or you need someone to 
          untangle your Kubernetes manifests — let's chat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="mailto:hello@shameel.dev"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-colors"
          >
            Say Hello
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://github.com/muhammad-shameel-ks"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-fg text-sm font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            GitHub Profile
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-fg-faint font-light">
            © {new Date().getFullYear()} Muhammad Shameel KS. Crafted with Astro & too much chai.
          </p>
          <p className="text-xs text-fg-faint font-mono">
            Built from Kerala, deployed from a VAIO.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}