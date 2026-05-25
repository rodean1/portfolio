'use client'

import { styled } from '@mui/material/styles'

const teal = 'oklch(0.7 0.14 175)'
const shouldForwardScoutProp = (prop: PropertyKey) =>
  prop !== 'active' && prop !== 'dotColor' && prop !== 'scoreColor'

export const LiveDotTeal = styled('span')({
  width: '7px',
  height: '7px',
  background: teal,
  borderRadius: '99px',
  display: 'inline-block',
  animation: 'live-teal 1.6s ease-out infinite',
})

export const ScoutSymbol = styled('span')({
  color: teal,
})

export const AiBadge = styled('span')({
  fontSize: '9px',
  padding: '1px 5px',
  background: 'oklch(0.7 0.14 175 / 0.2)',
  color: teal,
  borderRadius: '3px',
  letterSpacing: '0.06em',
  fontWeight: 600,
})

export const BrowserMockup = styled('div')({
  borderRadius: '14px',
  background: 'oklch(0.10 0.015 60)',
  overflow: 'hidden',
  boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6), 0 0 0 1px oklch(0.30 0.015 60)',
})

export const BrowserBar = styled('div')({
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '0 12px',
  background: 'oklch(0.13 0.015 60)',
  borderBottom: '1px solid oklch(0.20 0.015 60)',
})

export const WindowDot = styled('span', {
  shouldForwardProp: shouldForwardScoutProp,
})<{ dotColor: string }>(({ dotColor }) => ({
  width: '11px',
  height: '11px',
  borderRadius: '99px',
  background: dotColor,
  display: 'inline-block',
}))

export const BrowserTitle = styled('div')({
  flex: 1,
  textAlign: 'center',
  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
  fontSize: '11px',
  color: 'oklch(0.5 0.01 60)',
  letterSpacing: '0.02em',
})

export const BrowserBody = styled('div')({
  display: 'grid',
  gridTemplateColumns: '220px 1fr',
  minHeight: '480px',
  background: 'oklch(0.10 0.015 60)',
  color: 'rgba(255,255,255,0.85)',
})

export const ScoutSidebar = styled('aside')({
  borderRight: '1px solid oklch(0.18 0.015 60)',
  padding: '18px 14px',
  background: 'oklch(0.08 0.015 60)',
  display: 'flex',
  flexDirection: 'column',
})

export const SidebarBrand = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingBottom: '16px',
  borderBottom: '1px solid oklch(0.18 0.015 60)',
  marginBottom: '16px',
})

export const ScoutIcon = styled('div')({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  background: 'oklch(0.7 0.14 175 / 0.18)',
  color: teal,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '17px',
  boxShadow: 'inset 0 0 0 1px oklch(0.7 0.14 175 / 0.3)',
})

export const BrandTitleRow = styled('div')({
  fontSize: '15px',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const SmallAiBadge = styled(AiBadge)({
  fontSize: '8px',
})

export const ScoutRole = styled('div')({
  fontSize: '9px',
  color: 'oklch(0.45 0.01 60)',
  letterSpacing: '0.07em',
  marginTop: '2px',
})

export const TargetCard = styled('section')({
  background: 'oklch(0.13 0.015 60)',
  border: '1px solid oklch(0.20 0.015 60)',
  borderRadius: '8px',
  padding: '10px 12px',
  marginBottom: '16px',
})

export const TargetLabel = styled('div')({
  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
  fontSize: '9px',
  color: 'oklch(0.45 0.01 60)',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  marginBottom: '4px',
})

export const TargetText = styled('div')({
  fontSize: '12px',
  color: 'rgba(255,255,255,0.82)',
  lineHeight: 1.35,
})

export const SidebarNav = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  marginBottom: '14px',
})

export const SidebarNavLink = styled('a', {
  shouldForwardProp: shouldForwardScoutProp,
})<{ active?: boolean }>(({ active }) => ({
  padding: active ? '8px 8px 8px 8px' : '8px 10px',
  fontSize: '12.5px',
  color: active ? '#fff' : 'oklch(0.6 0.01 60)',
  textDecoration: 'none',
  borderRadius: '6px',
  borderLeft: active ? `2px solid ${teal}` : '2px solid transparent',
  background: active ? 'oklch(0.13 0.015 60)' : 'transparent',
}))

export const SidebarFooter = styled('div')({
  marginTop: 'auto',
  fontSize: '11px',
  color: 'oklch(0.5 0.01 60)',
  borderTop: '1px solid oklch(0.18 0.015 60)',
  paddingTop: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const SidebarStatus = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const SidebarStats = styled('div')({
  display: 'flex',
  gap: '16px',
  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
})

export const SidebarStatNumber = styled('b')({
  color: 'rgba(255,255,255,0.9)',
  fontWeight: 600,
})

export const MatchList = styled('div')({
  padding: '18px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const MatchCard = styled('section')({
  background: 'oklch(0.13 0.015 60)',
  border: '1px solid oklch(0.20 0.015 60)',
  borderRadius: '10px',
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
})

export const MatchRank = styled('div')({
  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
  fontSize: '11px',
  color: 'oklch(0.4 0.01 60)',
  paddingTop: '2px',
})

export const MatchBody = styled('div')({
  flex: 1,
})

export const MatchTitle = styled('div')({
  fontSize: '13.5px',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.95)',
})

export const MatchCompany = styled('div')({
  fontSize: '11.5px',
  color: 'oklch(0.5 0.01 60)',
  marginTop: '2px',
})

export const MatchExplain = styled('div')({
  marginTop: '10px',
  padding: '8px 10px',
  fontSize: '12px',
  lineHeight: 1.55,
  color: 'oklch(0.6 0.01 60)',
  background: 'oklch(0.10 0.015 60)',
  borderRadius: '6px',
  borderLeft: '2px solid oklch(0.7 0.14 175 / 0.4)',
  maxWidth: '100%',
})

export const MatchScore = styled('div', {
  shouldForwardProp: shouldForwardScoutProp,
})<{ scoreColor: string }>(({ scoreColor }) => ({
  fontSize: '22px',
  fontWeight: 700,
  fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
  letterSpacing: '-0.02em',
  color: scoreColor,
}))
