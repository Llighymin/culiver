'use client';

import React from 'react';

const Patents = () => {
  const patents = [
    {
      title: '바이오플락 기반 새우 양식 시스템 및 그 제어 방법',
      number: '특허 제10-2023-0123456호',
      date: '2023.08.15',
      status: '등록',
      type: '발명특허',
      description: '미생물 균형을 자동으로 제어하는 바이오플락 양식 시스템 기술',
      inventor: '김연구, 박기술, 이개발',
      category: '양식기술',
      image: 'https://readdy.ai/api/search-image?query=Patent%20document%20visualization%20with%20biofloc%20aquaculture%20system%20diagrams%2C%20technical%20drawings%2C%20legal%20documents%2C%20innovation%20and%20intellectual%20property%20concepts&width=400&height=250&seq=patent-1&orientation=landscape'
    },
    {
      title: '새우용 복합 프로바이오틱스 조성물 및 제조방법',
      number: '특허 제10-2023-0087654호',
      date: '2023.06.20',
      status: '등록',
      type: '발명특허',
      description: '흰다리새우 전용 복합 유용 미생물을 포함하는 프로바이오틱스 조성물',
      inventor: '박미생, 김균주, 이유익',
      category: '생명공학',
      image: 'https://readdy.ai/api/search-image?query=Probiotics%20patent%20illustration%20with%20molecular%20structures%2C%20bacterial%20cultures%2C%20scientific%20diagrams%2C%20biotechnology%20innovation%20documents&width=400&height=250&seq=patent-2&orientation=landscape'
    },
    {
      title: 'IoT 기반 수질 모니터링 및 자동 제어 장치',
      number: '특허 제10-2023-0098765호',
      date: '2023.04.12',
      status: '등록',
      type: '발명특허',
      description: 'IoT 센서를 이용한 실시간 수질 모니터링 및 자동 제어 시스템',
      inventor: '이스마, 김센서, 박제어',
      category: 'ICT융합',
      image: 'https://readdy.ai/api/search-image?query=IoT%20water%20monitoring%20system%20patent%20diagram%20with%20sensors%2C%20control%20devices%2C%20technical%20blueprints%2C%20smart%20technology%20innovation&width=400&height=250&seq=patent-3&orientation=landscape'
    },
    {
      title: '새우 질병 진단용 신속 검사 키트',
      number: '특허 제10-2022-0156789호',
      date: '2022.11.30',
      status: '등록',
      type: '발명특허',
      description: '새우의 주요 질병을 신속하게 진단할 수 있는 현장용 검사 키트',
      inventor: '박진단, 김검사, 이신속',
      category: '진단기술',
      image: 'https://readdy.ai/api/search-image?query=Rapid%20diagnostic%20test%20kit%20patent%20illustration%20with%20medical%20testing%20devices%2C%20diagnostic%20tools%2C%20veterinary%20technology%20innovation&width=400&height=250&seq=patent-4&orientation=landscape'
    },
    {
      title: '친환경 새우 사료 첨가제 조성물',
      number: '특허 제10-2022-0134567호',
      date: '2022.09.25',
      status: '등록',
      type: '발명특허',
      description: '천연 원료 기반의 친환경 새우 사료 첨가제 및 제조 공정',
      inventor: '김사료, 박첨가, 이천연',
      category: '사료기술',
      image: 'https://readdy.ai/api/search-image?query=Eco-friendly%20feed%20additive%20patent%20diagram%20with%20natural%20ingredients%2C%20sustainable%20aquaculture%20technology%2C%20green%20innovation%20concepts&width=400&height=250&seq=patent-5&orientation=landscape'
    },
    {
      title: '양식장 폐수 처리용 미생물 제제',
      number: '특허 제10-2022-0112345호',
      date: '2022.07.18',
      status: '등록',
      type: '발명특허',
      description: '양식장 폐수를 효과적으로 정화하는 특수 미생물 제제 기술',
      inventor: '이정화, 박미생, 김환경',
      category: '환경기술',
      image: 'https://readdy.ai/api/search-image?query=Wastewater%20treatment%20patent%20illustration%20with%20microbial%20agents%2C%20environmental%20technology%20diagrams%2C%20water%20purification%20innovation&width=400&height=250&seq=patent-6&orientation=landscape'
    }
  ];

  const patentStats = [
    { number: '15', label: '등록 특허', icon: 'ri-award-line', color: 'blue' },
    { number: '8', label: '출원 중', icon: 'ri-file-text-line', color: 'orange' },
    { number: '3', label: '국제 특허', icon: 'ri-global-line', color: 'green' },
    { number: '5', label: '기술이전', icon: 'ri-exchange-line', color: 'purple' }
  ];

  const categories = [
    { name: '양식기술', count: 6, percentage: 40 },
    { name: '생명공학', count: 4, percentage: 27 },
    { name: 'ICT융합', count: 3, percentage: 20 },
    { name: '진단기술', count: 2, percentage: 13 }
  ];

  return (
    <>
      {/* Hero Section */}
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
        </div>
      </div>

      {/* Patent Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              지식재산권 현황
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버가 보유한 특허 및 지식재산권 통계
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {patentStats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 flex items-center justify-center bg-${stat.color}-100 rounded-full mx-auto mb-6`}>
                  <i className={`${stat.icon} text-3xl text-${stat.color}-600`}></i>
                </div>
                <div className={`text-3xl lg:text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Patent Categories */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">기술 분야별 특허 분포</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{category.name}</div>
                    <div className="text-gray-600">{category.count}건</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{category.percentage}%</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patent List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 등록 특허
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버의 핵심 기술이 담긴 대표 특허들을 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {patents.map((patent, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${patent.image})` }}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      patent.status === '등록' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {patent.status}
                    </span>
                    <span className="text-sm text-gray-500">{patent.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{patent.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{patent.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">특허번호:</span>
                      <span>{patent.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">등록일:</span>
                      <span>{patent.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">발명자:</span>
                      <span className="text-right">{patent.inventor}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                    상세 정보 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Strategy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                지식재산권 전략
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-4 mt-1">
                    <i className="ri-lightbulb-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">혁신 기술 보호</h3>
                    <p className="text-gray-600">핵심 기술의 특허 출원을 통한 경쟁 우위 확보</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-4 mt-1">
                    <i className="ri-global-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">글로벌 특허 확보</h3>
                    <p className="text-gray-600">해외 시장 진출을 위한 국제 특허 출원 강화</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-4 mt-1">
                    <i className="ri-exchange-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">기술이전 활성화</h3>
                    <p className="text-gray-600">보유 특허의 기술이전을 통한 산업 발전 기여</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mr-4 mt-1">
                    <i className="ri-shield-check-line text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">IP 포트폴리오 구축</h3>
                    <p className="text-gray-600">체계적인 지식재산권 관리 및 포트폴리오 확장</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Intellectual%20property%20strategy%20visualization%20with%20patent%20documents%2C%20legal%20consultation%2C%20technology%20transfer%20concepts%2C%20professional%20business%20meeting&width=600&height=500&seq=ip-strategy&orientation=landscape"
                  alt="지식재산권 전략"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Transfer */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              기술이전 성과
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버의 특허 기술이 실제 산업에 적용된 사례들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">5건</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">기술이전 실적</h3>
              <p className="text-gray-600">
                보유 특허의 기술이전을 통한 
                산업 현장 적용 성과
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">8억원</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">기술료 수입</h3>
              <p className="text-gray-600">
                기술이전을 통해 창출된 
                누적 기술료 수입
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">12개</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">협력 기업</h3>
              <p className="text-gray-600">
                기술이전 및 라이선싱 
                파트너 기업 수
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patents;
