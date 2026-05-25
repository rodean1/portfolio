'use client'

import Box from '@mui/material/Box'
import { RfMark } from '@/components/primitives'
import { T } from '@/lib/theme'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#now', label: 'Now' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'oklch(0.94 0.012 75 / 0.78)',
        backdropFilter: 'saturate(120%) blur(14px)',
        WebkitBackdropFilter: 'saturate(120%) blur(14px)',
        borderBottom: `1px solid oklch(0.88 0.01 60 / 0.5)`,
      }}
    >
      <Box
        sx={{
          maxWidth: T.maxw,
          margin: '0 auto',
          padding: `14px ${T.containerPad}`,
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        {/* Brand */}
        <Box
          component="a"
          href="#top"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: T.ink,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            fontSize: '15px',
            whiteSpace: 'nowrap',
          }}
        >
          <RfMark size="md" />
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Rodean&nbsp;Fraser
          </Box>
        </Box>

        {/* Nav links */}
        <Box
          component="nav"
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '4px',
            marginLeft: 'auto',
            alignItems: 'center',
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                textDecoration: 'none',
                color: T.ink2,
                fontSize: '13.5px',
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: '99px',
                letterSpacing: '-0.01em',
                transition: 'color .12s, background .12s',
                '&:hover': {
                  color: T.ink,
                  background: 'oklch(0.92 0.012 70 / 0.6)',
                },
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box
          component="a"
          href="mailto:rodeanfraser@gmail.com"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            background: T.ink,
            color: '#fff',
            fontSize: '13px',
            fontWeight: 500,
            padding: '9px 14px',
            borderRadius: '99px',
            letterSpacing: '-0.005em',
            transition: 'transform .15s, background .15s',
            '&:hover': { background: T.accent, transform: 'translateY(-1px)' },
          }}
        >
          Get in touch <span aria-hidden="true">→</span>
        </Box>
      </Box>
    </Box>
  )
}
