import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

const STATS: { value: string; label: string; tone: string; spark: number[]; detail: string }[] = [
	{
		value: '100',
		label: 'Lighthouse',
		tone: 'from-pastel-green/50 to-pastel-green/10',
		spark: [40, 60, 55, 80, 90, 85, 100, 100],
		detail: 'performance · a11y · best practices',
	},
	{
		value: '7+',
		label: 'Self-hosted',
		tone: 'from-pastel-orange/50 to-pastel-orange/10',
		spark: [10, 20, 25, 30, 50, 60, 70, 80],
		detail: 'services on the homelab cluster',
	},
	{
		value: '5',
		label: 'Live products',
		tone: 'from-pastel-purple/50 to-pastel-purple/10',
		spark: [5, 15, 25, 35, 50, 65, 75, 100],
		detail: 'shipped · real users paying',
	},
	{
		value: '31d',
		label: 'Uptime',
		tone: 'from-pastel-blue/50 to-pastel-blue/10',
		spark: [100, 100, 98, 100, 100, 95, 100, 100],
		detail: 'cluster online · no manual restart',
	},
];

function Spark({ data, className }: { data: number[]; className?: string }) {
	const w = 100, h = 24;
	const max = Math.max(...data);
	const min = Math.min(...data);
	const range = max - min || 1;
	const points = data
		.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
		.join(' ');
	const last = data[data.length - 1];
	return (
		<svg viewBox={`0 0 ${w} ${h}`} className={cn('h-6 w-full', className)} preserveAspectRatio="none">
			<defs>
				<linearGradient id={`grad-${data[0]}`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#E8613C" stopOpacity="0.3" />
					<stop offset="100%" stopColor="#E8613C" stopOpacity="0" />
				</linearGradient>
			</defs>
			<polyline
				points={`0,${h} ${points} ${w},${h}`}
				fill={`url(#grad-${data[0]})`}
				stroke="none"
			/>
			<polyline
				points={points}
				fill="none"
				stroke="#E8613C"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.8"
			/>
			<circle cx={w} cy={h - ((last - min) / range) * h} r="2" fill="#E8613C" />
		</svg>
	);
}

export default function StatsStrip() {
	return (
		<section className="relative border-y border-border/60 bg-bg-warm/60">
			<div className="absolute inset-0 dot-grid opacity-30" />
			<div className="relative mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16 lg:px-20">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: '-20% 0px' }}
					variants={{ show: { transition: { staggerChildren: 0.1 } } }}
					className="grid grid-cols-2 gap-3 md:grid-cols-4"
				>
					{STATS.map((s, i) => (
						<motion.div
							key={s.label}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
							}}
							whileHover={{ y: -3 }}
							data-cursor="hover"
							className={cn(
								'group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-shadow hover:shadow-md',
								i === 0 && 'md:col-span-1',
							)}
						>
							<div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60', s.tone)} />
							<div className="relative flex flex-col gap-2">
								<div className="flex items-baseline justify-between">
									<span className="font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint">
										{s.label}
									</span>
									<span className="font-[JetBrains_Mono] text-[9px] text-fg-faint">
										{i === 3 ? 'live' : `0${i + 1}`}
									</span>
								</div>
								<div className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
									{s.value}
								</div>
								<Spark data={s.spark} />
								<div className="font-[JetBrains_Mono] text-[10px] leading-relaxed text-fg-muted">
									{s.detail}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
