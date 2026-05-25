'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const MarqueeSection = styled('section')({
  borderTop: `1px solid ${T.line2}`,
  borderBottom: `1px solid ${T.line2}`,
  background: 'oklch(0.94 0.012 75 / 0.4)',
  overflow: 'hidden',
  padding: '18px 0',
  maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
  WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
})

export const MarqueeTrack = styled('div')({
  display: 'flex',
  gap: '22px',
  whiteSpace: 'nowrap',
  animation: 'm-scroll 40s linear infinite',
  fontFamily: T.fontMono,
  fontSize: '13px',
  letterSpacing: '0.01em',
  color: T.ink2,
})

export const MarqueeItem = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '22px',
})

export const MarqueeDot = styled('span')({
  color: T.ink4,
})
