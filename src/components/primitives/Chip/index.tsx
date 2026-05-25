'use client'

import React from 'react'
import { ChipRoot } from './styled'

export default function Chip({ children }: { children: React.ReactNode }) {
  return <ChipRoot>{children}</ChipRoot>
}
