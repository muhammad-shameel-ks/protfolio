import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const tools = [
  { name: "Next.js", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Flutter", color: "bg-pastel-purple text-purple-800 border-purple-200" },
  { name: "TypeScript", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Supabase", color: "bg-pastel-green text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Python", color: "bg-pastel-yellow text-yellow-800 border-yellow-200" },
  { name: "Docker", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Kubernetes", color: "bg-pastel-purple text-purple-800 border-purple-200" },
  { name: "Tailwind CSS", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Node.js", color: "bg-pastel-green text-green-800 border-green-200" },
  { name: "React", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "MSSQL", color: "bg-pastel-orange text-orange-800 border-orange-200" },
  { name: "GitHub Actions", color: "bg-pastel-purple text-purple-800 border-purple-200" },
  { name: "Cloudflare", color: "bg-pastel-orange text-orange-800 border-orange-200" },
  { name: "Tailscale", color: "bg-pastel-green text-green-800 border-green-200" },
  { name: "Arch Linux", color: "bg-pastel-blue text-blue-800 border-blue-200" },
  { name: "Hyprland", color: "bg-pastel-purple text-purple-800 border-purple-200" },
  { name: "n8n", color: "bg-pastel-pink text-pink-800 border-pink-200" },
];

// SVG icons for some of the tools
const toolIcons: Record<string, React.ReactNode> = {
  "Next.js": <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.75 14.41L10 7.55v8.7h1.2V10.2l5.27 7.07 .28-.86z"/></svg>,
  "TypeScript": <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 3v18h22V3H1zm14.7 14.25c-.65 1.08-1.8 1.54-3.1 1.54-1.48 0-2.55-.62-3.24-1.57l1.44-1.04c.5.73 1.04 1.22 2.04 1.22.73 0 1.35-.37 1.35-.97 0-.68-.56-.93-1.5-1.33l-.53-.22c-1.49-.63-2.48-1.43-2.48-3.1 0-1.55 1.18-2.72 3.02-2.72 1.31 0 2.25.46 2.93 1.65l-1.42.97c-.38-.6-.72-.93-1.5-.93-.68 0-1.12.43-1.12.93 0 .65.43.93 1.44 1.33l.53.22c1.75.75 2.75 1.52 2.75 3.24-.01 1.84-1.45 2.84-3.6 2.77z"/></svg>,
  "Docker": <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186"/></svg>,
  "Python": <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.5 0-2.77.28-3.8.75C6.88 3.3 6 4.25 6 5.5V8h6v1H5.5C3.6 9 2 10.6 2 12.95c0 2.35 1.6 4.55 3.5 4.55H7v-2.7c0-1.9 1.63-3.8 3.5-3.8h5c1.38 0 2.5-1.25 2.5-2.5V5.5c0-1.25-1.12-2.33-2.5-2.78C14.5 2.28 13.3 2 12 2zM9.5 4a1 1 0 110 2 1 1 0 010-2z"/></svg>,
};

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  const doubled = [...tools, ...tools];
  const reversed = [...tools.slice().reverse(), ...tools.slice().reverse()];

  return (
    <div ref={ref} className="py-20 md:py-28 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pastel-orange/20 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-pastel-purple/20 blur-[80px]" />

      {/* Row 1 — moves left */}
      <motion.div style={{ x: x1 }} className="flex gap-3 mb-4 whitespace-nowrap">
        {doubled.map((tool, i) => (
          <motion.span
            key={`a-${i}`}
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-full border shrink-0 cursor-default shadow-sm ${tool.color}`}
          >
            {toolIcons[tool.name] && <span className="opacity-60">{toolIcons[tool.name]}</span>}
            {tool.name}
          </motion.span>
        ))}
      </motion.div>

      {/* Row 2 — moves right */}
      <motion.div style={{ x: x2 }} className="flex gap-3 whitespace-nowrap">
        {reversed.map((tool, i) => (
          <motion.span
            key={`b-${i}`}
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-full border shrink-0 cursor-default shadow-sm ${tool.color}`}
          >
            {toolIcons[tool.name] && <span className="opacity-60">{toolIcons[tool.name]}</span>}
            {tool.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}