import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const tools = [
  { name: "React", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/reactjs.svg" },
  { name: "Next.js", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/nextjs-light.svg" },
  { name: "TypeScript", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/typescript.svg" },
  { name: "Flutter", color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/flutter.svg" },
  { name: "Supabase", color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/supabase.svg" },
  { name: "PostgreSQL", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/postgresql.svg" },
  { name: "Python", color: "bg-pastel-yellow/50 text-yellow-700 border-yellow-100/80", icon: "/python.svg" },
  { name: "Docker", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/docker-engine.svg" },
  { name: "Kubernetes", color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/kubernetes.svg" },
  { name: "Tailwind CSS", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/tailwind.svg" },
  { name: "Node.js", color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/nodejs.svg" },
  { name: "MSSQL", color: "bg-pastel-orange/50 text-orange-600 border-orange-100/80", icon: "/microsoft-sql-server.svg" },
  { name: "GitHub Actions", color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/github-light.svg" },
  { name: "Cloudflare", color: "bg-pastel-orange/50 text-orange-600 border-orange-100/80", icon: "/cloudflare.svg" },
  { name: "Tailscale", color: "bg-pastel-green/50 text-green-600 border-green-100/80", icon: "/tailscale-light.svg" },
  { name: "Arch Linux", color: "bg-pastel-blue/50 text-blue-600 border-blue-100/80", icon: "/arch-linux.svg" },
  { name: "Hyprland", color: "bg-pastel-purple/50 text-purple-600 border-purple-100/80", icon: "/hyprland.svg" },
  { name: "n8n", color: "bg-pastel-pink/50 text-pink-600 border-pink-100/80", icon: "/n8n.svg" },
];

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
      {/* Decorative blobs — muted */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pastel-orange/12 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-pastel-purple/12 blur-[80px]" />

      {/* Section label */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <motion.div
          whileHover={{ rotate: -8 }}
          className="w-10 h-10 rounded-xl bg-pastel-blue/40 flex items-center justify-center text-blue-500 shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </motion.div>
        <span className="font-[Silkscreen] text-[15px] text-accent tracking-widest uppercase">
          The Stack
        </span>
      </div>

      {/* Row 1 — moves left */}
      <motion.div style={{ x: x1 }} className="flex gap-3 mb-4 whitespace-nowrap">
        {doubled.map((tool, i) => (
          <motion.span
            key={`a-${i}`}
            whileHover={{ scale: 1.08, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`inline-flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold rounded-full border shrink-0 cursor-default shadow-sm shadow-black/[0.02] ${tool.color}`}
          >
            <img src={tool.icon} alt="" className="w-4 h-4 object-contain" />
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
            className={`inline-flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold rounded-full border shrink-0 cursor-default shadow-sm shadow-black/[0.02] ${tool.color}`}
          >
            <img src={tool.icon} alt="" className="w-4 h-4 object-contain" />
            {tool.name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}