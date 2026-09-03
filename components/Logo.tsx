export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <img
        className="logo__mark"
        src="/brand/aaa-logo.svg"
        alt="AAA Shutter Repair"
        width={180}
        height={108}
      />
    </span>
  );
}
