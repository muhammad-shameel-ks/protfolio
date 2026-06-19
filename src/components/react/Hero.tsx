import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';

const ROLES = ['full-stack engineer.', 'devops in progress.', 'self-host evangelist.', 'ai-augmented builder.'];

const TICKER = [
	'Arch Linux',
	'K8s',
	'Next.js',
	'TypeScript',
	'Flutter',
	'Supabase',
	'Tailscale',
	'Pi-hole',
	'PocketBase',
	'Docker',
	'GitHub Actions',
	'n8n',
	'React',
	'Node.js',
	'Python',
	'PostgreSQL',
];

function Magnetic({ children, strength = 0.3, className }: { children: React.ReactNode; strength?: number; className?: string }) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, { stiffness: 250, damping: 18 });
	const sy = useSpring(y, { stiffness: 250, damping: 18 });

	const onMove = (e: React.MouseEvent) => {
		if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
		y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
	};
	const reset = () => { x.set(0); y.set(0); };

	return (
		<motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={reset} className={className}>
			{children}
		</motion.div>
	);
}

function RotatingWord() {
	const [i, setI] = React.useState(0);
	React.useEffect(() => {
		const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2800);
		return () => clearInterval(t);
	}, []);
	return (
		<span className="relative inline-block min-w-[18ch] text-left align-bottom">
			<AnimatePresence mode="wait">
				<motion.span
					key={i}
					initial={{ y: '60%', opacity: 0, filter: 'blur(6px)' }}
					animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
					exit={{ y: '-60%', opacity: 0, filter: 'blur(6px)' }}
					transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
					className="inline-block text-accent italic font-[Fraunces]"
				>
					{ROLES[i]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}

function ClusterOrb() {
	return (
		<div className="pointer-events-none absolute right-[2vw] top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 lg:block">
			<svg viewBox="0 0 600 600" className="h-full w-full">
				<defs>
					<radialGradient id="orb-core" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#E8613C" stopOpacity="0.9" />
						<stop offset="60%" stopColor="#E8613C" stopOpacity="0.2" />
						<stop offset="100%" stopColor="#E8613C" stopOpacity="0" />
					</radialGradient>
					<linearGradient id="orb-line" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#E8613C" stopOpacity="0" />
						<stop offset="50%" stopColor="#E8613C" stopOpacity="0.6" />
						<stop offset="100%" stopColor="#E8613C" stopOpacity="0" />
					</linearGradient>
				</defs>

				{/* Core glow */}
				<circle cx="300" cy="300" r="160" fill="url(#orb-core)" />

				{/* Orbiting rings */}
				<g className="origin-center" style={{ transformOrigin: '300px 300px' }}>
					<motion.g
						animate={{ rotate: 360 }}
						transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
						style={{ transformOrigin: '300px 300px' }}
					>
						<ellipse cx="300" cy="300" rx="260" ry="100" fill="none" stroke="#E8613C" strokeWidth="1" strokeOpacity="0.25" />
					</motion.g>
					<motion.g
						animate={{ rotate: -360 }}
						transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
						style={{ transformOrigin: '300px 300px' }}
					>
						<ellipse cx="300" cy="300" rx="240" ry="180" fill="none" stroke="#E8613C" strokeWidth="1" strokeOpacity="0.18" />
					</motion.g>
					<motion.g
						animate={{ rotate: 360 }}
						transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
						style={{ transformOrigin: '300px 300px' }}
					>
						<circle cx="300" cy="300" r="200" fill="none" stroke="#E8613C" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 6" />
					</motion.g>
				</g>

				{/* Orbiting nodes (services) */}
				{[
					{ angle: 0, r: 200, label: 'k8s', color: '#7C9DFF' },
					{ angle: 60, r: 180, label: 'docker', color: '#6FC2FF' },
					{ angle: 120, r: 240, label: 'tailscale', color: '#9BD3A1' },
					{ angle: 180, r: 200, label: 'pihole', color: '#FFB38A' },
					{ angle: 240, r: 220, label: 'pocket', color: '#C8A2FF' },
					{ angle: 300, r: 180, label: 'n8n', color: '#FF8A8A' },
				].map((node, i) => {
					const rad = (node.angle * Math.PI) / 180;
					const cx = 300 + Math.cos(rad) * node.r;
					const cy = 300 + Math.sin(rad) * node.r;
					return (
						<motion.g
							key={i}
							animate={{ rotate: -360 }}
							transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
							style={{ transformOrigin: '300px 300px' }}
						>
							<g transform={`translate(${cx} ${cy})`}>
								<circle r="22" fill="white" stroke={node.color} strokeWidth="1.5" />
								<circle r="4" fill={node.color} />
								<text
									textAnchor="middle"
									dy="38"
									fontSize="9"
									fontFamily="Silkscreen"
									fill="#5C5A56"
									style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
								>
									{node.label}
								</text>
							</g>
						</motion.g>
					);
				})}

				{/* Central label */}
				<text textAnchor="middle" x="300" y="296" fontSize="11" fontFamily="Silkscreen" fill="#5C5A56" style={{ textTransform: 'uppercase', letterSpacing: '0.25em' }}>
					the
				</text>
				<text textAnchor="middle" x="300" y="316" fontSize="22" fontFamily="Fraunces" fontStyle="italic" fill="#131211" fontWeight="500">
					homelab
				</text>
			</svg>
		</div>
	);
}

export default function Hero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
	const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.4, 0]);

	const time = useMemo(() => new Date(), []);
	const greeting = useMemo(() => {
		const h = time.getHours();
		if (h < 5) return 'up late';
		if (h < 12) return 'good morning';
		if (h < 17) return 'good afternoon';
		if (h < 22) return 'good evening';
		return 'good night';
	}, [time]);

	return (
		<motion.section
			id="hero"
			ref={containerRef}
			style={{ y, opacity }}
			className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-20 md:px-12 md:py-0 lg:px-20"
		>
			<ClusterOrb />

			{/* Top nav */}
			<div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-8 md:px-12 lg:px-20">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="flex items-center gap-2.5"
				>
					<div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-accent">
						<span className="font-[Silkscreen] text-sm font-bold text-white">S</span>
						<span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-bg bg-green-500" />
					</div>
					<div className="hidden flex-col leading-tight sm:flex">
						<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg">shameel</span>
						<span className="font-[JetBrains_Mono] text-[9px] text-fg-faint">~/portfolio</span>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="flex items-center gap-2.5"
				>
					<span className="hidden items-center gap-1.5 rounded-full border border-border bg-white/70 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] text-fg-muted backdrop-blur-sm md:flex">
						<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
						cluster online · 31d
					</span>
					<Magnetic strength={0.25}>
						<motion.a
							href="https://github.com/muhammad-shameel-ks"
							target="_blank"
							rel="noreferrer"
							data-cursor="hover"
							className="flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
							GitHub
						</motion.a>
					</Magnetic>
				</motion.div>
			</div>

			{/* Main content */}
			<div className="relative z-10 max-w-4xl">
				{/* Greeting + status */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="mb-8 flex flex-wrap items-center gap-2.5"
				>
					<span className="inline-flex items-center gap-2 rounded-full border border-green-200/40 bg-pastel-green/50 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-green-800">
						<span className="relative flex h-1.5 w-1.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
						</span>
						Open to work
					</span>
					<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint">
						· {greeting}
					</span>
				</motion.div>

				{/* Main headline */}
				<div className="mb-6">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
						className="text-balance text-[clamp(2.4rem,7.5vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-fg"
					>
						I'm{' '}
						<span className="relative inline-block">
							<span className="font-[Fraunces] italic font-medium text-accent">Shameel</span>
							<motion.svg
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ delay: 1.2, duration: 0.9, ease: 'easeOut' }}
								className="absolute -bottom-1.5 left-0 w-full"
								viewBox="0 0 200 12"
								fill="none"
								preserveAspectRatio="none"
							>
								<motion.path
									d="M2 8C30 2 60 4 100 6C140 8 170 3 198 7"
									stroke="#E8613C"
									strokeWidth="2.5"
									strokeLinecap="round"
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{ delay: 1.2, duration: 0.9, ease: 'easeOut' }}
								/>
							</motion.svg>
						</span>
						<br />
						a <RotatingWord />
					</motion.h1>
				</div>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="mb-10 max-w-xl text-pretty text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-fg-muted"
				>
					I design, build, and self-host the systems I work on — from full-stack apps to the
					Kubernetes cluster humming on a Sony VAIO in my bedroom. Then I write about it.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-wrap items-center gap-3"
				>
					<Magnetic strength={0.2}>
						<a
							href="#projects"
							data-cursor="hover"
							className="group inline-flex items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
						>
							See the work
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
								<line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
							</svg>
						</a>
					</Magnetic>
					<Magnetic strength={0.2}>
						<a
							href="#contact"
							data-cursor="hover"
							className="group inline-flex items-center gap-2.5 rounded-full border border-fg/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
							</svg>
							Say hello
						</a>
					</Magnetic>
					<span className="font-[JetBrains_Mono] text-[10px] text-fg-faint">
						<span className="text-accent">⌘</span>K · command palette
					</span>
				</motion.div>

				{/* Mini live panel — peek at the homelab */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					className="mt-12 max-w-md"
				>
					<a href="#chapter-03" data-cursor="hover" className="group block" aria-label="Jump to the homelab story">
						<div
							className="overflow-hidden rounded-xl border border-stone-800/60 transition-transform group-hover:-translate-y-0.5"
							style={{ background: 'var(--color-terminal-bg)', boxShadow: '0 24px 60px -20px rgba(0,0,0,0.45)' }}
						>
							<div className="flex items-center gap-1.5 border-b border-stone-800/70 px-3 py-2">
								<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
								<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
								<span className="ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500">shameel@vaio</span>
								<span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5">
									<span className="h-1.5 w-1.5 rounded-full bg-green-400" />
									<span className="font-[JetBrains_Mono] text-[9px] text-green-400">connected</span>
								</span>
							</div>
							<div className="px-3 py-3 font-[JetBrains_Mono] text-[11px] leading-relaxed" style={{ color: 'var(--color-terminal-fg)' }}>
								<div>
									<span className="text-orange-400">$</span> kubectl get pods -A | grep Running
								</div>
								<div className="text-stone-500">infra/pocketbase  · <span className="text-green-400">Running</span></div>
								<div className="text-stone-500">infra/pi-hole     · <span className="text-green-400">Running</span></div>
								<div className="text-stone-500">apps/scentence    · <span className="text-green-400">Running</span></div>
								<div className="text-stone-500">infra/tailscale   · <span className="text-green-400">Running</span></div>
								<div className="mt-1 text-amber-300">✓ 7/7 healthy · uptime 31d</div>
							</div>
						</div>
					</a>
					<p className="mt-2 pl-1 font-[JetBrains_Mono] text-[10px] text-fg-faint">
						<span className="text-accent">↳</span> peek at the cluster — full story below
					</p>
				</motion.div>
			</div>

			{/* Bottom marquee ticker — runs across the bottom of the hero */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.4, duration: 1 }}
				className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border/60 bg-bg/60 backdrop-blur-sm"
			>
				<div className="marquee-mask flex w-max animate-marquee-fast gap-3 px-6 py-3">
					{[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
						<span
							key={i}
							className="inline-flex shrink-0 items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-fg-muted"
						>
							<span className="h-1 w-1 rounded-full bg-accent" />
							{t}
						</span>
					))}
				</div>
			</motion.div>

			{/* Scroll hint — desktop only */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8, duration: 1 }}
				className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
			>
				<span className="font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-fg-faint">scroll</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
					className="h-6 w-px bg-fg-faint/40"
				/>
			</motion.div>
		</motion.section>
	);
}
