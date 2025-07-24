"use client";

import { useEffect, useState } from "react";

const HeroSection = () => {
  const heroTitles = [
    {
      title: "지속가능한 새우양식의\n글로벌 리더",
      subtitle: "친환경 농수산물 생산과 지역사회 상생을 통해 국내·외 시장을 선도하는 바이오테크 전문 기업",
    },
    {
      title: "Culiver",
      subtitle: "바이오테크 전문 기업",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTitles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroTitles.length]);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-4 md:px-12 text-left text-white">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter whitespace-pre-wrap"
            style={{ animation: "text-fade-in 1.5s ease-out forwards" }}
          >
            {heroTitles[currentSlide].title}
          </h1>
          <p
            className="mt-4 text-xl md:text-2xl"
            style={{ animation: "text-fade-in 1.5s ease-out forwards" }}
          >
            {heroTitles[currentSlide].subtitle}
          </p>
        </div>
      </div>
      <div
        id="hero-controls"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4 text-white"
      >
        <span id="slide-counter" className="font-mono text-lg">
          0{currentSlide + 1}
        </span>
        <div className="w-20 h-0.5 bg-white/30">
          <div
            id="slide-progress"
            className="h-full bg-white"
            style={{ animation: "progress-bar 5s linear infinite" }}
          ></div>
        </div>
        <span className="font-mono text-lg text-white/50">
          0{heroTitles.length}
        </span>
      </div>
      <style jsx>{`
        @keyframes text-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress-bar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;