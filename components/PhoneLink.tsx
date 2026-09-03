"use client";

import { trackPhoneClick } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type PhoneLinkProps = {
  placement: string;
  className?: string;
  children?: React.ReactNode;
};

export function PhoneLink({ placement, className, children }: PhoneLinkProps) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={className}
      onClick={() => trackPhoneClick(placement)}
    >
      {children ?? `Call ${PHONE_DISPLAY}`}
    </a>
  );
}
