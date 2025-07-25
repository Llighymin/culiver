import React from 'react';

const EsgHero = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/esg-hero.jpg" // Placeholder image
          alt="ESG Hero Image"
        />
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">ESG 경영</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          지속가능한 미래를 위한 Culiver의 약속
        </p>
      </div>
    </div>
  );
};

export default EsgHero;
