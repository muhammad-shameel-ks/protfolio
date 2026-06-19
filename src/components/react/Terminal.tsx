import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';

type Line =
	| { kind: 'cmd'; text: string }
	| { kind: 'out'; text: string; className?: string }
	| { kind: 'blank' };

const SCENE: Line[] = [
	{ kind: 'cmd', text: 'kubectl get pods -A --field-selector=status.phase=Running' },
	{ kind: 'out', text: 'NAMESPACE   NAME                       READY   STATUS    AGE', className: 'text-stone-500' },
	{ kind: 'out', text: 'infra       pocketbase-7d9c4-x2k8p     1/1     Running   14d', className: 'text-green-400' },
	{ kind: 'out', text: 'infra       pi-hole-6b8f7d-n4q1w       1/1     Running   31d', className: 'text-green-400' },
	{ kind: 'out', text: 'apps        scentence-api-59cc8d-7p3v  2/2     Running   9d', className: 'text-green-400' },
	{ kind: 'out', text: 'infra       tailscale-subnet-f7a2      1/1     Running   21d', className: 'text-green-400' },
	{ kind: 'blank' },
	{ kind: 'cmd', text: 'docker ps --format "{{.Names}}\t{{.Status}}"' },
	{ kind: 'out', text: 'n8n                  Up 23 days', className: 'text-green-400' },
	{ kind: 'out', text: 'watchtower           Up 23 days', className: 'text-green-400' },
	{ kind: 'out', text: 'caddy                Up 31 days', className: 'text-green-400' },
	{ kind: 'blank' },
	{ kind: 'cmd', text: 'tailscale status | head -3' },
	{ kind: 'out', text: '100.84.0.1    shameel-vaio    linux   -   active; direct 1.1.1.1, tx 4.2GB rx 1.8GB' },
	{ kind: 'blank' },
	{ kind: 'out', text: '✓ 7/7 pods healthy · cluster uptime 31d · 0 unschedulable', className: 'text-amber-300' },
];

interface Token {
	line: number;
	char: string;
}

function buildTokens(): Token[] {
	const tokens: Token[] = [];
	SCENE.forEach((line, li) => {
		if (line.kind === 'blank') {
			tokens.push({ line: li, char: '\n' });
			return;
		}
		const prefix = line.kind === 'cmd' ? '$ ' : '';
		for (const ch of prefix + line.text) tokens.push({ line: li, char: ch });
		tokens.push({ line: li, char: '\n' });
	});
	return tokens;
}

