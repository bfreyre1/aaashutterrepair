import Link from "next/link";
import { CtaButtons } from "@/components/CtaButtons";

export default function NotFound() {
  return (
    <div className="page not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not on this site</h1>
      <p className="lede">
        The URL may be a leftover from the old site, or it may have been typed
        with a hash. Every service and city page here is a real path — no
        hash landers.
      </p>
      <CtaButtons placement="404" align="center" />
      <p>
        <Link href="/">Plantation shutter repair in Los Angeles</Link>
        {" · "}
        <Link href="/plantation-shutter-repair">Shutter repair</Link>
        {" · "}
        <Link href="/get-a-quote">Get a free estimate</Link>
      </p>
    </div>
  );
}
