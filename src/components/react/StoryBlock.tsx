import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StoryBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  aside?: string;
  warm?: boolean;
  icon?: 'rocket' | 'compass' | 'wrench' | 'lightbulb';
  children?: React.ReactNode;
}

const icons = {
  rocket: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  compass: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  lightbulb: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
    </svg>
  ),
};

const pastelBgs: Record<string, string> = {
  rocket: 'bg-pastel-orange',
  compass: 'bg-pastel-blue',
  wrench: 'bg-pastel-purple',
  lightbulb: 'bg-pastel-yellow',
};

const pastelAccents: Record<string, string> = {
  rocket: 'text-accent',
  compass: 'text-blue-600',
  wrench: 'text-purple-600',
  lightbulb: 'text-yellow-700',
};

export default function StoryBlock({ eyebrow, heading, body, aside, warm, icon = 'rocket', children }: StoryBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className={`py-24 md:py-36 px-6 md:px-12 lg:px-20 relative ${warm ? 'bg-surface-warm' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Icon + Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className={`w-12 h-12 rounded-2xl ${pastelBgs[icon]} flex items-center justify-center ${pastelAccents[icon]} shrink-0`}
          >
            {icons[icon]}
          </motion.div>
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            {eyebrow}
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight mb-8 max-w-3xl">
          {heading}
        </h2>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-fg-muted font-light leading-[1.7]">
              {body}
            </p>
          </div>

          {aside && (
            <div className="md:col-span-5 md:col-start-8">
              <div className="rounded-2xl bg-pastel-orange/30 border border-orange-200/40 p-5 relative overflow-hidden">
                {/* Decorative corner shape */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/10" />
                <div className="flex items-start gap-3 relative">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  <p className="text-sm text-fg-muted leading-relaxed">{aside}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </motion.section>
  );
}