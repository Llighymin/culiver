import React from 'react';

const IrHero = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/ir-hero.jpg" // Placeholder image
          alt="IR Hero Image"
        />
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Investor Relations</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Culiver의 투명한 경영 정보와 성장 가능성을 확인하세요.
        </p>
      </div>
    </div>
  );
};

export default IrHero;
