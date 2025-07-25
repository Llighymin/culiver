"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/LocaleContext";
import { usePathname } from "next/navigation";
import { i18n, createPathWithLocale, getLocaleFromPath } from "@/i18n.config.js";
import LanguageSelector from "./LanguageSelector";

// 이제 navLinks는 동적으로 생성됩니다

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  
  // 다국어로 네비게이션 링크 생성
  const navLinks = [
    { href: "/company", label: t('Header.company') },
    { href: "/solutions", label: t('Header.solutions') },
    { href: "/products", label: t('Header.products') },
    { href: "/cases", label: t('Header.cases') },
    { href: "/esg", label: t('Header.esg') },
    { href: "/pr", label: t('Header.pr') },
    { href: "/ir", label: t('Header.ir') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
    scrolled
      ? "bg-white/80 backdrop-blur-sm border-b border-gray-200"
      : "bg-transparent"
  }`;

  const textClasses = scrolled ? "text-gray-800" : "text-white";
  const langTextClasses = scrolled ? "text-gray-500" : "text-white";
  const activeLangTextClasses = scrolled ? "text-green-whale" : "text-white";

  return (
    <header className={headerClasses}>
      <div
        className={`container mx-auto px-6 h-full flex justify-between items-center ${textClasses}`}
      >
        <Link href="/" className="flex items-center">
          <p className="font-bold">Culiver</p>
        </Link>
        <nav className="hidden lg:flex h-full items-center space-x-10 text-base font-bold">
          {navLinks.map((link) => (
            <div key={link.href} className="nav-item h-full flex items-center">
              <Link 
                href={locale !== i18n.defaultLocale ? `/${locale}${link.href}` : link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSelector className={langTextClasses} />
          <button
            id="mobile-menu-button"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4 text-base font-bold text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={locale !== i18n.defaultLocale ? `/${locale}${link.href}` : link.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;