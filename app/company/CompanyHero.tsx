'use client';

export default function CompanyHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 66, 122, 0.8), rgba(0, 66, 122, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20eco-friendly%20technology%20company%20building%20with%20green%20glass%20facade%2C%20sustainable%20architecture%2C%20blue%20sky%20background%2C%20professional%20corporate%20headquarters%2C%20environmental%20technology%20innovation%20center%2C%20clean%20modern%20design%20with%20natural%20lighting&width=1920&height=1080&seq=company-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          그린웨일 주식회사
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          신뢰할 수 있는 기술력으로 구현하는 가장 빠른 친환경 솔루션
        </p>
        <div className="text-lg md:text-xl text-[#4CAF50] font-semibold">
          Back to the GREEN
        </div>
      </div>
    </section>
  );
}