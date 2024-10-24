import { getTranslations } from "next-intl/server";
import { PAGES } from "@/data/pages";

interface PageProps {
  params: {
    locale: string;
    slug: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const t = await getTranslations();
  return (
    <div>
      <h1>{t("Page.title")}</h1>
    </div>
  );
}

export async function generateStaticParams({
  params,
}: {
  params: { locale: "en" | "fr" };
}) {
  return PAGES.map((page) => ({
    slug: [page.slug[params.locale]],
  }));
}
