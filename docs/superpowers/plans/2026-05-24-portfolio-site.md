# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pixel-perfect static Next.js portfolio site from the approved Claude Design HTML prototype, using MUI as the sole styling system, deployed to Vercel.

**Architecture:** Single-page Next.js App Router app with `output: 'export'`. Design tokens live in `src/lib/theme.ts` as a typed `T` constant object plus a `createTheme` call. All components follow scout-frontend `components.md` (folder/index.tsx, `"use client"` on every component file). `layout.tsx` is a server component that renders a `Providers` client component housing ThemeProvider + CssBaseline + GlobalStyles. All `@keyframes` animations are defined in GlobalStyles.

**Tech Stack:** Next.js 14+, TypeScript, MUI v6, emotion, `next/font/google`, `next/image`, static export to Vercel.

**Reference files:**
- Design spec: `docs/superpowers/specs/2026-05-24-portfolio-design.md`
- Component conventions: `~/projects/scout/scout-frontend/components.md`
- HTML prototype: `/tmp/portfolio/project/Portfolio.html`
- CSS prototype: `/tmp/portfolio/project/styles.css`
- Portrait image: `/tmp/portfolio/project/assets/portrait.png`

---

## File Map

```
/home/rodean/projects/portfolio/
├── next.config.ts
├── tsconfig.json
├── package.json
├── public/
│   └── portrait.png
└── src/
    ├── app/
    │   ├── layout.tsx                        server component: fonts + <Providers>
    │   ├── providers.tsx                     "use client": ThemeProvider + GlobalStyles
    │   ├── page.tsx                          server component: composes all sections
    │   └── components/
    │       ├── Nav/index.tsx
    │       ├── Hero/index.tsx
    │       ├── Marquee/index.tsx
    │       ├── Work/
    │       │   ├── index.tsx
    │       │   ├── TeloraCase/index.tsx
    │       │   ├── ScoutCase/index.tsx
    │       │   └── SilverLogicCase/index.tsx
    │       ├── Skills/index.tsx
    │       ├── Now/index.tsx
    │       ├── Contact/index.tsx
    │       └── Footer/index.tsx
    ├── components/
    │   └── primitives/
    │       ├── index.tsx                     barrel re-export
    │       ├── RfMark/index.tsx
    │       ├── Eyebrow/index.tsx
    │       └── Chip/index.tsx
    └── lib/
        └── theme.ts
```

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`

- [ ] **Step 1: Initialise project and install dependencies**

```bash
cd /home/rodean/projects/portfolio
npx create-next-app@latest . \
  --typescript \
  --app \
  --no-tailwind \
  --no-src-dir \
  --import-alias "@/*" \
  --yes
```

Then move the generated `src` structure if needed (create-next-app should scaffold into the current dir). Then install MUI:

```bash
npm install @mui/material @mui/system @emotion/react @emotion/styled @mui/material-nextjs
```

- [ ] **Step 2: Set `output: 'export'` in `next.config.ts`**

Replace the generated `next.config.ts` with:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

- [ ] **Step 3: Verify TypeScript config has path alias**

Confirm `tsconfig.json` has (create-next-app sets this by default):

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Verify the dev server starts**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000 with the default Next.js page.

- [ ] **Step 5: Commit scaffold**

```bash
git add -A
git commit -m "feat: scaffold Next.js + MUI project"
```

---

## Task 2: Design tokens + MUI theme

**Files:**
- Create: `src/lib/theme.ts`

- [ ] **Step 1: Create `src/lib/theme.ts`**

```typescript
import { createTheme } from '@mui/material/styles'

export const T = {
  bg:          'oklch(0.985 0.006 80)',
  paper:       '#EFEBE3',
  paper2:      'oklch(0.94 0.012 75)',
  card:        '#fff',
  ink:         'oklch(0.22 0.012 60)',
  ink2:        'oklch(0.42 0.012 60)',
  ink3:        'oklch(0.62 0.012 60)',
  ink4:        'oklch(0.82 0.008 60)',
  line:        'oklch(0.92 0.008 60)',
  line2:       'oklch(0.88 0.01 60)',
  accent:      'oklch(0.72 0.14 45)',
  accentDeep:  'oklch(0.58 0.16 38)',
  accentInk:   'oklch(0.38 0.11 40)',
  accentSoft:  'oklch(0.95 0.04 50)',
  good:        'oklch(0.68 0.12 150)',
  goodSoft:    'oklch(0.94 0.05 150)',
  warn:        'oklch(0.78 0.14 85)',
  danger:      'oklch(0.55 0.22 25)',
  cool:        'oklch(0.62 0.07 240)',
  night:       'oklch(0.16 0.015 60)',
  night2:      'oklch(0.22 0.015 60)',
  night3:      'oklch(0.30 0.015 60)',
  fontSans:    'var(--font-geist), -apple-system, system-ui, sans-serif',
  fontMono:    'var(--font-geist-mono), ui-monospace, monospace',
  fontSerif:   'var(--font-instrument-serif), "Times New Roman", serif',
  maxw:        '1180px',
  sectionPadY: '120px',
  containerPad:'clamp(20px, 5vw, 64px)',
} as const

const theme = createTheme({
  palette: {
    primary:    { main: T.accent, dark: T.accentDeep, contrastText: '#fff' },
    background: { default: T.paper, paper: '#fff' },
    text:       { primary: T.ink, secondary: T.ink2, disabled: T.ink3 },
    divider:    T.line,
    success:    { main: T.good, light: T.goodSoft, contrastText: T.ink },
    error:      { main: T.danger, contrastText: '#fff' },
    warning:    { main: T.warn, contrastText: T.ink },
  },
  typography: {
    fontFamily: 'var(--font-geist), -apple-system, system-ui, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.97 },
    h2: { fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h3: { fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.08 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFeatureSettings: '"ss01", "cv11"',
          letterSpacing: '-0.005em',
          lineHeight: 1.55,
          WebkitFontSmoothing: 'antialiased',
          background: T.paper,
          color: T.ink,
        },
        img: { maxWidth: '100%', display: 'block' },
        'a.inline-link': {
          color: T.accentInk,
          textDecoration: 'none',
          borderBottom: `1px solid currentColor`,
          '&:hover': { color: T.accentDeep },
        },
        '::selection': {
          background: 'oklch(0.85 0.1 45 / 0.45)',
          color: T.ink,
        },
      },
    },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
})

export default theme
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/theme.ts
git commit -m "feat: add design tokens and MUI theme"
```

---

## Task 3: Fonts, Providers, and Layout

**Files:**
- Create: `src/app/providers.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/app/providers.tsx`**

```typescript
'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import theme from '@/lib/theme'

const keyframes = `
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 4px oklch(0.94 0.05 150 / 0.6); }
    50%       { box-shadow: 0 0 0 7px oklch(0.94 0.05 150 / 0); }
  }
  @keyframes live {
    0%   { box-shadow: 0 0 0 0 oklch(0.72 0.14 45 / 0.55); }
    100% { box-shadow: 0 0 0 8px oklch(0.72 0.14 45 / 0); }
  }
  @keyframes live-teal {
    0%   { box-shadow: 0 0 0 0 oklch(0.7 0.14 175 / 0.55); }
    100% { box-shadow: 0 0 0 8px oklch(0.7 0.14 175 / 0); }
  }
  @keyframes typing {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
    40%           { opacity: 1;   transform: scale(1); }
  }
  @keyframes m-scroll {
    to { transform: translateX(-50%); }
  }
`

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={keyframes} />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
```

- [ ] **Step 2: Rewrite `src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import Providers from './providers'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Rodean Fraser — Full Stack Software Engineer',
  description:
    'Full stack engineer with 5+ years shipping production SaaS. React, TypeScript, Django, GraphQL.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23EFEBE3'/%3E%3Ctext x='32' y='44' font-family='serif' font-size='38' font-weight='400' text-anchor='middle' fill='%23D97757' letter-spacing='-3'%3ERF%3C/text%3E%3C/svg%3E",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Type-check and verify dev server**

```bash
npx tsc --noEmit
npm run dev
```

