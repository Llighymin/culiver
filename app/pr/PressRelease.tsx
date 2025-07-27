'use client';

import React, { useState } from 'react';

const PressRelease = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const years = ['2024', '2023', '2022', '2021'];
  const categories = ['전체', '사업확장', '기술개발', '파트너십', '수상소식', '지속가능경영'];

  const pressReleases = [
    {
      id: 1,
      date: '2024.03.15',
      category: '사업확장',
      title: '컬리버, 친환경 새우양식 기술로 동남아시아 시장 진출 본격화',
      summary: '지속가능한 수산양식 기술을 바탕으로 베트남, 태국 등 동남아시아 주요국과 기술 협력 체결. 현지 양식업체와의 파트너십을 통해 글로벌 시장 확대에 나선다.',
      image: 'https://readdy.ai/api/search-image?query=modern%20shrimp%20farming%20facility%20with%20advanced%20technology%2C%20clean%20industrial%20environment%2C%20workers%20in%20white%20coats%20monitoring%20systems%2C%20bright%20lighting%2C%20professional%20aquaculture%20setting%2C%20high-tech%20equipment&width=400&height=250&seq=press1&orientation=landscape',
      views: 1250,
      featured: true
    },
    {
      id: 2,
      date: '2024.03.08',
      category: '기술개발',
      title: '바이오플락 기반 순환여과시스템 특허 등록 완료',
      summary: '독자개발한 바이오플락 기반 순환여과시스템이 국내외 특허 등록을 완료하며, 친환경 양식 기술의 우수성을 인정받았다.',
      image: 'https://readdy.ai/api/search-image?query=biofloc%20aquaculture%20system%20with%20circular%20tanks%2C%20water%20filtration%20equipment%2C%20modern%20laboratory%20setting%2C%20scientific%20research%20facility%2C%20clean%20technology%20environment&width=400&height=250&seq=press2&orientation=landscape',
      views: 980,
      featured: false
    },
    {
      id: 3,
      date: '2024.02.28',
      category: '수상소식',
      title: '2024 대한민국 수산업 혁신대상 최우수상 수상',
      summary: '해양수산부가 주최한 2024 대한민국 수산업 혁신대상에서 친환경 양식 기술 혁신 부문 최우수상을 수상하며 기술력을 인정받았다.',
      image: 'https://readdy.ai/api/search-image?query=corporate%20award%20ceremony%2C%20executive%20receiving%20trophy%2C%20formal%20business%20setting%2C%20celebration%20moment%2C%20professional%20photography%2C%20award%20presentation%20stage&width=400&height=250&seq=press3&orientation=landscape',
      views: 1420,
      featured: true
    },
    {
      id: 4,
      date: '2024.02.20',
      category: '파트너십',
      title: '국립수산과학원과 차세대 양식기술 공동연구 협약 체결',
      summary: '국립수산과학원과 차세대 스마트 양식기술 개발을 위한 공동연구 협약을 체결하고, 향후 3년간 협력 연구를 진행할 예정이다.',
      image: 'https://readdy.ai/api/search-image?query=business%20partnership%20signing%20ceremony%2C%20executives%20shaking%20hands%2C%20formal%20meeting%20room%2C%20documents%20on%20table%2C%20professional%20corporate%20environment&width=400&height=250&seq=press4&orientation=landscape',
      views: 760,
      featured: false
    },
    {
      id: 5,
      date: '2024.02.10',
      category: '지속가능경영',
      title: 'ESG 경영 강화로 탄소중립 양식시스템 도입',
      summary: '2030 탄소중립 목표 달성을 위해 재생에너지 기반 양식시스템을 도입하고, ESG 경영 체계를 대폭 강화한다고 발표했다.',
      image: 'https://readdy.ai/api/search-image?query=sustainable%20aquaculture%20facility%20with%20solar%20panels%2C%20green%20technology%2C%20eco-friendly%20farming%20systems%2C%20clean%20energy%20integration%2C%20environmental%20conservation&width=400&height=250&seq=press5&orientation=landscape',
      views: 1150,
      featured: false
    },
    {
      id: 6,
      date: '2024.01.25',
      category: '기술개발',
      title: '프로바이오틱스 기반 새우 면역증강제 상용화 성공',
      summary: '자체 개발한 프로바이오틱스 기반 새우 면역증강제가 상용화에 성공하며, 양식 새우의 생존율과 성장률을 크게 향상시켰다.',
      image: 'https://readdy.ai/api/search-image?query=laboratory%20research%20with%20probiotics%2C%20scientist%20examining%20samples%2C%20microscope%20work%2C%20biotechnology%20research%20facility%2C%20white%20lab%20coats%2C%20scientific%20equipment&width=400&height=250&seq=press6&orientation=landscape',
      views: 890,
      featured: false
    }
  ];

  const filteredPress = pressReleases.filter(press => {
    const yearMatch = press.date.startsWith(selectedYear);
    const categoryMatch = selectedCategory === '전체' || press.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const featuredPress = pressReleases.filter(press => press.featured);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              보도자료
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              컬리버의 최신 뉴스와 주요 소식을 전해드립니다
            </p>
          </div>
        </div>
      </section>

      {featuredPress.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">주요 소식</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPress.map((press) => (
                <div key={press.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <img 
                    src={press.image} 
                    alt={press.title}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{press.date}</span>
                      <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                        주요소식
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {press.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {press.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                        {press.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        조회 {press.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
              전체 보도자료
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}년</option>
                ))}
              </select>
              
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredPress.map((press) => (
              <div key={press.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col lg:flex-row gap-6">
                  <img 
                    src={press.image} 
                    alt={press.title}
                    className="w-full lg:w-48 h-32 object-cover object-top rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{press.date}</span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                          {press.category}
                        </span>
                        {press.featured && (
                          <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                            주요소식
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">
                        조회 {press.views.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {press.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {press.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPress.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                <i className="ri-newspaper-line text-2xl text-gray-400"></i>
              </div>
              <p className="text-gray-500">선택한 조건에 맞는 보도자료가 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PressRelease;
