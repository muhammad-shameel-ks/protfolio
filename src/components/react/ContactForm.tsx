import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden bg-surface-warm/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side — Content (Following StoryBlock Pattern) */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-pastel-orange/40 flex items-center justify-center text-orange-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </div>
            <span className="font-[Silkscreen] text-[16px] text-accent tracking-[0.2em] uppercase font-bold">
              Chapter 06 — The Connection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-fg"
          >
            Enough about me. <br />
            <span className="text-accent">What are you building?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-fg-muted text-lg font-light mb-8 max-w-lg leading-relaxed"
          >
            I'm currently looking for <span className="text-accent font-semibold">new opportunities</span> and interesting projects. 
            Whether you have a specific requirement or just want to say hi, my inbox is open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-3xl bg-white border border-border shadow-sm max-w-sm"
          >
            <span className="font-[Silkscreen] text-[13px] text-fg-faint tracking-widest uppercase block mb-3">Direct Line</span>
            <a href="mailto:muhammadshameelks@gmail.com" className="text-lg font-medium text-fg hover:text-accent transition-colors break-all">
              muhammadshameelks@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Right Side — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white p-8 md:p-10 rounded-[2.5rem] border border-border shadow-xl shadow-accent/5"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-pastel-green/50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-fg mb-2">Message Received!</h3>
                <p className="text-fg-muted">I'll get back to you faster than a pod restart.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-bold text-accent underline underline-offset-4"
                >
                  Send another?
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-[14px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-2xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-fg-faint text-fg font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-fg-faint text-fg font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-[Silkscreen] uppercase tracking-wider text-fg-faint ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full px-6 py-4 rounded-2xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-fg-faint text-fg font-medium resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-sm shadow-lg shadow-accent/20 hover:bg-accent-dark transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Deploy Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
