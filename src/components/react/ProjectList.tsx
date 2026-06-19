import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Project {
	index: string;
	title: string;
	subtitle: string;
	description: string;
	funNote: string;
	tags: { name: string; color: string }[];
	stackIcons?: string[];
	link: string;
	highlights: string[];
	iconColor: string;
	showInternshipBadge?: boolean;
	screenshot?: string;
	isLive?: boolean;
	featured?: boolean;
	metric?: { label: string; value: string }[];
}

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
	React.useEffect(() => {
		document.body.setAttribute('data-modal-open', 'true');
		document.addEventListener('keydown', onKey);
		return () => {
			document.body.removeAttribute('data-modal-open');
			document.removeEventListener('keydown', onKey);
		};
	}, []);

	const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={`${alt} screenshot`}
		>
			<button
				onClick={onClose}
				aria-label="Close"
				className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
					<line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>

			<motion.img
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				src={src}
				alt={alt}
				className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			/>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/60 px-4 py-2">
				<span className="font-[Silkscreen] text-sm text-white">{alt}</span>
			</div>
		</motion.div>
	);
}

const projects: Project[] = [
	{
		index: '01',
		title: 'Scentence',
		subtitle: 'Premium Fragrance E-commerce — live with real customers',
		description:
			'A premium fragrance e-commerce platform built for a client. Live at scentenceparfum.com with real customers and orders. This isn\'t a portfolio piece — it\'s a production business with real revenue.',
		funNote: 'A real production business — not a portfolio piece.',
		tags: [
			{ name: 'Next.js 16', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'TypeScript', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'Three.js / R3F', color: 'bg-pastel-purple/50 text-purple-700' },
			{ name: 'Supabase', color: 'bg-pastel-green/50 text-green-700' },
		],
		stackIcons: ['/nextjs-light.svg', '/typescript.svg', '/supabase.svg', '/three.js.svg'],
		link: 'https://scentenceparfum.com',
		highlights: [
			'Live production with real customers and revenue',
			'3D interactive mesh background, fully responsive',
			'Admin dashboard with order tracking and analytics',
			'Stripe payments with webhook reconciliation',
		],
		iconColor: 'bg-pastel-purple/50 text-purple-600',
		screenshot: '/projects/scentence.png',
		isLive: true,
		featured: true,
		metric: [
			{ label: 'customers', value: '500+' },
			{ label: 'uptime', value: '99.9%' },
		],
	},
	{
		index: '02',
		title: 'Stock Salt',
		subtitle: 'Real-time Inventory SaaS',
		description: 'Multi-outlet inventory management with real-time sync across all POS terminals.',
		funNote: 'Spreadsheets shouldn\'t be the backbone of a business.',
		tags: [
			{ name: 'Next.js 15', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'TypeScript', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'Supabase Realtime', color: 'bg-pastel-green/50 text-green-700' },
		],
		stackIcons: ['/nextjs-light.svg', '/typescript.svg', '/supabase.svg', '/reactjs.svg'],
		link: 'https://github.com/muhammad-shameel-ks/stock-salt',
		highlights: ['Real-time stock sync across terminals', 'Centralized master stock management', 'Revenue analytics dashboard'],
		iconColor: 'bg-pastel-blue/50 text-blue-600',
		screenshot: '/projects/stock-salt.png',
		isLive: true,
		metric: [
			{ label: 'outlets', value: '5+' },
			{ label: 'realtime', value: '✓' },
		],
	},
	{
		index: '03',
		title: 'Office Pal',
		subtitle: 'College Management System',
		description: 'Replaces paperwork with automated exam seating and administration.',
		funNote: 'Yes, I automated away someone\'s entire job. They thanked me.',
		tags: [
			{ name: 'Flutter', color: 'bg-pastel-purple/50 text-purple-700' },
			{ name: 'Supabase', color: 'bg-pastel-green/50 text-green-700' },
			{ name: 'Riverpod', color: 'bg-pastel-orange/50 text-orange-700' },
		],
		stackIcons: ['/flutter.svg', '/supabase.svg', '/river-pod.svg'],
		link: 'https://github.com/muhammad-shameel-ks/office_pal',
		highlights: ['Anti-cheat seating algorithm', 'Print-ready PDF generation', '4 role-based dashboards'],
		iconColor: 'bg-pastel-purple/50 text-purple-600',
		screenshot: '/projects/office-pal.png',
		metric: [
			{ label: 'students', value: '2k' },
			{ label: 'roles', value: '4' },
		],
	},
	{
		index: '04',
		title: 'KSDC Smart Helper',
		subtitle: 'Government Database Utility',
		description: 'Built for the Kerala State Development Corporation to resolve complex database issues.',
		funNote: 'Making SQL accessible to everyone, one query at a time.',
		tags: [
			{ name: 'React', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'TypeScript', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'Node.js', color: 'bg-pastel-green/50 text-green-700' },
		],
		stackIcons: ['/reactjs.svg', '/typescript.svg', '/nodejs.svg', '/microsoft-sql-server.svg'],
		link: 'https://github.com/muhammad-shameel-ks/ksdc-smart-helper',
		highlights: ['Auto SQL query generation', 'Simplified UI for non-tech users', 'Query validation'],
		iconColor: 'bg-pastel-orange/50 text-orange-600',
		showInternshipBadge: true,
		screenshot: '/projects/ksdc-smart.png',
	},
	{
		index: '05',
		title: 'n8n Easy Webhooks',
		subtitle: 'Zero-Config Tunneling',
		description: 'Auto Cloudflare Tunnel for local n8n development.',
		funNote: 'I was too lazy to configure tunnels manually. So I automated it.',
		tags: [
			{ name: 'Python', color: 'bg-pastel-yellow/50 text-yellow-700' },
			{ name: 'Docker', color: 'bg-pastel-blue/50 text-blue-700' },
			{ name: 'Cloudflare', color: 'bg-pastel-orange/50 text-orange-700' },
		],
		stackIcons: ['/python.svg', '/docker-engine.svg', '/cloudflare.svg'],
		link: 'https://github.com/muhammad-shameel-ks/n8n-easy-webhook',
		highlights: ['Auto Cloudflare Tunnel provisioning', 'Dynamic webhook URL config', 'Dual CLI + TUI interface'],
		iconColor: 'bg-pastel-green/50 text-green-600',
	},
];

