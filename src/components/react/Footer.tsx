import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

const SITEMAP = [
	{
		label: 'Sections',
		items: [
			{ label: 'Home', href: '#hero', external: false },
			{ label: 'Origin', href: '#chapter-01', external: false },
			{ label: 'Work', href: '#projects', external: false },
			{ label: 'Now', href: '#now', external: false },
			{ label: 'Journey', href: '#journey', external: false },
			{ label: 'Stack', href: '#stack', external: false },
		],
	},
	{
		label: 'Elsewhere',
		items: [
			{ label: 'GitHub', href: 'https://github.com/muhammad-shameel-ks', external: true },
			{ label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-shameel-k-s', external: true },
			{ label: 'Scentence', href: 'https://scentenceparfum.com', external: true },
			{ label: 'Resume.pdf', href: '/resume.pdf', external: true },
		],
	},
];

const SOCIALS = [
	{
		href: 'https://github.com/muhammad-shameel-ks',
		label: 'GitHub',
		icon: (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
			</svg>
		),
	},
	{
		href: 'mailto:muhammadshameelks@gmail.com',
		label: 'Email',
		icon: (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
				<polyline points="22,6 12,13 2,6"/>
			</svg>
		),
	},
	{
		href: 'https://linkedin.com/in/muhammad-shameel-k-s',
		label: 'LinkedIn',
		icon: (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
			</svg>
		),
	},
];

function UptimeCounter({ since }: { since: number }) {
	const [now, setNow] = useState(Date.now());
	useEffect(() => {
		const t = setInterval(() => setNow(Date.now()), 1000);
		return () => clearInterval(t);
	}, []);

	const diff = Math.max(0, now - since);
	const d = Math.floor(diff / (1000 * 60 * 60 * 24));
	const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const m = Math.floor((diff / (1000 * 60)) % 60);
	const s = Math.floor((diff / 1000) % 60);

	return (
		<span className="font-[JetBrains_Mono] tabular-nums">
			{d}d {h.toString().padStart(2, '0')}:{m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}
		</span>
	);
}

export default function Footer() {
	// Uptime started about 31 days ago — the cluster's been online
	const clusterSince = useState(() => Date.now() - 31 * 24 * 60 * 60 * 1000 - 4 * 60 * 60 * 1000)[0];

	return (
		<footer className="relative overflow-hidden border-t border-border/60 bg-bg-warm">
			{/* Top "Big signature" section */}
			<div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-20">
				<div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
				<div className="relative mx-auto max-w-6xl">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-balance text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-fg"
					>
						<span className="font-[Fraunces] italic text-accent">Thanks</span> for reading.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="mt-6 max-w-lg text-lg font-light leading-relaxed text-fg-muted"
					>
						If anything here resonated — a project, a story, or a system you'd like to collaborate on — I'd love to hear from you.
					</motion.p>
				</div>
			</div>

			{/* Divider */}
			<div className="mx-auto h-px max-w-6xl bg-border/60" />

			{/* Sitemap + status */}
			<div className="px-6 py-12 md:px-12 lg:px-20">
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-10 md:grid-cols-12">
						{/* Brand */}
						<div className="md:col-span-4">
							<div className="mb-3 flex items-center gap-2.5">
								<div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent shadow-accent">
									<span className="font-[Silkscreen] text-sm font-bold text-white">S</span>
									<span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-bg-warm bg-green-500" />
								</div>
								<div>
									<p className="text-sm font-bold text-fg">Muhammad Shameel KS</p>
									<p className="font-[JetBrains_Mono] text-[10px] text-fg-faint">@shameel · IN</p>
								</div>
							</div>
							<p className="text-sm font-light leading-relaxed text-fg-muted">
								Full-stack engineer, self-host evangelist, and the guy who runs a K8s cluster on a Sony VAIO.
							</p>
						</div>

						{/* Sitemap */}
						{SITEMAP.map((section) => (
							<div key={section.label} className="md:col-span-3">
								<div className="mb-3 font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint">
									{section.label}
								</div>
								<ul className="space-y-1.5">
									{section.items.map((item) => (
										<li key={item.label}>
											<a
												href={item.href}
												target={item.external ? '_blank' : undefined}
												rel={item.external ? 'noreferrer' : undefined}
												data-cursor="hover"
												className="group inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
											>
												{item.label}
												{item.external && (
													<svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="opacity-50 transition-opacity group-hover:opacity-100">
														<path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												)}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}

						{/* Cluster status card */}
						<div className="md:col-span-2">
							<div className="mb-3 font-[Silkscreen] text-[10px] uppercase tracking-widest text-fg-faint">
								Cluster
							</div>
							<div className="rounded-xl border border-border/60 bg-white/60 p-3 font-[JetBrains_Mono] text-[10px] backdrop-blur-sm">
								<div className="mb-1.5 flex items-center gap-1.5">
									<span className="relative flex h-1.5 w-1.5">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
										<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
									</span>
									<span className="text-fg">online</span>
								</div>
								<div className="text-fg-faint">uptime</div>
								<div className="text-fg">
									<UptimeCounter since={clusterSince} />
								</div>
								<div className="mt-1.5 text-fg-faint">7/7 pods</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className="mx-auto h-px max-w-6xl bg-border/60" />

			{/* Bottom bar */}
			<div className="px-6 py-6 md:px-12 lg:px-20">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-center text-xs text-fg-faint md:text-left">
						© {new Date().getFullYear()} shameel · built with Astro on Arch Linux
						<span className="mx-1.5">·</span>
						<span className="text-accent">no trackers, no cookies</span>
					</p>

					{/* Socials */}
					<div className="flex items-center gap-2">
						{SOCIALS.map((s) => (
							<motion.a
								key={s.label}
								whileHover={{ scale: 1.1, y: -2 }}
								href={s.href}
								target={s.href.startsWith('http') ? '_blank' : undefined}
								rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
								aria-label={s.label}
								data-cursor="hover"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white text-fg-muted transition-colors hover:border-accent hover:text-fg"
							>
								{s.icon}
							</motion.a>
						))}
					</div>

					<p className="font-[JetBrains_Mono] text-[10px] text-fg-faint">
						<span className="text-accent">$</span> echo "built with intent"
					</p>
				</div>
			</div>
		</footer>
	);
}
