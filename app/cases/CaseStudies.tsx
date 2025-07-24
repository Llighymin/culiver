'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: '중소 식당 체인 A사',
      industry: '외식업',
      scale: '전국 25개 매장',
      period: '2023년 3월 - 현재',
      challenge: '매장별 폐기물 처리 비용 부담 및 위생 관리 어려움',
      solution: 'GW-S20 소형 처리기 25대 일괄 도입',
      results: {
        cost: '월 처리비용 65% 절감',
        efficiency: '위생 점수 20% 향상',
        satisfaction: '매장 만족도 95%',
        environment: '악취 민원 0건'
      },
      image: 'https://readdy.ai/api/search-image?query=Small%20restaurant%20chain%20multiple%20locations%2C%20franchise%20restaurant%20interiors%2C%20modern%20dining%20establishments%2C%20food%20service%20chain%20operations%2C%20commercial%20kitchen%20facilities%2C%20restaurant%20chain%20success%20story&width=400&height=250&seq=restaurant-chain&orientation=landscape'
    },
    {
      title: '대학교 B캠퍼스',
      industry: '교육기관',
      scale: '학생 15,000명',
      period: '2023년 9월 - 현재',
      challenge: '대량의 급식 폐기물 처리 및 학생 불만 해결',
      solution: 'GW-M100 중형 처리기 3대 설치 및 통합 관리',
      results: {
        cost: '연간 운영비 40% 절감',
        efficiency: '처리 효율 85% 향상',
        satisfaction: '학생 만족도 92%',
        environment: '캠퍼스 환경 개선'
      },
      image: 'https://readdy.ai/api/search-image?query=University%20campus%20cafeteria%20facility%2C%20large%20student%20dining%20hall%2C%20modern%20educational%20institution%20food%20service%2C%20campus%20dining%20operations%2C%20university%20food%20management%20system&width=400&height=250&seq=university-case&orientation=landscape'
    },
    {
      title: '제조업체 C공장',
      industry: '식품 제조업',
      scale: '직원 500명',
      period: '2022년 12월 - 현재',
      challenge: '생산 과정 중 발생하는 유기성 폐기물 처리',
      solution: 'GW-L1000 대형 시설 맞춤 설계 및 설치',
      results: {
        cost: '처리 비용 75% 절감',
        efficiency: '생산성 15% 향상',
        satisfaction: '직원 만족도 98%',
        environment: '환경 규제 완벽 준수'
      },
      image: 'https://readdy.ai/api/search-image?query=Food%20manufacturing%20plant%20facility%2C%20industrial%20food%20processing%20factory%2C%20modern%20production%20facility%2C%20food%20industry%20manufacturing%2C%20industrial%20waste%20processing%20system%2C%20factory%20operations&width=400&height=250&seq=factory-case&orientation=landscape'
    },
    {
      title: '호텔 D리조트',
      industry: '호텔업',
      scale: '객실 300개',
      period: '2023년 6월 - 현재',
      challenge: '고급 서비스 환경 유지 및 환경 책임 실천',
      solution: 'GW-M100 고급형 처리기 2대 설치',
      results: {
        cost: '운영비 50% 절감',
        efficiency: '서비스 효율 향상',
        satisfaction: '고객 만족도 96%',
        environment: '친환경 호텔 인증 획득'
      },
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20resort%20facility%2C%20high-end%20hospitality%20venue%2C%20premium%20hotel%20dining%20areas%2C%20upscale%20resort%20kitchen%20facilities%2C%20luxury%20accommodation%20services%2C%20hotel%20restaurant%20operations&width=400&height=250&seq=hotel-case&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            다양한 업종별 적용 사례
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 규모와 업종에서 검증된 그린웨일 솔루션의 성과를 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#00427A] mb-1">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{study.industry}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{study.scale}</div>
                    <div>{study.period}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">과제</p>
                    <p className="text-sm text-gray-800">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">솔루션</p>
                    <p className="text-sm text-gray-800">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-[#4CAF50] font-semibold text-sm">{study.results.cost}</div>
                    <div className="text-gray-600 text-xs">비용 절감</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4CAF50] font-semibold text-sm">{study.results.efficiency}</div>
                    <div className="text-gray-600 text-xs">효율성</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4CAF50] font-semibold text-sm">{study.results.satisfaction}</div>
                    <div className="text-gray-600 text-xs">만족도</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#4CAF50] font-semibold text-sm">{study.results.environment}</div>
                    <div className="text-gray-600 text-xs">환경</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}