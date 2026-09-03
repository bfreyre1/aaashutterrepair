export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect x="2" y="3" width="28" height="26" rx="2" fill="currentColor" />
          <rect x="6" y="7" width="8" height="2.2" fill="#f4efe6" />
          <rect x="6" y="11.2" width="8" height="2.2" fill="#f4efe6" />
          <rect x="6" y="15.4" width="8" height="2.2" fill="#f4efe6" />
          <rect x="6" y="19.6" width="8" height="2.2" fill="#f4efe6" />
          <rect x="18" y="7" width="8" height="2.2" fill="#f4efe6" />
          <rect x="18" y="11.2" width="8" height="2.2" fill="#f4efe6" />
          <rect x="18" y="15.4" width="8" height="2.2" fill="#f4efe6" />
          <rect x="18" y="19.6" width="8" height="2.2" fill="#f4efe6" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__name">AAA Shutter Repair</span>
        <span className="logo__tag">On-site · Los Angeles</span>
      </span>
    </span>
  );
}
