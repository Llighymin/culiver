'use client';

export default function ProductHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 66, 122, 0.8), rgba(0, 66, 122, 0.8)), url('https://readdy.ai/api/search-image?query=Advanced%20eco-friendly%20waste%20processing%20equipment%20in%20modern%20industrial%20facility%2C%20stainless%20steel%20machinery%20with%20digital%20control%20panels%2C%20high-tech%20biotechnology%20processing%20systems%2C%20clean%20industrial%20environment%20with%20green%20technology%20elements&width=1920&height=1080&seq=product-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          혁신적인 제품 라인업
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          소규모 식당부터 대형 지자체까지 모든 규모에 맞는 BESPOKE 솔루션
        </p>
        <div className="text-lg md:text-xl text-[#4CAF50] font-semibold">
          24시간 내 완전 소멸 기술
        </div>
      </div>
    </section>
  );
}