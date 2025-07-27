'use client';

import React from 'react';

const EsgSocial = () => {
  const programs = [
    {
      title: '지역 일자리 창출',
      description: '지역사회와 함께 성장하는 양질의 일자리 제공',
      achievements: [
        '신규 채용 150명',
        '지역 인재 우선 채용 80%',
        '직업 교육 프로그램 운영',
        '중소기업 협력 확대'
      ],
      image: 'https://readdy.ai/api/search-image?query=Local%20community%20job%20creation%20program%20with%20diverse%20workers%20in%20aquaculture%20facility%2C%20training%20sessions%2C%20professional%20development%2C%20happy%20employees%20working%20together&width=500&height=350&seq=job-creation&orientation=landscape'
    },
    {
      title: '교육 지원 프로그램',
      description: '수산업 전문 인력 양성을 위한 교육 및 연구 지원',
      achievements: [
        '대학 연구 지원 10억원',
        '장학금 지급 100명',
        '기술 교육 과정 운영',
        '인턴십 프로그램 제공'
      ],
      image: 'https://readdy.ai/api/search-image?query=Educational%20support%20program%20with%20students%20learning%20aquaculture%20technology%2C%20modern%20classroom%20with%20marine%20biology%20equipment%2C%20scholarship%20recipients%2C%20professional%20training&width=500&height=350&seq=education&orientation=landscape'
    },
    {
      title: '사회 공헌 활동',
      description: '지역사회 발전과 취약계층 지원을 위한 다양한 활동',
      achievements: [
        '취약계층 일자리 50개',
        '지역 문화 행사 후원',
        '재해 복구 지원 5억원',
        '환경 정화 활동 참여'
      ],
      image: 'https://readdy.ai/api/search-image?query=Community%20service%20activities%20with%20volunteers%20helping%20local%20residents%2C%20environmental%20cleanup%2C%20cultural%20event%20sponsorship%2C%20social%20contribution%20programs&width=500&height=350&seq=social-contribution&orientation=landscape'
    }
  ];

  const partnerships = [
    {
      icon: 'ri-government-line',
      title: '지방자치단체',
      description: '지역 발전을 위한 협력 사업 추진',
      projects: ['지역 특산품 개발', '관광 상품 기획', '인프라 구축 지원']
    },
    {
      icon: 'ri-school-line',
      title: '교육기관',
      description: '산학협력을 통한 인재 양성',
      projects: ['공동 연구 프로젝트', '현장 실습 프로그램', '기술 이전']
    },
    {
      icon: 'ri-heart-line',
      title: '사회복지기관',
      description: '취약계층 지원 및 복지 증진',
      projects: ['일자리 제공', '후원 및 기부', '봉사 활동']
    },
    {
      icon: 'ri-building-2-line',
      title: '지역 기업',
      description: '상생 협력을 통한 동반 성장',
      projects: ['협력업체 지원', '기술 공유', '공동 마케팅']
    }
  ];

  const impactStats = [
    { value: '250+', label: '신규 일자리', description: '지역사회 고용 창출' },
    { value: '1,500명', label: '교육 지원', description: '미래 인재 양성' },
    { value: '50억+', label: '사회 투자', description: '지역 발전 기여' },
    { value: '98%', label: '직원 만족도', description: '행복한 일터 조성' },
  ];

  const futurePlans = [
    { title: '글로벌 장학사업 확대', description: '개발도상국 수산 인재 양성을 위한 글로벌 장학 프로그램을 확대합니다.' },
    { title: '어촌마을 자립 지원', description: 'ICT 기술을 보급하여 어촌 마을의 경제적 자립과 생활 환경 개선을 지원합니다.' },
    { title: '해양생태계 보전 캠페인', description: '해양 쓰레기 문제 해결과 생물다양성 보전을 위한 대국민 캠페인을 전개합니다.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              사회적 책임
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버는 지역사회와 함께 성장하며, 모든 이해관계자와의 상생을 통해 지속가능한 사회적 가치를 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">주요 사회공헌 프로그램</h2>
            <p className="mt-4 text-lg text-gray-600">컬리버는 지역사회 발전을 위해 다각적인 노력을 기울이고 있습니다.</p>
          </div>
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <img src={program.image} alt={program.title} className="rounded-lg shadow-lg object-cover w-full h-full" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">상생 파트너십</h2>
            <p className="mt-4 text-lg text-gray-600">다양한 이해관계자와의 협력을 통해 사회적 시너지를 창출합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-blue-100">
                  <i className={`ri-2x ${partner.icon} text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">사회적 임팩트</h2>
            <p className="mt-4 text-lg text-blue-100">컬리버가 만들어낸 긍정적인 사회 변화입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-blue-700 p-8 rounded-lg">
                <p className="text-5xl font-bold">{stat.value}</p>
                <h4 className="text-lg font-semibold mt-2 text-blue-100">{stat.label}</h4>
                <p className="text-sm text-blue-200 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">미래 계획</h2>
            <p className="mt-4 text-lg text-gray-600">더 나은 사회를 만들기 위한 컬리버의 약속입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futurePlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            함께 만들어가는 더 나은 세상
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            컬리버의 사회적 책임 활동에 대한 여러분의 제안과 참여를 기다립니다.
          </p>
          <a href="/pr/customer-inquiry" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            파트너십 제안
          </a>
        </div>
      </section>
    </div>
  );
};

export default EsgSocial;
