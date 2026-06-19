import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '../../lib/cn';

interface StoryBlockProps {
	eyebrow: string;
	heading: string;
	headingAccent?: string;
	body: string;
	aside?: string;
	stats?: { value: string; label: string }[];
	ascii?: string;
	warm?: boolean;
	reverse?: boolean;
	icon?: 'rocket' | 'compass' | 'wrench' | 'lightbulb' | 'cpu' | 'brain' | 'search' | 'star' | 'terminal' | 'layers' | 'git' | 'sparkles';
	chapter?: string;
	children?: React.ReactNode;
}

const icons: Record<string, React.ReactNode> = {
	rocket: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
			<path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
		</svg>
	),
	compass: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
		</svg>
	),
	wrench: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
		</svg>
	),
	lightbulb: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M9 18h6"/><path d="M10 22h4"/>
			<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
		</svg>
	),
	cpu: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
			<path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
		</svg>
	),
	brain: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3 3 3 0 000 6 3 3 0 003 3v1a4 4 0 008 0v-1a3 3 0 003-3 3 3 0 000-6 3 3 0 00-3-3V6a4 4 0 00-4-4z"/>
			<path d="M12 2v20"/>
		</svg>
	),
	search: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
		</svg>
	),
	star: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
		</svg>
	),
	terminal: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
		</svg>
	),
	layers: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
		</svg>
	),
	git: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 009 9"/>
		</svg>
	),
	sparkles: (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/>
		</svg>
	),
};

const iconTone: Record<string, { bg: string; text: string }> = {
	rocket: { bg: 'bg-pastel-orange/60', text: 'text-accent' },
	compass: { bg: 'bg-pastel-blue/60', text: 'text-blue-600' },
	wrench: { bg: 'bg-pastel-purple/60', text: 'text-purple-600' },
	lightbulb: { bg: 'bg-pastel-yellow/60', text: 'text-yellow-700' },
	cpu: { bg: 'bg-pastel-green/60', text: 'text-green-700' },
	brain: { bg: 'bg-pastel-pink/60', text: 'text-pink-600' },
	search: { bg: 'bg-pastel-blue/60', text: 'text-blue-600' },
	star: { bg: 'bg-pastel-orange/60', text: 'text-accent' },
	terminal: { bg: 'bg-pastel-green/60', text: 'text-green-700' },
	layers: { bg: 'bg-pastel-purple/60', text: 'text-purple-600' },
	git: { bg: 'bg-pastel-orange/60', text: 'text-accent' },
	sparkles: { bg: 'bg-pastel-yellow/60', text: 'text-yellow-700' },
};

export default function StoryBlock({
	eyebrow,
	heading,
	headingAccent,
	body,
	aside,
	stats,
	ascii,
	warm,
	reverse,
	icon = 'rocket',
	chapter,
	children,
}: StoryBlockProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-15% 0px' });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 0.95', 'start 0.35'],
	});
	const paraOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
	const paraY = useTransform(scrollYProgress, [0, 1], [30, 0]);
	const sideX = useTransform(scrollYProgress, [0, 1], [reverse ? 30 : -30, 0]);
	const sideOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1]);

	const tone = iconTone[icon];

	return (
		<motion.section
			ref={ref}
			style={{ opacity: paraOpacity, y: paraY }}
			className={cn(
				'relative overflow-hidden border-y border-border/40 px-6 py-24 md:px-12 md:py-36 lg:px-20',
				warm ? 'bg-bg-warm' : 'bg-bg',
			)}
		>
			{/* Decorative background ornament */}
			<div className="pointer-events-none absolute inset-0">
				{ascii && (
					<pre
						aria-hidden
						className="absolute -right-12 top-12 hidden font-[JetBrains_Mono] text-[10px] leading-[1] text-fg/[0.04] md:block"
						style={{ whiteSpace: 'pre' }}
					>
						{ascii}
					</pre>
				)}
				<div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-pastel-orange/10 blur-[100px]" />
				<div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-blue/10 blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-6xl">
				{/* Top row — chapter + icon + eyebrow */}
				<div className="mb-10 flex flex-wrap items-center gap-4">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className={cn('flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 shadow-sm', tone.bg, tone.text)}
					>
						{icons[icon]}
					</motion.div>
					<div className="flex flex-col">
						{chapter && (
							<motion.span
								initial={{ opacity: 0, x: -8 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.05 }}
								className="font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-fg-faint"
							>
								{chapter}
							</motion.span>
						)}
						<motion.span
							initial={{ opacity: 0, x: -8 }}
							animate={inView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="font-[Silkscreen] text-[14px] uppercase tracking-widest text-accent"
						>
							{eyebrow}
						</motion.span>
					</div>
					<div className="ml-auto hidden items-center gap-2 md:flex">
						<span className="font-[JetBrains_Mono] text-[10px] text-fg-faint">
							{String(Math.floor(Math.random() * 90) + 10)}% read
						</span>
						<div className="h-1 w-16 overflow-hidden rounded-full bg-border">
							<motion.div
								initial={{ width: 0 }}
								animate={inView ? { width: '70%' } : {}}
								transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
								className="h-full bg-accent"
							/>
						</div>
					</div>
				</div>

				{/* Heading + body grid */}
				<div className={cn('grid gap-10 md:gap-16', reverse ? 'md:grid-cols-12' : 'md:grid-cols-12')}>
					{/* Headline */}
					<div className={cn('md:col-span-7', reverse && 'md:order-2 md:col-start-6')}>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
							className="text-balance text-[clamp(1.8rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-fg"
						>
							{heading}
							{headingAccent && (
								<>
									<br />
									<span className="font-[Fraunces] italic font-medium text-accent">{headingAccent}</span>
								</>
							)}
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
							className="mt-8 max-w-2xl text-pretty text-base font-light leading-[1.75] text-fg-muted md:text-lg"
						>
							{body}
						</motion.p>

						{/* Stats row */}
						{stats && (
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
								className="mt-10 grid max-w-2xl grid-cols-3 gap-2 border-y border-border/60 py-5"
							>
								{stats.map((s) => (
									<div key={s.label} className="px-1">
										<div className="font-[Fraunces] text-2xl font-medium tracking-tight text-fg md:text-3xl">
											{s.value}
										</div>
										<div className="mt-0.5 font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint">
											{s.label}
										</div>
									</div>
								))}
							</motion.div>
						)}
					</div>

					{/* Side rail — aside or ascii art */}
					{(aside || ascii) && (
						<motion.div
							style={{ x: sideX, opacity: sideOpacity }}
							className={cn('md:col-span-5', reverse ? 'md:order-1' : 'md:col-start-8')}
						>
							{aside && (
								<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-sm">
									<div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/8 blur-2xl" />
									<div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-pastel-blue/30 blur-2xl" />
									<div className="relative flex items-start gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
											</svg>
										</div>
										<div>
											<div className="font-[Silkscreen] text-[9px] uppercase tracking-widest text-accent">
												Aside
											</div>
											<p
												className="mt-1.5 text-sm leading-relaxed text-fg-muted"
												dangerouslySetInnerHTML={{ __html: aside }}
											/>
										</div>
									</div>
								</div>
							)}
						</motion.div>
					)}
				</div>

				{children && <div className="mt-12">{children}</div>}
			</div>
		</motion.section>
	);
}
