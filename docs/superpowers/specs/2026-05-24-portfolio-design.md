# Portfolio Site — Design Spec

_Rodean Fraser · Full Stack Software Engineer · 2026-05-24_

---

## Overview

A statically-generated single-page portfolio built in Next.js (App Router), deployed to Vercel. The visual design is ported pixel-for-pixel from a Claude Design HTML prototype using Material UI (emotion) as the sole styling system — no Tailwind, no CSS Modules. Component structure follows `~/projects/scout/scout-frontend/components.md` conventions.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | MUI v6 + emotion (`sx` / `styled`) |
| Fonts | `next/font/google` (Geist, Geist Mono, Instrument Serif) |
| Images | `next/image` |
| Static export | `output: 'export'` in `next.config.ts` |
| Deployment | Vercel (auto-detects Next.js static export) |

---

## Design Tokens (from prototype `styles.css`)

All tokens live in `src/lib/theme.ts` as a single `createTheme` call.

### Colors
```
--bg:           oklch(0.985 0.006 80)   → background.default (page bg)
--paper:        #EFEBE3                 → background.paper / body bg
--paper-2:      oklch(0.94 0.012 75)    → contact section bg
--ink:          oklch(0.22 0.012 60)    → text.primary
--ink-2:        oklch(0.42 0.012 60)    → text.secondary
--ink-3:        oklch(0.62 0.012 60)    → text.disabled
--ink-4:        oklch(0.82 0.008 60)    → muted
--line:         oklch(0.92 0.008 60)    → divider
--line-2:       oklch(0.88 0.01 60)
--accent:       oklch(0.72 0.14 45)     → primary.main (coral)
--accent-deep:  oklch(0.58 0.16 38)     → primary.dark
--accent-ink:   oklch(0.38 0.11 40)     → primary.contrastText-adjacent
--accent-soft:  oklch(0.95 0.04 50)     → primary light bg
--good:         oklch(0.68 0.12 150)    → success.main
--good-soft:    oklch(0.94 0.05 150)    → success light bg
--warn:         oklch(0.78 0.14 85)     → warning.main
--danger:       oklch(0.55 0.22 25)     → error.main
--cool:         oklch(0.62 0.07 240)
--night:        oklch(0.16 0.015 60)    → dark card / Scout bg
--night-2:      oklch(0.22 0.015 60)
--night-3:      oklch(0.30 0.015 60)
```

### Typography
```
--font-sans:  'Geist'            → theme.typography.fontFamily
--font-mono:  'Geist Mono'       → used directly in sx / styled
--font-serif: 'Instrument Serif' → used directly in sx / styled
```

Fonts loaded via `next/font/google`, injected as CSS variables on `<html>`:
`--font-geist`, `--font-geist-mono`, `--font-instrument-serif`

### Spacing / Layout
```
--maxw:           1180px
--section-pad-y:  120px
--container-pad:  clamp(20px, 5vw, 64px)
```

---

## `@keyframes` (via MUI `GlobalStyles`)

All animation keyframes are defined once in `GlobalStyles` inside `layout.tsx`:

| Name | Used by |
|---|---|
| `pulse` | Eyebrow availability dot |
| `live` | Telora live-dot (coral) |
| `live-teal` | Scout live-dot (teal) |
| `typing` | Telora transcript typing indicator |
| `m-scroll` | Marquee track |

Additional global rules in `GlobalStyles`:
- `::selection` — coral tint
- `.marquee-mask` — `mask-image` fade edges (can't inline in `sx`)
- Body base: `font-feature-settings`, `letter-spacing`, `line-height`

---

## File & Directory Structure

```
/home/rodean/projects/portfolio/
├── next.config.ts
├── tsconfig.json
├── package.json
├── public/
│   └── portrait.png                    ← copied from design bundle
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← ThemeProvider + GlobalStyles + fonts
│   │   ├── page.tsx                    ← composes all section components
│   │   └── components/
│   │       ├── Nav/index.tsx
│   │       ├── Hero/index.tsx
│   │       ├── Marquee/index.tsx
│   │       ├── Work/
│   │       │   ├── index.tsx
│   │       │   ├── TeloraCase/index.tsx
│   │       │   ├── ScoutCase/index.tsx
│   │       │   └── SilverLogicCase/index.tsx
│   │       ├── Skills/index.tsx
│   │       ├── Now/index.tsx
│   │       ├── Contact/index.tsx
│   │       └── Footer/index.tsx
│   ├── components/
│   │   └── primitives/
│   │       ├── index.tsx               ← barrel re-export ("use client")
│   │       ├── RfMark/index.tsx        ← <RF/> monogram, size prop: sm|md|lg
│   │       ├── Eyebrow/index.tsx       ← mono uppercase label + optional dot
│   │       └── Chip/index.tsx          ← mono pill (hero tech stack)
│   └── lib/
│       └── theme.ts                    ← createTheme with all tokens
├── docs/
│   └── superpowers/
│       └── specs/
│           └── 2026-05-24-portfolio-design.md
```

---

## Component Specifications

### `layout.tsx`
- Wraps the app in `ThemeProvider` with the custom theme
- Declares `GlobalStyles` for keyframes, ::selection, body base styles
- Sets `<html>` font CSS variables from `next/font/google`
- `metadata` export: title `"Rodean Fraser — Full Stack Software Engineer"`, favicon (SVG `<RF/>` data URI)

### `page.tsx`
- Server component (no `"use client"`)
- Renders: `<Nav />`, `<Hero />`, `<Marquee />`, `<Work />`, `<Skills />`, `<Now />`, `<Contact />`, `<Footer />`

### Primitives

**`RfMark`** — `size?: 'sm' | 'md' | 'lg'` prop controls font sizes. Mono brackets in ink color, serif RF in coral. Used in Nav and Footer.

**`Eyebrow`** — Accepts `dot?: boolean`. When true, renders the pulsing green dot (uses `pulse` keyframe). Mono, uppercase, coral ink color.

**`Chip`** — Mono pill with white background and `--line` border. Used in Hero tech stack row.

### `Nav`
- MUI `AppBar` with `position="sticky"`, `elevation={0}`, custom `sx` for frosted glass (`backdrop-filter: saturate(120%) blur(14px)`)
- `Toolbar` with `RfMark` + brand name, centered nav links (hidden at `≤720px`), "Get in touch" pill
- Nav links: smooth-scroll anchors via plain `<a href="#work">` etc.

### `Hero`
- MUI `Grid2` container: `1.4fr / 1fr`, collapses to single column at `≤880px`
- Left: `Eyebrow` with dot, `Typography variant="h1"` (with Instrument Serif italic on "end-to-end"), lede paragraph, `Chip` row, two `Button` components (accent + outline)
- Right: portrait `Box` with `transform: rotate(-1.4deg)`, tape pseudo via `sx '&::after'`, `next/image` with `priority`, caption in Instrument Serif italic, stamp row (location / years)

### `Marquee`
- `styled(Box)` with `overflow: hidden`, `mask-image` from GlobalStyles
- Inner track: doubled content, animated with `m-scroll` keyframe at `40s linear infinite`

### `Work`
- `Box` section with section header, then three `Case` articles: `TeloraCase`, `ScoutCase`, `SilverLogicCase`

**`TeloraCase`** — White card. Left: phone mockup (`styled(Box)` with `aspect-ratio: 360/740`, night bg, rounded). Phone screen contains: status bar, app header, status pill with live-dot, transcript rows (`tline-bot` in accent-soft, `tline-them` in white, `tline-active` outlined in accent), typing indicator dots. Right: 3 cards (Design system color swatches, Hardest call note, Stack list dark card).

**`ScoutCase`** — Dark night card. Left: browser chrome mockup (three traffic-light dots + URL bar), two-column browser body (sidebar nav + main match list with rank/score rows and explanation card for #4). Right: 3 dark cards (What I built, Stack, Outcome).

**`SilverLogicCase`** — White card. Left: dashboard (eyebrow + title, pill badges, 4-stat grid, SVG line chart with gradient fill + dashed intervention marker + legend). Right: 3 cards (The win, Also shipped list, How I work).

### `Skills`
- MUI `Grid2` 3→2→1 columns
- Each cell: `skill-h` row (mono number + heading, dashed border-bottom), plain `ul` list in ink-2

### `Now`
- MUI `Grid2` 3→2→1 columns, 6 cards:
  1. Accent-soft primary card (Shipping)
  2–3. Standard white cards (Side builds)
  4–5. Standard white cards (Learning, Reading)
  6. Dark ink mantra card (Instrument Serif italic, coral accent line)

### `Contact`
- Rounded `Box` with `--paper-2` background, `border-radius: 32px`, horizontal margin
- Two-column grid: text left (headline, lede, large email CTA button), white card link list right (GitHub, LinkedIn, Email, Phone)

### `Footer`
- `Box` with top border, `RfMark sm` + copyright, "Built with React · Geist · oklch" mono text, back-to-top link

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤880px` | Hero collapses to single column |
| `≤900px` | Skills grid 3→2 col, Now grid 3→2 col |
| `≤920px` | Case canvas (preview + side panel) stacks vertically |
| `≤760px` | Case header loses 3-col grid |
| `≤720px` | Nav links hidden |
| `≤640px` | Dashboard stats 4→2 col |
| `≤560px` | Skills grid 2→1, Now grid 2→1 |
| `≤820px` | Contact grid stacks |

---

## Decisions & Constraints

- **No tweaks panel** — dropped for production; the coral accent is fixed
- **Pure MUI / emotion** — no `.css` files, no Tailwind, no CSS Modules; only `GlobalStyles` for keyframes + mask
- **`"use client"` on all component files** — matches components.md convention from scout-frontend
- **`page.tsx` stays a server component** — it only composes; no interactivity needed at the page level
- **Portrait image** — copied from design bundle to `public/portrait.png`; served via `next/image`
- **SVG chart** — inlined JSX in `SilverLogicCase`; no chart library needed
- **Marquee duplication** — content repeated twice in JSX (not CSS) so the `-50% translateX` loop is seamless

---

## Out of Scope

- Blog / writing section
- Dark mode toggle
- Contact form (mailto link only)
- Analytics (can be added to `layout.tsx` later)