const projectIcons: Record<string, React.ReactNode> = {
	'01': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
	'02': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
	'03': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
	'04': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
	'05': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/><path d="M2 2l20 20"/></svg>,
};

function ProjectCard({ project, onImageClick, size = 'md' }: { project: Project; onImageClick: (src: string, title: string) => void; size?: 'lg' | 'md' | 'sm' }) {
	const [hovered, setHovered] = useState(false);
	const featured = project.featured;

	return (
		<motion.article
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-10% 0px' }}
			transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			data-cursor="hover"
			className={cn(
				'group grain-card relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm transition-all duration-500 hover:shadow-xl',
				featured && 'md:col-span-2',
			)}
		>
			{/* Screenshot */}
			<div
				onClick={() => project.screenshot && onImageClick(project.screenshot, project.title)}
				className={cn(
					'relative overflow-hidden bg-surface',
					featured ? 'h-56 md:h-72' : size === 'sm' ? 'h-32' : 'h-40',
					project.screenshot && 'cursor-zoom-in',
				)}
			>
				{project.screenshot ? (
					<>
						<img
							src={project.screenshot}
							alt={`${project.title} screenshot`}
							loading="lazy"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
							<span className="rounded-md bg-black/50 px-2 py-1 font-[JetBrains_Mono] text-[10px] text-white backdrop-blur-sm">
								click to enlarge
							</span>
						</div>
					</>
				) : (
					<div className="flex h-full flex-col items-center justify-center gap-2 text-fg-faint">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pastel-green/30">
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-600">
								<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/><path d="M2 2l20 20"/>
							</svg>
						</div>
						<span className="font-[Silkscreen] text-[9px] tracking-wider">CLI TOOL</span>
					</div>
				)}

				{/* Badges */}
				<div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
					{project.isLive && (
						<div className="flex items-center gap-1 rounded-md bg-green-500/95 px-2 py-1 font-[Silkscreen] text-[9px] font-bold tracking-wider text-white shadow-sm">
							<span className="relative flex h-1.5 w-1.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
								<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
							</span>
							LIVE
						</div>
					)}
					{project.showInternshipBadge && (
						<div className="rounded-md bg-fg/85 px-2 py-1 font-[Silkscreen] text-[9px] tracking-wider text-white shadow-sm">
							INTERNSHIP
						</div>
					)}
				</div>

				{/* Top-right index */}
				<div className="absolute right-3 top-3">
					<span className="font-[JetBrains_Mono] text-[10px] text-white/90 mix-blend-difference">
						/{project.index}
					</span>
				</div>

				{/* Metrics overlay (only featured) */}
				{featured && project.metric && (
					<div className="absolute bottom-3 right-3 flex gap-1.5">
						{project.metric.map((m) => (
							<div
								key={m.label}
								className="rounded-md bg-white/95 px-2 py-1 text-right shadow-sm backdrop-blur-sm"
							>
								<div className="font-[JetBrains_Mono] text-[11px] font-bold text-fg">{m.value}</div>
								<div className="font-[Silkscreen] text-[8px] uppercase tracking-wider text-fg-faint">{m.label}</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Body */}
			<div className={cn('relative flex flex-1 flex-col p-5', featured && 'md:p-7')}>
				<div className="mb-2 flex items-center gap-2.5">
					<div className={cn('flex h-9 w-9 items-center justify-center rounded-lg', project.iconColor)}>
						{projectIcons[project.index]}
					</div>
					<div className="flex items-baseline gap-2">
						<span className="font-[Silkscreen] text-[10px] text-fg-faint">/{project.index}</span>
						<h3 className={cn('font-bold tracking-tight text-fg', featured ? 'text-2xl' : 'text-base')}>
							{project.title}
						</h3>
					</div>
				</div>

				<p className={cn('mb-3 font-light text-fg-muted', featured ? 'text-sm md:text-base' : 'text-sm')}>
					{project.subtitle}
				</p>

				{/* Tech stack chips */}
				{project.stackIcons && (
					<div className="mb-4 flex flex-wrap gap-1.5">
						{project.stackIcons.map((icon, i) => (
							<div
								key={i}
								className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-surface px-2 py-1 transition-colors hover:border-accent/40"
							>
								<img src={icon} alt="" className="h-3.5 w-3.5 object-contain" />
								<span className="text-[10px] text-fg-muted">{project.tags[i]?.name}</span>
							</div>
						))}
					</div>
				)}

				{/* Highlights */}
				<div className="mb-4 space-y-1.5">
					{project.highlights.slice(0, featured ? 4 : 2).map((h, i) => (
						<div key={i} className="flex items-start gap-2 text-xs text-fg-muted">
							<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
							{h}
						</div>
					))}
				</div>

				{/* Link */}
				<div className="mt-auto flex items-center justify-between border-t border-border/30 pt-3">
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer"
						data-cursor="hover"
						className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
					>
						{project.isLive ? 'View live site' : 'View on GitHub'}
						<motion.span
							animate={{ x: hovered ? 3 : 0 }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						>
							<svg width="12" height="12" viewBox="0 0 14 14" fill="none">
								<path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</motion.span>
					</a>
					<span className="font-[Silkscreen] text-[9px] uppercase tracking-wider text-fg-faint">
						{project.isLive ? 'production' : 'open source'}
					</span>
				</div>
			</div>
		</motion.article>
	);
}

export default function ProjectList() {
	const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

	const featured = projects.find((p) => p.featured)!;
	const rest = projects.filter((p) => !p.featured);

	return (
		<section className="relative overflow-hidden border-y border-border/40 bg-bg px-6 py-24 md:px-12 md:py-36 lg:px-20">
			<AnimatePresence>
				{modalImage && <ImageModal src={modalImage.src} alt={modalImage.title} onClose={() => setModalImage(null)} />}
			</AnimatePresence>

			{/* Background ornament */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-pastel-purple/12 blur-[100px]" />
				<div className="absolute -left-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-orange/12 blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<motion.div
								whileHover={{ rotate: -8, y: -2 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
								</svg>
							</motion.div>
							<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
								The Work · /projects
							</span>
						</div>
						<motion.h2
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
						>
							Things I've built that{' '}
							<span className="font-[Fraunces] italic text-accent">actually ship.</span>
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.15, duration: 0.8 }}
							className="mt-4 max-w-lg font-light leading-relaxed text-fg-muted md:text-lg"
						>
							Real tools solving real problems for real people. Not proof-of-concepts that never launched.
						</motion.p>
					</div>

					{/* View all */}
					<a
						href="https://github.com/muhammad-shameel-ks"
						target="_blank"
						rel="noreferrer"
						data-cursor="hover"
						className="group inline-flex items-center gap-2 rounded-full border border-fg/10 bg-white/70 px-4 py-2 text-xs font-semibold text-fg backdrop-blur-sm transition-colors hover:border-accent/40"
					>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						All repos
						<svg width="11" height="11" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
							<path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</a>
				</div>

				{/* Featured project — full width */}
				<div className="mb-4">
					<ProjectCard project={featured} onImageClick={(src, title) => setModalImage({ src, title })} size="lg" />
				</div>

				{/* Rest of the grid — asymmetric */}
				<div className="grid gap-4 md:grid-cols-2 md:gap-5">
					{rest.slice(0, 2).map((project) => (
						<ProjectCard key={project.index} project={project} onImageClick={(src, title) => setModalImage({ src, title })} />
					))}
				</div>
				<div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-5">
					{rest.slice(2).map((project) => (
						<ProjectCard key={project.index} project={project} onImageClick={(src, title) => setModalImage({ src, title })} />
					))}
				</div>
			</div>
		</section>
	);
}
