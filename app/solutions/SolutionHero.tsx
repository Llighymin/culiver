'use client';

export default function SolutionHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 66, 122, 0.8), rgba(0, 66, 122, 0.8)), url('https://readdy.ai/api/search-image?query=Comprehensive%20waste%20management%20solutions%20across%20various%20industries%2C%20multiple%20business%20facilities%20connected%20by%20green%20technology%2C%20sustainable%20waste%20processing%20network%2C%20modern%20environmental%20solutions%2C%20integrated%20eco-friendly%20systems&width=1920&height=1080&seq=solution-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ONE-STOP 환경 솔루션
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          업종별 맞춤형 솔루션으로 폐기물 처리의 모든 고민을 해결합니다
        </p>
        <div className="text-lg md:text-xl text-[#4CAF50] font-semibold">
          설계부터 설치, 운영, 관리까지 모든 서비스를 제공
        </div>
      </div>
    </section>
  );
}