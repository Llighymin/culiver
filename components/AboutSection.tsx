import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            그린웨일의 지속가능한 기술
          </h2>
          <p className="text-lg text-gray-600">
            그린웨일은 지속가능한 내일을 위한 우리의 연결과 노력을 담아
            혁신적인 친환경 기술을 발전시키고 있습니다. 더 많은 이해관계자와의
            연결 속에 우리의 약속, 이야기를 세상과 공유하며 지속가능한 미래를
            열어가겠습니다.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col justify-center text-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-300">
                INNOVATION
              </p>
              <p className="text-5xl md:text-7xl font-bold text-gray-800 -mt-2">
                REPORT 2025
              </p>
              <div className="mt-4">
                <p className="font-bold text-green-whale">
                  Accelerating Decomposition
                </p>
                <p className="text-gray-500">The Future of Eco-Technology</p>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-4">
                <p className="text-left font-mono text-sm">GREENWHALE</p>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                그린웨일 2025 기술 보고서
              </h3>
              <p className="text-gray-600 mb-6">
                그린웨일의 독자적인 미생물 기술은 24시간 내 유기성 폐기물을
                완벽히 분해하여, 지속가능한 미래를 위한 ESG 경영을 실천합니다.
                2025년 기술 보고서를 통해 그린웨일의 책임과 노력을 공유합니다.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300">
                <span>국문 다운로드</span>
                <Download className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;