import { RiAwardLine, RiGlobalLine, RiTeamLine, RiTrophyLine } from "react-icons/ri";

const CompanyPerformance = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            회사 개요
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            지속 가능한 수산양식의 미래, 컬리버
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            컬리버는 2024년 6월 설립된 수산양식 전문 데이터 기업으로, 친환경적이고
            지속 가능한 수산양식 솔루션을 개발하고 제공하는 글로벌 리더입니다.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-lg text-gray-600">
            급증하는 세계 인구와 함께 수산물 수요가 지속적으로 증가하는 가운데,
            컬리버는 첨단 기술과 혁신적인 접근 방식을 통해 환경 부담을
            최소화하면서 고품질의 수산물을 생산하는 방법을 연구하고 개발하고
            있습니다. 특히 흰다리새우 양식 분야에서 독보적인 기술력을 보유하고
            있으며, IoT 기반의 스마트양식 시스템과 미생물제제를 통해 양식
            산업의 생산성과 지속가능성을 동시에 높이는 데 기여하고 있습니다.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              바이오마린 연구소
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              혁신을 통한 가치 창출
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">친환경 양식</h3>
              <p className="mt-2 text-base text-gray-600">
                환경 부담을 최소화하는 지속가능한 양식 방식을 통해 생태계와
                조화를 이루는 수산업을 추구합니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">혁신적 연구</h3>
              <p className="mt-2 text-base text-gray-600">
                끊임없는 연구개발을 통해 수산양식 산업의 혁신을 주도하며 미래
                식량 안보에 기여합니다.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">글로벌 협력</h3>
              <p className="mt-2 text-base text-gray-600">
                전 세계 파트너들과의 협력을 통해 지역별 특성에 맞는 최적화된
                양식 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              기업 철학
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              자연과 기술의 조화를 통한 지속가능한 미래 창조
            </p>
            <p className="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto">
              우리는 첨단 기술을 활용하되, 자연의 원리를 존중하고 생태계와의
              조화를 최우선으로 생각합니다. 이를 통해 환경 부담은 최소화하면서
              생산성과 품질은 극대화하는 혁신적인 솔루션을 개발하고 있습니다.
            </p>
          </div>
          <div className="mt-10">
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  자연과 기술의 조화를 통한 지속가능한 양식 추구
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  끊임없는 혁신을 통한 수산양식 산업의 발전 기여
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  고객, 파트너, 직원과의 신뢰 관계 구축
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  사회적 책임을 다하는 기업 시민으로서의 역할 수행
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPerformance;