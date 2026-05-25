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
  SideCards,
} from "../styled";
import {
  AiBadge,
  BrandTitleRow,
  BrowserBar,
  BrowserBody,
  BrowserMockup,
  BrowserTitle,
  LiveDotTeal,
  MatchBody,
  MatchCard,
  MatchCompany,
  MatchExplain,
  MatchList,
  MatchRank,
  MatchScore,
  MatchTitle,
  MobileCarouselDot,
  MobileCarouselDots,
  MobileExplainCard,
  MobileMatchCard,
  MobileMatchStack,
  MobileNavPill,
  MobileNavPills,
  MobilePanel,
  MobilePanelCount,
  MobilePanelHeader,
  MobilePanelLabel,
  MobilePanelTitle,
  MobileShowcase,
  MobileStatusCard,
  MobileStatusGrid,
  MobileStatusLabel,
  MobileStatusValue,
  MobileWorkspaceCard,
  ScoutIcon,
  ScoutRole,
  ScoutSidebar,
  ScoutSymbol,
  SidebarBrand,
  SidebarFooter,
  SidebarNav,
  SidebarNavLink,
  SidebarStatNumber,
  SidebarStats,
  SidebarStatus,
  SmallAiBadge,
  TargetCard,
  TargetLabel,
  TargetText,
  WindowDot,
} from "./styled";

const matches = [
  {
    rank: "#1",
    title: "Senior Product Manager",
    company: "Linear",
    score: "98%",
    color: "oklch(0.7 0.14 175)",
  },
  {
    rank: "#2",
    title: "Product Manager, Growth",
    company: "Loom",
    score: "96%",
    color: "oklch(0.7 0.14 175)",
  },
  {
    rank: "#3",
    title: "Senior Software Engineer",
    company: "Retool",
    score: "88%",
    color: "oklch(0.78 0.14 75)",
  },
  {
    rank: "#4",
    title: "Product Manager",
    company: "Webflow",
    score: "85%",
    color: "oklch(0.78 0.14 75)",
    explain:
      "✦ Strong alignment on remote, SaaS, and company size. Webflow's mid‑sized product org maps cleanly to your target — your platform experience would translate directly.",
  },
];

const scoutNavItems = [
  "⊹ Discover",
  "◎ Match Score",
  "✦ Resume AI",
  "◈ Tracker",
  "◆ Company Intel",
];

