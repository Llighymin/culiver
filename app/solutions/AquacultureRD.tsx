"use client";

import { FaChartLine, FaSeedling, FaShieldAlt, FaDollarSign } from "react-icons/fa";
import { CheckCircle } from 'lucide-react';

const AquacultureRD = () => {
  const advantages = [
    {
      icon: <FaChartLine className="h-10 w-10 text-blue-600" />,
      title: "생산성 극대화",
      description: "첨단 기술로 양식 생산성을 30% 이상 향상시켜 안정적인 수익을 창출합니다.",
    },
    {
      icon: <FaSeedling className="h-10 w-10 text-green-600" />,
      title: "친환경 양식",
      description: "지속 가능한 친환경 양식 시스템을 구축하여 환경 보호에 기여합니다.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-purple-600" />,
      title: "안전성 확보",
      description: "체계적인 질병 관리 시스템으로 안전하고 건강한 수산물을 생산합니다.",
    },
    {
      icon: <FaDollarSign className="h-10 w-10 text-yellow-600" />,
      title: "비용 효율성",
      description: "스마트 시스템 도입을 통해 운영 비용을 20% 절감하여 효율성을 극대화합니다.",
    },
  ];

  const coreTechnologies = [
    {
      title: "새우 양식 기술",
      description: "흰다리새우 최적 양식 환경 구축을 위한 첨단 기술",
      items: ["고밀도 양식 시스템", "사료 효율 최적화", "성장률 향상 기술", "생존율 개선 방법"],
      image: "https://images.unsplash.com/photo-1593033860859-3847c5855138?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "스마트 양식 시스템",
      description: "IoT와 AI 기술을 활용한 지능형 양식 관리 시스템",
      items: ["IoT 센서 네트워크", "AI 기반 예측 분석", "자동 급이 시스템", "실시간 모니터링"],
      image: "https://images.unsplash.com/photo-1615899819473-865f42434513?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "양식 환경 관리",
      description: "최적의 양식 환경을 유지하기 위한 종합 관리 솔루션",
      items: ["수질 자동 조절", "산소 공급 최적화", "온도 관리 시스템", "폐수 처리 기술"],
      image: "https://images.unsplash.com/photo-1542992199-82a3b5422668?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const bioflocProcess = [
    {
      step: "01",
      title: "환경 설계",
      description: "최적의 바이오플락 환경 구성을 위한 시설 설계 및 미생물 군집 조성",
    },
    {
      step: "02",
      title: "시스템 구축",
      description: "스마트 모니터링 시스템과 자동화 장비를 통한 체계적 관리",
    },
    {
      step: "03",
      title: "운영 최적화",
      description: "지속적인 데이터 분석과 개선을 통한 생산성 극대화",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            양식 R&D
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            컬리버는 혁신적인 R&D를 통해 지속가능하고 생산성 높은 미래 양식 기술을 선도합니다.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">컬리버 양식 기술의 강점</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              최첨단 기술을 바탕으로 생산성, 친환경, 안전성, 경제성을 모두 갖춘 양식 솔루션을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center items-center mb-6">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">핵심 연구 분야</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              컬리버는 지속가능한 양식업을 선도하기 위해 다음과 같은 핵심 기술에 집중하고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col">
                <img src={tech.image} alt={tech.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biofloc Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">바이오플락 기술 프로세스</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              체계적인 3단계 프로세스를 통해 바이오플락 기술의 효과를 극대화합니다.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block" aria-hidden="true"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {bioflocProcess.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-4xl mx-auto text-center py-20 px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            미래 양식 기술을 선도하고 싶으신가요?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            컬리버의 혁신적인 R&D 역량이 귀하의 비즈니스에 새로운 가능성을 열어드립니다.
          </p>
          <a
            href="/pr/contact"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            비즈니스 문의하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default AquacultureRD;
