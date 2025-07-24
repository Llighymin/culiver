import React from 'react';

const PrHero = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/pr-hero.jpg" // Placeholder image
          alt="PR Hero Image"
        />
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">홍보 센터</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Culiver의 최신 소식을 전해드립니다.
        </p>
      </div>
    </div>
  );
};

export default PrHero;
