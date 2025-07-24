import React from 'react';

const Patents = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">특허 및 지식재산권</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            독자적인 기술력 확보
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Culiver는 핵심 기술에 대한 특허 및 지식재산권 확보를 통해 기술 경쟁력을 강화하고 있습니다.
          </p>
        </div>
        {/* 특허 목록 추가 예정 */}
      </div>
    </div>
  );
};

export default Patents;
