import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const CompanyHistory = () => {
  const history = [
    {
      year: "2025",
      events: [
        "'25.02.20. : 전라남도 청년기업 인정, 제2025-65호",
        "'25.03.20. : 양해각서(MOU) 체결(베트남) - 베트남 양식기업 ATB121",
        "'25.03.25. : (투자유치) 광주전남 지역창업초기 개인투자조합 : 2억원",
        "'25.03.27. ~ '25.11.30. : 창업성공패키지(청년창업사관학교) 사업화지원",
        "'25.03.27. ~ '25.09.30. : 창업 초기기업 육성지원, 전남해양수산창업투자지원센터",
        "'25.05.20. ~ '25.12.05. : 해양수산 창업기획자(액셀러레이터), 제주창조경제혁신센터",
        "'25.05.23. ~ '25.06.09. : 지식재산 긴급지원(중소기업 IP바로지원), 전남테크노파크",
        "'25.06.09. : 기업부설연구소 인정, 제2025112104호",
        "'25.06.10. : 벤처기업확인, 제20250610010010호",
        "'25.06.13. : 국립순천대학교 G-SCNU 강소지역기업, 그린-01-053호",
        "'25.07.02. : ㈜컬리버 제주지점 설립",
      ],
    },
    {
      year: "2024",
      events: [
        "'24.03.12. ~ '24.11.30. : 유용미생물 활용 흰다리새우 양식 및 데이터 확보",
        "'24.06.17. : 컬리버 법인 설립",
        "'24.06.20. ~'24.06.21. : 양해각서(MOU) 체결 (압티지엠제이, 씨케이 트레이딩)",
        "'24.08.29. : 데이터사업자 신고(과학기술정보통신부장관)",
        "'24.09.24. : 연구개발전담부서 인정(한국산업기술진흥협회)",
        "'24.09.26. ~ '24.10.07. : '25년 귀어 청년 구매 의향서 3건 확보",
        "'24.10.25. : 해양수산과학원 수산물 안전성 검사 83건 불검출",
      ],
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
        {history.map((item) => (
          <div
            key={item.year}
            className="flex items-start space-x-8 p-8 bg-white rounded-2xl shadow-lg"
          >
            <div className="flex-shrink-0">
              <div className="size-20 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
                {item.year}
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed">
                {item.events.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyHistory;
