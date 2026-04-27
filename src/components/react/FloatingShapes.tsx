import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/** Decorative floating shapes scattered across the page for visual richness */
export default function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large pastel orange blob — top right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-pastel-orange/40 blur-[80px]"
      />

      {/* Pastel blue blob — middle left */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[60vh] -left-40 w-[400px] h-[400px] rounded-full bg-pastel-blue/30 blur-[80px]"
      />

      {/* Pastel purple blob — bottom right */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[140vh] -right-20 w-[350px] h-[350px] rounded-full bg-pastel-purple/30 blur-[80px]"
      />

      {/* Pastel green blob — far down */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[220vh] -left-32 w-[300px] h-[300px] rounded-full bg-pastel-green/25 blur-[80px]"
      />

      {/* Small decorative shapes */}
      {/* Orange donut */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15vh] right-[10vw] w-12 h-12 rounded-full border-[3px] border-accent/20 animate-float"
      />

      {/* Blue square */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[45vh] left-[8vw] w-8 h-8 rounded-lg bg-pastel-blue/50 animate-float-slow rotate-12"
      />

      {/* Purple triangle-ish */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[80vh] right-[15vw] w-10 h-10 bg-pastel-purple/40 animate-float rotate-45 rounded-sm"
      />

      {/* Orange cross */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[120vh] left-[12vw] animate-spin-slow"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/20">
          <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Pink circle */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[170vh] right-[8vw] w-6 h-6 rounded-full bg-pastel-pink/50 animate-float"
      />

      {/* Dotted circle */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[200vh] left-[5vw] w-16 h-16 rounded-full border-2 border-dashed border-pastel-orange/40 animate-spin-slow"
      />
    </div>
  );
}