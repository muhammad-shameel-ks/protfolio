import { c as createComponent } from './astro-component_Cn93QYdn.mjs';
import 'piccolore';
import { r as renderTemplate, n as renderSlot, o as renderHead, h as addAttribute, p as renderComponent, m as maybeRenderHead } from './entrypoint_BeIvfnH9.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Muhammad Shameel KS — Full-Stack Engineer, DevOps & System Administrator from Kerala. Building production systems, automating everything, and using AI to stay three steps ahead."
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><!-- Fonts preload for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet"><title>', '</title><!-- JSON-LD Structured Data for SEO --><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "Person",\n				"name": "Muhammad Shameel KS",\n				"jobTitle": "Full-Stack Engineer",\n				"url": "https://shameel.barchy.online",\n				"image": "https://shameel.barchy.online/favicon.svg",\n				"address": {\n					"@type": "PostalAddress",\n					"addressLocality": "Palakkad",\n					"addressRegion": "Kerala",\n					"addressCountry": "IN"\n				},\n				"sameAs": [\n					"https://github.com/muhammad-shameel-ks",\n					"https://linkedin.com/in/muhammad-shameel-k-s"\n				],\n				"knowsAbout": [\n					"React",\n					"TypeScript",\n					"Kubernetes",\n					"Linux",\n					"DevOps",\n					"AI"\n				],\n				"contactPoint": {\n					"@type": "ContactPoint",\n					"contactType": "customer service",\n					"url": "https://shameel.barchy.online#contact"\n				}\n			}\n		<\/script>', '</head> <body class="bg-bg text-fg relative"> ', " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/mallubeast/Dev/applications/web/protfolio/src/layouts/Layout.astro", void 0);

let isMuted = true;
function getMuteState() {
  if (typeof window === "undefined") return true;
  return isMuted;
}
function setMuteState(muted) {
  isMuted = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("shameel-portfolio-muted", muted ? "true" : "false");
  }
}
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("shameel-portfolio-muted");
  if (stored !== null) {
    isMuted = stored === "true";
  }
}
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}
function playClickSound() {
  if (isMuted || typeof window === "undefined") return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {
    console.warn("Failed to play click sound:", e);
  }
}
function playKeySound() {
  if (isMuted || typeof window === "undefined") return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(350 + Math.random() * 100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.04);
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + 0.04);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.warn("Failed to play key sound:", e);
  }
}
function playSuccessSound() {
  if (isMuted || typeof window === "undefined") return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const playTone = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, start);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.2, start + duration);
      gainNode.gain.setValueAtTime(0.02, start);
      gainNode.gain.exponentialRampToValueAtTime(1e-4, start + duration);
      osc.start(start);
      osc.stop(start + duration);
    };
    playTone(523.25, now, 0.08);
    playTone(659.25, now + 0.06, 0.12);
  } catch (e) {
    console.warn("Failed to play success sound:", e);
  }
}

const SUGGESTIONS = ["neofetch", "k8s-status", "projects", "help"];
function Hero() {
  const terminalBodyRef = useRef(null);
  const [terminalInput, setTerminalInput] = useState("");
  const [history, setHistory] = useState([
    {
      cmd: "",
      result: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-accent font-bold", children: "Welcome to Shameel's Arch Linux Homelab Node!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-fg-muted", children: [
          "Type ",
          /* @__PURE__ */ jsx("span", { className: "text-fg font-semibold font-mono", children: "help" }),
          " to list commands or click a quick action below."
        ] })
      ] })
    }
  ]);
  const [isMuted, setIsMuted] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [restartingPod, setRestartingPod] = useState(null);
  const [restartLogs, setRestartLogs] = useState([]);
  useEffect(() => {
    setIsMuted(getMuteState());
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, restartLogs]);
  const toggleMute = () => {
    const newState = !isMuted;
    setMuteState(newState);
    setIsMuted(newState);
    playSuccessSound();
  };
  const toggleTheme = () => {
    playClickSound();
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };
  const startPodRestart = (podName) => {
    if (restartingPod) return;
    playClickSound();
    setRestartingPod(podName);
    setRestartLogs([`Initiating hot restart for ${podName}...`]);
    setTimeout(() => {
      setRestartLogs((prev) => [...prev, `[WARNING] Terminating container pod/sigterm...`]);
      playKeySound();
    }, 500);
    setTimeout(() => {
      setRestartLogs((prev) => [...prev, `[INFO] De-scheduling pod node resources...`]);
      playKeySound();
    }, 1200);
    setTimeout(() => {
      setRestartLogs((prev) => [...prev, `[INFO] Re-pulling image pocketbase:latest...`]);
      playKeySound();
    }, 2e3);
    setTimeout(() => {
      setRestartLogs((prev) => [...prev, `[INFO] Container init: mounting volume /data/messages...`]);
      playKeySound();
    }, 2800);
    setTimeout(() => {
      setRestartLogs((prev) => [...prev, `[SUCCESS] Pod ${podName} successfully running! uptime: 0s`]);
      playSuccessSound();
      setHistory((prev) => [
        ...prev,
        {
          cmd: `kubectl rollout restart pod/${podName}`,
          result: /* @__PURE__ */ jsxs("span", { className: "text-green-500 font-bold", children: [
            "✓ Successfully rolled out container pod/$",
            podName
          ] })
        }
      ]);
      setRestartingPod(null);
      setRestartLogs([]);
    }, 3600);
  };
  const runCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;
    let output = null;
    switch (cleanCmd) {
      case "help":
        output = /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-[11px] leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "neofetch" }),
            " - Show system information"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "k8s-status" }),
            " - Show Kubernetes cluster pods"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "projects" }),
            " - List portfolio work pieces"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "skills" }),
            " - Display engineering toolkit"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "contact" }),
            " - Show communication channels"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "clear" }),
            " - Clear terminal session output"
          ] })
        ] });
        break;
      case "clear":
        setHistory([]);
        setTerminalInput("");
        return;
      case "neofetch":
        output = /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 font-mono text-[11px] leading-relaxed", children: [
          /* @__PURE__ */ jsx("div", { className: "text-accent font-bold select-none whitespace-pre leading-none", children: `    /\\
   /  \\
  /\\   \\
 /      \\
/   ,,   \\
/   |  |   \\
/___.'  '.___\\` }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-accent font-bold", children: "shameel@sony-vaio" }),
            /* @__PURE__ */ jsx("p", { className: "text-fg-faint", children: "------------------" }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "OS:" }),
              " Arch Linux x86_64"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Kernel:" }),
              " Linux 6.13.0-homelab"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Window Manager:" }),
              " Hyprland (Wayland)"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Uptime:" }),
              " 45 days, 12 hours"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Shell:" }),
              " bash 5.2.26"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "CPU:" }),
              " Sony VAIO Node (Intel Core i5)"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Memory:" }),
              " 24MB / 16GB (DevOps footprint)"
            ] })
          ] })
        ] });
        break;
      case "k8s-status":
        output = /* @__PURE__ */ jsxs("div", { className: "space-y-3 font-mono text-[11px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border/40 rounded-lg p-2 bg-[#121110]/30", children: [
            /* @__PURE__ */ jsx("p", { className: "text-fg-muted font-bold mb-1", children: "NODE: sony-vaio-desktop (READY, 45d uptime)" }),
            /* @__PURE__ */ jsx("p", { className: "text-fg-faint text-[10px]", children: "CPU: 4.8% | RAM: 2.1GB/16GB | TEMP: 48°C" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-[10px] text-fg-faint border-b border-border/20 pb-0.5 mb-1 font-bold", children: [
              /* @__PURE__ */ jsx("span", { children: "POD NAME" }),
              /* @__PURE__ */ jsx("span", { children: "STATUS" }),
              /* @__PURE__ */ jsx("span", { children: "RESTARTS" }),
              /* @__PURE__ */ jsx("span", { children: "ACTION" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-0.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-fg", children: "pod/pocketbase-db-7d4bc8f9b2" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-500 font-bold", children: "Running" }),
              /* @__PURE__ */ jsx("span", { className: "text-center w-12", children: "0" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => startPodRestart("pocketbase-db"),
                  className: "px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors",
                  children: "Restart"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-0.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-fg", children: "pod/portfolio-web-54b9d8fc6c" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-500 font-bold", children: "Running" }),
              /* @__PURE__ */ jsx("span", { className: "text-center w-12", children: "1" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => startPodRestart("portfolio-web"),
                  className: "px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors",
                  children: "Restart"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-0.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-fg", children: "pod/n8n-automation-89cdd5c88" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-500 font-bold", children: "Running" }),
              /* @__PURE__ */ jsx("span", { className: "text-center w-12", children: "0" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => startPodRestart("n8n-automation"),
                  className: "px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors",
                  children: "Restart"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-0.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-fg", children: "pod/pihole-dns-749c89dc9d" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-500 font-bold", children: "Running" }),
              /* @__PURE__ */ jsx("span", { className: "text-center w-12", children: "0" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => startPodRestart("pihole-dns"),
                  className: "px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors",
                  children: "Restart"
                }
              )
            ] })
          ] })
        ] });
        break;
      case "projects":
        output = /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-[11px]", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-accent", children: "Active Projects:" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "1. ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "Scentance" }),
            " - Premium Fragrance E-commerce (scentenceparfum.com)"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "2. ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "Stock Salt" }),
            " - Real-time POS Inventory SaaS (Next.js + Postgres)"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "3. ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "Office Pal" }),
            " - College Admin Seating Automation (Flutter + Supabase)"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "4. ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "KSDC Helper" }),
            " - Automated SQL Command Generator for Staff (React)"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "5. ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "n8n Tunnels" }),
            " - Zero-Config dev webhooks Docker tool (Python)"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-fg-faint mt-1", children: "Scroll down to the WORK section to view visual highlights." })
        ] });
        break;
      case "skills":
        output = /* @__PURE__ */ jsxs("div", { className: "space-y-1 font-mono text-[11px]", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "Frontend:" }),
            " React, Next.js, TS, Flutter, Tailwind CSS"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "Backend & DB:" }),
            " PocketBase, PostgreSQL, Node.js, Supabase, MSSQL"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "DevOps & OS:" }),
            " Kubernetes, Docker, Tailscale, Cloudflare, Arch Linux"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent font-bold", children: "Automation:" }),
            " Python, GitHub Actions, n8n webhook pipelines"
          ] })
        ] });
        break;
      case "contact":
        output = /* @__PURE__ */ jsxs("div", { className: "space-y-1 font-mono text-[11px]", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Email:" }),
            " muhammadshameelks@gmail.com"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "Phone:" }),
            " +91 9605796725"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "LinkedIn:" }),
            " linkedin.com/in/muhammad-shameel-k-s"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-bold", children: "GitHub:" }),
            " github.com/muhammad-shameel-ks"
          ] })
        ] });
        break;
      default:
        output = /* @__PURE__ */ jsxs("span", { className: "text-red-500 font-mono text-[11px]", children: [
          "command not found: ",
          cmdText,
          ". Type 'help' for options."
        ] });
        break;
    }
    setHistory((prev) => [...prev, { cmd: cmdText, result: output }]);
    setTerminalInput("");
    playSuccessSound();
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    runCommand(terminalInput);
  };
  const handleInputKeyDown = () => {
    playKeySound();
  };
  const handleSuggestionClick = (cmd) => {
    playClickSound();
    runCommand(cmd);
  };
  const waveHand = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: { duration: 2.5, ease: "easeInOut", delay: 1.2 }
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      id: "hero",
      className: "relative min-h-[100svh] flex items-center px-6 md:px-12 lg:px-20 py-28 lg:py-0 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[10vh] right-[10vw] w-[450px] h-[450px] rounded-full bg-pastel-orange/20 dark:bg-[#331610]/40 blur-[130px] pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-[10vh] left-[5vw] w-[350px] h-[350px] rounded-full bg-pastel-blue/15 dark:bg-[#14222E]/25 blur-[120px] pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 z-20", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "flex items-center gap-2.5",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold font-[Silkscreen]", children: "S" }) }),
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-xs font-bold tracking-wider text-fg hidden sm:inline", children: "SHAMEEL.NODE" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2, duration: 0.8 },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: toggleMute,
                    className: "w-10 h-10 rounded-xl bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center hover:scale-105 transition-transform text-fg cursor-pointer shadow-sm",
                    "aria-label": isMuted ? "Unmute sounds" : "Mute sounds",
                    children: isMuted ? /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" }) }) : /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: toggleTheme,
                    className: "w-10 h-10 rounded-xl bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center hover:scale-105 transition-transform text-fg cursor-pointer shadow-sm",
                    "aria-label": "Toggle theme",
                    children: isDark ? /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
                      /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                      /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                      /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                      /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                      /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                      /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                      /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                      /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
                    ] }) : /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://github.com/muhammad-shameel-ks",
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: playClickSound,
                    className: "flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-fg text-white dark:bg-white dark:text-bg text-xs font-bold hover:scale-105 transition-transform shadow-sm cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) }),
                      "GitHub"
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center text-left", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-pastel-green/50 dark:bg-[#142E1F] border border-green-200/40 dark:border-green-900/30 w-max",
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-green-800 dark:text-green-400", children: "Node active & open to offers" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1, duration: 0.8 },
                className: "text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-fg mb-4",
                children: [
                  "I build systems ",
                  /* @__PURE__ */ jsx("br", {}),
                  "& host them",
                  " ",
                  /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-accent", children: "myself." }),
                    /* @__PURE__ */ jsx(
                      motion.svg,
                      {
                        initial: { pathLength: 0, opacity: 0 },
                        animate: { pathLength: 1, opacity: 1 },
                        transition: { delay: 1.2, duration: 0.8 },
                        className: "absolute -bottom-1.5 left-0 w-full",
                        viewBox: "0 0 200 12",
                        fill: "none",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M2 8C30 2 60 4 100 6C140 8 170 3 198 7",
                            stroke: "var(--color-accent)",
                            strokeWidth: "3.5",
                            strokeLinecap: "round"
                          }
                        )
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      variants: waveHand,
                      animate: "animate",
                      className: "inline-block ml-3 origin-[70%_70%]",
                      children: "👋"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.8 },
                className: "text-base md:text-lg text-fg-muted font-light leading-relaxed max-w-lg mb-8",
                children: [
                  "Hi, I'm ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "Muhammad Shameel KS" }),
                  ". A developer running a Kubernetes cluster on a desk Sony VAIO laptop. Deploying backends, routing VPN paths, and automating the web."
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.3, duration: 0.8 },
                className: "mb-8",
                children: /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-sm md:text-base text-accent tracking-wider uppercase", children: "Linux // Kubernetes // CI/CD // HomeLab // PocketBase" })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.8 },
                className: "flex flex-wrap gap-4",
                children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#contact",
                      onClick: playClickSound,
                      className: "px-6 py-3.5 bg-accent text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-accent/15 hover:bg-accent-dark hover:scale-[1.02] transition-all cursor-pointer",
                      children: "Reach Out"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#projects",
                      onClick: playClickSound,
                      className: "px-6 py-3.5 bg-surface dark:bg-[#1C1A18] border border-border dark:border-border-dark text-fg font-bold text-sm rounded-xl hover:scale-[1.02] transition-transform cursor-pointer",
                      children: "Check Work"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] },
              className: "lg:col-span-6 w-full relative",
              children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-2xl bg-[#090908] border border-[#1d1c1a] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0] relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1d1c1a] select-none", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => {
                          playClickSound();
                          setHistory([]);
                        },
                        className: "w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-75 cursor-pointer",
                        title: "Clear Output"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
                    /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] text-fg-faint", children: "shameel@sony-vaio: ~" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[9px] text-fg-faint", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }),
                    /* @__PURE__ */ jsx("span", { children: "ONLINE" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    ref: terminalBodyRef,
                    className: "p-5 h-[270px] overflow-y-auto space-y-4 select-text scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
                    children: [
                      history.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        item.cmd !== "" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-accent font-bold select-none", children: "❯" }),
                          /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: item.cmd })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "pl-4 font-light text-[#bfb9ab]", children: item.result })
                      ] }, index)),
                      restartingPod && /* @__PURE__ */ jsxs("div", { className: "space-y-1 pl-4 text-accent border-l-2 border-accent/40 bg-accent/5 p-2 rounded", children: [
                        restartLogs.map((logLine, idx) => /* @__PURE__ */ jsx("p", { className: "font-mono text-[10px]", children: logLine }, idx)),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1 text-[10px]", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-3.5 h-3.5 border border-accent border-t-transparent rounded-full animate-spin" }),
                          /* @__PURE__ */ jsx("span", { children: "Processing container rollout..." })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 bg-[#0c0c0b] border-t border-[#1d1c1a] flex flex-wrap items-center gap-2 select-none", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] font-[Silkscreen] text-fg-faint uppercase mr-1", children: "Quick run:" }),
                  SUGGESTIONS.map((cmd) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      disabled: !!restartingPod,
                      onClick: () => handleSuggestionClick(cmd),
                      className: "px-2.5 py-1 rounded bg-[#171615] border border-[#2b2926] hover:border-accent hover:text-white hover:bg-accent/15 text-[10px] text-fg-muted font-bold font-mono transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                      children: cmd
                    },
                    cmd
                  ))
                ] }),
                /* @__PURE__ */ jsxs(
                  "form",
                  {
                    onSubmit: handleInputSubmit,
                    className: "px-4 py-3 bg-[#11100f] border-t border-[#1d1c1a] flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-accent font-bold select-none", children: "❯" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          disabled: !!restartingPod,
                          value: terminalInput,
                          onChange: (e) => setTerminalInput(e.target.value),
                          onKeyDown: handleInputKeyDown,
                          placeholder: restartingPod ? "System locked during pod deployment..." : "type 'help', 'neofetch'...",
                          className: "flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder:text-fg-faint disabled:opacity-50"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "submit",
                          disabled: !!restartingPod,
                          className: "text-[10px] font-mono text-fg-faint hover:text-accent font-bold cursor-pointer",
                          children: "[ENTER]"
                        }
                      )
                    ]
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.5, duration: 1 },
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 hidden md:flex pointer-events-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[12px] text-fg-faint font-[Silkscreen] tracking-widest uppercase", children: "SCROLL ENGINE" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 6, 0] },
                  transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                  className: "w-5 h-8.5 rounded-full border-2 border-border dark:border-border-dark flex items-start justify-center p-1",
                  children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      animate: { y: [0, 8, 0] },
                      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                      className: "w-1.5 h-1.5 rounded-full bg-accent"
                    }
                  )
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "fixed inset-0 pointer-events-none overflow-hidden z-0", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute -top-32 -right-48 w-[550px] h-[550px] rounded-full bg-pastel-orange/25 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y2 },
        className: "absolute top-[70vh] -left-48 w-[400px] h-[400px] rounded-full bg-pastel-blue/20 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute top-[160vh] -right-32 w-[350px] h-[350px] rounded-full bg-pastel-purple/18 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y2 },
        className: "absolute top-[250vh] -left-40 w-[300px] h-[300px] rounded-full bg-pastel-green/15 blur-[120px]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute top-[12vh] right-[8vw] w-10 h-10 rounded-full border-2 border-accent/10 animate-float hidden md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute top-[50vh] left-[6vw] w-6 h-6 rounded-md bg-pastel-blue/30 animate-float-slow rotate-12 hidden md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y1 },
        className: "absolute top-[130vh] left-[10vw] animate-spin-slow hidden md:block",
        children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", className: "text-accent/12", children: /* @__PURE__ */ jsx("path", { d: "M12 2V22M2 12H22", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y3 },
        className: "absolute top-[200vh] right-[6vw] w-5 h-5 rounded-full bg-pastel-pink/25 animate-float hidden md:block"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { y: y2 },
        className: "absolute top-[280vh] left-[4vw] w-14 h-14 rounded-full border border-dashed border-accent/10 animate-spin-slow hidden md:block"
      }
    )
  ] });
}

