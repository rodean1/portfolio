'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

export const SkillsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1px',
  background: T.line,
  borderRadius: '22px',
  overflow: 'hidden',
  boxShadow: `0 0 0 1px ${T.line}`,
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

export const SkillColumn = styled('section')({
  background: T.paper,
  padding: '28px 26px',
})

export const SkillColumnTitle = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  gap: '10px',
  fontSize: '17px',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  marginBottom: '16px',
  paddingBottom: '14px',
  borderBottom: `1px dashed ${T.line2}`,
})

export const SkillColumnNumber = styled('span')({
  fontFamily: T.fontMono,
  fontSize: '12px',
  color: T.ink3,
  fontWeight: 500,
})

export const SkillList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const SkillListItem = styled('li')({
  fontSize: '14px',
  color: T.ink2,
  letterSpacing: '-0.005em',
  lineHeight: 1.45,
})
