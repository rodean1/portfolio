'use client'

import { MarqueeDot, MarqueeItem, MarqueeSection, MarqueeTrack } from './styled'

const items = [
  'React', 'TypeScript', 'Next.js', 'Django REST Framework', 'GraphQL',
  'PostgreSQL', 'Stripe', 'Auth0', 'Cypress', 'CI / CD', 'Lean Six Sigma',
]

const track = [...items, ...items]

export default function Marquee() {
  return (
    <MarqueeSection>
      <MarqueeTrack>
        {track.map((item, i) => (
          <MarqueeItem key={`${i}-${item}`}>
            <span>{item}</span>
            <MarqueeDot>·</MarqueeDot>
          </MarqueeItem>
        ))}
      </MarqueeTrack>
    </MarqueeSection>
  )
}
