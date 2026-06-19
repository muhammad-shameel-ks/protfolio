import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/cn';

export const NAV_ITEMS = [
	{ id: 'hero', label: 'Home', short: 'HOME', n: '00' },
	{ id: 'chapter-01', label: 'Origin', short: 'ORIGIN', n: '01' },
	{ id: 'chapter-02', label: 'Philosophy', short: 'PHIL', n: '02' },
	{ id: 'chapter-03', label: 'Sysadmin', short: 'OPS', n: '03' },
	{ id: 'projects', label: 'Work', short: 'WORK', n: '04' },
	{ id: 'now', label: 'Now', short: 'NOW', n: '05' },
	{ id: 'infra', label: 'Infra', short: 'INFRA', n: '06' },
	{ id: 'journey', label: 'Journey', short: 'JOURNEY', n: '07' },
	{ id: 'stack', label: 'Stack', short: 'STACK', n: '08' },
	{ id: 'contact', label: 'Reach', short: 'REACH', n: '09' },
];

/**
 * Shared hook: observe the body for the `data-modal-open` attribute that the
 * project screenshot modal toggles. Replaces the per-component setInterval
 * polling in the original (which ran ~3 intervals at 50–100ms each).
 */
export function useModalOpen(): boolean {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const update = () => setOpen(document.body.hasAttribute('data-modal-open'));
		update();
		const observer = new MutationObserver(update);
		observer.observe(document.body, { attributes: true, attributeFilter: ['data-modal-open'] });
		return () => observer.disconnect();
	}, []);
	return open;
}

export default function PersistentNav() {
	const [activeSection, setActiveSection] = useState('hero');
	const { scrollY, scrollYProgress } = useScroll();
	const isModalOpen = useModalOpen();

	const dockOpacity = useTransform(scrollY, [200, 400], [0, 1]);
	const dockX = useTransform(scrollY, [200, 400], [-20, 0]);

	useEffect(() => {
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			const intersecting = entries.filter((e) => e.isIntersecting);
			if (intersecting.length > 0) {
				setActiveSection(intersecting[intersecting.length - 1].target.id);
			}
		};
		const observer = new IntersectionObserver(observerCallback, {
			rootMargin: '-30% 0% -50% 0%',
			threshold: 0,
		});
		NAV_ITEMS.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
		else if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			{/* Right-side vertical rail — desktop */}
			<motion.aside
				aria-label="Section navigation"
				style={{
					opacity: isModalOpen ? 0 : 1,
					pointerEvents: isModalOpen ? 'none' : 'auto',
				}}
				className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-1.5 xl:flex"
			>
				{NAV_ITEMS.map((item) => {
					const isActive = activeSection === item.id;
					return (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							aria-label={item.label}
							aria-current={isActive ? 'true' : undefined}
							data-cursor="hover"
							className="group flex items-center gap-2"
						>
							<span
								className={cn(
									'overflow-hidden whitespace-nowrap rounded-md px-2 py-0.5 font-[Silkscreen] text-[9px] uppercase tracking-widest opacity-0 transition-all group-hover:opacity-100',
									isActive
										? 'bg-accent/15 text-accent'
										: 'bg-white/80 text-fg-muted backdrop-blur-sm',
								)}
							>
								{item.short}
							</span>
							<motion.span
								animate={{
									width: isActive ? 24 : 6,
									backgroundColor: isActive ? '#E8613C' : '#D8D5D0',
								}}
								transition={{ type: 'spring', stiffness: 300, damping: 25 }}
								className="h-px rounded-full"
							/>
						</button>
					);
				})}

				{/* Top progress arc */}
				<div className="mt-3 flex items-center gap-2">
					<svg width="20" height="20" viewBox="0 0 20 20" className="overflow-visible">
						<circle cx="10" cy="10" r="8" fill="none" stroke="#ECEAE6" strokeWidth="2" />
						<motion.circle
							cx="10" cy="10" r="8"
							fill="none" stroke="#E8613C" strokeWidth="2" strokeLinecap="round"
							style={{ pathLength: scrollYProgress }}
							transform="rotate(-90 10 10)"
						/>
					</svg>
					<span className="font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-muted">
						scroll
					</span>
				</div>
			</motion.aside>

			{/* Mobile bottom dock */}
			<motion.nav
				aria-label="Quick navigation"
				style={{
					opacity: isModalOpen ? 0 : dockOpacity,
					x: isModalOpen ? 0 : dockX,
					pointerEvents: isModalOpen ? 'none' : 'auto',
				}}
				className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 xl:hidden"
			>
				<div className="pointer-events-auto flex items-center gap-0.5 rounded-2xl border border-border/60 bg-white/90 p-1 shadow-lg backdrop-blur-md">
					{NAV_ITEMS.slice(0, 6).map((item) => {
						const isActive = activeSection === item.id;
						return (
							<button
								key={item.id}
								onClick={() => scrollTo(item.id)}
								aria-label={item.label}
								aria-current={isActive ? 'true' : undefined}
								data-cursor="hover"
								className={cn(
									'relative rounded-xl px-2.5 py-1.5 transition-colors',
									isActive ? 'text-accent' : 'text-fg-muted hover:text-fg',
								)}
							>
								<span className="font-[Silkscreen] text-[9px] font-bold uppercase tracking-tight">
									{item.short}
								</span>
								{isActive && (
									<motion.div
										layoutId="active-mobile-pill"
										className="absolute inset-0 -z-10 rounded-xl bg-pastel-orange/40"
										transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
									/>
								)}
							</button>
						);
					})}
				</div>
			</motion.nav>
		</>
	);
}
