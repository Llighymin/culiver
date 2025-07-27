'use client';

import { Syringe, Microscope, Stethoscope, FileText, ArrowDownToLine, ChevronRight } from 'lucide-react';

const VeterinaryResearch = () => {
  const researchAreas = [
    {
      icon: <Syringe className="w-12 h-12 text-blue-600" />,
      title: '백신 개발',
      description: '주요 질병에 대한 예방 효과가 뛰어난 고효능 백신을 개발하여 양식 생물의 폐사율을 낮추고 항생제 사용을 줄입니다.',
    },
    {
      icon: <Microscope className="w-12 h-12 text-green-600" />,
      title: '질병 진단 기술',
      description: '신속하고 정확한 현장용(On-site) 진단 키트와 정밀 분석 기술을 통해 질병의 조기 발견과 확산 방지에 기여합니다.',
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-purple-600" />,
      title: '치료제 연구',
      description: '기존 치료제의 한계를 극복하고, 내성 문제 없는 안전하고 효과적인 천연물 기반 치료 솔루션을 연구합니다.',
    },
  ];

  const researchPipeline = [
    {
      phase: 'Phase 1: 후보물질 발굴',
      status: '완료',
      description: '새우 흰점바이러스(WSSV) 예방 백신 후보물질 도출',
      details: ['안전성 및 면역원성 확인', '실험실 수준 효능 검증 완료'],
    },
    {
      phase: 'Phase 2: 전임상 시험',
      status: '진행중',
      description: '어류 비브리오병 경구용 백신 개발',
      details: ['최적 항원 선정 및 제형 연구', '공격감염시험을 통한 효능 평가'],
    },
    {
      phase: 'Phase 3: 임상 시험',
      status: '예정',
      description: '광범위 항균 펩타이드 치료제 개발',
      details: ['신규 펩타이드 후보물질 발굴', '대량생산 공정 개발 착수 예정'],
    },
  ];

  const publications = [
    { title: '새로운 경구용 어류 백신 플랫폼 기술 개발 연구', journal: 'Journal of Aquaculture Health', date: '2024.05.12', link: '#' },
    { title: '흰다리새우의 급성간췌장괴사증(AHPND) 예방을 위한 박테리오파지 요법', journal: 'Virology Today', date: '2023.11.28', link: '#' },
    { title: '양식 환경에서의 항생제 내성 저감을 위한 전략', journal: 'Fisheries Science', date: '2023.07.03', link: '#' },
    { title: '어류 연쇄구균 감염증에 대한 식물유래추출물의 효능 평가', journal: 'Journal of Veterinary Research', date: '2022.09.15', link: '#' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case '완료':
        return 'bg-blue-100 text-blue-800';
      case '진행중':
        return 'bg-green-100 text-green-800 animate-pulse';
      case '예정':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              수의학 연구
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              과학적 근거에 기반한 수의학 연구를 통해 건강한 양식 생물과 안전한 수산물 생산에 기여합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">핵심 연구 분야</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              컬리버는 질병 예방, 진단, 치료 전반에 걸친 통합적인 연구를 수행하여 지속가능한 양식 산업을 선도합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center items-center mb-6">{area.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{area.title}</h3>
                <p className="text-gray-600 text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Pipeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">R&D 파이프라인</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              미래 양식 산업을 이끌어갈 혁신적인 기술들을 체계적으로 개발하고 있습니다.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-200">
              {researchPipeline.map((item, index) => (
                <div key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  </span>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.phase}</h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-md font-medium text-gray-800 mb-3">{item.description}</p>
                    <ul className="space-y-1 text-gray-600 list-disc list-inside">
                      {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">주요 연구 성과</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              컬리버의 기술력은 공신력 있는 학술지에 게재된 다수의 논문으로 증명됩니다.
            </p>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">논문명</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">게재 학술지</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">게재일</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-bold text-gray-600 uppercase tracking-wider">자료</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {publications.map((pub, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-normal text-md font-medium text-gray-900">{pub.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600 italic">{pub.journal}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-md text-gray-600">{pub.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <a
                        href={pub.link}
                        download
                        className="inline-flex items-center justify-center p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-full transition-colors"
                        aria-label={`${pub.title} 다운로드`}
                      >
                        <ArrowDownToLine className="w-5 h-5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            함께 연구하고 성장할 파트너를 찾습니다.
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            컬리버는 대학, 연구소, 기업과의 공동 연구 및 기술 제휴에 항상 열려있습니다.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/pr/customer-inquiry"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                연구 협력 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeterinaryResearch;
