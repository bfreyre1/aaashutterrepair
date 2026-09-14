import { HOURS_HERO } from "@/lib/site";

type HoursLineProps = {
  className?: string;
};

export function HoursLine({ className }: HoursLineProps) {
  return (
    <p className={`hours-line${className ? ` ${className}` : ""}`}>
      {HOURS_HERO}
    </p>
  );
}
