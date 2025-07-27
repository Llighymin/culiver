'use client';

import React from 'react';

const FinancialInfo = () => {
  const financialHighlights = [
    { title: '매출액', value: '1,250억', change: '+15.2%', period: '2024년' },
    { title: '영업이익', value: '120억', change: '+25.8%', period: '2024년' },
    { title: '당기순이익', value: '85억', change: '+30.1%', period: '2024년' },
    { title: '부채비율', value: '45.2%', change: '-5.0%p', period: '2024년 말 기준' },
  ];

  const summaryBalanceSheet = {
    headers: ['항목', '2024년 (제 5기)', '2023년 (제 4기)'],
    rows: [
      ['유동자산', '850억', '720억'],
      ['비유동자산', '1,150억', '980억'],
      ['자산총계', '2,000억', '1,700억'],
      ['유동부채', '400억', '450억'],
      ['비유동부채', '220억', '200억'],
      ['부채총계', '620억', '650억'],
      ['자본금', '100억', '100억'],
      ['이익잉여금', '1,080억', '850억'],
      ['자본총계', '1,380억', '1,050억'],
    ],
  };

  const summaryIncomeStatement = {
    headers: ['항목', '2024년 (제 5기)', '2023년 (제 4기)'],
    rows: [
      ['매출액', '1,250억', '1,085억'],
      ['매출원가', '850억', '750억'],
      ['매출총이익', '400억', '335억'],
      ['판매비와관리비', '280억', '240억'],
      ['영업이익', '120억', '95억'],
      ['법인세차감전순이익', '110억', '80억'],
      ['당기순이익', '85억', '65억'],
    ],
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              재무정보
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버의 주요 재무 현황과 성과를 투명하게 공개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            주요 재무 하이라이트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{item.title}</h3>
                <p className="text-4xl font-bold text-gray-900">{item.value}</p>
                <div className="mt-3">
                  <span className={`text-lg font-semibold ${item.change.startsWith('+') ? 'text-red-600' : 'text-blue-600'}`}>
                    {item.change}
                  </span>
                  <p className="text-sm text-gray-500">({item.period})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Statements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Summary Balance Sheet */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">요약 재무상태표</h2>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      {summaryBalanceSheet.headers.map((header, i) => (
                        <th key={i} scope="col" className={`px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider ${i > 0 ? 'text-right' : ''}`}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {summaryBalanceSheet.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{row[0]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">{row[1]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-right text-sm text-gray-500 mt-2">(단위: 원)</p>
            </div>

            {/* Summary Income Statement */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">요약 손익계산서</h2>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      {summaryIncomeStatement.headers.map((header, i) => (
                        <th key={i} scope="col" className={`px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider ${i > 0 ? 'text-right' : ''}`}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {summaryIncomeStatement.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{row[0]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">{row[1]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-right text-sm text-gray-500 mt-2">(단위: 원)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialInfo;
