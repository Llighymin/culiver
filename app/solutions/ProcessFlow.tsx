'use client';

export default function ProcessFlow() {
  const processSteps = [
    {
      step: '01',
      title: '현장 조사 및 분석',
      description: '고객의 폐기물 발생량, 설치 공간, 운영 환경을 정밀 분석합니다.',
      icon: 'ri-search-line'
    },
    {
      step: '02',
      title: '맞춤형 설계',
      description: '분석 결과를 바탕으로 최적의 용량과 사양의 BESPOKE 설계를 진행합니다.',
      icon: 'ri-pencil-ruler-line'
    },
    {
      step: '03',
      title: '제작 및 품질 검사',
      description: '엄격한 품질 관리 하에 제작하고 ISO 기준에 따른 검사를 실시합니다.',
      icon: 'ri-settings-line'
    },
    {
      step: '04',
      title: '설치 및 시운전',
      description: '전문 기술진이 현장에 설치하고 정상 작동을 확인합니다.',
      icon: 'ri-tools-line'
    },
    {
      step: '05',
      title: '교육 및 운영 지원',
      description: '운영자 교육을 실시하고 IoT 시스템 사용법을 안내합니다.',
      icon: 'ri-graduation-cap-line'
    },
    {
      step: '06',
      title: '지속적인 A/S',
      description: '24/7 원격 모니터링과 정기적인 점검으로 최적의 성능을 유지합니다.',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            솔루션 구축 프로세스
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            체계적이고 전문적인 6단계 프로세스로 완벽한 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div className="w-12 h-12 bg-[#00427A] rounded-full flex items-center justify-center">
                  <i className={`${step.icon} text-white text-xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#00427A] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#00427A] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">전체 프로세스 소요 시간</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">1-2주</div>
              <div>설계 및 제작</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">2-3일</div>
              <div>설치 및 시운전</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">평생</div>
              <div>A/S 지원</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}