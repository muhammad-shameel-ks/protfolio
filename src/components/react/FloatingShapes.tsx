import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useMotionValue } from 'framer-motion';

/**
 * Mood-aware background: a slow gradient mesh that drifts with scroll,
 * with tiny accents that spin/rotate from scroll velocity. Density is
 * deliberately kept low for an editorial feel.
 */
export default function FloatingShapes() {
	const { scrollY, scrollYProgress } = useScroll();

	// Parallax y-offsets for each blob
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -340]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, -260]);

	// Scroll velocity → springy spin for the small accents
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
	const velocityFactor = useTransform(smoothVelocity, [0, 1000, -1000], [0, 0.5, -0.5]);
	const spin = useTransform(velocityFactor, (v) => `rotate(${v}deg)`);
	const spinDeg = useTransform(velocityFactor, (v) => v);
	React.useEffect(() => {
		// sync the SVG string transform to a number for rotate prop
		return spinDeg.on('change', (deg) => {
			document.documentElement.style.setProperty('--scroll-spin', `${deg}deg`);
		});
	}, [spinDeg]);

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
			{/* Soft gradient mesh blobs — different colors at different scroll positions */}
			<motion.div
				style={{ y: y1 }}
				className="absolute -right-48 -top-32 h-[600px] w-[600px] rounded-full bg-pastel-orange/22 blur-[140px] animate-drift"
			/>
			<motion.div
				style={{ y: y2 }}
				className="absolute -left-48 top-[60vh] h-[450px] w-[450px] rounded-full bg-pastel-blue/18 blur-[140px]"
			/>
			<motion.div
				style={{ y: y3 }}
				className="absolute -right-32 top-[160vh] h-[400px] w-[400px] rounded-full bg-pastel-purple/16 blur-[120px]"
			/>
			<motion.div
				style={{ y: y4 }}
				className="absolute -left-40 top-[250vh] h-[350px] w-[350px] rounded-full bg-pastel-green/14 blur-[120px]"
			/>
			<motion.div
				style={{ y: y1 }}
				className="absolute -right-40 top-[340vh] h-[400px] w-[400px] rounded-full bg-pastel-pink/14 blur-[120px]"
			/>

			{/* Subtle dot grid background */}
			<div className="absolute inset-0 dot-grid opacity-30" />

			{/* Tiny accents — desktop only */}
			<motion.div
				style={{ y: y1 }}
				className="absolute right-[8vw] top-[12vh] hidden h-9 w-9 rounded-full border-2 border-accent/15 animate-float md:block"
			/>
			<motion.div
				style={{ y: y3 }}
				className="absolute left-[6vw] top-[50vh] hidden h-5 w-5 rotate-12 rounded-md bg-pastel-blue/30 animate-float-slow md:block"
			/>
			<motion.div
				style={{ y: y1, rotate: spinDeg }}
				className="absolute left-[10vw] top-[130vh] hidden md:block"
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent/15">
					<path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
				</svg>
			</motion.div>
			<motion.div
				style={{ y: y2 }}
				className="absolute right-[6vw] top-[200vh] hidden h-4 w-4 rounded-full bg-pastel-pink/30 animate-float md:block"
			/>
			<motion.div
				style={{ y: y3 }}
				className="absolute left-[8vw] top-[280vh] hidden h-3 w-3 rotate-45 border border-accent/15 animate-float-slow md:block"
			/>
		</div>
	);
}
