'use client'

import Box from '@mui/material/Box'
import { T } from '@/lib/theme'

const items = [
  'React', 'TypeScript', 'Next.js', 'Django REST Framework', 'GraphQL',
  'PostgreSQL', 'Stripe', 'Auth0', 'Cypress', 'CI / CD', 'Lean Six Sigma',
]

const track = [...items, ...items]

export default function Marquee() {
  return (
    <Box
      component="section"
      sx={{
        borderTop: `1px solid ${T.line2}`,
        borderBottom: `1px solid ${T.line2}`,
        background: 'oklch(0.94 0.012 75 / 0.4)',
        overflow: 'hidden',
        padding: '18px 0',
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '22px',
          whiteSpace: 'nowrap',
          animation: 'm-scroll 40s linear infinite',
          fontFamily: T.fontMono,
          fontSize: '13px',
          letterSpacing: '0.01em',
          color: T.ink2,
        }}
      >
        {track.map((item, i) => (
          <Box key={i} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: '22px' }}>
            <Box component="span">{item}</Box>
            <Box component="span" sx={{ color: T.ink4 }}>·</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
