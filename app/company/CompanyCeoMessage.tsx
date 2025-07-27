import Image from "next/image";

const CeoMessage = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            CEO 인사말
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            자연과 기술의 조화, 지속가능한 미래를 향한 컬리버의 약속
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* CEO Image */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative">
              <Image
                src="/images/ceo-placeholder.svg"
                alt="CEO 김정석"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <p className="font-bold text-lg">김정석</p>
                <p>주식회사 컬리버 대표이사</p>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                안녕하십니까,
                <br />
                주식회사 컬리버 대표이사 김정석입니다.
                <br />
                먼저 컬리버에 관심을 가져주시고 방문해 주신 모든 분들께 진심으로
                감사드립니다.
              </p>
              <p>
                오늘날 전 세계는 기후 변화와 인구 증가로 인한 식량 안보 문제에
                직면해 있습니다. 특히 단백질 공급원으로서 수산물의 중요성이 날로
                커지고 있는 가운데, 지속 가능한 양식업의 발전이 그 어느 때보다 절실한
                상황입니다.
              </p>
              <p>
                컬리버는 이러한 시대적 요구에 부응하고자 2024년 설립 이래 "지속
                가능한 친환경 양식 기술 개발"을 핵심 가치로 삼고 끊임없는 연구개발에
                매진해 왔습니다.
              </p>
              <p>
                우리는 단순히 생산량 증대에만 초점을 맞추는 것이 아니라, 환경 보호와
                지역사회 상생을 통해 진정한 의미의 지속 가능한 발전을 추구하고
                있습니다.
              </p>
              <p>
                앞으로도 컬리버는 기술 혁신을 통해 국내를 넘어 동남아시아 등 해외
                시장으로 사업 영역을 확장하며, 글로벌 수산양식 기업으로 성장해 나갈
                것입니다.
              </p>
              <p className="font-semibold text-gray-900">
                여러분의 지속적인 관심과 성원을 부탁드리며, 함께 더 나은 미래를
                만들어 나가기를 희망합니다.
                <br />
                감사합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
