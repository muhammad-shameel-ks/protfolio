import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Service {
	name: string;
	ns: 'infra' | 'apps';
	status: 'Running' | 'Healthy' | 'Idle';
	uptime: string;
	version?: string;
	tag: string;
}

const SERVICES: Service[] = [
	{ name: 'pocketbase', ns: 'infra', status: 'Running', uptime: '14d 3h', version: '0.22', tag: 'backend' },
	{ name: 'pi-hole', ns: 'infra', status: 'Running', uptime: '31d 4h', version: '5.18', tag: 'dns' },
	{ name: 'tailscale', ns: 'infra', status: 'Running', uptime: '21d 9h', version: '1.56', tag: 'net' },
	{ name: 'caddy', ns: 'infra', status: 'Running', uptime: '31d 4h', version: '2.7', tag: 'proxy' },
	{ name: 'watchtower', ns: 'infra', status: 'Idle', uptime: '23d 1h', version: '1.7', tag: 'auto' },
	{ name: 'n8n', ns: 'infra', status: 'Running', uptime: '23d 1h', version: '1.40', tag: 'auto' },
	{ name: 'scentence-api', ns: 'apps', status: 'Healthy', uptime: '9d 2h', version: '0.9', tag: 'web' },
	{ name: 'scentence-web', ns: 'apps', status: 'Healthy', uptime: '9d 2h', version: '0.9', tag: 'web' },
];

function StatusDot({ status }: { status: Service['status'] }) {
	const color =
		status === 'Running' || status === 'Healthy'
			? 'bg-green-500'
			: status === 'Idle'
			? 'bg-amber-400'
			: 'bg-red-500';
	return (
		<span className="relative flex h-2 w-2">
			<span className={cn('absolute inline-flex h-full w-full animate-ping rounded-full opacity-75', color)} />
			<span className={cn('relative inline-flex h-2 w-2 rounded-full', color)} />
		</span>
	);
}

