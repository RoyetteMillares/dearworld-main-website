---
name: editorial-design
description: Premium Journalistic Design philosophy, editorial grids, Framer Motion animation patterns, and W+K style immersive layouts with raw, unfiltered media.
---

# Editorial Design: The Journalistic Narrative

This skill governs the high-level design philosophy, structural patterns, and motion logic of the website, blending premium print aesthetics with brutalist digital immersion.

## 1. Design Philosophy
- **"Premium Print Magazine"**: Aim for the aesthetic of Esquire, NYT, or Vogue, but translated for the web.
- **"Brutalist Clarity" (W+K Style)**: Prioritize raw, unpolished impact. Content *is* the interface. Remove decorative containers; let images touch the edges of the browser.
- **Unfiltered Reality**: Visuals are sacred. We do not dull, gray, or invert reality. The design frame recedes; the content projects forward.
- **Contrast & Scale**: Massive headers (`text-8xl` to `text-[10rem]`) paired with tiny uppercase tags (`text-[10px] tracking-[0.4em]`).

## 2. Component Patterns

### Full-Bleed Media (The W+K Standard)
*The signature "immersive" look where content breaks the container.*
- **Structure**: Images/Video must span the full viewport width (`100vw`).
- **CSS Technique**: Inside a container, use `w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]` to force full-width breakout.
- **Aspect Ratios**: Cinematic `aspect-[16/9]` for features, or `h-screen` for hero covers.
- **Overlay Typography**: Place white text directly over dark media (or vice versa) using `absolute bottom-8 left-8` or centered positioning. Ensure text legibility via subtle gradients *behind* text, never by dimming the whole image.

### Editorial Cards
- **Base Style**: `bg-white/[0.03]` backdrop-blur-md, `border-2 border-white/10`.
- **Hierarchy**: Tiny tracking-widest tags -> Massive headers -> Serif/Italic quotes.
- **Hover Transitions**: `hover:-translate-y-4`, `hover:border-[#FFB300]` (or brand accent). Do **not** fade the image on hover.

### Organic & Masonry Grids
- **The "Feed"**: A single-column, central feed of massive cards (60-80% viewport width) with generous vertical spacing (`space-y-32`).
- **Offset Rhythm**: Use `translate-y-12` or `translate-y-24` on alternating items in multi-column views to create a masonry-like editorial feel.
- **Hand-Drawn Breakers**: Break strict grids with overlayed hand-drawn assets or "sticker" elements to disrupt the digital precision.

## 3. Animation Logic (Framer Motion)
- **Entrances**: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}` with `duration: 0.8`.
- **Image Reveals**: Use a "curtain" effect (sliding a solid div away) or scale-out (`scale: 1.1` -> `1.0`) to reveal images. **Never fade images in from 0 opacity if it compromises their punch.**
- **Staggering**: Animate children sequentially in list/grid views (`staggerChildren: 0.1`).

## 4. Media Standards (STRICT)
- **NO FILTERS**: **Never** apply `grayscale`, `invert`, or `opacity` (transparency) directly to images/video.
- **Raw Fidelity**: Images must be rendered in full color and full contrast (`opacity-100`, `grayscale-0`, `invert-0`).
- **Photography**: High-resolution, sharp, and confident.
- **Video**: "Editorial moments" — short, high-fidelity loops (autoplay, muted, playsinline) that feel like moving magazine covers.
- **Typography as Image**: Use extremely large typography that gets cropped off-screen (`overflow-hidden`) to treat text as an abstract texture.