import React from 'react';

const Notice = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">공지사항</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Culiver의 새로운 소식을 알려드립니다.
          </p>
        </div>
        {/* 공지사항 목록 추가 예정 */}
      </div>
    </div>
  );
};

export default Notice;
