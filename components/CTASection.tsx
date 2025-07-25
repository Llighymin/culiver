'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useContext } from 'react';
import { LocaleContext } from '@/i18n/LocaleContext';

// CTA 섹션 번역 타입 정의
interface CTASectionTranslations {
  title: string;
  description: string;
  buttonText: string;
}

export default function CTASection() {
  const localeContext = useContext(LocaleContext);
  const messages = localeContext?.messages || {};
  
  // 기본값 설정 (폴백용)
  const defaultTranslations: CTASectionTranslations = {
    title: "We connect imagination with reality",
    description: "우리는 상상력과 현실을 연결하고, 기술과 삶을 연결하며, 사람들 간의 연결을 촉진합니다.",
    buttonText: "상담 신청"
  };

  // 번역 데이터 가져오기
  const t: CTASectionTranslations = messages.CTASection || defaultTranslations;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {t.title}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/contact" 
            className="bg-green-whale hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap"
          >
            {t.buttonText}
          </Link>
        </div>
        </div>
    </section>
  );
}