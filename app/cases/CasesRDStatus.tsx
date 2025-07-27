import React from 'react';
import Link from 'next/link';

const RDStatus = () => {
  const ongoingProjects = [
    {
      title: '차세대 바이오플락 시스템 개발',
      status: '진행중',
      progress: 75,
      period: '2023.03 - 2024.12',
      budget: '15억원',
      objective: 'AI 기반 바이오플락 제어 시스템으로 양식 효율성 극대화',
      achievements: [
        '자동 미생물 균형 제어 알고리즘 개발',
        '생산성 35% 향상 실증',
        '에너지 소비량 20% 절감 달성'
      ],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20biofloc%20system%20development%20with%20AI%20control%20panels%2C%20automated%20monitoring%20equipment%2C%20next-generation%20aquaculture%20technology%2C%20modern%20research%20laboratory%20environment&width=500&height=300&seq=research-1&orientation=landscape'
    },
    {
      title: '새우 전용 프로바이오틱스 신제품 개발',
      status: '진행중',
      progress: 60,
      period: '2023.06 - 2024.08',
      budget: '8억원',
      objective: '흰다리새우 면역력 강화를 위한 맞춤형 프로바이오틱스 개발',
      achievements: [
        '신규 유용균주 3종 발굴',
        '면역력 40% 향상 효과 확인',
        '현장 실증 실험 진행 중'
      ],
      image: 'https://readdy.ai/api/search-image?query=Probiotics%20development%20laboratory%20with%20bacterial%20cultures%2C%20fermentation%20equipment%2C%20microscopic%20analysis%2C%20specialized%20shrimp%20health%20research%2C%20clean%20scientific%20environment&width=500&height=300&seq=research-2&orientation=landscape'
    },
    {
      title: '스마트 질병 진단 시스템',
      status: '완료',
      progress: 100,
      period: '2022.09 - 2023.11',
      budget: '12억원',
      objective: '실시간 질병 진단 및 예측 시스템 구축',
      achievements: [
        '진단 정확도 95% 달성',
        '진단 시간 70% 단축',
        '상용화 제품 출시 완료'
      ],
      image: 'https://readdy.ai/api/search-image?query=Smart%20disease%20diagnosis%20system%20with%20advanced%20medical%20equipment%2C%20real-time%20monitoring%20displays%2C%20automated%20testing%20devices%2C%20veterinary%20research%20laboratory&width=500&height=300&seq=research-3&orientation=landscape'
    }
  ];

  const researchAreas = [
    {
      icon: 'ri-microscope-line',
      title: '미생물학 연구',
      description: '유용 미생물 발굴 및 응용 기술 개발',
      projects: '8개 프로젝트'
    },
    {
      icon: 'ri-computer-line',
      title: 'AI/IoT 기술',
      description: '스마트 양식을 위한 디지털 기술 연구',
      projects: '5개 프로젝트'
    },
    {
      icon: 'ri-test-tube-line',
      title: '바이오테크놀로지',
      description: '생명공학 기술 기반 제품 개발',
      projects: '6개 프로젝트'
    },
    {
      icon: 'ri-leaf-line',
      title: '친환경 기술',
      description: '지속가능한 양식 기술 연구',
      projects: '4개 프로젝트'
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Research Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">23</div>
              <div className="text-gray-700 font-semibold">진행 중인 프로젝트</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">45억원</div>
              <div className="text-gray-700 font-semibold">연간 R&D 투자</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">15명</div>
              <div className="text-gray-700 font-semibold">전문 연구진</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">8개</div>
              <div className="text-gray-700 font-semibold">완료된 프로젝트</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 연구 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              현재 진행 중인 핵심 연구개발 프로젝트들을 소개합니다
            </p>
          </div>

          <div className="space-y-12">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                        project.status === '진행중' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {project.status}
                      </span>
                      <div className="text-gray-500">{project.period}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.objective}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">연구비</div>
                        <div className="text-lg font-semibold text-gray-900">{project.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">진행률</div>
                        <div className="flex items-center">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{project.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-3">주요 성과</div>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover object-top rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              연구 분야
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              컬리버가 집중하고 있는 핵심 연구 분야들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                  <i className={`${area.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <div className="text-sm font-semibold text-blue-600">{area.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              연구 성과 및 발표
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              국내외 학술지 및 학회에서 발표한 연구 논문과 성과들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">25+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SCI 논문</h3>
              <p className="text-gray-600">
                국제 학술지에 게재된 
                수산양식 관련 연구 논문
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">40+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">학회 발표</h3>
              <p className="text-gray-600">
                국내외 학술대회에서의 
                연구 성과 발표
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">15+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">수상 실적</h3>
              <p className="text-gray-600">
                연구 우수성을 인정받은 
                다양한 상과 인증
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            컬리버와 함께 연구하고 혁신하세요
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            산학연 협력과 공동 연구를 통해 수산양식의 미래를 함께 만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              연구 협력 문의
            </Link>
            <Link
              href="/technology/partnership"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              파트너십 정보
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RDStatus;
