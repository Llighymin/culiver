import React from 'react';

const EsgHero = () => {
  return (
    <section
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/esg-hero.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ESG 경영</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          지속가능한 미래를 위한 Culiver의 약속
        </p>
      </div>
    </section>
  );
};

export default EsgHero;
