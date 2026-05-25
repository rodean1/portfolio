'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const NavRoot = styled('header')({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  background: 'oklch(0.94 0.012 75 / 0.78)',
  backdropFilter: 'saturate(120%) blur(14px)',
  WebkitBackdropFilter: 'saturate(120%) blur(14px)',
  borderBottom: '1px solid oklch(0.88 0.01 60 / 0.5)',
})

export const NavInner = styled('div')({
  maxWidth: T.maxw,
  margin: '0 auto',
  padding: `14px ${T.containerPad}`,
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
})

export const BrandLink = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  textDecoration: 'none',
  color: T.ink,
  fontWeight: 600,
  letterSpacing: '-0.01em',
  fontSize: '15px',
  whiteSpace: 'nowrap',
})

export const BrandName = styled('span')({
  whiteSpace: 'nowrap',
})

export const NavLinkList = styled('nav')({
  display: 'none',
  gap: '4px',
  marginLeft: 'auto',
  alignItems: 'center',
  '@media (min-width: 900px)': {
    display: 'flex',
  },
})

export const NavLink = styled('a')({
  textDecoration: 'none',
  color: T.ink2,
  fontSize: '13.5px',
  fontWeight: 500,
  padding: '8px 12px',
  borderRadius: '99px',
  letterSpacing: '-0.01em',
  transition: 'color .12s, background .12s',
  '&:hover': {
    color: T.ink,
    background: 'oklch(0.92 0.012 70 / 0.6)',
  },
})

export const NavCta = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  textDecoration: 'none',
  background: T.ink,
  color: '#fff',
  fontSize: '13px',
  fontWeight: 500,
  padding: '9px 14px',
  borderRadius: '99px',
  letterSpacing: '-0.005em',
  transition: 'transform .15s, background .15s',
  '&:hover': {
    background: T.accent,
    transform: 'translateY(-1px)',
  },
})
