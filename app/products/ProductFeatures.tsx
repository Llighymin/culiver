'use client';

export default function ProductFeatures() {
  const features = [
    {
      title: '24시간 완전 소멸',
      description: '특화된 미생물 기술로 유기성 폐기물을 24시간 내에 완전히 분해하여 부피를 90% 이상 줄입니다.',
      icon: 'ri-time-line',
      image: 'https://readdy.ai/api/search-image?query=Time-lapse%20visualization%20of%20organic%20waste%20decomposition%20process%2C%20before%20and%20after%20comparison%2C%20biological%20processing%20stages%2C%20scientific%20laboratory%20environment%2C%20microscopic%20view%20of%20decomposition%2C%20clean%20technical%20background&width=500&height=300&seq=feature-1&orientation=landscape'
    },
    {
      title: '무음폐수 무악취',
      description: '소음 없는 조용한 작동과 냄새 없는 쾌적한 환경을 제공하여 어떤 장소에서도 설치 가능합니다.',
      icon: 'ri-volume-mute-line',
      image: 'https://readdy.ai/api/search-image?query=Silent%20operation%20waste%20processing%20equipment%20in%20clean%20modern%20kitchen%2C%20no%20noise%20no%20odor%20indicators%2C%20peaceful%20working%20environment%2C%20modern%20appliance%20design%2C%20professional%20kitchen%20setting%20with%20clean%20air%20quality&width=500&height=300&seq=feature-2&orientation=landscape'
    },
    {
      title: '자원 순환 시스템',
      description: '처리 후 생성되는 잔존물을 고품질 유기질 비료로 재활용하여 완전한 자원 순환을 실현합니다.',
      icon: 'ri-recycle-line',
      image: 'https://readdy.ai/api/search-image?query=Circular%20economy%20waste%20recycling%20system%2C%20organic%20waste%20transformation%20into%20fertilizer%2C%20green%20sustainable%20process%2C%20resource%20recovery%20cycle%2C%20environmental%20biotechnology%2C%20clean%20production%20facility&width=500&height=300&seq=feature-3&orientation=landscape'
    },
    {
      title: '스마트 IoT 제어',
      description: '실시간 모니터링과 원격 제어가 가능한 IoT 시스템으로 편리하고 효율적인 관리를 지원합니다.',
      icon: 'ri-smartphone-line',
      image: 'https://readdy.ai/api/search-image?query=Smart%20IoT%20control%20system%20for%20waste%20management%2C%20digital%20dashboard%20with%20real-time%20monitoring%2C%20mobile%20app%20interface%2C%20remote%20control%20technology%2C%20modern%20industrial%20automation%2C%20smart%20factory%20environment&width=500&height=300&seq=feature-4&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            핵심 기술 특징
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            그린웨일만의 독보적인 기술력으로 구현된 혁신적인 기능들
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00427A] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={feature.image}
                  alt={feature.title}
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