import React from 'react';

const IrHero = () => {
  return (
    <section
      className="relative py-48 flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/ir-hero.jpg')`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Relations</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Culiver의 투명한 경영 정보와 성장 가능성을 확인하세요.
        </p>
      </div>
    </section>
  );
};

export default IrHero;
