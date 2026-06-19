# Portfolio

Personal portfolio for **Muhammad Shameel KS** — Full-Stack Engineer & DevOps-in-progress. Built with Astro, React islands, Tailwind CSS v4, and Framer Motion.

## What's here

A single-page, story-driven portfolio with a "refined editorial" aesthetic — warm cream background, burnt-orange accent, soft pastels, and a Inter / JetBrains Mono / Silkscreen type trio.

### Sections
- **Hero** — bigger confident type, compact live terminal preview, magnetic CTA
- **Stats strip** — calm facts (no count-up gimmicks)
- **Chapters 01–05** — the DevOps journey narrative
- **Live homelab terminal** ⭐ — auto-typing `kubectl`/`docker` proving the self-hosted stack
- **Projects** — bento showcase with Scentence (live, real revenue) featured large
- **Infra pipeline** — cinematic GitPush → Actions → Tailscale → K8s flow
- **The Stack** — grouped by category + a marquee strip
- **Contact** — PocketBase-on-VAIO form with floating labels & magnetic submit

### Extras
- On-brand terminal-style **404** page
- `robots.txt`, JSON-LD structured data, Open Graph image
- Full `prefers-reduced-motion` support throughout

## Tech Stack

- **Astro** (SSR, Vercel adapter) — page shell & API routes
- **React** — interactive islands (`client:load` / `client:visible`)
- **Tailwind CSS v4** — styling via `@theme` design tokens
- **Framer Motion** — scroll-linked & gesture animations
- **PocketBase** — contact form backend (runs on the homelab K8s cluster)

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun build
```

## Environment Variables

Copy `.env.example` to `.env` and set:

```
POCKETBASE_URL=https://pb.barchy.online
```

## Project Structure

```
src/
├── components/react/      # React islands (Hero, Terminal, ProjectList, ...)
├── lib/cn.ts              # clsx + tailwind-merge helper
├── layouts/Layout.astro   # HTML shell, SEO meta, JSON-LD
├── pages/
│   ├── index.astro        # the single page
│   ├── 404.astro          # terminal-style not-found
│   └── api/contact.ts     # hardened contact API (rate-limit, validation)
└── styles/global.css      # design tokens, motion keyframes, a11y guards
```
