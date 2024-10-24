import { PAGES } from "@/data/pages";
import { Link } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
export default async function Navigation() {
  const locale = await getLocale();

  return (
    <nav>
      <ul className="flex list-none p-0">
        {PAGES.map((page) => (
          <li key={page.id} className="">
            <Link href={page.slug[locale as "en" | "fr"]}>
              <span>{page.title[locale as "en" | "fr"]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