function TopProgress() {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.hasAttribute("data-modal-open"));
    };
    checkModal();
    const interval = setInterval(checkModal, 100);
    return () => clearInterval(interval);
  }, []);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed top-0 left-0 right-0 z-50 h-1 bg-border/30 transition-opacity duration-200",
      style: { opacity: isModalOpen ? 0 : 1, pointerEvents: isModalOpen ? "none" : "auto" },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { width },
          className: "h-full bg-accent",
          transition: { ease: "linear", duration: 0.1 }
        }
      )
    }
  );
}

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "chapter-01", label: "Story" },
  { id: "chapter-02", label: "Ethos" },
  { id: "chapter-03", label: "Admin" },
  { id: "projects", label: "Work" },
  { id: "chapter-04", label: "AI" },
  { id: "chapter-05", label: "Tools" },
  { id: "contact", label: "Reach" }
];
function PersistentNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const dockOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const dockY = useTransform(scrollY, [200, 400], [20, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.hasAttribute("data-modal-open"));
    };
    checkModal();
    const interval = setInterval(checkModal, 50);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const observerCallback = (entries) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        setActiveSection(intersecting[intersecting.length - 1].target.id);
      }
    };
    const observerOptions = {
      rootMargin: "-30% 0% -50% 0%",
      threshold: 0
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      "aria-label": "Table of contents",
      style: {
        opacity: isModalOpen ? 0 : dockOpacity,
        y: isModalOpen ? 20 : dockY,
        pointerEvents: isModalOpen ? "none" : "auto"
      },
      className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-200",
      children: /* @__PURE__ */ jsx("ul", { className: "bg-white/90 backdrop-blur-md border border-border px-2 py-1.5 md:px-3 md:py-2 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-0.5 md:gap-1.5 pointer-events-auto list-none", children: NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollTo(item.id),
            "aria-current": isActive ? "true" : void 0,
            className: `
                  relative px-1.5 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-xl transition-all duration-300 group
                  ${isActive ? "text-accent" : "text-fg-muted hover:text-fg hover:bg-pastel-orange/30"}
                  focus-visible:ring-2 focus-visible:ring-accent outline-none
                `,
            children: [
              /* @__PURE__ */ jsx("span", { className: `font-[Silkscreen] text-[8px] md:text-[11px] tracking-tight uppercase relative z-10 font-bold`, children: item.label }),
              isActive && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "active-pill",
                  className: "absolute inset-0 bg-pastel-orange/40 rounded-md md:rounded-xl z-0",
                  transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                }
              ),
              !isActive && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none pb-1.5 md:pb-2 hidden md:block", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-fg text-white text-[9px] md:text-[10px] font-mono px-2 py-1 rounded-md whitespace-nowrap", children: item.label }),
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-fg rotate-45 mx-auto -mt-1" })
              ] })
            ]
          }
        ) }, item.id);
      }) })
    }
  );
}

