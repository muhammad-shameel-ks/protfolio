import { c as createComponent } from './astro-component_4qAxn567.mjs';
import 'piccolore';
import { r as renderTemplate, o as renderSlot, n as renderHead, u as unescapeHTML, h as addAttribute, p as renderComponent, m as maybeRenderHead } from './entrypoint_C0j0WYqO.mjs';
import { clsx } from 'clsx';
/* empty css                 */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useScroll, useTransform, useVelocity, useInView } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Muhammad Shameel KS — Full-Stack Engineer, DevOps & System Administrator from Kerala. I design, build, deploy, and self-host production systems — then write about it."
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="theme-color" content="#FDFCFA"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:site_name" content="Shameel"><meta property="og:locale" content="en_US"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@muhammadshameel"><!-- Performance: preconnect to font CDN --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&family=JetBrains+Mono:wght@400;500;600;700&family=Silkscreen:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&display=swap" rel="stylesheet"><title>', '</title><!-- JSON-LD Structured Data for SEO --><script type="application/ld+json">', "<\/script>", '</head> <body class="bg-bg text-fg relative"> ', " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-image.svg", Astro2.site), "content"), addAttribute(`${title} — portfolio`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL("/og-image.svg", Astro2.site), "content"), title, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Shameel KS",
    "jobTitle": "Full-Stack Engineer · DevOps · Sysadmin",
    "url": "https://shameel.barchy.online",
    "image": "https://shameel.barchy.online/og-image.svg",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palakkad",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/muhammad-shameel-ks",
      "https://linkedin.com/in/muhammad-shameel-k-s"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "Next.js",
      "Flutter",
      "Kubernetes",
      "Docker",
      "Linux",
      "Arch Linux",
      "DevOps",
      "AI",
      "Supabase",
      "Python",
      "Node.js"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://shameel.barchy.online#contact"
    }
  })), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/mallubeast/Dev/applications/web/protfolio/src/layouts/Layout.astro", void 0);

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(100);
      setDone(true);
      const t = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(t);
    }
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(() => setVisible(false), 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const lines = [
    { at: 0, text: "$ booting shameel.barchy.online" },
    { at: 15, text: "> mounting /dev/identity" },
    { at: 35, text: "> resolving homelab.tail..." },
    { at: 55, text: "> starting kube cluster" },
    { at: 75, text: "> warming up the type system" },
    { at: 90, text: "> ✓ ready" }
  ];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, y: -40, filter: "blur(8px)" },
      transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-bg",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dot-grid opacity-40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pastel-orange/30 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pastel-blue/30 blur-[120px]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex w-[min(92vw,520px)] flex-col items-center gap-8 px-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { scale: 0.6, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              className: "relative",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-accent-lg", children: /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-3xl font-bold text-white", children: "S" }) }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 1, opacity: 0.6 },
                    animate: { scale: 1.5, opacity: 0 },
                    transition: { duration: 1.6, repeat: Infinity, ease: "easeOut" },
                    className: "absolute inset-0 rounded-2xl bg-accent/30"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.6 },
              className: "text-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-accent", children: "Loading the workspace" }),
                /* @__PURE__ */ jsx("div", { className: "mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-fg", children: "Hand-crafted in Kerala" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-baseline justify-between font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-fg-muted", children: [
              /* @__PURE__ */ jsx("span", { children: "booting" }),
              /* @__PURE__ */ jsxs("span", { className: "text-fg", children: [
                progress.toString().padStart(3, " "),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative h-1 w-full overflow-hidden rounded-full bg-border", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  style: { width: `${progress}%` },
                  className: "h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
                }
              ),
              !done && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -translate-x-full animate-shimmer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full rounded-xl border border-stone-800/60 bg-[#15110D] p-4 font-[JetBrains_Mono] text-[10px] leading-relaxed text-stone-400", children: [
            lines.filter((l) => progress >= l.at).map((l, i) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -4 },
                animate: { opacity: 1, x: 0 },
                className: l.text.includes("✓") ? "text-green-400" : "",
                children: l.text
              },
              i
            )),
            progress < 90 && /* @__PURE__ */ jsxs("div", { className: "text-stone-500", children: [
              /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "$" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "inline-block h-[0.9em] w-[6px] translate-y-[1px] bg-stone-300 align-middle animate-blink" })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState(null);
  const [variant, setVariant] = useState("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });
  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || isReduced) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      const hoverEl = target.closest("[data-cursor]");
      const labelEl = target.closest("[data-cursor-label]");
      if (labelEl) setLabel(labelEl.getAttribute("data-cursor-label"));
      else setLabel(null);
      if (hoverEl) setVariant(hoverEl.getAttribute("data-cursor") || "hover");
      else setVariant("default");
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);
  if (!enabled) return null;
  const isHover = variant === "hover";
  const isDrag = variant === "drag";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: { x: sx, y: sy },
        className: "pointer-events-none fixed left-0 top-0 z-[200] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-md"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: { x: sx, y: sy },
        animate: {
          scale: isHover ? 1.7 : isDrag ? 0.6 : 1,
          opacity: isHover ? 0.6 : 1
        },
        transition: { type: "spring", stiffness: 400, damping: 28 },
        className: "pointer-events-none fixed left-0 top-0 z-[201] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fg/40 bg-bg/30 backdrop-blur-sm mix-blend-difference",
        children: label && /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            className: "font-[Silkscreen] text-[8px] font-bold uppercase tracking-wider text-white",
            children: label
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        style: { x, y },
        className: "pointer-events-none fixed left-0 top-0 z-[202] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      }
    )
  ] });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ROLES = ["full-stack engineer.", "devops in progress.", "self-host evangelist.", "ai-augmented builder."];
const TICKER = [
  "Arch Linux",
  "K8s",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Supabase",
  "Tailscale",
  "Pi-hole",
  "PocketBase",
  "Docker",
  "GitHub Actions",
  "n8n",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL"
];
function Magnetic({ children, strength = 0.3, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsx(motion.div, { ref, style: { x: sx, y: sy }, onMouseMove: onMove, onMouseLeave: reset, className, children });
}
function RotatingWord() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsx("span", { className: "relative inline-block min-w-[18ch] text-left align-bottom", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.span,
    {
      initial: { y: "60%", opacity: 0, filter: "blur(6px)" },
      animate: { y: "0%", opacity: 1, filter: "blur(0px)" },
      exit: { y: "-60%", opacity: 0, filter: "blur(6px)" },
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      className: "inline-block text-accent italic font-[Fraunces]",
      children: ROLES[i]
    },
    i
  ) }) });
}
function ClusterOrb() {
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-[2vw] top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 600 600", className: "h-full w-full", children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("radialGradient", { id: "orb-core", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#E8613C", stopOpacity: "0.9" }),
        /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "#E8613C", stopOpacity: "0.2" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#E8613C", stopOpacity: "0" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "orb-line", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#E8613C", stopOpacity: "0" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#E8613C", stopOpacity: "0.6" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#E8613C", stopOpacity: "0" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("circle", { cx: "300", cy: "300", r: "160", fill: "url(#orb-core)" }),
    /* @__PURE__ */ jsxs("g", { className: "origin-center", style: { transformOrigin: "300px 300px" }, children: [
      /* @__PURE__ */ jsx(
        motion.g,
        {
          animate: { rotate: 360 },
          transition: { duration: 60, repeat: Infinity, ease: "linear" },
          style: { transformOrigin: "300px 300px" },
          children: /* @__PURE__ */ jsx("ellipse", { cx: "300", cy: "300", rx: "260", ry: "100", fill: "none", stroke: "#E8613C", strokeWidth: "1", strokeOpacity: "0.25" })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.g,
        {
          animate: { rotate: -360 },
          transition: { duration: 90, repeat: Infinity, ease: "linear" },
          style: { transformOrigin: "300px 300px" },
          children: /* @__PURE__ */ jsx("ellipse", { cx: "300", cy: "300", rx: "240", ry: "180", fill: "none", stroke: "#E8613C", strokeWidth: "1", strokeOpacity: "0.18" })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.g,
        {
          animate: { rotate: 360 },
          transition: { duration: 45, repeat: Infinity, ease: "linear" },
          style: { transformOrigin: "300px 300px" },
          children: /* @__PURE__ */ jsx("circle", { cx: "300", cy: "300", r: "200", fill: "none", stroke: "#E8613C", strokeWidth: "1", strokeOpacity: "0.15", strokeDasharray: "4 6" })
        }
      )
    ] }),
    [
      { angle: 0, r: 200, label: "k8s", color: "#7C9DFF" },
      { angle: 60, r: 180, label: "docker", color: "#6FC2FF" },
      { angle: 120, r: 240, label: "tailscale", color: "#9BD3A1" },
      { angle: 180, r: 200, label: "pihole", color: "#FFB38A" },
      { angle: 240, r: 220, label: "pocket", color: "#C8A2FF" },
      { angle: 300, r: 180, label: "n8n", color: "#FF8A8A" }
    ].map((node, i) => {
      const rad = node.angle * Math.PI / 180;
      const cx = 300 + Math.cos(rad) * node.r;
      const cy = 300 + Math.sin(rad) * node.r;
      return /* @__PURE__ */ jsx(
        motion.g,
        {
          animate: { rotate: -360 },
          transition: { duration: 60, repeat: Infinity, ease: "linear" },
          style: { transformOrigin: "300px 300px" },
          children: /* @__PURE__ */ jsxs("g", { transform: `translate(${cx} ${cy})`, children: [
            /* @__PURE__ */ jsx("circle", { r: "22", fill: "white", stroke: node.color, strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx("circle", { r: "4", fill: node.color }),
            /* @__PURE__ */ jsx(
              "text",
              {
                textAnchor: "middle",
                dy: "38",
                fontSize: "9",
                fontFamily: "Silkscreen",
                fill: "#5C5A56",
                style: { textTransform: "uppercase", letterSpacing: "0.1em" },
                children: node.label
              }
            )
          ] })
        },
        i
      );
    }),
    /* @__PURE__ */ jsx("text", { textAnchor: "middle", x: "300", y: "296", fontSize: "11", fontFamily: "Silkscreen", fill: "#5C5A56", style: { textTransform: "uppercase", letterSpacing: "0.25em" }, children: "the" }),
    /* @__PURE__ */ jsx("text", { textAnchor: "middle", x: "300", y: "316", fontSize: "22", fontFamily: "Fraunces", fontStyle: "italic", fill: "#131211", fontWeight: "500", children: "homelab" })
  ] }) });
}
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.4, 0]);
  const time = useMemo(() => /* @__PURE__ */ new Date(), []);
  const greeting = useMemo(() => {
    const h = time.getHours();
    if (h < 5) return "up late";
    if (h < 12) return "good morning";
    if (h < 17) return "good afternoon";
    if (h < 22) return "good evening";
    return "good night";
  }, [time]);
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      id: "hero",
      ref: containerRef,
      style: { y, opacity },
      className: "relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-20 md:px-12 md:py-0 lg:px-20",
      children: [
        /* @__PURE__ */ jsx(ClusterOrb, {}),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-8 md:px-12 lg:px-20", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4, duration: 0.8 },
              className: "flex items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-accent", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-sm font-bold text-white", children: "S" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-bg bg-green-500" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "hidden flex-col leading-tight sm:flex", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg", children: "shameel" }),
                  /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[9px] text-fg-faint", children: "~/portfolio" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.8 },
              className: "flex items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "hidden items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] text-fg-muted backdrop-blur-sm md:flex", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" }),
                  "cluster online · 31d"
                ] }),
                /* @__PURE__ */ jsx(Magnetic, { strength: 0.25, children: /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    href: "https://github.com/muhammad-shameel-ks",
                    target: "_blank",
                    rel: "noreferrer",
                    "data-cursor": "hover",
                    className: "flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) }),
                      "GitHub"
                    ]
                  }
                ) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              className: "mb-8 flex flex-wrap items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-green-200/40 bg-pastel-green/50 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-green-800", children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" })
                  ] }),
                  "Open to work"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint", children: [
                  "· ",
                  greeting
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              className: "text-balance text-[clamp(2.4rem,7.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-fg",
              children: [
                "I'm",
                " ",
                /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic font-medium text-accent", children: "Shameel" }),
                  /* @__PURE__ */ jsx(
                    motion.svg,
                    {
                      initial: { pathLength: 0 },
                      animate: { pathLength: 1 },
                      transition: { delay: 1.2, duration: 0.9, ease: "easeOut" },
                      className: "absolute -bottom-1.5 left-0 w-full",
                      viewBox: "0 0 200 12",
                      fill: "none",
                      preserveAspectRatio: "none",
                      children: /* @__PURE__ */ jsx(
                        motion.path,
                        {
                          d: "M2 8C30 2 60 4 100 6C140 8 170 3 198 7",
                          stroke: "#E8613C",
                          strokeWidth: "2.5",
                          strokeLinecap: "round",
                          initial: { pathLength: 0 },
                          animate: { pathLength: 1 },
                          transition: { delay: 1.2, duration: 0.9, ease: "easeOut" }
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("br", {}),
                "a ",
                /* @__PURE__ */ jsx(RotatingWord, {})
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              className: "mb-10 max-w-xl text-pretty text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-fg-muted",
              children: "I design, build, and self-host the systems I work on — from full-stack apps to the Kubernetes cluster humming on a Sony VAIO in my bedroom. Then I write about it."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              className: "flex flex-wrap items-center gap-3",
              children: [
                /* @__PURE__ */ jsx(Magnetic, { strength: 0.2, children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#projects",
                    "data-cursor": "hover",
                    className: "group inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl",
                    children: [
                      "See the work",
                      /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "transition-transform group-hover:translate-x-0.5", children: [
                        /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                        /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(Magnetic, { strength: 0.2, children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#contact",
                    "data-cursor": "hover",
                    className: "group inline-flex items-center gap-2.5 rounded-full border border-fg/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white",
                    children: [
                      /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
                        /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
                      ] }),
                      "Say hello"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("span", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-accent", children: "⌘" }),
                  "K · command palette"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              className: "mt-12 max-w-md",
              children: [
                /* @__PURE__ */ jsx("a", { href: "#chapter-03", "data-cursor": "hover", className: "group block", "aria-label": "Jump to the homelab story", children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "overflow-hidden rounded-xl border border-stone-800/60 transition-transform group-hover:-translate-y-0.5",
                    style: { background: "var(--color-terminal-bg)", boxShadow: "0 24px 60px -20px rgba(0,0,0,0.45)" },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 border-b border-stone-800/70 px-3 py-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
                        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
                        /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
                        /* @__PURE__ */ jsx("span", { className: "ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500", children: "shameel@vaio" }),
                        /* @__PURE__ */ jsxs("span", { className: "ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5", children: [
                          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[9px] text-green-400", children: "connected" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "px-3 py-3 font-[JetBrains_Mono] text-[11px] leading-relaxed", style: { color: "var(--color-terminal-fg)" }, children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "$" }),
                          " kubectl get pods -A | grep Running"
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-stone-500", children: [
                          "infra/pocketbase  · ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Running" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-stone-500", children: [
                          "infra/pi-hole     · ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Running" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-stone-500", children: [
                          "apps/scentence    · ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Running" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "text-stone-500", children: [
                          "infra/tailscale   · ",
                          /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Running" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "mt-1 text-amber-300", children: "✓ 7/7 healthy · uptime 31d" })
                      ] })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("p", { className: "mt-2 pl-1 font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-accent", children: "↳" }),
                  " peek at the cluster — full story below"
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.4, duration: 1 },
            className: "absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border/60 bg-bg/60 backdrop-blur-sm",
            children: /* @__PURE__ */ jsx("div", { className: "marquee-mask flex w-max animate-marquee-fast gap-3 px-6 py-3", children: [...TICKER, ...TICKER, ...TICKER].map((t, i) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex shrink-0 items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-fg-muted",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-accent" }),
                  t
                ]
              },
              i
            )) })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.8, duration: 1 },
            className: "absolute bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-fg-faint", children: "scroll" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 6, 0] },
                  transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                  className: "h-6 w-px bg-fg-faint/40"
                }
              )
            ]
          }
        )
      ]
    }
  );
}