export default function ScoutCase() {
  return (
    <CaseArticle id="scout" tone="dark">
      {/* Header */}
      <CaseHeader>
        <CaseIndex tone="dark">02</CaseIndex>
        <div>
          <CaseKicker tone="dark">
            <ScoutSymbol>◎</ScoutSymbol> Scout
            <AiBadge>AI</AiBadge>
          </CaseKicker>
          <CaseTitle tone="dark">
            An AI recruiter that ranks the long list.
          </CaseTitle>
          <CaseDescription tone="dark">
            A job‑search workspace built around a transparent, tunable match
            algorithm. You weight your criteria, Scout re‑ranks 800+ listings in
            real time and explains the top picks in plain English.
          </CaseDescription>
        </div>
        <CaseTags>
          {["Web app · 2026", "AI · Anthropic"].map((tag) => (
            <CaseTag key={tag} tone="dark">
              {tag}
            </CaseTag>
          ))}
        </CaseTags>
      </CaseHeader>

      {/* Canvas */}
      <CaseCanvas>
        {/* Browser mockup */}
        <BrowserMockup>
          {/* Browser bar */}
          <BrowserBar>
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <WindowDot key={color} dotColor={color} />
            ))}
            <BrowserTitle>scout.app / match score</BrowserTitle>
          </BrowserBar>
          <MobileShowcase aria-label="Scout mobile product highlights">
            <MobilePanel>
              <MobilePanelHeader>
                <div>
                  <MobilePanelLabel>Workspace</MobilePanelLabel>
                  <MobilePanelTitle>Target, criteria, and live context.</MobilePanelTitle>
                </div>
                <MobilePanelCount>01</MobilePanelCount>
              </MobilePanelHeader>
              <MobileWorkspaceCard>
                <SidebarBrand>
                  <ScoutIcon>◎</ScoutIcon>
                  <div>
                    <BrandTitleRow>
                      Scout
                      <SmallAiBadge>AI</SmallAiBadge>
                    </BrandTitleRow>
                    <ScoutRole>RECRUITER</ScoutRole>
                  </div>
                </SidebarBrand>
                <TargetCard>
                  <TargetLabel>Target</TargetLabel>
                  <TargetText>Senior Product Manager · SaaS · Remote</TargetText>
                </TargetCard>
                <MobileNavPills>
                  {scoutNavItems.slice(0, 4).map((item, itemIndex) => (
                    <MobileNavPill key={item} active={itemIndex === 1}>
                      {item.replace(/^[^\w]+ /, "")}
                    </MobileNavPill>
                  ))}
                </MobileNavPills>
              </MobileWorkspaceCard>
              <SidebarStatus>
                <LiveDotTeal /> Live · indexing
              </SidebarStatus>
            </MobilePanel>

            <MobilePanel>
              <MobilePanelHeader>
                <div>
                  <MobilePanelLabel>Ranked matches</MobilePanelLabel>
                  <MobilePanelTitle>Best-fit roles float to the top.</MobilePanelTitle>
                </div>
                <MobilePanelCount>02</MobilePanelCount>
              </MobilePanelHeader>
              <MobileMatchStack>
                {matches.slice(0, 3).map((match) => (
                  <MobileMatchCard key={match.rank}>
                    <MatchRank>{match.rank}</MatchRank>
                    <MatchBody>
                      <MatchTitle>{match.title}</MatchTitle>
                      <MatchCompany>{match.company}</MatchCompany>
                    </MatchBody>
                    <MatchScore scoreColor={match.color}>{match.score}</MatchScore>
                  </MobileMatchCard>
                ))}
              </MobileMatchStack>
            </MobilePanel>

            <MobilePanel>
              <MobilePanelHeader>
                <div>
                  <MobilePanelLabel>Explanation layer</MobilePanelLabel>
                  <MobilePanelTitle>Readable reasons, not black-box scores.</MobilePanelTitle>
                </div>
                <MobilePanelCount>03</MobilePanelCount>
              </MobilePanelHeader>
              <MobileExplainCard>{matches[3].explain}</MobileExplainCard>
              <MobileStatusGrid>
                <MobileStatusCard>
                  <MobileStatusValue>847</MobileStatusValue>
                  <MobileStatusLabel>Listings</MobileStatusLabel>
                </MobileStatusCard>
                <MobileStatusCard>
                  <MobileStatusValue>312</MobileStatusValue>
                  <MobileStatusLabel>Companies</MobileStatusLabel>
                </MobileStatusCard>
              </MobileStatusGrid>
            </MobilePanel>
          </MobileShowcase>
          <MobileCarouselDots aria-hidden="true">
            <MobileCarouselDot active />
            <MobileCarouselDot />
            <MobileCarouselDot />
          </MobileCarouselDots>
          {/* Browser body */}
          <BrowserBody>
            {/* Sidebar */}
            <ScoutSidebar>
              {/* Logo */}
              <SidebarBrand>
                <ScoutIcon>◎</ScoutIcon>
                <div>
                  <BrandTitleRow>
                    Scout
                    <SmallAiBadge>AI</SmallAiBadge>
                  </BrandTitleRow>
                  <ScoutRole>RECRUITER</ScoutRole>
                </div>
              </SidebarBrand>
              {/* Target */}
              <TargetCard>
                <TargetLabel>Target</TargetLabel>
                <TargetText>Senior Product Manager · SaaS · Remote</TargetText>
              </TargetCard>
              {/* Nav */}
              <SidebarNav>
                {scoutNavItems.map((item, itemIndex) => (
                  <SidebarNavLink key={item} active={itemIndex === 1}>
                    {item}
                  </SidebarNavLink>
                ))}
              </SidebarNav>
              {/* Footer */}
              <SidebarFooter>
                <SidebarStatus>
                  <LiveDotTeal /> Live · indexing
                </SidebarStatus>
                <SidebarStats>
                  <span>
                    <SidebarStatNumber>847</SidebarStatNumber> listings
                  </span>
                  <span>
                    <SidebarStatNumber>312</SidebarStatNumber> companies
                  </span>
                </SidebarStats>
              </SidebarFooter>
            </ScoutSidebar>

            {/* Match list */}
            <MatchList>
              {matches.map((match) => (
                <MatchCard key={match.rank}>
                  <MatchRank>{match.rank}</MatchRank>
                  <MatchBody>
                    <MatchTitle>{match.title}</MatchTitle>
                    <MatchCompany>{match.company}</MatchCompany>
                    {match.explain && (
                      <MatchExplain>{match.explain}</MatchExplain>
                    )}
                  </MatchBody>
                  <MatchScore scoreColor={match.color}>
                    {match.score}
                  </MatchScore>
                </MatchCard>
              ))}
            </MatchList>
          </BrowserBody>
        </BrowserMockup>

        {/* Side cards */}
        <SideCards>
          <InfoCard tone="darkPanel">
            <InfoCardLabel tone="darkPanel">What I built</InfoCardLabel>
            <CaseList tone="darkPanel">
              {[
                "Weighted scoring engine with live re‑rank",
                "Resume optimizer (LLM‑powered)",
                "Application tracker w/ pipeline states",
                "Company intel scraping & summarization",
              ].map((item) => (
                <CaseListItem key={item} tone="darkPanel">
                  {item}
                </CaseListItem>
              ))}
            </CaseList>
          </InfoCard>
          <InfoCard tone="darkPanel">
            <InfoCardLabel tone="darkPanel">Stack</InfoCardLabel>
            <CardParagraph tone="darkPanel">
              React 18 · Space Grotesk · Anthropic Claude · client‑side weight
              tuning, sliders sum to 100. Five tabs, one workspace.
            </CardParagraph>
          </InfoCard>
          <InfoCard tone="darkPanel">
            <InfoCardLabel tone="darkPanel">Outcome</InfoCardLabel>
            <CardParagraph tone="darkPanel">
              A search surface that shows its math. The explanation card under
              each match converts a ranked list into something you can argue
              with and tune.
            </CardParagraph>
          </InfoCard>
        </SideCards>
      </CaseCanvas>
    </CaseArticle>
  );
}
