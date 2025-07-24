const CompanyMembers = () => {
  const departments = [
    {
      name: "전략기획부",
      description:
        "기업의 중장기 전략 수립과 신규 사업 발굴, 경영 성과 관리를 담당하는 핵심 부서입니다.",
      tasks: [
        "중장기 경영전략 수립",
        "신규 사업 기획 및 개발",
        "경영 성과 분석 및 관리",
      ],
    },
    {
      name: "기업부설연구소",
      description:
        "미생물 제제 개발과 양식 기술 연구, 스마트 시스템 개발 등 핵심 기술을 연구하는 부서입니다.",
      tasks: [
        "미생물 제제 연구 개발",
        "스마트양식 시스템 개발",
        "양식 기술 최적화 연구",
      ],
      teams: ["미생물연구팀", "양식기술팀", "스마트시스템팀", "품질관리팀"],
    },
    {
      name: "양식사업부",
      description:
        "양식장 운영과 생산 관리, 품질 관리 등 실제 양식 사업을 총괄하는 부서입니다.",
      tasks: ["양식장 운영 및 관리", "생산 및 품질 관리", "시설 유지보수 관리"],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            조직도
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            컬리버의 성장을 이끄는 전문가들
          </p>
        </div>

        {/* CEO */}
        <div className="flex justify-center mb-12">
          <div className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
            대표이사
          </div>
        </div>

        {/* Main Departments */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-px bg-gray-300 h-12"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          <div className="absolute w-full h-px bg-gray-300 top-[-2rem] left-0 right-0 hidden md:block"></div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 font-semibold py-3 px-6 rounded-lg">
              경영지원본부
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 font-semibold py-3 px-6 rounded-lg">
              기업부설연구소
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 font-semibold py-3 px-6 rounded-lg">
              양식사업부
            </div>
          </div>
        </div>

        {/* Sub-teams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* 전략기획부 */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-4 rounded-lg w-full max-w-xs">
              <div className="bg-blue-200 font-semibold py-2 px-4 rounded-md">
                전략기획부
              </div>
            </div>
          </div>
          {/* 연구소 팀들 */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-green-200 font-semibold py-2 px-4 rounded-md">
                미생물연구팀
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-green-200 font-semibold py-2 px-4 rounded-md">
                양식기술팀
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-green-200 font-semibold py-2 px-4 rounded-md">
                스마트시스템팀
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-green-200 font-semibold py-2 px-4 rounded-md">
                품질관리팀
              </div>
            </div>
          </div>
          {/* 양식사업부 (하위팀 없음) */}
          <div></div>
        </div>

        {/* Department Descriptions */}
        <div className="mt-20 space-y-12">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-900">{dept.name}</h2>
              <p className="mt-4 text-lg text-gray-600">{dept.description}</p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">주요 업무</h3>
                <ul className="mt-4 space-y-2">
                  {dept.tasks.map((task) => (
                    <li key={task} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyMembers;
