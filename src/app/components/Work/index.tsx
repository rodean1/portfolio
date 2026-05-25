"use client";

import { Eyebrow } from "@/components/primitives";
import {
  PageSection,
  SectionDescription,
  SectionTitle,
  WorkSectionIntro,
} from "../styled";
import TeliraCase from "./TeliraCase";
import ScoutCase from "./ScoutCase";
import SilverLogicCase from "./SilverLogicCase";

export default function Work() {
  return (
    <PageSection id="work">
      <WorkSectionIntro>
        <Eyebrow>Selected work · 2024 — 2026</Eyebrow>
        <SectionTitle>Recent projects, idea to implementation.</SectionTitle>
        <SectionDescription>
          Take a look at some of my most recent work, from AI tools that make
          life easier, to client portals that monitor real-time data. Each shows
          how I move from a fuzzy problem to a shipped, instrumented surface.
        </SectionDescription>
      </WorkSectionIntro>
      <TeliraCase />
      <ScoutCase />
      <SilverLogicCase />
    </PageSection>
  );
}
