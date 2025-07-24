import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const CompanyHistory = () => {
  const milestones = [
    {
      year: "2024",
      title: "글로벌 진출",
      description: "동남아시아 시장 진출 및 현지 법인 설립",
    },
    {
      year: "2023",
      title: "기술 혁신",
      description: "AI 기반 스마트 양식 시스템 개발 완료",
    },
    {
      year: "2022",
      title: "성장 가속화",
      description: "새로운 연구소 확장 및 생산 시설 증설",
    },
    {
      year: "2021",
      title: "품질 인증",
      description: "ISO 9001, HACCP 등 국제 품질 인증 획득",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          주요 연혁
        </h2>
        <p className="text-xl text-gray-600">
          컬리버의 성장과 혁신의 여정을 소개합니다
        </p>
      </div>
      <div className="space-y-8 w-[1000px]">
        {milestones.map((milestone) => (
          <div
            key={milestone.title}
            className="flex items-start space-x-8 p-8 bg-white rounded-2xl shadow-lg"
          >
            <div className="flex-shrink-0">
              <div className="size-20 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
                {milestone.year}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">
                {milestone.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/company/history"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <span>전체 연혁 보기</span>
          <RiArrowRightLine className="size-5 flex items-center justify-center ml-3" />
        </Link>
      </div>
    </section>
  );
};

export default CompanyHistory;
