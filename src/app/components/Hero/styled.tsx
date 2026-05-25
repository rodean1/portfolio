"use client";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import { T } from "@/lib/theme";

export const HeroSection = styled("section")({
  maxWidth: T.maxw,
  margin: "0 auto",
  padding: "40px 20px 60px",
  "@media (min-width: 720px)": {
    padding: `clamp(40px, 8vw, 96px) ${T.containerPad} clamp(60px, 9vw, 120px)`,
  },
});

export const HeroGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateAreas: `
    "intro"
    "portrait"
    "body"
  `,
  gap: "clamp(28px, 5vw, 72px)",
  alignItems: "center",
  "@media (min-width: 720px)": {
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
    gridTemplateAreas: `
      "intro portrait"
      "body portrait"
    `,
    },
});

export const HeroIntro = styled("div")({
  gridArea: "intro",
  "& > div": {
    whiteSpace: "nowrap",
    fontSize: "clamp(10px, 2.65vw, 11px)",
    letterSpacing: "0.035em",
    gap: "7px",
  },
  "@media (min-width: 720px)": {
    "& > div": {
      fontSize: "12px",
      letterSpacing: "0.06em",
      gap: "9px",
    },
  },
});

export const HeroBody = styled("div")({
  gridArea: "body",
});

export const HeroTitle = styled("h1")({
  fontSize: "clamp(30px, 8.7vw, 40px)",
  lineHeight: 0.97,
  letterSpacing: "-0.045em",
  fontWeight: 700,
  margin: "16px 0 24px",
  fontFamily: T.fontSans,
  whiteSpace: "nowrap",
  "@media (min-width: 720px)": {
    fontSize: "clamp(44px, 6.4vw, 92px)",
    whiteSpace: "normal",
  },
});

export const HeroLead = styled("p")({
  fontSize: "clamp(17px, 1.6vw, 20px)",
  color: T.ink2,
  lineHeight: 1.55,
  letterSpacing: "-0.012em",
  maxWidth: "56ch",
});

export const HeroStrong = styled("strong")({
  color: T.ink,
  fontWeight: 600,
});

export const ChipRow = styled("div")({
  display: "flex",
  gap: "8px",
  marginTop: "30px",
  flexWrap: "wrap",
});

export const ActionRow = styled("div")({
  display: "flex",
  gap: "10px",
  marginTop: "32px",
  flexWrap: "wrap",
});

export const SecondaryActionLink = styled("a")({
  height: "46px",
  padding: "0 20px",
  borderRadius: "12px",
  fontFamily: T.fontSans,
  fontSize: "15px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  letterSpacing: "-0.01em",
  textDecoration: "none",
  background: "#fff",
  color: T.ink,
  boxShadow: `inset 0 0 0 1px ${T.line2}`,
  transition: "transform .15s ease, box-shadow .15s",
  "&:hover": {
    boxShadow: `inset 0 0 0 1px ${T.ink3}`,
    transform: "translateY(-1px)",
  },
});

export const HeroAside = styled("aside")({
  gridArea: "portrait",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  justifySelf: "center",
  width: "78.125%",
  minWidth: "250px",
  maxWidth: "336px",
  "@media (min-width: 720px)": {
    gap: "18px",
    alignItems: "stretch",
    justifySelf: "stretch",
    width: "auto",
    minWidth: 0,
    maxWidth: "none",
  },
});

export const PortraitFigure = styled("figure")({
  position: "relative",
  background: "#fff",
  borderRadius: "24px",
  padding: "22px 22px 14px",
  boxShadow: `0 1px 0 rgba(20,15,10,0.04), 0 0 0 1px ${T.line}, 0 30px 60px -30px oklch(0.4 0.05 50 / 0.18)`,
  margin: 0,
  transform: "rotate(-1.4deg)",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-10px",
    left: "50%",
    width: "80px",
    height: "22px",
    background: "oklch(0.95 0.05 50 / 0.85)",
    transform: "translateX(-50%) rotate(-2deg)",
    borderRadius: "2px",
    boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
  },
});

export const PortraitImage = styled(Image)({
  width: "100%",
  height: "auto",
  aspectRatio: "430 / 520",
  objectFit: "cover",
  objectPosition: "center 18%",
  borderRadius: "14px",
});

export const StampGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "4px 14px",
  padding: "14px 18px",
  background: "oklch(0.94 0.012 75 / 0.6)",
  borderRadius: "14px",
  boxShadow: `inset 0 0 0 1px ${T.line}`,
  alignItems: "baseline",
});

export const StampLabel = styled("span")({
  fontFamily: T.fontMono,
  fontSize: "10.5px",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: T.ink3,
});

export const StampValue = styled("span")({
  fontSize: "14px",
  color: T.ink,
  fontWeight: 500,
  letterSpacing: "-0.01em",
});
