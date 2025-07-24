'use client';

export default function CompanyHistory() {
  const milestones = [
    {
      year: '2015',
      title: '회사 설립',
      description: '그린웨일 주식회사 설립 및 유기성 폐기물 처리 기술 연구 시작'
    },
    {
      year: '2017',
      title: '기업부설 연구소 설립',
      description: '미생물 기술 전문 연구소 설립, 핵심 기술 개발 본격화'
    },
    {
      year: '2019',
      title: '첫 번째 특허 취득',
      description: '24시간 내 완전 소멸 기술 특허 취득'
    },
    {
      year: '2020',
      title: 'ISO 인증 획득',
      description: 'ISO 9001, ISO 14001 인증 획득으로 품질 및 환경 관리 체계 구축'
    },
    {
      year: '2021',
      title: '대기업 납품 시작',
      description: '풀무원, 삼성웰스토리 등 대기업 납품 시작'
    },
    {
      year: '2022',
      title: '지자체 공급 확대',
      description: '서울시 강남구청을 비롯한 전국 지자체 공급 확대'
    },
    {
      year: '2023',
      title: 'IoT 시스템 도입',
      description: '스마트 IoT 기술을 적용한 차세대 제품 출시'
    },
    {
      year: '2024',
      title: '친환경 기업 인증',
      description: '환경부 친환경 기업 인증 및 녹색 기술 인증 획득'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            그린웨일의 성장 과정
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            10년에 가까운 노하우와 기술력으로 쌓아온 신뢰의 역사
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#4CAF50]"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-[#4CAF50] mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-[#00427A] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
              
              <div className="w-4 h-4 bg-[#4CAF50] rounded-full relative z-10 mx-4"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}