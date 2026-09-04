import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import {
  CITY_LINKS,
  EMAIL,
  PHONE_DISPLAY,
  SERVICE_LINKS,
  SITE_NAME,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__name">{SITE_NAME}</p>
          <p>
            On-site plantation wood shutter repair across the San Fernando
            Valley and greater Los Angeles. Blinds, shades, and Somfy /
            motorized shade repair too.
          </p>
          <p>
            <PhoneLink placement="footer-phone">{PHONE_DISPLAY}</PhoneLink>
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p className="site-footer__nap">
            Phone and email only. We do not publish a street address here —
            public listings disagree, and this site will not invent one.
          </p>
        </div>
        <div>
          <p className="site-footer__heading">Services</p>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/get-a-quote">Get a free estimate</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Service areas</p>
          <ul>
            {CITY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Company</p>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="site-footer__legal">
        © {new Date().getFullYear()} {SITE_NAME}. Sample marketing site — not
        yet pointed at the live domain.
      </p>
    </footer>
  );
}
