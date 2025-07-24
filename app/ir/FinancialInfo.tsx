import React from 'react';

const FinancialInfo = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">재무정보</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            주요 재무 현황
          </p>
        </div>
        {/* 재무제표, 재무비율 등 추가 예정 */}
      </div>
    </div>
  );
};

export default FinancialInfo;
