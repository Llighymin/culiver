"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/company", label: "회사소개" },
  { href: "/solutions", label: "사업영역" },
  { href: "/products", label: "제품소개" },
  { href: "/cases", label: "기술력" },
  { href: "/esg", label: "지속가능경영" },
  { href: "/pr", label: "홍보" },
  { href: "/ir", label: "IR" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              <Link href={link.href} className="nav-link">
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div
            className={`hidden md:flex items-center space-x-4 text-sm ${langTextClasses}`}
          >
            <a href="#" className={`${activeLangTextClasses} font-bold`}>
              한국어
            </a>
            <a href="#" className="hover:text-green-whale">
              English
            </a>
            <a href="#" className="hover:text-green-whale">
              日本語
            </a>
          </div>
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
                href={link.href}
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