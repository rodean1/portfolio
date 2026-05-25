'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

type CaseTone = 'light' | 'dark' | 'darkPanel'

const isDark = (tone?: CaseTone) => tone === 'dark' || tone === 'darkPanel'
const shouldForwardCaseProp = (prop: PropertyKey) =>
  prop !== 'tone' && prop !== 'last' && prop !== 'padded'

export const CaseArticle = styled('article', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone; last?: boolean }>(({ tone, last }) => ({
  marginBottom: last ? 0 : '96px',
  padding: '48px',
  background: isDark(tone) ? T.night : '#fff',
  borderRadius: '28px',
  boxShadow: isDark(tone)
    ? '0 1px 0 rgba(0,0,0,0.4), 0 0 0 1px oklch(0.30 0.015 60 / 0.6)'
    : `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}`,
  color: isDark(tone) ? 'rgba(255,255,255,0.9)' : T.ink,
}))

export const CaseHeader = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '24px',
  marginBottom: '44px',
  alignItems: 'start',
  '@media (min-width: 600px)': {
    gridTemplateColumns: '56px 1fr auto',
  },
})

export const CaseIndex = styled('div', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontFamily: T.fontMono,
  fontSize: '14px',
  fontWeight: 500,
  color: isDark(tone) ? 'rgba(255,255,255,0.4)' : T.ink3,
  letterSpacing: '0.04em',
  paddingTop: '6px',
}))

export const CaseKicker = styled('div', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontFamily: T.fontMono,
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: isDark(tone) ? 'rgba(255,255,255,0.4)' : T.ink3,
  marginBottom: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
}))

export const CaseTitle = styled('h3', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontSize: 'clamp(28px, 3.2vw, 40px)',
  fontWeight: 700,
  letterSpacing: '-0.035em',
  lineHeight: 1.08,
  margin: '0 0 14px',
  color: isDark(tone) ? '#fff' : T.ink,
}))

export const CaseDescription = styled('p', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  maxWidth: '60ch',
  fontSize: '16.5px',
  color: isDark(tone) ? 'rgba(255,255,255,0.72)' : T.ink2,
  lineHeight: 1.6,
}))

export const CaseTags = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  alignItems: 'flex-end',
})

export const CaseTag = styled('span', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontFamily: T.fontMono,
  fontSize: '11px',
  padding: '4px 10px',
  background: isDark(tone) ? T.night2 : T.bg,
  color: isDark(tone) ? 'rgba(255,255,255,0.75)' : T.ink2,
  borderRadius: '99px',
  whiteSpace: 'nowrap',
}))

export const CaseCanvas = styled('div', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ padded?: boolean }>(({ padded }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '36px',
  alignItems: 'start',
  padding: padded ? '8px 0' : undefined,
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'minmax(0, 1.5fr) minmax(260px, 1fr)',
  },
}))

export const SideCards = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

export const InfoCard = styled('section', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  background: tone === 'darkPanel' ? T.night2 : isDark(tone) ? T.night : T.paper,
  borderRadius: '16px',
  padding: '18px 20px',
  boxShadow: tone === 'darkPanel'
    ? 'inset 0 0 0 1px oklch(0.34 0.015 60)'
    : isDark(tone)
    ? `inset 0 0 0 1px ${T.night3}`
    : `inset 0 0 0 1px ${T.line}`,
  color: isDark(tone) ? 'rgba(255,255,255,0.9)' : T.ink,
}))

export const InfoCardLabel = styled('div', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontFamily: T.fontMono,
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: isDark(tone) ? 'rgba(255,255,255,0.5)' : T.ink3,
  marginBottom: '10px',
}))

export const CardParagraph = styled('p', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontSize: '14.5px',
  color: isDark(tone) ? 'rgba(255,255,255,0.75)' : T.ink2,
  lineHeight: 1.55,
  margin: 0,
}))

export const CaseList = styled('ul', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '14px',
  color: isDark(tone) ? 'rgba(255,255,255,0.75)' : T.ink2,
  display: 'flex',
  flexDirection: 'column',
}))

export const CaseListItem = styled('li', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  padding: '6px 0',
  borderBottom: `1px dashed ${isDark(tone) ? T.night3 : T.line}`,
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&::before': {
    content: '"→"',
    fontFamily: T.fontMono,
    fontSize: '11px',
    color: isDark(tone) ? 'oklch(0.78 0.14 50)' : T.accentDeep,
    flexShrink: 0,
  },
}))

export const InlineEmphasis = styled('em', {
  shouldForwardProp: shouldForwardCaseProp,
})<{ tone?: CaseTone }>(({ tone }) => ({
  fontStyle: 'italic',
  color: isDark(tone) ? '#fff' : T.ink,
  fontFamily: T.fontSerif,
}))

export const InlineStrong = styled('strong')({
  color: T.ink,
  fontWeight: 600,
})

export const KickerDot = styled('span')({
  width: '8px',
  height: '8px',
  borderRadius: '99px',
  background: T.good,
  display: 'inline-block',
})

export const KickerBadge = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '10.5px',
  padding: '3px 9px',
  background: T.goodSoft,
  color: 'oklch(0.35 0.09 150)',
  borderRadius: '99px',
  textTransform: 'none',
  letterSpacing: 0,
  marginLeft: '6px',
})
