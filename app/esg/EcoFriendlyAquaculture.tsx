'use client';

import React from 'react';

const EcoFriendlyAquaculture = () => {
  const ecoTechnologies = [
    {
      title: '순환여과시스템',
      description: '물을 재활용하여 환경 부담을 최소화하는 친환경 양식 기술',
      features: [
        '물 사용량 90% 절약',
        '폐수 배출 제로',
        '에너지 효율 극대화',
        '생태계 보호'
      ],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20water%20recirculation%20system%20in%20aquaculture%20facility%20with%20clear%20blue%20water%20tanks%2C%20filtration%20equipment%2C%20eco-friendly%20technology%2C%20sustainable%20farming%20environment&width=500&height=350&seq=recirculation&orientation=landscape'
    },
    {
      title: '바이오플락 기술',
      description: '유익한 미생물을 활용한 자연 친화적 양식 환경 조성',
      features: [
        '자연 생태계 모방',
        '화학 첨가물 불사용',
        '수질 자정 능력',
        '생물 다양성 증진'
      ],
      image: 'https://readdy.ai/api/search-image?query=Biofloc%20aquaculture%20system%20with%20beneficial%20microorganisms%2C%20natural%20brown%20water%20with%20healthy%20bacteria%2C%20sustainable%20shrimp%20farming%2C%20eco-friendly%20biotechnology&width=500&height=350&seq=biofloc&orientation=landscape'
    },
    {
      title: '재생에너지 활용',
      description: '태양광, 풍력 등 재생에너지를 활용한 탄소중립 양식장 운영',
      features: [
        '태양광 발전 시설',
        '풍력 에너지 활용',
        '탄소 배출 제로',
        '에너지 자립도 향상'
      ],
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20aquaculture%20facility%20with%20solar%20panels%20and%20wind%20turbines%2C%20renewable%20energy%20integration%2C%20green%20technology%2C%20eco-friendly%20shrimp%20farm%20with%20clean%20energy%20systems&width=500&height=350&seq=renewable&orientation=landscape'
    }
  ];

  const benefits = [
    {
      icon: 'ri-water-flash-line',
      title: '수질 보호',
      description: '깨끗한 물 환경 유지로 생태계 보호에 기여',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'ri-leaf-line',
      title: '탄소 중립',
      description: '재생에너지 활용으로 탄소 배출량 최소화',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: 'ri-recycle-line',
      title: '자원 순환',
      description: '폐기물 재활용을 통한 순환경제 실현',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: 'ri-shield-check-line',
      title: '생태계 보전',
      description: '자연 생태계와 조화로운 양식 환경 구축',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const environmentalImpact = [
    { value: '95%', label: '용수 재이용률', description: '순환여과시스템을 통해 달성' },
    { value: '2,500 tCO2', label: '온실가스 감축', description: '재생에너지 사용으로 연간 감축량' },
    { value: '100%', label: '항생제 미사용', description: '바이오플락 기술로 질병 예방' },
    { value: '30% ↑', label: '에너지 효율', description: '스마트 AI 제어를 통한 최적화' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              친환경 양식
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버는 지속가능한 미래를 위해 해양 생태계를 보전하고, 환경에 미치는 영향을 최소화하는 친환경 양식 기술을 선도합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Eco Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">핵심 친환경 기술</h2>
            <p className="mt-4 text-lg text-gray-600">컬리버는 혁신적인 기술을 통해 자원 순환과 에너지 효율을 극대화합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecoTechnologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
                <img src={tech.image} alt={tech.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{tech.description}</p>
                  <ul className="space-y-2 text-sm">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">기대 효과</h2>
            <p className="mt-4 text-lg text-gray-600">친환경 기술 도입은 환경 보호를 넘어 경제적, 사회적 가치를 창출합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 ${benefit.bgColor}`}>
                  <i className={`ri-2x ${benefit.icon} ${benefit.color}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">환경적 성과</h2>
            <p className="mt-4 text-lg text-green-100">숫자로 증명하는 컬리버의 친환경 양식 성과입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {environmentalImpact.map((item, index) => (
              <div key={index} className="bg-green-700 p-8 rounded-lg">
                <p className="text-5xl font-bold">{item.value}</p>
                <h4 className="text-lg font-semibold mt-2 text-green-100">{item.label}</h4>
                <p className="text-sm text-green-200 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            지구를 생각하는 양식, 컬리버와 함께하세요
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            컬리버의 친환경 기술과 솔루션이 궁금하시다면 언제든지 문의해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/solutions" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              솔루션 보기
            </a>
            <a href="/pr/customer-inquiry" className="inline-block bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoFriendlyAquaculture;
