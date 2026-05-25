'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const PageSection = styled('section')({
  maxWidth: T.maxw,
  margin: '0 auto',
  padding: `${T.sectionPadY} ${T.containerPad}`,
})

export const SectionIntro = styled('div')({
  maxWidth: '720px',
  marginBottom: '56px',
})

export const WorkSectionIntro = styled(SectionIntro)({
  marginBottom: '80px',
})

export const SectionTitle = styled('h2')({
  fontSize: 'clamp(34px, 4.5vw, 54px)',
  fontWeight: 700,
  letterSpacing: '-0.035em',
  lineHeight: 1.05,
  margin: '14px 0 18px',
})

export const SectionDescription = styled('p')({
  fontSize: '18px',
  color: T.ink2,
  lineHeight: 1.55,
  maxWidth: '60ch',
  letterSpacing: '-0.01em',
})

export const InlineMono = styled('span')({
  fontFamily: T.fontMono,
})

const actionLinkBase = {
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: T.fontSans,
  fontWeight: 600,
  letterSpacing: '-0.01em',
  textDecoration: 'none',
  transition: 'transform .15s ease',
} as const

export const PrimaryActionLink = styled('a')({
  ...actionLinkBase,
  height: '46px',
  padding: '0 20px',
  fontSize: '15px',
  background: T.accent,
  color: '#fff',
  boxShadow: '0 1px 2px rgba(160,60,30,0.18), inset 0 1px 0 rgba(255,255,255,0.22)',
  transition: 'transform .15s ease, background .15s',
  '&:hover': {
    background: T.accentDeep,
    transform: 'translateY(-1px)',
  },
})

export const LargePrimaryActionLink = styled(PrimaryActionLink)({
  height: '56px',
  padding: '0 26px',
  borderRadius: '14px',
  fontSize: '16.5px',
})
