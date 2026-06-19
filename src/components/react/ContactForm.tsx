import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/cn';

const CONTACT_LINKS = [
	{
		label: 'Email',
		value: 'muhammadshameelks@gmail.com',
		href: 'mailto:muhammadshameelks@gmail.com',
		tone: 'bg-pastel-blue/50 text-blue-600',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
			</svg>
		),
	},
	{
		label: 'GitHub',
		value: '@muhammad-shameel-ks',
		href: 'https://github.com/muhammad-shameel-ks',
		tone: 'bg-pastel-purple/50 text-purple-600',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		value: 'muhammad-shameel-k-s',
		href: 'https://linkedin.com/in/muhammad-shameel-k-s/',
		tone: 'bg-pastel-green/50 text-green-600',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
			</svg>
		),
	},
	{
		label: 'Location',
		value: 'Palakkad, Kerala · IN',
		href: null,
		tone: 'bg-pastel-orange/50 text-accent',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
			</svg>
		),
	},
];

function MagneticButton({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, { stiffness: 250, damping: 18 });
	const sy = useSpring(y, { stiffness: 250, damping: 18 });

	const onMove = (e: React.MouseEvent) => {
		if (disabled) return;
		if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * 0.2);
		y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
	};

	return (
		<motion.button
			type="submit"
			disabled={disabled}
			onMouseMove={onMove}
			onMouseLeave={() => { x.set(0); y.set(0); }}
			style={{ x: sx, y: sy }}
			whileTap={{ scale: disabled ? 1 : 0.98 }}
			data-cursor="hover"
			className="group/submit relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent py-5 text-sm font-bold text-white shadow-accent transition-shadow hover:shadow-accent-lg disabled:cursor-not-allowed disabled:opacity-70"
		>
			<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/submit:translate-x-full" />
			<span className="relative">{children}</span>
		</motion.button>
	);
}

