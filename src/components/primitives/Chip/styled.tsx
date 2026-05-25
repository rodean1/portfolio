'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const ChipRoot = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '11.5px',
  padding: '6px 12px',
  background: '#fff',
  borderRadius: '99px',
  color: T.ink2,
  boxShadow: `0 0 0 1px ${T.line}`,
  letterSpacing: '0.01em',
  display: 'inline-block',
})
