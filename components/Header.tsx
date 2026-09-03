"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { CITY_LINKS, PHONE_DISPLAY, SERVICE_LINKS } from "@/lib/site";

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
            <ul className="nav-flyout__menu">
              {CITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/about">About</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-a-quote" className="nav-desktop__quote">
            Get a quote
          </Link>
        </nav>

        <PhoneLink placement="header-desktop" className="header-phone">
          {PHONE_DISPLAY}
        </PhoneLink>

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
        <p className="nav-mobile__label">Services</p>
        {SERVICE_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
        <p className="nav-mobile__label">Service areas</p>
        {CITY_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
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
        <Link href="/get-a-quote" onClick={close}>
          Get a free estimate
        </Link>
        <PhoneLink placement="header-mobile" className="btn btn-primary">
          Call {PHONE_DISPLAY}
        </PhoneLink>
      </nav>
    </header>
  );
}
