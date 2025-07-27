'use client';

import React from 'react';

const TechPartnership = () => {
  const partners = [
    {
      category: '대학 연구기관',
      description: '국내 주요 대학과의 산학협력을 통한 기술 연구개발',
      partners: [
        { name: '부경대학교', field: '수산과학', collaboration: '바이오플락 양식 기술 공동연구' },
        { name: '전남대학교', field: '해양생명과학', collaboration: '프로바이오틱스 개발 협력' },
        { name: '제주대학교', field: '해양바이오', collaboration: '질병 진단 기술 연구' },
        { name: 'KAIST', field: 'AI/IoT', collaboration: '스마트 양식 시스템 개발' }
      ],
      image: 'https://readdy.ai/api/search-image?query=University%20research%20collaboration%20with%20modern%20campus%20buildings%2C%20academic%20research%20facilities%2C%20scientific%20cooperation%2C%20educational%20and%20research%20partnerships&width=500&height=300&seq=university-partner&orientation=landscape'
    },
    {
      category: '정부 연구기관',
      description: '국가 연구기관과의 협력을 통한 대형 연구 프로젝트 수행',
      partners: [
        { name: '국립수산과학원', field: '수산 정책', collaboration: '양식 기술 표준화 연구' },
        { name: '한국해양과학기술원', field: '해양기술', collaboration: '해양 바이오 자원 활용' },
        { name: '농림수산식품기술기획평가원', field: '기술평가', collaboration: 'R&D 과제 수행' },
        { name: '중소벤처기업부', field: '기술사업화', collaboration: '기술창업 지원 프로그램' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Government%20research%20institute%20collaboration%20with%20official%20buildings%2C%20scientific%20research%20centers%2C%20institutional%20partnerships%2C%20marine%20science%20facilities&width=500&height=300&seq=government-partner&orientation=landscape'
    },
    {
      category: '산업체 파트너',
      description: '양식업계 선도기업들과의 전략적 파트너십',
      partners: [
        { name: '대한수산', field: '양식업', collaboration: '현장 적용 기술 검증' },
        { name: '한국사료', field: '사료제조', collaboration: '기능성 사료 개발' },
        { name: '해양바이오', field: '바이오소재', collaboration: '원료 공급 및 제품 개발' },
        { name: '스마트팜코리아', field: 'ICT 융합', collaboration: '스마트 양식 시스템 구축' }
      ],
      image: 'https://readdy.ai/api/search-image?query=Industrial%20partnership%20with%20modern%20manufacturing%20facilities%2C%20aquaculture%20companies%2C%20strategic%20business%20cooperation%2C%20industry%20collaboration&width=500&height=300&seq=industry-partner&orientation=landscape'
    },
    {
      category: '해외 파트너',
      description: '글로벌 기술 협력을 통한 국제 경쟁력 강화',
      partners: [
        { name: 'Skretting (노르웨이)', field: '사료기술', collaboration: '프리미엄 사료 기술 교류' },
        { name: 'BioMar (덴마크)', field: '수산영양', collaboration: '영양소 최적화 연구' },
        { name: 'Nutreco (네덜란드)', field: '지속가능 양식', collaboration: '친환경 양식 기술' },
        { name: 'CP Foods (태국)', field: '새우양식', collaboration: '아시아 시장 진출 협력' }
      ],
      image: 'https://readdy.ai/api/search-image?query=International%20partnership%20with%20global%20companies%2C%20overseas%20collaboration%2C%20multinational%20business%20meetings%2C%20international%20trade%20and%20cooperation&width=500&height=300&seq=global-partner&orientation=landscape'
    }
  ];

  const benefits = [
    {
      icon: 'ri-lightbulb-line',
      title: '기술 혁신',
      description: '다양한 분야의 전문성을 결합한 혁신적 기술 개발'
    },
    {
      icon: 'ri-team-line',
      title: '전문성 공유',
      description: '각 분야 전문가들의 지식과 경험을 상호 공유'
    },
    {
      icon: 'ri-rocket-line',
      title: '시장 확장',
      description: '파트너사의 네트워크를 통한 시장 진출 가속화'
    },
    {
      icon: 'ri-medal-line',
      title: '품질 향상',
      description: '상호 협력을 통한 제품 및 서비스 품질 개선'
    }
  ];

  const partnershipTypes = [
    {
      type: '공동 연구개발',
      description: '새로운 기술 개발을 위한 연구 협력',
      duration: '1-3년',
      examples: ['바이오플락 기술 고도화', 'AI 양식 시스템 개발', '신규 프로바이오틱스 개발']
    },
    {
      type: '기술 라이선싱',
      description: '보유 기술의 라이선스 제공 및 기술이전',
      duration: '5-10년',
      examples: ['특허 기술 라이선스', '노하우 기술이전', '독점/비독점 계약']
    },
    {
      type: '공동 사업화',
      description: '개발 기술의 상업화를 위한 협력',
      duration: '장기',
      examples: ['합작법인 설립', '공동 마케팅', '해외 진출 협력']
    },
    {
      type: '설비 공유',
      description: '연구시설 및 장비의 공동 활용',
      duration: '프로젝트별',
      examples: ['연구시설 공동 이용', '장비 임대', '실증 실험 지원']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">기술 파트너십</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              협력을 통한 시너지 창출
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              국내외 유수 대학, 연구기관, 기업들과의 기술 파트너십을 통해 R&D 역량을 강화하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              파트너십 현황
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 분야의 전문 기관들과 협력하여 기술 혁신을 추진합니다
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-700 font-semibold">파트너 기관</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15개</div>
              <div className="text-gray-700 font-semibold">공동 연구 과제</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">8건</div>
              <div className="text-gray-700 font-semibold">기술이전 실적</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">12개국</div>
              <div className="text-gray-700 font-semibold">해외 협력국</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 파트너 기관
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              각 분야별 대표 파트너들과의 협력 현황을 소개합니다
            </p>
          </div>

          <div className="space-y-16">
            {partners.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {category.category}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-600">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                          <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">{partner.field}</span>
                        </div>
                        <p className="text-sm text-gray-600">{partner.collaboration}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={category.image} 
                      alt={category.category}
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              파트너십의 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전략적 파트너십을 통해 창출되는 다양한 혜택들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
                  <i className={`${benefit.icon} text-3xl text-orange-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              협력 유형
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 형태의 기술 협력을 통해 상호 발전을 추구합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {type.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">협력 사례</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              협력 성과
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              파트너십을 통해 달성한 주요 성과들을 소개합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
              <div className="text-4xl font-bold mb-4">150%</div>
              <h3 className="text-xl font-bold mb-3">연구 효율성 증대</h3>
              <p className="text-blue-100">
                협력 연구를 통한 
                연구개발 효율성 향상
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white">
              <div className="text-4xl font-bold mb-4">8건</div>
              <h3 className="text-xl font-bold mb-3">특허 공동 출원</h3>
              <p className="text-green-100">
                파트너와 함께 출원한 
                공동 특허 건수
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white">
              <div className="text-4xl font-bold mb-4">35억원</div>
              <h3 className="text-xl font-bold mb-3">공동 과제 수주</h3>
              <p className="text-purple-100">
                컨소시엄을 통한 
                대형 과제 수주 실적
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              파트너십 절차
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버와의 기술 협력을 위한 단계별 절차
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 text-white rounded-full mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">초기 상담</h3>
              <p className="text-gray-600 text-sm">
                협력 분야 및 목표에 대한 
                초기 논의 및 검토
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 text-white rounded-full mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">제안서 검토</h3>
              <p className="text-gray-600 text-sm">
                기술적 타당성 및 
                협력 가능성 평가
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 text-white rounded-full mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">계약 체결</h3>
              <p className="text-gray-600 text-sm">
                협력 조건 협의 및 
                공식 계약 체결
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 text-white rounded-full mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">협력 수행</h3>
              <p className="text-gray-600 text-sm">
                공동 연구 또는 
                기술 협력 실행
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechPartnership;
