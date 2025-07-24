import { RiAwardLine, RiGlobalLine, RiTeamLine, RiTrophyLine } from "react-icons/ri";

const CompanyPerformance = () => {
  const performanceList = [
    {
      id: 1,
      title: "15+",
      subtitle: "년간 연구개발",
      description: "지속적인 기술 혁신",
      icon: <RiAwardLine />,
    },
    {
      id: 2,
      title: "50+",
      subtitle: "전문 연구진",
      description: "박사급 연구원 다수 보유",
      icon: <RiTeamLine />,
    },
    {
      id: 3,
      title: "200+",
      subtitle: "파트너 농장",
      description: "전국 협력 양식장",
      icon: <RiGlobalLine />,
    },
    {
      id: 4,
      title: "25+",
      subtitle: "특허 및 인증",
      description: "기술력 공인 받음",
      icon: <RiTrophyLine />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">컬리버의 성과</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">지속적인 연구개발과 혁신을 통해 쌓아온 우리의 성과입니다</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceList.map((item) => (
            <div key={item.id} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                <div className="text-3xl text-blue-600">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-xl font-semibold text-gray-900 mb-2">{item.subtitle}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPerformance;