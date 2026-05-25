'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

export default function Eyebrow({
  children,
  dot,
}: {
  children: React.ReactNode
  dot?: boolean
}) {
  return (
    <Box
      component="div"
      sx={{
        fontFamily: T.fontMono,
        fontSize: '12px',
        fontWeight: 500,
        color: T.accentInk,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
      }}
    >
      {dot && (
        <Box
          component="span"
          sx={{
            width: '7px',
            height: '7px',
            background: T.good,
            borderRadius: '99px',
            boxShadow: `0 0 0 4px oklch(0.94 0.05 150 / 0.6)`,
            animation: 'pulse 2.4s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </Box>
  )
}
