import React from "react";
import Image from "next/image";

const CompanyVision = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            미션 & 비전
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            컬리버가 나아갈 방향과 핵심 가치
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12 mb-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
            Mission
          </h3>
          <p className="mt-4 text-2xl font-semibold text-primary">
            "자연과 기술의 조화로운 융합을 통한 수산양식의 새로운 패러다임 창조"
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            컬리버는 자연의 원리를 존중하면서 첨단 기술을 접목한 혁신적인
            솔루션을 개발하여, 환경 부담은 최소화하고 생산성과 품질은
            극대화하는 수산양식의 새로운 패러다임을 창조합니다.
          </p>
        </div>

        {/* Vision Section */}
        <div className="relative rounded-lg shadow-2xl overflow-hidden">
          <Image
            src="/images/vision.jpg"
            alt="Company Vision"
            width={1200}
            height={500}
            className="w-full object-cover h-[400px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
            <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Vision
            </h3>
            <p className="mt-4 text-2xl font-semibold max-w-3xl">
              "글로벌 수산양식 혁신을 선도하는 지속가능한 바이오 기업"
            </p>
            <p className="mt-6 max-w-3xl text-lg">
              컬리버는 첨단 기술과 친환경 솔루션을 통해 글로벌 수산양식
              산업의 혁신을 주도하며, 지속가능한 미래 식량 생산에 기여하는
              세계적인 데이터 기업으로 성장하고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVision;
