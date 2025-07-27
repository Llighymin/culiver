'use client';

import { useState } from 'react';
import { FaFlask, FaMicroscope, FaChartLine, FaShieldAlt, FaCogs, FaFileAlt } from 'react-icons/fa';

const AccordionItem = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: React.ElementType }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-2 text-left"
      >
        <div className="flex items-center">
          <Icon className="w-6 h-6 mr-4 text-blue-600" />
          <span className="text-lg font-medium text-gray-800">{title}</span>
        </div>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-2 pb-5 pl-12 bg-white">
          <div className="text-gray-600 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

const ProbioticsDevelopment = () => {
  const coreCompetencies = [
    {
      icon: <FaMicroscope className="h-10 w-10 text-blue-600" />,
      title: '핵심 균주 스크리닝',
      description: '다양한 환경에서 유용한 미생물 균주를 탐색하고 분리하여 독자적인 균주 라이브러리를 구축합니다.',
    },
    {
      icon: <FaFlask className="h-10 w-10 text-blue-600" />,
      title: '효능 및 안정성 검증',
      description: '실험실 및 현장 적용 시험을 통해 균주의 효능과 다양한 환경에서의 안정성을 과학적으로 검증합니다.',
    },
    {
      icon: <FaCogs className="h-10 w-10 text-blue-600" />,
      title: '최적 배양 및 생산',
      description: '선별된 균주의 특성을 고려한 최적의 배양 조건과 대량 생산 공정을 확립하여 고품질 제품을 생산합니다.',
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-blue-600" />,
      title: '품질 관리 시스템',
      description: '원료부터 최종 제품까지 모든 생산 단계에서 엄격한 품질 관리(QC)를 통해 제품의 안전성과 일관성을 보장합니다.',
    },
  ];

  const productLines = [
    { name: 'Culi-Bac Aqua', target: '새우, 어류', features: ['소화율 개선', '면역력 증강', '수질 정화'], application: '사료 첨가, 수처리' },
    { name: 'Culi-Bac Digest', target: '모든 양식 어종', features: ['사료 효율 극대화', '성장 촉진', '스트레스 감소'], application: '사료 첨가' },
    { name: 'Culi-Bac Immune', target: '치어, 종묘', features: ['초기 생존율 향상', '질병 저항성 강화'], application: '사료 첨가, 침지' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              맞춤형 프로바이오틱스 개발
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버는 과학적 연구를 기반으로 양식 생물의 건강과 생산성 향상을 위한 혁신적인 프로바이오틱스 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            핵심 역량
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCompetencies.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center items-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">R&D 프로세스</h2>
          <div className="max-w-4xl mx-auto">
            <AccordionItem title="균주 탐색 및 분리" icon={FaMicroscope}>
              <p>전 세계 다양한 환경에서 목적에 맞는 기능성을 가진 유용 미생물 균주를 탐색하고 순수 분리하여 라이브러리를 구축합니다. 이 과정에서 유전적 특성 분석도 함께 진행됩니다.</p>
            </AccordionItem>
            <AccordionItem title="기능성 평가 및 선별" icon={FaChartLine}>
              <p>분리된 균주들을 대상으로 항균 활성, 효소 생산 능력, 내산성, 내담즙성 등 다양한 기능성을 평가하여 우수 균주를 1차 선별합니다.</p>
            </AccordionItem>
            <AccordionItem title="동물 적용 시험" icon={FaFlask}>
              <p>선별된 우수 균주를 대상 양식 생물에 직접 적용하여 성장 촉진, 면역 증강, 질병 방어 효과 등 실제 효능을 검증하고 최종 균주를 선발합니다.</p>
            </AccordionItem>
            <AccordionItem title="제품화 및 품질관리" icon={FaCogs}>
              <p>최종 선발된 균주의 대량 생산 공정을 확립하고, 안정성을 높이는 제형 연구를 통해 제품을 완성합니다. 생산 전 과정에 걸쳐 엄격한 품질 관리를 수행하여 최고 품질의 제품을 공급합니다.</p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Product Line Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">주요 제품 라인</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">제품명</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">적용 대상</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">주요 특징</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">사용 방법</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productLines.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      <ul className="list-disc list-inside">
                        {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            귀사의 양식 환경에 맞는 솔루션이 필요하신가요?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            컬리버의 전문가 팀이 맞춤형 프로바이오틱스 개발 및 적용에 대한 컨설팅을 제공합니다.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/pr/customer-inquiry"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                기술 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProbioticsDevelopment;
