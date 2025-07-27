'use client';

import React, { useState } from 'react';

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b last:border-b-0">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={`text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </div>
      {isOpen && (
        <div className="px-2 pb-5 bg-white">
          <div className="text-gray-600 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

const EsgEthical = () => {
  const principles = [
    {
      title: '투명성',
      description: '모든 경영 활동을 투명하게 공개하고 이해관계자와 소통',
      details: [
        '경영 정보 공시',
        '의사결정 과정 투명화',
        '재무 정보 공개',
        '정기 보고서 발간'
      ],
      icon: 'ri-eye-line',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: '공정성',
      description: '모든 이해관계자에게 공정한 기회와 대우를 보장',
      details: [
        '공정한 채용 절차',
        '협력업체 공정 거래',
        '성과 평가 투명성',
        '차별 금지 정책'
      ],
      icon: 'ri-scales-line',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: '책임감',
      description: '사회적 책임을 다하며 지속 가능한 경영을 추구',
      details: [
        '환경 보호 의무',
        '지역사회 기여',
        '고객 안전 보장',
        '법규 준수 철저'
      ],
      icon: 'ri-shield-check-line',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: '정직성',
      description: '진실하고 정직한 소통으로 신뢰받는 기업 문화 구축',
      details: [
        '정확한 정보 제공',
        '약속 이행',
        '거짓 없는 마케팅',
        '진실한 보고'
      ],
      icon: 'ri-heart-line',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const policies = [
    {
      title: '부패방지 정책',
      description: '모든 형태의 부패와 뇌물을 금지하는 엄격한 정책',
      measures: [
        '뇌물 수수 금지',
        '이해충돌 방지',
        '선물 수령 제한',
        '정기 교육 실시'
      ]
    },
    {
      title: '공정거래 정책',
      description: '협력업체와의 상생을 위한 공정한 거래 관계 구축',
      measures: [
        '공정한 계약 조건',
        '대금 지급 준수',
        '기술 보호',
        '상생 협력 프로그램'
      ]
    },
    {
      title: '인권보호 정책',
      description: '모든 구성원의 인권을 존중하고 보호하는 정책',
      measures: [
        '차별 금지',
        '괴롭힘 방지',
        '근로자 권익 보호',
        '다양성 존중'
      ]
    },
    {
      title: '정보보호 정책',
      description: '고객과 회사의 중요 정보를 안전하게 보호',
      measures: [
        '개인정보 보호',
        '기밀정보 관리',
        '사이버 보안',
        '정보 접근 통제'
      ]
    }
  ];

  const complianceSystem = [
    { icon: 'ri-organization-chart', title: '윤리경영위원회', description: '전사적 윤리경영 정책을 수립하고 주요 의사결정을 수행합니다.' },
    { icon: 'ri-user-search-line', title: '준법감시인', description: '독립적인 위치에서 법규 준수 여부를 감시하고 경영진에 보고합니다.' },
    { icon: 'ri-team-line', title: '임직원 교육', description: '정기적인 윤리 교육을 통해 모든 임직원의 윤리 의식을 제고합니다.' },
  ];

  const reportStats = [
    { value: '100%', label: '처리율', description: '접수된 모든 제보 처리' },
    { value: '95%', label: '만족도', description: '제보자 보호 및 피드백 만족도' },
    { value: '0건', label: '보복행위', description: '제보자에 대한 불이익 없음' },
    { value: '24시간', label: '상담 채널', description: '상시 운영되는 제보 채널' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              윤리경영
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버는 투명하고 공정한 경영 활동을 통해 모든 이해관계자로부터 신뢰받는 기업이 되기 위해 노력합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Ethics Principles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">윤리경영 4대 원칙</h2>
            <p className="mt-4 text-lg text-gray-600">컬리버의 모든 의사결정과 행동의 기준이 되는 핵심 가치입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 ${principle.bgColor}`}>
                  <i className={`ri-2x ${principle.icon} ${principle.color}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Policies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">주요 윤리 정책</h2>
            <p className="mt-4 text-lg text-gray-600">체계적인 정책을 통해 윤리경영을 실천하고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{policy.title}</h3>
                <p className="text-gray-600 mb-6">{policy.description}</p>
                <ul className="space-y-2">
                  {policy.measures.map((measure, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {measure}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance System Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">준법경영 시스템</h2>
            <p className="mt-4 text-lg text-gray-600">독립적이고 효율적인 시스템을 통해 윤리경영을 감독하고 지원합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceSystem.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-purple-100">
                  <i className={`ri-2x ${item.icon} text-purple-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting System Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">부정행위 신고 및 제보자 보호</h2>
              <p className="text-lg text-gray-600 mb-8">
                컬리버는 비윤리적 행위나 부정행위에 대한 제보를 장려하며, 제보자의 신원을 철저히 보호합니다.
                독립적인 외부 전문기관을 통해 24시간 신고 채널을 운영하고 있으며, 접수된 모든 내용은 공정하고 신속하게 처리됩니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  온라인 신고센터
                </a>
                <a href="#" className="inline-block bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                  제보자 보호 정책
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {reportStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow">
                  <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
                  <h4 className="text-md font-semibold mt-1 text-gray-800">{stat.label}</h4>
                  <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            투명하고 신뢰받는 기업, 컬리버
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            윤리적 경영으로 모든 이해관계자와 함께 성장하는 기업이 되겠습니다.
          </p>
          <a href="/ir/corporate-governance" className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors">
            기업지배구조 보기
          </a>
        </div>
      </section>
    </div>
  );
};

export default EsgEthical;
