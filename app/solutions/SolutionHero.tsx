'use client';

export default function SolutionHero() {
  return (
    <section 
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Comprehensive%20waste%20management%20solutions%20across%20various%20industries%2C%20multiple%20business%20facilities%20connected%20by%20green%20technology%2C%20sustainable%20waste%20processing%20network%2C%20modern%20environmental%20solutions%2C%20integrated%20eco-friendly%20systems&width=1920&height=1080&seq=solution-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          사업영역
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          컬리버는 지속 가능한 수산양식과 바이오 기술을 통해 글로벌 식량 문제 해결에 기여합니다.
        </p>
      </div>
    </section>
  );
}