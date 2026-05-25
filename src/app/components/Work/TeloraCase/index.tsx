'use client'

import {
  CardParagraph,
  CaseArticle,
  CaseCanvas,
  CaseDescription,
  CaseHeader,
  CaseIndex,
  CaseKicker,
  CaseList,
  CaseListItem,
  CaseTag,
  CaseTags,
  CaseTitle,
  InfoCard,
  InfoCardLabel,
  InlineEmphasis,
  SideCards,
} from '../styled'
import {
  ColorSwatchTile,
  LiveDot,
  PhoneActions,
  PhoneBattery,
  PhoneButton,
  PhoneContent,
  PhoneNotch,
  PhoneOverline,
  PhoneScreen,
  PhoneShell,
  PhoneSignalDot,
  PhoneSignalGroup,
  PhoneStatusBar,
  PhoneTitle,
  StatusPill,
  SwatchRow,
  Transcript,
  TranscriptBubble,
  TranscriptSpeaker,
  TranscriptText,
  TypingDot,
  TypingDotRow,
} from './styled'

function TypingDots() {
  return (
    <TypingDotRow>
      {[0, 0.18, 0.36].map((delay, dotIndex) => (
        <TypingDot
          key={dotIndex}
          delay={delay}
        />
      ))}
    </TypingDotRow>
  )
}

function PhoneMockup() {
  return (
    <PhoneShell>
      {/* Notch */}
      <PhoneNotch />

      {/* Screen */}
      <PhoneScreen>
        {/* Status bar */}
        <PhoneStatusBar>
          <span>9:41</span>
          <PhoneSignalGroup>
            {[0, 1, 2].map((signalDotIndex) => (
              <PhoneSignalDot key={signalDotIndex} />
            ))}
            <PhoneBattery />
          </PhoneSignalGroup>
        </PhoneStatusBar>

        {/* App content */}
        <PhoneContent>
          <PhoneOverline>
            In progress · 4m 12s
          </PhoneOverline>
          <PhoneTitle>
            Reaching Aetna<br />member services
          </PhoneTitle>
          {/* Status pill */}
          <StatusPill>
            <LiveDot />
            Telora is on the line
          </StatusPill>

          {/* Transcript */}
          <Transcript>
            {/* Bot line */}
            <TranscriptBubble accent>
              <TranscriptSpeaker accent>Telora</TranscriptSpeaker>
              <TranscriptText>&ldquo;Member services, please.&rdquo;</TranscriptText>
            </TranscriptBubble>
            {/* IVR line */}
            <TranscriptBubble>
              <TranscriptSpeaker>IVR</TranscriptSpeaker>
              <TranscriptText>&ldquo;Connecting you to an agent…&rdquo;</TranscriptText>
            </TranscriptBubble>
            {/* Hold music */}
            <TranscriptBubble>
              <TranscriptSpeaker>Hold music</TranscriptSpeaker>
              <TranscriptText muted>~ 6 minutes elapsed</TranscriptText>
            </TranscriptBubble>
            {/* Active bot line */}
            <TranscriptBubble accent primary>
              <TranscriptSpeaker accent>Telora</TranscriptSpeaker>
              <TranscriptText>Waiting patiently…</TranscriptText>
              <TypingDots />
            </TranscriptBubble>
          </Transcript>

          {/* CTA buttons */}
          <PhoneActions>
            <PhoneButton>
              Hang up
            </PhoneButton>
            <PhoneButton primary>
              Take call
            </PhoneButton>
          </PhoneActions>
        </PhoneContent>
      </PhoneScreen>
    </PhoneShell>
  )
}

function ColorSwatch({ bg }: { bg: string }) {
  return <ColorSwatchTile swatchColor={bg} />
}

export default function TeloraCase() {
  return (
    <CaseArticle id="telora">
      {/* Case header */}
      <CaseHeader>
        <CaseIndex>01</CaseIndex>
        <div>
          <CaseKicker>Telora</CaseKicker>
          <CaseTitle>
            A patient, human call concierge.
          </CaseTitle>
          <CaseDescription>
            An iOS app that makes phone calls on your behalf — sits through IVRs, waits on hold, rings you in when a real person picks up. Designed and prototyped end‑to‑end: brand, design system, in‑call surfaces, transcript timeline.
          </CaseDescription>
        </div>
        <CaseTags>
          {['Concept · iOS & Web', '2026'].map((tag) => (
            <CaseTag key={tag}>{tag}</CaseTag>
          ))}
        </CaseTags>
      </CaseHeader>

      {/* Canvas */}
      <CaseCanvas padded>
        <PhoneMockup />
        <SideCards>
          <InfoCard>
            <InfoCardLabel>Design system</InfoCardLabel>
            <SwatchRow>
              <ColorSwatch bg="#EFEBE3" />
              <ColorSwatch bg="oklch(0.72 0.14 45)" />
              <ColorSwatch bg="oklch(0.22 0.012 60)" />
              <ColorSwatch bg="oklch(0.68 0.12 150)" />
              <ColorSwatch bg="oklch(0.62 0.07 240)" />
            </SwatchRow>
            <CardParagraph>
              Warm paper base, one earned coral accent, status reserved for state. All neutrals carry a 60° hue so the UI never goes clinical. Type: Geist + Geist Mono.
            </CardParagraph>
          </InfoCard>
          <InfoCard>
            <InfoCardLabel>Hardest call</InfoCardLabel>
            <CardParagraph>
              The transcript needed to feel like{' '}
              <InlineEmphasis>listening</InlineEmphasis>
              , not reading a form. Bot lines lean coral and forward; counter‑party lines fade to ink‑3; hold time collapses into a single muted row instead of accumulating noise.
            </CardParagraph>
          </InfoCard>
          <InfoCard tone="dark">
            <InfoCardLabel tone="dark">Stack</InfoCardLabel>
            <CaseList tone="dark">
              {['React Native · iOS reference', 'Realtime transcript via WebSocket', 'Speech‑to‑text + IVR navigation', 'Geist · oklch tokens · radius 8/22/99'].map(item => (
                <CaseListItem key={item} tone="dark">
                  {item}
                </CaseListItem>
              ))}
            </CaseList>
          </InfoCard>
        </SideCards>
      </CaseCanvas>
    </CaseArticle>
  )
}
