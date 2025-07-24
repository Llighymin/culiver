"use client";

import { useEffect, useState } from "react";

const HeroSection = () => {
  const heroTitles = [
    {
      title: "GREEN WHALE\nPNNP Co.",
      subtitle: "Back to the GREEN in 24 hours, not 1 month.",
    },
    {
      title: "그린웨일 주식회사",
      subtitle: "One-Stop 환경 솔루션 : 유기성 폐기물 소멸기술",
    },
    {
      title: "유기성 폐기물 문제 해결",
      subtitle: "처리대상 + 미생물 + 미생물활성제",
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
        <source src="/videos/greenwhale-bg-1.mp4" type="video/mp4" />
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