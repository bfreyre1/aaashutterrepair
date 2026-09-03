import { PhoneLink } from "@/components/PhoneLink";

type CtaButtonsProps = {
  placement: string;
  align?: "start" | "center";
};

export function CtaButtons({ placement, align = "start" }: CtaButtonsProps) {
  return (
    <div
      className={`cta-row ${align === "center" ? "cta-row--center" : ""}`}
    >
      <PhoneLink placement={`${placement}-call`} className="btn btn-primary">
        Call now
      </PhoneLink>
      <a href="/get-a-quote" className="btn btn-secondary">
        Get a free estimate
      </a>
    </div>
  );
}