Expected: zero TS errors; browser shows unstyled page with MUI CssBaseline applied (white background becomes paper colour).

- [ ] **Step 4: Commit**

```bash
git add src/app/providers.tsx src/app/layout.tsx
git commit -m "feat: add MUI providers, GlobalStyles keyframes, and font layout"
```

---

## Task 4: Portrait asset

**Files:**
- Create: `public/portrait.png`

- [ ] **Step 1: Copy portrait from design bundle**

```bash
cp /tmp/portfolio/project/assets/portrait.png /home/rodean/projects/portfolio/public/portrait.png
```

- [ ] **Step 2: Verify file exists**

```bash
ls -lh /home/rodean/projects/portfolio/public/portrait.png
```

Expected: file ~200-400KB.

- [ ] **Step 3: Commit**

```bash
git add public/portrait.png
git commit -m "feat: add portrait image asset"
```

---

## Task 5: Primitives — RfMark, Eyebrow, Chip

**Files:**
- Create: `src/components/primitives/RfMark/index.tsx`
- Create: `src/components/primitives/Eyebrow/index.tsx`
- Create: `src/components/primitives/Chip/index.tsx`
- Create: `src/components/primitives/index.tsx`

- [ ] **Step 1: Create `src/components/primitives/RfMark/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, { bracket: string; monogram: string }> = {
  sm: { bracket: '13px', monogram: '20px' },
  md: { bracket: '17px', monogram: '27px' },
  lg: { bracket: '22px', monogram: '36px' },
}

export default function RfMark({ size = 'md' }: { size?: Size }) {
  const s = sizes[size]
  return (
    <Box
      component="span"
      aria-label="RF"
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '3px',
        lineHeight: 0.85,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: T.fontMono,
          fontWeight: 300,
          fontSize: s.bracket,
          color: T.ink,
          letterSpacing: '-0.04em',
          transform: 'translateY(-1px)',
        }}
      >
        {'<'}
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: T.fontSerif,
          fontWeight: 400,
          fontSize: s.monogram,
          color: T.accent,
          letterSpacing: '0.02em',
          lineHeight: 1,
          fontStyle: 'normal',
        }}
      >
        R
        <Box component="span" sx={{ marginLeft: '0.02em' }}>
          F
        </Box>
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: T.fontMono,
          fontWeight: 300,
          fontSize: s.bracket,
          color: T.ink,
          letterSpacing: '-0.04em',
          transform: 'translateY(-1px)',
        }}
      >
        {'/>'}
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Create `src/components/primitives/Eyebrow/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

export default function Eyebrow({
  children,
  dot,
}: {
  children: React.ReactNode
  dot?: boolean
}) {
  return (
    <Box
      component="div"
      sx={{
        fontFamily: T.fontMono,
        fontSize: '12px',
        fontWeight: 500,
        color: T.accentInk,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
      }}
    >
      {dot && (
        <Box
          component="span"
          sx={{
            width: '7px',
            height: '7px',
            background: T.good,
            borderRadius: '99px',
            boxShadow: `0 0 0 4px oklch(0.94 0.05 150 / 0.6)`,
            animation: 'pulse 2.4s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </Box>
  )
}
```

- [ ] **Step 3: Create `src/components/primitives/Chip/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: T.fontMono,
        fontSize: '11.5px',
        padding: '6px 12px',
        background: '#fff',
        borderRadius: '99px',
        color: T.ink2,
        boxShadow: `0 0 0 1px ${T.line}`,
        letterSpacing: '0.01em',
        display: 'inline-block',
      }}
    >
      {children}
    </Box>
  )
}
```

- [ ] **Step 4: Create `src/components/primitives/index.tsx`**

```typescript
'use client'

export { default as RfMark } from './RfMark'
export { default as Eyebrow } from './Eyebrow'
export { default as Chip } from './Chip'
```

- [ ] **Step 5: Type-check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/
git commit -m "feat: add RfMark, Eyebrow, Chip primitives"
```

---

## Task 6: Nav component

**Files:**
- Create: `src/app/components/Nav/index.tsx`

- [ ] **Step 1: Create `src/app/components/Nav/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { RfMark } from '@/components/primitives'
import { T } from '@/lib/theme'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#now', label: 'Now' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'oklch(0.94 0.012 75 / 0.78)',
        backdropFilter: 'saturate(120%) blur(14px)',
        WebkitBackdropFilter: 'saturate(120%) blur(14px)',
        borderBottom: `1px solid oklch(0.88 0.01 60 / 0.5)`,
      }}
    >
      <Box
        sx={{
          maxWidth: T.maxw,
          margin: '0 auto',
          padding: `14px ${T.containerPad}`,
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        {/* Brand */}
        <Box
          component="a"
          href="#top"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: T.ink,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            fontSize: '15px',
            whiteSpace: 'nowrap',
          }}
        >
          <RfMark size="md" />
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Rodean&nbsp;Fraser
          </Box>
        </Box>

        {/* Nav links */}
        <Box
          component="nav"
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '4px',
            marginLeft: 'auto',
            alignItems: 'center',
          }}
        >
          {navLinks.map((l) => (
            <Box
              key={l.href}
              component="a"
              href={l.href}
              sx={{
                textDecoration: 'none',
                color: T.ink2,
                fontSize: '13.5px',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '99px',
                letterSpacing: '-0.01em',
                transition: 'color .12s, background .12s',
                '&:hover': {
                  color: T.ink,
                  background: 'oklch(0.92 0.012 70 / 0.6)',
                },
              }}
            >
              {l.label}
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box
          component="a"
          href="mailto:rodeanfraser@gmail.com"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            background: T.ink,
            color: '#fff',
            fontSize: '13px',
            fontWeight: 500,
            padding: '9px 14px',
            borderRadius: '99px',
            letterSpacing: '-0.005em',
            transition: 'transform .15s, background .15s',
            '&:hover': { background: T.accent, transform: 'translateY(-1px)' },
          }}
        >
          Get in touch <span aria-hidden="true">→</span>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Add Nav to `src/app/page.tsx` temporarily to verify**

```typescript
import Nav from './components/Nav'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top" style={{ minHeight: '200vh', padding: '40px' }}>
        Portfolio coming soon
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Open http://localhost:3000. Expected: sticky nav with `<RF/>` logo in coral, "Rodean Fraser", nav links (hidden on mobile), and "Get in touch" pill.

- [ ] **Step 4: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Nav/ src/app/page.tsx
git commit -m "feat: add Nav component"
```

---

## Task 7: Hero component

**Files:**
- Create: `src/app/components/Hero/index.tsx`

- [ ] **Step 1: Create `src/app/components/Hero/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import Image from 'next/image'
import { Eyebrow, Chip } from '@/components/primitives'
import { T } from '@/lib/theme'