function FloatingShapes() {
  const { scrollY, scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -340]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1e3, -1e3], [0, 0.5, -0.5]);
  useTransform(velocityFactor, (v) => `rotate(${v}deg)`);
  const spinDeg = useTransform(velocityFactor, (v) => v);
  React.useEffect(() => {
    return spinDeg.on("change", (deg) => {
      document.documentElement.style.setProperty("--scroll-spin", `${deg}deg`);
    });
  }, [spinDeg]);
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute -right-48 -top-32 h-[600px] w-[600px] rounded-full bg-pastel-orange/22 blur-[140px] animate-drift"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y2 },
        className: "absolute -left-48 top-[60vh] h-[450px] w-[450px] rounded-full bg-pastel-blue/18 blur-[140px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute -right-32 top-[160vh] h-[400px] w-[400px] rounded-full bg-pastel-purple/16 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y4 },
        className: "absolute -left-40 top-[250vh] h-[350px] w-[350px] rounded-full bg-pastel-green/14 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute -right-40 top-[340vh] h-[400px] w-[400px] rounded-full bg-pastel-pink/14 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dot-grid opacity-30" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute right-[8vw] top-[12vh] hidden h-9 w-9 rounded-full border-2 border-accent/15 animate-float md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute left-[6vw] top-[50vh] hidden h-5 w-5 rotate-12 rounded-md bg-pastel-blue/30 animate-float-slow md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1, rotate: spinDeg },
        className: "absolute left-[10vw] top-[130vh] hidden md:block",
        children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", className: "text-accent/15", children: /* @__PURE__ */ jsx("path", { d: "M12 2V22M2 12H22", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y2 },
        className: "absolute right-[6vw] top-[200vh] hidden h-4 w-4 rounded-full bg-pastel-pink/30 animate-float md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute left-[8vw] top-[280vh] hidden h-3 w-3 rotate-45 border border-accent/15 animate-float-slow md:block"
      }
    )
  ] });
}

const NAV_ITEMS = [
  { id: "hero", label: "Home", short: "HOME", n: "00" },
  { id: "chapter-01", label: "Origin", short: "ORIGIN", n: "01" },
  { id: "chapter-02", label: "Philosophy", short: "PHIL", n: "02" },
  { id: "chapter-03", label: "Sysadmin", short: "OPS", n: "03" },
  { id: "projects", label: "Work", short: "WORK", n: "04" },
  { id: "now", label: "Now", short: "NOW", n: "05" },
  { id: "infra", label: "Infra", short: "INFRA", n: "06" },
  { id: "journey", label: "Journey", short: "JOURNEY", n: "07" },
  { id: "stack", label: "Stack", short: "STACK", n: "08" },
  { id: "contact", label: "Reach", short: "REACH", n: "09" }
];
function useModalOpen() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setOpen(document.body.hasAttribute("data-modal-open"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-modal-open"] });
    return () => observer.disconnect();
  }, []);
  return open;
}
function PersistentNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY, scrollYProgress } = useScroll();
  const isModalOpen = useModalOpen();
  const dockOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const dockX = useTransform(scrollY, [200, 400], [-20, 0]);
  useEffect(() => {
    const observerCallback = (entries) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        setActiveSection(intersecting[intersecting.length - 1].target.id);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-30% 0% -50% 0%",
      threshold: 0
    });
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (id === "hero") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.aside,
      {
        "aria-label": "Section navigation",
        style: {
          opacity: isModalOpen ? 0 : 1,
          pointerEvents: isModalOpen ? "none" : "auto"
        },
        className: "fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-1.5 xl:flex",
        children: [
          NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollTo(item.id),
                "aria-label": item.label,
                "aria-current": isActive ? "true" : void 0,
                "data-cursor": "hover",
                className: "group flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "overflow-hidden whitespace-nowrap rounded-md px-2 py-0.5 font-[Silkscreen] text-[9px] uppercase tracking-widest opacity-0 transition-all group-hover:opacity-100",
                        isActive ? "bg-accent/15 text-accent" : "bg-white/80 text-fg-muted backdrop-blur-sm"
                      ),
                      children: item.short
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      animate: {
                        width: isActive ? 24 : 6,
                        backgroundColor: isActive ? "#E8613C" : "#D8D5D0"
                      },
                      transition: { type: "spring", stiffness: 300, damping: 25 },
                      className: "h-px rounded-full"
                    }
                  )
                ]
              },
              item.id
            );
          }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", className: "overflow-visible", children: [
              /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "8", fill: "none", stroke: "#ECEAE6", strokeWidth: "2" }),
              /* @__PURE__ */ jsx(
                motion.circle,
                {
                  cx: "10",
                  cy: "10",
                  r: "8",
                  fill: "none",
                  stroke: "#E8613C",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  style: { pathLength: scrollYProgress },
                  transform: "rotate(-90 10 10)"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-muted", children: "scroll" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.nav,
      {
        "aria-label": "Quick navigation",
        style: {
          opacity: isModalOpen ? 0 : dockOpacity,
          x: isModalOpen ? 0 : dockX,
          pointerEvents: isModalOpen ? "none" : "auto"
        },
        className: "fixed bottom-3 left-1/2 z-50 -translate-x-1/2 xl:hidden",
        children: /* @__PURE__ */ jsx("div", { className: "pointer-events-auto flex items-center gap-0.5 rounded-2xl border border-border/60 bg-white/90 p-1 shadow-lg backdrop-blur-md", children: NAV_ITEMS.slice(0, 6).map((item) => {
          const isActive = activeSection === item.id;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollTo(item.id),
              "aria-label": item.label,
              "aria-current": isActive ? "true" : void 0,
              "data-cursor": "hover",
              className: cn(
                "relative rounded-xl px-2.5 py-1.5 transition-colors",
                isActive ? "text-accent" : "text-fg-muted hover:text-fg"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] font-bold uppercase tracking-tight", children: item.short }),
                isActive && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    layoutId: "active-mobile-pill",
                    className: "absolute inset-0 -z-10 rounded-xl bg-pastel-orange/40",
                    transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                  }
                )
              ]
            },
            item.id
          );
        }) })
      }
    )
  ] });
}

function TopProgress() {
  const { scrollYProgress } = useScroll();
  const isModalOpen = useModalOpen();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed left-0 right-0 top-0 z-50 h-0.5 bg-border/30 transition-opacity duration-200",
      style: { opacity: isModalOpen ? 0 : 1, pointerEvents: "none" },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx(motion.div, { style: { width }, className: "h-full bg-accent" })
    }
  );
}

const CHAPTERS = [
  { id: "hero", n: "00", label: "Home" },
  { id: "chapter-01", n: "01", label: "The Origin" },
  { id: "chapter-02", n: "02", label: "The Philosophy" },
  { id: "chapter-03", n: "03", label: "The Sysadmin" },
  { id: "projects", n: "WORK", label: "The Work" },
  { id: "now", n: "NOW", label: "Cluster Status" },
  { id: "infra", n: "PIPE", label: "Infrastructure" },
  { id: "journey", n: "TIME", label: "The Journey" },
  { id: "stack", n: "STACK", label: "The Stack" },
  { id: "contact", n: "06", label: "The Connection" }
];
function ChapterHeader() {
  const [visibleChapter, setVisibleChapter] = useState(CHAPTERS[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState("");
  const isModalOpen = useModalOpen();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [-10, 0]);
  useEffect(() => {
    const observerCallback = (entries) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        const chapter = CHAPTERS.find((c) => c.id === intersecting[intersecting.length - 1].target.id);
        if (chapter) setVisibleChapter(chapter);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0
    });
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const update = () => {
      const d = /* @__PURE__ */ new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`
      );
    };
    update();
    const t = setInterval(update, 1e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        opacity: isModalOpen ? 0 : opacity,
        y: isModalOpen ? -10 : y,
        pointerEvents: isModalOpen ? "none" : "auto"
      },
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.3 },
      className: "fixed left-0 right-0 top-0 z-40 border-b border-border/40 bg-bg/80 backdrop-blur-md",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "flex h-7 w-7 items-center justify-center rounded-lg bg-accent",
              children: /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] font-bold text-white", children: "S" })
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.2 },
              className: "flex items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-accent", children: visibleChapter.n }),
                /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-border" }),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-muted", children: visibleChapter.label })
              ]
            },
            visibleChapter.id
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 font-mono text-[10px] text-fg-faint", children: [
          /* @__PURE__ */ jsxs("span", { className: "hidden items-center gap-1.5 md:flex", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" })
            ] }),
            "cluster · 31d"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:block", children: "·" }),
          /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: time }),
          /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "·" }),
          /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "IN" })
        ] })
      ] })
    }
  ) });
}

const STATS = [
  {
    value: "100",
    label: "Lighthouse",
    tone: "from-pastel-green/50 to-pastel-green/10",
    spark: [40, 60, 55, 80, 90, 85, 100, 100],
    detail: "performance · a11y · best practices"
  },
  {
    value: "7+",
    label: "Self-hosted",
    tone: "from-pastel-orange/50 to-pastel-orange/10",
    spark: [10, 20, 25, 30, 50, 60, 70, 80],
    detail: "services on the homelab cluster"
  },
  {
    value: "5",
    label: "Live products",
    tone: "from-pastel-purple/50 to-pastel-purple/10",
    spark: [5, 15, 25, 35, 50, 65, 75, 100],
    detail: "shipped · real users paying"
  },
  {
    value: "31d",
    label: "Uptime",
    tone: "from-pastel-blue/50 to-pastel-blue/10",
    spark: [100, 100, 98, 100, 100, 95, 100, 100],
    detail: "cluster online · no manual restart"
  }
];
function Spark({ data, className }) {
  const w = 100, h = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => `${i / (data.length - 1) * w},${h - (v - min) / range * h}`).join(" ");
  const last = data[data.length - 1];
  return /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${w} ${h}`, className: cn("h-6 w-full", className), preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `grad-${data[0]}`, x1: "0", x2: "0", y1: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#E8613C", stopOpacity: "0.3" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#E8613C", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsx(
      "polyline",
      {
        points: `0,${h} ${points} ${w},${h}`,
        fill: `url(#grad-${data[0]})`,
        stroke: "none"
      }
    ),
    /* @__PURE__ */ jsx(
      "polyline",
      {
        points,
        fill: "none",
        stroke: "#E8613C",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.8"
      }
    ),
    /* @__PURE__ */ jsx("circle", { cx: w, cy: h - (last - min) / range * h, r: "2", fill: "#E8613C" })
  ] });
}
function StatsStrip() {
  return /* @__PURE__ */ jsxs("section", { className: "relative border-y border-border/60 bg-bg-warm/60", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dot-grid opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16 lg:px-20", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-20% 0px" },
        variants: { show: { transition: { staggerChildren: 0.1 } } },
        className: "grid grid-cols-2 gap-3 md:grid-cols-4",
        children: STATS.map((s, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            },
            whileHover: { y: -3 },
            "data-cursor": "hover",
            className: cn(
              "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
              i === 0 && "md:col-span-1"
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60", s.tone) }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint", children: s.label }),
                  /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[9px] text-fg-faint", children: i === 3 ? "live" : `0${i + 1}` })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold tracking-tight text-fg md:text-4xl", children: s.value }),
                /* @__PURE__ */ jsx(Spark, { data: s.spark }),
                /* @__PURE__ */ jsx("div", { className: "font-[JetBrains_Mono] text-[10px] leading-relaxed text-fg-muted", children: s.detail })
              ] })
            ]
          },
          s.label
        ))
      }
    ) })
  ] });
}

