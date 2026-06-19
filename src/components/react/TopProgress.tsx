import { motion, useScroll, useTransform } from 'framer-motion';
import { useModalOpen } from './PersistentNav';

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  const isModalOpen = useModalOpen();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 h-0.5 bg-border/30 transition-opacity duration-200"
      style={{ opacity: isModalOpen ? 0 : 1, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <motion.div style={{ width }} className="h-full bg-accent" />
    </div>
  );
}
