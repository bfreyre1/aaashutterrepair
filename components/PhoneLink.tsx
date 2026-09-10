"use client";

import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type PhoneLinkProps = {
  placement: string;
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
};

export function PhoneLink({
  placement,
  className,
  children,
  "aria-label": ariaLabel,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackPhoneClick(placement)}
    >
      {children ?? `Call ${PHONE_DISPLAY}`}
    </a>
  );
}