const icons = {
  rocket: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" }),
    /* @__PURE__ */ jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
    /* @__PURE__ */ jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
  ] }),
  compass: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })
  ] }),
  wrench: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" }) }),
  lightbulb: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
    /* @__PURE__ */ jsx("path", { d: "M10 22h4" }),
    /* @__PURE__ */ jsx("path", { d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" })
  ] }),
  cpu: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }),
    /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "6", height: "6" }),
    /* @__PURE__ */ jsx("path", { d: "M15 2v2" }),
    /* @__PURE__ */ jsx("path", { d: "M15 20v2" }),
    /* @__PURE__ */ jsx("path", { d: "M2 15h2" }),
    /* @__PURE__ */ jsx("path", { d: "M2 9h2" }),
    /* @__PURE__ */ jsx("path", { d: "M20 15h2" }),
    /* @__PURE__ */ jsx("path", { d: "M20 9h2" }),
    /* @__PURE__ */ jsx("path", { d: "M9 2v2" }),
    /* @__PURE__ */ jsx("path", { d: "M9 20v2" })
  ] }),
  brain: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3 3 3 0 000 6 3 3 0 003 3v1a4 4 0 008 0v-1a3 3 0 003-3 3 3 0 000-6 3 3 0 00-3-3V6a4 4 0 00-4-4z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2v20" })
  ] }),
  search: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }),
  star: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }),
  terminal: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  layers: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
    /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
  ] }),
  git: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "3" }),
    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M6 21V9a9 9 0 009 9" })
  ] }),
  sparkles: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" }) })
};
const iconTone = {
  rocket: { bg: "bg-pastel-orange/60", text: "text-accent" },
  compass: { bg: "bg-pastel-blue/60", text: "text-blue-600" },
  wrench: { bg: "bg-pastel-purple/60", text: "text-purple-600" },
  lightbulb: { bg: "bg-pastel-yellow/60", text: "text-yellow-700" },
  cpu: { bg: "bg-pastel-green/60", text: "text-green-700" },
  brain: { bg: "bg-pastel-pink/60", text: "text-pink-600" },
  search: { bg: "bg-pastel-blue/60", text: "text-blue-600" },
  star: { bg: "bg-pastel-orange/60", text: "text-accent" },
  terminal: { bg: "bg-pastel-green/60", text: "text-green-700" },
  layers: { bg: "bg-pastel-purple/60", text: "text-purple-600" },
  git: { bg: "bg-pastel-orange/60", text: "text-accent" },
  sparkles: { bg: "bg-pastel-yellow/60", text: "text-yellow-700" }
};
function StoryBlock({
  eyebrow,
  heading,
  headingAccent,
  body,
  aside,
  stats,
  ascii,
  warm,
  reverse,
  icon = "rocket",
  chapter,
  children
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"]
  });
  const paraOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const paraY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const sideX = useTransform(scrollYProgress, [0, 1], [reverse ? 30 : -30, 0]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);
  const tone = iconTone[icon];
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      ref,
      style: { opacity: paraOpacity, y: paraY },
      className: cn(
        "relative overflow-hidden border-y border-border/40 px-6 py-24 md:px-12 md:py-36 lg:px-20",
        warm ? "bg-bg-warm" : "bg-bg"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
          ascii && /* @__PURE__ */ jsx(
            "pre",
            {
              "aria-hidden": true,
              className: "absolute -right-12 top-12 hidden font-[JetBrains_Mono] text-[10px] leading-[1] text-fg/[0.04] md:block",
              style: { whiteSpace: "pre" },
              children: ascii
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-pastel-orange/10 blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-blue/10 blur-[100px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: inView ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6 },
                className: cn("flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 shadow-sm", tone.bg, tone.text),
                children: icons[icon]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              chapter && /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: inView ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.6, delay: 0.05 },
                  className: "font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-fg-faint",
                  children: chapter
                }
              ),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: inView ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.6, delay: 0.1 },
                  className: "font-[Silkscreen] text-[14px] uppercase tracking-widest text-accent",
                  children: eyebrow
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ml-auto hidden items-center gap-2 md:flex", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
                String(Math.floor(Math.random() * 90) + 10),
                "% read"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1 w-16 overflow-hidden rounded-full bg-border", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: inView ? { width: "70%" } : {},
                  transition: { duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                  className: "h-full bg-accent"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: cn("grid gap-10 md:gap-16", reverse ? "md:grid-cols-12" : "md:grid-cols-12"), children: [
            /* @__PURE__ */ jsxs("div", { className: cn("md:col-span-7", reverse && "md:order-2 md:col-start-6"), children: [
              /* @__PURE__ */ jsxs(
                motion.h2,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: inView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                  className: "text-balance text-[clamp(1.8rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-fg",
                  children: [
                    heading,
                    headingAccent && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic font-medium text-accent", children: headingAccent })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: inView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                  className: "mt-8 max-w-2xl text-pretty text-base font-light leading-[1.75] text-fg-muted md:text-lg",
                  children: body
                }
              ),
              stats && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  animate: inView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                  className: "mt-10 grid max-w-2xl grid-cols-3 gap-2 border-y border-border/60 py-5",
                  children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "px-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-[Fraunces] text-2xl font-medium tracking-tight text-fg md:text-3xl", children: s.value }),
                    /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint", children: s.label })
                  ] }, s.label))
                }
              )
            ] }),
            (aside || ascii) && /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { x: sideX, opacity: sideOpacity },
                className: cn("md:col-span-5", reverse ? "md:order-1" : "md:col-start-8"),
                children: aside && /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-sm", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/8 blur-2xl" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-pastel-blue/30 blur-2xl" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" }) }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[9px] uppercase tracking-widest text-accent", children: "Aside" }),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "mt-1.5 text-sm leading-relaxed text-fg-muted",
                          dangerouslySetInnerHTML: { __html: aside }
                        }
                      )
                    ] })
                  ] })
                ] })
              }
            )
          ] }),
          children && /* @__PURE__ */ jsx("div", { className: "mt-12", children })
        ] })
      ]
    }
  );
}

function TextReveal({ text, className = "", highlightWords = [], eyebrow }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.15"]
  });
  const words = text.split(" ");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: cn("relative overflow-hidden border-y border-border/40 bg-bg-warm/60 px-6 py-24 md:px-12 md:py-36 lg:px-20", className),
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-4 top-12 select-none font-[Fraunces] text-[12rem] leading-none text-accent/8 md:-left-8 md:text-[18rem]", children: '"' }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 dot-grid opacity-30" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
          eyebrow && /* @__PURE__ */ jsxs(
            motion.div,
            {
              style: { opacity: scrollYProgress },
              className: "mb-8 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-accent", children: eyebrow })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "flex flex-wrap text-balance text-[clamp(1.5rem,3.5vw,2.6rem)] font-medium leading-[1.3] tracking-[-0.02em] text-fg", children: words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const isHighlight = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));
            return /* @__PURE__ */ jsx(Word, { progress: scrollYProgress, range: [start, end], highlight: isHighlight, children: word }, i);
          }) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              style: { opacity: scrollYProgress },
              className: "mt-10 flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-accent" }),
                /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] text-sm italic text-fg-muted", children: "— on the record" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Word({
  children,
  progress,
  range,
  highlight
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [12, 0]);
  const blur = useTransform(progress, range, [4, 0]);
  return /* @__PURE__ */ jsx("span", { className: "relative mr-[0.3em] mt-1.5 inline-block overflow-hidden", children: /* @__PURE__ */ jsx(
    motion.span,
    {
      style: { opacity, y, filter: useTransform(blur, (b) => `blur(${b}px)`) },
      className: cn(
        "inline-block transition-colors",
        highlight ? "font-[Fraunces] italic text-accent" : ""
      ),
      children
    }
  ) });
}

function ImageModal({ src, alt, onClose }) {
  React.useEffect(() => {
    document.body.setAttribute("data-modal-open", "true");
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.removeAttribute("data-modal-open");
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  const onKey = (e) => e.key === "Escape" && onClose();
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": `${alt} screenshot`,
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            "aria-label": "Close",
            className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20",
            children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2", strokeLinecap: "round", children: [
              /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.img,
          {
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.9, opacity: 0 },
            src,
            alt,
            className: "max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl",
            onClick: (e) => e.stopPropagation()
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/60 px-4 py-2", children: /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-sm text-white", children: alt }) })
      ]
    }
  );
}
const projects = [
  {
    index: "01",
    title: "Scentence",
    subtitle: "Premium Fragrance E-commerce — live with real customers",
    description: "A premium fragrance e-commerce platform built for a client. Live at scentenceparfum.com with real customers and orders. This isn't a portfolio piece — it's a production business with real revenue.",
    funNote: "A real production business — not a portfolio piece.",
    tags: [
      { name: "Next.js 16", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Three.js / R3F", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Supabase", color: "bg-pastel-green/50 text-green-700" }
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/three.js.svg"],
    link: "https://scentenceparfum.com",
    highlights: [
      "Live production with real customers and revenue",
      "3D interactive mesh background, fully responsive",
      "Admin dashboard with order tracking and analytics",
      "Stripe payments with webhook reconciliation"
    ],
    iconColor: "bg-pastel-purple/50 text-purple-600",
    screenshot: "/projects/scentence.png",
    isLive: true,
    featured: true,
    metric: [
      { label: "customers", value: "500+" },
      { label: "uptime", value: "99.9%" }
    ]
  },
  {
    index: "02",
    title: "Stock Salt",
    subtitle: "Real-time Inventory SaaS",
    description: "Multi-outlet inventory management with real-time sync across all POS terminals.",
    funNote: "Spreadsheets shouldn't be the backbone of a business.",
    tags: [
      { name: "Next.js 15", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Supabase Realtime", color: "bg-pastel-green/50 text-green-700" }
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/reactjs.svg"],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: ["Real-time stock sync across terminals", "Centralized master stock management", "Revenue analytics dashboard"],
    iconColor: "bg-pastel-blue/50 text-blue-600",
    screenshot: "/projects/stock-salt.png",
    isLive: true,
    metric: [
      { label: "outlets", value: "5+" },
      { label: "realtime", value: "✓" }
    ]
  },
  {
    index: "03",
    title: "Office Pal",
    subtitle: "College Management System",
    description: "Replaces paperwork with automated exam seating and administration.",
    funNote: "Yes, I automated away someone's entire job. They thanked me.",
    tags: [
      { name: "Flutter", color: "bg-pastel-purple/50 text-purple-700" },
      { name: "Supabase", color: "bg-pastel-green/50 text-green-700" },
      { name: "Riverpod", color: "bg-pastel-orange/50 text-orange-700" }
    ],
    stackIcons: ["/flutter.svg", "/supabase.svg", "/river-pod.svg"],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: ["Anti-cheat seating algorithm", "Print-ready PDF generation", "4 role-based dashboards"],
    iconColor: "bg-pastel-purple/50 text-purple-600",
    screenshot: "/projects/office-pal.png",
    metric: [
      { label: "students", value: "2k" },
      { label: "roles", value: "4" }
    ]
  },
  {
    index: "04",
    title: "KSDC Smart Helper",
    subtitle: "Government Database Utility",
    description: "Built for the Kerala State Development Corporation to resolve complex database issues.",
    funNote: "Making SQL accessible to everyone, one query at a time.",
    tags: [
      { name: "React", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Node.js", color: "bg-pastel-green/50 text-green-700" }
    ],
    stackIcons: ["/reactjs.svg", "/typescript.svg", "/nodejs.svg", "/microsoft-sql-server.svg"],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: ["Auto SQL query generation", "Simplified UI for non-tech users", "Query validation"],
    iconColor: "bg-pastel-orange/50 text-orange-600",
    showInternshipBadge: true,
    screenshot: "/projects/ksdc-smart.png"
  },
  {
    index: "05",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Tunneling",
    description: "Auto Cloudflare Tunnel for local n8n development.",
    funNote: "I was too lazy to configure tunnels manually. So I automated it.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700" },
      { name: "Docker", color: "bg-pastel-blue/50 text-blue-700" },
      { name: "Cloudflare", color: "bg-pastel-orange/50 text-orange-700" }
    ],
    stackIcons: ["/python.svg", "/docker-engine.svg", "/cloudflare.svg"],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: ["Auto Cloudflare Tunnel provisioning", "Dynamic webhook URL config", "Dual CLI + TUI interface"],
    iconColor: "bg-pastel-green/50 text-green-600"
  }
];
const projectIcons = {
  "01": /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 01-8 0" })
  ] }),
  "02": /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20" }),
    /* @__PURE__ */ jsx("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" })
  ] }),
  "03": /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
  ] }),
  "04": /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
  ] }),
  "05": /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M2 2l20 20" })
  ] })
};
function ProjectCard({ project, onImageClick, size = "md" }) {
  const [hovered, setHovered] = useState(false);
  const featured = project.featured;
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10% 0px" },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      "data-cursor": "hover",
      className: cn(
        "group grain-card relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition-all duration-500 hover:shadow-xl",
        featured && "md:col-span-2"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => project.screenshot && onImageClick(project.screenshot, project.title),
            className: cn(
              "relative overflow-hidden bg-surface",
              featured ? "h-56 md:h-72" : size === "sm" ? "h-32" : "h-40",
              project.screenshot && "cursor-zoom-in"
            ),
            children: [
              project.screenshot ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.screenshot,
                    alt: `${project.title} screenshot`,
                    loading: "lazy",
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsx("span", { className: "rounded-md bg-black/50 px-2 py-1 font-[JetBrains_Mono] text-[10px] text-white backdrop-blur-sm", children: "click to enlarge" }) })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-2 text-fg-faint", children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-xl bg-pastel-green/30", children: /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "text-green-600", children: [
                  /* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20" }),
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
                  /* @__PURE__ */ jsx("path", { d: "M2 2l20 20" })
                ] }) }),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] tracking-wider", children: "CLI TOOL" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute left-3 top-3 flex flex-wrap items-center gap-1.5", children: [
                project.isLive && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 rounded-md bg-green-500/95 px-2 py-1 font-[Silkscreen] text-[9px] font-bold tracking-wider text-white shadow-sm", children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-white" })
                  ] }),
                  "LIVE"
                ] }),
                project.showInternshipBadge && /* @__PURE__ */ jsx("div", { className: "rounded-md bg-fg/85 px-2 py-1 font-[Silkscreen] text-[9px] tracking-wider text-white shadow-sm", children: "INTERNSHIP" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-3", children: /* @__PURE__ */ jsxs("span", { className: "font-[JetBrains_Mono] text-[10px] text-white/90 mix-blend-difference", children: [
                "/",
                project.index
              ] }) }),
              featured && project.metric && /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 flex gap-1.5", children: project.metric.map((m) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "rounded-md bg-white/95 px-2 py-1 text-right shadow-sm backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "font-[JetBrains_Mono] text-[11px] font-bold text-fg", children: m.value }),
                    /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[8px] uppercase tracking-wider text-fg-faint", children: m.label })
                  ]
                },
                m.label
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: cn("relative flex flex-1 flex-col p-5", featured && "md:p-7"), children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("div", { className: cn("flex h-9 w-9 items-center justify-center rounded-lg", project.iconColor), children: projectIcons[project.index] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-[Silkscreen] text-[10px] text-fg-faint", children: [
                "/",
                project.index
              ] }),
              /* @__PURE__ */ jsx("h3", { className: cn("font-bold tracking-tight text-fg", featured ? "text-2xl" : "text-base"), children: project.title })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: cn("mb-3 font-light text-fg-muted", featured ? "text-sm md:text-base" : "text-sm"), children: project.subtitle }),
          project.stackIcons && /* @__PURE__ */ jsx("div", { className: "mb-4 flex flex-wrap gap-1.5", children: project.stackIcons.map((icon, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 rounded-lg border border-border/50 bg-surface px-2 py-1 transition-colors hover:border-accent/40",
              children: [
                /* @__PURE__ */ jsx("img", { src: icon, alt: "", className: "h-3.5 w-3.5 object-contain" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-fg-muted", children: project.tags[i]?.name })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mb-4 space-y-1.5", children: project.highlights.slice(0, featured ? 4 : 2).map((h, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-fg-muted", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" }),
            h
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center justify-between border-t border-border/30 pt-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: project.link,
                target: "_blank",
                rel: "noreferrer",
                "data-cursor": "hover",
                className: "group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-dark",
                children: [
                  project.isLive ? "View live site" : "View on GitHub",
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      animate: { x: hovered ? 3 : 0 },
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                      children: /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M1 13L13 1M13 1H5M13 1V9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] uppercase tracking-wider text-fg-faint", children: project.isLive ? "production" : "open source" })
          ] })
        ] })
      ]
    }
  );
}
function ProjectList() {
  const [modalImage, setModalImage] = useState(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-y border-border/40 bg-bg px-6 py-24 md:px-12 md:py-36 lg:px-20", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalImage && /* @__PURE__ */ jsx(ImageModal, { src: modalImage.src, alt: modalImage.title, onClose: () => setModalImage(null) }) }),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-pastel-purple/12 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -left-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-orange/12 blur-[100px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { rotate: -8, y: -2 },
                transition: { type: "spring", stiffness: 300 },
                className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm",
                children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "The Work · /projects" })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              className: "text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
              children: [
                "Things I've built that",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "actually ship." })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.15, duration: 0.8 },
              className: "mt-4 max-w-lg font-light leading-relaxed text-fg-muted md:text-lg",
              children: "Real tools solving real problems for real people. Not proof-of-concepts that never launched."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://github.com/muhammad-shameel-ks",
            target: "_blank",
            rel: "noreferrer",
            "data-cursor": "hover",
            className: "group inline-flex items-center gap-2 rounded-full border border-fg/10 bg-white/70 px-4 py-2 text-xs font-semibold text-fg backdrop-blur-sm transition-colors hover:border-accent/40",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) }),
              "All repos",
              /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 14 14", fill: "none", className: "transition-transform group-hover:translate-x-0.5", children: /* @__PURE__ */ jsx("path", { d: "M1 13L13 1M13 1H5M13 1V9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(ProjectCard, { project: featured, onImageClick: (src, title) => setModalImage({ src, title }), size: "lg" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 md:gap-5", children: rest.slice(0, 2).map((project) => /* @__PURE__ */ jsx(ProjectCard, { project, onImageClick: (src, title) => setModalImage({ src, title }) }, project.index)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid gap-4 md:grid-cols-2 md:gap-5", children: rest.slice(2).map((project) => /* @__PURE__ */ jsx(ProjectCard, { project, onImageClick: (src, title) => setModalImage({ src, title }) }, project.index)) })
    ] })
  ] });
}

const SERVICES = [
  { name: "pocketbase", ns: "infra", status: "Running", uptime: "14d 3h", version: "0.22", tag: "backend" },
  { name: "pi-hole", ns: "infra", status: "Running", uptime: "31d 4h", version: "5.18", tag: "dns" },
  { name: "tailscale", ns: "infra", status: "Running", uptime: "21d 9h", version: "1.56", tag: "net" },
  { name: "caddy", ns: "infra", status: "Running", uptime: "31d 4h", version: "2.7", tag: "proxy" },
  { name: "watchtower", ns: "infra", status: "Idle", uptime: "23d 1h", version: "1.7", tag: "auto" },
  { name: "n8n", ns: "infra", status: "Running", uptime: "23d 1h", version: "1.40", tag: "auto" },
  { name: "scentence-api", ns: "apps", status: "Healthy", uptime: "9d 2h", version: "0.9", tag: "web" },
  { name: "scentence-web", ns: "apps", status: "Healthy", uptime: "9d 2h", version: "0.9", tag: "web" }
];
function StatusDot({ status }) {
  const color = status === "Running" || status === "Healthy" ? "bg-green-500" : status === "Idle" ? "bg-amber-400" : "bg-red-500";
  return /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
    /* @__PURE__ */ jsx("span", { className: cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", color) }),
    /* @__PURE__ */ jsx("span", { className: cn("relative inline-flex h-2 w-2 rounded-full", color) })
  ] });
}
function NowStatus() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1e3);
    return () => clearInterval(t);
  }, []);
  const [now, setNow] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(t);
  }, []);
  const stats = {
    total: SERVICES.length,
    healthy: SERVICES.filter((s) => s.status === "Running" || s.status === "Healthy").length,
    load: [0.42, 0.51, 0.49],
    mem: 32
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-y border-border/40 bg-bg px-6 py-24 md:px-12 md:py-32 lg:px-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-pastel-green/15 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-blue/15 blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { rotate: -8, y: -2 },
                transition: { type: "spring", stiffness: 300 },
                className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-green/50 text-green-700 shadow-sm",
                children: /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-green-500" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "Now · /status" })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
              children: [
                "Right now, the cluster is",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "humming." })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "mt-4 max-w-lg font-light leading-relaxed text-fg-muted md:text-lg",
              children: "A live snapshot of the homelab — uptime, services, and a few honest numbers."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-white/70 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-fg-muted", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "live · ",
              now.toUTCString().slice(17, 25),
              " UTC"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-fg-faint", children: "Palakkad · IN · 23°C" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8 grid gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsx(StatCard, { label: "Pods", value: `${stats.healthy}/${stats.total}`, sub: "healthy", tone: "green" }),
        /* @__PURE__ */ jsx(StatCard, { label: "Uptime", value: "31d 4h", sub: "no restart", tone: "orange" }),
        /* @__PURE__ */ jsx(StatCard, { label: "Load", value: stats.load[0].toFixed(2), sub: "1m · 5m · 15m", tone: "blue" }),
        /* @__PURE__ */ jsx(StatCard, { label: "Memory", value: `${stats.mem}%`, sub: "2.5 / 7.7 GiB", tone: "purple" })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "grain-card relative overflow-hidden rounded-3xl border border-border/60 bg-white shadow-md",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-bg-warm px-4 py-3", children: [
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
              /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 font-[JetBrains_Mono] text-[10px] text-fg-muted", children: "kubectl get pods -A" }),
              /* @__PURE__ */ jsxs("span", { className: "ml-auto flex items-center gap-2 font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { opacity: [0.4, 1, 0.4] },
                    transition: { duration: 1.6, repeat: Infinity },
                    children: "● live"
                  }
                ),
                "tick ",
                tick.toString().padStart(4, "0")
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "divide-y divide-border/40", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -8 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.05 },
                className: "grid grid-cols-12 items-center gap-3 px-4 py-3 transition-colors hover:bg-pastel-orange/5",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "col-span-5 flex items-center gap-2.5 md:col-span-4", children: [
                    /* @__PURE__ */ jsx(StatusDot, { status: s.status }),
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-xs font-medium text-fg", children: s.name })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-3 font-mono text-[10px] text-fg-faint md:col-span-2", children: s.ns }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-4 font-mono text-[10px] text-fg-muted md:col-span-2", children: s.uptime }),
                  /* @__PURE__ */ jsxs("div", { className: "col-span-4 hidden font-mono text-[10px] text-fg-faint md:col-span-2 md:block", children: [
                    "v",
                    s.version
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-12 flex justify-end md:col-span-2", children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "rounded-md px-2 py-0.5 font-[Silkscreen] text-[8px] uppercase tracking-wider",
                        s.status === "Running" || s.status === "Healthy" ? "bg-pastel-green/60 text-green-700" : "bg-pastel-yellow/60 text-yellow-700"
                      ),
                      children: s.status
                    }
                  ) })
                ]
              },
              s.name
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-border/60 bg-bg-warm/50 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] text-fg-muted", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "✓ ",
                stats.healthy,
                "/",
                stats.total,
                " pods healthy · cluster ready"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "~ $" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-center font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "live-ish" }),
        " — services are real, but this view is a styled snapshot"
      ] })
    ] })
  ] });
}
function StatCard({ label, value, sub, tone }) {
  const toneMap = {
    green: "from-pastel-green/50 to-pastel-green/10 text-green-700",
    orange: "from-pastel-orange/50 to-pastel-orange/10 text-accent",
    blue: "from-pastel-blue/50 to-pastel-blue/10 text-blue-600",
    purple: "from-pastel-purple/50 to-pastel-purple/10 text-purple-600"
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      whileHover: { y: -3 },
      "data-cursor": "hover",
      className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-sm transition-shadow hover:shadow-md",
      children: [
        /* @__PURE__ */ jsx("div", { className: cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50", toneMap[tone]) }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint", children: label }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-fg md:text-3xl", children: value }),
          /* @__PURE__ */ jsx("div", { className: "font-[JetBrains_Mono] text-[10px] text-fg-muted", children: sub })
        ] })
      ]
    }
  );
}