export default function ContactForm() {
	const [showNote, setShowNote] = useState(true);
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [focused, setFocused] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('submitting');
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			if (!res.ok) throw new Error('Failed to submit');
			setStatus('success');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			console.error('Error submitting form:', error);
			setStatus('error');
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section
			id="contact"
			className="relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20"
		>
			{/* Background */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-pastel-orange/15 blur-[120px]" />
				<div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-pastel-blue/15 blur-[120px]" />
				<div className="absolute inset-0 dot-grid opacity-20" />
			</div>

			<div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
				{/* Left — content + contact cards */}
				<div className="relative z-10 lg:col-span-5">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-6 flex items-center gap-3"
					>
						<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
							</svg>
						</div>
						<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
							Chapter 06 · The Connection
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="mb-5 text-balance text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-fg"
					>
						Enough about me. <br />
						<span className="font-[Fraunces] italic text-accent">Let's connect.</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.15 }}
						className="mb-8 max-w-md font-light leading-relaxed text-fg-muted md:text-lg"
					>
						I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. My inbox is open and my response time is faster than a pod restart.
					</motion.p>

					{/* Contact cards */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mb-8 space-y-2"
					>
						{CONTACT_LINKS.map((item) => (
							<motion.a
								key={item.label}
								href={item.href || undefined}
								target={item.href?.startsWith('http') ? '_blank' : undefined}
								rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
								whileHover={{ x: 4 }}
								data-cursor="hover"
								className={cn(
									'group flex items-center gap-4 rounded-xl border p-3.5 transition-all duration-300',
									item.href
										? 'cursor-pointer border-border/60 bg-white hover:border-accent/40 hover:shadow-md'
										: 'cursor-default border-border/40 bg-surface',
								)}
							>
								<div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-lg', item.tone)}>
									{item.icon}
								</div>
								<div className="min-w-0 flex-1">
									<div className="font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint">{item.label}</div>
									<div className="truncate text-sm font-medium text-fg transition-colors group-hover:text-accent">{item.value}</div>
								</div>
								{item.href && (
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fg-faint">
										<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
									</svg>
								)}
							</motion.a>
						))}
					</motion.div>

					{/* Resume */}
					<motion.a
						href="/resume.pdf"
						download="Shameel_Resume.pdf"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.25 }}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						data-cursor="hover"
						className="inline-flex items-center gap-2.5 rounded-xl bg-fg px-5 py-3 text-sm font-bold text-white shadow-lg transition-shadow hover:shadow-xl"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
						</svg>
						Download Resume
					</motion.a>
				</div>

				{/* Right — form */}
				<div className="relative lg:col-span-7">
					<AnimatePresence>
						{showNote && (
							<motion.div
								initial={{ opacity: 0, y: 10, rotate: -5 }}
								animate={{ opacity: 1, y: 0, rotate: -2 }}
								exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
								transition={{ delay: 0.5, duration: 0.6 }}
								className="absolute -top-12 right-0 z-20 hidden md:block lg:-right-8 lg:-top-16"
							>
								<div className="relative max-w-[180px] -rotate-2 rounded-2xl border-2 border-orange-200 bg-pastel-orange/90 p-3 shadow-lg backdrop-blur-sm">
									<button
										onClick={() => setShowNote(false)}
										aria-label="Dismiss note"
										className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-800 text-[10px] text-white shadow-sm transition-colors hover:bg-orange-900"
									>
										✕
									</button>
									<p className="font-[Silkscreen] text-[10px] leading-tight text-orange-800">
										This form runs on a <span className="font-bold underline">PocketBase</span> pod inside <span className="font-bold text-orange-600">K8s</span>, humming on a <span className="italic">Sony VAIO</span>.
									</p>
									<div className="absolute -bottom-8 left-8 pointer-events-none text-orange-400">
										<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5 5C5 5 15 5 25 15C35 25 35 35 35 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
											<path d="M28 35H35V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="grain-card relative z-10 overflow-hidden rounded-3xl border border-border/60 bg-white p-7 shadow-xl shadow-accent/5 md:p-10"
					>
						{/* Form chrome */}
						<div className="mb-6 flex items-center justify-between border-b border-border/40 pb-4">
							<div className="flex items-center gap-2.5">
								<span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
								<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-muted">
									form · ready
								</span>
							</div>
							<span className="font-[JetBrains_Mono] text-[10px] text-fg-faint">POST /api/contact</span>
						</div>

						<AnimatePresence mode="wait">
							{status === 'success' ? (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="py-16 text-center"
								>
									<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pastel-green/50 text-green-600">
										<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
									</div>
									<h3 className="mb-2 text-2xl font-bold text-fg">Message Received!</h3>
									<p className="text-fg-muted">I'll get back to you faster than a pod restart.</p>
									<button onClick={() => setStatus('idle')} className="mt-8 text-sm font-bold text-accent underline underline-offset-4">
										Send another →
									</button>
								</motion.div>
							) : status === 'error' ? (
								<motion.div
									key="error"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="py-16 text-center"
								>
									<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
										<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
									</div>
									<h3 className="mb-2 text-2xl font-bold text-fg">Submission Failed</h3>
									<p className="text-fg-muted">Something went wrong. Please try again later.</p>
									<button onClick={() => setStatus('idle')} className="mt-8 text-sm font-bold text-accent underline underline-offset-4">
										Try again →
									</button>
								</motion.div>
							) : (
								<motion.form
									key="form"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onSubmit={handleSubmit}
									className="space-y-5"
								>
									<Field label="Name" focused={focused === 'name'}>
										<input
											required
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											onFocus={() => setFocused('name')}
											onBlur={() => setFocused(null)}
											placeholder="Your name"
											data-cursor="hover"
											className="peer w-full rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
										/>
									</Field>

									<Field label="Email" focused={focused === 'email'}>
										<input
											required
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											onFocus={() => setFocused('email')}
											onBlur={() => setFocused(null)}
											placeholder="your@email.com"
											data-cursor="hover"
											className="peer w-full rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
										/>
									</Field>

									<Field label="Message" focused={focused === 'message'}>
										<textarea
											required
											name="message"
											value={formData.message}
											onChange={handleChange}
											onFocus={() => setFocused('message')}
											onBlur={() => setFocused(null)}
											rows={4}
											placeholder="What's on your mind?"
											data-cursor="hover"
											className="peer w-full resize-none rounded-2xl border border-border/60 bg-bg-warm px-6 py-4 font-medium text-fg outline-none transition-all placeholder:text-fg-faint focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent"
										/>
									</Field>

									<MagneticButton disabled={status === 'submitting'}>
										{status === 'submitting' ? (
											<>
												<div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
												Sending...
											</>
										) : (
											<>
												<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
												Deploy Message
											</>
										)}
									</MagneticButton>

									<p className="text-center font-[JetBrains_Mono] text-[10px] text-fg-faint">
										<span className="text-accent">↳</span> rate limited at 5/hr · 0 logs kept
									</p>
								</motion.form>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function Field({ label, focused, children }: { label: string; focused?: boolean; children: React.ReactNode }) {
	return (
		<div className="space-y-2">
			<div className="flex items-center justify-between">
				<label
					className={cn(
						'ml-1 font-[Silkscreen] text-[10px] uppercase tracking-widest transition-colors',
						focused ? 'text-accent' : 'text-fg-faint',
					)}
				>
					{label}
				</label>
				{focused && (
					<span className="mr-1 font-[JetBrains_Mono] text-[9px] text-accent">editing</span>
				)}
			</div>
			{children}
		</div>
	);
}
