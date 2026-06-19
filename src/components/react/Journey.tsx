import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Milestone {
	year: string;
	chapter: string;
	title: string;
	desc: string;
	tags: string[];
	side: 'left' | 'right';
}

const MILESTONES: Milestone[] = [
	{
		year: '2019',
		chapter: 'CH 00',
		title: 'The broken laptop',
		desc: 'Bent an old machine to my will with Arch, i3, and a lot of caffeine. The first taste of "I built this."',
		tags: ['Arch Linux', 'i3', 'curiosity'],
		side: 'left',
	},
	{
		year: '2020',
		chapter: 'CH 01',
		title: 'First real project',
		desc: 'Built my first web app from scratch. It was ugly. It was real. It changed everything.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		side: 'right',
	},
	{
		year: '2021',
		chapter: 'CH 02',
		title: 'Hello, Flutter',
		desc: 'Picked up Flutter and built a college project. Discovered I loved shipping — not just tinkering.',
		tags: ['Flutter', 'Dart', 'mobile'],
		side: 'left',
	},
	{
		year: '2022',
		chapter: 'CH 03',
		title: 'Office Pal ships',
		desc: 'First production app used by a real college. Exam seating algorithm replaced someone\'s entire job. They thanked me.',
		tags: ['Flutter', 'Supabase', 'Riverpod'],
		side: 'right',
	},
	{
		year: '2023',
		chapter: 'CH 04',
		title: 'KSDC internship',
		desc: 'Joined the Kerala State Development Corporation. Built a SQL helper tool. Cried twice over CORS.',
		tags: ['React', 'Node.js', 'MSSQL'],
		side: 'left',
	},
	{
		year: '2024',
		chapter: 'CH 05',
		title: 'The cluster awakens',
		desc: 'Stood up a Kubernetes cluster on a Sony VAIO. Pi-hole, PocketBase, Tailscale. Started writing about it.',
		tags: ['K8s', 'Docker', 'Tailscale'],
		side: 'right',
	},
	{
		year: '2025',
		chapter: 'CH 06',
		title: 'Scentence goes live',
		desc: 'Built and launched a real e-commerce for a paying client. Production revenue, real users, real stakes.',
		tags: ['Next.js', 'Three.js', 'Supabase'],
		side: 'left',
	},
	{
		year: '2026',
		chapter: 'CH 07',
		title: 'Here. Building in public.',
		desc: 'AI-augmented workflows, deeper infra knowledge, and this very portfolio. Next: Terraform, then cloud.',
		tags: ['AI', 'DevOps', 'n8n'],
		side: 'right',
	},
];

export default function Journey() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 0.85', 'end 0.15'],
	});

	const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<section
			ref={ref}
			className="relative overflow-hidden border-y border-border/40 bg-bg-warm px-6 py-24 md:px-12 md:py-36 lg:px-20"
		>
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pastel-orange/10 blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-16 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<motion.div
								whileHover={{ rotate: -8, y: -2 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-orange/50 text-accent shadow-sm"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
								</svg>
							</motion.div>
							<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
								The Journey · /timeline
							</span>
						</div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
						>
							From a broken laptop to a{' '}
							<span className="font-[Fraunces] italic text-accent">live cluster.</span>
						</motion.h2>
					</div>
					<p className="max-w-md text-pretty font-light leading-relaxed text-fg-muted">
						Not a polished highlight reel — just the long, stubborn arc of someone who couldn't stop tinkering.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Center spine — desktop only */}
					<div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block">
						<motion.div
							style={{ height: lineHeight }}
							className="w-full origin-top bg-gradient-to-b from-accent via-accent to-accent/30"
						/>
					</div>

					{/* Mobile spine */}
					<div className="absolute left-4 top-0 h-full w-px bg-border md:hidden">
						<motion.div
							style={{ height: lineHeight }}
							className="w-full origin-top bg-accent"
						/>
					</div>

					<div className="space-y-12 md:space-y-20">
						{MILESTONES.map((m, i) => (
							<MilestoneRow key={m.year} m={m} index={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function MilestoneRow({ m, index }: { m: Milestone; index: number }) {
	const isLeft = m.side === 'left';
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-15% 0px' }}
			transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
			className="relative"
		>
			{/* Mobile dot */}
			<div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:hidden">
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 300 }}
					className="h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-sm"
				/>
			</div>

			<div className={cn('grid gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0', isLeft ? 'md:[&>:first-child]:order-2' : '')}>
				{/* Card */}
				<div className={cn('md:px-8', isLeft ? 'md:text-right' : '')}>
					<motion.div
						whileHover={{ y: -3 }}
						data-cursor="hover"
						className="grain-card relative inline-block max-w-md rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
					>
						<div className="mb-3 flex items-center gap-2.5">
							<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-accent">
								{m.year}
							</span>
							<span className="h-1 w-1 rounded-full bg-fg-faint" />
							<span className="font-[JetBrains_Mono] text-[10px] text-fg-faint">{m.chapter}</span>
						</div>
						<h3 className="mb-2 text-lg font-bold tracking-tight text-fg">{m.title}</h3>
						<p className="text-sm leading-relaxed text-fg-muted">{m.desc}</p>
						<div className={cn('mt-4 flex flex-wrap gap-1.5', isLeft && 'md:justify-end')}>
							{m.tags.map((t) => (
								<span
									key={t}
									className="rounded-md border border-border/50 bg-bg-warm px-2 py-0.5 font-[JetBrains_Mono] text-[10px] text-fg-muted"
								>
									{t}
								</span>
							))}
						</div>
					</motion.div>
				</div>

				{/* Empty spacer for desktop */}
				<div className="hidden md:block" />
			</div>

			{/* Desktop dot */}
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 300 }}
				className="absolute left-1/2 top-6 z-10 hidden h-4 w-4 -translate-x-1/2 md:block"
			>
				<div className="h-full w-full rounded-full border-2 border-accent bg-bg shadow-sm" />
				<motion.div
					animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
					transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
					className="absolute inset-0 rounded-full bg-accent/30"
				/>
			</motion.div>
		</motion.div>
	);
}
