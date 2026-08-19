import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import { projects, projectIcons } from "../../data/projects";
import type { Project } from "../../data/projects";

// Modal Component
function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const { open, close } = useModal();

  useEffect(() => {
    open();
    return () => close();
  }, [open, close]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Project Title */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-lg">
        <span className="text-white font-[Silkscreen] text-sm">{alt}</span>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (src: string, title: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="group rounded-2xl border border-border/50 bg-white hover:shadow-xl hover:shadow-black/[0.05] transition-all duration-300 overflow-hidden">
      {/* Screenshot or Placeholder - Clickable */}
      <div
        className={`relative h-40 ${project.screenshot ? "cursor-zoom-in" : "flex items-center justify-center"} bg-surface`}
        onClick={() =>
          project.screenshot && onImageClick(project.screenshot, project.title)
        }
      >
        {project.screenshot ? (
          <>
            <img
              src={project.screenshot}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Click hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded transition-opacity">
                Click to enlarge
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-fg-faint">
            <div className="w-16 h-16 rounded-xl bg-pastel-green/30 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-600"
              >
                <path d="M12 2v20M2 12h20" />
                <circle cx="12" cy="12" r="4" />
                <path d="M2 2l20 20" />
              </svg>
            </div>
            <span className="font-[Silkscreen] text-[10px] tracking-wider">
              {project.kind || "CLI TOOL"}
            </span>
          </div>
        )}

        {/* Live / WIP Badge */}
        {project.isLive && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-green-500/90 text-white text-[10px] font-bold font-[Silkscreen] tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            LIVE
          </div>
        )}
        {project.isWip && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-amber-500/90 text-white text-[10px] font-bold font-[Silkscreen] tracking-wider">
            WIP
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-lg ${project.iconColor} flex items-center justify-center`}
            >
              {projectIcons[project.index]}
            </div>
            <span className="font-bold text-fg">{project.title}</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-fg-muted font-light mb-2">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[13px] text-fg leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Tech Stack Icons */}
        {project.stackIcons && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stackIcons.map((icon, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface border border-border/50"
              >
                <img src={icon} alt="" className="w-4 h-4 object-contain" />
                <span className="text-[10px] text-fg-muted">
                  {project.tags[i]?.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Quick Highlights */}
        <div className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 2).map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-xs text-fg-muted"
            >
              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* Expandable More */}
        {project.highlights.length > 2 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="text-xs text-accent font-medium hover:underline"
          >
            {isOpen ? "Less" : `+${project.highlights.length - 2} more`}
          </button>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-1.5">
                {project.highlights.slice(2).map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-fg-muted"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun note */}
        {project.funNote && (
          <p className="text-xs text-fg-faint italic leading-snug mt-3">
            {project.funNote}
          </p>
        )}

        {/* Link */}
        <div className="mt-4 pt-3 border-t border-border/30">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            {project.isLive ? "View Live Site" : "View on GitHub"}
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 13L13 1M13 1H5M13 1V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  const [modalImage, setModalImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <AnimatePresence>
        {modalImage && (
          <ImageModal
            src={modalImage.src}
            alt={modalImage.title}
            onClose={() => setModalImage(null)}
          />
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: -8 }}
            className="w-10 h-10 rounded-xl bg-pastel-orange/40 flex items-center justify-center text-accent shrink-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </motion.div>
          <span className="font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase">
            The Work
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-bold tracking-tight mb-3"
        >
          Things I've built that{" "}
          <span className="text-accent">actually ship.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-fg-muted text-base font-light mb-14 max-w-lg"
        >
          Real tools solving real problems for real people. Not
          proof-of-concepts that never launched.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              project={project}
              onImageClick={(src, title) => setModalImage({ src, title })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
