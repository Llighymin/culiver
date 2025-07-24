import Image from "next/image";

const AboutSection = () => {
  const services = [
    {
      title: "흰다리새우 양식",
      description:
        "최적화된 환경에서 고품질 흰다리새우를 생산하는 첨단 양식 시스템을 제공합니다. 질병 관리부터 성장 최적화까지 전 과정을 관리합니다.",
      image: "/images/product-1.png",
    },
    {
      title: "보조사료(미생물제제)",
      description:
        "수질 개선과 면역력 강화를 위한 미생물 제제를 개발 및 공급합니다. 유해균 억제와 소화 효율 증진에 탁월한 효과가 있습니다.",
      image: "/images/product-1.png",
    },
    {
      title: "스마트양식장 솔루션",
      description:
        "IoT 기반의 실시간 모니터링 시스템과 자동화 솔루션으로 양식장 운영을 최적화합니다. 수질, 급이, 질병 관리를 통합적으로 제어합니다.",
      image: "/images/product-1.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            핵심 사업 영역
          </h2>
          <p className="text-lg text-gray-600">
            컬리버는 첨단 기술과 친환경 솔루션을 통해 수산양식 산업의
            지속가능한 발전을 이끌어갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-6 inline-block"
                >
                  자세히 보기 →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;