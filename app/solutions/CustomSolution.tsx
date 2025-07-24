'use client';

import Link from 'next/link';

export default function CustomSolution() {
  const customFeatures = [
    {
      title: '용량 맞춤 설계',
      description: '일일 처리량에 맞춘 최적 용량 설계',
      icon: 'ri-bar-chart-line'
    },
    {
      title: '공간 최적화',
      description: '설치 공간에 맞춘 치수 및 레이아웃 조정',
      icon: 'ri-ruler-line'
    },
    {
      title: '기능 커스터마이징',
      description: '업종별 특성에 맞춘 기능 추가 및 조정',
      icon: 'ri-settings-4-line'
    },
    {
      title: '통합 시스템',
      description: '기존 시설과의 연동 및 통합 관리 시스템',
      icon: 'ri-links-line'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            맞춤형 솔루션 서비스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            고객의 독특한 요구사항에 완벽히 맞춰진 BESPOKE 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {customFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#00427A] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#00427A] mb-4">
                무료 컨설팅 서비스
              </h3>
              <p className="text-gray-600 mb-6">
                전문 엔지니어가 현장을 방문하여 최적의 솔루션을 제안해드립니다. 
                비용 분석부터 설치 계획까지 모든 과정을 무료로 지원합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#4CAF50] mr-3"></i>
                  현장 방문 조사 및 분석
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#4CAF50] mr-3"></i>
                  맞춤형 솔루션 설계
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#4CAF50] mr-3"></i>
                  투자 효과 분석 보고서
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="ri-check-line text-[#4CAF50] mr-3"></i>
                  시뮬레이션 및 데모 제공
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap inline-block"
              >
                무료 컨설팅 신청
              </Link>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20engineers%20consulting%20with%20clients%20about%20waste%20management%20solutions%2C%20business%20meeting%20in%20modern%20office%2C%20technical%20consultation%2C%20environmental%20engineering%20discussion%2C%20professional%20advisory%20services&width=500&height=400&seq=consulting&orientation=landscape"
                alt="무료 컨설팅 서비스"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}