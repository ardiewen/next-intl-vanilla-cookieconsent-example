import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // "/": "/",
    // "/work": {
    //   en: "/work",
    //   fr: "/realisations",
    // },
    "/work/[slug]": {
      en: "/work/[slug]",
      fr: "/realisations/[slug]",
    },
    // "/careers": { en: "/careers", fr: "/carrieres" },
    // "/about-us": { en: "/about-us", fr: "/a-propos" },
  },
  // https://next-intl-docs.vercel.app/docs/routing#alternate-links
  alternateLinks: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
