import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path}>
                {last ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
