'use client'

import { styled } from '@mui/material/styles'
import { T } from '@/lib/theme'

const shouldForwardPhoneProp = (prop: PropertyKey) =>
  prop !== 'delay' && prop !== 'accent' && prop !== 'muted' && prop !== 'primary' && prop !== 'swatchColor'

export const LiveDot = styled('span')({
  width: '7px',
  height: '7px',
  background: T.accent,
  borderRadius: '99px',
  display: 'inline-block',
  animation: 'live 1.6s ease-out infinite',
})

export const TypingDotRow = styled('span')({
  display: 'inline-flex',
  gap: '3px',
  marginTop: '4px',
})

export const TypingDot = styled('span', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ delay: number }>(({ delay }) => ({
  width: '5px',
  height: '5px',
  background: T.accent,
  borderRadius: '99px',
  display: 'inline-block',
  animation: `typing 1.4s ease-in-out ${delay}s infinite`,
}))

export const PhoneShell = styled('div')({
  position: 'relative',
  width: '100%',
  maxWidth: '360px',
  aspectRatio: '360 / 740',
  background: T.night,
  borderRadius: '44px',
  padding: '12px',
  margin: '0 auto',
  boxShadow: `0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px oklch(0.3 0.05 50 / 0.4), 0 0 0 1.5px ${T.night3}`,
})

export const PhoneNotch = styled('div')({
  position: 'absolute',
  top: '18px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90px',
  height: '26px',
  background: T.night,
  borderRadius: '99px',
  zIndex: 2,
})

export const PhoneScreen = styled('div')({
  width: '100%',
  height: '100%',
  background: T.paper,
  borderRadius: '32px',
  padding: '26px 22px 22px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
})

export const PhoneStatusBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: T.fontMono,
  fontSize: '11px',
  color: T.ink2,
  marginBottom: '18px',
  padding: '0 6px',
  letterSpacing: '0.02em',
})

export const PhoneSignalGroup = styled('div')({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
})

export const PhoneSignalDot = styled('span')({
  width: '5px',
  height: '5px',
  borderRadius: '99px',
  background: T.ink2,
})

export const PhoneBattery = styled('span')({
  width: '14px',
  height: '8px',
  background: T.ink2,
  borderRadius: '2px',
  marginLeft: '2px',
})

export const PhoneContent = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const PhoneOverline = styled('div')({
  fontFamily: T.fontMono,
  fontSize: '10.5px',
  color: T.accentInk,
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  marginBottom: '6px',
})

export const PhoneTitle = styled('div')({
  fontSize: '23px',
  fontWeight: 700,
  letterSpacing: '-0.025em',
  lineHeight: 1.1,
  marginBottom: '14px',
})

export const StatusPill = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  fontFamily: T.fontMono,
  fontSize: '11px',
  color: T.accentInk,
  background: T.accentSoft,
  padding: '6px 11px',
  borderRadius: '99px',
  alignSelf: 'flex-start',
  marginBottom: '22px',
})

export const Transcript = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '4px 0',
  overflow: 'hidden',
})

export const TranscriptBubble = styled('div', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ accent?: boolean; primary?: boolean }>(({ accent, primary }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  padding: '9px 11px',
  borderRadius: '12px',
  background: accent ? T.accentSoft : '#fff',
  boxShadow: primary ? `0 0 0 1.5px ${T.accent}` : accent ? undefined : `0 0 0 1px ${T.line}`,
  position: primary ? 'relative' : undefined,
}))

export const TranscriptSpeaker = styled('div', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ accent?: boolean }>(({ accent }) => ({
  fontFamily: T.fontMono,
  fontSize: '9.5px',
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: accent ? T.accentInk : T.ink3,
}))

export const TranscriptText = styled('div', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ muted?: boolean }>(({ muted }) => ({
  fontSize: '13.5px',
  color: muted ? T.ink3 : T.ink,
  fontStyle: muted ? 'italic' : undefined,
  letterSpacing: '-0.005em',
  lineHeight: 1.35,
}))

export const PhoneActions = styled('div')({
  display: 'flex',
  gap: '8px',
  paddingTop: '14px',
  borderTop: `1px solid ${T.line}`,
  marginTop: '14px',
})

export const PhoneButton = styled('button', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ primary?: boolean }>(({ primary }) => ({
  flex: 1,
  height: '44px',
  borderRadius: '14px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: T.fontSans,
  fontSize: '13.5px',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  background: primary ? T.ink : 'transparent',
  color: primary ? '#fff' : T.ink2,
  boxShadow: primary ? undefined : `inset 0 0 0 1px ${T.line2}`,
}))

export const SwatchRow = styled('div')({
  display: 'flex',
  gap: '8px',
  marginBottom: '14px',
})

export const ColorSwatchTile = styled('span', {
  shouldForwardProp: shouldForwardPhoneProp,
})<{ swatchColor: string }>(({ swatchColor }) => ({
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  background: swatchColor,
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
}))
