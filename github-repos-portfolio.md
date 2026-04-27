# Project Intelligence: Portfolio Source of Truth

This document serves as the high-signal "Source of Truth" for an AI agent to generate a professional portfolio website for **Muhammad Shameel KS**. It details the technical architecture, purpose, and creative vision behind his key projects.

---

## 🖥️ Operating System & Desktop Environment
**Daily Driver: Arch Linux (Omarchy Framework)**

Muhammad is a power user who daily drives Arch Linux, specifically utilizing the **Omarchy** philosophy—a modular, "no-bloat" framework for the Hyprland tiling window manager. 

- **Custom Framework**: [Barchy Reborn](https://github.com/muhammad-shameel-ks/barchy-reborn) – A lightweight, highly efficient desktop experience with modular settings and atomic theming.
- **Featured Theme**: [Blue Land Omarchy](https://github.com/muhammad-shameel-ks/blue-land-omarchy-theme) – A custom-built, tranquil sapphire-themed environment featuring cohesive styling for Waybar, Hyprland, and system UI.
- **Dotfiles**: [dotfiles](https://github.com/muhammad-shameel-ks/dotfiles) – A private collection of highly optimized configurations that power his production environment.

---

## 🚀 Key Projects

### [Stock Salt](https://github.com/muhammad-shameel-ks/stock-salt)
**"Real-time Multi-Outlet Retail Management SaaS"**
- **Tech Stack**: Next.js 15, TypeScript 5, Tailwind CSS 4, Supabase (PostgreSQL + Realtime), Recharts, shadcn/ui.
- **Purpose**: Solves the complex problem of inventory drift and revenue tracking across multiple retail outlets.
- **Technical Highlights**:
    - **Real-time Synchronization**: Uses Supabase Realtime to broadcast stock changes and sales across all POS terminals instantly without page refreshes.
    - **Inventory Hub**: Implements a centralized master stock system that handles daily distribution to branches with automatic availability checks.
    - **Analytics**: Beautifully visualizes hourly revenue momentum and outlet performance rankings.

### [Office Pal](https://github.com/muhammad-shameel-ks/office_pal)
**"Comprehensive All-in-One College Management System"**
- **Tech Stack**: Flutter, Supabase (PostgreSQL), Riverpod (State Management), GoRouter.
- **Purpose**: Modernizes college administration by replacing manual, paper-based processes with an efficient, automated digital solution for students, faculty, and administrators.
- **Technical Highlights**:
    - **Automated Seating Algorithm**: A sophisticated logic system that automatically generates optimized exam seating arrangements, ensuring students taking the same exam are not seated in adjacent positions (horizontal, vertical, or diagonal).
    - **PDF Generation Engine**: Instantly creates professional, print-ready seating charts and exam documents.
    - **Role-Based Access Control**: Tailored feature sets for Students (course progress), Faculty (leave management/dashboards), Superintendents (enrollment metrics), and Controllers (exam scheduling).

### [KSDC Smart Helper](https://github.com/muhammad-shameel-ks/ksdc-smart-helper)
**"Government Database Utility for Kerala State Development Corp"**
- **Client**: Kerala State Development Corporation for SC and ST.
- **Tech Stack**: Vite, React, TypeScript, Node.js, MSSQL/PostgreSQL.
- **Purpose**: Built to resolve complex database issues and streamline data integrity checks for a government organization.
- **Technical Highlights**:
    - **Silent Failure Resolution**: Debugged and resolved critical backend API crashes caused by environment-specific encryption settings.
    - **Security**: Implemented robust CORS configurations and centralized environment management for secure production deployment.

### [n8n Easy Webhooks](https://github.com/muhammad-shameel-ks/n8n-easy-webhook)
**"Zero-Config Automation Tunneling Utility"**
- **Tech Stack**: Python (TUI/CLI), Docker, Cloudflare Tunnel API.
- **Purpose**: Simplifies n8n local development by removing the need for public IP addresses or manual port forwarding.
- **Technical Highlights**:
    - **Automated Tunneling**: Dynamically creates a Cloudflare Tunnel and configures n8n's internal webhook URL to match the public tunnel endpoint.
    - **Dual Interface**: Features a CLI for quick actions and a Python-based TUI (`npyscreen`) for interactive service monitoring.

---

## ☸️ Kubernetes & Infrastructure

### [K8s Root](https://github.com/muhammad-shameel-ks/k8s)
**"Infrastructure-as-Code Journey"**
- **Scope**: The central repository for Muhammad's Kubernetes manifests and self-hosted services.
- **Services Managed**: Pi-hole (Network-wide DNS blocking), PocketBase (Lightweight Backend), and custom apps.

### [K8s Demo](https://github.com/muhammad-shameel-ks/k8s-demo)
**"Zero-Trust CI/CD Implementation"**
- **Tech Stack**: React 19, Vite, Docker, K8s, GitHub Actions, Tailscale.
- **Workflow**:
    - Muhammad pushes code to GitHub.
    - GitHub Actions triggers, builds the container, and authenticates via **Tailscale**.
    - Through a secure, encrypted tunnel, the runner pushes the update directly to his **Private Home Server** (VAIO).
    - The K8s cluster updates the deployment automatically, demonstrating a complete production-grade pipeline without exposing any home ports.

---

## 🎨 Creative & Tooling

### [Omarchy Theme Gen GUI](https://github.com/muhammad-shameel-ks/omarchy-theme-gen-gui)
- **Tech Stack**: TypeScript, HTML, CSS (Vite-based UI).
- **Purpose**: A graphical tool designed to simplify the creation and previewing of themes for the Omarchy/Barchy environment, bridging the gap between configuration files and visual design.

### [Kumaralanur](https://github.com/muhammad-shameel-ks/kumaralanur)
- **Scope**: College Project.
- **Purpose**: A creative showcase project using core web technologies (HTML/CSS/JS) to demonstrate UI/UX design skills and creative presentation.

---

## 📊 Quick Summary for Portfolio Agent
- **Key Focus**: Full-stack Development, Automation, and DevOps (K8s).
- **Preferred Stack**: Next.js, Flutter, Supabase, TypeScript, Python.
- **Differentiator**: Ability to build specialized tools for government organizations and private infrastructure (Zero-trust pipelines).
- **Operating Philosophy**: "No-bloat," efficient, and secure.

---
*Generated as a Project Intelligence document.*
