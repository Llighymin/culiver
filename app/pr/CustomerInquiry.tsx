import React from 'react';
import Link from 'next/link';

const CustomerInquiry = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">고객문의</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            무엇이든 물어보세요.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            제품, 기술, 파트너십 등 궁금한 점이 있으시면 언제든지 문의해주세요.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                문의하기 페이지로 이동
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInquiry;
