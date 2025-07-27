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
    <div className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            조직도
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            컬리버의 성장을 이끄는 전문가들
          </p>
        </div>

        {/* Organization Chart */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* CEO */}
          <div className="relative">
            <div className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow-md">
              대표이사
            </div>
            <div className="absolute left-1/2 -bottom-8 h-8 w-0.5 bg-gray-300"></div>
          </div>

          {/* Management Support HQ */}
          <div className="mt-16 relative">
            <div className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-md shadow-md">
              경영지원본부
            </div>
            {/* Vertical line down */}
            <div className="absolute left-1/2 -bottom-8 h-8 w-0.5 bg-gray-300"></div>
            {/* Horizontal line */}
            <div className="absolute left-[-18rem] top-1/2 w-[36rem] h-0.5 bg-gray-300 hidden md:block"></div>
          </div>

          {/* Main Departments */}
          <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 relative">
            {/* Connecting lines from horizontal bar to each department */}
            <div className="absolute left-1/4 -top-8 h-8 w-0.5 bg-gray-300 hidden md:block"></div>
            <div className="absolute left-1/2 -top-8 h-8 w-0.5 bg-gray-300 hidden md:block"></div>
            <div className="absolute right-1/4 -top-8 h-8 w-0.5 bg-gray-300 hidden md:block"></div>

            {/* Dept 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md shadow-md w-48">
                전략기획부
              </div>
            </div>

            {/* Dept 2 */}
            <div className="flex flex-col items-center relative">
              <div className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md shadow-md w-48">
                기업부설연구소
              </div>
              <div className="absolute left-1/2 -bottom-8 h-8 w-0.5 bg-gray-300"></div>
            </div>

            {/* Dept 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md shadow-md w-48">
                양식사업부
              </div>
            </div>
          </div>

          {/* R&D Center Teams */}
          <div className="mt-16 w-full flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 relative max-w-4xl">
              {/* Horizontal line connecting teams */}
              <div className="absolute left-4 right-4 top-[-2rem] h-0.5 bg-gray-300 hidden md:block"></div>
              {departments
                .find((d) => d.name === "기업부설연구소")
                ?.teams?.map((team, index, arr) => (
                  <div key={team} className="flex flex-col items-center">
                    {/* Vertical line up to horizontal bar */}
                    <div className="absolute -top-8 h-8 w-0.5 bg-gray-300"></div>
                    <div className="bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md shadow-sm w-36">
                      {team}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Department Descriptions */}
        <div className="space-y-12">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-800">{dept.name}</h2>
              <p className="mt-3 text-lg text-gray-600">{dept.description}</p>
              <div className="mt-6 border-t pt-4">
                <ul className="space-y-2">
                  {dept.tasks.map((task) => (
                    <li key={task} className="flex items-center">
                      <span className="text-cyan-600 font-bold mr-2">›</span>
                      <span className="text-gray-700">{task}</span>
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
