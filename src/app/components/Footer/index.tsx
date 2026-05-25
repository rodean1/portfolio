'use client'

import Box from '@mui/material/Box'
import { RfMark } from '@/components/primitives'
import { T } from '@/lib/theme'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: `1px solid ${T.line}`, padding: '28px 0 36px' }}
    >
      <Box sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `0 ${T.containerPad}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: T.ink3 }}>
          <RfMark size="sm" />
          <span>© 2026 Rodean Fraser</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: T.ink3 }}>
          <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '11.5px' }}>Built with Next.js · MUI · oklch</Box>
          <Box
            component="a"
            href="#top"
            sx={{ textDecoration: 'none', color: T.ink2, fontWeight: 500, padding: '6px 10px', borderRadius: '99px', '&:hover': { color: T.ink, background: T.bg } }}
          >
            Back to top ↑
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
