import { AnimatePresence, motion } from "framer-motion";
import { Play, RotateCcw, Check, Laptop } from "lucide-react";
import { PIPELINE_STEPS } from "../../data/pipeline";
import { usePipelineSimulation } from "../../hooks/usePipelineSimulation";

export default function InfraFlow() {
  const {
    activeStepIndex,
    isSimulating,
    completedSteps,
    currentStep,
    startSimulation,
    selectStep,
    reset,
  } = usePipelineSimulation();

  return (
    <section
      id="infra"
      className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-surface-warm relative overflow-hidden border-t border-b border-border/70"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-pastel-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-pastel-orange/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-pastel-orange/50 border border-orange-200/50 flex items-center justify-center text-accent shadow-xs">
                <img
                  src="/kubernetes.svg"
                  alt="K8s"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="font-[Silkscreen] text-[13px] sm:text-[15px] text-accent tracking-widest uppercase">
                04 - Infrastructure Pipeline
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
              My code <span className="text-accent">deploys itself.</span>
            </h2>
            <p className="text-fg-muted text-base sm:text-lg font-light mt-3 max-w-2xl leading-relaxed">
              Every project above ships through this exact pipeline: a terminal
              commit lands on a Sony VAIO Kubernetes cluster in my room, fully
              automated with GitHub Actions, WireGuard mesh, and zero cloud
              lock-in.
            </p>
          </div>

          {/* Simulation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {isSimulating ? (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Running Stage {activeStepIndex + 1}/4...
              </div>
            ) : (
              <button
                onClick={startSimulation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-fg text-bg hover:bg-accent transition-colors text-xs font-medium shadow-sm hover:shadow-md active:scale-95 duration-150 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Simulate Pipeline Run
              </button>
            )}
            <button
              onClick={reset}
              className="p-2.5 rounded-full bg-white hover:bg-surface border border-border text-fg-muted hover:text-fg transition-colors shadow-2xs active:scale-95 cursor-pointer"
              aria-label="Reset simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pipeline Card */}
        <div className="bg-white rounded-3xl border border-border/80 p-6 md:p-8 shadow-xs relative">
          {/* Status Bar */}
          <div className="flex items-center justify-between border-b border-border/60 pb-5 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                PIPELINE STATUS: HEALTHY
              </span>
              <span className="hidden sm:inline text-xs text-fg-muted font-mono">
                Target: node-vaio (K3s)
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-fg-muted font-mono">
              <span className="hidden sm:inline">
                Click any step to inspect
              </span>
              <span className="px-2 py-0.5 rounded bg-surface text-fg font-semibold border border-border/50">
                {currentStep.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Desktop Timeline */}
          <DesktopTimeline
            activeStepIndex={activeStepIndex}
            completedSteps={completedSteps}
            onSelect={selectStep}
          />

          {/* Mobile Timeline */}
          <MobileTimeline
            activeStepIndex={activeStepIndex}
            completedSteps={completedSteps}
            onSelect={selectStep}
          />

          {/* Terminal */}
          <TerminalDisplay step={currentStep} stepIndex={activeStepIndex} />
        </div>

        {/* Hardware Specs Card */}
        <HardwareSpecs />
      </div>
    </section>
  );
}

// ── Desktop Timeline ───────────────────────────────────────────

