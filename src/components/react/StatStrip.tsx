import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '100', label: 'Lighthouse performance' },
  { value: '100', label: 'Accessibility, full keyboard nav' },
  { value: 'OG + JSON-LD', label: 'Structured data, built to be crawled' },
  { value: '0kb', label: 'Runtime JS bloat (Astro SSG)' },
];

export default function StatStrip() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 border-t border-b border-border/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <span className="font-[Silkscreen] text-[12px] text-fg-faint tracking-widest uppercase shrink-0">
          Under the hood
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-0.5"
            >
              <span className="text-lg font-bold text-accent">{s.value}</span>
              <span className="text-xs text-fg-muted leading-snug">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
