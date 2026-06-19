import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound, playKeySound, playSuccessSound } from './SoundSystem';

const CONTACT_LINKS = [
  {
    label: 'Phone',
    value: '+91 9605796725',
    href: 'tel:+919605796725',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'muhammadshameelks@gmail.com',
    href: 'mailto:muhammadshameelks@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'muhammad-shameel-k-s',
    href: 'https://linkedin.com/in/muhammad-shameel-k-s/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Palakkad, Kerala, India',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [logs, setLogs] = useState<string[]>([
    "System diagnostics active. Awaiting input...",
    "Homelab Node Address: vaio-cluster.tailnet-shameel.ts.net"
  ]);
  
  const consoleRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${msg}`]);
  };

  const handleFocus = (field: string) => {
    playClickSound();
    addLog(`Focus gained on input node: '${field}'`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    playKeySound();
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Log keypress details on changes (rate-limited / simple log)
    if (value.length % 5 === 0) {
      addLog(`Writing buffer '${name}': ${value.length} characters written`);
    }
  };

  const handleButtonHover = () => {
    playClickSound();
    addLog("Mouse pointer hovering action 'Deploy Message' button");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    addLog("Packaging form details into JSON string payload...");
    addLog("POST /api/contact - Dispatching AJAX request to local cluster...");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to submit message');
      }

      setStatus('success');
      playSuccessSound();
      addLog("DB_SYS: Writing contact details to PocketBase messages collection...");
      addLog("API_SYS: 200 OK returned. Secure connection resolved.");
      addLog("n8n_SYS: Dispatching automation webhook pipeline notifications...");
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      addLog(`[ERROR] Connection failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden bg-surface-warm/50 dark:bg-[#11100f]/30 transition-colors">
      
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[-10%] w-80 h-80 rounded-full bg-pastel-orange/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-72 h-72 rounded-full bg-pastel-green/10 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column — Text + Direct Contacts */}
        <div className="lg:col-span-5 relative z-10">
          
          {/* Chapter badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-pastel-orange/40 dark:bg-[#302116] flex items-center justify-center text-orange-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </div>
            <span className="font-[Silkscreen] text-[16px] text-accent tracking-[0.2em] uppercase font-bold">
              Chapter 06
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-[1.1] text-fg"
          >
            Enough about me. <br />
            <span className="text-accent">Let's connect.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-fg-muted text-base md:text-lg font-light mb-8 leading-relaxed"
          >
            I'm always open to discussing new projects, deployment ideas, or full-time opportunities. Drop a message to my VAIO.
          </motion.p>

          {/* Contact items */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            {CONTACT_LINKS.map((item, i) => {
              const hasLink = item.href !== null;
              const LinkTag = hasLink ? 'a' : 'div';
              return (
                <motion.a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={hasLink ? { x: 4 } : {}}
                  onClick={() => hasLink && playClickSound()}
                  className={`
                    group flex items-center gap-4 p-3.5 rounded-2xl border transition-all duration-300
                    ${hasLink 
                      ? 'bg-white dark:bg-surface border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/40 hover:bg-pastel-orange/20 dark:hover:bg-[#302116]/10 cursor-pointer' 
                      : 'bg-surface dark:bg-surface/50 border-border/50 dark:border-border-dark/50 cursor-default'}
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    ${i === 0 ? 'bg-pastel-green/50 dark:bg-green-950/20 text-green-600' : i === 1 ? 'bg-pastel-blue/50 dark:bg-blue-950/20 text-blue-600' : i === 2 ? 'bg-pastel-purple/50 dark:bg-purple-950/20 text-purple-600' : 'bg-pastel-orange/50 dark:bg-orange-950/20 text-orange-600'}
                  `}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-[Silkscreen] text-[9px] text-fg-faint tracking-wider uppercase">
                      {item.label}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-fg truncate group-hover:text-accent transition-colors">
                      {item.value}
                    </div>
                  </div>

                  {hasLink && (
                    <div className="text-fg-faint group-hover:text-accent transition-colors shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          {/* CV Button */}
          <motion.a
            href="/resume.pdf"
            download="Shameel_Resume.pdf"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            onClick={playClickSound}
            className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-fg text-white dark:bg-white dark:text-bg rounded-xl font-bold text-xs shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            DOWNLOAD CV (PDF)
          </motion.a>
        </div>

        {/* Right Column — Form + Debug Console */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Active status cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-surface border border-border dark:border-border-dark p-4 rounded-2xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-pastel-green/40 dark:bg-green-950/20 text-green-500 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
              </div>
              <div>
                <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase">Pocketbase pod</span>
                <span className="text-xs font-semibold text-fg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  ONLINE (10.244.0.82)
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-surface border border-border dark:border-border-dark p-4 rounded-2xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-pastel-purple/40 dark:bg-purple-950/20 text-purple-500 flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              </div>
              <div>
                <span className="font-[Silkscreen] text-[8px] text-fg-faint block uppercase">Node resources</span>
                <span className="text-xs font-mono font-semibold text-fg">CPU: 2.1% | RAM: 24MB</span>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="bg-white dark:bg-surface border border-border dark:border-border-dark rounded-3xl p-6 md:p-8 shadow-xl shadow-black/[0.01]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 bg-pastel-green/50 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-fg mb-1.5">Package Transmitted!</h3>
                  <p className="text-sm text-fg-muted">Message saved in PocketBase. Response dispatched shortly.</p>
                  <button 
                    onClick={() => { setStatus('idle'); addLog("Reset form view. Ready for next submission."); }}
                    className="mt-6 text-xs font-bold text-accent font-[Silkscreen] uppercase underline underline-offset-4 cursor-pointer"
                  >
                    [Send another?]
                  </button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-950/20 rounded-full flex items-center justify-center mx-auto mb-5 text-red-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-fg mb-1.5">Transmission Failure</h3>
                  <p className="text-sm text-fg-muted font-light">Unable to reach PocketBase pod. Check logs below.</p>
                  <button 
                    onClick={() => { setStatus('idle'); addLog("Resetting form container after error status."); }}
                    className="mt-6 text-xs font-bold text-accent font-[Silkscreen] uppercase underline underline-offset-4 cursor-pointer"
                  >
                    [Re-deploy Form]
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        placeholder="Your name"
                        className="w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        placeholder="your@email.com"
                        className="w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      rows={3}
                      placeholder="What is on your mind?"
                      className="w-full px-5 py-3 rounded-xl bg-surface-warm dark:bg-[#151413] border border-border dark:border-border-dark focus:border-accent dark:focus:border-accent outline-none text-xs font-medium text-fg placeholder:text-fg-faint resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onHoverStart={handleButtonHover}
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-accent hover:bg-accent-dark text-white rounded-xl text-xs font-bold font-[Silkscreen] tracking-widest shadow-md flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        TRANSMITTING PAYLOAD...
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        DEPLOY MESSAGE
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Console logger display */}
          <div className="rounded-2xl bg-[#090908] border border-[#1f1e1d] shadow-2xl overflow-hidden font-mono text-[10px] text-[#bfb9ab]">
            {/* Console Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#131211] border-b border-[#1f1e1d] select-none">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[9px] text-fg-faint font-bold uppercase">Contact Diagnostic Console</span>
              <button 
                onClick={() => { playClickSound(); setLogs(["[CONSOLE] Clear action triggered."]); }}
                className="text-[9px] text-fg-faint hover:text-accent font-bold cursor-pointer"
              >
                [CLEAR]
              </button>
            </div>
            
            {/* Console log lines */}
            <div 
              ref={consoleRef}
              className="p-4 h-[120px] overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              {logs.map((log, index) => {
                const isError = log.includes('[ERROR]');
                const isSuccess = log.includes('200 OK') || log.includes('SUCCESS');
                return (
                  <p 
                    key={index}
                    className={`leading-relaxed whitespace-pre-wrap 
                      ${isError ? 'text-red-500' : isSuccess ? 'text-green-500' : 'text-fg-muted font-light'}
                    `}
                  >
                    {log}
                  </p>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
