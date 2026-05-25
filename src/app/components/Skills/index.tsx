'use client'

import Box from '@mui/material/Box'
import { Eyebrow } from '@/components/primitives'
import { T } from '@/lib/theme'

const cols = [
  { num: '01', title: 'Frontend', items: ['React · Next.js · React Native', 'TypeScript · JavaScript (ES6+)', 'HTML5 · CSS3 · responsive design', 'Component architecture & design systems'] },
  { num: '02', title: 'Backend', items: ['Python · Django · Django REST Framework', 'GraphQL (graphene-django)', 'REST API design & versioning', 'Auth, sessions, multi‑tenant patterns'] },
  { num: '03', title: 'Data & infra', items: ['PostgreSQL & query optimization', 'CI/CD pipelines', 'Docker · containerized dev environments', 'Monitoring & anomaly detection'] },
  { num: '04', title: 'Quality', items: ['Cypress E2E & component tests', 'Unit + integration testing', 'API testing & code review', 'Lean Six Sigma Green Belt'] },
  { num: '05', title: 'Integrations', items: ['Stripe — payments & subscriptions', 'Auth0 — identity & SSO', 'Mapping & notification APIs', 'Third‑party API design & resilience'] },
  { num: '06', title: 'Working style', items: ['End‑to‑end ownership', 'Agile · cross‑functional teamwork', 'Data‑driven decisions, DMAIC mindset', 'Detail‑oriented, long‑term thinker'] },
]

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ maxWidth: T.maxw, margin: '0 auto', padding: `${T.sectionPadY} ${T.containerPad}` }}
    >
      <Box sx={{ maxWidth: '720px', marginBottom: '56px' }}>
        <Eyebrow>Stack · 04</Eyebrow>
        <Box component="h2" sx={{ fontSize: 'clamp(34px, 4.5vw, 54px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '14px 0 18px' }}>
          What I reach for.
        </Box>
        <Box component="p" sx={{ fontSize: '18px', color: T.ink2, lineHeight: 1.55, maxWidth: '60ch', letterSpacing: '-0.01em' }}>
          Comfortable across the stack — but particularly happy in the seam where API design meets frontend delivery.
        </Box>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: '1px',
        background: T.line,
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: `0 0 0 1px ${T.line}`,
      }}>
        {cols.map(col => (
          <Box key={col.num} sx={{ background: T.paper, padding: '28px 26px' }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '17px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '16px', paddingBottom: '14px', borderBottom: `1px dashed ${T.line2}` }}>
              <Box component="span" sx={{ fontFamily: T.fontMono, fontSize: '12px', color: T.ink3, fontWeight: 500 }}>{col.num}</Box>
              {col.title}
            </Box>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {col.items.map(item => (
                <Box key={item} component="li" sx={{ fontSize: '14px', color: T.ink2, letterSpacing: '-0.005em', lineHeight: 1.45 }}>{item}</Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