const CHAPTERS = [
  { id: "chapter-01", number: "01", label: "The Origin" },
  { id: "chapter-02", number: "02", label: "The Philosophy" },
  { id: "chapter-03", number: "03", label: "The Sysadmin" },
  { id: "projects", number: "WORK", label: "The Work" },
  { id: "chapter-04", number: "04", label: "The Multiplier" },
  { id: "chapter-05", number: "05", label: "The Toolkit" },
  { id: "contact", number: "06", label: "The Connection" }
];
function ChapterHeader() {
  const [visibleChapter, setVisibleChapter] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [-10, 0]);
  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.hasAttribute("data-modal-open"));
    };
    checkModal();
    const interval = setInterval(checkModal, 50);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const observerCallback = (entries) => {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length > 0) {
        const topEntry = intersecting[0];
        const chapter = CHAPTERS.find((c) => c.id === topEntry.target.id);
        if (chapter) {
          setVisibleChapter(chapter);
        }
      }
    };
    const observerOptions = {
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const checkVisible = () => {
      const heroHeight = window.innerHeight * 0.7;
      setIsVisible(window.scrollY > heroHeight);
    };
    checkVisible();
    window.addEventListener("scroll", checkVisible);
    return () => window.removeEventListener("scroll", checkVisible);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: visibleChapter && isVisible && /* @__PURE__ */ jsx(
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
      className: "fixed top-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-sm border-b border-border/50 transition-opacity duration-200",
      children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-xs text-accent tracking-widest", children: visibleChapter.number }),
        /* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-border" }),
        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-xs text-fg-muted tracking-wider uppercase", children: visibleChapter.label })
      ] }) })
    }
  ) });
}

const icons = {
  rocket: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" }),
    /* @__PURE__ */ jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
    /* @__PURE__ */ jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
  ] }),
  compass: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })
  ] }),
  wrench: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" }) }),
  lightbulb: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M9 18h6" }),
    /* @__PURE__ */ jsx("path", { d: "M10 22h4" }),
    /* @__PURE__ */ jsx("path", { d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" })
  ] }),
  cpu: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
  brain: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3 3 3 0 000 6 3 3 0 003 3v1a4 4 0 008 0v-1a3 3 0 003-3 3 3 0 000-6 3 3 0 00-3-3V6a4 4 0 00-4-4z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2v20" })
  ] })
};
const pastelBgs = {
  rocket: "bg-pastel-orange/50",
  compass: "bg-pastel-blue/50",
  wrench: "bg-pastel-purple/50",
  lightbulb: "bg-pastel-yellow/50",
  cpu: "bg-pastel-green/50",
  brain: "bg-pastel-pink/50"
};
const pastelTextColors = {
  rocket: "text-accent",
  compass: "text-blue-500",
  wrench: "text-purple-500",
  lightbulb: "text-yellow-600",
  cpu: "text-green-600",
  brain: "text-pink-500"
};
function StoryBlock({ eyebrow, heading, body, aside, warm, icon = "rocket", children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      ref,
      style: { opacity, y },
      className: `py-20 md:py-32 px-6 md:px-12 lg:px-20 relative ${warm ? "bg-surface-warm" : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              whileHover: { rotate: 10, scale: 1.08 },
              className: `w-10 h-10 rounded-xl ${pastelBgs[icon]} flex items-center justify-center ${pastelTextColors[icon]} shrink-0`,
              children: icons[icon]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase", children: eyebrow })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.12] tracking-tight mb-8 max-w-3xl", children: heading }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8 md:gap-12", children: [
          /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-fg-muted font-light leading-[1.75]", children: body }) }),
          aside && /* @__PURE__ */ jsx("div", { className: "md:col-span-5 md:col-start-8", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-surface border border-border p-5 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-3 -right-3 w-12 h-12 rounded-full bg-accent/5" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 relative", children: [
              /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-accent mt-0.5 shrink-0", children: /* @__PURE__ */ jsx("path", { d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-fg-muted leading-relaxed", dangerouslySetInnerHTML: { __html: aside } })
            ] })
          ] }) })
        ] }),
        children && /* @__PURE__ */ jsx("div", { className: "mt-10", children })
      ] })
    }
  );
}

function TextReveal({ text, className = "", highlightWords = [] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.15"]
  });
  const words = text.split(" ");
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `px-6 md:px-12 lg:px-20 py-20 md:py-32 relative ${className}`, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: { scaleY: scrollYProgress },
        className: "absolute left-6 md:left-12 lg:left-20 top-20 md:top-32 w-0.5 h-[calc(100%-10rem)] bg-gradient-to-b from-accent/60 to-accent/10 rounded-full origin-top hidden md:block"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto md:pl-8", children: /* @__PURE__ */ jsx("p", { className: "flex flex-wrap text-xl md:text-3xl lg:text-[2.4rem] font-semibold leading-[1.5] tracking-tight", children: words.map((word, i) => {
      const start = i / words.length;
      const end = start + 1 / words.length;
      const isHighlight = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));
      return /* @__PURE__ */ jsx(Word, { progress: scrollYProgress, range: [start, end], highlight: isHighlight, children: word }, i);
    }) }) })
  ] });
}
function Word({
  children,
  progress,
  range,
  highlight
}) {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return /* @__PURE__ */ jsx("span", { className: "relative mr-[0.3em] mt-1", children: /* @__PURE__ */ jsx(
    motion.span,
    {
      style: { opacity, y },
      className: `inline-block ${highlight ? "text-accent" : ""}`,
      children
    }
  ) });
}

const TIMELINE_EVENTS = [
  {
    year: "2021",
    title: "Broken Laptop & Curiosity",
    desc: "Discovered programming trying to make a 2GB RAM Intel Core 2 Duo laptop functional. Installed lightweight Linux distros to keep it alive. First time seeing a terminal.",
    aside: "Accidentally wiped the partition table twice. Learned how hard drives actually partition and boot.",
    command: "shameel@old-laptop:~$ neofetch --minimal",
    output: [
      "OS: Puppy Linux / Lubuntu",
      "CPU: Intel Core 2 Duo T6500",
      "Memory: 2048MB RAM (DDR2)",
      "Status: Struggling but running",
      "Motivation: 'How does this work?'"
    ]
  },
  {
    year: "2022",
    title: "The Arch Linux Era",
    desc: "Moved to daily driving Arch Linux. Ditched desktop environments for custom tiling window managers (i3wm, bspwm). Learned shell scripting to automate dotfile management.",
    aside: "Spent 3 days configuring custom borders and window gaps. Realized text configuration files are incredibly powerful.",
    command: "shameel@arch:~$ cat install_scripts/setup.sh",
    output: [
      "#!/bin/bash",
      "echo 'Installing base packages...'",
      "pacman -Syu xorg i3-gaps rofi polybar alacritty neovim",
      "cp -r ./dotfiles/* ~/.config/",
      "echo 'Arch installed. I use Arch BTW.'"
    ]
  },
  {
    year: "2023",
    title: "Hyprland & Barchy Reborn",
    desc: "Configured custom Wayland window manager setup on Hyprland. Built Barchy Reborn — a lean desktop environment adaptation inspired by Omarchy/DHH setup. Advanced scripting in Python/Bash.",
    aside: "Learned deep OS concepts: compositor rendering, Wayland security protocols, and systemd services.",
    command: "shameel@hyprland:~$ hyprctl monitors",
    output: [
      "Monitor eDP-1 (ID 0): 1920x1080@60.00Hz",
      "Active workspace: 1 (Code)",
      "Window Manager: Hyprland (Wayland)",
      "Animation scale: 1.0 (Snappy)",
      "System load: 0.12 (Lean and mean)"
    ]
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    desc: "Transitioned from OS configurations to building full-stack web and mobile apps. Discovered React, Next.js, and Supabase. Built first production apps for clients and automated processes.",
    aside: "Created an exam seating arrangements algorithm for a college that replaced weeks of manual paper shuffling with a 2-second click.",
    command: "shameel@dev:~/office_pal$ flutter run --release",
    output: [
      "Building flutter app in release mode...",
      "✓ Built build/app/outputs/flutter-apk/app-release.apk (18.2MB)",
      "Syncing data to PocketBase backend...",
      "Status: Exam seating arrangements deployed",
      "Revenue: Admin workflow automation successful!"
    ]
  },
  {
    year: "2025/2026",
    title: "Homelab & Kubernetes",
    desc: "Configured a self-hosted Kubernetes cluster on a desk Sony VAIO laptop. Handled CI/CD container builds, Tailscale zero-trust tunnels, PocketBase databases, and n8n autonomous AI workflows.",
    aside: "VAIO cluster crashed at 2 AM. Debugged Pod scheduling, DNS resolvers, and persistent volumes. Real-world learning beat any tutorial.",
    command: "shameel@vaio-node:~$ kubectl get pods -n prod",
    output: [
      "NAME                                 READY   STATUS    RESTARTS   AGE",
      "pod/pocketbase-db-7d4bc8f9b2-cnd82   1/1     Running   0          45d",
      "pod/portfolio-web-54b9d8fc6c-8s9v2   1/1     Running   1          28d",
      "pod/n8n-automation-89cdd5c88-m9x12   1/1     Running   0          92d",
      "pod/pihole-dns-749c89dc9d-bb822      1/1     Running   0          104d"
    ]
  }
];
function TimelineWidget() {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleSelect = (idx) => {
    playClickSound();
    setActiveIndex(idx);
  };
  const activeEvent = TIMELINE_EVENTS[activeIndex];
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-10 flex justify-between items-center px-4 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[3px] bg-border dark:bg-border-dark rounded-full z-0" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "absolute left-6 h-[3px] bg-accent rounded-full z-0 origin-left",
          animate: { width: `${activeIndex / (TIMELINE_EVENTS.length - 1) * 90}%` },
          transition: { type: "spring", stiffness: 100, damping: 15 },
          style: { width: "0%" }
        }
      ),
      TIMELINE_EVENTS.map((evt, idx) => {
        const isActive = idx === activeIndex;
        const isPassed = idx < activeIndex;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleSelect(idx),
            className: "relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none",
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: {
                    scale: isActive ? 1.25 : 1,
                    backgroundColor: isActive ? "var(--color-accent)" : isPassed ? "var(--color-accent-dark)" : "var(--color-bg)",
                    borderColor: isActive || isPassed ? "var(--color-accent)" : "var(--color-border-dark)"
                  },
                  transition: { duration: 0.3 },
                  className: `w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white shadow-md transition-colors`,
                  children: isActive && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      layoutId: "timeline-inner-dot",
                      className: "w-2 h-2 rounded-full bg-white"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: `mt-2 font-[Silkscreen] text-[10px] md:text-[12px] tracking-wider uppercase transition-colors duration-300
                ${isActive ? "text-accent font-extrabold" : "text-fg-muted dark:text-fg-faint group-hover:text-fg"}
              `, children: evt.year })
            ]
          },
          evt.year
        );
      })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -15 },
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        className: "grid lg:grid-cols-12 gap-8 items-start",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col justify-between h-full", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-block px-3 py-1 mb-4 rounded-lg bg-pastel-orange/50 dark:bg-accent-light text-accent text-xs font-[Silkscreen] tracking-wider uppercase", children: [
                "Era: ",
                activeEvent.year
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold mb-3 text-fg", children: activeEvent.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-fg-muted leading-relaxed font-light mb-6", children: activeEvent.desc })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-surface-warm dark:bg-bg border border-border dark:border-border-dark p-4 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-accent mt-0.5 shrink-0", children: [
                /* @__PURE__ */ jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 2Z" }),
                /* @__PURE__ */ jsx("path", { d: "M12 16V12" }),
                /* @__PURE__ */ jsx("path", { d: "M12 8H12.01" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-fg-muted leading-relaxed font-light", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: "Fun Fact:" }),
                " ",
                activeEvent.aside
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1f1e1d]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ff5f56]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-fg-faint select-none", children: [
                "shameel@sony-vaio: ~ (",
                activeEvent.year,
                ")"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "w-10" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3 min-h-[180px] select-text", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-accent select-none font-bold", children: "❯" }),
                /* @__PURE__ */ jsx("span", { children: activeEvent.command })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1 pl-4 text-fg-muted font-light leading-relaxed", children: activeEvent.output.map((line, i) => /* @__PURE__ */ jsx("div", { className: "whitespace-pre-wrap", children: line }, i)) })
            ] })
          ] }) })
        ]
      },
      activeIndex
    ) })
  ] });
}

const PRESETS = [
  {
    level: 0,
    name: "Shameel's Ethos (Astro SSG + React Islands)",
    desc: "Optimized HTML, minimal inline styling, JS loaded only on demand via islands. Ultra-fast rendering.",
    lighthouse: 100,
    jsSize: "12 KB",
    loadTime: "0.08s",
    fanSpeed: 0,
    domNodes: 280,
    trackers: 0,
    commentary: "Silent. Cold. Loads instantly. Recruiter reads it, is impressed, and hires instantly."
  },
  {
    level: 1,
    name: "Typical Modern SPA (Next.js client-side heavy)",
    desc: "Single Page Application with full hydration, React Context, Tailwind, and Google Analytics.",
    lighthouse: 82,
    jsSize: "380 KB",
    loadTime: "1.2s",
    fanSpeed: 1,
    domNodes: 1400,
    trackers: 2,
    commentary: "Warm. Needs a second to bundle-load. Standard experience for most modern web apps."
  },
  {
    level: 2,
    name: "Enterprise Corporate Site (Standard SaaS)",
    desc: "Dozens of dependencies, Hotjar heatmaps, HubSpot chat widget, Cookie consent wall, uncompressed PNGs.",
    lighthouse: 48,
    jsSize: "2.1 MB",
    loadTime: "4.5s",
    fanSpeed: 3,
    domNodes: 4500,
    trackers: 14,
    commentary: "Heats up the room. CPU fan starts spinning. Loading spinner gets more screen time than actual content."
  },
  {
    level: 3,
    name: "Legacy Monolith CMS (Corporate Hellscape)",
    desc: "48 tracking scripts, multiple GTM tags, giant hero video, legacy jQuery plugins, complex enterprise architecture.",
    lighthouse: 14,
    jsSize: "8.4 MB",
    loadTime: "11.2s",
    fanSpeed: 8,
    domNodes: 9500,
    trackers: 42,
    commentary: "Thermal throttling. Laptop fan sounds like a commercial jet preparing for takeoff. Users exit before page load."
  }
];
function BloatOMeter() {
  const [level, setLevel] = useState(0);
  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    if (val !== level) {
      playClickSound();
      setLevel(val);
    }
  };
  const preset = PRESETS[level];
  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-500 border-green-500 bg-green-500/10";
    if (score >= 50) return "text-amber-500 border-amber-500 bg-amber-500/10";
    return "text-red-500 border-red-500 bg-red-500/10";
  };
  return /* @__PURE__ */ jsx("div", { className: "mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-stretch", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-fg", children: "The Web Bloat-o-Meter" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-fg-muted font-light mb-6", children: "Drag the slider to increase the stack size. See how adding features without discipline ruins the user experience." }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-[Silkscreen] text-[10px] text-fg-faint mb-2.5", children: [
            /* @__PURE__ */ jsx("span", { children: "0. LEAN ETHOS" }),
            /* @__PURE__ */ jsx("span", { children: "1. MID SPA" }),
            /* @__PURE__ */ jsx("span", { children: "2. SAAS APP" }),
            /* @__PURE__ */ jsx("span", { children: "3. MONOLITH" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "3",
              value: level,
              onChange: handleSliderChange,
              className: "w-full h-2 rounded-full appearance-none bg-border dark:bg-border-dark cursor-pointer outline-none accent-accent",
              style: {
                background: `linear-gradient(to right, var(--color-accent) ${level / 3 * 100}%, var(--color-border) ${level / 3 * 100}%)`
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] text-accent tracking-wider uppercase block mb-1", children: "Current Stack Preset" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-fg", children: preset.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-fg-muted font-light mt-1.5 leading-relaxed", children: preset.desc })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 rounded-2xl bg-surface-warm dark:bg-bg border border-border dark:border-border-dark", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[9px] font-[Silkscreen] text-fg-faint block uppercase mb-1", children: "System Diagnostic" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs italic text-fg-muted font-light", children: [
          '"',
          preset.commentary,
          '"'
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-[320px] rounded-2xl border border-border dark:border-border-dark bg-surface-warm dark:bg-bg/40 p-5 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] text-fg-faint tracking-wider block uppercase border-b border-border/80 dark:border-border-dark pb-2", children: "Performance metrics" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-fg-muted font-light", children: "Lighthouse Score" }),
          /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full border-2 flex items-center justify-center font-[Silkscreen] text-xs font-bold ${getScoreColor(preset.lighthouse)}`, children: preset.lighthouse })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-light", children: "JavaScript Bundle" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-fg font-medium", children: preset.jsSize })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-light", children: "FCP (Load Speed)" }),
          /* @__PURE__ */ jsx("span", { className: `font-mono font-medium ${level === 0 ? "text-green-500" : level === 1 ? "text-fg" : level === 2 ? "text-amber-500" : "text-red-500"}`, children: preset.loadTime })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-light", children: "DOM Tree Nodes" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-fg font-medium", children: preset.domNodes.toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-fg-muted font-light", children: "External Trackers" }),
          /* @__PURE__ */ jsx("span", { className: `font-mono font-medium ${preset.trackers === 0 ? "text-green-500" : "text-fg"}`, children: preset.trackers })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-border/80 dark:border-border-dark flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-12 h-12 bg-surface border border-border/80 dark:border-border-dark dark:bg-[#121110] rounded-full flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: preset.fanSpeed > 0 ? { rotate: 360 } : { rotate: 0 },
            transition: preset.fanSpeed > 0 ? {
              repeat: Infinity,
              duration: 2.5 / preset.fanSpeed,
              ease: "linear"
            } : { duration: 0.5 },
            className: "w-10 h-10 flex items-center justify-center",
            children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", className: "text-fg-muted dark:text-fg-faint", children: [
              /* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2", className: "fill-bg stroke-fg-muted" })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase", children: "CPU THERMALS" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-fg font-semibold truncate block", children: preset.fanSpeed === 0 ? "FAN: SILENT (0 RPM)" : `FAN: ${preset.fanSpeed * 900} RPM (${preset.fanSpeed > 4 ? "HOT" : "WARM"})` })
        ] })
      ] })
    ] })
  ] }) });
}

const NODES = [
  {
    id: "human",
    name: "Shameel (Human Taste)",
    role: "Architect & Coordinator",
    icon: "🧠",
    color: "text-orange-500 border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 dark:border-orange-900/50",
    badgeBg: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    desc: "Provides the vision, software architecture, UX guidelines, database schemas, and final code verification. Taste and intent are human responsibilities.",
    bullets: [
      "Writes system designs & specs",
      "Performs code quality gatekeeping",
      "Assembles final integration",
      "Defines business logic requirements"
    ]
  },
  {
    id: "claude",
    name: "Claude (Architect & Debugger)",
    role: "Structural Assistant",
    icon: "🤖",
    color: "text-purple-500 border-purple-200 bg-purple-50/50 dark:bg-purple-950/20 dark:border-purple-900/50",
    badgeBg: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    desc: "An advanced coding partner used for pair programming complex React components, refactoring algorithms, writing Kubernetes YAML configurations, and explaining deep stack traces.",
    bullets: [
      "Generates boilerplate-free code structures",
      "Reviews diffs for security issues",
      "Provides architecture design alternatives",
      "Assists in writing clean Dockerfiles"
    ]
  },
  {
    id: "copilot",
    name: "Copilot (Inline Accelerator)",
    role: "Syntax Auto-complete",
    icon: "⚡",
    color: "text-blue-500 border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-900/50",
    badgeBg: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    desc: "Runs inside the editor to speed up routine typing. Instantly generates TypeScript types, mock test arrays, boilerplate interfaces, and routine script layouts.",
    bullets: [
      "Fills out long TypeScript interfaces",
      "Creates standard unit testing arrays",
      "Finishes repeating code structures",
      "Completes CSS layout attributes"
    ]
  },
  {
    id: "n8n",
    name: "n8n (Autonomous Workflows)",
    role: "System Automation Agent",
    icon: "⚙️",
    color: "text-pink-500 border-pink-200 bg-pink-50/50 dark:bg-pink-950/20 dark:border-pink-900/50",
    badgeBg: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
    desc: "A self-hosted automation runner executing cron workflows. It parses server health checks, backs up database files, triggers Discord/Slack build webhooks, and syncs dev logs.",
    bullets: [
      "Executes daily DB backups to local storage",
      "Pushes container build alerts to Slack",
      "Performs background health monitoring",
      "Dispatches incoming contact form details"
    ]
  }
];
function WorkflowMap() {
  const [activeId, setActiveId] = useState("human");
  const handleSelect = (id) => {
    playClickSound();
    setActiveId(id);
  };
  const activeNode = NODES.find((n) => n.id === activeId) || NODES[0];
  return /* @__PURE__ */ jsx("div", { className: "mt-12 rounded-3xl border border-border bg-white dark:bg-surface p-6 md:p-8 shadow-xl shadow-black/[0.02] dark:shadow-none transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center relative min-h-[300px] border border-dashed border-border dark:border-border-dark rounded-2xl p-6 bg-surface-warm dark:bg-bg/40 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" }),
      /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full hidden md:block pointer-events-none z-0", children: [
        /* @__PURE__ */ jsx("line", { x1: "50%", y1: "20%", x2: "25%", y2: "55%", stroke: "var(--color-border-dark)", strokeWidth: "1.5", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsx("line", { x1: "50%", y1: "20%", x2: "75%", y2: "55%", stroke: "var(--color-border-dark)", strokeWidth: "1.5", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsx("line", { x1: "50%", y1: "20%", x2: "50%", y2: "80%", stroke: "var(--color-border-dark)", strokeWidth: "1.5", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsx("line", { x1: "25%", y1: "55%", x2: "50%", y2: "80%", stroke: "var(--color-border-dark)", strokeWidth: "1.5", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsx("line", { x1: "75%", y1: "55%", x2: "50%", y2: "80%", stroke: "var(--color-border-dark)", strokeWidth: "1.5", strokeDasharray: "4 4" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-between h-full gap-8", children: [
        /* @__PURE__ */ jsxs(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => handleSelect("human"),
            className: `px-5 py-3 rounded-2xl border-2 flex items-center gap-3 shadow-md transition-all
                ${activeId === "human" ? "border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface" : "border-border dark:border-border-dark bg-white dark:bg-surface/50"}
              `,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "🧠" }),
              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] text-fg-faint block uppercase", children: "Vision" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-fg", children: "Shameel (Human Taste)" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full max-w-sm gap-4", children: [
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => handleSelect("claude"),
              className: `px-4 py-3 rounded-2xl border-2 flex items-center gap-2.5 shadow-sm transition-all flex-1 justify-center
                  ${activeId === "claude" ? "border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface" : "border-border dark:border-border-dark bg-white dark:bg-surface/50"}
                `,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-lg", children: "🤖" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase", children: "Architect" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-fg", children: "Claude" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => handleSelect("copilot"),
              className: `px-4 py-3 rounded-2xl border-2 flex items-center gap-2.5 shadow-sm transition-all flex-1 justify-center
                  ${activeId === "copilot" ? "border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface" : "border-border dark:border-border-dark bg-white dark:bg-surface/50"}
                `,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-lg", children: "⚡" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase", children: "Accelerator" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-fg", children: "Copilot" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => handleSelect("n8n"),
            className: `px-5 py-3 rounded-2xl border-2 flex items-center gap-3 shadow-md transition-all
                ${activeId === "n8n" ? "border-accent shadow-accent/10 scale-105 bg-white dark:bg-surface" : "border-border dark:border-border-dark bg-white dark:bg-surface/50"}
              `,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: "⚙️" }),
              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] text-fg-faint block uppercase", children: "Automation" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-fg", children: "n8n Workflows" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 flex flex-col justify-between", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 15 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -15 },
        transition: { duration: 0.3 },
        className: "flex flex-col justify-between h-full space-y-6",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("div", { className: `px-2.5 py-1 text-[10px] font-[Silkscreen] rounded-md tracking-wider uppercase ${activeNode.badgeBg}`, children: activeNode.role }) }),
            /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-bold text-fg flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: activeNode.icon }),
              /* @__PURE__ */ jsx("span", { children: activeNode.name })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-fg-muted font-light mt-3 leading-relaxed", children: activeNode.desc })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-[Silkscreen] text-fg-faint block uppercase mb-3 tracking-widest border-b border-border/80 dark:border-border-dark pb-2", children: "Workflow outputs" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5", children: activeNode.bullets.map((bullet, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-fg-muted font-light", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: bullet })
            ] }, i)) })
          ] })
        ]
      },
      activeId
    ) }) })
  ] }) });
}

const CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend",
    icon: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polygon", { points: "5 3 19 12 5 21 5 3" }) }),
    tools: [
      { name: "React", desc: "UI Library", icon: "/reactjs.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Production Ready", usage: "Main libraries for interactive components, dashboard widgets, and client UIs." },
      { name: "Next.js", desc: "React Framework", icon: "/nextjs-light.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Production Ready", usage: "Utilized for complex dashboards requiring Server-Side Rendering (SSR) and SEO optimizations." },
      { name: "TypeScript", desc: "Typed JavaScript", icon: "/typescript.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Ensures type safety across all full-stack repositories, catching bugs before deploy." },
      { name: "Flutter", desc: "Cross-platform Mobile", icon: "/flutter.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "1.5 Years", usage: "Developed mobile college management apps with local offline syncing capabilities." },
      { name: "Tailwind CSS", desc: "Utility-first Styles", icon: "/tailwind.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Speeds up UI construction. Utilizes Tailwind CSS v4 in current configurations." }
    ]
  },
  {
    id: "backend",
    name: "Backend & DB",
    icon: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
    ] }),
    tools: [
      { name: "PocketBase", desc: "Single-file Backend", icon: "/resend.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Daily Driver", usage: "Handles real-time databases and user auth. Hosted directly inside Kubernetes pods." },
      { name: "Supabase", desc: "Open-source Firebase", icon: "/supabase.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Production Ready", usage: "Used for Postgres database instances, realtime channel triggers, and object storage buckets." },
      { name: "PostgreSQL", desc: "Relational Database", icon: "/postgresql.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Capable", usage: "Configures tables, schemas, relations, and indexed triggers for full-scale applications." },
      { name: "Node.js", desc: "JS Runtime", icon: "/nodejs.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Capable", usage: "Used for API routing endpoints, server entrypoints, and standalone automation scripts." },
      { name: "MSSQL", desc: "SQL Server", icon: "/microsoft-sql-server.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Intership", usage: "Integrated with React interfaces for office databases during professional internships." }
    ]
  },
  {
    id: "devops",
    name: "DevOps & OS",
    icon: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" })
    ] }),
    tools: [
      { name: "Kubernetes", desc: "Orchestration", icon: "/kubernetes.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "Learning (Active)", usage: "Hosts homelab node pods, routing traffic, setting service configurations." },
      { name: "Docker", desc: "Container Engine", icon: "/docker-engine.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "Containers are compiled for frontend pages, PocketBase instances, and cron operations." },
      { name: "Tailscale", desc: "WireGuard VPN", icon: "/tailscale-light.svg", color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400", experience: "Daily Driver", usage: "Maintains encrypted zero-trust tunnels between local VAIO nodes and GitHub CI/CD builders." },
      { name: "Cloudflare", desc: "DNS & CDN Edge", icon: "/cloudflare.svg", color: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400", experience: "Daily Driver", usage: "Secures websites, provisions SSL certificates, and tunnels internal ports to public domains." },
      { name: "Arch Linux", desc: "Rolling OS", icon: "/arch-linux.svg", color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400", experience: "Daily Driver", usage: "The main operating system. Preloaded with customized tiling window configurations." }
    ]
  },
  {
    id: "automation",
    name: "Automation",
    icon: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
      /* @__PURE__ */ jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
    ] }),
    tools: [
      { name: "Python", desc: "Scripting Language", icon: "/python.svg", color: "bg-pastel-yellow/40 dark:bg-[#2E2D14] text-yellow-600 dark:text-yellow-400", experience: "Comfortable", usage: "Automates local folder configurations, database scripts, and webhook tunnel parsers." },
      { name: "GitHub Actions", desc: "CI/CD Orchestration", icon: "/github-light.svg", color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400", experience: "Production Ready", usage: "Compiles container builds automatically on commits, deploying to homelab cluster nodes." },
      { name: "n8n", desc: "Workflow Engine", icon: "/n8n.svg", color: "bg-pastel-pink/40 dark:bg-[#2E1423] text-pink-600 dark:text-pink-400", experience: "Daily Driver", usage: "Coordinates cron processes, system health warnings, database backups, and contact forms." }
    ]
  }
];
function ToolDrawer() {
  const [activeCat, setActiveCat] = useState("frontend");
  const [selectedTool, setSelectedTool] = useState(null);
  const handleCatSelect = (id) => {
    playClickSound();
    setActiveCat(id);
    setSelectedTool(null);
  };
  const handleToolSelect = (tool) => {
    playClickSound();
    setSelectedTool(tool === selectedTool ? null : tool);
  };
  const category = CATEGORIES.find((c) => c.id === activeCat) || CATEGORIES[0];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pastel-orange/10 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-pastel-purple/10 blur-[80px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-pastel-blue/40 flex items-center justify-center text-blue-500 shrink-0", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
        /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
      ] }) }),
      /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase", children: "The Toolkit" })
    ] }),
    /* @__PURE__ */ jsxs("h2", { className: "text-center text-2xl md:text-4xl font-bold tracking-tight mb-3 text-fg", children: [
      "The systems I deploy & ",
      /* @__PURE__ */ jsx("span", { className: "text-accent", children: "languages I speak." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-fg-muted text-sm md:text-base font-light mb-12 max-w-lg mx-auto leading-relaxed", children: "Categorized index of packages, systems, databases, and workflow utilities. Click on a badge to check detailed production usage." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8 bg-surface-warm dark:bg-[#161514] p-1.5 rounded-2xl max-w-xl mx-auto border border-border dark:border-border-dark transition-colors", children: CATEGORIES.map((cat) => {
      const isActive = cat.id === activeCat;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleCatSelect(cat.id),
          className: `flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider font-[Silkscreen] uppercase transition-all duration-300
                ${isActive ? "bg-white dark:bg-surface text-accent shadow-sm" : "text-fg-muted dark:text-fg-faint hover:text-fg hover:bg-white/40 dark:hover:bg-white/5"}
              `,
          children: [
            cat.icon,
            /* @__PURE__ */ jsx("span", { children: cat.name })
          ]
        },
        cat.id
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: selectedTool ? "lg:col-span-7 transition-all duration-300" : "lg:col-span-12 transition-all duration-300", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          layout: true,
          className: "flex flex-wrap gap-3 justify-center",
          children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: category.tools.map((tool) => {
            const isSelected = selectedTool?.name === tool.name;
            return /* @__PURE__ */ jsxs(
              motion.button,
              {
                layout: true,
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.9 },
                transition: { type: "spring", stiffness: 300, damping: 25 },
                onClick: () => handleToolSelect(tool),
                className: `inline-flex items-center gap-2.5 px-5 py-3 text-xs font-bold rounded-full border cursor-pointer transition-all duration-300
                      ${isSelected ? "border-accent ring-2 ring-accent/20 scale-105 shadow-md " + tool.color : "border-border dark:border-border-dark bg-white dark:bg-surface hover:scale-105 hover:y-[-2px] hover:shadow-sm " + tool.color}
                    `,
                children: [
                  /* @__PURE__ */ jsx("img", { src: tool.icon, alt: "", className: "w-4.5 h-4.5 object-contain" }),
                  /* @__PURE__ */ jsx("span", { className: "text-fg", children: tool.name }),
                  /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-fg-faint font-light", children: [
                    "(",
                    tool.desc,
                    ")"
                  ] })
                ]
              },
              tool.name
            );
          }) })
        }
      ) }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: selectedTool && /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 25 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 25 },
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          className: "lg:col-span-5 rounded-3xl border border-border dark:border-border-dark bg-white dark:bg-surface p-6 shadow-xl shadow-black/[0.02] dark:shadow-none",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/80 dark:border-border-dark pb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx("img", { src: selectedTool.icon, alt: "", className: "w-6 h-6 object-contain" }),
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg text-fg", children: selectedTool.name })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    playClickSound();
                    setSelectedTool(null);
                  },
                  className: "text-fg-faint hover:text-fg text-sm cursor-pointer",
                  "aria-label": "Close details",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1", children: "PRO EXP" }),
                /* @__PURE__ */ jsx("div", { className: "inline-block px-2.5 py-1 bg-accent-light dark:bg-accent-light border border-accent/25 text-accent text-[10px] font-[Silkscreen] tracking-wider uppercase rounded-md font-bold", children: selectedTool.experience })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1", children: "DEFINITION" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-fg-muted font-light leading-relaxed", children: [
                  selectedTool.name,
                  " is a ",
                  selectedTool.desc.toLowerCase(),
                  "."
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase mb-1", children: "PRO UTILIZATION" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-fg-muted font-light leading-relaxed", children: selectedTool.usage })
              ] })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}

