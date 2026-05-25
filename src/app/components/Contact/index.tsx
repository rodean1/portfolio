"use client";

import { Eyebrow } from "@/components/primitives";
import { LargePrimaryActionLink } from "../styled";
import {
  ContactAction,
  ContactArrow,
  ContactDescription,
  ContactGrid,
  ContactLink,
  ContactLinkLabel,
  ContactLinkValue,
  ContactLinks,
  ContactListItem,
  ContactSection,
  ContactTitle,
} from "./styled";

const links = [
  { label: "GitHub", displayText: "github.com/rodean1", href: "https://github.com/rodean1" },
  {
    label: "LinkedIn",
    displayText: "in/rodean-fraser",
    href: "https://www.linkedin.com/in/rodean-fraser",
  },
];

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactGrid>
        <div>
          <Eyebrow>Get in touch · 05</Eyebrow>
          <ContactTitle>
            Let&apos;s build something
            <br />
            worth keeping.
          </ContactTitle>
          <ContactDescription>
            I&apos;m open to senior full‑stack roles — ideally remote, ideally
            somewhere that ships and measures. Happy to chat about contract or
            full‑time. Reply within 24 hours.
          </ContactDescription>
          <ContactAction>
            <LargePrimaryActionLink
              href="mailto:rodeanfraser@gmail.com"
            >
              rodeanfraser@gmail.com <span aria-hidden="true">→</span>
            </LargePrimaryActionLink>
          </ContactAction>
        </div>

        <ContactLinks>
          {links.map((link) => (
            <ContactListItem
              key={link.label}
            >
              <ContactLink
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <ContactLinkLabel>
                  {link.label}
                </ContactLinkLabel>
                <ContactLinkValue>
                  {link.displayText}{" "}
                  <ContactArrow
                    className="cl-arrow"
                  >
                    ↗
                  </ContactArrow>
                </ContactLinkValue>
              </ContactLink>
            </ContactListItem>
          ))}
        </ContactLinks>
      </ContactGrid>
    </ContactSection>
  );
}
