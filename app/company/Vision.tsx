'use client';

export default function Vision() {
  const values = [
    {
      title: '환경적 책임',
      description: '유기성 폐기물 문제를 근본적으로 해결하여 지속 가능한 녹색 환경을 만드는 것을 최우선 사명으로 삼습니다.',
      icon: 'ri-leaf-line'
    },
    {
      title: '실용적 혁신',
      description: 'R&D를 통해 세계 최고 수준의 기술을 개발하고, 24시간 내 소멸과 같은 실용적인 솔루션으로 구현합니다.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: '고객 중심',
      description: '모든 고객의 고유한 요구에 귀 기울이며, BESPOKE 맞춤 설계를 통해 최고의 경제성과 편리성을 제공합니다.',
      icon: 'ri-user-heart-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            우리의 핵심 가치
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            그린웨일이 고객과 사회에 약속하는 중심 가치입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-[#F1F3F4] rounded-lg">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#00427A] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#00427A] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">브랜드 아이덴티티</h3>
          <p className="text-lg mb-2">독보적 기술 혁신 × 완결성 높은 친환경 × 검증된 효율성과 신뢰성</p>
          <div className="text-[#4CAF50] font-semibold text-lg">
            "녹색의 우리 삶의 터전은 녹색 고래 그린웨일이 지키겠습니다!"
          </div>
        </div>
      </div>
    </section>
  );
}