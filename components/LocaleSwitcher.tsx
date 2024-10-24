"use client";

import { usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (locale: "en" | "fr") =>
    router.replace(pathname, { locale });
  return (
    <div className="flex">
      <button type="button" className="" onClick={() => handleSwitch("en")}>
        EN
      </button>
      <button type="button" className="" onClick={() => handleSwitch("fr")}>
        FR
      </button>
    </div>
  );
}
