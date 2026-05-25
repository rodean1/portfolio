"use client";

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
  InlineStrong,
  KickerBadge,
  KickerDot,
  SideCards,
} from "../styled";
import {
  ChartCard,
  ChartLegend,
  ChartLegendItem,
  ChartSvg,
  ChartSwatch,
  DashboardBadge,
  DashboardBadges,
  DashboardHead,
  DashboardOverline,
  DashboardShell,
  DashboardTitle,
  StatCard,
  StatDelta,
  StatLabel,
  StatsGrid,
  StatUnit,
  StatValue,
} from "./styled";

function Dashboard() {
  return (
    <DashboardShell>
      {/* Head */}
      <DashboardHead>
        <div>
          <DashboardOverline>Scheduling reliability · live</DashboardOverline>
          <DashboardTitle>Event triggers · last 30 days</DashboardTitle>
        </div>
        <DashboardBadges>
          <DashboardBadge variant="success">3σ → 5σ</DashboardBadge>
          <DashboardBadge variant="neutral">
            last refresh 12s ago
          </DashboardBadge>
        </DashboardBadges>
      </DashboardHead>

      {/* Stats */}
      <StatsGrid>
        {[
          {
            label: "Failure rate",
            value: "0.4",
            unit: "%",
            delta: "↓ from 7.0%",
            good: true,
          },
          {
            label: "DPMO",
            value: "4,012",
            unit: "",
            delta: "↓ from 70,000",
            good: true,
          },
          {
            label: "Mean time to detect",
            value: "38",
            unit: "s",
            delta: "was: hours",
            good: true,
          },
          {
            label: "Coverage",
            value: "94",
            unit: "%",
            delta: "unit + E2E",
            good: false,
          },
        ].map((stat) => (
          <StatCard key={stat.label}>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>
              {stat.value}
              <StatUnit>{stat.unit}</StatUnit>
            </StatValue>
            <StatDelta good={stat.good}>{stat.delta}</StatDelta>
          </StatCard>
        ))}
      </StatsGrid>

      {/* Chart */}
      <ChartCard>
        <ChartSvg
          viewBox="0 0 600 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="oklch(0.72 0.14 45)"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.72 0.14 45)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <g stroke="oklch(0.88 0.01 60)" strokeWidth="1">
            <line x1="0" y1="40" x2="600" y2="40" />
            <line x1="0" y1="80" x2="600" y2="80" />
            <line x1="0" y1="120" x2="600" y2="120" />
          </g>
          <path
            d="M0,30 L40,28 L80,40 L120,22 L160,35 L200,32 L240,90 L280,118 L320,128 L360,132 L400,135 L440,138 L480,140 L520,142 L560,143 L600,144"
            fill="none"
            stroke="oklch(0.55 0.22 25)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M0,150 L40,148 L80,145 L120,142 L160,140 L200,135 L240,95 L280,55 L320,42 L360,38 L400,34 L440,30 L480,28 L520,26 L560,25 L600,24"
            fill="none"
            stroke="oklch(0.72 0.14 45)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M0,150 L40,148 L80,145 L120,142 L160,140 L200,135 L240,95 L280,55 L320,42 L360,38 L400,34 L440,30 L480,28 L520,26 L560,25 L600,24 L600,160 L0,160 Z"
            fill="url(#dbGrad)"
          />
          <line
            x1="220"
            y1="10"
            x2="220"
            y2="160"
            stroke="oklch(0.22 0.012 60)"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        </ChartSvg>
        <ChartLegend>
          <ChartLegendItem>
            <ChartSwatch swatchColor="oklch(0.55 0.22 25)" />
            Failure rate
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartSwatch swatchColor="oklch(0.72 0.14 45)" />
            Detection coverage
          </ChartLegendItem>
          <ChartLegendItem accent>▲ Dashboard shipped</ChartLegendItem>
        </ChartLegend>
      </ChartCard>
    </DashboardShell>
  );
}

export default function SilverLogicCase() {
  return (
    <CaseArticle id="silverlogic" last>
      {/* Header */}
      <CaseHeader>
        <CaseIndex>03</CaseIndex>
        <div>
          <CaseKicker>
            <KickerDot />
            The Silver Logic
            <KickerBadge>Day job · 2023 — present</KickerBadge>
          </CaseKicker>
          <CaseTitle>SaaS, portals, and a reliability win.</CaseTitle>
          <CaseDescription>
            React/TypeScript frontends backed by Django DRF and GraphQL APIs.
            Specifics anonymized; details below.
          </CaseDescription>
        </div>
        <CaseTags>
          {["Production · 5+ clients", "Team of 5+ engineers"].map((tag) => (
            <CaseTag key={tag}>{tag}</CaseTag>
          ))}
        </CaseTags>
      </CaseHeader>

      {/* Canvas */}
      <CaseCanvas>
        <Dashboard />
        <SideCards>
          <InfoCard>
            <InfoCardLabel>The win</InfoCardLabel>
            <CardParagraph>
              Spotted a{" "}
              <InlineStrong>7% event‑trigger failure rate</InlineStrong> in a
              client scheduling system — 70,000 DPMO, 3σ territory. Designed a
              real‑time monitoring + anomaly detection dashboard that surfaced
              failures within seconds instead of hours, enabling proactive
              maintenance.
            </CardParagraph>
          </InfoCard>
          <InfoCard>
            <InfoCardLabel>Also shipped</InfoCardLabel>
            <CaseList>
              {[
                "REST + GraphQL APIs (DRF, graphene‑django)",
                "Stripe, Auth0, mapping/notification integrations across 5+ client builds",
                "Cypress E2E + component tests as CI/CD gate",
                "Unit/integration coverage from zero on a brownfield codebase",
              ].map((item) => (
                <CaseListItem key={item}>{item}</CaseListItem>
              ))}
            </CaseList>
          </InfoCard>
          <InfoCard>
            <InfoCardLabel>How I work</InfoCardLabel>
            <CardParagraph>
              Lean Six Sigma Green Belt, DMAIC mindset: when tackling a problem,
              I like to <InlineStrong>Define</InlineStrong> the metric,{" "}
              <InlineStrong>measure</InlineStrong> the baseline,{" "}
              <InlineStrong>analyze</InlineStrong> the root cause,{" "}
              <InlineStrong>improve</InlineStrong>, then{" "}
              <InlineStrong>control</InlineStrong> with monitoring.
            </CardParagraph>
          </InfoCard>
        </SideCards>
      </CaseCanvas>
    </CaseArticle>
  );
}