const chips = ['React / Next.js', 'TypeScript', 'Django · DRF · GraphQL', 'PostgreSQL', 'CI/CD']

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: T.maxw,
        margin: '0 auto',
        padding: {
          xs: '40px 20px 60px',
          md: `clamp(40px, 8vw, 96px) ${T.containerPad} clamp(60px, 9vw, 120px)`,
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.4fr) minmax(0, 1fr)' },
          gap: 'clamp(28px, 5vw, 72px)',
          alignItems: 'center',
        }}
      >
        {/* Left: text */}
        <Box>
          <Eyebrow dot>Available · open to senior full‑stack roles</Eyebrow>

          <Box
            component="h1"
            sx={{
              fontSize: 'clamp(44px, 6.4vw, 92px)',
              lineHeight: 0.97,
              letterSpacing: '-0.045em',
              fontWeight: 700,
              margin: '16px 0 24px',
              fontFamily: T.fontSans,
            }}
          >
            Full stack engineer
            <br />
            who ships{' '}
            <Box
              component="em"
              sx={{
                fontFamily: T.fontSerif,
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: T.accentDeep,
              }}
            >
              end&#8209;to&#8209;end
            </Box>
            .
          </Box>

          <Box
            component="p"
            sx={{
              fontSize: 'clamp(17px, 1.6vw, 20px)',
              color: T.ink2,
              lineHeight: 1.55,
              letterSpacing: '-0.012em',
              maxWidth: '56ch',
            }}
          >
            I&apos;m{' '}
            <Box component="strong" sx={{ color: T.ink, fontWeight: 600 }}>
              Rodean Fraser
            </Box>{' '}
            — five years building production SaaS, client portals, and internal dashboards with
            React, TypeScript, Django REST and GraphQL. I scope features, design the API, ship the
            UI, and instrument the thing in production. Lean Six Sigma Green Belt; data‑driven about
            reliability.
          </Box>

          {/* Chip row */}
          <Box sx={{ display: 'flex', gap: '8px', marginTop: '30px', flexWrap: 'wrap' }}>
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Box
              component="a"
              href="#work"
              sx={{
                height: '46px',
                padding: '0 20px',
                borderRadius: '12px',
                fontFamily: T.fontSans,
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                background: T.accent,
                color: '#fff',
                boxShadow: '0 1px 2px rgba(160,60,30,0.18), inset 0 1px 0 rgba(255,255,255,0.22)',
                transition: 'transform .15s ease, background .15s',
                '&:hover': { background: T.accentDeep, transform: 'translateY(-1px)' },
              }}
            >
              See selected work <span aria-hidden="true">↓</span>
            </Box>
            <Box
              component="a"
              href="https://github.com/rf2tsl"
              target="_blank"
              rel="noopener"
              sx={{
                height: '46px',
                padding: '0 20px',
                borderRadius: '12px',
                fontFamily: T.fontSans,
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                background: '#fff',
                color: T.ink,
                boxShadow: `inset 0 0 0 1px ${T.line2}`,
                transition: 'transform .15s ease, box-shadow .15s',
                '&:hover': {
                  boxShadow: `inset 0 0 0 1px ${T.ink3}`,
                  transform: 'translateY(-1px)',
                },
              }}
            >
              GitHub <span aria-hidden="true">↗</span>
            </Box>
          </Box>
        </Box>

        {/* Right: portrait */}
        <Box
          component="aside"
          sx={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'stretch' }}
        >
          {/* Portrait frame with tape pseudo */}
          <Box
            component="figure"
            sx={{
              position: 'relative',
              background: '#fff',
              borderRadius: '24px',
              padding: '22px 22px 14px',
              boxShadow: `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}, 0 30px 60px -30px oklch(0.4 0.05 50 / 0.18)`,
              margin: 0,
              transform: 'rotate(-1.4deg)',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '50%',
                width: '80px',
                height: '22px',
                background: 'oklch(0.95 0.05 50 / 0.85)',
                transform: 'translateX(-50%) rotate(-2deg)',
                borderRadius: '2px',
                boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
              },
            }}
          >
            <Image
              src="/portrait.png"
              alt="Sketched portrait of Rodean Fraser"
              width={430}
              height={520}
              priority
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '430 / 520',
                objectFit: 'cover',
                objectPosition: 'center 18%',
                borderRadius: '14px',
              }}
            />
            <Box
              component="figcaption"
              sx={{
                marginTop: '14px',
                fontFamily: T.fontSerif,
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: 1.2,
                color: T.ink2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Calm mind.</span>
              <span>Big plans.</span>
              <Box component="span" sx={{ color: T.accentDeep, fontWeight: 500 }}>
                Bigger impact.
              </Box>
            </Box>
          </Box>

          {/* Stamp row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '4px 14px',
              padding: '14px 18px',
              background: 'oklch(0.94 0.012 75 / 0.6)',
              borderRadius: '14px',
              boxShadow: `inset 0 0 0 1px ${T.line}`,
              alignItems: 'baseline',
            }}
          >
            {[
              { k: 'Based in', v: 'Florida · Remote' },
              { k: 'Years shipping', v: '5+' },
            ].map(({ k, v }) => (
              <>
                <Box
                  key={k}
                  component="span"
                  sx={{
                    fontFamily: T.fontMono,
                    fontSize: '10.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: T.ink3,
                  }}
                >
                  {k}
                </Box>
                <Box
                  key={v}
                  component="span"
                  sx={{ fontSize: '14px', color: T.ink, fontWeight: 500, letterSpacing: '-0.01em' }}
                >
                  {v}
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Add Hero to `src/app/page.tsx`**

```typescript
import Nav from './components/Nav'
import Hero from './components/Hero'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Expected: two-column hero with headline, lede, chips, two buttons left; tilted portrait card with tape, caption, stamp row right. Collapses to single column on narrow viewports.

- [ ] **Step 4: Fix React key warning**

The stamp row map uses fragment with `key` on children instead of the fragment. Fix:

```typescript
{[
  { k: 'Based in', v: 'Florida · Remote' },
  { k: 'Years shipping', v: '5+' },
].map(({ k, v }) => (
  <React.Fragment key={k}>
    <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.06em', color: T.ink3 }}>
      {k}
    </Box>
    <Box component="span" sx={{ fontSize: '14px', color: T.ink, fontWeight: 500, letterSpacing: '-0.01em' }}>
      {v}
    </Box>
  </React.Fragment>
))}
```

Add `import React from 'react'` at top of the file.

- [ ] **Step 5: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Hero/ src/app/page.tsx
git commit -m "feat: add Hero component with portrait and stamp row"
```

---

## Task 8: Marquee component

**Files:**
- Create: `src/app/components/Marquee/index.tsx`

- [ ] **Step 1: Create `src/app/components/Marquee/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

const items = [
  'React', 'TypeScript', 'Next.js', 'Django REST Framework', 'GraphQL',
  'PostgreSQL', 'Stripe', 'Auth0', 'Cypress', 'CI / CD', 'Lean Six Sigma',
]

// Content duplicated so the -50% translateX loop is seamless
const track = [...items, ...items]

export default function Marquee() {
  return (
    <Box
      component="section"
      sx={{
        borderTop: `1px solid ${T.line2}`,
        borderBottom: `1px solid ${T.line2}`,
        background: 'oklch(0.94 0.012 75 / 0.4)',
        overflow: 'hidden',
        padding: '18px 0',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '22px',
          whiteSpace: 'nowrap',
          animation: 'm-scroll 40s linear infinite',
          fontFamily: T.fontMono,
          fontSize: '13px',
          letterSpacing: '0.01em',
          color: T.ink2,
        }}
      >
        {track.map((item, i) => (
          <Box key={i} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: '22px' }}>
            <Box component="span">{item}</Box>
            <Box component="span" sx={{ color: T.ink4 }}>·</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Add Marquee to `src/app/page.tsx`**

```typescript
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual check**

Expected: scrolling tech stack bar between hero and rest of page. Fades at both edges.

- [ ] **Step 4: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Marquee/ src/app/page.tsx
git commit -m "feat: add Marquee scrolling tech stack bar"
```

---

## Task 9: TeloraCase component

**Files:**
- Create: `src/app/components/Work/TeloraCase/index.tsx`

- [ ] **Step 1: Create `src/app/components/Work/TeloraCase/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

function LiveDot() {
  return (
    <Box
      component="span"
      sx={{
        width: '7px', height: '7px',
        background: T.accent,
        borderRadius: '99px',
        display: 'inline-block',
        animation: 'live 1.6s ease-out infinite',
      }}
    />
  )
}

function TypingDots() {
  return (
    <Box sx={{ display: 'inline-flex', gap: '3px', marginTop: '4px' }}>
      {[0, 0.18, 0.36].map((delay, i) => (
        <Box
          key={i}
          component="span"
          sx={{
            width: '5px', height: '5px',
            background: T.accent,
            borderRadius: '99px',
            display: 'inline-block',
            animation: `typing 1.4s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </Box>
  )
}

function PhoneMockup() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%', maxWidth: '360px',
        aspectRatio: '360 / 740',
        background: T.night,
        borderRadius: '44px',
        padding: '12px',
        margin: '0 auto',
        boxShadow: `0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px oklch(0.3 0.05 50 / 0.4), 0 0 0 1.5px ${T.night3}`,
      }}
    >
      {/* Notch */}
      <Box sx={{
        position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)',
        width: '90px', height: '26px', background: T.night, borderRadius: '99px', zIndex: 2,
      }} />

      {/* Screen */}
      <Box sx={{
        width: '100%', height: '100%',
        background: T.paper,
        borderRadius: '32px',
        padding: '26px 22px 22px',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', position: 'relative',
      }}>
        {/* Status bar */}
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: T.fontMono, fontSize: '11px', color: T.ink2,
          marginBottom: '18px', padding: '0 6px', letterSpacing: '0.02em',
        }}>
          <span>9:41</span>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {[0,1,2].map(i => (
              <Box key={i} sx={{ width: '5px', height: '5px', borderRadius: '99px', background: T.ink2 }} />
            ))}
            <Box sx={{ width: '14px', height: '8px', background: T.ink2, borderRadius: '2px', marginLeft: '2px' }} />
          </Box>
        </Box>

        {/* App content */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '10.5px', color: T.accentInk, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '6px' }}>
            In progress · 4m 12s
          </Box>
          <Box sx={{ fontSize: '23px', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '14px' }}>
            Reaching Aetna<br />member services
          </Box>
          {/* Status pill */}
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontFamily: T.fontMono, fontSize: '11px', color: T.accentInk,
            background: T.accentSoft, padding: '6px 11px', borderRadius: '99px',
            alignSelf: 'flex-start', marginBottom: '22px',
          }}>
            <LiveDot />
            Telora is on the line
          </Box>

          {/* Transcript */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', padding: '4px 0', overflow: 'hidden' }}>
            {/* Bot line */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '9px 11px', borderRadius: '12px', background: T.accentSoft }}>
              <Box sx={{ fontFamily: T.fontMono, fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.accentInk }}>Telora</Box>
              <Box sx={{ fontSize: '13.5px', color: T.ink, letterSpacing: '-0.005em', lineHeight: 1.35 }}>"Member services, please."</Box>
            </Box>
            {/* IVR line */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '9px 11px', borderRadius: '12px', background: '#fff', boxShadow: `0 0 0 1px ${T.line}` }}>
              <Box sx={{ fontFamily: T.fontMono, fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3 }}>IVR</Box>
              <Box sx={{ fontSize: '13.5px', color: T.ink, letterSpacing: '-0.005em', lineHeight: 1.35 }}>"Connecting you to an agent…"</Box>
            </Box>
            {/* Hold music */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '9px 11px', borderRadius: '12px', background: '#fff', boxShadow: `0 0 0 1px ${T.line}` }}>
              <Box sx={{ fontFamily: T.fontMono, fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3 }}>Hold music</Box>
              <Box sx={{ fontSize: '13.5px', color: T.ink3, fontStyle: 'italic', letterSpacing: '-0.005em', lineHeight: 1.35 }}>~ 6 minutes elapsed</Box>
            </Box>
            {/* Active bot line */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '9px 11px', borderRadius: '12px', background: T.accentSoft, boxShadow: `0 0 0 1.5px ${T.accent}`, position: 'relative' }}>
              <Box sx={{ fontFamily: T.fontMono, fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.accentInk }}>Telora</Box>
              <Box sx={{ fontSize: '13.5px', color: T.ink, letterSpacing: '-0.005em', lineHeight: 1.35 }}>Waiting patiently…</Box>
              <TypingDots />
            </Box>
          </Box>

          {/* CTA buttons */}
          <Box sx={{ display: 'flex', gap: '8px', paddingTop: '14px', borderTop: `1px solid ${T.line}`, marginTop: '14px' }}>
            <Box component="button" sx={{ flex: 1, height: '44px', borderRadius: '14px', border: 'none', cursor: 'pointer', fontFamily: T.fontSans, fontSize: '13.5px', fontWeight: 600, letterSpacing: '-0.01em', background: 'transparent', color: T.ink2, boxShadow: `inset 0 0 0 1px ${T.line2}` }}>
              Hang up
            </Box>
            <Box component="button" sx={{ flex: 1, height: '44px', borderRadius: '14px', border: 'none', cursor: 'pointer', fontFamily: T.fontSans, fontSize: '13.5px', fontWeight: 600, letterSpacing: '-0.01em', background: T.ink, color: '#fff' }}>
              Take call
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function ColorSwatch({ bg }: { bg: string }) {
  return <Box sx={{ width: '38px', height: '38px', borderRadius: '10px', background: bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }} />
}

