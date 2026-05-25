'use client'

import React from 'react'
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
