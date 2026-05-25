'use client'

import { MarkBracket, MarkRoot, Monogram, MonogramTrailingLetter } from './styled'

type Size = 'sm' | 'md' | 'lg'

const sizes: Record<Size, { bracket: string; monogram: string }> = {
  sm: { bracket: '13px', monogram: '20px' },
  md: { bracket: '17px', monogram: '27px' },
  lg: { bracket: '22px', monogram: '36px' },
}

export default function RfMark({ size = 'md' }: { size?: Size }) {
  const sizeConfig = sizes[size]
  return (
    <MarkRoot aria-label="RF">
      <MarkBracket markFontSize={sizeConfig.bracket}>
        {'<'}
      </MarkBracket>
      <Monogram markFontSize={sizeConfig.monogram}>
        R
        <MonogramTrailingLetter>F</MonogramTrailingLetter>
      </Monogram>
      <MarkBracket markFontSize={sizeConfig.bracket}>
        {'/>'}
      </MarkBracket>
    </MarkRoot>
  )
}
