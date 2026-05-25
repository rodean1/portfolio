'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

const shouldForwardNowProp = (prop: PropertyKey) => prop !== 'primary'

export const NowGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '14px',
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

export const NowCard = styled('section', {
  shouldForwardProp: shouldForwardNowProp,
})<{ primary?: boolean }>(({ primary }) => ({
  background: primary ? T.accentSoft : '#fff',
  borderRadius: '18px',
  padding: '22px 24px',
  boxShadow: primary ? '0 0 0 1px oklch(0.85 0.06 50)' : `0 0 0 1px ${T.line}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}))

export const NowCardLabel = styled('div', {
  shouldForwardProp: shouldForwardNowProp,
})<{ primary?: boolean }>(({ primary }) => ({
  fontFamily: T.fontMono,
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: primary ? T.accentDeep : T.ink3,
}))

export const NowCardText = styled('div')({
  fontSize: '15.5px',
  color: T.ink,
  letterSpacing: '-0.01em',
  lineHeight: 1.5,
})

export const MantraCard = styled('section')({
  background: T.ink,
  borderRadius: '18px',
  padding: '22px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
})

export const MantraText = styled('div')({
  fontFamily: T.fontSerif,
  fontSize: '24px',
  letterSpacing: '-0.015em',
  lineHeight: 1.2,
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  fontStyle: 'italic',
})

export const MantraAccent = styled('span')({
  color: 'oklch(0.85 0.1 45)',
})