const PROJECTS = [
  {
    index: "01",
    title: "Scentance",
    subtitle: "Premium Fragrance E-commerce",
    category: "saas",
    description: "A premium fragrance e-commerce platform built for a client. Handles active customers, card processing, inventory, and order pipelines.",
    funNote: "This isn't a portfolio demo — it's a production business running with real revenue.",
    tags: [
      { name: "Next.js 16", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Three.js/R3F", color: "bg-pastel-purple/40 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
      { name: "Supabase", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" }
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/resend.svg"],
    link: "https://scentenceparfum.com",
    highlights: [
      "Live production with real customers",
      "3D interactive mesh background",
      "Admin dashboard with order tracking"
    ],
    role: "Lead Full-Stack Developer",
    status: "99.9% Uptime (Production)",
    complexity: "High / 12,000+ lines",
    cardBg: "from-pastel-purple/20 to-pastel-pink/5 dark:from-[#23142E]/10 dark:to-transparent",
    iconColor: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400",
    screenshot: "/projects/scentence.png",
    isLive: true
  },
  {
    index: "02",
    title: "Stock Salt",
    subtitle: "Real-time Inventory SaaS",
    category: "saas",
    description: "Multi-outlet inventory management SaaS with instant stock syncing across active POS cash registers and registers database.",
    funNote: "Because spreadsheets are a terrible backbone for retail businesses.",
    tags: [
      { name: "Next.js 15", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Supabase Realtime", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" }
    ],
    stackIcons: ["/nextjs-light.svg", "/typescript.svg", "/supabase.svg", "/reactjs.svg"],
    link: "https://github.com/muhammad-shameel-ks/stock-salt",
    highlights: [
      "Real-time stock sync across terminals",
      "Centralized master stock management",
      "Revenue analytics dashboard"
    ],
    role: "Full-Stack Creator",
    status: "Live Demo",
    complexity: "Medium / 7,500 lines",
    cardBg: "from-pastel-blue/20 to-pastel-green/5 dark:from-[#14222E]/10 dark:to-transparent",
    iconColor: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-600 dark:text-blue-400",
    screenshot: "/projects/stock-salt.png",
    isLive: true
  },
  {
    index: "03",
    title: "Office Pal",
    subtitle: "College Management System",
    category: "mobile",
    description: "Replaces student administration spreadsheets with auto-generated exam seating maps and automated role dashboards.",
    funNote: "Created an algorithm that ensures no two students with same exam sit adjacent.",
    tags: [
      { name: "Flutter", color: "bg-pastel-purple/40 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
      { name: "Supabase", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
      { name: "Riverpod", color: "bg-pastel-orange/40 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400" }
    ],
    stackIcons: ["/flutter.svg", "/supabase.svg"],
    link: "https://github.com/muhammad-shameel-ks/office_pal",
    highlights: [
      "Anti-cheat seating algorithm",
      "Print-ready PDF generation",
      "4 role-based dashboards"
    ],
    role: "Lead Mobile Architect",
    status: "Production Ready",
    complexity: "High / 9,000 lines",
    cardBg: "from-pastel-purple/20 to-pastel-pink/5 dark:from-[#23142E]/10 dark:to-transparent",
    iconColor: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-600 dark:text-purple-400",
    screenshot: "/projects/office-pal.png"
  },
  {
    index: "04",
    title: "KSDC Smart Helper",
    subtitle: "SQL Command Generator",
    category: "mobile",
    description: "Generates SQL commands from visual UI controls for non-technical office administrative staff to safely fetch server details.",
    funNote: "Making SQL tables querying accessible to anyone, one block at a time.",
    tags: [
      { name: "React", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "TypeScript", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Node.js", color: "bg-pastel-green/40 dark:bg-green-900/30 text-green-700 dark:text-green-400" }
    ],
    stackIcons: ["/reactjs.svg", "/typescript.svg", "/nodejs.svg", "/microsoft-sql-server.svg"],
    link: "https://github.com/muhammad-shameel-ks/ksdc-smart-helper",
    highlights: [
      "Auto SQL query generation",
      "Simplified UI for non-tech users",
      "Query validation"
    ],
    role: "Frontend Engineer (Intern)",
    status: "Completed & Deployed",
    complexity: "Medium / 3,200 lines",
    cardBg: "from-pastel-orange/15 to-pastel-yellow/5 dark:from-[#302116]/10 dark:to-transparent",
    iconColor: "bg-pastel-orange/40 dark:bg-[#302116] text-orange-600 dark:text-orange-400",
    screenshot: "/projects/ksdc-smart.png"
  },
  {
    index: "05",
    title: "n8n Easy Webhooks",
    subtitle: "Zero-Config Development Tunneling",
    category: "devops",
    description: "Command-line tool orchestrating Cloudflare Tunnels dynamically for local container n8n webhook workflow development.",
    funNote: "I got tired of editing tunnel config maps manually, so I wrote an automation.",
    tags: [
      { name: "Python", color: "bg-pastel-yellow/40 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" },
      { name: "Docker", color: "bg-pastel-blue/40 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
      { name: "Cloudflare", color: "bg-pastel-orange/40 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400" }
    ],
    stackIcons: ["/python.svg", "/docker-engine.svg", "/cloudflare.svg"],
    link: "https://github.com/muhammad-shameel-ks/n8n-easy-webhook",
    highlights: [
      "Auto Cloudflare Tunnel provisioning",
      "Dynamic webhook URL config",
      "Dual CLI + TUI interface"
    ],
    role: "DevOps Creator",
    status: "Completed (Open Source)",
    complexity: "Low / 1,200 lines",
    cardBg: "from-pastel-green/15 to-pastel-blue/5 dark:from-[#142E1F]/10 dark:to-transparent",
    iconColor: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-600 dark:text-green-400"
  }
];
const FILTER_OPTIONS = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "Production SaaS" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "devops", label: "DevOps & CLI" }
];
const PROJECT_ICONS = {
  "01": /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" }),
    /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsx("path", { d: "M16 10a4 4 0 01-8 0" })
  ] }),
  "02": /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20" }),
    /* @__PURE__ */ jsx("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" })
  ] }),
  "03": /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
  ] }),
  "04": /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
  ] }),
  "05": /* @__PURE__ */ jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsx("path", { d: "M2 2l20 20" })
  ] })
};
function ProjectList() {
  const [filter, setFilter] = useState("all");
  const [modalProject, setModalProject] = useState(null);
  const handleFilterSelect = (id) => {
    playClickSound();
    setFilter(id);
  };
  const openLightbox = (project) => {
    playSuccessSound();
    setModalProject(project);
    document.body.setAttribute("data-modal-open", "true");
  };
  const closeLightbox = () => {
    playClickSound();
    setModalProject(null);
    document.body.removeAttribute("data-modal-open");
  };
  const filteredProjects = PROJECTS.filter((p) => filter === "all" || p.category === filter);
  return /* @__PURE__ */ jsxs("section", { className: "px-6 md:px-12 lg:px-20 py-20 md:py-32 relative", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: modalProject && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8",
        onClick: closeLightbox,
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.93, y: 15, opacity: 0 },
            animate: { scale: 1, y: 0, opacity: 1 },
            exit: { scale: 0.93, y: 15, opacity: 0 },
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            className: "bg-white dark:bg-surface w-full max-w-4xl rounded-3xl overflow-hidden border border-border dark:border-border-dark flex flex-col md:flex-row shadow-2xl relative",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: closeLightbox,
                  className: "absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer text-sm",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-surface-warm dark:bg-bg flex items-center justify-center relative min-h-[220px] md:min-h-[400px]", children: [
                modalProject.screenshot ? /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: modalProject.screenshot,
                    alt: modalProject.title,
                    className: "w-full h-full object-cover"
                  }
                ) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2 text-fg-faint select-none", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-xl bg-pastel-green/20 dark:bg-green-950/20 flex items-center justify-center text-green-500", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
                    /* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20" }),
                    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
                    /* @__PURE__ */ jsx("path", { d: "M2 2l20 20" })
                  ] }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] tracking-wider uppercase", children: "CLI DEV TOOL" })
                ] }),
                modalProject.isLive && /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 px-2.5 py-1 rounded bg-green-500 text-white font-[Silkscreen] text-[9px] font-bold tracking-wider flex items-center gap-1.5 shadow-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }),
                  "LIVE SITE"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[360px] p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border dark:border-border-dark max-h-[85vh] overflow-y-auto bg-white dark:bg-surface", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                      /* @__PURE__ */ jsx("div", { className: `w-6 h-6 rounded-md ${modalProject.iconColor} flex items-center justify-center scale-90`, children: PROJECT_ICONS[modalProject.index] }),
                      /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[10px] text-accent tracking-wider uppercase font-bold", children: modalProject.subtitle })
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-fg", children: modalProject.title })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-fg-muted font-light leading-relaxed", children: modalProject.description }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[9px] font-[Silkscreen] text-fg-faint block uppercase mb-2 tracking-wider", children: "PROJECT HIGHLIGHTS" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 list-none", children: modalProject.highlights.map((h, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs text-fg-muted font-light", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: h })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "border-t border-border/80 dark:border-border-dark pt-3.5 space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint font-light", children: "Project Role" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-fg", children: modalProject.role })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint font-light", children: "System Status" }),
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-fg font-medium", children: modalProject.status })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-fg-faint font-light", children: "Scale Metric" }),
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-fg font-medium", children: modalProject.complexity })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-4 border-t border-border/80 dark:border-border-dark flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-fg-faint font-light", children: [
                    "ID: ",
                    modalProject.index
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: modalProject.link,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsx("span", { children: modalProject.isLive ? "Visit Page" : "Get Code" }),
                        /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            whileHover: { rotate: -8 },
            className: "w-10 h-10 rounded-xl bg-pastel-orange/40 dark:bg-[#302116] flex items-center justify-center text-accent shrink-0",
            children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase", children: "The Work" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl font-bold tracking-tight mb-2 text-fg", children: [
            "Things I've built that ",
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "actually ship." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-fg-muted text-sm md:text-base font-light max-w-lg leading-relaxed", children: "Real systems solving active issues for real clients. No generic boilerplate templates." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 bg-surface-warm dark:bg-[#161514] p-1 rounded-xl border border-border dark:border-border-dark transition-colors", children: FILTER_OPTIONS.map((opt) => {
          const isActive = opt.id === filter;
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleFilterSelect(opt.id),
              className: `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer
                    ${isActive ? "bg-white dark:bg-surface text-accent shadow-sm" : "text-fg-muted dark:text-fg-faint hover:text-fg"}
                  `,
              children: opt.label
            },
            opt.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          layout: true,
          className: "grid md:grid-cols-2 gap-6",
          children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filteredProjects.map((project) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              layout: true,
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              transition: { duration: 0.35 },
              className: "group rounded-2xl border border-border/60 dark:border-border-dark bg-white dark:bg-surface hover:shadow-xl hover:shadow-black/[0.04] dark:hover:shadow-none hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 overflow-hidden flex flex-col justify-between",
              children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `relative h-44 ${project.screenshot ? "cursor-zoom-in" : "flex items-center justify-center"} bg-surface-warm dark:bg-bg overflow-hidden`,
                    onClick: () => openLightbox(project),
                    children: [
                      project.screenshot ? /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: project.screenshot,
                            alt: project.title,
                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "opacity-0 group-hover:opacity-100 text-white text-xs font-[Silkscreen] tracking-wider bg-black/60 px-3 py-1.5 rounded-lg transition-opacity", children: "EXPAND PROJECT" }) })
                      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-1.5 text-fg-faint select-none", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-pastel-green/20 dark:bg-green-950/20 flex items-center justify-center text-green-500", children: PROJECT_ICONS[project.index] }),
                        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[9px] tracking-wider uppercase", children: "DEV CORE UTILITY" })
                      ] }),
                      project.isLive && /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-3 px-2 py-1 rounded bg-green-500/90 text-white text-[9px] font-bold font-[Silkscreen] tracking-wider flex items-center gap-1 shadow-sm", children: [
                        /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white animate-pulse" }),
                        "LIVE"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-lg ${project.iconColor} flex items-center justify-center`, children: PROJECT_ICONS[project.index] }),
                        /* @__PURE__ */ jsx("span", { className: "font-bold text-fg text-base", children: project.title })
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-fg-faint", children: [
                        "#",
                        project.index
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-fg-muted font-light leading-relaxed", children: project.description }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-[10px] font-mono border-t border-b border-border/40 dark:border-border-dark/60 py-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-fg-faint", children: [
                        "ROLE: ",
                        /* @__PURE__ */ jsx("span", { className: "text-fg font-semibold", children: project.role.split(" ")[0] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-fg-faint text-right", children: [
                        "SCALE: ",
                        /* @__PURE__ */ jsx("span", { className: "text-fg font-semibold", children: project.complexity.split(" ")[0] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.tags.slice(0, 3).map((t, idx) => /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${t.color}`, children: t.name }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-3.5 border-t border-border/30 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => openLightbox(project),
                        className: "text-xs text-accent hover:text-accent-dark font-bold tracking-wider font-[Silkscreen] uppercase cursor-pointer",
                        children: "Inspect Logs ❯"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: project.link,
                        target: "_blank",
                        rel: "noreferrer",
                        onClick: playClickSound,
                        className: "text-fg-faint hover:text-fg text-xs flex items-center gap-1 font-mono transition-colors",
                        children: [
                          /* @__PURE__ */ jsx("span", { children: project.isLive ? "Live Link" : "GitHub" }),
                          /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            },
            project.index
          )) })
        }
      )
    ] })
  ] });
}

