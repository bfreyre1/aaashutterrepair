import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <Image
        src="/aaa-shutter-repair-logo.svg"
        alt="AAA Shutter Repair"
        width={180}
        height={108}
        className="logo__img"
        unoptimized
        priority
      />
    </span>
  );
}
