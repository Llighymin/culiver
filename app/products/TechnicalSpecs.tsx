'use client';

export default function TechnicalSpecs() {
  const specifications = [
    {
      category: '처리 성능',
      items: [
        { name: '처리 시간', value: '24시간 이내' },
        { name: '부피 감소율', value: '90% 이상' },
        { name: '분해 효율', value: '99.9%' },
        { name: '잔존물 비료화', value: '100%' }
      ]
    },
    {
      category: '환경 친화',
      items: [
        { name: '소음 수준', value: '45dB 이하' },
        { name: '악취 발생', value: '0%' },
        { name: '폐수 발생', value: '0%' },
        { name: '유해 물질', value: '무배출' }
      ]
    },
    {
      category: '운영 효율',
      items: [
        { name: '에너지 효율', value: '95% 이상' },
        { name: '자동화 수준', value: '완전 자동' },
        { name: '유지보수 주기', value: '6개월' },
        { name: '수명', value: '15년 이상' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            기술 사양
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            검증된 성능과 신뢰성을 바탕으로 한 상세 기술 사양
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-[#F1F3F4] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#00427A] mb-6 text-center">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-300 last:border-b-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-[#4CAF50]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#00427A] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">맞춤형 설계 서비스</h3>
          <p className="text-lg mb-6">
            모든 제품은 고객의 설치 환경과 요구사항에 맞춘 BESPOKE 설계로 제작됩니다
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">100%</div>
              <div>맞춤 설계</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">24/7</div>
              <div>기술 지원</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4CAF50] mb-2">A/S</div>
              <div>전국 서비스</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}