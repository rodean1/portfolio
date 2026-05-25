'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const cards: { k: string; v: React.ReactNode; primary?: boolean }[] = [
  { k: 'Shipping', v: 'Multi‑client SaaS at The Silver Logic — feature work, anomaly dashboards, and bringing tests to brownfield code.', primary: true },
  { k: 'Side build', v: <><strong>Telora</strong> — pushing the call‑concierge concept past prototype into a real iOS surface.</> },
  { k: 'Side build', v: <><strong>Scout</strong> — iterating on the match‑scoring algorithm; testing transparency vs. accuracy tradeoffs.</> },
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
          <Box component="a" href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="inline-link">nownownow</Box>.
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
            <Box sx={{ fontSize: '15.5px', color: T.ink, letterSpacing: '-0.01em', lineHeight: 1.5 }}>{card.v}</Box>
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
