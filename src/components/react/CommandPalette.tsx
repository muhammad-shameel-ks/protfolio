import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';

interface Command {
	id: string;
	title: string;
	subtitle?: string;
	section: string;
	icon: React.ReactNode;
	action: () => void;
	keywords?: string[];
	shortcut?: string[];
}

export default function CommandPalette() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [active, setActive] = useState(0);

	const commands: Command[] = useMemo(
		() => [
			{
				id: 'home',
				title: 'Go home',
				subtitle: 'Hero section',
				section: 'Navigate',
				icon: <IconHome />,
				action: () => scrollTo('hero'),
				shortcut: ['G', 'H'],
				keywords: ['top', 'start'],
			},
			{
				id: 'projects',
				title: 'See the work',
				section: 'Navigate',
				icon: <IconStar />,
				action: () => scrollTo('projects'),
				shortcut: ['G', 'P'],
				keywords: ['portfolio', 'projects'],
			},
			{
				id: 'now',
				title: 'Cluster status',
				subtitle: 'Live snapshot',
				section: 'Navigate',
				icon: <IconPulse />,
				action: () => scrollTo('now'),
				keywords: ['live', 'k8s', 'status'],
			},
			{
				id: 'journey',
				title: 'My journey',
				section: 'Navigate',
				icon: <IconClock />,
				action: () => scrollTo('journey'),
				keywords: ['timeline', 'story'],
			},
			{
				id: 'stack',
				title: 'The stack',
				section: 'Navigate',
				icon: <IconLayers />,
				action: () => scrollTo('stack'),
				keywords: ['tools', 'tech'],
			},
			{
				id: 'contact',
				title: 'Get in touch',
				section: 'Navigate',
				icon: <IconMail />,
				action: () => scrollTo('contact'),
				shortcut: ['G', 'C'],
				keywords: ['email', 'message'],
			},
			{
				id: 'github',
				title: 'Open GitHub',
				subtitle: '@muhammad-shameel-ks',
				section: 'Links',
				icon: <IconGithub />,
				action: () => window.open('https://github.com/muhammad-shameel-ks', '_blank'),
				keywords: ['code', 'repo'],
			},
			{
				id: 'linkedin',
				title: 'Open LinkedIn',
				subtitle: 'muhammad-shameel-k-s',
				section: 'Links',
				icon: <IconLinkedin />,
				action: () => window.open('https://linkedin.com/in/muhammad-shameel-k-s', '_blank'),
			},
			{
				id: 'email',
				title: 'Send email',
				subtitle: 'muhammadshameelks@gmail.com',
				section: 'Links',
				icon: <IconMail />,
				action: () => window.open('mailto:muhammadshameelks@gmail.com', '_blank'),
			},
			{
				id: 'resume',
				title: 'Download resume',
				section: 'Links',
				icon: <IconDownload />,
				action: () => window.open('/resume.pdf', '_blank'),
			},
			{
				id: 'theme-toggle',
				title: 'Toggle theme',
				subtitle: 'Currently light',
				section: 'Theme',
				icon: <IconSun />,
				action: () => {
					/* placeholder for theme toggle */
				},
			},
		],
		[],
	);

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	// Filter commands
	const filtered = useMemo(() => {
		if (!query.trim()) return commands;
		const q = query.toLowerCase();
		return commands.filter(
			(c) =>
				c.title.toLowerCase().includes(q) ||
				c.subtitle?.toLowerCase().includes(q) ||
				c.section.toLowerCase().includes(q) ||
				c.keywords?.some((k) => k.toLowerCase().includes(q)),
		);
	}, [query, commands]);

	// Group by section
	const grouped = useMemo(() => {
		const map = new Map<string, Command[]>();
		filtered.forEach((c) => {
			if (!map.has(c.section)) map.set(c.section, []);
			map.get(c.section)!.push(c);
		});
		return Array.from(map.entries());
	}, [filtered]);

	// Listen for ⌘K / Ctrl+K
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				setOpen((o) => !o);
			}
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	// Reset on open
	useEffect(() => {
		if (open) {
			setQuery('');
			setActive(0);
		}
	}, [open]);

	// Keyboard navigation
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				setActive((a) => Math.min(filtered.length - 1, a + 1));
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				setActive((a) => Math.max(0, a - 1));
			} else if (e.key === 'Enter') {
				e.preventDefault();
				const cmd = filtered[active];
				if (cmd) {
					cmd.action();
					setOpen(false);
				}
			}
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, active, filtered]);

	return (
		<>
			{/* Hint chip in nav */}
			<button
				onClick={() => setOpen(true)}
				data-cursor="hover"
				className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-border/60 bg-white/80 px-3 py-1.5 font-[JetBrains_Mono] text-[10px] text-fg-muted shadow-md backdrop-blur-md transition-colors hover:border-accent/40 hover:text-fg md:flex"
			>
				<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
					<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
				</svg>
				<span>Quick nav</span>
				<kbd className="rounded border border-border bg-bg-warm px-1.5 py-0.5 font-mono text-[9px]">⌘K</kbd>
			</button>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
							onClick={() => setOpen(false)}
						/>
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 20, scale: 0.96 }}
							transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
							className="fixed left-1/2 top-[20vh] z-[81] w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-2xl"
						>
							<div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fg-faint">
									<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
								</svg>
								<input
									autoFocus
									value={query}
									onChange={(e) => {
										setQuery(e.target.value);
										setActive(0);
									}}
									placeholder="Search projects, sections, links…"
									className="flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-faint"
								/>
								<kbd className="rounded border border-border bg-bg-warm px-1.5 py-0.5 font-mono text-[10px] text-fg-muted">esc</kbd>
							</div>

							<div className="max-h-[60vh] overflow-y-auto p-2">
								{grouped.length === 0 ? (
									<div className="p-8 text-center font-mono text-xs text-fg-faint">no results for "{query}"</div>
								) : (
									grouped.map(([section, items]) => (
										<div key={section} className="mb-1">
											<div className="px-2 py-1.5 font-[Silkscreen] text-[9px] uppercase tracking-widest text-fg-faint">
												{section}
											</div>
											{items.map((cmd) => {
												const idx = filtered.indexOf(cmd);
												const isActive = idx === active;
												return (
													<button
														key={cmd.id}
														onMouseEnter={() => setActive(idx)}
														onClick={() => {
															cmd.action();
															setOpen(false);
														}}
														data-cursor="hover"
														className={cn(
															'flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors',
															isActive ? 'bg-pastel-orange/40' : 'hover:bg-bg-warm',
														)}
													>
														<div
															className={cn(
																'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
																isActive ? 'bg-accent text-white' : 'bg-bg-warm text-fg-muted',
															)}
														>
															{cmd.icon}
														</div>
														<div className="min-w-0 flex-1">
															<div className="text-sm font-medium text-fg">{cmd.title}</div>
															{cmd.subtitle && (
																<div className="truncate font-mono text-[10px] text-fg-faint">
																	{cmd.subtitle}
																</div>
															)}
														</div>
														{cmd.shortcut && (
															<div className="flex items-center gap-0.5 font-mono text-[10px] text-fg-faint">
																{cmd.shortcut.map((k, i) => (
																	<kbd
																		key={i}
																		className="rounded border border-border bg-bg-warm px-1.5 py-0.5"
																	>
																		{k}
																	</kbd>
																))}
															</div>
														)}
													</button>
												);
											})}
										</div>
									))
								)}
							</div>

							<div className="flex items-center justify-between border-t border-border/60 bg-bg-warm/40 px-4 py-2 font-mono text-[10px] text-fg-faint">
								<div className="flex items-center gap-3">
									<span className="flex items-center gap-1">
										<kbd className="rounded border border-border bg-white px-1.5 py-0.5">↑↓</kbd>
										navigate
									</span>
									<span className="flex items-center gap-1">
										<kbd className="rounded border border-border bg-white px-1.5 py-0.5">↵</kbd>
										select
									</span>
								</div>
								<span>built by shameel</span>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

function scrollTo(id: string) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Icons
const I = (children: React.ReactNode) => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
		{children}
	</svg>
);
const IconHome = () => I(<><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>);
const IconStar = () => I(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>);
const IconPulse = () => I(<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>);
const IconClock = () => I(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>);
const IconLayers = () => I(<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>);
const IconMail = () => I(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>);
const IconGithub = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
const IconLinkedin = () => I(<><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>);
const IconDownload = () => I(<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>);
const IconSun = () => I(<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>);
