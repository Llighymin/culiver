'use client';

import {
  RiLeafLine,
  RiLightbulbFlashLine,
  RiGlobalLine,
} from "react-icons/ri";
import CountUp from "react-countup";

const CompanyPerformance = () => {
  const performance = [
    { title: "매출 목표 (2025)", value: 100, unit: "억", suffix: "원" },
    { title: "R&D 투자 비율", value: 30, unit: "%", suffix: " (매출 대비)" },
    { title: "글로벌 시장 진출", value: 3, unit: "개국", suffix: " 목표" },
    { title: "핵심 특허 출원", value: 5, unit: "건", suffix: " 완료" },
  ];

  return (
    <div className="bg-white text-gray-700 py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            주요 성과
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            혁신적인 기술과 끊임없는 노력으로 만들어가는 컬리버의 주요 성과입니다.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {performance.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">{item.title}</h3>
              <p className="text-4xl font-bold text-primary">
                <CountUp end={item.value} duration={2.5} />
                <span className="text-3xl">{item.unit}</span>
              </p>
              <p className="text-sm text-gray-500">{item.suffix}</p>
            </div>
          ))}
        </div>

        {/* Core Philosophy Section */}
        <div className="bg-gray-50 py-16 rounded-lg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                자연과 기술의 조화
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                우리는 첨단 기술을 활용하되, 자연의 원리를 존중하고 생태계와의
                조화를 최우선으로 생각합니다.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <RiLeafLine className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  친환경 양식
                </h3>
                <p className="text-gray-600">
                  환경 부담을 최소화하는 지속가능한 양식 방식을 통해 생태계와
                  조화를 이루는 수산업을 추구합니다.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <RiLightbulbFlashLine className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  혁신적 연구
                </h3>
                <p className="text-gray-600">
                  끊임없는 연구개발을 통해 수산양식 산업의 혁신을 주도하며 미래
                  식량 안보에 기여합니다.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <RiGlobalLine className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  글로벌 협력
                </h3>
                <p className="text-gray-600">
                  전 세계 파트너들과의 협력을 통해 지역별 특성에 맞는 최적화된
                  양식 솔루션을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPerformance;