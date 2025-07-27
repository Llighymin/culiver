'use client';
import React from 'react';

const PrHero = () => {
  return (
    <section
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/pr-hero.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">홍보 센터</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Culiver의 최신 소식을 전해드립니다.
        </p>
      </div>
    </section>
  );
};

export default PrHero;
