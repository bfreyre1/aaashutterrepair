"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import {
  CITY_GROUPS,
  cityLinksInGroup,
  PHONE_DISPLAY,
  SERVICE_LINKS,
} from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" onClick={close}>
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <div className="nav-flyout">
            <button type="button" className="nav-flyout__btn">
              Services
            </button>
            <ul className="nav-flyout__menu">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-flyout">
            <button type="button" className="nav-flyout__btn">
              Service areas
            </button>
            <div className="nav-flyout__menu nav-flyout__menu--areas">
              {CITY_GROUPS.map((group) => (
                <div key={group.id} className="nav-flyout__group">
                  <p className="nav-flyout__label">{group.label}</p>
                  <ul>
                    {cityLinksInGroup(group.id).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <div className="header-actions">
          <PhoneLink placement="header-desktop" className="header-phone">
            {PHONE_DISPLAY}
          </PhoneLink>
          <TextLink
            placement="header-desktop"
            className="header-text"
            aria-label={`Text ${PHONE_DISPLAY}`}
          >
            Text us
          </TextLink>
          <Link href="/get-a-quote" className="btn btn-primary header-quote">
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile ${open ? "is-open" : ""}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <div className="nav-mobile__cta">
          <PhoneLink
            placement="header-mobile"
            className="btn btn-primary"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            Call {PHONE_DISPLAY}
          </PhoneLink>
          <TextLink
            placement="header-mobile"
            className="btn btn-text"
            aria-label={`Text ${PHONE_DISPLAY}`}
          >
            Text us
          </TextLink>
        </div>
        <p className="nav-mobile__label">Services</p>
        {SERVICE_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
        <p className="nav-mobile__label">Service areas</p>
        {CITY_GROUPS.map((group) => (
          <div key={group.id} className="nav-mobile__group">
            <p className="nav-mobile__sublabel">{group.label}</p>
            {cityLinksInGroup(group.id).map((link) => (
              <Link key={link.href} href={link.href} onClick={close}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <Link href="/about" onClick={close}>
          About
        </Link>
        <Link href="/reviews" onClick={close}>
          Reviews
        </Link>
        <Link href="/gallery" onClick={close}>
          Gallery
        </Link>
        <Link href="/faq" onClick={close}>
          FAQ
        </Link>
        <Link href="/get-a-quote" className="btn btn-secondary" onClick={close}>
          Get a quote
        </Link>
      </nav>
    </header>
  );
}
