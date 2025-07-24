'use client';

export default function Benefits() {
  const benefits = [
    {
      title: '비용 절감',
      percentage: '70%',
      description: '폐기물 처리 비용을 대폭 절감하여 운영비를 최적화합니다.',
      details: ['폐기물 수수료 절감', '인건비 절약', '운송비 절약', '벌금 위험 제거'],
      icon: 'ri-money-dollar-circle-line'
    },
    {
      title: '환경 개선',
      percentage: '90%',
      description: '냄새와 해충 문제를 해결하여 쾌적한 환경을 조성합니다.',
      details: ['악취 완전 제거', '해충 서식지 차단', '위생 상태 개선', '주변 환경 보호'],
      icon: 'ri-leaf-line'
    },
    {
      title: '효율성 향상',
      percentage: '85%',
      description: '자동화 시스템으로 업무 효율성을 크게 향상시킵니다.',
      details: ['완전 자동화 운영', '실시간 모니터링', '원격 관리 가능', '인력 투입 최소화'],
      icon: 'ri-dashboard-line'
    },
    {
      title: '규제 준수',
      percentage: '100%',
      description: '모든 환경 규제를 완벽히 준수하여 안전한 운영을 보장합니다.',
      details: ['환경 규제 준수', '안전 기준 충족', '인증 취득 지원', '법적 리스크 제거'],
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            솔루션 도입 효과
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            그린웨일 솔루션 도입으로 얻을 수 있는 구체적인 성과입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F1F3F4] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-[#00427A] mb-2">
                {benefit.percentage}
              </div>
              <h3 className="text-xl font-semibold text-[#00427A] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {benefit.description}
              </p>
              <ul className="text-left space-y-1">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#00427A] to-[#4CAF50] text-white p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">투자 회수 기간</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">6개월</div>
                <div className="text-sm">소규모 업소</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1년</div>
                <div className="text-sm">중규모 기업</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2년</div>
                <div className="text-sm">대규모 시설</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}