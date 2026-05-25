'use client'

import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const HeroSection = styled('section')({
  maxWidth: T.maxw,
  margin: '0 auto',
  padding: '40px 20px 60px',
  '@media (min-width: 900px)': {
    padding: `clamp(40px, 8vw, 96px) ${T.containerPad} clamp(60px, 9vw, 120px)`,
  },
})

export const HeroGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 'clamp(28px, 5vw, 72px)',
  alignItems: 'center',
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
  },
})

export const HeroTitle = styled('h1')({
  fontSize: 'clamp(44px, 6.4vw, 92px)',
  lineHeight: 0.97,
  letterSpacing: '-0.045em',
  fontWeight: 700,
  margin: '16px 0 24px',
  fontFamily: T.fontSans,
})

export const HeroTitleEmphasis = styled('em')({
  fontFamily: T.fontSerif,
  fontStyle: 'italic',
  fontWeight: 400,
  letterSpacing: '-0.02em',
  color: T.accentDeep,
})

export const HeroLead = styled('p')({
  fontSize: 'clamp(17px, 1.6vw, 20px)',
  color: T.ink2,
  lineHeight: 1.55,
  letterSpacing: '-0.012em',
  maxWidth: '56ch',
})

export const HeroStrong = styled('strong')({
  color: T.ink,
  fontWeight: 600,
})

export const ChipRow = styled('div')({
  display: 'flex',
  gap: '8px',
  marginTop: '30px',
  flexWrap: 'wrap',
})

export const ActionRow = styled('div')({
  display: 'flex',
  gap: '10px',
  marginTop: '32px',
  flexWrap: 'wrap',
})

export const SecondaryActionLink = styled('a')({
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
})

export const HeroAside = styled('aside')({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  alignItems: 'stretch',
})

export const PortraitFigure = styled('figure')({
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
})

export const PortraitImage = styled(Image)({
  width: '100%',
  height: 'auto',
  aspectRatio: '430 / 520',
  objectFit: 'cover',
  objectPosition: 'center 18%',
  borderRadius: '14px',
})

export const PortraitCaption = styled('figcaption')({
  marginTop: '14px',
  fontFamily: T.fontSerif,
  fontStyle: 'italic',
  fontSize: '18px',
  lineHeight: 1.2,
  color: T.ink2,
  display: 'flex',
  flexDirection: 'column',
})

export const PortraitCaptionAccent = styled('span')({
  color: T.accentDeep,
  fontWeight: 500,
})

export const StampGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '4px 14px',
  padding: '14px 18px',
  background: 'oklch(0.94 0.012 75 / 0.6)',
  borderRadius: '14px',
  boxShadow: `inset 0 0 0 1px ${T.line}`,
  alignItems: 'baseline',
})

export const StampLabel = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '10.5px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: T.ink3,
})

export const StampValue = styled('span')({
  fontSize: '14px',
  color: T.ink,
  fontWeight: 500,
  letterSpacing: '-0.01em',
})
