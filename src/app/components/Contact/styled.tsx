'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const ContactSection = styled('section')({
  background: T.paper2,
  borderRadius: '32px',
  margin: '0 20px 60px',
  maxWidth: T.maxw,
  padding: '50px 28px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 900px)': {
    margin: `0 ${T.containerPad} 60px`,
    padding: 'clamp(50px, 8vw, 96px) clamp(28px, 5vw, 64px)',
    width: 'calc(100% - clamp(20px, 5vw, 64px) * 2)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export const ContactGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 'clamp(28px, 5vw, 64px)',
  alignItems: 'center',
  '@media (min-width: 900px)': {
    gridTemplateColumns: '1.2fr 1fr',
  },
})

export const ContactTitle = styled('h2')({
  fontSize: 'clamp(34px, 4.5vw, 54px)',
  fontWeight: 700,
  letterSpacing: '-0.035em',
  lineHeight: 1.05,
  margin: '14px 0 18px',
})

export const ContactDescription = styled('p')({
  fontSize: '18px',
  color: T.ink2,
  lineHeight: 1.55,
  maxWidth: '60ch',
  letterSpacing: '-0.01em',
})

export const ContactAction = styled('div')({
  marginTop: '28px',
})

export const ContactLinks = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  borderRadius: '18px',
  boxShadow: `0 0 0 1px ${T.line}`,
  overflow: 'hidden',
})

export const ContactListItem = styled('li')({
  '&:not(:last-child)': {
    borderBottom: `1px solid ${T.line}`,
  },
})

export const ContactLink = styled('a')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '18px',
  padding: '22px 26px',
  textDecoration: 'none',
  color: T.ink,
  transition: 'background .12s',
  '&:hover': {
    background: 'oklch(0.97 0.012 75)',
    '& .cl-arrow': {
      color: T.accent,
      transform: 'translate(2px, -2px)',
    },
  },
})

export const ContactLinkLabel = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: T.ink3,
})

export const ContactLinkValue = styled('span')({
  fontSize: '16px',
  color: T.ink,
  letterSpacing: '-0.01em',
  fontWeight: 500,
})

export const ContactArrow = styled('span')({
  color: T.ink3,
  marginLeft: '6px',
  transition: 'transform .15s, color .15s',
  display: 'inline-block',
})
