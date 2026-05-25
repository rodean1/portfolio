"use client";

import React from "react";
import { Eyebrow, Chip } from "@/components/primitives";
import { PrimaryActionLink } from "../styled";
import {
  ActionRow,
  ChipRow,
  HeroAside,
  HeroBody,
  HeroGrid,
  HeroIntro,
  HeroLead,
  HeroSection,
  HeroStrong,
  HeroTitle,
  PortraitFigure,
  PortraitImage,
  SecondaryActionLink,
  StampGrid,
  StampLabel,
  StampValue,
} from "./styled";

const chips = [
  "React / Next.js",
  "TypeScript",
  "Django · DRF · GraphQL",
  "PostgreSQL",
  "CI/CD",
];

export default function Hero() {
  return (
    <HeroSection>
      <HeroGrid>
        <HeroIntro>
          <Eyebrow dot>Available · open to senior full‑stack roles</Eyebrow>

          <HeroTitle>Full stack engineer.</HeroTitle>
        </HeroIntro>

        {/* Right: portrait */}
        <HeroAside>
          {/* Portrait frame with tape pseudo */}
          <PortraitFigure>
            <PortraitImage
              src="/portrait.png"
              alt="Sketched portrait of Rodean Fraser"
              width={430}
              height={520}
              priority
            />
          </PortraitFigure>

          {/* Stamp row */}
          <StampGrid>
            {[
              { label: "Based in", value: "Florida · Remote" },
              { label: "Years shipping", value: "5+" },
            ].map(({ label, value }) => (
              <React.Fragment key={label}>
                <StampLabel>{label}</StampLabel>
                <StampValue>{value}</StampValue>
              </React.Fragment>
            ))}
          </StampGrid>
        </HeroAside>

        <HeroBody>
          <HeroLead>
            I&apos;m <HeroStrong>Rodean Fraser</HeroStrong> and for the last
            five years I have been building SaaS products, integrating AI into
            production, and developing client portals and internal dashboards
            with React, TypeScript, Django REST and GraphQL. I scope features,
            design the API, ship the UI, and instrument the thing in production.
            Lean Six Sigma Green Belt; data‑driven about reliability.
          </HeroLead>

          {/* Chip row */}
          <ChipRow>
            {chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </ChipRow>

          {/* Action buttons */}
          <ActionRow>
            <PrimaryActionLink href="#work">
              See selected work <span aria-hidden="true">↓</span>
            </PrimaryActionLink>
            <SecondaryActionLink
              href="https://github.com/rf2tsl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </SecondaryActionLink>
          </ActionRow>
        </HeroBody>
      </HeroGrid>
    </HeroSection>
  );
}
