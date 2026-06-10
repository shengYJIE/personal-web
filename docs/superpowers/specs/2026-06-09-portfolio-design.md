# Portfolio Website Design Spec

**Date:** 2026-06-09
**Status:** Approved
**For:** 盛勇杰 (Sheng Yongjie) — AI Engineer & Embedded Developer

## Overview

Personal portfolio website built from scratch using React + Vite. Dark, refined, tech-forward aesthetic with asymmetric editorial layout. PC-first design with ~1700px max content width.

## Design Direction

- **Aesthetic:** Refined Dark — Apple/Linear-style extreme minimalism on dark backgrounds
- **Color:** Cool blue dark palette. Backgrounds `#050508` → `#14141b` (4 levels). Accent `#5b9cff` used sparingly. Text `#f0f0f0` / `#888` / `#555`.
- **Typography:** Geist font family (Vercel). Headings in Light 300, body in Regular 400, labels in Medium 500 with wide tracking.
- **Motion:** Scroll-triggered fade-in + translateY(20px), hover micro-lift (translateY -2px + glow), cursor-follow spotlight in Hero, smooth anchor scrolling.

## Sections

### 01. Hero (100vh)
- Full-screen video background (user provides video; CSS gradient fallback)
- Fixed semi-transparent top navigation bar (logo left, nav links right, contact CTA)
- Left-aligned text block (~40% width): large name title, subtitle, CTA buttons
- Cursor-follow spotlight effect for immersion
- Max-width container: 1700px

### 02. About / Experience (auto height)
- Asymmetric 60/40 layout
- Left 60%: personal introduction paragraph, contact details
- Right 40%: vertical data metrics (projects count, years, skills count) with large numerals and fine dividers
- Avatar placeholder area

### 03. Featured Projects (auto height)
- Alternating card widths: 65% left, 50% right, 70% left...
- Each card: project image placeholder, title, tech tags, description
- Cards have subtle border + hover lift effect

### 04. Skills / Advantages (auto height)
- Irregular grid layout (some cards span 2 columns, some 1)
- 4-6 skill cards: icon, skill name, short description
- Cards vary subtly in size and position

### 05. Contact / Footer (100vh)
- Full-screen closing section
- Centered large CTA headline
- Email, phone, social links
- Minimal footer at bottom
- Decorative ambient glow in top-right corner

## Technical

- **Stack:** React 18 + Vite
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist (from Vercel CDN / fontsource)
- **Responsive:** PC-first, max-width 1700px, will need mobile adaptations later

## Implementation Notes

- Video background component accepts a prop for video source; CSS gradient used as fallback
- All sections wrapped in a single-page scroll layout
- React context or simple prop drilling for site data (resume content)
- Component structure: App → { Nav, Hero, About, Projects, Skills, Contact }
