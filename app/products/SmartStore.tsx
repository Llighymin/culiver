import React from 'react';

const SmartStore = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">스마트스토어</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            온라인에서 간편하게 구매
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Culiver의 스마트스토어에서 다양한 제품을 편리하게 만나보세요.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://smartstore.naver.com/culiver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              스마트스토어 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartStore;
