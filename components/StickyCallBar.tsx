import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_DISPLAY } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div
      className="sticky-call"
      role="region"
      aria-label="Call or text AAA Shutter Repair"
    >
      <PhoneLink
        placement="sticky-mobile-bar"
        className="sticky-call__btn"
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        Call now
      </PhoneLink>
      <TextLink
        placement="sticky-mobile-bar"
        className="sticky-call__btn sticky-call__btn--text"
        aria-label={`Text ${PHONE_DISPLAY}`}
      >
        Text us
      </TextLink>
    </div>
  );
}
