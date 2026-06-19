import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '../../lib/cn';

const steps = [
	{
		label: 'Git Push',
		desc: 'main branch',
		detail: 'commit → origin/main',
		icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></svg>,
		color: 'bg-pastel-blue/50',
		iconColor: 'text-blue-600',
		glow: 'rgba(96, 165, 250, 0.4)',
	},
	{
		label: 'Actions CI',
		desc: 'build + test',
		detail: 'docker build · 248 pkgs',
		icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
		color: 'bg-pastel-orange/50',
		iconColor: 'text-accent',
		glow: 'rgba(232, 97, 60, 0.4)',
	},
	{
		label: 'Tailscale',
		desc: 'encrypted mesh',
		detail: 'wg · 100.x tunnel',
		icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
		color: 'bg-pastel-green/50',
		iconColor: 'text-green-600',
		glow: 'rgba(74, 222, 128, 0.4)',
	},
	{
		label: 'K8s Deploy',
		desc: 'home cluster',
		detail: 'kubectl apply -f',
		icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
		color: 'bg-pastel-purple/50',
		iconColor: 'text-purple-600',
		glow: 'rgba(168, 85, 247, 0.4)',
	},
];

export default function InfraFlow() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-15% 0px' });
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'start 0.15'] });

	const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<section
			ref={ref}
			className="relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20"
		>
			{/* Background ornament */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pastel-purple/15 blur-[140px]" />
				<div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pastel-orange/15 blur-[100px]" />
				<div className="absolute inset-0 dot-grid opacity-20" />
			</div>

			<div className="relative z-10 mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<motion.div
								whileHover={{ rotate: -8, y: -2 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-blue/50 shadow-sm"
							>
								<img src="/kubernetes.svg" alt="K8s" className="h-5 w-5 object-contain" />
							</motion.div>
							<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
								Infrastructure · /pipeline
							</span>
						</div>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
						>
							My code{' '}
							<span className="font-[Fraunces] italic text-accent">deploys itself.</span>
						</motion.h2>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="rounded-2xl border border-border/60 bg-white/70 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm"
					>
						<div className="flex items-center gap-2 text-fg-muted">
							<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
							<span>last deploy</span>
							<span className="text-fg">· 12m ago</span>
						</div>
						<div className="mt-1 text-fg-faint">a3f8c91 → main</div>
					</motion.div>
				</div>

				<motion.p
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.8 }}
					className="mb-14 max-w-3xl font-light leading-relaxed text-fg-muted md:text-lg"
				>
					Git push → GitHub Actions builds the container → Tailscale encrypted tunnel →
					self-hosted K8s cluster.{' '}
					<span className="text-fg">No cloud dashboard. No vendor lock-in.</span>{' '}
					Just a homelab and a lot of YAML.
				</motion.p>

				{/* Pipeline */}
				<div className="relative">
					{/* Animated track — desktop */}
					<div className="absolute left-6 right-6 top-[2.5rem] hidden h-[2px] rounded-full bg-border md:block">
						<motion.div
							style={{ width: lineWidth }}
							className="h-full origin-left rounded-full bg-gradient-to-r from-blue-400 via-accent to-purple-400"
						/>
					</div>

					{/* Data packet — pulses as it travels */}
					<div className="absolute left-6 right-6 top-[2.35rem] hidden h-[6px] overflow-visible md:block">
						<motion.div
							animate={{ x: ['-3%', '103%'] }}
							transition={{ repeat: Infinity, duration: 3.5, ease: 'linear', repeatDelay: 1.5 }}
							className="relative h-2 w-8 rounded-full bg-accent shadow-md"
							style={{ boxShadow: '0 0 24px rgba(232, 97, 60, 0.7)' }}
						>
							<span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-md" />
						</motion.div>
					</div>

					<div className="relative z-10 grid grid-cols-2 gap-5 md:grid-cols-4">
						{steps.map((step, i) => (
							<motion.div
								key={step.label}
								initial={{ opacity: 0, y: 40, scale: 0.92 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
								data-cursor="hover"
								className="group flex flex-col items-center text-center"
							>
								<motion.div
									whileHover={{ scale: 1.1, y: -4 }}
									transition={{ type: 'spring', stiffness: 300 }}
									className={cn(
										'relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 shadow-md backdrop-blur-sm transition-shadow',
										step.color,
										step.iconColor,
									)}
									style={{ '--glow': step.glow } as React.CSSProperties}
								>
									{step.icon}
									<motion.div
										animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
										transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
										className="absolute inset-0 rounded-2xl"
										style={{ background: 'var(--glow)' }}
									/>
								</motion.div>
								<span className="mb-0.5 text-sm font-semibold text-fg">{step.label}</span>
								<span className="text-[11px] font-light text-fg-muted">{step.desc}</span>
								<span className="mt-1 font-[JetBrains_Mono] text-[9px] text-fg-faint">{step.detail}</span>
							</motion.div>
						))}
					</div>
				</div>

				{/* Homelab spec card */}
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="grain-card relative mt-16 overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-md md:p-8"
				>
					<div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pastel-orange/20 blur-2xl" />
					<div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-pastel-purple/20 blur-2xl" />

					<div className="relative z-10 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
						<motion.div
							whileHover={{ rotate: -4, scale: 1.05 }}
							className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-purple/50 text-purple-600 shadow-sm"
						>
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
							</svg>
						</motion.div>

						<div>
							<div className="mb-2 flex items-center gap-2.5">
								<p className="font-bold text-fg">The Homelab</p>
								<span className="font-[Silkscreen] text-[9px] uppercase tracking-wider text-fg-faint">Sony VAIO · Arch</span>
								<span className="flex items-center gap-1 rounded-full bg-pastel-green/50 px-2 py-0.5 font-[JetBrains_Mono] text-[9px] text-green-700">
									<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
									online
								</span>
							</div>
							<p className="text-sm leading-relaxed text-fg-muted">
								A Sony VAIO on my desk running Arch Linux. Full K8s cluster, Pi-hole, PocketBase,
								Tailscale — all self-hosted. Some people have gaming setups.{' '}
								<span className="font-medium text-fg">I have a real production environment I built from scratch.</span>{' '}
								Still learning. Still growing.
							</p>
						</div>

						{/* Mini spec list */}
						<div className="hidden flex-col gap-1.5 border-l border-border/60 pl-6 font-[JetBrains_Mono] text-[11px] md:flex">
							<span className="text-fg-faint">~ $ neofetch --short</span>
							<span><span className="text-fg-faint">OS  </span>Arch x86_64</span>
							<span><span className="text-fg-faint">k8s </span>5 pods / 4 svc</span>
							<span><span className="text-fg-faint">net </span>Tailscale mesh</span>
							<span><span className="text-fg-faint">dns </span>Pi-hole · ad-block</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
