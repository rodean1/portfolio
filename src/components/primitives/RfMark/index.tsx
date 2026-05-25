'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, { bracket: string; monogram: string }> = {
  sm: { bracket: '13px', monogram: '20px' },
  md: { bracket: '17px', monogram: '27px' },
  lg: { bracket: '22px', monogram: '36px' },
}

export default function RfMark({ size = 'md' }: { size?: Size }) {
  const s = sizes[size]
  return (
    <Box
      component="span"
      aria-label="RF"
      sx={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '3px',
        lineHeight: 0.85,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: T.fontMono,
          fontWeight: 300,
          fontSize: s.bracket,
          color: T.ink,
          letterSpacing: '-0.04em',
          transform: 'translateY(-1px)',
        }}
      >
        {'<'}
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: T.fontSerif,
          fontWeight: 400,
          fontSize: s.monogram,
          color: T.accent,
          letterSpacing: '0.02em',
          lineHeight: 1,
          fontStyle: 'normal',
        }}
      >
        R
        <Box component="span" sx={{ marginLeft: '0.02em' }}>
          F
        </Box>
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: T.fontMono,
          fontWeight: 300,
          fontSize: s.bracket,
          color: T.ink,
          letterSpacing: '-0.04em',
          transform: 'translateY(-1px)',
        }}
      >
        {'/>'}
      </Box>
    </Box>
  )
}
