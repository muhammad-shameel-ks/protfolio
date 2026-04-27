import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"]
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`px-6 md:px-12 lg:px-20 py-20 md:py-32 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <p className="flex flex-wrap text-2xl md:text-4xl lg:text-[2.8rem] font-medium leading-[1.4] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);

  return (
    <span className="relative mr-[0.3em] mt-1">
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}