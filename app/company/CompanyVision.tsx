import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const CompanyVision = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          비전 & 미션
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              지속 가능한 수산양식 기술로 전 세계 식량 안보에 기여하는 글로벌
              바이오테크 리더가 되겠습니다.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              첨단 바이오테크놀로지와 친환경 양식 기술을 통해 건강하고 안전한
              수산물을 생산하며, 지역사회와 함께 지속 가능한 미래를
              만들어갑니다.
            </p>
          </div>
          <Link
            href="/company/vision"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer mt-8"
          >
            <span>자세히보기</span>
            <RiArrowRightLine className="size-5 flex items-center justify-center ml-3" />
          </Link>
        </div>
      </div>
      <div className="relative rounded-2xl size-full overflow-hidden shadow-2xl">
        <Image
          src="/images/vision.jpg"
          alt="비전 미션"
          fill
          sizes="(max-width: 768px) 100vw"
          priority
          className="w-full h-96 object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CompanyVision;