export default function NowStatus() {
	const [tick, setTick] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setTick((v) => v + 1), 1000);
		return () => clearInterval(t);
	}, []);

	const [now, setNow] = useState(new Date());
	useEffect(() => {
		const t = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(t);
	}, []);

	const stats = {
		total: SERVICES.length,
		healthy: SERVICES.filter((s) => s.status === 'Running' || s.status === 'Healthy').length,
		uptime: '31d 4h 12m',
		load: [0.42, 0.51, 0.49],
		mem: 32,
	};

	return (
		<section className="relative overflow-hidden border-y border-border/40 bg-bg px-6 py-24 md:px-12 md:py-32 lg:px-20">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-pastel-green/15 blur-[120px]" />
				<div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-pastel-blue/15 blur-[120px]" />
			</div>

			<div className="relative mx-auto max-w-6xl">
				{/* Header */}
				<div className="mb-12 flex flex-wrap items-end justify-between gap-6">
					<div>
						<div className="mb-4 flex items-center gap-3">
							<motion.div
								whileHover={{ rotate: -8, y: -2 }}
								transition={{ type: 'spring', stiffness: 300 }}
								className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-pastel-green/50 text-green-700 shadow-sm"
							>
								<span className="relative flex h-3 w-3">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
									<span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
								</span>
							</motion.div>
							<span className="font-[Silkscreen] text-[14px] uppercase tracking-[0.3em] text-accent">
								Now · /status
							</span>
						</div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
						>
							Right now, the cluster is{' '}
							<span className="font-[Fraunces] italic text-accent">humming.</span>
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="mt-4 max-w-lg font-light leading-relaxed text-fg-muted md:text-lg"
						>
							A live snapshot of the homelab — uptime, services, and a few honest numbers.
						</motion.p>
					</div>

					{/* Live time + region */}
					<div className="rounded-2xl border border-border/60 bg-white/70 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm">
						<div className="flex items-center gap-2 text-fg-muted">
							<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
							<span>live · {now.toUTCString().slice(17, 25)} UTC</span>
						</div>
						<div className="mt-1 text-fg-faint">Palakkad · IN · 23°C</div>
					</div>
				</div>

				{/* Cluster overview cards */}
				<div className="mb-8 grid gap-3 md:grid-cols-4">
					<StatCard label="Pods" value={`${stats.healthy}/${stats.total}`} sub="healthy" tone="green" />
					<StatCard label="Uptime" value="31d 4h" sub="no restart" tone="orange" />
					<StatCard label="Load" value={stats.load[0].toFixed(2)} sub="1m · 5m · 15m" tone="blue" />
					<StatCard label="Memory" value={`${stats.mem}%`} sub="2.5 / 7.7 GiB" tone="purple" />
				</div>

				{/* Service table */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="grain-card relative overflow-hidden rounded-3xl border border-border/60 bg-white shadow-md"
				>
					{/* Terminal-style header */}
					<div className="flex items-center gap-2 border-b border-border/60 bg-bg-warm px-4 py-3">
						<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
						<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
						<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
						<span className="ml-2 font-[JetBrains_Mono] text-[10px] text-fg-muted">kubectl get pods -A</span>
						<span className="ml-auto flex items-center gap-2 font-[JetBrains_Mono] text-[10px] text-fg-faint">
							<motion.span
								animate={{ opacity: [0.4, 1, 0.4] }}
								transition={{ duration: 1.6, repeat: Infinity }}
							>
								● live
							</motion.span>
							tick {tick.toString().padStart(4, '0')}
						</span>
					</div>

					{/* Table */}
					<div className="divide-y divide-border/40">
						{SERVICES.map((s, i) => (
							<motion.div
								key={s.name}
								initial={{ opacity: 0, x: -8 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.05 }}
								className="grid grid-cols-12 items-center gap-3 px-4 py-3 transition-colors hover:bg-pastel-orange/5"
							>
								<div className="col-span-5 flex items-center gap-2.5 md:col-span-4">
									<StatusDot status={s.status} />
									<span className="font-mono text-xs font-medium text-fg">{s.name}</span>
								</div>
								<div className="col-span-3 font-mono text-[10px] text-fg-faint md:col-span-2">
									{s.ns}
								</div>
								<div className="col-span-4 font-mono text-[10px] text-fg-muted md:col-span-2">
									{s.uptime}
								</div>
								<div className="col-span-4 hidden font-mono text-[10px] text-fg-faint md:col-span-2 md:block">
									v{s.version}
								</div>
								<div className="col-span-12 flex justify-end md:col-span-2">
									<span
										className={cn(
											'rounded-md px-2 py-0.5 font-[Silkscreen] text-[8px] uppercase tracking-wider',
											s.status === 'Running' || s.status === 'Healthy'
												? 'bg-pastel-green/60 text-green-700'
												: 'bg-pastel-yellow/60 text-yellow-700',
										)}
									>
										{s.status}
									</span>
								</div>
							</motion.div>
						))}
					</div>

					{/* Footer */}
					<div className="flex items-center justify-between border-t border-border/60 bg-bg-warm/50 px-4 py-2.5 font-[JetBrains_Mono] text-[10px] text-fg-muted">
						<span>✓ {stats.healthy}/{stats.total} pods healthy · cluster ready</span>
						<span className="text-fg-faint">~ $</span>
					</div>
				</motion.div>

				<p className="mt-4 text-center font-[JetBrains_Mono] text-[10px] text-fg-faint">
					<span className="text-accent">live-ish</span> — services are real, but this view is a styled snapshot
				</p>
			</div>
		</section>
	);
}

function StatCard({ label, value, sub, tone }: { label: string; value: string; sub: string; tone: 'green' | 'orange' | 'blue' | 'purple' }) {
	const toneMap = {
		green: 'from-pastel-green/50 to-pastel-green/10 text-green-700',
		orange: 'from-pastel-orange/50 to-pastel-orange/10 text-accent',
		blue: 'from-pastel-blue/50 to-pastel-blue/10 text-blue-600',
		purple: 'from-pastel-purple/50 to-pastel-purple/10 text-purple-600',
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			whileHover={{ y: -3 }}
			data-cursor="hover"
			className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
		>
			<div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50', toneMap[tone])} />
			<div className="relative">
				<div className="font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint">{label}</div>
				<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-fg md:text-3xl">
					{value}
				</div>
				<div className="font-[JetBrains_Mono] text-[10px] text-fg-muted">{sub}</div>
			</div>
		</motion.div>
	);
}
