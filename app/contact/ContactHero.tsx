'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 66, 122, 0.8), rgba(0, 66, 122, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20and%20consultation%2C%20modern%20business%20communication%2C%20friendly%20corporate%20staff%20helping%20customers%2C%20professional%20advisory%20meeting%2C%20business%20consultation%20services%2C%20customer%20support%20center&width=1920&height=1080&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          문의하기
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          그린웨일 전문가와 함께 최적의 솔루션을 찾아보세요
        </p>
        <div className="text-lg md:text-xl text-[#4CAF50] font-semibold">
          무료 상담 및 현장 방문 서비스 제공
        </div>
      </div>
    </section>
  );
}