'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const FooterRoot = styled('footer')({
  borderTop: `1px solid ${T.line}`,
  padding: '28px 0 36px',
})

export const FooterInner = styled('div')({
  maxWidth: T.maxw,
  margin: '0 auto',
  padding: `0 ${T.containerPad}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '14px',
  flexWrap: 'wrap',
})

export const FooterGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  fontSize: '13px',
  color: T.ink3,
})

export const FooterMeta = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '11.5px',
})

export const FooterLink = styled('a')({
  textDecoration: 'none',
  color: T.ink2,
  fontWeight: 500,
  padding: '6px 10px',
  borderRadius: '99px',
  '&:hover': {
    color: T.ink,
    background: T.bg,
  },
})