function TerminalWindow() {
	const containerRef = useRef<HTMLDivElement>(null);
	const inView = useInView(containerRef, { once: true, margin: '-15% 0px' });
	const [charCount, setCharCount] = useState(0);

	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const tokens = useRef(buildTokens()).current;
	const totalChars = tokens.length;

	useEffect(() => {
		if (!inView) return;
		if (prefersReduced) {
			setCharCount(totalChars);
			return;
		}
		let i = 0;
		const startDelay = setTimeout(() => {
			const tick = () => {
				const step = tokens[i]?.char === '\n' ? 60 : 16;
				setCharCount(++i);
				if (i < totalChars) setTimeout(tick, step + Math.random() * 24);
			};
			tick();
		}, 400);
		return () => clearTimeout(startDelay);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);

	const renderedLines: { line: Line; partial: string }[] = [];
	let buffer = '';
	for (let i = 0; i < charCount; i++) {
		const tok = tokens[i];
		if (tok.char === '\n') {
			renderedLines.push({ line: SCENE[tok.line], partial: buffer });
			buffer = '';
		} else {
			buffer += tok.char;
		}
	}
	if (buffer && charCount < totalChars) {
		renderedLines.push({ line: SCENE[tokens[charCount - 1]?.line ?? 0], partial: buffer });
	}

	const finished = charCount >= totalChars;
	const currentLineIndex = tokens[Math.max(0, charCount - 1)]?.line ?? -1;

	return (
		<div
			ref={containerRef}
			className="overflow-hidden rounded-xl border border-stone-800/60"
			style={{
				background: 'var(--color-terminal-bg)',
				boxShadow: 'var(--shadow-terminal)',
			}}
		>
			{/* Title bar */}
			<div className="flex items-center gap-2 border-b border-stone-800/70 px-3 py-2">
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
				<span className="ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500">
					shameel@vaio: ~/homelab
				</span>
				<span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5">
					<span className="h-1.5 w-1.5 rounded-full bg-green-400" />
					<span className="font-[JetBrains_Mono] text-[10px] text-green-400">connected</span>
				</span>
			</div>

			{/* Body */}
			<div className="terminal-scroll h-[260px] overflow-y-auto px-3 py-3 sm:h-[280px] sm:px-4">
				<pre className="whitespace-pre-wrap break-words font-[JetBrains_Mono] text-[11px] leading-[1.7] sm:text-[12px]" style={{ color: 'var(--color-terminal-fg)' }}>
					{renderedLines.map((r, i) => {
						const isCmd = r.line.kind === 'cmd';
						const showCursor = finished
							? i === renderedLines.length - 1
							: i === currentLineIndex;
						const text = isCmd ? r.partial.replace(/^\$ /, '') : r.partial;
						return (
							<div key={i} className="min-h-[1.7em]">
								{isCmd && <span className="select-none text-orange-400">$ </span>}
								<span className={r.line.kind === 'out' ? r.line.className : undefined}>
									{text}
								</span>
								{showCursor && (
									<span className="animate-blink ml-px inline-block h-[1em] w-[7px] translate-y-[2px] bg-stone-300 align-middle" />
								)}
								{r.partial === '' && !showCursor && '\u00A0'}
							</div>
						);
					})}
				</pre>
			</div>
		</div>
	);
}

function MetricsWindow() {
	return (
		<div
			className="overflow-hidden rounded-xl border border-stone-800/60"
			style={{
				background: 'var(--color-terminal-bg)',
				boxShadow: 'var(--shadow-terminal)',
			}}
		>
			<div className="flex items-center gap-2 border-b border-stone-800/70 px-3 py-2">
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
				<span className="ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500">neofetch</span>
			</div>
			<div className="terminal-scroll h-[260px] overflow-y-auto px-3 py-3 font-[JetBrains_Mono] text-[11px] leading-[1.7] sm:h-[280px] sm:px-4 sm:text-[12px]" style={{ color: 'var(--color-terminal-fg)' }}>
				<div className="grid grid-cols-2 gap-x-4 gap-y-1">
					<span className="text-orange-400">shameel@vaio</span>
					<span className="text-stone-500">--------------</span>
					<span className="text-stone-400">OS</span>
					<span>Arch Linux x86_64</span>
					<span className="text-stone-400">Host</span>
					<span>Sony VAIO SVF15</span>
					<span className="text-stone-400">Kernel</span>
					<span>6.6.21-2-lts</span>
					<span className="text-stone-400">Uptime</span>
					<span className="text-green-400">31 days, 4 hrs</span>
					<span className="text-stone-400">Packages</span>
					<span>1284 (pacman)</span>
					<span className="text-stone-400">Shell</span>
					<span>zsh 5.9</span>
					<span className="text-stone-400">DE</span>
					<span>Hyprland</span>
					<span className="text-stone-400">WM</span>
					<span>Hyprland (barchy)</span>
					<span className="text-stone-400">CPU</span>
					<span>Intel i7-3537U</span>
					<span className="text-stone-400">GPU</span>
					<span>Intel HD 4000</span>
					<span className="text-stone-400">Memory</span>
					<span>2.3 / 7.7 GiB</span>
					<span className="text-stone-400">Disk</span>
					<span>184 / 487 GB</span>
				</div>
				<div className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 border-t border-stone-800 pt-3 text-[10px]">
					<span className="text-red-400">██</span><span>1</span>
					<span className="text-green-400">██</span><span>2</span>
					<span className="text-yellow-400">██</span><span>3</span>
					<span className="text-blue-400">██</span><span>4</span>
					<span className="text-purple-400">██</span><span>5</span>
					<span className="text-cyan-400">██</span><span>6</span>
					<span className="text-white">██</span><span>7</span>
				</div>
			</div>
		</div>
	);
}

function DeployLogWindow() {
	const [lines, setLines] = useState<string[]>([]);
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (!inView) return;
		const log = [
			'[12:04:18] build  starting · main@a3f8c91',
			'[12:04:19] build  installing deps · 248 packages',
			'[12:04:24] build  compiling · tsc --noEmit',
			'[12:04:28] build  ✓ compiled clean',
			'[12:04:29] docker multi-arch build · linux/amd64',
			'[12:04:32] docker ✓ sha256:7f2a · 142 MB',
			'[12:04:33] tailscale up · auth-key rotated',
			'[12:04:34] kubectl apply · namespace: apps',
			'[12:04:35] rollout ✓ deployment.apps/scentence-api',
			'[12:04:36] pod    scentence-api-7c4f-9b2d Running',
			'[12:04:37] health ✓ /api/ping → 200 in 38ms',
			'[12:04:37] done   shipped to prod',
		];
		let cancelled = false;
		(async () => {
			for (let i = 0; i < log.length; i++) {
				if (cancelled) return;
				await new Promise((r) => setTimeout(r, 380));
				setLines((prev) => [...prev, log[i]]);
			}
		})();
		return () => { cancelled = true; };
	}, [inView]);

	return (
		<div
			ref={ref}
			className="overflow-hidden rounded-xl border border-stone-800/60"
			style={{
				background: 'var(--color-terminal-bg)',
				boxShadow: 'var(--shadow-terminal)',
			}}
		>
			<div className="flex items-center gap-2 border-b border-stone-800/70 px-3 py-2">
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
				<span className="ml-2 font-[JetBrains_Mono] text-[10px] text-stone-500">deploy · main</span>
				<span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5">
					<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
					<span className="font-[JetBrains_Mono] text-[10px] text-amber-300">live log</span>
				</span>
			</div>
			<div className="terminal-scroll h-[260px] overflow-y-auto px-3 py-3 sm:h-[280px] sm:px-4">
				<pre className="whitespace-pre-wrap break-words font-[JetBrains_Mono] text-[10px] leading-[1.7] sm:text-[11px]" style={{ color: 'var(--color-terminal-fg)' }}>
					{lines.map((l, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -4 }}
							animate={{ opacity: 1, x: 0 }}
							className={cn(
								l.includes('✓') && 'text-green-400',
								l.includes('done') && 'text-accent',
							)}
						>
							{l}
						</motion.div>
					))}
					{lines.length > 0 && lines.length < 12 && (
						<div className="text-stone-500">
							<span className="inline-block h-[0.9em] w-[6px] translate-y-[1px] bg-stone-300 align-middle animate-blink" />
						</div>
					)}
				</pre>
			</div>
		</div>
	);
}

