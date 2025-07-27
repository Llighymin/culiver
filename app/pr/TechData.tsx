'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TechData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const techDataList = [
    {
      id: 1,
      category: '논문',
      title: '바이오플락 기술을 이용한 고밀도 새우 양식의 생산성 및 수질 환경 분석',
      author: '김철수, 박영희',
      journal: '한국수산과학회지, 제 57권 제 2호',
      date: '2024.05.15',
      fileUrl: '/files/paper-01.pdf',
      fileType: 'PDF',
      fileSize: '2.5 MB',
      description: '본 연구는 바이오플락 기술이 고밀도 새우 양식 환경에서 생산성 및 수질 개선에 미치는 영향을 분석하고, 지속가능한 양식 모델로서의 가능성을 평가했습니다.',
    },
    {
      id: 2,
      category: '특허',
      title: 'IoT 센서 기반 실시간 수질 모니터링 및 자동 제어 시스템',
      patentId: '특허 제 10-2024-0012345호',
      date: '2024.03.20',
      fileUrl: '/files/patent-01.pdf',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      description: 'IoT 센서를 통해 실시간으로 양식장 수질 데이터를 수집하고, AI 알고리즘을 통해 최적의 수질 환경을 자동으로 제어하는 스마트 양식 시스템에 관한 특허입니다.',
    },
    {
      id: 3,
      category: '보고서',
      title: '2023년 친환경 스마트 양식 기술 동향 보고서',
      author: '컬리버 기술연구소',
      date: '2024.02.10',
      fileUrl: '/files/report-01.pdf',
      fileType: 'PDF',
      fileSize: '5.2 MB',
      description: '글로벌 스마트 양식 시장의 최신 기술 동향, 시장 규모, 주요 기업 분석 및 향후 전망을 담은 연간 기술 동향 보고서입니다.',
    },
    {
      id: 4,
      category: '논문',
      title: '프로바이오틱스 첨가 사료가 흰다리새우의 면역력 및 성장률에 미치는 영향',
      author: '이민준',
      journal: 'Journal of Aquaculture Nutrition, Vol. 30, Issue 1',
      date: '2023.11.28',
      fileUrl: '/files/paper-02.pdf',
      fileType: 'PDF',
      fileSize: '3.1 MB',
      description: '자체 개발한 프로바이오틱스 균주를 첨가한 사료가 흰다리새우의 면역 관련 유전자 발현 및 성장 성능에 미치는 긍정적 효과를 규명한 연구입니다.',
    },
    {
      id: 5,
      category: '특허',
      title: '순환여과양식(RAS)을 위한 에너지 효율적 폐수 처리 장치',
      patentId: '특허 제 10-2023-0098765호',
      date: '2023.09.05',
      fileUrl: '/files/patent-02.pdf',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      description: '기존 순환여과양식 시스템의 에너지 소비를 획기적으로 줄인 새로운 구조의 폐수 처리 장치에 대한 기술 특허입니다.',
    },
    {
      id: 6,
      category: '보고서',
      title: '스마트 양식 도입에 따른 경제적 타당성 분석 보고서',
      author: '컬리버 컨설팅팀',
      date: '2023.07.12',
      fileUrl: '/files/report-02.pdf',
      fileType: 'PDF',
      fileSize: '4.5 MB',
      description: '기존 양식 방식과 컬리버 스마트 양식 시스템 도입 시의 투자 비용, 운영 비용, 생산성 및 수익성을 비교 분석한 보고서입니다.',
    },
  ];

  const categories = ['전체', '논문', '특허', '보고서'];

  const filteredData = techDataList.filter(data => {
    const categoryMatch = selectedCategory === '전체' || data.category === selectedCategory;
    const searchMatch = data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              기술 자료실
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버의 혁신적인 기술력을 담은 논문, 특허, 보고서를 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Data List Section */}
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
                className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="space-y-6">
            {filteredData.length > 0 ? (
              filteredData.map(data => (
                <div key={data.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          data.category === '논문' ? 'bg-green-100 text-green-700' :
                          data.category === '특허' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {data.category}
                        </span>
                        <span className="text-sm text-gray-500">{data.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{data.title}</h3>
                      {data.author && <p className="text-sm text-gray-600 mb-1"><strong>저자:</strong> {data.author}</p>}
                      {data.journal && <p className="text-sm text-gray-600 mb-1"><strong>학술지:</strong> {data.journal}</p>}
                      {data.patentId && <p className="text-sm text-gray-600 mb-1"><strong>특허번호:</strong> {data.patentId}</p>}
                      <p className="text-gray-700 mt-4 mb-6">{data.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-48 flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-0 md:border-l md:pl-6">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <p className="text-sm text-gray-500 mt-2">{data.fileType} ({data.fileSize})</p>
                      </div>
                      <Link href={data.fileUrl} download>
                        <div className="mt-4 w-full md:w-auto text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                          다운로드
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-gray-500">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v10M12 15v6M8 21h8"></path></svg>
                </div>
                검색된 기술 자료가 없습니다.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechData;