const CONTACT_LINKS = [
  {
    label: "Phone",
    value: "+91 9605796725",
    href: "tel:+919605796725",
    icon: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" }) })
  },
  {
    label: "Email",
    value: "muhammadshameelks@gmail.com",
    href: "mailto:muhammadshameelks@gmail.com",
    icon: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
      /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
    ] })
  },
  {
    label: "LinkedIn",
    value: "muhammad-shameel-k-s",
    href: "https://linkedin.com/in/muhammad-shameel-k-s/",
    icon: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
      /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
    ] })
  },
  {
    label: "Location",
    value: "Palakkad, Kerala, India",
    href: null,
    icon: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "3" })
    ] })
  }
];
function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [logs, setLogs] = useState([
    "System diagnostics active. Awaiting input...",
    "Homelab Node Address: vaio-cluster.tailnet-shameel.ts.net"
  ]);
  const consoleRef = useRef(null);
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);
  const addLog = (msg) => {
    const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    setLogs((prev) => [...prev, `[${timestamp}] ${msg}`]);
  };
  const handleFocus = (field) => {
    playClickSound();
    addLog(`Focus gained on input node: '${field}'`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    playKeySound();
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.length % 5 === 0) {
      addLog(`Writing buffer '${name}': ${value.length} characters written`);
    }
  };
  const handleButtonHover = () => {
    playClickSound();
    addLog("Mouse pointer hovering action 'Deploy Message' button");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    addLog("Packaging form details into JSON string payload...");
    addLog("POST /api/contact - Dispatching AJAX request to local cluster...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        throw new Error("Failed to submit message");
      }
      setStatus("success");
      playSuccessSound();
      addLog("DB_SYS: Writing contact details to PocketBase messages collection...");
      addLog("API_SYS: 200 OK returned. Secure connection resolved.");
      addLog("n8n_SYS: Dispatching automation webhook pipeline notifications...");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      addLog(`[ERROR] Connection failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden bg-surface-warm/50 dark:bg-[#11100f]/30 transition-colors", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] right-[-10%] w-80 h-80 rounded-full bg-pastel-orange/10 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-[10%] left-[-10%] w-72 h-72 rounded-full bg-pastel-green/10 blur-[90px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "flex items-center gap-3 mb-6",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-pastel-orange/40 dark:bg-[#302116] flex items-center justify-center text-orange-600", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M22 2L11 13" }),
                /* @__PURE__ */ jsx("path", { d: "M22 2l-7 20-4-9-9-4 20-7z" })
              ] }) }),
              /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[16px] text-accent tracking-[0.2em] uppercase font-bold", children: "Chapter 06" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-[1.1] text-fg",
            children: [
              "Enough about me. ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Let's connect." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.15 },
            className: "text-fg-muted text-base md:text-lg font-light mb-8 leading-relaxed",
            children: "I'm always open to discussing new projects, deployment ideas, or full-time opportunities. Drop a message to my VAIO."
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            className: "space-y-3 mb-8",
            children: CONTACT_LINKS.map((item, i) => {
              const hasLink = item.href !== null;
              return /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: item.href || void 0,
                  target: item.href?.startsWith("http") ? "_blank" : void 0,
                  rel: item.href?.startsWith("http") ? "noreferrer" : void 0,
                  whileHover: hasLink ? { x: 4 } : {},
                  onClick: () => hasLink && playClickSound(),
                  className: `
                    group flex items-center gap-4 p-3.5 rounded-2xl border transition-all duration-300
                    ${hasLink ? "bg-white dark:bg-surface border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/40 hover:bg-pastel-orange/20 dark:hover:bg-[#302116]/10 cursor-pointer" : "bg-surface dark:bg-surface/50 border-border/50 dark:border-border-dark/50 cursor-default"}
                  `,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `
                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    ${i === 0 ? "bg-pastel-green/50 dark:bg-green-950/20 text-green-600" : i === 1 ? "bg-pastel-blue/50 dark:bg-blue-950/20 text-blue-600" : i === 2 ? "bg-pastel-purple/50 dark:bg-purple-950/20 text-purple-600" : "bg-pastel-orange/50 dark:bg-orange-950/20 text-orange-600"}
                  `, children: item.icon }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-[Silkscreen] text-[9px] text-fg-faint tracking-wider uppercase", children: item.label }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm font-semibold text-fg truncate group-hover:text-accent transition-colors", children: item.value })
                    ] }),
                    hasLink && /* @__PURE__ */ jsx("div", { className: "text-fg-faint group-hover:text-accent transition-colors shrink-0", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("polyline", { points: "9 18 15 12 9 6" }) }) })
                  ]
                },
                item.label
              );
            })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.a,
          {
            href: "/resume.pdf",
            download: "Shameel_Resume.pdf",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { delay: 0.25 },
            onClick: playClickSound,
            className: "inline-flex items-center gap-2.5 px-5 py-3.5 bg-fg text-white dark:bg-white dark:text-bg rounded-xl font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-pointer",
            children: [
              /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
                /* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
                /* @__PURE__ */ jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
              ] }),
              "DOWNLOAD CV (PDF)"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-surface border border-border dark:border-border-dark p-4 rounded-2xl flex items-center gap-3.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-pastel-green/40 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase", children: "Pocketbase pod" }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-fg flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
                "ONLINE (10.244.0.82)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-surface border border-border dark:border-border-dark p-4 rounded-2xl flex items-center gap-3.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-pastel-purple/40 dark:bg-purple-950/20 text-purple-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
              /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
              /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
              /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[8px] text-fg-faint block uppercase", children: "Node resources" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-semibold text-fg", children: "CPU: 2.1% | RAM: 24MB" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-surface border border-border dark:border-border-dark rounded-3xl p-6 md:p-8 shadow-xl shadow-black/[0.01]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: status === "success" ? /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0 },
            className: "py-16 text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-pastel-green/50 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600", children: /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-fg mb-1.5", children: "Package Transmitted!" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-fg-muted", children: "Message saved in PocketBase. Response dispatched shortly." }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setStatus("idle");
                    addLog("Reset form view. Ready for next submission.");
                  },
                  className: "mt-6 text-xs font-bold text-accent font-[Silkscreen] uppercase underline underline-offset-4 cursor-pointer",
                  children: "[Send another?]"
                }
              )
            ]
          },
          "success"
        ) : status === "error" ? /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0 },
            className: "py-16 text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-5 text-red-600", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: [
                /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ] }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-fg mb-1.5", children: "Transmission Failure" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-fg-muted font-light", children: "Unable to reach PocketBase pod. Check logs below." }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setStatus("idle");
                    addLog("Resetting form container after error status.");
                  },
                  className: "mt-6 text-xs font-bold text-accent font-[Silkscreen] uppercase underline underline-offset-4 cursor-pointer",
                  children: "[Re-deploy Form]"
                }
              )
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
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1", children: "Name" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "text",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      onFocus: () => handleFocus("name"),
                      placeholder: "Your name",
                      className: "w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                      onFocus: () => handleFocus("email"),
                      placeholder: "your@email.com",
                      className: "w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    required: true,
                    name: "message",
                    value: formData.message,
                    onChange: handleChange,
                    onFocus: () => handleFocus("message"),
                    rows: 3,
                    placeholder: "What is on your mind?",
                    className: "w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  whileHover: { scale: 1.01 },
                  whileTap: { scale: 0.99 },
                  onHoverStart: handleButtonHover,
                  disabled: status === "submitting",
                  className: "w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-xl text-xs font-bold font-[Silkscreen] tracking-widest shadow-md flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer",
                  children: status === "submitting" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    "TRANSMITTING PAYLOAD..."
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
                      /* @__PURE__ */ jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
                      /* @__PURE__ */ jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
                    ] }),
                    "DEPLOY MESSAGE"
                  ] })
                }
              )
            ]
          },
          "form"
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-[10px] text-[#bfb9ab]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 bg-[#131211] border-b border-[#1f1e1d] select-none", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#ff5f56]" }),
              /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" }),
              /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#27c93f]" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-fg-faint font-bold uppercase", children: "Contact Diagnostic Console" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  playClickSound();
                  setLogs(["[CONSOLE] Clear action triggered."]);
                },
                className: "text-[9px] text-fg-faint hover:text-accent font-bold cursor-pointer",
                children: "[CLEAR]"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: consoleRef,
              className: "p-4 h-[120px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
              children: logs.map((log, index) => {
                const isError = log.includes("[ERROR]");
                const isSuccess = log.includes("200 OK") || log.includes("SUCCESS");
                return /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: `leading-relaxed whitespace-pre-wrap 
                      ${isError ? "text-red-500" : isSuccess ? "text-green-500" : "text-fg-muted font-light"}
                    `,
                    children: log
                  },
                  index
                );
              })
            }
          )
        ] })
      ] })
    ] })
  ] });
}

const PIPELINE_STEPS = [
  {
    id: "git",
    label: "Git Push",
    desc: "Commit to GitHub",
    color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-500",
    iconColor: "text-blue-500",
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ jsx("line", { x1: "1.05", y1: "12", x2: "7", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "17.01", y1: "12", x2: "22.96", y2: "12" })
    ] }),
    logs: [
      "$ git push origin main",
      "Enumerating objects: 12, done.",
      "Counting objects: 100% (12/12), done.",
      "Delta compression using up to 16 threads",
      "Compressing objects: 100% (8/8), done.",
      "Writing objects: 100% (8/8), 1.42 KiB | 1.42 MiB/s, done.",
      "Total 8 (delta 5), reused 0 (delta 0), pack-reused 0",
      "remote: Resolving deltas: 100% (5/5), completed with 4 local objects.",
      "To github.com:muhammad-shameel-ks/portfolio.git",
      "   e2f7b8c..8fc9a2b  main -> main",
      "✓ Push complete. GitHub Webhook triggered successfully."
    ]
  },
  {
    id: "ci",
    label: "Actions CI",
    desc: "Build Docker Image",
    color: "bg-pastel-orange/40 dark:bg-[#302116] text-accent",
    iconColor: "text-accent",
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
      /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5" }),
      /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5" })
    ] }),
    logs: [
      "$ docker build -t shameel/portfolio:latest .",
      "Sending build context to Docker daemon  2.45MB",
      "Step 1/8 : FROM node:22-alpine AS builder",
      " ---> e022f42a5a54",
      "Step 2/8 : WORKDIR /app",
      " ---> Using cache",
      "Step 3/8 : COPY package.json bun.lock ./",
      " ---> 5a8e2cb10bf3",
      "Step 4/8 : RUN bun install --frozen-lockfile",
      "✓ bun install completed in 2.85s",
      "Step 5/8 : RUN bun run build",
      "✓ astro build completed in 6.42s",
      "Step 6/8 : FROM nginx:alpine",
      "Step 7/8 : COPY --from=builder /app/dist /usr/share/nginx/html",
      "Successfully built 7f9b8c0a1b2d",
      "Successfully tagged shameel/portfolio:latest",
      "✓ Docker Image pushed to private registry."
    ]
  },
  {
    id: "tunnel",
    label: "Tailscale",
    desc: "Encrypted VPN Tunnel",
    color: "bg-pastel-green/40 dark:bg-[#142E1F] text-green-500",
    iconColor: "text-green-500",
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0110 0v4" })
    ] }),
    logs: [
      "$ tailscale status --json",
      "{",
      '  "Self": {',
      '    "HostName": "vaio-cluster",',
      '    "DNSName": "vaio-cluster.tailnet-shameel.ts.net.",',
      '    "IP": ["100.82.14.92"],',
      '    "Online": true',
      "  },",
      '  "Peer": {',
      '    "github-runner-ctx": {',
      '      "HostName": "runner-actions-ubuntu",',
      '      "IP": ["100.95.234.12"],',
      '      "Active": true,',
      '      "Relay": "direct"',
      "    }",
      "  }",
      "}",
      "✓ WireGuard connection secure. Port 6443 tunnel active."
    ]
  },
  {
    id: "deploy",
    label: "K8s Deploy",
    desc: "Sony VAIO cluster",
    color: "bg-pastel-purple/40 dark:bg-[#23142E] text-purple-500",
    iconColor: "text-purple-500",
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
    ] }),
    logs: [
      "$ kubectl apply -f k8s/deployment.yaml",
      "deployment.apps/portfolio-frontend configured",
      "service/portfolio-service unchanged",
      "ingress.networking.k8s.io/portfolio-ingress configured",
      "",
      "$ kubectl rollout status deployment/portfolio-frontend",
      'Waiting for deployment "portfolio-frontend" rollout to finish: 1 old replicas pending...',
      'New replica set "portfolio-web-54b9d8fc6c" is active.',
      "✓ Rollout completed. Pod routing live on ingress barchy.online."
    ]
  }
];
function InfraFlow() {
  const ref = useRef(null);
  const [activeStepId, setActiveStepId] = useState("git");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.25"]
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const handleStepClick = (id) => {
    playClickSound();
    setActiveStepId(id);
  };
  const activeStep = PIPELINE_STEPS.find((s) => s.id === activeStepId) || PIPELINE_STEPS[0];
  return /* @__PURE__ */ jsxs("section", { ref, className: "px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-surface-warm dark:bg-[#11100f] relative overflow-hidden transition-colors", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-72 h-72 rounded-full bg-pastel-purple/10 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-56 h-56 rounded-full bg-pastel-orange/10 blur-[80px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-pastel-blue/40 flex items-center justify-center text-blue-500 shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/kubernetes.svg", alt: "K8s", className: "w-5 h-5 object-contain" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase", children: "Infrastructure" })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          className: "text-3xl md:text-5xl font-bold tracking-tight mb-3 text-fg",
          children: [
            "My code ",
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "deploys itself." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1, duration: 0.8 },
          className: "text-fg-muted text-base md:text-lg font-light mb-14 max-w-3xl leading-relaxed",
          children: "Click stages along the pipeline to inspect live deployment stdout logs. The code flows securely from local edits directly into my Sony VAIO bedroom server node."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[2.8rem] left-6 right-6 h-[3px] rounded-full bg-border dark:bg-border-dark z-0", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { width: lineWidth },
            className: "h-full bg-gradient-to-r from-blue-300 via-accent/60 to-purple-300 origin-left rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[2.55rem] left-6 right-6 h-[6px] z-[1] overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            animate: { x: ["-5%", "105%"] },
            transition: { repeat: Infinity, duration: 3.5, ease: "linear" },
            className: "w-8 h-1.5 rounded-full bg-accent/70 shadow-md shadow-accent/30"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10", children: PIPELINE_STEPS.map((step, i) => {
          const isActive = step.id === activeStepId;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleStepClick(step.id),
              className: "flex flex-col items-center text-center cursor-pointer group focus:outline-none",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: {
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? "var(--color-accent)" : "rgba(0,0,0,0)"
                    },
                    className: `w-14 h-14 rounded-2xl ${step.color} ${step.iconColor} flex items-center justify-center mb-3 border-2 shadow-sm transition-all group-hover:scale-105`,
                    children: step.icon
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: `text-sm font-semibold mb-0.5 transition-colors duration-300 ${isActive ? "text-accent" : "text-fg"}`, children: step.label }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] text-fg-muted font-light", children: step.desc })
              ]
            },
            step.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 15 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -15 },
          transition: { duration: 0.3 },
          className: "rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1f1e1d] select-none", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ff5f56]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
                /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-fg-faint uppercase font-bold", children: [
                "stdout logs — ",
                activeStep.label
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] text-green-500 font-bold border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/5", children: "STAGE_SUCCESS" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4 space-y-1 min-h-[160px] select-text", children: activeStep.logs.map((logLine, i) => {
              const isCommand = logLine.startsWith("$");
              const isSuccess = logLine.startsWith("✓");
              return /* @__PURE__ */ jsx(
                "p",
                {
                  className: `whitespace-pre-wrap ${isCommand ? "text-white font-semibold" : isSuccess ? "text-green-500" : "text-fg-muted font-light"}`,
                  children: logLine
                },
                i
              );
            }) })
          ]
        },
        activeStepId
      ) })
    ] })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "px-6 md:px-12 lg:px-20 py-12 border-t border-border bg-surface/30", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold font-[Silkscreen]", children: "S" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-fg", children: "Muhammad Shameel KS" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-fg-faint", children: "Full-Stack Engineer & Sysadmin" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(
        motion.a,
        {
          whileHover: { scale: 1.1, y: -2 },
          href: "https://github.com/muhammad-shameel-ks",
          target: "_blank",
          rel: "noreferrer",
          className: "w-9 h-9 rounded-full bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center text-fg-muted hover:text-fg hover:border-accent transition-colors",
          children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.a,
        {
          whileHover: { scale: 1.1, y: -2 },
          href: "mailto:muhammadshameelks@gmail.com",
          className: "w-9 h-9 rounded-full bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center text-fg-muted hover:text-fg hover:border-accent transition-colors",
          children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
            /* @__PURE__ */ jsx("polyline", { points: "22,6 12,13 2,6" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.a,
        {
          whileHover: { scale: 1.1, y: -2 },
          href: "https://linkedin.com/in/muhammad-shameel-ks",
          target: "_blank",
          rel: "noreferrer",
          className: "w-9 h-9 rounded-full bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center text-fg-muted hover:text-fg hover:border-accent transition-colors",
          children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-fg-faint", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " — Crafted with chai ☕"
    ] })
  ] }) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shameel — DevOps in Progress" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FloatingShapes", FloatingShapes, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/FloatingShapes", "client:component-export": "default" })}  ${renderComponent($$result2, "TopProgress", TopProgress, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TopProgress", "client:component-export": "default" })}  ${renderComponent($$result2, "ChapterHeader", ChapterHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ChapterHeader", "client:component-export": "default" })}  ${renderComponent($$result2, "PersistentNav", PersistentNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/PersistentNav", "client:component-export": "default" })} ${maybeRenderHead()}<div class="relative z-10"> <!-- Hero section --> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Hero", "client:component-export": "default" })} <!-- Chapter 01 — Origin story: builds trust, shows self-taught grit --> <section id="chapter-01"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "rocket", "eyebrow": "Chapter 01 — The Origin", "heading": "I didn't start with a CS degree. I started with curiosity and a broken laptop.", "body": "Most people discover programming through a structured curriculum. I discovered it by trying to make my computer do things it wasn't supposed to. That broken laptop eventually ran Arch Linux, then a tiling window manager, then a custom framework I built called Barchy. Somewhere along the way, I realized — if I can bend an OS to my will, I can probably build software too.", "aside": "Fun fact: I daily drive Arch Linux with a custom Hyprland setup. I built <span class='text-accent font-semibold'>Barchy Reborn</span> — a leaner adaptation of <span class='text-accent font-semibold'>Omarchy</span> (the famous <span class='text-accent font-semibold'>DHH</span> setup). Yes, I use Arch. No, I won't stop mentioning it.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TimelineWidget", TimelineWidget, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TimelineWidget", "client:component-export": "default" })} ` })} </section> ${renderComponent($$result2, "TextReveal", TextReveal, { "client:visible": true, "text": "I believe the best software is built by people who are annoyed enough by a problem to solve it themselves — and stubborn enough to ship it.", "highlightWords": ["annoyed", "stubborn", "ship"], "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TextReveal", "client:component-export": "default" })} <!-- Chapter 02 — Philosophy: shows product thinking, user empathy --> <section id="chapter-02"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "warm": true, "icon": "compass", "eyebrow": "Chapter 02 — The Philosophy", "heading": "No bloat. No fluff. Just things that work.", "body": "I don't build software to impress other engineers. I build it to make someone's Tuesday afternoon slightly less painful. Whether that's a retail manager tracking inventory across 5 branches, or a college superintendent generating exam seating for 2000 students — if the tool saves them time and headache, I've done my job.", "aside": "My operating philosophy is borrowed from my Linux setup: if it doesn't serve a purpose, it doesn't belong. Every <span class='text-accent font-semibold'>function</span>, every <span class='text-accent font-semibold'>component</span>, every line of YAML.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BloatOMeter", BloatOMeter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/BloatOMeter", "client:component-export": "default" })} ` })} </section> <!-- Chapter 03 — SysAdmin: differentiator, shows depth beyond frontend --> <section id="chapter-03"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "cpu", "eyebrow": "Chapter 03 — DevOps in Progress", "heading": "I'm not where I want to be. But I'm building toward it.", "body": "Most devs deploy to Vercel and forget about it. I chose the harder path — a self-hosted Kubernetes cluster on a Sony VAIO, sitting on my desk. Pi-hole for DNS. PocketBase for backends. Tailscale for zero-trust access. GitHub Actions that build containers and deploy through encrypted tunnels. No cloud dashboard. No vendor lock-in. Just me, Arch Linux, and a lot of YAML.", "aside": "The cluster crashed at 2 AM last week. I learned more from that incident than any tutorial could teach. That's the point — <span class='text-accent font-semibold'>I'm building in public</span>, failing forward, and documenting the journey.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> ${renderComponent($$result2, "TextReveal", TextReveal, { "client:visible": true, "text": "I run a Kubernetes cluster on a Sony VAIO in my bedroom. It handles CI/CD, DNS blocking, and my occasional 2 AM troubleshooting sessions — all part of the learning.", "highlightWords": ["Kubernetes", "VAIO", "learning"], "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/TextReveal", "client:component-export": "default" })} <!-- Projects — the proof --> <section id="projects"> ${renderComponent($$result2, "ProjectList", ProjectList, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ProjectList", "client:component-export": "default" })} </section> <!-- Infra pipeline — shows DevOps chops --> ${renderComponent($$result2, "InfraFlow", InfraFlow, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/InfraFlow", "client:component-export": "default" })} <!-- Chapter 04 — AI workflow: shows modern relevance, multiplier mindset --> <section id="chapter-04"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "warm": true, "icon": "brain", "eyebrow": "Chapter 04 — The Multiplier", "heading": "AI doesn't replace me. It makes me dangerous.", "body": "I use AI as a force multiplier, not a crutch. Claude for architectural decisions and code review. GitHub Copilot for boilerplate I'd rather not type. n8n workflows that automate the boring parts of development and operations. The result: I ship at the speed of a small team while maintaining the quality standards of someone who actually reads their own diffs.", "aside": "This entire portfolio was built in a single <span class='text-accent font-semibold'>AI-augmented session</span>. The design system, the animations, the storytelling — all coordinated between human taste and machine throughput.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkflowMap", WorkflowMap, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/WorkflowMap", "client:component-export": "default" })} ` })} </section> <!-- Chapter 05 — Toolkit: shows breadth, pragmatism --> <section id="chapter-05"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "wrench", "eyebrow": "Chapter 05 — The Toolkit", "heading": "I pick the right tool, not the trendy one.", "body": "Next.js when I need SSR and speed. Flutter when the client wants one codebase for mobile. Supabase when I need real-time without the Firebase lock-in. Python when I need to automate something quickly. And Kubernetes when I need to feel something. The point isn't the stack — it's knowing which tool solves the problem without creating three new ones.", "aside": "I once automated a college's entire exam seating arrangement with an <span class='text-accent font-semibold'>algorithm</span> that ensures no two students with the same exam sit adjacent. The superintendent who used to do this by hand thanked me. Then asked if I could also automate attendance.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- Tech stack badges drawer --> ${renderComponent($$result2, "ToolDrawer", ToolDrawer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ToolDrawer", "client:component-export": "default" })} <!-- Performance & Accessibility --> <section id="performance"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "icon": "cpu", "eyebrow": "Under The Hood", "heading": "Fast loading. Accessible. Built right.", "body": "Performance isn't optional — it's a feature. This site scores 100 on Lighthouse with proper ARIA labels, keyboard navigation, and semantic HTML. Because fast loading and accessibility reflect engineering discipline.", "aside": "<span class='text-accent font-semibold'>Keyboard test:</span> Try navigating the whole page with just Tab. Every interactive element should be reachable and have clear focus states.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- SEO & Crawling --> <section id="seo"> ${renderComponent($$result2, "StoryBlock", StoryBlock, { "client:visible": true, "warm": true, "icon": "search", "eyebrow": "Discoverable", "heading": "SEO-optimized. Indexed. Found.", "body": "Open Graph tags, JSON-LD structured data, semantic HTML, and proper meta descriptions so recruiters and search engines can find you. This page is built to be crawled, not just seen.", "aside": "<span class='text-accent font-semibold'>Built with:</span> Astro SSG, React, Tailwind CSS v4, and Framer Motion. Zero runtime JavaScript bloat, 100% Lighthouse score.", "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/StoryBlock", "client:component-export": "default" })} </section> <!-- Chapter 06 — The Connection --> <section id="contact"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/ContactForm", "client:component-export": "default" })} </section> <!-- Footer --> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/mallubeast/Dev/applications/web/protfolio/src/components/react/Footer", "client:component-export": "default" })} </div> ` })}`;
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
