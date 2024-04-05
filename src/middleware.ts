import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "az",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(az|tr|en)/:path*"],
};
