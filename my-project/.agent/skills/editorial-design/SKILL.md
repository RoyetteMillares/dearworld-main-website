---
name: editorial-design
description: Premium Journalistic Design philosophy, editorial grids, and Framer Motion animation patterns.
---

# Editorial Design: The Journalistic Narrative

This skill governs the high-level design philosophy and structural patterns of the website.

## 1. Design Philosophy
- **"Premium Print Magazine"**: Aim for the aesthetic of Esquire, NYT, or Vogue.
- **Contrast & Scale**: Massive headers (`text-8xl`) paired with tiny uppercase tags (`text-[10px] tracking-[0.4em]`).
- **Negative Space**: Intentional use of "white space" (even in Dark Mode) to emphasize content.

## 2. Component Patterns
### Editorial Cards
- **Base Style**: `bg-white/[0.03]` backdrop-blur-md, `border-2 border-white/10`.
- **Hierarchy**: Tiny tracking-widest tags -> Massive headers -> Serif/Italic quotes.
- **Hover Transitions**: `hover:-translate-y-4`, `hover:border-[#FFB300]`.
### Organic Grids
- Use `translate-y-12` or `translate-y-24` on alternating items to create a masonry-like editorial feel.
- Break strict grids with overlayed hand-drawn assets.

## 3. Animation Logic (Framer Motion)
- **Entrances**: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}` with `duration: 0.8`.
- **Staggering**: Animate children sequentially in list/grid views.
- **Micro-interactions**: Subtle `scale-[1.01]` on hover.

## 4. Media Standards
- **Photography**: High-contrast, often grayscale or with deep shadows.
- **Video**: "Editorial moments" - short, high-fidelity loops that feel like moving magazine covers.
