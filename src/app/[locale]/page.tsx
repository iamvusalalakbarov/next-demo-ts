import Link from "next/link";
import LanguageSelect from "@/components/language-select";
import ThemeLabels from "@/components/theme-labels";
import { useTranslations } from "next-intl";

const links = [
  {
    href: "#about",
    title: "about",
  },
  {
    href: "#education",
    title: "education",
  },
  {
    href: "#skills",
    title: "skills",
  },
  {
    href: "#projects",
    title: "projects",
  },
  {
    href: "#contact",
    title: "contact",
  },
];

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <header className="h-16 flex justify-between items-center px-4 border-b-2 border-blue-800 relative">
        <Link href="/" className="font-bold text-xl text-blue-800 uppercase">
          Next Demo
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex justify-between items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="py-2 px-4 rounded font-medium text-blue-800 border-2 border-transparent hover:border-blue-800 transition-colors"
                >
                  {t(link.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-x-4">
          <ThemeLabels />
          <LanguageSelect />
        </div>
      </header>

      <div>
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}
