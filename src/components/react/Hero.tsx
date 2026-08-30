import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FLOAT_ICONS, SITE } from "../../data/site";
import TopNav from "./TopNav";

function FloatingIcon({
  src,
  delay,
  position,
}: {
  src: string;
  delay: number;
  position: { top: string; left: string };
}) {
  return (
    <motion.img
      src={src}
      alt=""
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 0.4, 0.4, 0],
        scale: [0.5, 1, 1, 0.5],
        y: [0, -40, -40, -80],
        x: [0, 20, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-10 h-10 object-contain pointer-events-none z-0 filter grayscale opacity-40"
      style={position}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const floatingIcons = useMemo(() => {
    return FLOAT_ICONS.map((src, i) => ({
      src,
      delay: i * 1.5,
      position: {
        top: `${15 + ((i * 19 + 7) % 65)}%`,
        left: `${65 + ((i * 29 + 13) % 25)}%`,
      },
    }));
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Fades out completely by the time we scroll through the hero
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);
  // Disable pointer events when faded out to prevent accidental clicks
  const pointerEvents = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["auto" as const, "none" as const],
  );

  const waveHand = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 1.2,
      },
    },
  };

  return (
    <motion.section
      id="hero"
      ref={containerRef}
      style={{ y, opacity, pointerEvents }}
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-visible py-20 md:py-0"
    >
      {/* Top nav */}
      <TopNav />

      {/* Decorative tilted cards — desktop only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 0.6, scale: 1, rotate: -6 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[15vh] right-[5vw] w-56 h-64 rounded-3xl bg-pastel-orange/30 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 3 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[18vh] right-[8vw] w-56 h-64 rounded-3xl bg-pastel-blue/25 hidden lg:block"
      />

      {/* Floating background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {floatingIcons.map((icon, i) => (
          <FloatingIcon key={i} {...icon} />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-4xl relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 mt-16 sm:mt-20 mb-8 rounded-full bg-pastel-green/50 border border-green-200/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-green-800">
            Open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg"
          >
            Hey, I'm{" "}
            <span className="relative inline-block">
              <span className="text-accent">Shameel</span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 1.3,
                  duration: 0.8,
                  ease: [0, 0, 0.2, 1] as const,
                }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C30 2 60 4 100 6C140 8 170 3 198 7"
                  stroke="#E8613C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1.3,
                    duration: 0.8,
                    ease: [0, 0, 0.2, 1] as const,
                  }}
                />
              </motion.svg>
            </span>
            <motion.span
              {...waveHand}
              className="inline-block ml-2 origin-[70%_70%]"
              style={{ display: "inline-block" }}
            >
              <svg
                viewBox="0 0 36 36"
                className="inline w-[0.75em] h-[0.75em]"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Waving hand"
              >
                <path
                  fill="#EF9645"
                  d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625c-.793-1.129-.519-2.686.611-3.478z"
                />
                <path
                  fill="#FFDC5D"
                  d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"
                />
              </svg>
            </motion.span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.2rem,3vw,1.8rem)] text-fg font-semibold leading-snug max-w-xl"
          >
            I build <span className="text-accent">AI-powered applications</span> and automations.
          </motion.p>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.58, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(0.95rem,2vw,1.15rem)] text-fg-muted font-light leading-relaxed max-w-xl"
          >
            Software engineer focused on building useful products, AI agents, and workflows that automate real work.
          </motion.p>
        </div>

        {/* Pixel font tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.8 }}
          className="mb-3"
        >
          <span className="font-[Silkscreen] text-[12px] md:text-[13px] text-accent tracking-wider uppercase">
            I build software that does the boring work for me.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-[Silkscreen] text-[11px] md:text-[12px] text-fg-faint tracking-widest uppercase">
            AI Agents · Full-Stack · Automation · TypeScript · Next.js · Python
          </span>
        </motion.div>
        {/* Primary CTA — above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 mb-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-white text-[15px] font-bold shadow-lg shadow-accent/20 hover:bg-accent-dark hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View my work
              <svg
                width="16"
                height="16"
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
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border text-fg text-[15px] font-semibold hover:border-accent/40 hover:bg-pastel-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23.54.915 1.395.66 1.74.51.105-.39.42-.66.765-.81-2.665-.3-5.466-1.335-5.466-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.105-3.195 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.645 1.665.225 2.895.105 3.195.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={SITE.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border text-fg text-[15px] font-semibold hover:border-accent/40 hover:bg-pastel-orange/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>
          <span className="text-xs text-fg-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            I reply within 12 hours — usually same day
          </span>
        </motion.div>

        {/* Quick Capabilities Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {/* Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex flex-col gap-2.5 p-4 rounded-2xl bg-pastel-blue/30 border border-blue-100/40"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span className="font-[Silkscreen] text-[14px] tracking-wider uppercase font-bold">
                Build
              </span>
            </div>
            <p className="text-[13px] text-fg-muted leading-snug">
              Modern web apps with{" "}
              <span className="text-fg font-medium">
                React, Next.js, and TypeScript.
              </span>{" "}
              Type-safe and performant.
            </p>
          </motion.div>

          {/* AI Agents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-col gap-2.5 p-4 rounded-2xl bg-pastel-purple/30 border border-purple-100/40"
          >
            <div className="flex items-center gap-2 text-purple-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8" />
                <rect x="8" y="8" width="8" height="8" rx="2" />
                <path d="M16 8V4h4v4h-4z" />
                <path d="M4 16v-4H0v4h4z" />
                <path d="M20 16v-4h4v4h-4z" />
                <circle cx="12" cy="12" r="1" />
              </svg>
              <span className="font-[Silkscreen] text-[14px] tracking-wider uppercase font-bold">
                AI Agents
              </span>
            </div>
            <p className="text-[13px] text-fg-muted leading-snug">
              Agents that <span className="text-fg font-medium">reason, call tools, and do real work</span> — from Linear to Asana.
            </p>
          </motion.div>

          {/* AI / Automation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex flex-col gap-2.5 p-4 rounded-2xl bg-pastel-orange/30 border border-orange-100/40"
          >
            <div className="flex items-center gap-2 text-orange-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3 3 3 0 000 6 3 3 0 003 3v1a4 4 0 008 0v-1a3 3 0 003-3 3 3 0 000-6 3 3 0 00-3-3V6a4 4 0 00-4-4z" />
                <path d="M12 2v20" />
              </svg>
              <span className="font-[Silkscreen] text-[14px] tracking-wider uppercase font-bold">
                Automate
              </span>
            </div>
            <p className="text-[13px] text-fg-muted leading-snug">
              Leveraging <span className="text-fg font-medium">AI & n8n</span>{" "}
              to build autonomous workflows and ship 3x faster.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint — HIDDEN on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 hidden md:flex"
      >
        <span className="text-[15px] text-fg-faint font-[Silkscreen] tracking-wider">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1] as const,
          }}
          className="w-5 h-9 rounded-full border-2 border-fg-faint/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: [0.4, 0, 0.2, 1] as const,
            }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
