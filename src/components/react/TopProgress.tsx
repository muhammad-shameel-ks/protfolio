import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', weight: 1 },
  { id: 'chapter-01', weight: 1.5 },
  { id: 'chapter-02', weight: 1 },
  { id: 'chapter-03', weight: 1.2 },
  { id: 'projects', weight: 2 },
  { id: 'chapter-04', weight: 1 },
  { id: 'chapter-05', weight: 1 },
  { id: 'contact', weight: 1.5 },
];

const TOTAL_WEIGHT = SECTIONS.reduce((sum, s) => sum + s.weight, 0);

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  
  // Calculate which section we're in based on scroll position
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/30">
      <motion.div
        style={{ width }}
        className="h-full bg-accent"
        transition={{ ease: 'linear', duration: 0.1 }}
      />
    </div>
  );
}