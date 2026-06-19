import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, playKeySound, playSuccessSound, getMuteState, setMuteState } from './SoundSystem';

const SUGGESTIONS = ['neofetch', 'k8s-status', 'projects', 'help'];

export default function Hero() {
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; result: React.ReactNode }>>([
    {
      cmd: '',
      result: (
        <div className="space-y-1">
          <p className="text-accent font-bold">Welcome to Shameel's Arch Linux Homelab Node!</p>
          <p className="text-[11px] text-fg-muted">Type <span className="text-fg font-semibold font-mono">help</span> to list commands or click a quick action below.</p>
        </div>
      )
    }
  ]);
  const [isMuted, setIsMuted] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [restartingPod, setRestartingPod] = useState<string | null>(null);
  const [restartLogs, setRestartLogs] = useState<string[]>([]);

  // Sync mute state on mount
  useEffect(() => {
    setIsMuted(getMuteState());
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Scroll terminal to bottom on history change
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, restartLogs]);

  // Audio mute handler
  const toggleMute = () => {
    const newState = !isMuted;
    setMuteState(newState);
    setIsMuted(newState);
    playSuccessSound();
  };

  // Dark mode handler
  const toggleTheme = () => {
    playClickSound();
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  // Kubernetes pod restart animation
  const startPodRestart = (podName: string) => {
    if (restartingPod) return;
    playClickSound();
    setRestartingPod(podName);
    setRestartLogs([`Initiating hot restart for ${podName}...`]);

    setTimeout(() => {
      setRestartLogs(prev => [...prev, `[WARNING] Terminating container pod/sigterm...`]);
      playKeySound();
    }, 500);

    setTimeout(() => {
      setRestartLogs(prev => [...prev, `[INFO] De-scheduling pod node resources...`]);
      playKeySound();
    }, 1200);

    setTimeout(() => {
      setRestartLogs(prev => [...prev, `[INFO] Re-pulling image pocketbase:latest...`]);
      playKeySound();
    }, 2000);

    setTimeout(() => {
      setRestartLogs(prev => [...prev, `[INFO] Container init: mounting volume /data/messages...`]);
      playKeySound();
    }, 2800);

    setTimeout(() => {
      setRestartLogs(prev => [...prev, `[SUCCESS] Pod ${podName} successfully running! uptime: 0s`]);
      playSuccessSound();
      
      // Update history with success notification
      setHistory(prev => [
        ...prev,
        {
          cmd: `kubectl rollout restart pod/${podName}`,
          result: <span className="text-green-500 font-bold">✓ Successfully rolled out container pod/${podName}</span>
        }
      ]);
      setRestartingPod(null);
      setRestartLogs([]);
    }, 3600);
  };

  // Command Parser
  const runCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-2 text-[11px] leading-relaxed">
            <div><span className="text-accent font-bold">neofetch</span> - Show system information</div>
            <div><span className="text-accent font-bold">k8s-status</span> - Show Kubernetes cluster pods</div>
            <div><span className="text-accent font-bold">projects</span> - List portfolio work pieces</div>
            <div><span className="text-accent font-bold">skills</span> - Display engineering toolkit</div>
            <div><span className="text-accent font-bold">contact</span> - Show communication channels</div>
            <div><span className="text-accent font-bold">clear</span> - Clear terminal session output</div>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setTerminalInput('');
        return;
      case 'neofetch':
        output = (
          <div className="flex flex-col sm:flex-row gap-4 font-mono text-[11px] leading-relaxed">
            <div className="text-accent font-bold select-none whitespace-pre leading-none">
              {`    /\\
   /  \\
  /\\   \\
 /      \\
/   ,,   \\
/   |  |   \\
/___.'  '.___\\`}
            </div>
            <div className="space-y-0.5">
              <p className="text-accent font-bold">shameel@sony-vaio</p>
              <p className="text-fg-faint">------------------</p>
              <p><span className="text-fg-muted font-bold">OS:</span> Arch Linux x86_64</p>
              <p><span className="text-fg-muted font-bold">Kernel:</span> Linux 6.13.0-homelab</p>
              <p><span className="text-fg-muted font-bold">Window Manager:</span> Hyprland (Wayland)</p>
              <p><span className="text-fg-muted font-bold">Uptime:</span> 45 days, 12 hours</p>
              <p><span className="text-fg-muted font-bold">Shell:</span> bash 5.2.26</p>
              <p><span className="text-fg-muted font-bold">CPU:</span> Sony VAIO Node (Intel Core i5)</p>
              <p><span className="text-fg-muted font-bold">Memory:</span> 24MB / 16GB (DevOps footprint)</p>
            </div>
          </div>
        );
        break;
      case 'k8s-status':
        output = (
          <div className="space-y-3 font-mono text-[11px]">
            <div className="border border-border/40 rounded-lg p-2 bg-[#121110]/30">
              <p className="text-fg-muted font-bold mb-1">NODE: sony-vaio-desktop (READY, 45d uptime)</p>
              <p className="text-fg-faint text-[10px]">CPU: 4.8% | RAM: 2.1GB/16GB | TEMP: 48°C</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] text-fg-faint border-b border-border/20 pb-0.5 mb-1 font-bold">
                <span>POD NAME</span>
                <span>STATUS</span>
                <span>RESTARTS</span>
                <span>ACTION</span>
              </div>
              
              <div className="flex justify-between items-center py-0.5">
                <span className="font-medium text-fg">pod/pocketbase-db-7d4bc8f9b2</span>
                <span className="text-green-500 font-bold">Running</span>
                <span className="text-center w-12">0</span>
                <button 
                  onClick={() => startPodRestart('pocketbase-db')}
                  className="px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors"
                >
                  Restart
                </button>
              </div>

              <div className="flex justify-between items-center py-0.5">
                <span className="font-medium text-fg">pod/portfolio-web-54b9d8fc6c</span>
                <span className="text-green-500 font-bold">Running</span>
                <span className="text-center w-12">1</span>
                <button 
                  onClick={() => startPodRestart('portfolio-web')}
                  className="px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors"
                >
                  Restart
                </button>
              </div>

              <div className="flex justify-between items-center py-0.5">
                <span className="font-medium text-fg">pod/n8n-automation-89cdd5c88</span>
                <span className="text-green-500 font-bold">Running</span>
                <span className="text-center w-12">0</span>
                <button 
                  onClick={() => startPodRestart('n8n-automation')}
                  className="px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors"
                >
                  Restart
                </button>
              </div>

              <div className="flex justify-between items-center py-0.5">
                <span className="font-medium text-fg">pod/pihole-dns-749c89dc9d</span>
                <span className="text-green-500 font-bold">Running</span>
                <span className="text-center w-12">0</span>
                <button 
                  onClick={() => startPodRestart('pihole-dns')}
                  className="px-2 py-0.5 bg-accent/10 border border-accent/25 hover:bg-accent hover:text-white rounded-md text-[9px] font-bold text-accent transition-colors"
                >
                  Restart
                </button>
              </div>
            </div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-1.5 font-mono text-[11px]">
            <p className="font-bold text-accent">Active Projects:</p>
            <p>1. <span className="font-semibold text-fg">Scentance</span> - Premium Fragrance E-commerce (scentenceparfum.com)</p>
            <p>2. <span className="font-semibold text-fg">Stock Salt</span> - Real-time POS Inventory SaaS (Next.js + Postgres)</p>
            <p>3. <span className="font-semibold text-fg">Office Pal</span> - College Admin Seating Automation (Flutter + Supabase)</p>
            <p>4. <span className="font-semibold text-fg">KSDC Helper</span> - Automated SQL Command Generator for Staff (React)</p>
            <p>5. <span className="font-semibold text-fg">n8n Tunnels</span> - Zero-Config dev webhooks Docker tool (Python)</p>
            <p className="text-[10px] text-fg-faint mt-1">Scroll down to the WORK section to view visual highlights.</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-1 font-mono text-[11px]">
            <p><span className="text-accent font-bold">Frontend:</span> React, Next.js, TS, Flutter, Tailwind CSS</p>
            <p><span className="text-accent font-bold">Backend & DB:</span> PocketBase, PostgreSQL, Node.js, Supabase, MSSQL</p>
            <p><span className="text-accent font-bold">DevOps & OS:</span> Kubernetes, Docker, Tailscale, Cloudflare, Arch Linux</p>
            <p><span className="text-accent font-bold">Automation:</span> Python, GitHub Actions, n8n webhook pipelines</p>
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1 font-mono text-[11px]">
            <p><span className="text-fg-muted font-bold">Email:</span> muhammadshameelks@gmail.com</p>
            <p><span className="text-fg-muted font-bold">Phone:</span> +91 9605796725</p>
            <p><span className="text-fg-muted font-bold">LinkedIn:</span> linkedin.com/in/muhammad-shameel-k-s</p>
            <p><span className="text-fg-muted font-bold">GitHub:</span> github.com/muhammad-shameel-ks</p>
          </div>
        );
        break;
      default:
        output = (
          <span className="text-red-500 font-mono text-[11px]">
            command not found: {cmdText}. Type 'help' for options.
          </span>
        );
        break;
    }

    setHistory(prev => [...prev, { cmd: cmdText, result: output }]);
    setTerminalInput('');
    playSuccessSound();
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(terminalInput);
  };

  const handleInputKeyDown = () => {
    playKeySound();
  };

  const handleSuggestionClick = (cmd: string) => {
    playClickSound();
    runCommand(cmd);
  };

  const waveHand = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: { duration: 2.5, ease: "easeInOut", delay: 1.2 }
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-[100svh] flex items-center px-6 md:px-12 lg:px-20 py-28 lg:py-0 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[10vh] right-[10vw] w-[450px] h-[450px] rounded-full bg-pastel-orange/20 dark:bg-[#331610]/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10vh] left-[5vw] w-[350px] h-[350px] rounded-full bg-pastel-blue/15 dark:bg-[#14222E]/25 blur-[120px] pointer-events-none" />

      {/* Top Navbar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-sm font-bold font-[Silkscreen]">S</span>
          </div>
          <span className="font-[Silkscreen] text-xs font-bold tracking-wider text-fg hidden sm:inline">
            SHAMEEL.NODE
          </span>
        </motion.div>
        
        {/* Nav Toolbar controls (Mute, Theme, GitHub) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3"
        >
          {/* Audio Mute Switch */}
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-xl bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center hover:scale-105 transition-transform text-fg cursor-pointer shadow-sm"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            )}
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-white dark:bg-surface border border-border dark:border-border-dark flex items-center justify-center hover:scale-105 transition-transform text-fg cursor-pointer shadow-sm"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <a
            href="https://github.com/muhammad-shameel-ks"
            target="_blank"
            rel="noreferrer"
            onClick={playClickSound}
            className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-fg text-white dark:bg-white dark:text-bg text-xs font-bold hover:scale-105 transition-transform shadow-sm cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Biography */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-pastel-green/50 dark:bg-[#142E1F] border border-green-200/40 dark:border-green-900/30 w-max"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-green-800 dark:text-green-400">Node active & open to offers</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-fg mb-4"
          >
            I build systems <br />
            & host them{' '}
            <span className="relative inline-block">
              <span className="text-accent">myself.</span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8C30 2 60 4 100 6C140 8 170 3 198 7"
                  stroke="var(--color-accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <motion.span
              variants={waveHand}
              animate="animate"
              className="inline-block ml-3 origin-[70%_70%]"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-fg-muted font-light leading-relaxed max-w-lg mb-8"
          >
            Hi, I'm <span className="font-semibold text-fg">Muhammad Shameel KS</span>. A developer running a Kubernetes cluster on a desk Sony VAIO laptop. Deploying backends, routing VPN paths, and automating the web.
          </motion.p>

          {/* Eyebrow pixel tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <span className="font-[Silkscreen] text-sm md:text-base text-accent tracking-wider uppercase">
              Linux // Kubernetes // CI/CD // HomeLab // PocketBase
            </span>
          </motion.div>

          {/* Quick buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              onClick={playClickSound}
              className="px-6 py-3.5 bg-accent text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-accent/15 hover:bg-accent-dark hover:scale-[1.02] transition-all cursor-pointer"
            >
              Reach Out
            </a>
            <a
              href="#projects"
              onClick={playClickSound}
              className="px-6 py-3.5 bg-surface dark:bg-[#1C1A18] border border-border dark:border-border-dark text-fg font-bold text-sm rounded-xl hover:scale-[1.02] transition-transform cursor-pointer"
            >
              Check Work
            </a>
          </motion.div>
        </div>

        {/* Right Column - Hyprland Terminal Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full relative"
        >
          {/* Window Container mimicking Tiling Window Manager */}
          <div className="w-full rounded-2xl bg-[#090908] border border-[#1d1c1a] shadow-2xl overflow-hidden font-mono text-xs text-[#d1ccc0] relative">
            
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131211] border-b border-[#1d1c1a] select-none">
              <div className="flex gap-1.5">
                <button 
                  onClick={() => { playClickSound(); setHistory([]); }}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-75 cursor-pointer" 
                  title="Clear Output"
                />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[10px] text-fg-faint">shameel@sony-vaio: ~</span>
              <div className="flex items-center gap-1.5 text-[9px] text-fg-faint">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Terminal Content Screen */}
            <div 
              ref={terminalBodyRef}
              className="p-5 h-[270px] overflow-y-auto space-y-4 select-text scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              {/* Commands Logs History */}
              {history.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  {item.cmd !== '' && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-bold select-none">❯</span>
                      <span className="text-white font-semibold">{item.cmd}</span>
                    </div>
                  )}
                  <div className="pl-4 font-light text-[#bfb9ab]">
                    {item.result}
                  </div>
                </div>
              ))}

              {/* Running Pod Restart logs */}
              {restartingPod && (
                <div className="space-y-1 pl-4 text-accent border-l-2 border-accent/40 bg-accent/5 p-2 rounded">
                  {restartLogs.map((logLine, idx) => (
                    <p key={idx} className="font-mono text-[10px]">{logLine}</p>
                  ))}
                  <div className="flex items-center gap-2 mt-1 text-[10px]">
                    <div className="w-3.5 h-3.5 border border-accent border-t-transparent rounded-full animate-spin" />
                    <span>Processing container rollout...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion actions (Quick command buttons) */}
            <div className="px-4 py-2 bg-[#0c0c0b] border-t border-[#1d1c1a] flex flex-wrap items-center gap-2 select-none">
              <span className="text-[9px] font-[Silkscreen] text-fg-faint uppercase mr-1">Quick run:</span>
              {SUGGESTIONS.map(cmd => (
                <button
                  key={cmd}
                  disabled={!!restartingPod}
                  onClick={() => handleSuggestionClick(cmd)}
                  className="px-2.5 py-1 rounded bg-[#171615] border border-[#2b2926] hover:border-accent hover:text-white hover:bg-accent/15 text-[10px] text-fg-muted font-bold font-mono transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Line Form */}
            <form 
              onSubmit={handleInputSubmit}
              className="px-4 py-3 bg-[#11100f] border-t border-[#1d1c1a] flex items-center gap-2"
            >
              <span className="text-accent font-bold select-none">❯</span>
              <input
                type="text"
                disabled={!!restartingPod}
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder={restartingPod ? 'System locked during pod deployment...' : "type 'help', 'neofetch'..."}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder:text-fg-faint disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={!!restartingPod}
                className="text-[10px] font-mono text-fg-faint hover:text-accent font-bold cursor-pointer"
              >
                [ENTER]
              </button>
            </form>

          </div>
        </motion.div>

      </div>

      {/* Scroll Down mouse icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 hidden md:flex pointer-events-none"
      >
        <span className="text-[12px] text-fg-faint font-[Silkscreen] tracking-widest uppercase">SCROLL ENGINE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8.5 rounded-full border-2 border-border dark:border-border-dark flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>

    </motion.section>
  );
}