'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

const shouldForwardDashboardProp = (prop: PropertyKey) =>
  prop !== 'good' && prop !== 'variant' && prop !== 'swatchColor' && prop !== 'accent'

export const DashboardShell = styled('div')({
  background: T.bg,
  borderRadius: '18px',
  padding: '24px',
  boxShadow: `inset 0 0 0 1px ${T.line}`,
})

export const DashboardHead = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '14px',
  paddingBottom: '16px',
  marginBottom: '18px',
  borderBottom: `1px solid ${T.line}`,
})

export const DashboardOverline = styled('div')({
  fontFamily: T.fontMono,
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: T.ink3,
  marginBottom: '4px',
})

export const DashboardTitle = styled('div')({
  fontSize: '17px',
  fontWeight: 600,
  letterSpacing: '-0.015em',
})

export const DashboardBadges = styled('div')({
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap',
})

export const DashboardBadge = styled('span', {
  shouldForwardProp: shouldForwardDashboardProp,
})<{ variant?: 'success' | 'neutral' }>(({ variant }) => ({
  fontFamily: T.fontMono,
  fontSize: '11px',
  padding: '4px 10px',
  background: variant === 'success' ? T.goodSoft : '#fff',
  color: variant === 'success' ? 'oklch(0.35 0.09 150)' : T.ink2,
  borderRadius: '99px',
  fontWeight: variant === 'success' ? 600 : undefined,
  boxShadow: variant === 'neutral' ? `0 0 0 1px ${T.line}` : undefined,
}))

export const StatsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
  marginBottom: '20px',
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})

export const StatCard = styled('section')({
  background: '#fff',
  borderRadius: '12px',
  padding: '14px 16px',
  boxShadow: `0 0 0 1px ${T.line}`,
})

export const StatLabel = styled('div')({
  fontFamily: T.fontMono,
  fontSize: '10.5px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: T.ink3,
  marginBottom: '6px',
})

export const StatValue = styled('div')({
  fontSize: '26px',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: 1,
})

export const StatUnit = styled('span')({
  fontSize: '14px',
  color: T.ink3,
  fontWeight: 500,
  marginLeft: '1px',
})

export const StatDelta = styled('div', {
  shouldForwardProp: shouldForwardDashboardProp,
})<{ good?: boolean }>(({ good }) => ({
  fontFamily: T.fontMono,
  fontSize: '11px',
  color: good ? 'oklch(0.5 0.12 150)' : T.ink3,
  marginTop: '6px',
}))

export const ChartCard = styled('section')({
  background: '#fff',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: `0 0 0 1px ${T.line}`,
})

export const ChartSvg = styled('svg')({
  width: '100%',
  height: '160px',
  display: 'block',
})

export const ChartLegend = styled('div')({
  display: 'flex',
  gap: '18px',
  flexWrap: 'wrap',
  marginTop: '10px',
  fontFamily: T.fontMono,
  fontSize: '11px',
  color: T.ink3,
})

export const ChartLegendItem = styled('div', {
  shouldForwardProp: shouldForwardDashboardProp,
})<{ accent?: boolean }>(({ accent }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  color: accent ? T.accentInk : undefined,
}))

export const ChartSwatch = styled('i', {
  shouldForwardProp: shouldForwardDashboardProp,
})<{ swatchColor: string }>(({ swatchColor }) => ({
  width: '14px',
  height: '3px',
  borderRadius: '2px',
  display: 'inline-block',
  background: swatchColor,
}))
