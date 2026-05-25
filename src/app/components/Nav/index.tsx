"use client";

import { RfMark } from "@/components/primitives";
import {
  BrandLink,
  BrandName,
  NavCta,
  NavInner,
  NavLink,
  NavLinkList,
  NavRoot,
} from "./styled";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <NavRoot>
      <NavInner>
        {/* Brand */}
        <BrandLink href="#top">
          <RfMark size="md" />
          <BrandName>Rodean&nbsp;Fraser</BrandName>
        </BrandLink>

        {/* Nav links */}
        <NavLinkList>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavLinkList>

        {/* CTA */}
        <NavCta href="mailto:rodeanfraser@gmail.com">
          Get in touch <span aria-hidden="true">→</span>
        </NavCta>
      </NavInner>
    </NavRoot>
  );
}
