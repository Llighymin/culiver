"use client";

import Link from "next/link";

export default function CompanyHero() {
  return (
    <section
      className="relative py-32 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 66, 122, 0.8), rgba(0, 66, 122, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20with%20glass%20facade%2C%20professional%20business%20environment%2C%20clean%20architecture%2C%20blue%20sky%20background%2C%20impressive%20corporate%20presence&width=1200&height=600&seq=company-hero&orientation=landscape&quot')`,
      }}
    >
      <div className="container mx-auto px-4 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">회사소개</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          지속 가능한 친환경 농수산물 생산과 지역사회 상생을 통해 국내·외 시장을
          선도하는 글로벌 새우양식 전문 기업입니다.
        </p>
        {/* <div className="flex items-center justify-center space-x-4">
          <Link
            href="/company/ceo"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            CEO 인사말
          </Link>
          <Link
            href="/company/overview"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            회사개요
          </Link>
        </div> */}
      </div>
    </section>
  );
}
