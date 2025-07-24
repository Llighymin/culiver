'use client';

export default function IndustrySolutions() {
  const solutions = [
    {
      industry: '식당 및 카페',
      description: '소규모 음식점을 위한 컴팩트하고 효율적인 폐기물 처리 솔루션',
      challenges: ['좁은 주방 공간', '냄새 및 위생 문제', '인력 부족', '운영비 부담'],
      solution: '무음무취 소형 처리기로 주방 환경 개선 및 운영비 절감',
      benefits: ['공간 효율성 극대화', '위생 환경 개선', '인건비 절약', '폐기물 수수료 절감'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20restaurant%20kitchen%20with%20compact%20waste%20processing%20equipment%2C%20clean%20professional%20cooking%20environment%2C%20stainless%20steel%20appliances%2C%20efficient%20food%20waste%20management%20system%2C%20hygienic%20commercial%20kitchen%20setup&width=400&height=300&seq=restaurant-solution&orientation=landscape'
    },
    {
      industry: '기업 및 공장',
      description: '대량 폐기물 발생 기업을 위한 자동화된 처리 시스템',
      challenges: ['대용량 처리 필요', '환경 규제 준수', '운영 효율성', '비용 최적화'],
      solution: 'IoT 기반 자동화 시스템으로 효율적인 대량 처리 및 관리',
      benefits: ['완전 자동화 운영', '환경 규제 완벽 준수', '운영비 대폭 절감', '실시간 모니터링'],
      image: 'https://readdy.ai/api/search-image?query=Industrial%20waste%20processing%20facility%20in%20modern%20factory%2C%20automated%20waste%20management%20system%2C%20large-scale%20processing%20equipment%2C%20industrial%20biotechnology%2C%20clean%20manufacturing%20environment%2C%20efficient%20waste%20handling&width=400&height=300&seq=industrial-solution&orientation=landscape'
    },
    {
      industry: '지자체 및 공공기관',
      description: '지역 사회를 위한 대규모 통합 폐기물 관리 시스템',
      challenges: ['대규모 처리 용량', '주민 민원 해결', '예산 효율성', '환경 영향 최소화'],
      solution: '대용량 통합 시설과 스마트 관제 시스템으로 효율적 공공 서비스',
      benefits: ['주민 만족도 향상', '예산 절감 효과', '환경 친화적 운영', '스마트 도시 구현'],
      image: 'https://readdy.ai/api/search-image?query=Municipal%20waste%20processing%20center%2C%20large-scale%20public%20waste%20management%20facility%2C%20government%20environmental%20services%2C%20community%20waste%20processing%20plant%2C%20modern%20public%20infrastructure%2C%20sustainable%20city%20development&width=400&height=300&seq=municipal-solution&orientation=landscape'
    },
    {
      industry: '호텔 및 리조트',
      description: '고객 만족과 환경 책임을 동시에 실현하는 맞춤형 솔루션',
      challenges: ['고객 편의성 확보', '브랜드 이미지 관리', '운영 효율성', '지속가능성'],
      solution: '무음무취 고급형 처리기로 고급 서비스 환경 유지',
      benefits: ['고객 만족도 제고', '브랜드 가치 향상', '운영 효율성 개선', '친환경 이미지 구축'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20kitchen%20with%20high-end%20waste%20processing%20equipment%2C%20premium%20hospitality%20environment%2C%20elegant%20commercial%20kitchen%20design%2C%20sophisticated%20waste%20management%20system%2C%20upscale%20dining%20facility&width=400&height=300&seq=hotel-solution&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            업종별 맞춤 솔루션
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            각 업종의 특성과 요구사항을 완벽히 분석하여 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="bg-[#F1F3F4] p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#00427A] mb-4">
                    {solution.industry}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#00427A] mb-3">주요 과제</h4>
                      <ul className="space-y-2">
                        {solution.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <i className="ri-alert-line text-orange-500 mr-2"></i>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#00427A] mb-3">솔루션 효과</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#4CAF50] text-white rounded-lg">
                    <h4 className="font-semibold mb-2">그린웨일 솔루션</h4>
                    <p className="text-sm">{solution.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <img
                  src={solution.image}
                  alt={solution.industry}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}