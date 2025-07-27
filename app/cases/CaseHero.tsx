'use client';

export default function CaseHero() {
  return (
    <section 
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Success%20stories%20of%20waste%20management%20implementations%2C%20multiple%20business%20facilities%20showing%20successful%20environmental%20solutions%2C%20before%20and%20after%20transformation%2C%20corporate%20success%20achievements%2C%20satisfied%20customers&width=1920&height=1080&seq=case-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          고객 성공 사례
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          다양한 업종의 고객들이 그린웨일과 함께 이룬 성공 스토리를 확인해보세요
        </p>
      </div>
    </section>
  );
}