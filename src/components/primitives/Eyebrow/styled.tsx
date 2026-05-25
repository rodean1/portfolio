'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const EyebrowRoot = styled('div')({
  fontFamily: T.fontMono,
  fontSize: '12px',
  fontWeight: 500,
  color: T.accentInk,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '9px',
})

export const EyebrowDot = styled('span')({
  width: '7px',
  height: '7px',
  background: T.good,
  borderRadius: '99px',
  boxShadow: '0 0 0 4px oklch(0.94 0.05 150 / 0.6)',
  animation: 'pulse 2.4s ease-in-out infinite',
})
