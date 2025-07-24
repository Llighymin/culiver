import React from 'react';

const OnlineQuote = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">온라인 견적 요청</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            맞춤형 솔루션을 위한 견적
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            필요한 제품과 수량을 알려주시면 신속하게 맞춤형 견적을 보내드립니다.
          </p>
        </div>
        {/* 견적 요청 폼 추가 예정 */}
      </div>
    </div>
  );
};

export default OnlineQuote;
