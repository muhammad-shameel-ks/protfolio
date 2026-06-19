import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { playClickSound, playSuccessSound } from './SoundSystem';

interface PipelineStep {
  id: string;
  label: string;
  desc: string;
  color: string;
  iconColor: string;
  icon: React.ReactNode;
  logs: string[];
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "git",
    label: "Git Push",
    desc: "Commit to GitHub",
    color: "bg-pastel-blue/40 dark:bg-[#14222E] text-blue-500",
    iconColor: "text-blue-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>
      </svg>
    ),
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    logs: [
      "$ tailscale status --json",
      "{",
      "  \"Self\": {",
      "    \"HostName\": \"vaio-cluster\",",
      "    \"DNSName\": \"vaio-cluster.tailnet-shameel.ts.net.\",",
      "    \"IP\": [\"100.82.14.92\"],",
      "    \"Online\": true",
      "  },",
      "  \"Peer\": {",
      "    \"github-runner-ctx\": {",
      "      \"HostName\": \"runner-actions-ubuntu\",",
      "      \"IP\": [\"100.95.234.12\"],",
      "      \"Active\": true,",
      "      \"Relay\": \"direct\"",
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    logs: [
      "$ kubectl apply -f k8s/deployment.yaml",
      "deployment.apps/portfolio-frontend configured",
      "service/portfolio-service unchanged",
      "ingress.networking.k8s.io/portfolio-ingress configured",
      "",
      "$ kubectl rollout status deployment/portfolio-frontend",
      "Waiting for deployment \"portfolio-frontend\" rollout to finish: 1 old replicas pending...",
      "New replica set \"portfolio-web-54b9d8fc6c\" is active.",
      "✓ Rollout completed. Pod routing live on ingress barchy.online."
    ]
  }
];

export default function InfraFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStepId, setActiveStepId] = useState("git");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.25"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleStepClick = (id: string) => {
    playClickSound();
    setActiveStepId(id);
  };

  const activeStep = PIPELINE_STEPS.find(s => s.id === activeStepId) || PIPELINE_STEPS[0];

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-20 md:py-32 bg-surface-warm dark:bg-[#11100f] relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-pastel-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-pastel-orange/10 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-pastel-blue/40 flex items-center justify-center text-blue-500 shrink-0">
            <img src="/kubernetes.svg" alt="K8s" className="w-5 h-5 object-contain" />
          </div>
          <span className="font-[Silkscreen] text-[18px] text-accent tracking-widest uppercase">
            Infrastructure
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-fg"
        >
          My code <span className="text-accent">deploys itself.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-fg-muted text-base md:text-lg font-light mb-14 max-w-3xl leading-relaxed"
        >
          Click stages along the pipeline to inspect live deployment stdout logs. The code flows securely from local edits directly into my Sony VAIO bedroom server node.
        </motion.p>

        {/* Pipeline Container */}
        <div className="relative mb-14">
          
          {/* Animated line — desktop */}
          <div className="hidden md:block absolute top-[2.8rem] left-6 right-6 h-[3px] rounded-full bg-border dark:bg-border-dark z-0">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-blue-300 via-accent/60 to-purple-300 origin-left rounded-full"
            />
          </div>

          {/* Traveling dot indicator */}
          <div className="hidden md:block absolute top-[2.55rem] left-6 right-6 h-[6px] z-[1] overflow-hidden">
            <motion.div
              animate={{ x: ["-5%", "105%"] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="w-8 h-1.5 rounded-full bg-accent/70 shadow-md shadow-accent/30"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
            {PIPELINE_STEPS.map((step, i) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className="flex flex-col items-center text-center cursor-pointer group focus:outline-none"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? 'var(--color-accent)' : 'rgba(0,0,0,0)'
                    }}
                    className={`w-14 h-14 rounded-2xl ${step.color} ${step.iconColor} flex items-center justify-center mb-3 border-2 shadow-sm transition-all group-hover:scale-105`}
                  >
                    {step.icon}
                  </motion.div>
                  <span className={`text-sm font-semibold mb-0.5 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-fg'}`}>{step.label}</span>
                  <span className="text-[11px] text-fg-muted font-light">{step.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stdout Console Output */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0]"
          >
            {/* Console Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1f1e1d] select-none">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[10px] text-fg-faint uppercase font-bold">stdout logs — {activeStep.label}</span>
              <span className="text-[9px] text-green-500 font-bold border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/5">STAGE_SUCCESS</span>
            </div>

            {/* Console output display */}
            <div className="p-4 space-y-1 min-h-[160px] select-text">
              {activeStep.logs.map((logLine, i) => {
                const isCommand = logLine.startsWith('$');
                const isSuccess = logLine.startsWith('✓');
                return (
                  <p 
                    key={i} 
                    className={`whitespace-pre-wrap ${isCommand ? 'text-white font-semibold' : isSuccess ? 'text-green-500' : 'text-fg-muted font-light'}`}
                  >
                    {logLine}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}