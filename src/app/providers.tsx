'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import theme from '@/lib/theme'

const keyframes = `
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 4px oklch(0.94 0.05 150 / 0.6); }
    50%       { box-shadow: 0 0 0 7px oklch(0.94 0.05 150 / 0); }
  }
  @keyframes live {
    0%   { box-shadow: 0 0 0 0 oklch(0.72 0.14 45 / 0.55); }
    100% { box-shadow: 0 0 0 8px oklch(0.72 0.14 45 / 0); }
  }
  @keyframes live-teal {
    0%   { box-shadow: 0 0 0 0 oklch(0.7 0.14 175 / 0.55); }
    100% { box-shadow: 0 0 0 8px oklch(0.7 0.14 175 / 0); }
  }
  @keyframes typing {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
    40%           { opacity: 1;   transform: scale(1); }
  }
  @keyframes m-scroll {
    to { transform: translateX(-50%); }
  }
`

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={keyframes} />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
