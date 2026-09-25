import { CityPage, cityMetadata } from "@/components/CityPage";
import { getCity } from "@/lib/cities";

const city = getCity("encino");

export const metadata = cityMetadata(city);

export default function Page() {
  return <CityPage city={city} />;
}
