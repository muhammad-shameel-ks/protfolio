import { motion, useScroll, useTransform } from "framer-motion";
import { useModal } from "../../context/ModalContext";

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  const { isOpen: isModalOpen } = useModal();

  // Hide using CSS when modal is open (allows re-appearance)
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/30 transition-opacity duration-200"
      style={{
        opacity: isModalOpen ? 0 : 1,
        pointerEvents: isModalOpen ? "none" : "auto",
      }}
    >
      <motion.div
        style={{ width }}
        className="h-full bg-accent"
        transition={{ ease: "linear", duration: 0.1 }}
      />
    </div>
  );
}
