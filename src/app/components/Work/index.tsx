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
