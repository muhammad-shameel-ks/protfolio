import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Tool {
	name: string;
	desc: string;
	color: string;
	icon: string;
	level: number; // 0-100
}

const CATEGORIES: { label: string; accent: string; tone: string; tools: Tool[] }[] = [
	{
		label: 'Languages',
		accent: 'text-blue-600',
		tone: 'bg-pastel-blue/40',
		tools: [
			{ name: 'TypeScript', desc: 'Typed JavaScript · daily', level: 95, color: 'bg-pastel-blue/50 text-blue-700 border-blue-100/80', icon: '/typescript.svg' },
			{ name: 'Python', desc: 'Scripting & automation', level: 80, color: 'bg-pastel-yellow/50 text-yellow-700 border-yellow-100/80', icon: '/python.svg' },
			{ name: 'SQL', desc: 'PostgreSQL & MSSQL', level: 75, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/postgresql.svg' },
		],
	},
	{
		label: 'Frameworks',
		accent: 'text-purple-600',
		tone: 'bg-pastel-purple/40',
		tools: [
			{ name: 'Next.js', desc: 'Full-stack React framework', level: 92, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/nextjs-light.svg' },
			{ name: 'React', desc: 'UI component library', level: 94, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/reactjs.svg' },
			{ name: 'Flutter', desc: 'Cross-platform UI', level: 78, color: 'bg-pastel-purple/50 text-purple-600 border-purple-100/80', icon: '/flutter.svg' },
			{ name: 'Node.js', desc: 'JavaScript runtime', level: 85, color: 'bg-pastel-green/50 text-green-600 border-green-100/80', icon: '/nodejs.svg' },
			{ name: 'Tailwind CSS', desc: 'Utility-first CSS · v4', level: 96, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/tailwind.svg' },
		],
	},
	{
		label: 'Infra & Data',
		accent: 'text-green-700',
		tone: 'bg-pastel-green/40',
		tools: [
			{ name: 'Kubernetes', desc: 'Container orchestration', level: 70, color: 'bg-pastel-purple/50 text-purple-600 border-purple-100/80', icon: '/kubernetes.svg' },
			{ name: 'Docker', desc: 'Container platform', level: 88, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/docker-engine.svg' },
			{ name: 'Supabase', desc: 'Open-source Firebase alt', level: 90, color: 'bg-pastel-green/50 text-green-600 border-green-100/80', icon: '/supabase.svg' },
			{ name: 'Cloudflare', desc: 'CDN & edge network', level: 78, color: 'bg-pastel-orange/50 text-orange-600 border-orange-100/80', icon: '/cloudflare.svg' },
			{ name: 'Tailscale', desc: 'Zero-trust mesh VPN', level: 85, color: 'bg-pastel-green/50 text-green-600 border-green-100/80', icon: '/tailscale-light.svg' },
		],
	},
	{
		label: 'Tooling',
		accent: 'text-accent',
		tone: 'bg-pastel-orange/40',
		tools: [
			{ name: 'GitHub Actions', desc: 'CI/CD pipelines', level: 88, color: 'bg-pastel-purple/50 text-purple-600 border-purple-100/80', icon: '/github-light.svg' },
			{ name: 'n8n', desc: 'Workflow automation', level: 75, color: 'bg-pastel-pink/50 text-pink-600 border-pink-100/80', icon: '/n8n.svg' },
			{ name: 'Arch Linux', desc: 'Rolling-release OS', level: 90, color: 'bg-pastel-blue/50 text-blue-600 border-blue-100/80', icon: '/arch-linux.svg' },
			{ name: 'Hyprland', desc: 'Tiling WM · barchy', level: 82, color: 'bg-pastel-purple/50 text-purple-600 border-purple-100/80', icon: '/hyprland.svg' },
		],
	},
];

function ProficiencyRow({ tool }: { tool: Tool }) {
	return (
		<div className="group relative" data-cursor="hover">
			<motion.div
				whileHover={{ y: -2 }}
				transition={{ type: 'spring', stiffness: 300 }}
				className={cn(
					'flex items-center gap-2.5 rounded-xl border bg-white/70 px-3 py-2 backdrop-blur-sm transition-all',
					'border-border/60 hover:border-accent/40 hover:bg-white',
				)}
			>
				<img src={tool.icon} alt="" className="h-5 w-5 shrink-0 object-contain" />
				<div className="min-w-0 flex-1">
					<div className="flex items-center justify-between gap-2">
						<span className="truncate text-xs font-bold text-fg">{tool.name}</span>
						<span className="font-[JetBrains_Mono] text-[9px] text-fg-faint">{tool.level}</span>
					</div>
					<div className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-border">
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: `${tool.level}%` }}
							viewport={{ once: true }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
							className="h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
						/>
					</div>
				</div>
			</motion.div>
			{/* Tooltip */}
			<div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-fg px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 z-10">
				{tool.desc}
				<div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-fg" />
			</div>
		</div>
	);
}

function MarqueeStrip() {
	const all = CATEGORIES.flatMap((c) => c.tools);
	const doubled = [...all, ...all];

	return (
		<div className="group relative mb-10 overflow-hidden marquee-mask">
			<div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
				{doubled.map((tool, i) => (
					<span
						key={i}
						className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-3.5 py-2 text-xs font-medium text-fg-muted backdrop-blur-sm transition-colors hover:text-fg"
					>
						<img src={tool.icon} alt="" className="h-4 w-4 object-contain" />
						{tool.name}
					</span>
				))}
			</div>
		</div>
	);
}

export default function Marquee() {
	return (
		<section className="relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-32 lg:px-20">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-pastel-orange/12 blur-[100px]" />
				<div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-pastel-purple/12 blur-[80px]" />
			</div>

			<div className="relative mx-auto max-w-6xl">
				{/* Section label */}
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<motion.div
								whileHover={{ rotate: -8, y: -2 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-blue/50 text-blue-600 shadow-sm"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
								</svg>
							</motion.div>
							<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
								The Stack · /tools
							</span>
						</div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
						>
							I pick the{' '}
							<span className="font-[Fraunces] italic text-accent">right tool,</span>{' '}
							not the trendy one.
						</motion.h2>
					</div>
					<p className="max-w-md text-pretty font-light leading-relaxed text-fg-muted">
						A pragmatic toolkit — measured by what it ships, not what's cool this week.
					</p>
				</div>

				<MarqueeStrip />

				{/* Grouped categories with proficiency bars */}
				<div className="grid gap-8 md:grid-cols-2">
					{CATEGORIES.map((cat) => (
						<div
							key={cat.label}
							className="rounded-2xl border border-border/60 bg-white/60 p-5 backdrop-blur-sm"
						>
							<div className="mb-4 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className={cn('h-2 w-2 rounded-full bg-current', cat.accent)} />
									<span className={cn('font-[Silkscreen] text-[11px] uppercase tracking-widest', cat.accent)}>
										{cat.label}
									</span>
								</div>
								<span className="font-[JetBrains_Mono] text-[9px] text-fg-faint">
									{cat.tools.length} tools
								</span>
							</div>
							<div className="space-y-2">
								{cat.tools.map((tool) => (
									<ProficiencyRow key={tool.name} tool={tool} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
