'use client';

export default function SuccessStories() {
  const stories = [
    {
      company: '풀무원',
      industry: '식품 제조업',
      location: '경기도 용인시',
      challenge: '대량의 유기성 폐기물 처리 비용 부담과 환경 규제 준수 어려움',
      solution: 'GW-L1000 대형 처리 시설 도입 및 IoT 통합 관리 시스템 구축',
      results: ['처리 비용 70% 절감', '환경 규제 완벽 준수', '악취 민원 100% 해결', '처리 효율 90% 향상'],
      testimonial: '그린웨일의 솔루션 덕분에 폐기물 처리 비용이 대폭 줄어들었고, 무엇보다 냄새 문제가 완전히 해결되어 직원들의 작업 환경이 크게 개선되었습니다.',
      person: '김영수 시설관리팀장',
      image: 'https://readdy.ai/api/search-image?query=Large-scale%20food%20manufacturing%20facility%20with%20waste%20processing%20system%2C%20modern%20industrial%20plant%2C%20Pulmuone%20company%20building%2C%20clean%20food%20production%20environment%2C%20industrial%20waste%20management%20success&width=500&height=300&seq=pulmuone-case&orientation=landscape'
    },
    {
      company: '서울시 강남구청',
      industry: '지자체',
      location: '서울시 강남구',
      challenge: '지역 내 음식물 쓰레기 처리 및 주민 민원 해결',
      solution: '구청 시설 내 GW-L1000 설치 및 지역 음식점 연계 시스템 구축',
      results: ['주민 민원 80% 감소', '처리 용량 3배 증가', '운영비 50% 절감', '환경 만족도 95% 향상'],
      testimonial: '24시간 내 완전 소멸 기술로 대용량 처리가 가능해졌고, IoT 시스템 덕분에 관리가 매우 편리합니다. 주민들의 만족도도 크게 높아졌습니다.',
      person: '박민정 환경과장',
      image: 'https://readdy.ai/api/search-image?query=Seoul%20Gangnam%20District%20government%20building%20with%20municipal%20waste%20processing%20facility%2C%20modern%20public%20administration%20building%2C%20urban%20waste%20management%20system%2C%20local%20government%20environmental%20services&width=500&height=300&seq=gangnam-case&orientation=landscape'
    },
    {
      company: '삼성웰스토리',
      industry: '급식 서비스업',
      location: '전국 사업장',
      challenge: '전국 다수 사업장의 통합 폐기물 관리 및 효율성 향상',
      solution: '사업장별 맞춤형 GW-M100 설치 및 통합 모니터링 시스템 구축',
      results: ['전국 사업장 통합 관리', '운영 효율 85% 향상', '유지보수 비용 60% 절감', '표준화된 관리 프로세스 확립'],
      testimonial: '여러 업체를 검토했지만 그린웨일만이 우리의 복잡한 요구사항을 완벽하게 해결해줬습니다. BESPOKE 설계와 A/S 서비스가 정말 탁월합니다.',
      person: '이창호 운영부장',
      image: 'https://readdy.ai/api/search-image?query=Samsung%20Welstory%20corporate%20cafeteria%20facility%2C%20modern%20employee%20dining%20facility%2C%20large-scale%20food%20service%20operation%2C%20corporate%20catering%20kitchen%2C%20professional%20food%20service%20management&width=500&height=300&seq=samsung-case&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            대표 성공 사례
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            업계 선도 기업들의 실제 도입 사례와 성과를 확인해보세요
          </p>
        </div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-[#F1F3F4] rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
                      <i className="ri-building-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#00427A]">{story.company}</h3>
                      <p className="text-gray-600">{story.industry} • {story.location}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#00427A] mb-2">과제</h4>
                      <p className="text-gray-600 text-sm">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#00427A] mb-2">솔루션</h4>
                      <p className="text-gray-600 text-sm">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#00427A] mb-2">성과</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                            <span className="text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 italic mb-2">"{story.testimonial}"</p>
                      <p className="text-[#00427A] font-semibold text-sm">- {story.person}</p>
                    </div>
                  </div>
                </div>

                <div className="h-96 lg:h-auto">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}