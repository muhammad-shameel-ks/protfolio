import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 500);
      const contact = document.getElementById("contact");
      if (contact) {
        const rect = contact.getBoundingClientRect();
        setAtContact(rect.top < window.innerHeight * 0.7);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !atContact;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden pointer-events-none"
          style={{
            paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="mx-3 mb-3 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-border shadow-xl rounded-2xl px-3 py-3 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="font-[Silkscreen] text-[11px] text-accent tracking-wider uppercase font-bold">
                  Open to hire
                </div>
                <div className="text-xs text-fg-muted leading-none">
                  Reply in 12h
                </div>
              </div>
              <button
                onClick={scrollToContact}
                className="shrink-0 inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-accent text-white text-sm font-bold shadow-lg active:scale-95 transition-transform"
              >
                Hire Me
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
