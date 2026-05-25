"use client";

import React from "react";
import { Eyebrow } from "@/components/primitives";
import {
  InlineMono,
  PageSection,
  SectionDescription,
  SectionIntro,
  SectionTitle,
} from "../styled";
import {
  MantraAccent,
  MantraCard,
  MantraText,
  NowCard,
  NowCardLabel,
  NowCardText,
  NowGrid,
} from "./styled";

const cards: { label: string; value: React.ReactNode; primary?: boolean }[] = [
  {
    label: "Shipping",
    value:
      "Multi‑client SaaS at The Silver Logic — feature work, anomaly dashboards, and bringing tests to brownfield code.",
    primary: true,
  },
  {
    label: "Side build",
    value: (
      <>
        <strong>Telira</strong> — pushing the call‑concierge concept past
        prototype into a real iOS surface.
      </>
    ),
  },
  {
    label: "Side build",
    value: (
      <>
        <strong>Scout</strong> — iterating on the match‑scoring algorithm;
        testing transparency vs. accuracy tradeoffs.
      </>
    ),
  },
  {
    label: "Learning",
    value:
      "Production GraphQL patterns — schema federation, persisted queries, N+1 hygiene at scale.",
  },
  {
    label: "Reading",
    value: "Deep Work · Atomic Habits · The One Thing — system over willpower.",
  },
];

export default function Now() {
  return (
    <PageSection id="now">
      <SectionIntro>
        <Eyebrow>
          Now · <InlineMono>May 2026</InlineMono>
        </Eyebrow>
        <SectionTitle>What I&apos;m building right now.</SectionTitle>
        <SectionDescription>
          An honest list, updated when it shifts. Borrowed from{" "}
          <a
            href="https://nownownow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            nownownow
          </a>
          .
        </SectionDescription>
      </SectionIntro>

      <NowGrid>
        {cards.map((card, cardIndex) => (
          <NowCard key={cardIndex} primary={card.primary}>
            <NowCardLabel primary={card.primary}>{card.label}</NowCardLabel>
            <NowCardText>{card.value}</NowCardText>
          </NowCard>
        ))}

        {/* Mantra card */}
        <MantraCard>
          <MantraText>
            <span>&quot;Build today. Solve tomorrow.</span>
            <MantraAccent>Impact forever.&quot;</MantraAccent>
          </MantraText>
        </MantraCard>
      </NowGrid>
    </PageSection>
  );
}
