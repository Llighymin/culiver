'use client';

import React from 'react';

const ResearchFacilities = () => {
  const facilities = [
    {
      name: '바이오테크놀로지 연구소',
      area: '1,200㎡',
      established: '2021년',
      description: '미생물학 연구 및 프로바이오틱스 개발을 위한 최첨단 연구시설',
      equipment: [
        '고성능 발효조 시설',
        '무균 배양실',
        '분자생물학 실험실',
        '미생물 보관 시설'
      ],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20biotechnology%20research%20laboratory%20with%20fermentation%20tanks%2C%20sterile%20cultivation%20rooms%2C%20molecular%20biology%20equipment%2C%20clean%20white%20environment%20with%20blue%20accents&width=600&height=400&seq=biotech-lab&orientation=landscape'
    },
    {
      name: '양식기술 실증센터',
      area: '2,500㎡',
      established: '2020년',
      description: '바이오플락 양식 기술 개발 및 실증을 위한 대규모 실험 양식장',
      equipment: [
        '바이오플락 실험조',
        '자동화 모니터링 시스템',
        '수질 분석 장비',
        '환경 제어 시설'
      ],
      image: 'https://readdy.ai/api/search-image?query=Large-scale%20aquaculture%20research%20facility%20with%20biofloc%20tanks%2C%20automated%20monitoring%20systems%2C%20water%20quality%20testing%20equipment%2C%20modern%20industrial%20aquaculture%20environment&width=600&height=400&seq=aqua-center&orientation=landscape'
    },
    {
      name: '분석검사센터',
      area: '800㎡',
      established: '2022년',
      description: '수산생물 질병 진단 및 수질 분석을 위한 전문 검사시설',
      equipment: [
        'PCR 분석기',
        '현미경 시설',
        '생화학 분석기',
        '병리 검사실'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20analytical%20testing%20center%20with%20PCR%20equipment%2C%20microscopes%2C%20biochemical%20analyzers%2C%20pathology%20laboratory%2C%20clinical%20research%20environment&width=600&height=400&seq=analysis-center&orientation=landscape'
    },
    {
      name: 'IoT 기술개발실',
      area: '400㎡',
      established: '2023년',
      description: '스마트 양식을 위한 IoT 및 AI 기술 개발 전용 연구공간',
      equipment: [
        'IoT 센서 개발 장비',
        '데이터 분석 서버',
        '프로토타입 제작 시설',
        '네트워크 테스트 환경'
      ],
      image: 'https://readdy.ai/api/search-image?query=IoT%20technology%20development%20laboratory%20with%20sensor%20equipment%2C%20data%20analysis%20servers%2C%20prototype%20manufacturing%20tools%2C%20smart%20technology%20research%20environment&width=600&height=400&seq=iot-lab&orientation=landscape'
    },
    {
      name: '제품생산시설',
      area: '1,800㎡',
      established: '2019년',
      description: 'GMP 기준의 프로바이오틱스 및 사료첨가제 생산 시설',
      equipment: [
        '대량 생산 발효조',
        '건조 및 포장 라인',
        '품질관리 시설',
        '원료 저장 창고'
      ],
      image: 'https://readdy.ai/api/search-image?query=GMP%20standard%20production%20facility%20with%20large%20fermentation%20tanks%2C%20drying%20and%20packaging%20lines%2C%20quality%20control%20systems%2C%20clean%20manufacturing%20environment&width=600&height=400&seq=production-facility&orientation=landscape'
    }
  ];

  const equipment = [
    {
      category: '미생물 연구 장비',
      items: [
        { name: '고속 원심분리기', specs: 'Beckman Coulter Avanti J-26S XP' },
        { name: '실시간 PCR 시스템', specs: 'Applied Biosystems 7500 Fast' },
        { name: '발효조 시스템', specs: '500L 자동제어 발효조 5대' },
        { name: '동결건조기', specs: 'Christ Alpha 2-4 LSCbasic' }
      ]
    },
    {
      category: '양식 연구 장비',
      items: [
        { name: '수질 분석기', specs: 'HACH DR3900 분광광도계' },
        { name: '용존산소 측정기', specs: 'YSI ProODO 광학센서' },
        { name: '자동급이기', specs: '프로그래밍 자동급이 시스템' },
        { name: '현미경 시스템', specs: 'Olympus CX23 생물현미경' }
      ]
    },
    {
      category: 'IoT/AI 개발 장비',
      items: [
        { name: 'AI 서버', specs: 'NVIDIA DGX Station A100' },
        { name: '무선 센서 모듈', specs: 'LoRaWAN 기반 센서 네트워크' },
        { name: '데이터 수집 장치', specs: '실시간 모니터링 시스템' },
        { name: '클라우드 인프라', specs: 'AWS 기반 데이터 처리 환경' }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">연구시설</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              최첨단 연구 인프라
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Culiver는 혁신적인 연구개발을 뒷받침하는 최신 연구시설과 장비를 갖추고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Facility Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              연구시설 현황
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              총 5개의 전문 연구시설에서 체계적인 연구개발이 진행됩니다
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">6,700㎡</div>
              <div className="text-gray-700 font-semibold">총 연구시설 면적</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5개소</div>
              <div className="text-gray-700 font-semibold">전문 연구시설</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">150억원</div>
              <div className="text-gray-700 font-semibold">시설 투자 규모</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">35명</div>
              <div className="text-gray-700 font-semibold">연구 인력</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 연구시설
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              각 분야별 전문 연구시설과 첨단 장비를 소개합니다
            </p>
          </div>

          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{facility.name}</h3>
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {facility.established}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <i className="ri-building-line text-purple-600 mr-3"></i>
                        <div>
                          <div className="text-sm text-gray-500">면적</div>
                          <div className="font-semibold">{facility.area}</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <i className="ri-calendar-line text-purple-600 mr-3"></i>
                        <div>
                          <div className="text-sm text-gray-500">설립</div>
                          <div className="font-semibold">{facility.established}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{facility.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">주요 장비</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {facility.equipment.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                            <span className="text-gray-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 연구 장비
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최첨단 연구 장비로 정확하고 신뢰성 있는 연구 결과를 도출합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-purple-600 pl-4">
                      <div className="font-semibold text-gray-900 mb-1">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.specs}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                안전 및 품질 관리
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mr-4 mt-1">
                    <i className="ri-shield-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">안전 관리 시스템</h3>
                    <p className="text-gray-600">ISO 45001 기반의 체계적인 안전보건 관리 시스템 운영</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mr-4 mt-1">
                    <i className="ri-award-line text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">품질 인증</h3>
                    <p className="text-gray-600">GMP, ISO 9001 등 국제 품질 표준 인증 획득</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mr-4 mt-1">
                    <i className="ri-recycle-line text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">환경 친화적 운영</h3>
                    <p className="text-gray-600">친환경 에너지 사용 및 폐기물 최소화 정책 시행</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mr-4 mt-1">
                    <i className="ri-user-settings-line text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 인력 교육</h3>
                    <p className="text-gray-600">정기적인 안전 교육 및 전문성 향상 프로그램 운영</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Laboratory%20safety%20and%20quality%20management%20with%20safety%20equipment%2C%20quality%20control%20systems%2C%20professional%20safety%20protocols%2C%20clean%20research%20environment&width=600&height=500&seq=safety-quality&orientation=landscape"
                  alt="안전 및 품질 관리"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Tour */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              시설 견학 안내
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버의 연구시설을 직접 확인하고 싶으시다면 견학을 신청해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-calendar-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">견학 신청</h3>
              <p className="text-gray-600">
                온라인 또는 전화를 통해 
                견학 일정을 사전 예약
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-walk-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">시설 투어</h3>
              <p className="text-gray-600">
                전문 안내자와 함께 
                각 연구시설을 둘러보기
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white rounded-full mx-auto mb-6">
                <i className="ri-presentation-line text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">기술 설명</h3>
              <p className="text-gray-600">
                연구진의 기술 설명 및 
                질의응답 시간
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">견학 안내</h3>
              <div className="text-left space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">견학 시간:</span>
                  <span>평일 오전 10시 ~ 오후 4시</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">소요 시간:</span>
                  <span>약 2시간</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">참가 인원:</span>
                  <span>최대 15명</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">예약 필수:</span>
                  <span>3일 전 사전 예약</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchFacilities;
