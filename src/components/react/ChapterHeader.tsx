import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useModalOpen } from './PersistentNav';

const CHAPTERS = [
	{ id: 'hero', n: '00', label: 'Home' },
	{ id: 'chapter-01', n: '01', label: 'The Origin' },
	{ id: 'chapter-02', n: '02', label: 'The Philosophy' },
	{ id: 'chapter-03', n: '03', label: 'The Sysadmin' },
	{ id: 'projects', n: 'WORK', label: 'The Work' },
	{ id: 'now', n: 'NOW', label: 'Cluster Status' },
	{ id: 'infra', n: 'PIPE', label: 'Infrastructure' },
	{ id: 'journey', n: 'TIME', label: 'The Journey' },
	{ id: 'stack', n: 'STACK', label: 'The Stack' },
	{ id: 'contact', n: '06', label: 'The Connection' },
];

export default function ChapterHeader() {
	const [visibleChapter, setVisibleChapter] = useState(CHAPTERS[0]);
	const [isVisible, setIsVisible] = useState(false);
	const [time, setTime] = useState('');
	const isModalOpen = useModalOpen();

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [200, 400], [0, 1]);
	const y = useTransform(scrollY, [200, 400], [-10, 0]);

	useEffect(() => {
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			const intersecting = entries.filter((e) => e.isIntersecting);
			if (intersecting.length > 0) {
				const chapter = CHAPTERS.find((c) => c.id === intersecting[intersecting.length - 1].target.id);
				if (chapter) setVisibleChapter(chapter);
			}
		};
		const observer = new IntersectionObserver(observerCallback, {
			rootMargin: '-40% 0% -40% 0%',
			threshold: 0,
		});
		CHAPTERS.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const onScroll = () => {
			setIsVisible(window.scrollY > window.innerHeight * 0.6);
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const update = () => {
			const d = new Date();
			setTime(
				`${d.getHours().toString().padStart(2, '0')}:${d
					.getMinutes()
					.toString()
					.padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`,
			);
		};
		update();
		const t = setInterval(update, 1000);
		return () => clearInterval(t);
	}, []);

	return (
		<AnimatePresence mode="wait">
			{isVisible && (
				<motion.div
					style={{
						opacity: isModalOpen ? 0 : opacity,
						y: isModalOpen ? -10 : y,
						pointerEvents: isModalOpen ? 'none' : 'auto',
					}}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="fixed left-0 right-0 top-0 z-40 border-b border-border/40 bg-bg/80 backdrop-blur-md"
				>
					<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-8">
						{/* Brand + chapter */}
						<div className="flex items-center gap-3">
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent"
							>
								<span className="font-[Silkscreen] text-[10px] font-bold text-white">S</span>
							</motion.div>
							<AnimatePresence mode="wait">
								<motion.div
									key={visibleChapter.id}
									initial={{ opacity: 0, y: 4 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -4 }}
									transition={{ duration: 0.2 }}
									className="flex items-center gap-2.5"
								>
									<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-accent">
										{visibleChapter.n}
									</span>
									<span className="h-3 w-px bg-border" />
									<span className="font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-muted">
										{visibleChapter.label}
									</span>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Right — live status + time */}
						<div className="flex items-center gap-3 font-mono text-[10px] text-fg-faint">
							<span className="hidden items-center gap-1.5 md:flex">
								<span className="relative flex h-1.5 w-1.5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
									<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
								</span>
								cluster · 31d
							</span>
							<span className="hidden md:block">·</span>
							<span className="tabular-nums">{time}</span>
							<span className="md:hidden">·</span>
							<span className="md:hidden">IN</span>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
