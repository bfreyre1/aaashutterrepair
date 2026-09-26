import Link from "next/link";
import { CITY_GROUPS, cityLinksInGroup } from "@/lib/site";

type CityAreaGroupsProps = {
  omitHref?: string;
  linkText?: (label: string) => string;
};

export function CityAreaGroups({
  omitHref,
  linkText = (label) => label,
}: CityAreaGroupsProps) {
  return (
    <div className="city-area-groups">
      {CITY_GROUPS.map((group) => {
        const links = cityLinksInGroup(group.id).filter(
          (city) => city.href !== omitHref,
        );
        if (links.length === 0) {
          return null;
        }
        return (
          <div key={group.id}>
            <h3>{group.label}</h3>
            <ul className="link-columns">
              {links.map((city) => (
                <li key={city.href}>
                  <Link href={city.href}>{linkText(city.label)}</Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