function CaseCard({ dark, label, children }: { dark?: boolean; label: string; children: React.ReactNode }) {
  return (
    <Box sx={{
      background: dark ? T.night : T.paper,
      borderRadius: '16px', padding: '18px 20px',
      boxShadow: dark ? `inset 0 0 0 1px ${T.night3}` : `inset 0 0 0 1px ${T.line}`,
      color: dark ? 'rgba(255,255,255,0.9)' : T.ink,
    }}>
      <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: dark ? 'rgba(255,255,255,0.5)' : T.ink3, marginBottom: '10px' }}>
        {label}
      </Box>
      {children}
    </Box>
  )
}

export default function TeloraCase() {
  return (
    <Box
      component="article"
      id="telora"
      sx={{
        marginBottom: '96px',
        padding: '48px',
        background: '#fff',
        borderRadius: '28px',
        boxShadow: `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}`,
      }}
    >
      {/* Case header */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '56px 1fr auto' }, gap: '24px', marginBottom: '44px', alignItems: 'start' }}>
        <Box sx={{ fontFamily: T.fontMono, fontSize: '14px', fontWeight: 500, color: T.ink3, letterSpacing: '0.04em', paddingTop: '6px' }}>01</Box>
        <Box>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: T.ink3, marginBottom: '10px' }}>Telora</Box>
          <Box component="h3" sx={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.08, margin: '0 0 14px' }}>
            A patient, human call concierge.
          </Box>
          <Box component="p" sx={{ maxWidth: '60ch', fontSize: '16.5px', color: T.ink2, lineHeight: 1.6 }}>
            An iOS app that makes phone calls on your behalf — sits through IVRs, waits on hold, rings you in when a real person picks up. Designed and prototyped end‑to‑end: brand, design system, in‑call surfaces, transcript timeline.
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          {['Concept · iOS & Web', '2026'].map(t => (
            <Box key={t} sx={{ fontFamily: T.fontMono, fontSize: '11px', padding: '4px 10px', background: T.bg, color: T.ink2, borderRadius: '99px', whiteSpace: 'nowrap' }}>{t}</Box>
          ))}
        </Box>
      </Box>

      {/* Canvas */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.5fr) minmax(260px, 1fr)' }, gap: '36px', alignItems: 'start', padding: '8px 0' }}>
        <PhoneMockup />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <CaseCard label="Design system">
            <Box sx={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <ColorSwatch bg="#EFEBE3" />
              <ColorSwatch bg="oklch(0.72 0.14 45)" />
              <ColorSwatch bg="oklch(0.22 0.012 60)" />
              <ColorSwatch bg="oklch(0.68 0.12 150)" />
              <ColorSwatch bg="oklch(0.62 0.07 240)" />
            </Box>
            <Box component="p" sx={{ fontSize: '14.5px', color: T.ink2, lineHeight: 1.55, margin: 0 }}>
              Warm paper base, one earned coral accent, status reserved for state. All neutrals carry a 60° hue so the UI never goes clinical. Type: Geist + Geist Mono.
            </Box>
          </CaseCard>
          <CaseCard label="Hardest call">
            <Box component="p" sx={{ fontSize: '14.5px', color: T.ink2, lineHeight: 1.55, margin: 0 }}>
              The transcript needed to feel like{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>listening</Box>
              , not reading a form. Bot lines lean coral and forward; counter‑party lines fade to ink‑3; hold time collapses into a single muted row instead of accumulating noise.
            </Box>
          </CaseCard>
          <CaseCard dark label="Stack">
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.75)', display: 'flex', flexDirection: 'column' }}>
              {['React Native · iOS reference', 'Realtime transcript via WebSocket', 'Speech‑to‑text + IVR navigation', 'Geist · oklch tokens · radius 8/22/99'].map(item => (
                <Box key={item} component="li" sx={{ padding: '6px 0', borderBottom: `1px dashed ${T.night3}`, '&:last-child': { borderBottom: 'none' }, display: 'flex', alignItems: 'baseline', gap: '8px', '&::before': { content: '"→"', fontFamily: T.fontMono, fontSize: '11px', color: 'oklch(0.78 0.14 50)', flexShrink: 0 } }}>
                  {item}
                </Box>
              ))}
            </Box>
          </CaseCard>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/components/Work/TeloraCase/
git commit -m "feat: add TeloraCase phone mockup component"
```

---

## Task 10: ScoutCase component

**Files:**
- Create: `src/app/components/Work/ScoutCase/index.tsx`

- [ ] **Step 1: Create `src/app/components/Work/ScoutCase/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

const matches = [
  { rank: '#1', title: 'Senior Product Manager', company: 'Linear', score: '98%', color: 'oklch(0.7 0.14 175)' },
  { rank: '#2', title: 'Product Manager, Growth', company: 'Loom', score: '96%', color: 'oklch(0.7 0.14 175)' },
  { rank: '#3', title: 'Technical PM', company: 'Retool', score: '88%', color: 'oklch(0.78 0.14 75)' },
  { rank: '#4', title: 'PM — Core Product', company: 'Webflow', score: '85%', color: 'oklch(0.78 0.14 75)',
    explain: '✦ Strong alignment on remote, SaaS, and company size. Webflow\'s mid‑sized product org maps cleanly to your target — your platform experience would translate directly.' },
]

function LiveDotTeal() {
  return (
    <Box component="span" sx={{ width: '7px', height: '7px', background: 'oklch(0.7 0.14 175)', borderRadius: '99px', display: 'inline-block', animation: 'live-teal 1.6s ease-out infinite' }} />
  )
}

function OnDarkCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box sx={{ background: T.night2, borderRadius: '16px', padding: '18px 20px', boxShadow: `inset 0 0 0 1px oklch(0.34 0.015 60)`, color: 'rgba(255,255,255,0.9)' }}>
      <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>
        {label}
      </Box>
      {children}
    </Box>
  )
}

