'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          We connect imagination with reality
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          우리는 상상력과 현실을 연결하고, 기술과 삶을 연결하며, 사람들 간의 연결을 촉진합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            href="/contact" 
            className="bg-green-whale hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 whitespace-nowrap"
          >
            상담 신청
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-whale rounded-full flex items-center justify-center mb-4 text-white">
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-primary-blue mb-2">전화 문의</h3>
            <p className="text-gray-600">1588-0000</p>
            <p className="text-gray-600 text-sm">평일 09:00 - 18:00</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-whale rounded-full flex items-center justify-center mb-4 text-white">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-primary-blue mb-2">이메일 문의</h3>
            <p className="text-gray-600">info@greenwhale.co.kr</p>
            <p className="text-gray-600 text-sm">24시간 접수 가능</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-whale rounded-full flex items-center justify-center mb-4 text-white">
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-primary-blue mb-2">본사 방문</h3>
            <p className="text-gray-600">서울시 강남구 테헤란로 123</p>
            <p className="text-gray-600 text-sm">사전 예약 필수</p>
          </div>
        </div>
      </div>
    </section>
  );
}