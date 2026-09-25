import { PhoneLink } from "@/components/PhoneLink";
import { TextLink } from "@/components/TextLink";
import { PHONE_DISPLAY } from "@/lib/site";

type CtaButtonsProps = {
  placement: string;
  align?: "start" | "center";
  /** Hide the estimate link when the visitor is already on the quote page. */
  showQuote?: boolean;
  quoteHref?: string;
};

export function CtaButtons({
  placement,
  align = "start",
  showQuote = true,
  quoteHref = "/get-a-quote",
}: CtaButtonsProps) {
  return (
    <div
      className={`cta-row ${align === "center" ? "cta-row--center" : ""}`}
    >
      <PhoneLink
        placement={`${placement}-call`}
        className="btn btn-primary"
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        Call now
      </PhoneLink>
      <TextLink
        placement={`${placement}-text`}
        className="btn btn-text"
        aria-label={`Text ${PHONE_DISPLAY}`}
      >
        Text us
      </TextLink>
      {showQuote ? (
        <a href={quoteHref} className="btn btn-secondary">
          Get a free estimate
        </a>
      ) : null}
    </div>
  );
}