export default function ScoutCase() {
  return (
    <Box
      component="article"
      id="scout"
      sx={{
        marginBottom: '96px',
        padding: '48px',
        background: T.night,
        borderRadius: '28px',
        boxShadow: `0 1px 0 rgba(0,0,0,0.4), 0 0 0 1px oklch(0.30 0.015 60 / 0.6)`,
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '56px 1fr auto' }, gap: '24px', marginBottom: '44px', alignItems: 'start' }}>
        <Box sx={{ fontFamily: T.fontMono, fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em', paddingTop: '6px' }}>02</Box>
        <Box>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Box component="span" sx={{ color: 'oklch(0.7 0.14 175)' }}>◎</Box> Scout
            <Box component="span" sx={{ fontSize: '9px', padding: '1px 5px', background: 'oklch(0.7 0.14 175 / 0.2)', color: 'oklch(0.7 0.14 175)', borderRadius: '3px', letterSpacing: '0.06em', fontWeight: 600 }}>AI</Box>
          </Box>
          <Box component="h3" sx={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.08, margin: '0 0 14px', color: '#fff' }}>
            An AI recruiter that ranks the long list.
          </Box>
          <Box component="p" sx={{ maxWidth: '60ch', fontSize: '16.5px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            A job‑search workspace built around a transparent, tunable match algorithm. You weight your criteria, Scout re‑ranks 800+ listings in real time and explains the top picks in plain English.
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          {['Web app · 2026', 'AI · Anthropic'].map(t => (
            <Box key={t} sx={{ fontFamily: T.fontMono, fontSize: '11px', padding: '4px 10px', background: T.night2, color: 'rgba(255,255,255,0.75)', borderRadius: '99px', whiteSpace: 'nowrap' }}>{t}</Box>
          ))}
        </Box>
      </Box>

      {/* Canvas */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.5fr) minmax(260px, 1fr)' }, gap: '36px', alignItems: 'start' }}>
        {/* Browser mockup */}
        <Box sx={{ borderRadius: '14px', background: 'oklch(0.10 0.015 60)', overflow: 'hidden', boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6), 0 0 0 1px oklch(0.30 0.015 60)' }}>
          {/* Browser bar */}
          <Box sx={{ height: '36px', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', background: 'oklch(0.13 0.015 60)', borderBottom: '1px solid oklch(0.20 0.015 60)' }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <Box key={c} sx={{ width: '11px', height: '11px', borderRadius: '99px', background: c, display: 'inline-block' }} />
            ))}
            <Box sx={{ flex: 1, textAlign: 'center', fontFamily: T.fontMono, fontSize: '11px', color: 'oklch(0.5 0.01 60)', letterSpacing: '0.02em' }}>
              scout.app / match score
            </Box>
          </Box>
          {/* Browser body */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: '480px', background: 'oklch(0.10 0.015 60)', color: 'rgba(255,255,255,0.85)' }}>
            {/* Sidebar */}
            <Box sx={{ borderRight: '1px solid oklch(0.18 0.015 60)', padding: '18px 14px', background: 'oklch(0.08 0.015 60)', display: 'flex', flexDirection: 'column' }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '16px', borderBottom: '1px solid oklch(0.18 0.015 60)', marginBottom: '16px' }}>
                <Box sx={{ width: '32px', height: '32px', borderRadius: '8px', background: 'oklch(0.7 0.14 175 / 0.18)', color: 'oklch(0.7 0.14 175)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', boxShadow: 'inset 0 0 0 1px oklch(0.7 0.14 175 / 0.3)' }}>◎</Box>
                <Box>
                  <Box sx={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Scout
                    <Box component="span" sx={{ fontSize: '8px', padding: '1px 5px', background: 'oklch(0.7 0.14 175 / 0.2)', color: 'oklch(0.7 0.14 175)', borderRadius: '3px', letterSpacing: '0.06em', fontWeight: 600 }}>AI</Box>
                  </Box>
                  <Box sx={{ fontSize: '9px', color: 'oklch(0.45 0.01 60)', letterSpacing: '0.07em', marginTop: '2px' }}>RECRUITER</Box>
                </Box>
              </Box>
              {/* Target */}
              <Box sx={{ background: 'oklch(0.13 0.015 60)', border: '1px solid oklch(0.20 0.015 60)', borderRadius: '8px', padding: '10px 12px', marginBottom: '16px' }}>
                <Box sx={{ fontFamily: T.fontMono, fontSize: '9px', color: 'oklch(0.45 0.01 60)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '4px' }}>Target</Box>
                <Box sx={{ fontSize: '12px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.35 }}>Senior Product Manager · SaaS · Remote</Box>
              </Box>
              {/* Nav */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '14px' }}>
                {['⊹ Discover', '◎ Match Score', '✦ Resume AI', '◈ Tracker', '◆ Company Intel'].map((item, i) => (
                  <Box key={item} component="a" sx={{ padding: i === 1 ? '8px 8px 8px 8px' : '8px 10px', fontSize: '12.5px', color: i === 1 ? '#fff' : 'oklch(0.6 0.01 60)', textDecoration: 'none', borderRadius: '6px', borderLeft: i === 1 ? '2px solid oklch(0.7 0.14 175)' : '2px solid transparent', background: i === 1 ? 'oklch(0.13 0.015 60)' : 'transparent' }}>
                    {item}
                  </Box>
                ))}
              </Box>
              {/* Footer */}
              <Box sx={{ marginTop: 'auto', fontSize: '11px', color: 'oklch(0.5 0.01 60)', borderTop: '1px solid oklch(0.18 0.015 60)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LiveDotTeal /> Live · indexing
                </Box>
                <Box sx={{ display: 'flex', gap: '16px', fontFamily: T.fontMono }}>
                  <span><Box component="b" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>847</Box> listings</span>
                  <span><Box component="b" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>312</Box> companies</span>
                </Box>
              </Box>
            </Box>

            {/* Match list */}
            <Box sx={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {matches.map((m) => (
                <Box key={m.rank} sx={{ background: 'oklch(0.13 0.015 60)', border: '1px solid oklch(0.20 0.015 60)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', color: 'oklch(0.4 0.01 60)', paddingTop: '2px' }}>{m.rank}</Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ fontSize: '13.5px', fontWeight: 600, color: 'rgba(255,255,255,0.95)' }}>{m.title}</Box>
                    <Box sx={{ fontSize: '11.5px', color: 'oklch(0.5 0.01 60)', marginTop: '2px' }}>{m.company}</Box>
                    {m.explain && (
                      <Box sx={{ marginTop: '10px', padding: '8px 10px', fontSize: '12px', lineHeight: 1.55, color: 'oklch(0.6 0.01 60)', background: 'oklch(0.10 0.015 60)', borderRadius: '6px', borderLeft: '2px solid oklch(0.7 0.14 175 / 0.4)', maxWidth: '100%' }}>
                        {m.explain}
                      </Box>
                    )}
                  </Box>
                  <Box sx={{ fontSize: '22px', fontWeight: 700, fontFamily: T.fontMono, letterSpacing: '-0.02em', color: m.color }}>{m.score}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Side cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <OnDarkCard label="What I built">
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.75)', display: 'flex', flexDirection: 'column' }}>
              {['Weighted scoring engine with live re‑rank', 'Resume optimizer (LLM‑powered)', 'Application tracker w/ pipeline states', 'Company intel scraping & summarization'].map(item => (
                <Box key={item} component="li" sx={{ padding: '6px 0', borderBottom: `1px dashed oklch(0.32 0.015 60)`, '&:last-child': { borderBottom: 'none' }, display: 'flex', alignItems: 'baseline', gap: '8px', '&::before': { content: '"→"', fontFamily: T.fontMono, fontSize: '11px', color: 'oklch(0.78 0.14 50)', flexShrink: 0 } }}>
                  {item}
                </Box>
              ))}
            </Box>
          </OnDarkCard>
          <OnDarkCard label="Stack">
            <Box component="p" sx={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, margin: 0 }}>
              React 18 · Space Grotesk · Anthropic Claude · client‑side weight tuning, sliders sum to 100. Five tabs, one workspace.
            </Box>
          </OnDarkCard>
          <OnDarkCard label="Outcome">
            <Box component="p" sx={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, margin: 0 }}>
              A search surface that{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: '#fff', fontFamily: T.fontSerif }}>shows its math</Box>
              . The explanation card under each match converts a ranked list into something you can argue with — and tune.
            </Box>
          </OnDarkCard>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Work/ScoutCase/
git commit -m "feat: add ScoutCase browser mockup component"
```

---

## Task 11: SilverLogicCase component

**Files:**
- Create: `src/app/components/Work/SilverLogicCase/index.tsx`

- [ ] **Step 1: Create `src/app/components/Work/SilverLogicCase/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

function CaseCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box sx={{ background: T.paper, borderRadius: '16px', padding: '18px 20px', boxShadow: `inset 0 0 0 1px ${T.line}` }}>
      <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3, marginBottom: '10px' }}>{label}</Box>
      {children}
    </Box>
  )
}

function Dashboard() {
  return (
    <Box sx={{ background: T.bg, borderRadius: '18px', padding: '24px', boxShadow: `inset 0 0 0 1px ${T.line}` }}>
      {/* Head */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '14px', paddingBottom: '16px', marginBottom: '18px', borderBottom: `1px solid ${T.line}` }}>
        <Box>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3, marginBottom: '4px' }}>Scheduling reliability · live</Box>
          <Box sx={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.015em' }}>Event triggers · last 30 days</Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', padding: '4px 10px', background: T.goodSoft, color: 'oklch(0.35 0.09 150)', borderRadius: '99px', fontWeight: 600 }}>3σ → 5σ</Box>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', padding: '4px 10px', background: '#fff', color: T.ink2, borderRadius: '99px', boxShadow: `0 0 0 1px ${T.line}` }}>last refresh 12s ago</Box>
        </Box>
      </Box>

      {/* Stats */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: '12px', marginBottom: '20px' }}>
        {[
          { k: 'Failure rate', v: '0.4', u: '%', d: '↓ from 7.0%', good: true },
          { k: 'DPMO', v: '4,012', u: '', d: '↓ from 70,000', good: true },
          { k: 'Mean time to detect', v: '38', u: 's', d: 'was: hours', good: true },
          { k: 'Coverage', v: '94', u: '%', d: 'unit + E2E', good: false },
        ].map(s => (
          <Box key={s.k} sx={{ background: '#fff', borderRadius: '12px', padding: '14px 16px', boxShadow: `0 0 0 1px ${T.line}` }}>
            <Box sx={{ fontFamily: T.fontMono, fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3, marginBottom: '6px' }}>{s.k}</Box>
            <Box sx={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
              {s.v}<Box component="span" sx={{ fontSize: '14px', color: T.ink3, fontWeight: 500, marginLeft: '1px' }}>{s.u}</Box>
            </Box>
            <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', color: s.good ? 'oklch(0.5 0.12 150)' : T.ink3, marginTop: '6px' }}>{s.d}</Box>
          </Box>
        ))}
      </Box>

      {/* Chart */}
      <Box sx={{ background: '#fff', borderRadius: '12px', padding: '16px', boxShadow: `0 0 0 1px ${T.line}` }}>
        <Box component="svg" viewBox="0 0 600 160" preserveAspectRatio="none" aria-hidden="true" sx={{ width: '100%', height: '160px', display: 'block' }}>
          <defs>
            <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.14 45)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.72 0.14 45)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="oklch(0.88 0.01 60)" strokeWidth="1">
            <line x1="0" y1="40" x2="600" y2="40" />
            <line x1="0" y1="80" x2="600" y2="80" />
            <line x1="0" y1="120" x2="600" y2="120" />
          </g>
          <path d="M0,30 L40,28 L80,40 L120,22 L160,35 L200,32 L240,90 L280,118 L320,128 L360,132 L400,135 L440,138 L480,140 L520,142 L560,143 L600,144"
            fill="none" stroke="oklch(0.55 0.22 25)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0,150 L40,148 L80,145 L120,142 L160,140 L200,135 L240,95 L280,55 L320,42 L360,38 L400,34 L440,30 L480,28 L520,26 L560,25 L600,24"
            fill="none" stroke="oklch(0.72 0.14 45)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M0,150 L40,148 L80,145 L120,142 L160,140 L200,135 L240,95 L280,55 L320,42 L360,38 L400,34 L440,30 L480,28 L520,26 L560,25 L600,24 L600,160 L0,160 Z"
            fill="url(#dbGrad)" />
          <line x1="220" y1="10" x2="220" y2="160" stroke="oklch(0.22 0.012 60)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        </Box>
        <Box sx={{ display: 'flex', gap: '18px', flexWrap: 'wrap', marginTop: '10px', fontFamily: T.fontMono, fontSize: '11px', color: T.ink3 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Box component="i" sx={{ width: '14px', height: '3px', borderRadius: '2px', display: 'inline-block', background: 'oklch(0.55 0.22 25)' }} />
            Failure rate
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Box component="i" sx={{ width: '14px', height: '3px', borderRadius: '2px', display: 'inline-block', background: 'oklch(0.72 0.14 45)' }} />
            Detection coverage
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: T.accentInk }}>
            ▲ Dashboard shipped
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function SilverLogicCase() {
  return (
    <Box
      component="article"
      id="silverlogic"
      sx={{ marginBottom: 0, padding: '48px', background: '#fff', borderRadius: '28px', boxShadow: `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}` }}
    >
      {/* Header */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '56px 1fr auto' }, gap: '24px', marginBottom: '44px', alignItems: 'start' }}>
        <Box sx={{ fontFamily: T.fontMono, fontSize: '14px', fontWeight: 500, color: T.ink3, letterSpacing: '0.04em', paddingTop: '6px' }}>03</Box>
        <Box>
          <Box sx={{ fontFamily: T.fontMono, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: T.ink3, marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Box component="span" sx={{ width: '8px', height: '8px', borderRadius: '99px', background: T.good, display: 'inline-block' }} />
            The Silver Logic
            <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '10.5px', padding: '3px 9px', background: T.goodSoft, color: 'oklch(0.35 0.09 150)', borderRadius: '99px', textTransform: 'none', letterSpacing: 0, marginLeft: '6px' }}>Day job · 2023 — present</Box>
          </Box>
          <Box component="h3" sx={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.08, margin: '0 0 14px' }}>
            SaaS, portals, and a reliability win.
          </Box>
          <Box component="p" sx={{ maxWidth: '60ch', fontSize: '16.5px', color: T.ink2, lineHeight: 1.6 }}>
            Three years building features end‑to‑end across multiple client deployments — React/TypeScript frontends backed by Django DRF and GraphQL APIs. Specifics anonymized; details below.
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          {['Production · 5+ clients', 'Team of 5+ engineers'].map(t => (
            <Box key={t} sx={{ fontFamily: T.fontMono, fontSize: '11px', padding: '4px 10px', background: T.bg, color: T.ink2, borderRadius: '99px', whiteSpace: 'nowrap' }}>{t}</Box>
          ))}
        </Box>
      </Box>

      {/* Canvas */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.5fr) minmax(260px, 1fr)' }, gap: '36px', alignItems: 'start' }}>
        <Dashboard />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <CaseCard label="The win">
            <Box component="p" sx={{ fontSize: '14.5px', color: T.ink2, lineHeight: 1.55, margin: 0 }}>
              Spotted a{' '}
              <Box component="strong" sx={{ color: T.ink, fontWeight: 600 }}>7% event‑trigger failure rate</Box>
              {' '}in a client scheduling system — 70,000 DPMO, 3σ territory. Designed a real‑time monitoring + anomaly detection dashboard that surfaced failures within seconds instead of hours, enabling proactive maintenance.
            </Box>
          </CaseCard>
          <CaseCard label="Also shipped">
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: T.ink2, display: 'flex', flexDirection: 'column' }}>
              {[
                'REST + GraphQL APIs (DRF, graphene‑django)',
                'Stripe, Auth0, mapping/notification integrations across 5+ client builds',
                'Cypress E2E + component tests as CI/CD gate',
                'Unit/integration coverage from zero on a brownfield codebase',
              ].map(item => (
                <Box key={item} component="li" sx={{ padding: '6px 0', borderBottom: `1px dashed ${T.line}`, '&:last-child': { borderBottom: 'none' }, display: 'flex', alignItems: 'baseline', gap: '8px', '&::before': { content: '"→"', fontFamily: T.fontMono, fontSize: '11px', color: T.accentDeep, flexShrink: 0 } }}>
                  {item}
                </Box>
              ))}
            </Box>
          </CaseCard>
          <CaseCard label="How I work">
            <Box component="p" sx={{ fontSize: '14.5px', color: T.ink2, lineHeight: 1.55, margin: 0 }}>
              Lean Six Sigma Green Belt — DMAIC isn&apos;t a buzzword on the resume, it&apos;s how I scope a fix.{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>Define</Box> the metric,{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>measure</Box> the baseline,{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>analyze</Box> the root cause,{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>improve</Box>, then{' '}
              <Box component="em" sx={{ fontStyle: 'italic', color: T.ink, fontFamily: T.fontSerif }}>control</Box> with monitoring.
            </Box>
          </CaseCard>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Work/SilverLogicCase/
git commit -m "feat: add SilverLogicCase dashboard mockup component"
```

---

## Task 12: Work section wrapper

**Files:**
- Create: `src/app/components/Work/index.tsx`

- [ ] **Step 1: Create `src/app/components/Work/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'
import TeloraCase from './TeloraCase'
import ScoutCase from './ScoutCase'
import SilverLogicCase from './SilverLogicCase'

export default function Work() {
  return (
    <Box
      component="section"
      id="work"
      sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `${T.sectionPadY} ${T.containerPad}` }}
    >
      <Box sx={{ maxWidth: '720px', marginBottom: '80px' }}>
        <Eyebrow>Selected work · 2024 — 2026</Eyebrow>
        <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
          Three projects, end‑to‑end.
        </Box>
        <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
          A representative slice of the work — a product concept, an AI tool, and the day job. Each shows how I move from a fuzzy problem to a shipped, instrumented surface.
        </Box>
      </Box>
      <TeloraCase />
      <ScoutCase />
      <SilverLogicCase />
    </Box>
  )
}
```

- [ ] **Step 2: Add Work to `src/app/page.tsx`**

```typescript
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Visual check**

```bash
npm run dev
```

Expected: all three case studies render below the marquee, with correct light/dark backgrounds.

- [ ] **Step 4: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Work/ src/app/page.tsx
git commit -m "feat: add Work section with all three case studies"
```

---

## Task 13: Skills section

**Files:**
- Create: `src/app/components/Skills/index.tsx`

- [ ] **Step 1: Create `src/app/components/Skills/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const cols = [
  { num: '01', title: 'Frontend', items: ['React · Next.js · React Native', 'TypeScript · JavaScript (ES6+)', 'HTML5 · CSS3 · responsive design', 'Component architecture & design systems'] },
  { num: '02', title: 'Backend', items: ['Python · Django · Django REST Framework', 'GraphQL (graphene-django)', 'REST API design & versioning', 'Auth, sessions, multi‑tenant patterns'] },
  { num: '03', title: 'Data & infra', items: ['PostgreSQL & query optimization', 'CI/CD pipelines', 'Docker · containerized dev environments', 'Monitoring & anomaly detection'] },
  { num: '04', title: 'Quality', items: ['Cypress E2E & component tests', 'Unit + integration testing', 'API testing & code review', 'Lean Six Sigma Green Belt'] },
  { num: '05', title: 'Integrations', items: ['Stripe — payments & subscriptions', 'Auth0 — identity & SSO', 'Mapping & notification APIs', 'Third‑party API design & resilience'] },
  { num: '06', title: 'Working style', items: ['End‑to‑end ownership', 'Agile · cross‑functional teamwork', 'Data‑driven decisions, DMAIC mindset', 'Detail‑oriented, long‑term thinker'] },
]

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `${T.sectionPadY} ${T.containerPad}` }}
    >
      <Box sx={{ maxWidth: '720px', marginBottom: '56px' }}>
        <Eyebrow>Stack · 04</Eyebrow>
        <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
          What I reach for.
        </Box>
        <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
          Comfortable across the stack — but particularly happy in the seam where API design meets frontend delivery.
        </Box>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: '1px',
        background: T.line,
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: `0 0 0 1px ${T.line}`,
      }}>
        {cols.map(col => (
          <Box key={col.num} sx={{ background: T.paper, padding: '28px 26px' }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '17px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '16px', paddingBottom: '14px', borderBottom: `1px dashed ${T.line2}` }}>
              <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '12px', color: T.ink3, fontWeight: 500 }}>{col.num}</Box>
              {col.title}
            </Box>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {col.items.map(item => (
                <Box key={item} component="li" sx={{ fontSize: '14px', color: T.ink2, letterSpacing: '-0.005em', lineHeight: 1.45 }}>{item}</Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Skills/
git commit -m "feat: add Skills section"
```

---

## Task 14: Now section

**Files:**
- Create: `src/app/components/Now/index.tsx`

- [ ] **Step 1: Create `src/app/components/Now/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const cards = [
  { k: 'Shipping', v: 'Multi‑client SaaS at The Silver Logic — feature work, anomaly dashboards, and bringing tests to brownfield code.', primary: true },
  { k: 'Side build', v: '<strong>Telora</strong> — pushing the call‑concierge concept past prototype into a real iOS surface.' },
  { k: 'Side build', v: '<strong>Scout</strong> — iterating on the match‑scoring algorithm; testing transparency vs. accuracy tradeoffs.' },
  { k: 'Learning', v: 'Production GraphQL patterns — schema federation, persisted queries, N+1 hygiene at scale.' },
  { k: 'Reading', v: 'Deep Work · Atomic Habits · The One Thing — system over willpower.' },
]

export default function Now() {
  return (
    <Box
      component="section"
      id="now"
      sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `${T.sectionPadY} ${T.containerPad}` }}
    >
      <Box sx={{ maxWidth: '720px', marginBottom: '56px' }}>
        <Eyebrow>Now · <Box component="span" sx={{ fontFamily: T.fontMono }}>May 2026</Box></Eyebrow>
        <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
          What I&apos;m building right now.
        </Box>
        <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
          An honest list, updated when it shifts. Borrowed from{' '}
          <Box component="a" href="https://nownownow.com" target="_blank" rel="noopener" className="inline-link">nownownow</Box>.
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '14px' }}>
        {cards.map((card, i) => (
          <Box
            key={i}
            sx={{
              background: card.primary ? T.accentSoft : '#fff',
              borderRadius: '18px',
              padding: '22px 24px',
              boxShadow: card.primary ? `0 0 0 1px oklch(0.85 0.06 50)` : `0 0 0 1px ${T.line}`,
              display: 'flex', flexDirection: 'column', gap: '10px',
            }}
          >
            <Box sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: card.primary ? T.accentDeep : T.ink3 }}>{card.k}</Box>
            <Box sx={{ fontSize: '15.5px', color: T.ink, letterSpacing: '-0.01em', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: card.v }} />
          </Box>
        ))}

        {/* Mantra card */}
        <Box sx={{ background: T.ink, borderRadius: '18px', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          <Box sx={{ fontFamily: T.fontSerif, fontSize: '24px', letterSpacing: '-0.015em', lineHeight: 1.2, color: '#fff', display: 'flex', flexDirection: 'column', fontStyle: 'italic' }}>
            <span>&quot;Build today. Solve tomorrow.</span>
            <Box component="span" sx={{ color: 'oklch(0.85 0.1 45)' }}>Impact forever.&quot;</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Now/
git commit -m "feat: add Now section"
```

---

## Task 15: Contact section

**Files:**
- Create: `src/app/components/Contact/index.tsx`

- [ ] **Step 1: Create `src/app/components/Contact/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const links = [
  { k: 'GitHub',   v: 'github.com/rf2tsl',      href: 'https://github.com/rf2tsl' },
  { k: 'LinkedIn', v: 'in/rodean-fraser',         href: 'https://www.linkedin.com/in/rodean-fraser' },
  { k: 'Email',    v: 'rodeanfraser@gmail.com',   href: 'mailto:rodeanfraser@gmail.com' },
  { k: 'Phone',    v: '561 · 713 · 0664',         href: 'tel:+15617130664' },
]

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        background: T.paper2,
        borderRadius: '32px',
        margin: { xs: '0 20px 60px', md: `0 ${T.containerPad} 60px` },
        maxWidth: T.maxw,
        padding: { xs: '50px 28px', md: 'clamp(50px, 8vw, 96px) clamp(28px, 5vw, 64px)' },
        marginLeft: 'auto',
        marginRight: 'auto',
        width: { md: `calc(100% - clamp(20px, 5vw, 64px) * 2)` },
      }}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 'clamp(28px, 5vw, 64px)', alignItems: 'center' }}>
        <Box>
          <Eyebrow>Get in touch · 05</Eyebrow>
          <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
            Let&apos;s build something<br />worth keeping.
          </Box>
          <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
            I&apos;m open to senior full‑stack roles — ideally remote, ideally somewhere that ships and measures. Happy to chat about contract or full‑time. Reply within 24 hours.
          </Box>
          <Box sx={{ marginTop: '28px' }}>
            <Box
              component="a"
              href="mailto:rodeanfraser@gmail.com"
              sx={{
                height: '56px', padding: '0 26px', borderRadius: '14px',
                fontFamily: T.fontSans, fontSize: '16.5px', fontWeight: 600,
                border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                letterSpacing: '-0.01em', textDecoration: 'none',
                background: T.accent, color: '#fff',
                boxShadow: '0 1px 2px rgba(160,60,30,0.18), inset 0 1px 0 rgba(255,255,255,0.22)',
                transition: 'transform .15s ease, background .15s',
                '&:hover': { background: T.accentDeep, transform: 'translateY(-1px)' },
              }}
            >
              rodeanfraser@gmail.com <span aria-hidden="true">→</span>
            </Box>
          </Box>
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', flexDirection: 'column',
            background: '#fff', borderRadius: '18px',
            boxShadow: `0 0 0 1px ${T.line}`, overflow: 'hidden',
          }}
        >
          {links.map((l, i) => (
            <Box
              key={l.k}
              component="li"
              sx={{ borderBottom: i < links.length - 1 ? `1px solid ${T.line}` : 'none' }}
            >
              <Box
                component="a"
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener' : undefined}
                sx={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  gap: '18px', padding: '22px 26px',
                  textDecoration: 'none', color: T.ink,
                  transition: 'background .12s',
                  '&:hover': {
                    background: 'oklch(0.97 0.012 75)',
                    '& .cl-arrow': { color: T.accent, transform: 'translate(2px, -2px)' },
                  },
                }}
              >
                <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3 }}>{l.k}</Box>
                <Box component="span" sx={{ fontSize: '16px', color: T.ink, letterSpacing: '-0.01em', fontWeight: 500 }}>
                  {l.v}{' '}
                  <Box component="span" className="cl-arrow" sx={{ color: T.ink3, marginLeft: '6px', transition: 'transform .15s, color .15s', display: 'inline-block' }}>↗</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Contact/
