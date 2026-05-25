'use client'

import React from 'react'
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