const steps = [
  {
    label: "Git Push",
    desc: "main branch",
    detail: "commit → origin/main",
    icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ jsx("line", { x1: "1.05", y1: "12", x2: "7", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "17.01", y1: "12", x2: "22.96", y2: "12" })
    ] }),
    color: "bg-pastel-blue/50",
    iconColor: "text-blue-600",
    glow: "rgba(96, 165, 250, 0.4)"
  },
  {
    label: "Actions CI",
    desc: "build + test",
    detail: "docker build · 248 pkgs",
    icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
      /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5" }),
      /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5" })
    ] }),
    color: "bg-pastel-orange/50",
    iconColor: "text-accent",
    glow: "rgba(232, 97, 60, 0.4)"
  },
  {
    label: "Tailscale",
    desc: "encrypted mesh",
    detail: "wg · 100.x tunnel",
    icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0110 0v4" })
    ] }),
    color: "bg-pastel-green/50",
    iconColor: "text-green-600",
    glow: "rgba(74, 222, 128, 0.4)"
  },
  {
    label: "K8s Deploy",
    desc: "home cluster",
    detail: "kubectl apply -f",
    icon: /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
    ] }),
    color: "bg-pastel-purple/50",
    iconColor: "text-purple-600",
    glow: "rgba(168, 85, 247, 0.4)"
  }
];
function InfraFlow() {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-15% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "start 0.15"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 h-96 w-96 rounded-full bg-pastel-purple/15 blur-[140px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pastel-orange/15 blur-[100px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dot-grid opacity-20" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-wrap items-end justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { rotate: -8, y: -2 },
                    transition: { type: "spring", stiffness: 300 },
                    className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-blue/50 shadow-sm",
                    children: /* @__PURE__ */ jsx("img", { src: "/kubernetes.svg", alt: "K8s", className: "h-5 w-5 object-contain" })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "Infrastructure · /pipeline" })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.h2,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  className: "text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
                  children: [
                    "My code",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "deploys itself." })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 10 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: 0.2 },
                className: "rounded-2xl border border-border/60 bg-white/70 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-fg-muted", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" }),
                    /* @__PURE__ */ jsx("span", { children: "last deploy" }),
                    /* @__PURE__ */ jsx("span", { className: "text-fg", children: "· 12m ago" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-fg-faint", children: "a3f8c91 → main" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              initial: { opacity: 0, y: 15 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1, duration: 0.8 },
              className: "mb-14 max-w-3xl font-light leading-relaxed text-fg-muted md:text-lg",
              children: [
                "Git push → GitHub Actions builds the container → Tailscale encrypted tunnel → self-hosted K8s cluster.",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-fg", children: "No cloud dashboard. No vendor lock-in." }),
                " ",
                "Just a homelab and a lot of YAML."
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 right-6 top-[2.5rem] hidden h-[2px] rounded-full bg-border md:block", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { width: lineWidth },
                className: "h-full origin-left rounded-full bg-gradient-to-r from-blue-400 via-accent to-purple-400"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-6 right-6 top-[2.35rem] hidden h-[6px] overflow-visible md:block", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { x: ["-3%", "103%"] },
                transition: { repeat: Infinity, duration: 3.5, ease: "linear", repeatDelay: 1.5 },
                className: "relative h-2 w-8 rounded-full bg-accent shadow-md",
                style: { boxShadow: "0 0 24px rgba(232, 97, 60, 0.7)" },
                children: /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-md" })
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 grid grid-cols-2 gap-5 md:grid-cols-4", children: steps.map((step, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 40, scale: 0.92 },
                whileInView: { opacity: 1, y: 0, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                "data-cursor": "hover",
                className: "group flex flex-col items-center text-center",
                children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      whileHover: { scale: 1.1, y: -4 },
                      transition: { type: "spring", stiffness: 300 },
                      className: cn(
                        "relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 shadow-md backdrop-blur-sm transition-shadow",
                        step.color,
                        step.iconColor
                      ),
                      style: { "--glow": step.glow },
                      children: [
                        step.icon,
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            animate: { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] },
                            transition: { duration: 2, delay: i * 0.4, repeat: Infinity, ease: "easeOut" },
                            className: "absolute inset-0 rounded-2xl",
                            style: { background: "var(--glow)" }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "mb-0.5 text-sm font-semibold text-fg", children: step.label }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-light text-fg-muted", children: step.desc }),
                  /* @__PURE__ */ jsx("span", { className: "mt-1 font-[JetBrains_Mono] text-[9px] text-fg-faint", children: step.detail })
                ]
              },
              step.label
            )) })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 25 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.4, duration: 0.8 },
              className: "grain-card relative mt-16 overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-md md:p-8",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pastel-orange/20 blur-2xl" }),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-pastel-purple/20 blur-2xl" }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { rotate: -4, scale: 1.05 },
                      className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-purple/50 text-purple-600 shadow-sm",
                      children: /* @__PURE__ */ jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
                        /* @__PURE__ */ jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
                        /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2.5", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-bold text-fg", children: "The Homelab" }),
                      /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] uppercase tracking-wider text-fg-faint", children: "Sony VAIO · Arch" }),
                      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 rounded-full bg-pastel-green/50 px-2 py-0.5 font-[JetBrains_Mono] text-[9px] text-green-700", children: [
                        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" }),
                        "online"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-fg-muted", children: [
                      "A Sony VAIO on my desk running Arch Linux. Full K8s cluster, Pi-hole, PocketBase, Tailscale — all self-hosted. Some people have gaming setups.",
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-fg", children: "I have a real production environment I built from scratch." }),
                      " ",
                      "Still learning. Still growing."
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "hidden flex-col gap-1.5 border-l border-border/60 pl-6 font-[JetBrains_Mono] text-[11px] md:flex", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "~ $ neofetch --short" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "OS  " }),
                      "Arch x86_64"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "k8s " }),
                      "5 pods / 4 svc"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "net " }),
                      "Tailscale mesh"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint", children: "dns " }),
                      "Pi-hole · ad-block"
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}

const MILESTONES = [
  {
    year: "2019",
    chapter: "CH 00",
    title: "The broken laptop",
    desc: 'Bent an old machine to my will with Arch, i3, and a lot of caffeine. The first taste of "I built this."',
    tags: ["Arch Linux", "i3", "curiosity"],
    side: "left"
  },
  {
    year: "2020",
    chapter: "CH 01",
    title: "First real project",
    desc: "Built my first web app from scratch. It was ugly. It was real. It changed everything.",
    tags: ["HTML", "CSS", "JavaScript"],
    side: "right"
  },
  {
    year: "2021",
    chapter: "CH 02",
    title: "Hello, Flutter",
    desc: "Picked up Flutter and built a college project. Discovered I loved shipping — not just tinkering.",
    tags: ["Flutter", "Dart", "mobile"],
    side: "left"
  },
  {
    year: "2022",
    chapter: "CH 03",
    title: "Office Pal ships",
    desc: "First production app used by a real college. Exam seating algorithm replaced someone's entire job. They thanked me.",
    tags: ["Flutter", "Supabase", "Riverpod"],
    side: "right"
  },
  {
    year: "2023",
    chapter: "CH 04",
    title: "KSDC internship",
    desc: "Joined the Kerala State Development Corporation. Built a SQL helper tool. Cried twice over CORS.",
    tags: ["React", "Node.js", "MSSQL"],
    side: "left"
  },
  {
    year: "2024",
    chapter: "CH 05",
    title: "The cluster awakens",
    desc: "Stood up a Kubernetes cluster on a Sony VAIO. Pi-hole, PocketBase, Tailscale. Started writing about it.",
    tags: ["K8s", "Docker", "Tailscale"],
    side: "right"
  },
  {
    year: "2025",
    chapter: "CH 06",
    title: "Scentence goes live",
    desc: "Built and launched a real e-commerce for a paying client. Production revenue, real users, real stakes.",
    tags: ["Next.js", "Three.js", "Supabase"],
    side: "left"
  },
  {
    year: "2026",
    chapter: "CH 07",
    title: "Here. Building in public.",
    desc: "AI-augmented workflows, deeper infra knowledge, and this very portfolio. Next: Terraform, then cloud.",
    tags: ["AI", "DevOps", "n8n"],
    side: "right"
  }
];
function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20",
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pastel-orange/10 blur-[100px]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-16 flex flex-wrap items-end justify-between gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { rotate: -8, y: -2 },
                    transition: { type: "spring", stiffness: 300 },
                    className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm",
                    children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                      /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "The Journey · /timeline" })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.h2,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  className: "text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
                  children: [
                    "From a broken laptop to a",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "live cluster." })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-md text-pretty font-light leading-relaxed text-fg-muted", children: "Not a polished highlight reel — just the long, stubborn arc of someone who couldn't stop tinkering." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { height: lineHeight },
                className: "w-full origin-top bg-gradient-to-b from-accent via-accent to-accent/30"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-0 h-full w-px bg-border md:hidden", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { height: lineHeight },
                className: "w-full origin-top bg-accent"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-12 md:space-y-20", children: MILESTONES.map((m, i) => /* @__PURE__ */ jsx(MilestoneRow, { m, index: i }, m.year)) })
          ] })
        ] })
      ]
    }
  );
}
function MilestoneRow({ m, index }) {
  const isLeft = m.side === "left";
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-15% 0px" },
      transition: { duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
      className: "relative",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0 },
            whileInView: { scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.05 + 0.2, type: "spring", stiffness: 300 },
            className: "h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-sm"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: cn("grid gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0", isLeft ? "md:[&>:first-child]:order-2" : ""), children: [
          /* @__PURE__ */ jsx("div", { className: cn("md:px-8", isLeft ? "md:text-right" : ""), children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              whileHover: { y: -3 },
              "data-cursor": "hover",
              className: "grain-card relative inline-block max-w-md rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-accent", children: m.year }),
                  /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-fg-faint" }),
                  /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: m.chapter })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-bold tracking-tight text-fg", children: m.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-fg-muted", children: m.desc }),
                /* @__PURE__ */ jsx("div", { className: cn("mt-4 flex flex-wrap gap-1.5", isLeft && "md:justify-end"), children: m.tags.map((t) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "rounded-md border border-border/50 bg-bg-warm px-2 py-0.5 font-[JetBrains_Mono] text-[10px] text-fg-muted",
                    children: t
                  },
                  t
                )) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block" })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0 },
            whileInView: { scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.05 + 0.2, type: "spring", stiffness: 300 },
            className: "absolute left-1/2 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 md:block",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-full w-full rounded-full border-2 border-accent bg-bg shadow-sm" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { scale: [1, 2, 1], opacity: [0.5, 0, 0.5] },
                  transition: { duration: 2, delay: index * 0.3, repeat: Infinity },
                  className: "absolute inset-0 rounded-full bg-accent/30"
                }
              )
            ]
          }
        )
      ]
    }
  );
}

