import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/cn';

interface TextRevealProps {
	text: string;
	className?: string;
	highlightWords?: string[];
	eyebrow?: string;
}

/**
 * Big editorial quote — words fade in as the section scrolls through the
 * viewport. Highlighted words take on the accent color. A blinking caret
 * trails the active line for personality.
 */
export default function TextReveal({ text, className = '', highlightWords = [], eyebrow }: TextRevealProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 0.85', 'start 0.15'],
	});

	const words = text.split(' ');

	return (
		<div
			ref={containerRef}
			className={cn('relative overflow-hidden border-y border-border/40 bg-bg-warm/60 px-6 py-24 md:px-12 md:py-36 lg:px-20', className)}
		>
			{/* Decorative quote mark */}
			<div className="pointer-events-none absolute -left-4 top-12 select-none font-[Fraunces] text-[12rem] leading-none text-accent/8 md:-left-8 md:text-[18rem]">
				"
			</div>
			<div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

			<div className="relative mx-auto max-w-5xl">
				{eyebrow && (
					<motion.div
						style={{ opacity: scrollYProgress }}
						className="mb-8 flex items-center gap-2"
					>
						<span className="h-1.5 w-1.5 rounded-full bg-accent" />
						<span className="font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-accent">
							{eyebrow}
						</span>
					</motion.div>
				)}

				<p className="flex flex-wrap text-balance text-[clamp(1.5rem,3.5vw,2.6rem)] font-medium leading-[1.3] tracking-[-0.02em] text-fg">
					{words.map((word, i) => {
						const start = i / words.length;
						const end = start + 1 / words.length;
						const isHighlight = highlightWords.some((hw) => word.toLowerCase().includes(hw.toLowerCase()));
						return (
							<Word key={i} progress={scrollYProgress} range={[start, end]} highlight={isHighlight}>
								{word}
							</Word>
						);
					})}
				</p>

				{/* Author signature line */}
				<motion.div
					style={{ opacity: scrollYProgress }}
					className="mt-10 flex items-center gap-3"
				>
					<div className="h-px w-12 bg-accent" />
					<span className="font-[Fraunces] text-sm italic text-fg-muted">— on the record</span>
				</motion.div>
			</div>
		</div>
	);
}

function Word({
	children,
	progress,
	range,
	highlight,
}: {
	children: string;
	progress: any;
	range: [number, number];
	highlight: boolean;
}) {
	const opacity = useTransform(progress, range, [0.15, 1]);
	const y = useTransform(progress, range, [12, 0]);
	const blur = useTransform(progress, range, [4, 0]);

	return (
		<span className="relative mr-[0.3em] mt-1.5 inline-block overflow-hidden">
			<motion.span
				style={{ opacity, y, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
				className={cn(
					'inline-block transition-colors',
					highlight
						? 'font-[Fraunces] italic text-accent'
						: '',
				)}
			>
				{children}
			</motion.span>
		</span>
	);
}
