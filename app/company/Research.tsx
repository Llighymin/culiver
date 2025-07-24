'use client';

export default function Research() {
  const researchAreas = [
    {
      title: '미생물 균주 개발',
      description: '특화된 미생물 균주 개발 및 배양 기술로 24시간 내 완전 분해 실현',
      icon: 'ri-microscope-line'
    },
    {
      title: '무음폐수 기술',
      description: '소음과 폐수가 전혀 발생하지 않는 친환경 처리 기술',
      icon: 'ri-drop-line'
    },
    {
      title: '자원 순환 시스템',
      description: '잔존물을 고품질 비료로 재활용하는 완전한 순환 구조',
      icon: 'ri-recycle-line'
    },
    {
      title: 'IoT 통합 관리',
      description: '원격 모니터링과 자동 제어가 가능한 스마트 시스템',
      icon: 'ri-smartphone-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            기업부설 연구소
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            지속적인 R&D 투자로 업계 최고 수준의 기술력을 확보하고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="flex items-start p-6 bg-[#F1F3F4] rounded-lg">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className={`${area.icon} text-xl text-white`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#00427A] mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#00427A] text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">15+</div>
              <div className="text-lg">보유 특허</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">10+</div>
              <div className="text-lg">연구 인력</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">24H</div>
              <div className="text-lg">완전 소멸</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}