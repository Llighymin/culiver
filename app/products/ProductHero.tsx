'use client';

export default function ProductHero() {
  return (
    <section 
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Advanced%20eco-friendly%20waste%20processing%20equipment%20in%20modern%20industrial%20facility%2C%20stainless%20steel%20machinery%20with%20digital%20control%20panels%2C%20high-tech%20biotechnology%20processing%20systems%2C%20clean%20industrial%20environment%20with%20green%20technology%20elements&width=1920&height=1080&seq=product-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          제품소개
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          지속 가능한 친환경 농수산물 생산과 지역사회 상생을 통해 국내·외 시장을 선도하는 글로벌 새우양식 전문 기업입니다.
        </p>
      </div>
    </section>
  );
}