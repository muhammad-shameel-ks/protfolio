import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const tools = [
  "Next.js", "Flutter", "TypeScript", "Supabase", "PostgreSQL", "Python",
  "Docker", "Kubernetes", "Tailwind CSS", "Node.js", "React", "MSSQL",
  "GitHub Actions", "Cloudflare", "Tailscale", "Arch Linux", "Hyprland", "n8n"
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  return (
    <div ref={ref} className="py-20 md:py-28 overflow-hidden border-y border-border">
      {/* Row 1 — moves left */}
      <motion.div style={{ x: x1 }} className="flex gap-4 mb-4 whitespace-nowrap">
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={`a-${i}`}
            className="px-5 py-2.5 text-sm font-medium text-fg-muted border border-border rounded-full shrink-0 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {tool}
          </span>
        ))}
      </motion.div>

      {/* Row 2 — moves right */}
      <motion.div style={{ x: x2 }} className="flex gap-4 whitespace-nowrap">
        {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, i) => (
          <span
            key={`b-${i}`}
            className="px-5 py-2.5 text-sm font-medium text-fg-muted border border-border rounded-full shrink-0 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}