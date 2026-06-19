import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Cinematic preloader — establishes brand tone before the page reveals.
 * Shows: brand mark, progress bar, a terminal log, and a fraction counter.
 * Auto-dismisses after the assets settle (or 2.2s minimum for impact).
 */
export default function Preloader() {
	const [progress, setProgress] = useState(0);
	const [done, setDone] = useState(false);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const prefersReduced =
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReduced) {
			setProgress(100);
			setDone(true);
			const t = setTimeout(() => setVisible(false), 200);
			return () => clearTimeout(t);
		}

		// Animate progress
		const start = performance.now();
		const duration = 1800;
		let raf = 0;
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			// ease out cubic
			const eased = 1 - Math.pow(1 - t, 3);
			setProgress(Math.floor(eased * 100));
			if (t < 1) {
				raf = requestAnimationFrame(tick);
			} else {
				setDone(true);
				setTimeout(() => setVisible(false), 450);
			}
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, []);

	// Terminal lines that type as progress goes up
	const lines = [
		{ at: 0, text: '$ booting shameel.barchy.online' },
		{ at: 15, text: '> mounting /dev/identity' },
		{ at: 35, text: '> resolving homelab.tail...' },
		{ at: 55, text: '> starting kube cluster' },
		{ at: 75, text: '> warming up the type system' },
		{ at: 90, text: '> ✓ ready' },
	];

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
					transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
					className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
				>
					<div className="absolute inset-0 dot-grid opacity-40" />
					<div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pastel-orange/30 blur-[120px]" />
					<div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pastel-blue/30 blur-[120px]" />

					<div className="relative z-10 flex w-[min(92vw,520px)] flex-col items-center gap-8 px-6">
						{/* Brand mark */}
						<motion.div
							initial={{ scale: 0.6, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
							className="relative"
						>
							<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-accent-lg">
								<span className="font-[Silkscreen] text-3xl font-bold text-white">S</span>
							</div>
							<motion.div
								initial={{ scale: 1, opacity: 0.6 }}
								animate={{ scale: 1.5, opacity: 0 }}
								transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
								className="absolute inset-0 rounded-2xl bg-accent/30"
							/>
						</motion.div>

						{/* Title */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="text-center"
						>
							<div className="font-[Silkscreen] text-[10px] uppercase tracking-[0.3em] text-accent">
								Loading the workspace
							</div>
							<div className="mt-2 font-[Fraunces] text-2xl font-medium tracking-tight text-fg">
								Hand-crafted in Kerala
							</div>
						</motion.div>

						{/* Progress bar */}
						<div className="w-full">
							<div className="mb-2 flex items-baseline justify-between font-[JetBrains_Mono] text-[10px] uppercase tracking-wider text-fg-muted">
								<span>booting</span>
								<span className="text-fg">{progress.toString().padStart(3, ' ')}%</span>
							</div>
							<div className="relative h-1 w-full overflow-hidden rounded-full bg-border">
								<motion.div
									style={{ width: `${progress}%` }}
									className="h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
								/>
								{!done && (
									<div className="absolute inset-0 -translate-x-full animate-shimmer" />
								)}
							</div>
						</div>

						{/* Mini terminal log */}
						<div className="w-full rounded-xl border border-stone-800/60 bg-[#15110D] p-4 font-[JetBrains_Mono] text-[10px] leading-relaxed text-stone-400">
							{lines
								.filter((l) => progress >= l.at)
								.map((l, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -4 }}
										animate={{ opacity: 1, x: 0 }}
										className={l.text.includes('✓') ? 'text-green-400' : ''}
									>
										{l.text}
									</motion.div>
								))}
							{progress < 90 && (
								<div className="text-stone-500">
									<span className="text-orange-400">$</span>{' '}
									<span className="inline-block h-[0.9em] w-[6px] translate-y-[1px] bg-stone-300 align-middle animate-blink" />
								</div>
							)}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
