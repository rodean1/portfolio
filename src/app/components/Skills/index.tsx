'use client'

import { Eyebrow } from '@/components/primitives'
import { PageSection, SectionDescription, SectionIntro, SectionTitle } from '../styled'
import {
  SkillColumn,
  SkillColumnNumber,
  SkillColumnTitle,
  SkillList,
  SkillListItem,
  SkillsGrid,
} from './styled'

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
    <PageSection id="skills">
      <SectionIntro>
        <Eyebrow>Stack · 04</Eyebrow>
        <SectionTitle>
          What I reach for.
        </SectionTitle>
        <SectionDescription>
          Comfortable across the stack — but particularly happy in the seam where API design meets frontend delivery.
        </SectionDescription>
      </SectionIntro>

      <SkillsGrid>
        {cols.map(col => (
          <SkillColumn key={col.num}>
            <SkillColumnTitle>
              <SkillColumnNumber>{col.num}</SkillColumnNumber>
              {col.title}
            </SkillColumnTitle>
            <SkillList>
              {col.items.map(item => (
                <SkillListItem key={item}>{item}</SkillListItem>
              ))}
            </SkillList>
          </SkillColumn>
        ))}
      </SkillsGrid>
    </PageSection>
  )
}
