'use client'

import React from 'react'
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
              <Box sx={{ fontSize: '13.5px', color: T.ink, letterSpacing: '-0.005em', lineHeight: 1.35 }}>&ldquo;Member services, please.&rdquo;</Box>
            </Box>
            {/* IVR line */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '9px 11px', borderRadius: '12px', background: '#fff', boxShadow: `0 0 0 1px ${T.line}` }}>
              <Box sx={{ fontFamily: T.fontMono, fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3 }}>IVR</Box>
              <Box sx={{ fontSize: '13.5px', color: T.ink, letterSpacing: '-0.005em', lineHeight: 1.35 }}>&ldquo;Connecting you to an agent…&rdquo;</Box>
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
