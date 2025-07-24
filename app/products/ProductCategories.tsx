'use client';

export default function ProductCategories() {
  const products = [
    {
      name: 'GW-S20',
      category: '소형 식당용',
      capacity: '일일 20kg 처리',
      image: 'https://readdy.ai/api/search-image?query=Compact%20countertop%20food%20waste%20processor%20for%20small%20restaurants%2C%20sleek%20white%20and%20stainless%20steel%20design%2C%20digital%20LED%20display%20panel%2C%20modern%20kitchen%20appliance%2C%20eco-friendly%20waste%20management%20device%2C%20clean%20professional%20background&width=400&height=300&seq=gw-s20&orientation=landscape',
      features: ['무음 작동', '무악취', '24시간 자동 처리', '간편한 유지보수', '컴팩트 사이즈'],
      price: '문의',
      specs: {
        dimensions: '60 x 40 x 50cm',
        weight: '45kg',
        power: '1.5kW',
        material: 'SUS304 스테인리스 스틸'
      }
    },
    {
      name: 'GW-M100',
      category: '중형 업소용',
      capacity: '일일 100kg 처리',
      image: 'https://readdy.ai/api/search-image?query=Medium-sized%20commercial%20food%20waste%20processor%2C%20robust%20stainless%20steel%20construction%20with%20digital%20control%20interface%2C%20industrial%20kitchen%20equipment%2C%20IoT%20monitoring%20system%20display%2C%20professional%20waste%20management%20solution%2C%20modern%20commercial%20facility%20background&width=400&height=300&seq=gw-m100&orientation=landscape',
      features: ['IoT 모니터링', 'BESPOKE 설계', '에너지 효율성', '원격 관리', '자동 교반 시스템'],
      price: '문의',
      specs: {
        dimensions: '120 x 80 x 100cm',
        weight: '180kg',
        power: '3.5kW',
        material: 'SUS316 스테인리스 스틸'
      }
    },
    {
      name: 'GW-L1000',
      category: '대형 지자체용',
      capacity: '일일 1톤 이상 처리',
      image: 'https://readdy.ai/api/search-image?query=Large-scale%20industrial%20waste%20processing%20facility%2C%20massive%20stainless%20steel%20processing%20equipment%2C%20automated%20conveyor%20systems%2C%20computer%20control%20room%20with%20monitoring%20displays%2C%20municipal%20waste%20management%20plant%2C%20advanced%20biotechnology%20processing%20systems&width=400&height=300&seq=gw-l1000&orientation=landscape',
      features: ['대용량 처리', '완전 자동화', '환경 친화적', '비용 효율성', '통합 관제 시스템'],
      price: '문의',
      specs: {
        dimensions: '500 x 300 x 250cm',
        weight: '2,500kg',
        power: '15kW',
        material: 'SUS316L 스테인리스 스틸'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            제품 라인업
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 규모와 용도에 맞는 맞춤형 제품을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#00427A] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#4CAF50] font-bold text-lg">
                      {product.capacity}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#00427A] mb-2">주요 특징</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#00427A] mb-2">기술 사양</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>크기: {product.specs.dimensions}</div>
                    <div>중량: {product.specs.weight}</div>
                    <div>소비전력: {product.specs.power}</div>
                    <div>재질: {product.specs.material}</div>
                  </div>
                </div>

                <button className="w-full bg-[#00427A] hover:bg-[#003366] text-white py-3 px-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  상세 문의하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}