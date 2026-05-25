'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: T.fontMono,
        fontSize: '11.5px',
        padding: '6px 12px',
        background: '#fff',
        borderRadius: '99px',
        color: T.ink2,
        boxShadow: `0 0 0 1px ${T.line}`,
        letterSpacing: '0.01em',
        display: 'inline-block',
      }}
    >
      {children}
    </Box>
  )
}
