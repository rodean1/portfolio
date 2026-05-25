'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { Eyebrow, Chip } from '@/components/primitives'
import { T } from '@/lib/theme'

const chips = ['React / Next.js', 'TypeScript', 'Django · DRF · GraphQL', 'PostgreSQL', 'CI/CD']

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: T.maxw,
        margin: '0 auto',
        padding: {
          xs: '40px 20px 60px',
          md: `clamp(40px, 8vw, 96px) ${T.containerPad} clamp(60px, 9vw, 120px)`,
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.4fr) minmax(0, 1fr)' },
          gap: 'clamp(28px, 5vw, 72px)',
          alignItems: 'center',
        }}
      >
        {/* Left: text */}
        <Box>
          <Eyebrow dot>Available · open to senior full‑stack roles</Eyebrow>

          <Box
            component="h1"
            sx={{
              fontSize: 'clamp(44px, 6.4vw, 92px)',
              lineHeight: 0.97,
              letterSpacing: '-0.045em',
              fontWeight: 700,
              margin: '16px 0 24px',
              fontFamily: T.fontSans,
            }}
          >
            Full stack engineer
            <br />
            who ships{' '}
            <Box
              component="em"
              sx={{
                fontFamily: T.fontSerif,
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: T.accentDeep,
              }}
            >
              end&#8209;to&#8209;end
            </Box>
            .
          </Box>

          <Box
            component="p"
            sx={{
              fontSize: 'clamp(17px, 1.6vw, 20px)',
              color: T.ink2,
              lineHeight: 1.55,
              letterSpacing: '-0.012em',
              maxWidth: '56ch',
            }}
          >
            I&apos;m{' '}
            <Box component="strong" sx={{ color: T.ink, fontWeight: 600 }}>
              Rodean Fraser
            </Box>{' '}
            — five years building production SaaS, client portals, and internal dashboards with
            React, TypeScript, Django REST and GraphQL. I scope features, design the API, ship the
            UI, and instrument the thing in production. Lean Six Sigma Green Belt; data‑driven about
            reliability.
          </Box>

          {/* Chip row */}
          <Box sx={{ display: 'flex', gap: '8px', marginTop: '30px', flexWrap: 'wrap' }}>
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Box
              component="a"
              href="#work"
              sx={{
                height: '46px',
                padding: '0 20px',
                borderRadius: '12px',
                fontFamily: T.fontSans,
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                background: T.accent,
                color: '#fff',
                boxShadow: '0 1px 2px rgba(160,60,30,0.18), inset 0 1px 0 rgba(255,255,255,0.22)',
                transition: 'transform .15s ease, background .15s',
                '&:hover': { background: T.accentDeep, transform: 'translateY(-1px)' },
              }}
            >
              See selected work <span aria-hidden="true">↓</span>
            </Box>
            <Box
              component="a"
              href="https://github.com/rf2tsl"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                height: '46px',
                padding: '0 20px',
                borderRadius: '12px',
                fontFamily: T.fontSans,
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                background: '#fff',
                color: T.ink,
                boxShadow: `inset 0 0 0 1px ${T.line2}`,
                transition: 'transform .15s ease, box-shadow .15s',
                '&:hover': {
                  boxShadow: `inset 0 0 0 1px ${T.ink3}`,
                  transform: 'translateY(-1px)',
                },
              }}
            >
              GitHub <span aria-hidden="true">↗</span>
            </Box>
          </Box>
        </Box>

        {/* Right: portrait */}
        <Box
          component="aside"
          sx={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'stretch' }}
        >
          {/* Portrait frame with tape pseudo */}
          <Box
            component="figure"
            sx={{
              position: 'relative',
              background: '#fff',
              borderRadius: '24px',
              padding: '22px 22px 14px',
              boxShadow: `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}, 0 30px 60px -30px oklch(0.4 0.05 50 / 0.18)`,
              margin: 0,
              transform: 'rotate(-1.4deg)',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '50%',
                width: '80px',
                height: '22px',
                background: 'oklch(0.95 0.05 50 / 0.85)',
                transform: 'translateX(-50%) rotate(-2deg)',
                borderRadius: '2px',
                boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
              },
            }}
          >
            <Image
              src="/portrait.png"
              alt="Sketched portrait of Rodean Fraser"
              width={430}
              height={520}
              priority
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '430 / 520',
                objectFit: 'cover',
                objectPosition: 'center 18%',
                borderRadius: '14px',
              }}
            />
            <Box
              component="figcaption"
              sx={{
                marginTop: '14px',
                fontFamily: T.fontSerif,
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: 1.2,
                color: T.ink2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Calm mind.</span>
              <span>Big plans.</span>
              <Box component="span" sx={{ color: T.accentDeep, fontWeight: 500 }}>
                Bigger impact.
              </Box>
            </Box>
          </Box>

          {/* Stamp row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '4px 14px',
              padding: '14px 18px',
              background: 'oklch(0.94 0.012 75 / 0.6)',
              borderRadius: '14px',
              boxShadow: `inset 0 0 0 1px ${T.line}`,
              alignItems: 'baseline',
            }}
          >
            {[
              { k: 'Based in', v: 'Florida · Remote' },
              { k: 'Years shipping', v: '5+' },
            ].map(({ k, v }) => (
              <React.Fragment key={k}>
                <Box
                  component="span"
                  sx={{
                    fontFamily: T.fontMono,
                    fontSize: '10.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: T.ink3,
                  }}
                >
                  {k}
                </Box>
                <Box
                  component="span"
                  sx={{ fontSize: '14px', color: T.ink, fontWeight: 500, letterSpacing: '-0.01em' }}
                >
                  {v}
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
