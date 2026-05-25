'use client'

import { RfMark } from '@/components/primitives'
import { FooterGroup, FooterInner, FooterLink, FooterMeta, FooterRoot } from './styled'

export default function Footer() {
  return (
    <FooterRoot>
      <FooterInner>
        <FooterGroup>
          <RfMark size="sm" />
          <span>© 2026 Rodean Fraser</span>
        </FooterGroup>
        <FooterGroup>
          <FooterMeta>Built with Next.js · MUI · oklch</FooterMeta>
          <FooterLink href="#top">
            Back to top ↑
          </FooterLink>
        </FooterGroup>
      </FooterInner>
    </FooterRoot>
  )
}
