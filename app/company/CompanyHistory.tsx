import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const CompanyHistory = () => {
  const history = [
    {
      year: "2025",
      events: [
        "'25.07.02. : ㈜컬리버 제주지점 설립",
        "'25.06.13. : 국립순천대학교 G-SCNU 강소지역기업, 그린-01-053호",
        "'25.06.10. : 벤처기업확인, 제20250610010010호",
        "'25.06.09. : 기업부설연구소 인정, 제2025112104호",
        "'25.05.23. ~ '25.06.09. : 지식재산 긴급지원(중소기업 IP바로지원), 전남테크노파크",
        "'25.05.20. ~ '25.12.05. : 해양수산 창업기획자(액셀러레이터), 제주창조경제혁신센터",
        "'25.03.27. ~ '25.09.30. : 창업 초기기업 육성지원, 전남해양수산창업투자지원센터",
        "'25.03.27. ~ '25.11.30. : 창업성공패키지(청년창업사관학교) 사업화지원",
        "'25.03.25. : (투자유치) 광주전남 지역창업초기 개인투자조합 : 2억원",
        "'25.03.20. : 양해각서(MOU) 체결(베트남) - 베트남 양식기업 ATB121",
        "'25.02.20. : 전라남도 청년기업 인정, 제2025-65호",
      ],
    },
    {
      year: "2024",
      events: [
        "'24.10.25. : 해양수산과학원 수산물 안전성 검사 83건 불검출",
        "'24.09.26. ~ '24.10.07. : '25년 귀어 청년 구매 의향서 3건 확보",
        "'24.09.24. : 연구개발전담부서 인정(한국산업기술진흥협회)",
        "'24.08.29. : 데이터사업자 신고(과학기술정보통신부장관)",
        "'24.06.20. ~'24.06.21. : 양해각서(MOU) 체결 (압티지엠제이, 씨케이 트레이딩)",
        "'24.06.17. : 컬리버 법인 설립",
        "'24.03.12. ~ '24.11.30. : 유용미생물 활용 흰다리새우 양식 및 데이터 확보",
      ],
    },
  ];

  // Sort history by year descending
  const sortedHistory = [...history].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );

  // Filter for 2020s decade
  const history2020s = sortedHistory.filter(
    (h) => parseInt(h.year) >= 2020 && parseInt(h.year) < 2030,
  );

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-sm text-purple-600 font-semibold tracking-widest">
            HISTORY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            컬리버는 오늘도,
            <br />
            새로운 도전을 위해 나아갑니다.
          </h2>
        </div>

        <div className="relative">
          {/* Central Vertical Line - starts after the '2020s' heading */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-200 top-20"></div>

          {/* 2020's Section */}
          <div className="mb-16">
            <div className="flex justify-center text-center mb-12 relative">
              <h3 className="text-6xl font-bold text-purple-500 bg-white px-4 z-10">
                2020's
              </h3>
            </div>
            <div className="space-y-12">
              {history2020s.map((item, index) => (
                <div
                  key={item.year}
                  className="md:grid md:grid-cols-2 md:gap-x-16 relative items-start"
                >
                  {/* Dot on timeline */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow-md z-10"></div>

                  {index % 2 === 0 ? (
                    <>
                      {/* Year - Right Aligned */}
                      <div className="md:text-right md:pr-8">
                        <p className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                          {item.year}
                        </p>
                      </div>
                      {/* Events - Left Aligned */}
                      <div className="md:pl-8">
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-gray-600">
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Events - Right Aligned */}
                      <div className="md:text-right md:pr-8 order-last md:order-first">
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-gray-600">
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Year - Left Aligned */}
                      <div className="md:pl-8">
                        <p className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                          {item.year}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Add other decades here if needed */}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