/**
 * The signature piece: a faux homelab workbench with three windows
 * (terminal, system info, deploy log) on a backdrop, animated in.
 */
export default function Workbench() {
	const [tab, setTab] = useState<'terminal' | 'metrics' | 'deploy'>('terminal');

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-10% 0px' }}
			transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
			className="relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20"
		>
			{/* Window group */}
			<div className="grid gap-3 md:grid-cols-2 md:gap-4">
				<div className={cn(tab === 'terminal' ? 'block' : 'hidden md:block', tab === 'terminal' && '')}>
					<TabButton active={tab === 'terminal'} onClick={() => setTab('terminal')} label="homelab ~ kubectl" />
					<TerminalWindow />
				</div>
				<div className={cn('md:grid md:gap-4', tab === 'metrics' ? 'block' : 'hidden md:block', tab === 'metrics' ? 'block' : 'hidden md:grid')}>
					<div className="md:grid md:gap-4">
						<TabButton active={tab === 'metrics'} onClick={() => setTab('metrics')} label="neofetch" />
						<MetricsWindow />
					</div>
				</div>
				<div className={cn(tab === 'deploy' ? 'col-span-2 block' : 'hidden md:col-span-2 md:block')}>
					<TabButton active={tab === 'deploy'} onClick={() => setTab('deploy')} label="deploy · main" />
					<DeployLogWindow />
				</div>
			</div>

			<p className="mt-4 text-center font-[JetBrains_Mono] text-[11px] text-fg-faint">
				<span className="text-accent">live-ish</span> — the real services, simulated for your reading pleasure
			</p>
		</motion.div>
	);
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'mb-2 inline-flex items-center gap-2 rounded-md px-2.5 py-1 font-[JetBrains_Mono] text-[10px] uppercase tracking-wider transition-colors md:hidden',
				active ? 'bg-accent/10 text-accent' : 'text-fg-faint',
			)}
		>
			<span className={cn('h-1.5 w-1.5 rounded-full', active ? 'bg-accent' : 'bg-fg-faint')} />
			{label}
		</button>
	);
}
