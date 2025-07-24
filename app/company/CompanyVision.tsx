import Image from "next/image";

const CompanyVision = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-16">
          <Image
            src="/images/vision.jpg"
            alt="Company Vision"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
              Our Vision & Mission
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              VISION
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
              "글로벌 수산양식 혁신을 선도하는 지속가능한 바이오 기업"
            </p>
            <p className="mt-4 text-lg text-gray-600">
              컬리버는 첨단 기술과 친환경 솔루션을 통해 글로벌 수산양식 산업의
              혁신을 주도하며, 지속가능한 미래 식량 생산에 기여하는 세계적인
              데이터 기업으로 성장하고자 합니다.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              MISSION
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
              "자연과 기술의 조화로운 융합을 통한 수산양식의 새로운 패러다임
              창조"
            </p>
            <p className="mt-4 text-lg text-gray-600">
              컬리버는 자연의 원리를 존중하면서 첨단 기술을 접목한 혁신적인
              솔루션을 개발하여, 환경 부담은 최소화하고 생산성과 품질은
              극대화하는 수산양식의 새로운 패러다임을 창조합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVision;
