'use client'

import React from 'react'
import { EyebrowDot, EyebrowRoot } from './styled'

export default function Eyebrow({
  children,
  dot,
}: {
  children: React.ReactNode
  dot?: boolean
}) {
  return (
    <EyebrowRoot>
      {dot && <EyebrowDot />}
      {children}
    </EyebrowRoot>
  )
}
