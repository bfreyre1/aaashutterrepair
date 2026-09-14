const DEFAULT_CHIPS = [
  "On-site ~90% of shutter jobs",
  "Repair before replace",
  "We text back to schedule",
] as const;

type TrustChipsProps = {
  className?: string;
  items?: readonly string[];
};

export function TrustChips({
  className,
  items = DEFAULT_CHIPS,
}: TrustChipsProps) {
  return (
    <ul
      className={`trust-chips${className ? ` ${className}` : ""}`}
      aria-label="Why people call or text"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
