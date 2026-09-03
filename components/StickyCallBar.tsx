import { PhoneLink } from "@/components/PhoneLink";
import { PHONE_DISPLAY } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="sticky-call" role="region" aria-label="Call AAA Shutter Repair">
      <PhoneLink placement="sticky-mobile-bar" className="sticky-call__btn">
        Call {PHONE_DISPLAY}
      </PhoneLink>
    </div>
  );
}
