type TrustChipsProps = {
  className?: string;
};

export function TrustChips({ className }: TrustChipsProps) {
  return (
    <ul
      className={`trust-chips${className ? ` ${className}` : ""}`}
      aria-label="Why people call or text"
    >
      <li>On-site ~90% of shutter jobs</li>
      <li>Repair before replace</li>
      <li>We text back to schedule</li>
    </ul>
  );
}