function DesktopTimeline({
  activeStepIndex,
  completedSteps,
  onSelect,
}: {
  activeStepIndex: number;
  completedSteps: number[];
  onSelect: (i: number) => void;
}) {
  return (
    <div className="hidden md:block relative pb-4">
      {/* Connecting Track */}
      <div className="absolute top-[32px] left-[12.5%] right-[12.5%] h-[3px] -translate-y-1/2 pointer-events-none z-0">
        <div className="w-full h-full bg-border rounded-full" />
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-accent to-purple-400 rounded-full origin-left transition-all duration-500 ease-out"
          style={{
            width: `${(activeStepIndex / (PIPELINE_STEPS.length - 1)) * 100}%`,
          }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <motion.div
            animate={{ x: ["-20%", "120%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[1px]"
          />
        </div>
        <motion.div
          animate={{
            left: `${(activeStepIndex / (PIPELINE_STEPS.length - 1)) * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-md shadow-accent/40 z-10"
        >
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
        </motion.div>
      </div>

      {/* Nodes */}
      <div className="grid grid-cols-4 gap-4 relative z-10">
        {PIPELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStepIndex === idx;
          const isPassed = completedSteps.includes(idx);

          return (
            <button
              key={step.id}
              onClick={() => onSelect(idx)}
              className="flex flex-col items-center text-center cursor-pointer group focus:outline-hidden"
            >
              <div className="relative mb-3.5">
                {isActive && (
                  <div className="absolute -inset-2 rounded-2xl bg-accent/15 blur-md animate-pulse" />
                )}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative border group-hover:scale-105 ${
                    isActive
                      ? `${step.color.bg} ${step.color.border} ring-2 ring-accent ring-offset-2 ring-offset-white shadow-md`
                      : isPassed
                        ? `${step.color.bg} ${step.color.border} opacity-90 group-hover:border-fg/30`
                        : "bg-surface border-border opacity-70 group-hover:opacity-100 group-hover:border-fg/20"
                  }`}
                >
                  {isPassed && !isActive && (
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                  <span
                    className={`absolute -top-2 -left-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shadow-2xs border ${
                      isActive
                        ? "bg-accent text-white border-accent"
                        : "bg-white text-fg-muted border-border"
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon
                    className={`w-6 h-6 transition-colors duration-200 ${isActive ? step.color.text : "text-fg-muted group-hover:text-fg"}`}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className={`text-xs font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${isActive ? "bg-accent/10 text-accent font-semibold" : "text-fg-faint group-hover:text-fg-muted"}`}
                >
                  {step.badge}
                </span>
                <span
                  className={`text-sm font-semibold transition-colors duration-150 ${isActive ? "text-fg" : "text-fg/80 group-hover:text-fg"}`}
                >
                  {step.title}
                </span>
                <span className="text-xs text-fg-muted font-light mt-0.5">
                  {step.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Mobile Timeline ────────────────────────────────────────────

function MobileTimeline({
  activeStepIndex,
  completedSteps,
  onSelect,
}: {
  activeStepIndex: number;
  completedSteps: number[];
  onSelect: (i: number) => void;
}) {
  return (
    <div className="md:hidden relative space-y-4">
      <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-border z-0" />
      <div
        className="absolute left-[27px] top-6 w-[2px] bg-gradient-to-b from-blue-400 via-accent to-purple-400 z-0 origin-top transition-all duration-500 ease-out"
        style={{
          height: `${(activeStepIndex / (PIPELINE_STEPS.length - 1)) * 100}%`,
        }}
      />

      {PIPELINE_STEPS.map((step, idx) => {
        const Icon = step.icon;
        const isActive = activeStepIndex === idx;
        const isPassed = completedSteps.includes(idx);

        return (
          <button
            key={step.id}
            onClick={() => onSelect(idx)}
            className={`flex items-start gap-4 p-3 rounded-2xl transition-all cursor-pointer relative z-10 border w-full text-left ${
              isActive
                ? `${step.color.bg} ${step.color.border} shadow-xs ring-1 ring-accent/40`
                : "bg-transparent border-transparent hover:bg-surface/60"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center border relative ${
                isActive
                  ? "bg-white border-accent shadow-xs"
                  : isPassed
                    ? `${step.color.bg} ${step.color.border}`
                    : "bg-white border-border text-fg-muted"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${isActive ? step.color.text : "text-fg-muted"}`}
              />
              {isPassed && !isActive && (
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px]">
                  ✓
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white border border-border text-fg-muted">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono text-accent uppercase font-medium">
                  {step.badge}
                </span>
              </div>
              <p className="text-sm font-semibold text-fg truncate">
                {step.title}
              </p>
              <p className="text-xs text-fg-muted">{step.subtitle}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ── Terminal Display ───────────────────────────────────────────

function TerminalDisplay({
  step,
  stepIndex,
}: {
  step: (typeof PIPELINE_STEPS)[number];
  stepIndex: number;
}) {
  return (
    <div className="mt-8 pt-6 border-t border-border/70">
      <div className="rounded-2xl bg-[#18181B] text-zinc-100 p-4 sm:p-5 shadow-lg relative overflow-hidden font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-[11px] text-zinc-400 font-mono ml-2">
              homelab-runner:~/{step.id}-hook
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 uppercase tracking-wide">
            STAGE {step.number} ACTIVE
          </span>
        </div>

        {/* Command */}
        <div className="flex items-center gap-2 text-zinc-300 mb-3 bg-zinc-900/90 px-3 py-2 rounded-lg border border-zinc-800">
          <span className="text-emerald-400 font-bold">$</span>
          <span className="text-zinc-100 font-mono select-all">
            {step.command}
          </span>
        </div>

        {/* Logs */}
        <div className="space-y-1.5 text-[11px] sm:text-xs min-h-[90px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5"
            >
              {step.logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 leading-relaxed">
                  {log.status === "success" && (
                    <span className="text-emerald-400 shrink-0">✓</span>
                  )}
                  {log.status === "highlight" && (
                    <span className="text-amber-400 shrink-0">★</span>
                  )}
                  {log.status === "info" && (
                    <span className="text-blue-400 shrink-0">ℹ</span>
                  )}
                  <span
                    className={
                      log.status === "success"
                        ? "text-emerald-300"
                        : log.status === "highlight"
                          ? "text-amber-200 font-semibold"
                          : "text-zinc-300"
                    }
                  >
                    {log.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-zinc-400">
          <p className="leading-normal">{step.description}</p>
          <span className="text-zinc-500 shrink-0">
            Step {stepIndex + 1} of 4
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Hardware Specs Card ────────────────────────────────────────

function HardwareSpecs() {
  return (
    <div className="mt-8 rounded-3xl bg-white border border-border p-6 md:p-7 shadow-xs relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-pastel-purple/30 blur-2xl pointer-events-none" />
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-pastel-purple/50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 shadow-2xs">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-fg">
                The Sony VAIO Homelab Journey
              </h3>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-mono font-medium">
                Self-Hosted K3s
              </span>
            </div>
            <p className="text-sm text-fg-muted leading-relaxed max-w-2xl">
              A refurbished Sony VAIO laptop running Arch Linux. Full K3s
              cluster, Pi-hole DNS, PocketBase, and Tailscale - all self-hosted.
              While others pay hefty cloud markups, I built and debugged my own
              resilient production environment from scratch.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 shrink-0">
          {[
            { label: "OS", value: "Arch Linux" },
            { label: "Orchestrator", value: "K3s Cluster" },
            { label: "Network", value: "Tailscale Mesh" },
            {
              label: "Downtime",
              value: "0% Rollout",
              className: "text-emerald-600",
            },
          ].map(({ label, value, className }) => (
            <div
              key={label}
              className="px-3 py-2 rounded-xl bg-surface border border-border/70 text-center"
            >
              <span className="block text-[10px] font-mono text-fg-muted uppercase">
                {label}
              </span>
              <span
                className={`text-xs font-semibold ${className ?? "text-fg"}`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
