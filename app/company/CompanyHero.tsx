"use client";

export default function CompanyHero() {
  return (
    <section
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20with%20glass%20facade%2C%20professional%20business%20environment%2C%20clean%20architecture%2C%20blue%20sky%20background%2C%20impressive%20corporate%20presence&width=1200&height=600&seq=company-hero&orientation=landscape&quot')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">회사소개</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          지속 가능한 친환경 농수산물 생산과 지역사회 상생을 통해 국내·외 시장을
          선도하는 글로벌 새우양식 전문 기업입니다.
        </p>
      </div>
    </section>
  );
}
