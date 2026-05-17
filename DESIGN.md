# Design System — Kevin Marín Portfolio

## Color strategy: Restrained
Near-OLED dark background, tinted cool. One blue accent for interactive elements and highlights. No gradient text.

## Palette
- Background: `#0e0e0e` (OKLCH ~0.09 0 0)
- Surface: `#1f2020`
- Border: `oklch(1 0 0 / 8%)`
- Foreground: `#e4e2e1`
- Muted text: `#8e9192`
- Accent blue: Tailwind `blue-400` (`#60a5fa`) — used for icons, company names, rotating headline word
- Destructive: `#ffb4ab`

## Typography
- Font stack: Geist (sans, UI) + Geist Mono (mono, code labels, nav logo)
- Heading: `font-semibold`, `tracking-tight`
- Body: `text-sm`/`text-base`, `leading-relaxed`
- Labels/mono: `font-mono`, `text-xs`, `tracking-widest uppercase` for category headers

## Spacing rhythm
- Section padding: `py-24 sm:py-32`
- Container: `max-w-5xl`, centered
- Component gaps: 4/8/12/16/24 — always multiples of 4

## Motion
- Spring physics: `{ type: "spring", stiffness: 400, damping: 30 }` for UI micro-interactions
- Viewport reveal: `{ type: "spring", stiffness: 200, damping: 28 }` for scroll-triggered
- Initial states: `{ opacity: 0, y: 16–24 }` — subtle, not dramatic

## Components
- Badges: `rounded-full`, `text-xs`, `bg-secondary/60 border border-border`
- Timeline dots: `w-2.5 h-2.5 bg-blue-400 ring-4 ring-background`
- Skill chips: `font-mono`, `rounded-full`, hover shows `border-blue-400/40`
- Nav: transparent → `bg-background/80 backdrop-blur-md` on scroll