const CATEGORIES = [
  {
    label: "Languages",
    accent: "text-blue-600",
    tone: "bg-pastel-blue/40",
    tools: [
      { name: "TypeScript", desc: "Typed JavaScript · daily", level: 95, color: "bg-pastel-blue/50 text-blue-700 border-blue-100/80", icon: "/typescript.svg" },
      { name: "Python", desc: "Scripting & automation", level: 80, color: "bg-pastel-yellow/50 text-yellow-700 border-yellow-100/80", icon: "/python.svg" },
      { name: "SQL", desc: "PostgreSQL & MSSQL", level: 75, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/postgresql.svg" }
    ]
  },
  {
    label: "Frameworks",
    accent: "text-purple-600",
    tone: "bg-pastel-purple/40",
    tools: [
      { name: "Next.js", desc: "Full-stack React framework", level: 92, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/nextjs-light.svg" },
      { name: "React", desc: "UI component library", level: 94, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/reactjs.svg" },
      { name: "Flutter", desc: "Cross-platform UI", level: 78, color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/flutter.svg" },
      { name: "Node.js", desc: "JavaScript runtime", level: 85, color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/nodejs.svg" },
      { name: "Tailwind CSS", desc: "Utility-first CSS · v4", level: 96, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/tailwind.svg" }
    ]
  },
  {
    label: "Infra & Data",
    accent: "text-green-700",
    tone: "bg-pastel-green/40",
    tools: [
      { name: "Kubernetes", desc: "Container orchestration", level: 70, color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/kubernetes.svg" },
      { name: "Docker", desc: "Container platform", level: 88, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/docker-engine.svg" },
      { name: "Supabase", desc: "Open-source Firebase alt", level: 90, color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/supabase.svg" },
      { name: "Cloudflare", desc: "CDN & edge network", level: 78, color: "bg-pastel-orange/50 text-orange-600 border-orange-100/80", icon: "/cloudflare.svg" },
      { name: "Tailscale", desc: "Zero-trust mesh VPN", level: 85, color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/tailscale-light.svg" }
    ]
  },
  {
    label: "Tooling",
    accent: "text-accent",
    tone: "bg-pastel-orange/40",
    tools: [
      { name: "GitHub Actions", desc: "CI/CD pipelines", level: 88, color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/github-light.svg" },
      { name: "n8n", desc: "Workflow automation", level: 75, color: "bg-pastel-pink/50 text-pink-600 border-pink-100/80", icon: "/n8n.svg" },
      { name: "Arch Linux", desc: "Rolling-release OS", level: 90, color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/arch-linux.svg" },
      { name: "Hyprland", desc: "Tiling WM · barchy", level: 82, color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/hyprland.svg" }
    ]
  }
];
function ProficiencyRow({ tool }) {
  return /* @__PURE__ */ jsxs("div", { className: "group relative", "data-cursor": "hover", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileHover: { y: -2 },
        transition: { type: "spring", stiffness: 300 },
        className: cn(
          "flex items-center gap-2.5 rounded-xl border bg-white/70 px-3 py-2 backdrop-blur-sm transition-all",
          "border-border/60 hover:border-accent/40 hover:bg-white"
        ),
        children: [
          /* @__PURE__ */ jsx("img", { src: tool.icon, alt: "", className: "h-5 w-5 shrink-0 object-contain" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate text-xs font-bold text-fg", children: tool.name }),
              /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[9px] text-fg-faint", children: tool.level })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 h-0.5 w-full overflow-hidden rounded-full bg-border", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${tool.level}%` },
                viewport: { once: true },
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                className: "h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-fg px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 z-10", children: [
      tool.desc,
      /* @__PURE__ */ jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-fg" })
    ] })
  ] });
}
function MarqueeStrip() {
  const all = CATEGORIES.flatMap((c) => c.tools);
  const doubled = [...all, ...all];
  return /* @__PURE__ */ jsx("div", { className: "group relative mb-10 overflow-hidden marquee-mask", children: /* @__PURE__ */ jsx("div", { className: "flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]", children: doubled.map((tool, i) => /* @__PURE__ */ jsxs(
    "span",
    {
      className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-3.5 py-2 text-xs font-medium text-fg-muted backdrop-blur-sm transition-colors hover:text-fg",
      children: [
        /* @__PURE__ */ jsx("img", { src: tool.icon, alt: "", className: "h-4 w-4 object-contain" }),
        tool.name
      ]
    },
    i
  )) }) });
}
function Marquee() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-32 lg:px-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-0 h-64 w-64 rounded-full bg-pastel-orange/12 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-pastel-purple/12 blur-[80px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { rotate: -8, y: -2 },
                transition: { type: "spring", stiffness: 300 },
                className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-blue/50 text-blue-600 shadow-sm",
                children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
                  /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "The Stack · /tools" })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]",
              children: [
                "I pick the",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "right tool," }),
                " ",
                "not the trendy one."
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-pretty font-light leading-relaxed text-fg-muted", children: "A pragmatic toolkit — measured by what it ships, not what's cool this week." })
      ] }),
      /* @__PURE__ */ jsx(MarqueeStrip, {}),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-border/60 bg-white/60 p-5 backdrop-blur-sm",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: cn("h-2 w-2 rounded-full bg-current", cat.accent) }),
                /* @__PURE__ */ jsx("span", { className: cn("font-[Silkscreen] text-[11px] uppercase tracking-widest", cat.accent), children: cat.label })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-[JetBrains_Mono] text-[9px] text-fg-faint", children: [
                cat.tools.length,
                " tools"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: cat.tools.map((tool) => /* @__PURE__ */ jsx(ProficiencyRow, { tool }, tool.name)) })
          ]
        },
        cat.label
      )) })
    ] })
  ] });
}

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "muhammadshameelks@gmail.com",
    href: "mailto:muhammadshameelks@gmail.com",
    tone: "bg-pastel-blue/50 text-blue-600",
    icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
      /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
    ] })
  },
  {
    label: "GitHub",
    value: "@muhammad-shameel-ks",
    href: "https://github.com/muhammad-shameel-ks",
    tone: "bg-pastel-purple/50 text-purple-600",
    icon: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) })
  },
  {
    label: "LinkedIn",
    value: "muhammad-shameel-k-s",
    href: "https://linkedin.com/in/muhammad-shameel-k-s/",
    tone: "bg-pastel-green/50 text-green-600",
    icon: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
  },
  {
    label: "Location",
    value: "Palakkad, Kerala · IN",
    href: null,
    tone: "bg-pastel-orange/50 text-accent",
    icon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
    ] })
  }
];
function MagneticButton({ children, disabled }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e) => {
    if (disabled) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
  };
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      type: "submit",
      disabled,
      onMouseMove: onMove,
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      style: { x: sx, y: sy },
      whileTap: { scale: disabled ? 1 : 0.98 },
      "data-cursor": "hover",
      className: "group/submit relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent py-5 text-sm font-bold text-white shadow-accent transition-shadow hover:shadow-accent-lg disabled:cursor-not-allowed disabled:opacity-70",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/submit:translate-x-full" }),
        /* @__PURE__ */ jsx("span", { className: "relative", children })
      ]
    }
  );
}
function ContactForm() {
  const [showNote, setShowNote] = useState(true);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      className: "relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-pastel-orange/15 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-pastel-blue/15 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 dot-grid opacity-20" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 lg:col-span-5", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "mb-6 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ jsx("path", { d: "M22 2L11 13" }),
                    /* @__PURE__ */ jsx("path", { d: "M22 2l-7 20-4-9-9-4 20-7z" })
                  ] }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent", children: "Chapter 06 · The Connection" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h2,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.1 },
                className: "mb-5 text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg",
                children: [
                  "Enough about me. ",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "Let's connect." })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.15 },
                className: "mb-8 max-w-md font-light leading-relaxed text-fg-muted md:text-lg",
                children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. My inbox is open and my response time is faster than a pod restart."
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.2 },
                className: "mb-8 space-y-2",
                children: CONTACT_LINKS.map((item) => /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    href: item.href || void 0,
                    target: item.href?.startsWith("http") ? "_blank" : void 0,
                    rel: item.href?.startsWith("http") ? "noreferrer" : void 0,
                    whileHover: { x: 4 },
                    "data-cursor": "hover",
                    className: cn(
                      "group flex items-center gap-4 rounded-xl border p-3.5 transition-all duration-300",
                      item.href ? "cursor-pointer border-border/60 bg-white hover:border-accent/40 hover:shadow-md" : "cursor-default border-border/40 bg-surface"
                    ),
                    children: [
                      /* @__PURE__ */ jsx("div", { className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", item.tone), children: item.icon }),
                      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint", children: item.label }),
                        /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-medium text-fg transition-colors group-hover:text-accent", children: item.value })
                      ] }),
                      item.href && /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-fg-faint", children: [
                        /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                        /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
                      ] })
                    ]
                  },
                  item.label
                ))
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: "/resume.pdf",
                download: "Shameel_Resume.pdf",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.25 },
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                "data-cursor": "hover",
                className: "inline-flex items-center gap-2.5 rounded-xl bg-fg px-5 py-3 text-sm font-bold text-white shadow-lg transition-shadow hover:shadow-xl",
                children: [
                  /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
                    /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
                    /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
                  ] }),
                  "Download Resume"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative lg:col-span-7", children: [
            /* @__PURE__ */ jsx(AnimatePresence, { children: showNote && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 10, rotate: -5 },
                animate: { opacity: 1, y: 0, rotate: -2 },
                exit: { opacity: 0, scale: 0.9, rotate: 0 },
                transition: { delay: 0.5, duration: 0.6 },
                className: "absolute -top-12 right-0 z-20 hidden md:block lg:-right-8 lg:-top-16",
                children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-[180px] -rotate-2 rounded-2xl border-2 border-orange-200 bg-pastel-orange/90 p-3 shadow-lg backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setShowNote(false),
                      "aria-label": "Dismiss note",
                      className: "absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-800 text-[10px] text-white shadow-sm transition-colors hover:bg-orange-900",
                      children: "✕"
                    }
                  ),
                  /* @__PURE__ */ jsxs("p", { className: "font-[Silkscreen] text-[10px] leading-tight text-orange-800", children: [
                    "This form runs on a ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold underline", children: "PocketBase" }),
                    " pod inside ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: "K8s" }),
                    ", humming on a ",
                    /* @__PURE__ */ jsx("span", { className: "italic", children: "Sony VAIO" }),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 left-8 pointer-events-none text-orange-400", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                    /* @__PURE__ */ jsx("path", { d: "M5 5C5 5 15 5 25 15C35 25 35 35 35 35", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeDasharray: "4 4" }),
                    /* @__PURE__ */ jsx("path", { d: "M28 35H35V28", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
                  ] }) })
                ] })
              }
            ) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                className: "grain-card relative z-10 overflow-hidden rounded-3xl border border-border/60 bg-white p-7 shadow-xl shadow-accent/5 md:p-10",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between border-b border-border/40 pb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-accent" }),
                      /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-muted", children: "form · ready" })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: "POST /api/contact" })
                  ] }),
                  /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: status === "success" ? /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      className: "py-16 text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pastel-green/50 text-green-600", children: /* @__PURE__ */ jsx("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
                        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-bold text-fg", children: "Message Received!" }),
                        /* @__PURE__ */ jsx("p", { className: "text-fg-muted", children: "I'll get back to you faster than a pod restart." }),
                        /* @__PURE__ */ jsx("button", { onClick: () => setStatus("idle"), className: "mt-8 text-sm font-bold text-accent underline underline-offset-4", children: "Send another →" })
                      ]
                    },
                    "success"
                  ) : status === "error" ? /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      className: "py-16 text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [
                          /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                          /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                        ] }) }),
                        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-bold text-fg", children: "Submission Failed" }),
                        /* @__PURE__ */ jsx("p", { className: "text-fg-muted", children: "Something went wrong. Please try again later." }),
                        /* @__PURE__ */ jsx("button", { onClick: () => setStatus("idle"), className: "mt-8 text-sm font-bold text-accent underline underline-offset-4", children: "Try again →" })
                      ]
                    },
                    "error"
                  ) : /* @__PURE__ */ jsxs(
                    motion.form,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      onSubmit: handleSubmit,
                      className: "space-y-5",
                      children: [
                        /* @__PURE__ */ jsx(Field, { label: "Name", focused: focused === "name", children: /* @__PURE__ */ jsx(
                          "input",
                          {
                            required: true,
                            type: "text",
                            name: "name",
                            value: formData.name,
                            onChange: handleChange,
                            onFocus: () => setFocused("name"),
                            onBlur: () => setFocused(null),
                            placeholder: "Your name",
                            "data-cursor": "hover",
                            className: "peer w-full rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                          }
                        ) }),
                        /* @__PURE__ */ jsx(Field, { label: "Email", focused: focused === "email", children: /* @__PURE__ */ jsx(
                          "input",
                          {
                            required: true,
                            type: "email",
                            name: "email",
                            value: formData.email,
                            onChange: handleChange,
                            onFocus: () => setFocused("email"),
                            onBlur: () => setFocused(null),
                            placeholder: "your@email.com",
                            "data-cursor": "hover",
                            className: "peer w-full rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                          }
                        ) }),
                        /* @__PURE__ */ jsx(Field, { label: "Message", focused: focused === "message", children: /* @__PURE__ */ jsx(
                          "textarea",
                          {
                            required: true,
                            name: "message",
                            value: formData.message,
                            onChange: handleChange,
                            onFocus: () => setFocused("message"),
                            onBlur: () => setFocused(null),
                            rows: 4,
                            placeholder: "What's on your mind?",
                            "data-cursor": "hover",
                            className: "peer w-full resize-none rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
                          }
                        ) }),
                        /* @__PURE__ */ jsx(MagneticButton, { disabled: status === "submitting", children: status === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" }),
                          "Sending..."
                        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                            /* @__PURE__ */ jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
                            /* @__PURE__ */ jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
                          ] }),
                          "Deploy Message"
                        ] }) }),
                        /* @__PURE__ */ jsxs("p", { className: "text-center font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-accent", children: "↳" }),
                          " rate limited at 5/hr · 0 logs kept"
                        ] })
                      ]
                    },
                    "form"
                  ) })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Field({ label, focused, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: cn(
            "ml-1 font-[Silkscreen] text-[10px] uppercase tracking-widest transition-colors",
            focused ? "text-accent" : "text-fg-faint"
          ),
          children: label
        }
      ),
      focused && /* @__PURE__ */ jsx("span", { className: "mr-1 font-[JetBrains_Mono] text-[9px] text-accent", children: "editing" })
    ] }),
    children
  ] });
}

const SITEMAP = [
  {
    label: "Sections",
    items: [
      { label: "Home", href: "#hero", external: false },
      { label: "Origin", href: "#chapter-01", external: false },
      { label: "Work", href: "#projects", external: false },
      { label: "Now", href: "#now", external: false },
      { label: "Journey", href: "#journey", external: false },
      { label: "Stack", href: "#stack", external: false }
    ]
  },
  {
    label: "Elsewhere",
    items: [
      { label: "GitHub", href: "https://github.com/muhammad-shameel-ks", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/muhammad-shameel-k-s", external: true },
      { label: "Scentence", href: "https://scentenceparfum.com", external: true },
      { label: "Resume.pdf", href: "/resume.pdf", external: true }
    ]
  }
];
const SOCIALS = [
  {
    href: "https://github.com/muhammad-shameel-ks",
    label: "GitHub",
    icon: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) })
  },
  {
    href: "mailto:muhammadshameelks@gmail.com",
    label: "Email",
    icon: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
      /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
    ] })
  },
  {
    href: "https://linkedin.com/in/muhammad-shameel-k-s",
    label: "LinkedIn",
    icon: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
  }
];
function UptimeCounter({ since }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, now - since);
  const d = Math.floor(diff / (1e3 * 60 * 60 * 24));
  const h = Math.floor(diff / (1e3 * 60 * 60) % 24);
  const m = Math.floor(diff / (1e3 * 60) % 60);
  const s = Math.floor(diff / 1e3 % 60);
  return /* @__PURE__ */ jsxs("span", { className: "font-[JetBrains_Mono] tabular-nums", children: [
    d,
    "d ",
    h.toString().padStart(2, "0"),
    ":",
    m.toString().padStart(2, "0"),
    ":",
    s.toString().padStart(2, "0")
  ] });
}
function Footer() {
  const clusterSince = useState(() => Date.now() - 31 * 24 * 60 * 60 * 1e3 - 4 * 60 * 60 * 1e3)[0];
  return /* @__PURE__ */ jsxs("footer", { className: "relative overflow-hidden border-t border-border/60 bg-bg-warm", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative px-6 py-16 md:px-12 md:py-20 lg:px-20", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 dot-grid opacity-30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-balance text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-fg",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-[Fraunces] italic text-accent", children: "Thanks" }),
              " for reading."
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "mt-6 max-w-lg text-lg font-light leading-relaxed text-fg-muted",
            children: "If anything here resonated — a project, a story, or a system you'd like to collaborate on — I'd love to hear from you."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto h-px max-w-6xl bg-border/60" }),
    /* @__PURE__ */ jsx("div", { className: "px-6 py-12 md:px-12 lg:px-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-accent", children: [
            /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-sm font-bold text-white", children: "S" }),
            /* @__PURE__ */ jsx("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-bg-warm bg-green-500" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-fg", children: "Muhammad Shameel KS" }),
            /* @__PURE__ */ jsx("p", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: "@shameel · IN" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-light leading-relaxed text-fg-muted", children: "Full-stack engineer, self-host evangelist, and the guy who runs a K8s cluster on a Sony VAIO." })
      ] }),
      SITEMAP.map((section) => /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint", children: section.label }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-1.5", children: section.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: item.href,
            target: item.external ? "_blank" : void 0,
            rel: item.external ? "noreferrer" : void 0,
            "data-cursor": "hover",
            className: "group inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg",
            children: [
              item.label,
              item.external && /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 14 14", fill: "none", className: "opacity-50 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsx("path", { d: "M1 13L13 1M13 1H5M13 1V9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ]
          }
        ) }, item.label)) })
      ] }, section.label)),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint", children: "Cluster" }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-white/60 p-3 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-fg", children: "online" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-fg-faint", children: "uptime" }),
          /* @__PURE__ */ jsx("div", { className: "text-fg", children: /* @__PURE__ */ jsx(UptimeCounter, { since: clusterSince }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-fg-faint", children: "7/7 pods" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto h-px max-w-6xl bg-border/60" }),
    /* @__PURE__ */ jsx("div", { className: "px-6 py-6 md:px-12 lg:px-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-fg-faint md:text-left", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " shameel · built with Astro on Arch Linux",
        /* @__PURE__ */ jsx("span", { className: "mx-1.5", children: "·" }),
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "no trackers, no cookies" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: SOCIALS.map((s) => /* @__PURE__ */ jsx(
        motion.a,
        {
          whileHover: { scale: 1.1, y: -2 },
          href: s.href,
          target: s.href.startsWith("http") ? "_blank" : void 0,
          rel: s.href.startsWith("http") ? "noreferrer" : void 0,
          "aria-label": s.label,
          "data-cursor": "hover",
          className: "flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white text-fg-muted transition-colors hover:border-accent hover:text-fg",
          children: s.icon
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "font-[JetBrains_Mono] text-[10px] text-fg-faint", children: [
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "$" }),
        ' echo "built with intent"'
      ] })
    ] }) })
  ] });
}

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const commands = useMemo(
    () => [
      {
        id: "home",
        title: "Go home",
        subtitle: "Hero section",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconHome, {}),
        action: () => scrollTo2("hero"),
        shortcut: ["G", "H"],
        keywords: ["top", "start"]
      },
      {
        id: "projects",
        title: "See the work",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconStar, {}),
        action: () => scrollTo2("projects"),
        shortcut: ["G", "P"],
        keywords: ["portfolio", "projects"]
      },
      {
        id: "now",
        title: "Cluster status",
        subtitle: "Live snapshot",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconPulse, {}),
        action: () => scrollTo2("now"),
        keywords: ["live", "k8s", "status"]
      },
      {
        id: "journey",
        title: "My journey",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconClock, {}),
        action: () => scrollTo2("journey"),
        keywords: ["timeline", "story"]
      },
      {
        id: "stack",
        title: "The stack",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconLayers, {}),
        action: () => scrollTo2("stack"),
        keywords: ["tools", "tech"]
      },
      {
        id: "contact",
        title: "Get in touch",
        section: "Navigate",
        icon: /* @__PURE__ */ jsx(IconMail, {}),
        action: () => scrollTo2("contact"),
        shortcut: ["G", "C"],
        keywords: ["email", "message"]
      },
      {
        id: "github",
        title: "Open GitHub",
        subtitle: "@muhammad-shameel-ks",
        section: "Links",
        icon: /* @__PURE__ */ jsx(IconGithub, {}),
        action: () => window.open("https://github.com/muhammad-shameel-ks", "_blank"),
        keywords: ["code", "repo"]
      },
      {
        id: "linkedin",
        title: "Open LinkedIn",
        subtitle: "muhammad-shameel-k-s",
        section: "Links",
        icon: /* @__PURE__ */ jsx(IconLinkedin, {}),
        action: () => window.open("https://linkedin.com/in/muhammad-shameel-k-s", "_blank")
      },
      {
        id: "email",
        title: "Send email",
        subtitle: "muhammadshameelks@gmail.com",
        section: "Links",
        icon: /* @__PURE__ */ jsx(IconMail, {}),
        action: () => window.open("mailto:muhammadshameelks@gmail.com", "_blank")
      },
      {
        id: "resume",
        title: "Download resume",
        section: "Links",
        icon: /* @__PURE__ */ jsx(IconDownload, {}),
        action: () => window.open("/resume.pdf", "_blank")
      },
      {
        id: "theme-toggle",
        title: "Toggle theme",
        subtitle: "Currently light",
        section: "Theme",
        icon: /* @__PURE__ */ jsx(IconSun, {}),
        action: () => {
        }
      }
    ],
    []
  );
  function scrollTo2(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) => c.title.toLowerCase().includes(q) || c.subtitle?.toLowerCase().includes(q) || c.section.toLowerCase().includes(q) || c.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [query, commands]);
  const grouped = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((c) => {
      if (!map.has(c.section)) map.set(c.section, []);
      map.get(c.section).push(c);
    });
    return Array.from(map.entries());
  }, [filtered]);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(filtered.length - 1, a + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(0, a - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[active];
        if (cmd) {
          cmd.action();
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, filtered]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        "data-cursor": "hover",
        className: "fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] text-fg-muted shadow-md backdrop-blur-md transition-colors hover:border-accent/40 hover:text-fg md:flex",
        children: [
          /* @__PURE__ */ jsxs("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: [
            /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "Quick nav" }),
          /* @__PURE__ */ jsx("kbd", { className: "rounded border border-border bg-bg-warm px-1.5 py-0.5 font-mono text-[9px]", children: "⌘K" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm",
          onClick: () => setOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 20, scale: 0.96 },
          transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
          className: "fixed left-1/2 top-[20vh] z-[81] w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-2xl",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-border/60 px-4 py-3", children: [
              /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-fg-faint", children: [
                /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  autoFocus: true,
                  value: query,
                  onChange: (e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  },
                  placeholder: "Search projects, sections, links…",
                  className: "flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-faint"
                }
              ),
              /* @__PURE__ */ jsx("kbd", { className: "rounded border border-border bg-bg-warm px-1.5 py-0.5 font-mono text-[10px] text-fg-muted", children: "esc" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "max-h-[60vh] overflow-y-auto p-2", children: grouped.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center font-mono text-xs text-fg-faint", children: [
              'no results for "',
              query,
              '"'
            ] }) : grouped.map(([section, items]) => /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint", children: section }),
              items.map((cmd) => {
                const idx = filtered.indexOf(cmd);
                const isActive = idx === active;
                return /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onMouseEnter: () => setActive(idx),
                    onClick: () => {
                      cmd.action();
                      setOpen(false);
                    },
                    "data-cursor": "hover",
                    className: cn(
                      "flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors",
                      isActive ? "bg-pastel-orange/40" : "hover:bg-bg-warm"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                            isActive ? "bg-accent text-white" : "bg-bg-warm text-fg-muted"
                          ),
                          children: cmd.icon
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-fg", children: cmd.title }),
                        cmd.subtitle && /* @__PURE__ */ jsx("div", { className: "truncate font-mono text-[10px] text-fg-faint", children: cmd.subtitle })
                      ] }),
                      cmd.shortcut && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5 font-mono text-[10px] text-fg-faint", children: cmd.shortcut.map((k, i) => /* @__PURE__ */ jsx(
                        "kbd",
                        {
                          className: "rounded border border-border bg-bg-warm px-1.5 py-0.5",
                          children: k
                        },
                        i
                      )) })
                    ]
                  },
                  cmd.id
                );
              })
            ] }, section)) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-border/60 bg-bg-warm/40 px-4 py-2 font-mono text-[10px] text-fg-faint", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx("kbd", { className: "rounded border border-border bg-white px-1.5 py-0.5", children: "↑↓" }),
                  "navigate"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx("kbd", { className: "rounded border border-border bg-white px-1.5 py-0.5", children: "↵" }),
                  "select"
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { children: "built by shameel" })
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
const I = (children) => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children });
const IconHome = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
  /* @__PURE__ */ jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
] }));
const IconStar = () => I(/* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
const IconPulse = () => I(/* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }));
const IconClock = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
] }));
const IconLayers = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
  /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
  /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
] }));
const IconMail = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
  /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
] }));
const IconGithub = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) });
const IconLinkedin = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" }),
  /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
  /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
] }));
const IconDownload = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
  /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
] }));
const IconSun = () => I(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
  /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
  /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
] }));

const SCENE = [
  { kind: "cmd", text: "kubectl get pods -A --field-selector=status.phase=Running" },
  { kind: "out", text: "NAMESPACE   NAME                       READY   STATUS    AGE", className: "text-stone-500" },
  { kind: "out", text: "infra       pocketbase-7d9c4-x2k8p     1/1     Running   14d", className: "text-green-400" },
  { kind: "out", text: "infra       pi-hole-6b8f7d-n4q1w       1/1     Running   31d", className: "text-green-400" },
  { kind: "out", text: "apps        scentence-api-59cc8d-7p3v  2/2     Running   9d", className: "text-green-400" },
  { kind: "out", text: "infra       tailscale-subnet-f7a2      1/1     Running   21d", className: "text-green-400" },
  { kind: "blank" },
  { kind: "cmd", text: 'docker ps --format "{{.Names}}	{{.Status}}"' },
  { kind: "out", text: "n8n                  Up 23 days", className: "text-green-400" },
  { kind: "out", text: "watchtower           Up 23 days", className: "text-green-400" },
  { kind: "out", text: "caddy                Up 31 days", className: "text-green-400" },
  { kind: "blank" },
  { kind: "cmd", text: "tailscale status | head -3" },
  { kind: "out", text: "100.84.0.1    shameel-vaio    linux   -   active; direct 1.1.1.1, tx 4.2GB rx 1.8GB" },
  { kind: "blank" },
  { kind: "out", text: "✓ 7/7 pods healthy · cluster uptime 31d · 0 unschedulable", className: "text-amber-300" }
];
function buildTokens() {
  const tokens = [];
  SCENE.forEach((line, li) => {
    if (line.kind === "blank") {
      tokens.push({ line: li, char: "\n" });
      return;
    }
    const prefix = line.kind === "cmd" ? "$ " : "";
    for (const ch of prefix + line.text) tokens.push({ line: li, char: ch });
    tokens.push({ line: li, char: "\n" });
  });
  return tokens;
}
function TerminalWindow() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const [charCount, setCharCount] = useState(0);
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tokens = useRef(buildTokens()).current;
  const totalChars = tokens.length;
  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setCharCount(totalChars);
      return;
    }
    let i = 0;
    const startDelay = setTimeout(() => {
      const tick = () => {
        const step = tokens[i]?.char === "\n" ? 60 : 16;
        setCharCount(++i);
        if (i < totalChars) setTimeout(tick, step + Math.random() * 24);
      };
      tick();
    }, 400);
    return () => clearTimeout(startDelay);
  }, [inView]);
  const renderedLines = [];
  let buffer = "";
  for (let i = 0; i < charCount; i++) {
    const tok = tokens[i];
    if (tok.char === "\n") {
      renderedLines.push({ line: SCENE[tok.line], partial: buffer });
      buffer = "";
    } else {
      buffer += tok.char;
    }
  }
  if (buffer && charCount < totalChars) {
    renderedLines.push({ line: SCENE[tokens[charCount - 1]?.line ?? 0], partial: buffer });
  }
  const finished = charCount >= totalChars;
  const currentLineIndex = tokens[Math.max(0, charCount - 1)]?.line ?? -1;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "overflow-hidden rounded-xl border border-stone-800/60",
      style: {
        background: "var(--color-terminal-bg)",
        boxShadow: "var(--shadow-terminal)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-stone-800/70 px-3 py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500", children: "shameel@vaio: ~/homelab" }),
          /* @__PURE__ */ jsxs("span", { className: "ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-400" }),
            /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[10px] text-green-400", children: "connected" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "terminal-scroll h-[260px] overflow-y-auto px-3 py-3 sm:h-[280px] sm:px-4", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap break-words font-[JetBrains_Mono] text-[11px] leading-[1.7] sm:text-[12px]", style: { color: "var(--color-terminal-fg)" }, children: renderedLines.map((r, i) => {
          const isCmd = r.line.kind === "cmd";
          const showCursor = finished ? i === renderedLines.length - 1 : i === currentLineIndex;
          const text = isCmd ? r.partial.replace(/^\$ /, "") : r.partial;
          return /* @__PURE__ */ jsxs("div", { className: "min-h-[1.7em]", children: [
            isCmd && /* @__PURE__ */ jsx("span", { className: "select-none text-orange-400", children: "$ " }),
            /* @__PURE__ */ jsx("span", { className: r.line.kind === "out" ? r.line.className : void 0, children: text }),
            showCursor && /* @__PURE__ */ jsx("span", { className: "animate-blink ml-px inline-block h-[1em] w-[7px] translate-y-[2px] bg-stone-300 align-middle" }),
            r.partial === "" && !showCursor && " "
          ] }, i);
        }) }) })
      ]
    }
  );
}
function MetricsWindow() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "overflow-hidden rounded-xl border border-stone-800/60",
      style: {
        background: "var(--color-terminal-bg)",
        boxShadow: "var(--shadow-terminal)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-stone-800/70 px-3 py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500", children: "neofetch" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "terminal-scroll h-[260px] overflow-y-auto px-3 py-3 font-[JetBrains_Mono] text-[11px] leading-[1.7] sm:h-[280px] sm:px-4 sm:text-[12px]", style: { color: "var(--color-terminal-fg)" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "shameel@vaio" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-500", children: "--------------" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "OS" }),
            /* @__PURE__ */ jsx("span", { children: "Arch Linux x86_64" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Host" }),
            /* @__PURE__ */ jsx("span", { children: "Sony VAIO SVF15" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Kernel" }),
            /* @__PURE__ */ jsx("span", { children: "6.6.21-2-lts" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Uptime" }),
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "31 days, 4 hrs" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Packages" }),
            /* @__PURE__ */ jsx("span", { children: "1284 (pacman)" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Shell" }),
            /* @__PURE__ */ jsx("span", { children: "zsh 5.9" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "DE" }),
            /* @__PURE__ */ jsx("span", { children: "Hyprland" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "WM" }),
            /* @__PURE__ */ jsx("span", { children: "Hyprland (barchy)" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "CPU" }),
            /* @__PURE__ */ jsx("span", { children: "Intel i7-3537U" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "GPU" }),
            /* @__PURE__ */ jsx("span", { children: "Intel HD 4000" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Memory" }),
            /* @__PURE__ */ jsx("span", { children: "2.3 / 7.7 GiB" }),
            /* @__PURE__ */ jsx("span", { className: "text-stone-400", children: "Disk" }),
            /* @__PURE__ */ jsx("span", { children: "184 / 487 GB" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 border-t border-stone-800 pt-3 text-[10px]", children: [
            /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "1" }),
            /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "2" }),
            /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "3" }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "4" }),
            /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "5" }),
            /* @__PURE__ */ jsx("span", { className: "text-cyan-400", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "6" }),
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "██" }),
            /* @__PURE__ */ jsx("span", { children: "7" })
          ] })
        ] })
      ]
    }
  );
}
function DeployLogWindow() {
  const [lines, setLines] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const log = [
      "[12:04:18] build  starting · main@a3f8c91",
      "[12:04:19] build  installing deps · 248 packages",
      "[12:04:24] build  compiling · tsc --noEmit",
      "[12:04:28] build  ✓ compiled clean",
      "[12:04:29] docker multi-arch build · linux/amd64",
      "[12:04:32] docker ✓ sha256:7f2a · 142 MB",
      "[12:04:33] tailscale up · auth-key rotated",
      "[12:04:34] kubectl apply · namespace: apps",
      "[12:04:35] rollout ✓ deployment.apps/scentence-api",
      "[12:04:36] pod    scentence-api-7c4f-9b2d Running",
      "[12:04:37] health ✓ /api/ping → 200 in 38ms",
      "[12:04:37] done   shipped to prod"
    ];
    let cancelled = false;
    (async () => {
      for (let i = 0; i < log.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 380));
        setLines((prev) => [...prev, log[i]]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [inView]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "overflow-hidden rounded-xl border border-stone-800/60",
      style: {
        background: "var(--color-terminal-bg)",
        boxShadow: "var(--shadow-terminal)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-stone-800/70 px-3 py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500", children: "deploy · main" }),
          /* @__PURE__ */ jsxs("span", { className: "ml-auto inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" }),
            /* @__PURE__ */ jsx("span", { className: "font-[JetBrains_Mono] text-[10px] text-amber-300", children: "live log" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "terminal-scroll h-[260px] overflow-y-auto px-3 py-3 sm:h-[280px] sm:px-4", children: /* @__PURE__ */ jsxs("pre", { className: "whitespace-pre-wrap break-words font-[JetBrains_Mono] text-[10px] leading-[1.7] sm:text-[11px]", style: { color: "var(--color-terminal-fg)" }, children: [
          lines.map((l, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -4 },
              animate: { opacity: 1, x: 0 },
              className: cn(
                l.includes("✓") && "text-green-400",
                l.includes("done") && "text-accent"
              ),
              children: l
            },
            i
          )),
          lines.length > 0 && lines.length < 12 && /* @__PURE__ */ jsx("div", { className: "text-stone-500", children: /* @__PURE__ */ jsx("span", { className: "inline-block h-[0.9em] w-[6px] translate-y-[1px] bg-stone-300 align-middle animate-blink" }) })
        ] }) })
      ]
    }
  );
}
function Workbench() {
  const [tab, setTab] = useState("terminal");
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10% 0px" },
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      className: "relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2 md:gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: cn(tab === "terminal" ? "block" : "hidden md:block", tab === "terminal" && ""), children: [
            /* @__PURE__ */ jsx(TabButton, { active: tab === "terminal", onClick: () => setTab("terminal"), label: "homelab ~ kubectl" }),
            /* @__PURE__ */ jsx(TerminalWindow, {})
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn("md:grid md:gap-4", tab === "metrics" ? "block" : "hidden md:block", tab === "metrics" ? "block" : "hidden md:grid"), children: /* @__PURE__ */ jsxs("div", { className: "md:grid md:gap-4", children: [
            /* @__PURE__ */ jsx(TabButton, { active: tab === "metrics", onClick: () => setTab("metrics"), label: "neofetch" }),
            /* @__PURE__ */ jsx(MetricsWindow, {})
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: cn(tab === "deploy" ? "col-span-2 block" : "hidden md:col-span-2 md:block"), children: [
            /* @__PURE__ */ jsx(TabButton, { active: tab === "deploy", onClick: () => setTab("deploy"), label: "deploy · main" }),
            /* @__PURE__ */ jsx(DeployLogWindow, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-center font-[JetBrains_Mono] text-[11px] text-fg-faint", children: [
          /* @__PURE__ */ jsx("span", { className: "text-accent", children: "live-ish" }),
          " — the real services, simulated for your reading pleasure"
        ] })
      ]
    }
  );
}
function TabButton({ active, onClick, label }) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      className: cn(
        "mb-2 inline-flex items-center gap-2 rounded-md px-2.5 py-1 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider transition-colors md:hidden",
        active ? "bg-accent/10 text-accent" : "text-fg-faint"
      ),
      children: [
        /* @__PURE__ */ jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", active ? "bg-accent" : "bg-fg-faint") }),
        label
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shameel — Full-Stack Engineer · DevOps in Progress" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Preloader", Preloader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Preloader", "client:component-export": "default" })}  ${renderComponent($$result2, "CustomCursor", CustomCursor, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/CustomCursor", "client:component-export": "default" })}  ${renderComponent($$result2, "FloatingShapes", FloatingShapes, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/FloatingShapes", "client:component-export": "default" })}  ${renderComponent($$result2, "TopProgress", TopProgress, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TopProgress", "client:component-export": "default" })}  ${renderComponent($$result2, "ChapterHeader", ChapterHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ChapterHeader", "client:component-export": "default" })}  ${renderComponent($$result2, "PersistentNav", PersistentNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/PersistentNav", "client:component-export": "default" })}  ${renderComponent($$result2, "CommandPalette", CommandPalette, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/CommandPalette", "client:component-export": "default" })} ${maybeRenderHead()}<div class="relative z-10"> <!-- Hero --> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Hero", "client:component-export": "default" })} <!-- Stats ticker --> ${renderComponent($$result2, "StatsStrip", StatsStrip, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StatsStrip", "client:component-export": "default" })} <!-- Chapter 01 — Origin story --> <section id="chapter-01"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "rocket", "chapter": "Chapter 01", "eyebrow": "The Origin", "heading": "I didn't start with a CS degree.", "headingAccent": "I started with curiosity and a broken laptop.", "body": "Most people discover programming through a structured curriculum. I discovered it by trying to make my computer do things it wasn't supposed to. That broken laptop eventually ran Arch Linux, then a tiling window manager, then a custom framework I built called Barchy. Somewhere along the way, I realized — if I can bend an OS to my will, I can probably build software too.", "aside": "<strong>Fun fact:</strong> I daily drive Arch Linux with a custom Hyprland setup. I built <span class='text-accent font-bold'>Barchy Reborn</span> — a leaner adaptation of <span class='text-accent font-bold'>Omarchy</span> (the famous DHH setup). Yes, I use Arch. No, I won't stop mentioning it.", "stats": [
    { value: "7+", label: "Years tinkering" },
    { value: "∞", label: "Broken laptops" },
    { value: "1", label: "OS preference" }
  ], "ascii": `  ┌─[shameel@vaio]─[~]
  │ $ uname -a
  │ Linux vaio 6.6.21-2-lts #1 SMP
  │
  └─$ █`, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> ${renderComponent($$result2, "TextReveal", TextReveal, { "client:visible": true, "eyebrow": "On the record", "text": "I believe the best software is built by people who are annoyed enough by a problem to solve it themselves — and stubborn enough to ship it.", "highlightWords": ["annoyed", "stubborn", "ship"], "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TextReveal", "client:component-export": "default" })} <!-- Chapter 02 — Philosophy --> <section id="chapter-02"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "warm": true, "icon": "compass", "chapter": "Chapter 02", "eyebrow": "The Philosophy", "heading": "No bloat. No fluff.", "headingAccent": "Just things that work.", "body": "I don't build software to impress other engineers. I build it to make someone's Tuesday afternoon slightly less painful. Whether that's a retail manager tracking inventory across 5 branches, or a college superintendent generating exam seating for 2000 students — if the tool saves them time and headache, I've done my job.", "aside": "My operating philosophy is borrowed from my Linux setup: if it doesn't serve a purpose, it doesn't belong. Every <span class='text-accent font-bold'>function</span>, every <span class='text-accent font-bold'>component</span>, every line of YAML.", "stats": [
    { value: "500+", label: "Users served" },
    { value: "0", label: "Unused features" },
    { value: "~50%", label: "Time saved (avg)" }
  ], "reverse": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- Chapter 03 — SysAdmin / DevOps — followed by the Workbench --> <section id="chapter-03" class="contents"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "terminal", "chapter": "Chapter 03", "eyebrow": "DevOps in Progress", "heading": "I'm not where I want to be.", "headingAccent": "But I'm building toward it.", "body": "Most devs deploy to Vercel and forget about it. I chose the harder path — a self-hosted Kubernetes cluster on a Sony VAIO, sitting on my desk. Pi-hole for DNS. PocketBase for backends. Tailscale for zero-trust access. GitHub Actions that build containers and deploy through encrypted tunnels. No cloud dashboard. No vendor lock-in. Just me, Arch Linux, and a lot of YAML.", "aside": "The cluster crashed at 2 AM last week. I learned more from that incident than any tutorial could teach. That's the point — <span class='text-accent font-bold'>I'm building in public</span>, failing forward, and documenting the journey.", "stats": [
    { value: "7", label: "Self-hosted services" },
    { value: "31d", label: "Cluster uptime" },
    { value: "2 AM", label: "Most interesting bugs" }
  ], "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- Workbench (live homelab terminals) --> <section class="relative -mt-12 mb-24 md:-mt-16 md:mb-32"> ${renderComponent($$result2, "Workbench", Workbench, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Terminal", "client:component-export": "default" })} </section> ${renderComponent($$result2, "TextReveal", TextReveal, { "client:visible": true, "eyebrow": "On the record", "text": "I run a Kubernetes cluster on a Sony VAIO in my bedroom. It handles CI/CD, DNS blocking, and my occasional 2 AM troubleshooting sessions — all part of the learning.", "highlightWords": ["Kubernetes", "VAIO", "learning"], "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TextReveal", "client:component-export": "default" })} <!-- Projects — the proof --> <section id="projects"> ${renderComponent($$result2, "ProjectList", ProjectList, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ProjectList", "client:component-export": "default" })} </section> <!-- Now / Cluster status --> <section id="now"> ${renderComponent($$result2, "NowStatus", NowStatus, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/NowStatus", "client:component-export": "default" })} </section> <!-- Infra pipeline --> <section id="infra"> ${renderComponent($$result2, "InfraFlow", InfraFlow, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/InfraFlow", "client:component-export": "default" })} </section> <!-- Chapter 04 — AI workflow --> <section id="chapter-04"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "warm": true, "icon": "brain", "chapter": "Chapter 04", "eyebrow": "The Multiplier", "heading": "AI doesn't replace me.", "headingAccent": "It makes me dangerous.", "body": "I use AI as a force multiplier, not a crutch. Claude for architectural decisions and code review. GitHub Copilot for boilerplate I'd rather not type. n8n workflows that automate the boring parts of development and operations. The result: I ship at the speed of a small team while maintaining the quality standards of someone who actually reads their own diffs.", "aside": "This entire portfolio was built in a single <span class='text-accent font-bold'>AI-augmented session</span>. The design system, the animations, the storytelling — all coordinated between human taste and machine throughput.", "stats": [
    { value: "3x", label: "Ship velocity" },
    { value: "0", label: "Bugs ignored" },
    { value: "100%", label: "Diffs reviewed" }
  ], "reverse": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- Journey timeline --> <section id="journey"> ${renderComponent($$result2, "Journey", Journey, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Journey", "client:component-export": "default" })} </section> <!-- The Stack --> <section id="stack"> ${renderComponent($$result2, "Marquee", Marquee, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Marquee", "client:component-export": "default" })} </section> <!-- Chapter 06 — The Connection --> <section id="contact"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ContactForm", "client:component-export": "default" })} </section> <!-- Footer --> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Footer", "client:component-export": "default" })} </div> ` })}`;
}, "/home/mallubeast/Dev/applications/web/protfolio/src/pages/index.astro", void 0);

const $$file = "/home/mallubeast/Dev/applications/web/protfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
