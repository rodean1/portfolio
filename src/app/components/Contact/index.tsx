'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const links = [
  { k: 'GitHub',   v: 'github.com/rf2tsl',      href: 'https://github.com/rf2tsl' },
  { k: 'LinkedIn', v: 'in/rodean-fraser',         href: 'https://www.linkedin.com/in/rodean-fraser' },
  { k: 'Email',    v: 'rodeanfraser@gmail.com',   href: 'mailto:rodeanfraser@gmail.com' },
  { k: 'Phone',    v: '561 · 713 · 0664',         href: 'tel:+15617130664' },
]

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        background: T.paper2,
        borderRadius: '32px',
        margin: { xs: '0 20px 60px', md: `0 ${T.containerPad} 60px` },
        maxWidth: T.maxw,
        padding: { xs: '50px 28px', md: 'clamp(50px, 8vw, 96px) clamp(28px, 5vw, 64px)' },
        marginLeft: 'auto',
        marginRight: 'auto',
        width: { md: `calc(100% - clamp(20px, 5vw, 64px) * 2)` },
      }}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 'clamp(28px, 5vw, 64px)', alignItems: 'center' }}>
        <Box>
          <Eyebrow>Get in touch · 05</Eyebrow>
          <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
            Let&apos;s build something<br />worth keeping.
          </Box>
          <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
            I&apos;m open to senior full‑stack roles — ideally remote, ideally somewhere that ships and measures. Happy to chat about contract or full‑time. Reply within 24 hours.
          </Box>
          <Box sx={{ marginTop: '28px' }}>
            <Box
              component="a"
              href="mailto:rodeanfraser@gmail.com"
              sx={{
                height: '56px', padding: '0 26px', borderRadius: '14px',
                fontFamily: T.fontSans, fontSize: '16.5px', fontWeight: 600,
                border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                letterSpacing: '-0.01em', textDecoration: 'none',
                background: T.accent, color: '#fff',
                boxShadow: '0 1px 2px rgba(160,60,30,0.18), inset 0 1px 0 rgba(255,255,255,0.22)',
                transition: 'transform .15s ease, background .15s',
                '&:hover': { background: T.accentDeep, transform: 'translateY(-1px)' },
              }}
            >
              rodeanfraser@gmail.com <span aria-hidden="true">→</span>
            </Box>
          </Box>
        </Box>

        <Box
          component="ul"
          sx={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', flexDirection: 'column',
            background: '#fff', borderRadius: '18px',
            boxShadow: `0 0 0 1px ${T.line}`, overflow: 'hidden',
          }}
        >
          {links.map((l, i) => (
            <Box
              key={l.k}
              component="li"
              sx={{ borderBottom: i < links.length - 1 ? `1px solid ${T.line}` : 'none' }}
            >
              <Box
                component="a"
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener' : undefined}
                sx={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  gap: '18px', padding: '22px 26px',
                  textDecoration: 'none', color: T.ink,
                  transition: 'background .12s',
                  '&:hover': {
                    background: 'oklch(0.97 0.012 75)',
                    '& .cl-arrow': { color: T.accent, transform: 'translate(2px, -2px)' },
                  },
                }}
              >
                <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: T.ink3 }}>{l.k}</Box>
                <Box component="span" sx={{ fontSize: '16px', color: T.ink, letterSpacing: '-0.01em', fontWeight: 500 }}>
                  {l.v}{' '}
                  <Box component="span" className="cl-arrow" sx={{ color: T.ink3, marginLeft: '6px', transition: 'transform .15s, color .15s', display: 'inline-block' }}>↗</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
