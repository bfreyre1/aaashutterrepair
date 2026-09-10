"use client";

import { trackTextClick } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_SMS } from "@/lib/site";

type TextLinkProps = {
  placement: string;
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
};

export function TextLink({
  placement,
  className,
  children,
  "aria-label": ariaLabel,
}: TextLinkProps) {
  return (
    <a
      href={PHONE_SMS}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackTextClick(placement)}
    >
      {children ?? `Text ${PHONE_DISPLAY}`}
    </a>
  );
}
