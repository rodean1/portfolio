"use client";

import { Eyebrow } from "@/components/primitives";
import {
  PageSection,
  SectionDescription,
  SectionTitle,
  WorkSectionIntro,
} from "../styled";
import TeloraCase from "./TeloraCase";
import ScoutCase from "./ScoutCase";
import SilverLogicCase from "./SilverLogicCase";

export default function Work() {
  return (
    <PageSection id="work">
      <WorkSectionIntro>
        <Eyebrow>Selected work · 2024 — 2026</Eyebrow>
        <SectionTitle>
          Recent projects, idea to implementation.
        </SectionTitle>
        <SectionDescription>
          A representative slice of the work — a product concept, an AI tool,
          and the day job. Each shows how I move from a fuzzy problem to a
          shipped, instrumented surface.
        </SectionDescription>
      </WorkSectionIntro>
      <TeloraCase />
      <ScoutCase />
      <SilverLogicCase />
    </PageSection>
  );
}
