/**
 * Pipeline step definitions — single source of truth for the
 * DevOps pipeline visualization.
 */

import { GitBranch, Boxes, ShieldCheck, Server } from "lucide-react";

export interface PipelineStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeType: "blue" | "orange" | "green" | "purple";
  icon: React.ComponentType<{ className?: string }>;
  color: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    ring: string;
  };
  command: string;
  logs: { text: string; status?: "success" | "info" | "highlight" }[];
  description: string;
}

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "git",
    number: "01",
    title: "Git Push",
    subtitle: "Code to GitHub",
    badge: "TRIGGER",
    badgeType: "blue",
    icon: GitBranch,
    color: {
      bg: "bg-pastel-blue/60",
      border: "border-blue-200",
      text: "text-blue-600",
      accent: "#3B82F6",
      ring: "ring-blue-400/40",
    },
    command: 'git commit -m "feat: optimize pipeline" && git push origin main',
    logs: [
      { text: "Counting objects: 8, done.", status: "info" },
      {
        text: "Writing objects: 100% (8/8), 2.41 KiB | 2.41 MiB/s",
        status: "info",
      },
      {
        text: "Pushed to origin/main [commit SHA: 8e3f91a]",
        status: "success",
      },
      {
        text: "Webhook dispatched -> GitHub Actions Runner",
        status: "highlight",
      },
    ],
    description:
      "Code is pushed to GitHub, instantly triggering the CI/CD pipeline via encrypted webhooks.",
  },
  {
    id: "ci",
    number: "02",
    title: "Actions CI",
    subtitle: "Build & Test Container",
    badge: "BUILD & TEST",
    badgeType: "orange",
    icon: Boxes,
    color: {
      bg: "bg-pastel-orange/60",
      border: "border-orange-200",
      text: "text-accent",
      accent: "#E8613C",
      ring: "ring-orange-400/40",
    },
    command:
      "docker buildx build --platform linux/amd64,linux/arm64 -t registry:latest .",
    logs: [
      {
        text: "Running linter & TypeScript typecheck... 0 errors",
        status: "success",
      },
      { text: "Compiling multi-stage production container", status: "info" },
      { text: "Compressing layers & generating security SBOM", status: "info" },
      {
        text: "Image published to registry: ghcr.io/shameel/app:8e3f91a",
        status: "success",
      },
    ],
    description:
      "Automated runner validates types, executes tests, and builds a lightweight production image.",
  },
  {
    id: "tunnel",
    number: "03",
    title: "Tailscale Mesh",
    subtitle: "Encrypted WireGuard",
    badge: "ZERO-TRUST",
    badgeType: "green",
    icon: ShieldCheck,
    color: {
      bg: "bg-pastel-green/60",
      border: "border-emerald-200",
      text: "text-emerald-600",
      accent: "#10B981",
      ring: "ring-emerald-400/40",
    },
    command: "tailscale status --peers=false && tailscale ping node-vaio",
    logs: [
      {
        text: "Authenticating ephemeral runner via WireGuard mesh",
        status: "info",
      },
      {
        text: "Connecting to node-vaio (100.84.192.12) via DERP(blr)",
        status: "info",
      },
      {
        text: "CGNAT bypassed safely without opening public ports",
        status: "success",
      },
      {
        text: "P2P encrypted tunnel established (18ms latency)",
        status: "success",
      },
    ],
    description:
      "Direct zero-trust WireGuard tunnel traverses CGNAT directly to the Sony VAIO node safely.",
  },
  {
    id: "k8s",
    number: "04",
    title: "K8s Deploy",
    subtitle: "Home Cluster Rollout",
    badge: "CONTINUOUS CD",
    badgeType: "purple",
    icon: Server,
    color: {
      bg: "bg-pastel-purple/60",
      border: "border-purple-200",
      text: "text-purple-600",
      accent: "#8B5CF6",
      ring: "ring-purple-400/40",
    },
    command: "kubectl rollout restart deployment/homelab-app -n prod",
    logs: [
      {
        text: "Orchestrating rolling restart on Sony VAIO K3s node",
        status: "info",
      },
      {
        text: "Spawning new Pods & passing HTTP health checks",
        status: "info",
      },
      {
        text: "Traffic shifted seamlessly (0s downtime observed)",
        status: "success",
      },
      {
        text: "Rollout complete: pod/homelab-app-7d9f8 is LIVE",
        status: "highlight",
      },
    ],
    description:
      "Kubernetes performs a rolling zero-downtime deployment, verifying probes before routing traffic.",
  },
];
