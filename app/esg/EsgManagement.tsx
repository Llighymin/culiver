'use client';

import { ArrowDownToLine, FileText, Leaf, Users, ShieldCheck } from 'lucide-react';

const EsgManagement = () => {
  const esgPillars = [
    {
      title: '환경 (Environment)',
      description: '기후 변화에 대응하고 지속 가능한 생태계를 위해 탄소 배출을 줄이고 자원 순환을 실천합니다.',
      icon: <Leaf className="w-12 h-12 text-green-600" />,
    },
    {
      title: '사회 (Social)',
      description: '모든 이해관계자의 인권을 존중하고, 안전한 근로 환경을 제공하며 지역사회와 함께 성장합니다.',
      icon: <Users className="w-12 h-12 text-blue-600" />,
    },
    {
      title: '지배구조 (Governance)',
      description: '투명하고 윤리적인 경영을 통해 모든 주주의 가치를 높이고, 신뢰받는 기업이 되겠습니다.',
      icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
    },
  ];

  const keyHighlights = [
    {
      value: 'A+',
      label: 'KCGS ESG 평가',
      description: '국내 최고 권위 평가 최고 등급 획득',
    },
    {
      value: '15.2%',
      label: '온실가스 감축',
      description: '전년 대비 온실가스 배출량 감축 성공',
    },
    {
      value: '98%',
      label: '안전교육 이수율',
      description: '전 임직원 대상 안전보건 교육 실시',
    },
  ];

  const reports = [
    { title: '2024 지속가능경영보고서', date: '2025-03-15', size: '5.8 MB' },
    { title: '2023 지속가능경영보고서', date: '2024-03-14', size: '5.5 MB' },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            지속가능경영 (ESG)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            컬리버는 더 나은 미래를 만들기 위해 환경, 사회, 지배구조 전반에 걸쳐 사회적 책임을 다하고 있습니다.
          </p>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">컬리버의 ESG 약속</h2>
            <p className="mt-4 text-lg text-gray-600">
              우리는 세 가지 핵심 가치를 통해 지속 가능한 성장을 추구합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {esgPillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="flex justify-center items-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">주요 성과</h2>
            <p className="mt-4 text-lg text-gray-600">
              컬리버의 지속가능경영 노력을 대표하는 성과입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {keyHighlights.map((highlight) => (
              <div key={highlight.label} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-5xl font-extrabold text-blue-600 mb-2">{highlight.value}</p>
                <h3 className="text-xl font-semibold text-gray-900">{highlight.label}</h3>
                <p className="text-gray-500 mt-2">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">지속가능경영 보고서</h2>
            <p className="mt-4 text-lg text-gray-600">
              컬리버의 ESG 활동과 성과에 대한 상세 내용을 확인하실 수 있습니다.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <ul className="divide-y divide-gray-200">
                {reports.map((report, index) => (
                  <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="w-8 h-8 text-blue-500 mr-4" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
                          <p className="text-sm text-gray-500">
                            {report.date} | {report.size}
                          </p>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200"
                      >
                        <ArrowDownToLine className="w-4 h-4 mr-2" />
                        다운로드
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            함께 만드는 지속 가능한 미래
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            컬리버는 앞으로도 투명한 ESG 경영을 통해 사회에 기여하고, 모든 이해관계자와 함께 성장하겠습니다.
          </p>
          <a href="/pr/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-transform transform hover:scale-105">
            문의하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default EsgManagement;
