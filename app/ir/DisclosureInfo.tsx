'use client';

import React, { useState } from 'react';

const DisclosureInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const disclosuresPerPage = 10;

  const allDisclosures = [
    { id: 10, date: '2025.07.15', title: '[정정] 주요사항보고서(유상증자결정)', type: '정정공시', link: '#' },
    { id: 9, date: '2025.07.14', title: '주요사항보고서(유상증자결정)', type: '주요경영사항', link: '#' },
    { id: 8, date: '2025.07.10', title: '기업설명회(IR) 개최(2025년 2분기 실적발표)', type: 'IR', link: '#' },
    { id: 7, date: '2025.05.15', title: '분기보고서 (2025.03)', type: '정기공시', link: '#' },
    { id: 6, date: '2025.04.10', title: '기업설명회(IR) 개최(2025년 1분기 실적발표)', type: 'IR', link: '#' },
    { id: 5, date: '2025.03.31', title: '사업보고서 (2024.12)', type: '정기공시', link: '#' },
    { id: 4, date: '2025.03.15', title: '주주총회소집공고', type: '주요경영사항', link: '#' },
    { id: 3, date: '2025.02.20', title: '현금·현물배당결정', type: '주요경영사항', link: '#' },
    { id: 2, date: '2025.01.28', title: '매출액또는손익구조30%(대규모법인은15%)이상변경', type: '주요경영사항', link: '#' },
    { id: 1, date: '2025.01.15', title: '타법인 주식 및 출자증권 취득결정', type: '주요경영사항', link: '#' },
  ];

  const filteredDisclosures = allDisclosures.filter(disclosure =>
    disclosure.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDisclosure = currentPage * disclosuresPerPage;
  const indexOfFirstDisclosure = indexOfLastDisclosure - disclosuresPerPage;
  const currentDisclosures = filteredDisclosures.slice(indexOfFirstDisclosure, indexOfLastDisclosure);

  const totalPages = Math.ceil(filteredDisclosures.length / disclosuresPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공시정보
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버의 모든 공시정보를 신속하고 투명하게 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <a
              href="https://dart.fss.or.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              DART 바로가기
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="공시 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="border-t-2 border-gray-800">
            <div className="hidden md:grid md:grid-cols-12 text-center py-3 bg-gray-50 font-semibold text-gray-700 border-b">
              <div className="col-span-1">번호</div>
              <div className="col-span-2">공시유형</div>
              <div className="col-span-7">제목</div>
              <div className="col-span-2">공시일</div>
            </div>
            
            {currentDisclosures.length > 0 ? (
              currentDisclosures.map(disclosure => (
                <a href={disclosure.link} target="_blank" rel="noopener noreferrer" key={disclosure.id} className="grid grid-cols-12 py-4 border-b items-center text-sm hover:bg-gray-50 transition-colors duration-200">
                  <div className="col-span-12 md:col-span-1 text-center text-gray-500">{disclosure.id}</div>
                  <div className="col-span-12 md:col-span-2 text-center text-gray-600 font-medium">{disclosure.type}</div>
                  <div className="col-span-12 md:col-span-7 px-4 text-left text-gray-800 font-semibold hover:text-blue-600">{disclosure.title}</div>
                  <div className="col-span-12 md:col-span-2 text-center text-gray-500">{disclosure.date}</div>
                </a>
              ))
            ) : (
              <div className="text-center py-16 text-gray-500">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                검색된 공시가 없습니다.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center space-x-2">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 rounded-md text-sm font-medium bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentPage === number
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {number}
                </button>
              ))}
              <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md text-sm font-medium bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                다음
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DisclosureInfo;
