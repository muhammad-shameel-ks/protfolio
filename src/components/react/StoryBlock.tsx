import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StoryBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  aside?: string;
  warm?: boolean;
  children?: React.ReactNode;
}

export default function StoryBlock({ eyebrow, heading, body, aside, warm, children }: StoryBlockProps) {
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
      className={`py-24 md:py-36 px-6 md:px-12 lg:px-20 ${warm ? 'bg-surface-warm' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-mono text-accent tracking-widest uppercase mb-6">
          {eyebrow}
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-8 max-w-3xl">
          {heading}
        </h2>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-fg-muted font-light leading-relaxed">
              {body}
            </p>
          </div>

          {aside && (
            <div className="md:col-span-5 md:col-start-8">
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-sm text-fg-muted italic leading-relaxed">{aside}</p>
              </div>
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </motion.section>
  );
}