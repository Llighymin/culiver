'use client';

import React, { useState } from 'react';

const MemberCard = ({ name, position, committee }: { name: string; position: string; committee: string }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
    <h4 className="text-xl font-bold text-gray-900">{name}</h4>
    <p className="text-blue-600 font-semibold mt-1">{position}</p>
    <p className="text-gray-500 text-sm mt-2">{committee}</p>
  </div>
);

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-2 text-left"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-2 pb-5 bg-white">
          <div className="text-gray-600 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

const CorporateGovernance = () => {
  const boardMembers = [
    { name: '김대표', position: '대표이사', committee: '이사회 의장' },
    { name: '박기술', position: '사내이사, CTO', committee: '기술혁신위원회 위원' },
    { name: '이감사', position: '사외이사', committee: '감사위원회 위원장' },
    { name: '최보상', position: '사외이사', committee: '보상위원회 위원장' },
    { name: '정추천', position: '사외이사', committee: '사외이사후보추천위원회 위원장' },
    { name: '윤지배', position: '사외이사', committee: '내부거래위원회 위원장' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              기업지배구조
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버는 건전하고 투명한 지배구조를 바탕으로 지속가능한 성장을 추구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">지배구조 철학</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            컬리버는 주주, 고객, 임직원 등 모든 이해관계자의 가치를 높이고 사회적 책임을 다하기 위해 독립성, 전문성, 투명성을 갖춘 선진적인 기업지배구조를 확립하고 발전시켜 나가고 있습니다. 이사회의 독립적인 의사결정을 존중하고, 효율적인 감사 및 내부통제 시스템을 운영하여 경영의 투명성을 확보하며, 모든 주주의 권익 보호를 위해 노력합니다.
          </p>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">이사회 구성</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <MemberCard key={index} name={member.name} position={member.position} committee={member.committee} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600">이사회는 사외이사 과반수 구성으로 독립성을 확보하고 있으며, 각 분야의 전문성을 갖춘 이사들이 회사의 주요 의사결정에 참여합니다.</p>
          </div>
        </div>
      </section>

      {/* Committees & Policies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Committees */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">이사회 내 위원회</h2>
            <div className="space-y-2">
              <AccordionItem title="감사위원회">
                <p>회사의 재무 보고 신뢰성을 확보하고, 회계 처리의 투명성을 감독합니다. 또한 내부회계관리제도의 운영 실태를 평가하고, 외부감사인과의 커뮤니케이션을 통해 독립적인 감사 업무를 지원합니다.</p>
              </AccordionItem>
              <AccordionItem title="사외이사후보추천위원회">
                <p>투명하고 공정한 절차에 따라 전문성과 독립성을 겸비한 사외이사 후보를 발굴하고 검증하여 주주총회에 추천합니다. 위원회는 전원 사외이사로 구성되어 독립성을 유지합니다.</p>
              </AccordionItem>
              <AccordionItem title="보상위원회">
                <p>이사의 보수 정책 및 개인별 보수 지급액을 심의하고 결정합니다. 회사의 장기적인 성과와 연계된 합리적인 보상 체계를 수립하여 경영진의 책임 경영을 유도합니다.</p>
              </AccordionItem>
              <AccordionItem title="내부거래위원회">
                <p>회사와 특수관계인 간의 거래에 대한 공정성을 심의하고 승인합니다. 이를 통해 소액주주의 이익을 보호하고 부당한 내부거래를 방지합니다.</p>
              </AccordionItem>
            </div>
          </div>

          {/* Key Policies & Documents */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">주요 정책 및 정관</h2>
            <div className="space-y-4">
              <a href="/ir-docs/articles-of-incorporation.pdf" download className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">정관</h4>
                  <p className="text-sm text-gray-500">회사의 조직과 운영에 관한 기본 규칙</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
              <a href="/ir-docs/board-regulations.pdf" download className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">이사회 규정</h4>
                  <p className="text-sm text-gray-500">이사회의 구성, 권한, 운영 절차에 관한 규정</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
              <a href="/ir-docs/code-of-ethics.pdf" download className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">윤리규범</h4>
                  <p className="text-sm text-gray-500">모든 임직원이 준수해야 할 윤리적 행동 기준</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateGovernance;