git commit -m "feat: add Contact section"
```

---

## Task 16: Footer component

**Files:**
- Create: `src/app/components/Footer/index.tsx`

- [ ] **Step 1: Create `src/app/components/Footer/index.tsx`**

```typescript
'use client'

import Box from '@mui/material/Box'
import { RfMark } from '@/components/primitives'
import { T } from '@/lib/theme'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: `1px solid ${T.line}`, padding: '28px 0 36px' }}
    >
      <Box sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `0 ${T.containerPad}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: T.ink3 }}>
          <RfMark size="sm" />
          <span>© 2026 Rodean Fraser</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: T.ink3 }}>
          <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '11.5px' }}>Built with Next.js · MUI · oklch</Box>
          <Box
            component="a"
            href="#top"
            sx={{ textDecoration: 'none', color: T.ink2, fontWeight: 500, padding: '6px 10px', borderRadius: '99px', '&:hover': { color: T.ink, background: T.bg } }}
          >
            Back to top ↑
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: Type-check and commit**

```bash
npx tsc --noEmit
git add src/app/components/Footer/
git commit -m "feat: add Footer component"
```

---

## Task 17: Final page composition and build

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace `src/app/page.tsx` with full composition**

```typescript
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Skills from './components/Skills'
import Now from './components/Now'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Now />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
```

- [ ] **Step 2: Full visual check on dev server**

```bash
npm run dev
```

Walk through each section at http://localhost:3000:
- Nav: sticky, frosted, `<RF/>` logo coral, links hidden on mobile
- Hero: headline with italic serif flourish, portrait rotated with tape pseudo, chips, buttons
- Marquee: scrolling, fades at edges
- Work: Telora (light card, phone), Scout (dark card, browser), Silver Logic (light card, dashboard)
- Skills: 3×2 grid with dashed header borders
- Now: 6 cards including mantra card
- Contact: rounded section, link list with hover arrow animation
- Footer: `<RF/>` sm, copyright, back to top

- [ ] **Step 3: Static build check**

```bash
npm run build
```

Expected: build succeeds, `out/` directory created. Zero errors. Warnings about `<img>` vs `next/image` are acceptable for the inline SVG elements.

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 5: Final commit**

```bash
git add src/app/page.tsx
git commit -m "feat: compose full portfolio page and verify static build"
```

---

## Verification Checklist

Before declaring done:

```bash
# 1. Zero TypeScript errors
npx tsc --noEmit

# 2. Clean production build
npm run build

# 3. Serve static output locally
npx serve out/
```

Open the served site and verify smooth-scroll anchors work (`#work`, `#skills`, `#now`, `#contact`), the marquee animates, the live dots pulse, and the typing indicator animates on the Telora card.
