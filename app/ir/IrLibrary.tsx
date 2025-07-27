'use client';

import React, { useState } from 'react';

const IrLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const libraryData = [
    { id: 8, category: 'IR Deck', title: '2025년 2분기 실적발표 자료', date: '2025.07.25', fileUrl: '/ir-data/2025-q2-earnings-deck.pdf' },
    { id: 7, category: '사업보고서', title: '2024년 사업보고서', date: '2025.03.30', fileUrl: '/ir-data/2024-business-report.pdf' },
    { id: 6, category: '감사보고서', title: '2024년 감사보고서', date: '2025.03.28', fileUrl: '/ir-data/2024-audit-report.pdf' },
    { id: 5, category: 'IR Deck', title: '2025년 1분기 실적발표 자료', date: '2025.04.25', fileUrl: '/ir-data/2025-q1-earnings-deck.pdf' },
    { id: 4, category: '기타', title: '2024년 지속가능경영보고서', date: '2025.02.15', fileUrl: '/ir-data/2024-sustainability-report.pdf' },
    { id: 3, category: '사업보고서', title: '2023년 사업보고서', date: '2024.03.30', fileUrl: '/ir-data/2023-business-report.pdf' },
    { id: 2, category: '감사보고서', title: '2023년 감사보고서', date: '2024.03.28', fileUrl: '/ir-data/2023-audit-report.pdf' },
    { id: 1, category: 'IR Deck', title: '2024년 4분기 및 연간 실적발표 자료', date: '2025.01.28', fileUrl: '/ir-data/2024-q4-earnings-deck.pdf' },
  ];

  const categories = ['전체', 'IR Deck', '사업보고서', '감사보고서', '기타'];

  const filteredData = libraryData.filter(item => {
    const categoryMatch = selectedCategory === '전체' || item.category === selectedCategory;
    const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IR 자료실
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버의 주요 실적 발표, 사업 보고서 등 투자자를 위한 자료를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* IR Library Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto mt-4 md:mt-0">
              <input
                type="text"
                placeholder="자료 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="p-6 flex-grow">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 h-14">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                    <a
                      href={item.fileUrl}
                      download
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                      다운로드
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-500">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </div>
                검색된 자료가 없습니다.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrLibrary;
