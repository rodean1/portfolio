'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

const shouldForwardFontSize = (prop: PropertyKey) => prop !== 'markFontSize'

export const MarkRoot = styled('span')({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: '3px',
  lineHeight: 0.85,
  whiteSpace: 'nowrap',
  userSelect: 'none',
})

export const MarkBracket = styled('span', {
  shouldForwardProp: shouldForwardFontSize,
})<{ markFontSize: string }>(({ markFontSize }) => ({
  fontFamily: T.fontMono,
  fontWeight: 300,
  fontSize: markFontSize,
  color: T.ink,
  letterSpacing: '-0.04em',
  transform: 'translateY(-1px)',
}))

export const Monogram = styled('span', {
  shouldForwardProp: shouldForwardFontSize,
})<{ markFontSize: string }>(({ markFontSize }) => ({
  fontFamily: T.fontSerif,
  fontWeight: 400,
  fontSize: markFontSize,
  color: T.accent,
  letterSpacing: '0.02em',
  lineHeight: 1,
  fontStyle: 'normal',
}))

export const MonogramTrailingLetter = styled('span')({
  marginLeft: '0.02em',
})
