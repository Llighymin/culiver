'use client';

import { Youtube, Instagram, Linkedin, MessageSquare, ChevronUp } from "lucide-react";
import Link from "next/link";

const companyLinks = [
  { href: "/company", label: "회사소개" },
  { href: "/products", label: "제품소개" },
  { href: "/solutions", label: "솔루션" },
  { href: "/cases", label: "고객사례" },
];

const socialLinks = [
  { href: "https://www.youtube.com/channel/UCMEfq7bqJwujrM5oEEhhmYw", label: "Youtube", icon: Youtube },
  { href: "https://www.instagram.com/nhn_corp/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/nhncorp/", label: "LinkedIn", icon: Linkedin },
  { href: "https://meetup.nhncloud.com/", label: "Meetup", icon: MessageSquare },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4 text-[#4CAF50]">
              Green Whale
            </div>
            <p className="text-gray-300 mb-4">
              신뢰할 수 있는 기술력으로 구현하는 가장 빠른 친환경 솔루션
            </p>
            <p className="text-gray-400 text-sm">
              녹색의 우리 삶의 터전은 녹색 고래 그린웨일이 지키겠습니다!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">회사정보</h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-gray-300 hover:text-white">문의하기</Link></li>
              <li className="text-gray-300">기술지원: 1588-0000</li>
              <li className="text-gray-300">이메일: info@greenwhale.co.kr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 그린웨일 주식회사. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">개인정보처리방침</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">이용약관</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-1">
              FAMILY SITE <ChevronUp className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-sm font-bold text-gray-400 hover:text-white flex items-center gap-1">
              GLOBAL SITE <ChevronUp className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.label}`}
                className="text-gray-400 hover:text-white"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}