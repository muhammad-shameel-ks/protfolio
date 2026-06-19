import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor — soft trailing dot with a label ring that morphs
 * based on what the pointer hovers over. Disabled on touch devices and
 * when prefers-reduced-motion is set.
 */
export default function CustomCursor() {
	const [enabled, setEnabled] = useState(false);
	const [label, setLabel] = useState<string | null>(null);
	const [variant, setVariant] = useState<'default' | 'hover' | 'drag'>('default');

	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
	const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

	useEffect(() => {
		const isFine = window.matchMedia('(pointer: fine)').matches;
		const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!isFine || isReduced) return;
		setEnabled(true);
		document.documentElement.classList.add('has-custom-cursor');

		const onMove = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const target = e.target as HTMLElement;
			const hoverEl = target.closest('[data-cursor]') as HTMLElement | null;
			const labelEl = target.closest('[data-cursor-label]') as HTMLElement | null;
			if (labelEl) setLabel(labelEl.getAttribute('data-cursor-label'));
			else setLabel(null);
			if (hoverEl) setVariant((hoverEl.getAttribute('data-cursor') as any) || 'hover');
			else setVariant('default');
		};

		window.addEventListener('mousemove', onMove);
		return () => {
			window.removeEventListener('mousemove', onMove);
			document.documentElement.classList.remove('has-custom-cursor');
		};
	}, [x, y]);

	if (!enabled) return null;

	const isHover = variant === 'hover';
	const isDrag = variant === 'drag';

	return (
		<>
			{/* Trailing soft glow */}
			<motion.div
				aria-hidden
				style={{ x: sx, y: sy }}
				className="pointer-events-none fixed left-0 top-0 z-[200] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-md"
			/>
			{/* Ring */}
			<motion.div
				aria-hidden
				style={{ x: sx, y: sy }}
				animate={{
					scale: isHover ? 1.7 : isDrag ? 0.6 : 1,
					opacity: isHover ? 0.6 : 1,
				}}
				transition={{ type: 'spring', stiffness: 400, damping: 28 }}
				className="pointer-events-none fixed left-0 top-0 z-[201] flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-fg/40 bg-bg/30 backdrop-blur-sm mix-blend-difference"
			>
				{label && (
					<motion.span
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						className="font-[Silkscreen] text-[8px] font-bold uppercase tracking-wider text-white"
					>
						{label}
					</motion.span>
				)}
			</motion.div>
			{/* Inner dot */}
			<motion.div
				aria-hidden
				style={{ x, y }}
				className="pointer-events-none fixed left-0 top-0 z-[202] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
			/>
		</>
	);
}
