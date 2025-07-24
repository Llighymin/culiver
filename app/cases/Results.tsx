'use client';

export default function Results() {
  const overallResults = [
    {
      metric: '누적 고객 수',
      value: '500+',
      description: '다양한 업종의 고객들이 그린웨일을 선택했습니다',
      icon: 'ri-user-line'
    },
    {
      metric: '평균 비용 절감',
      value: '68%',
      description: '기존 대비 폐기물 처리 비용을 대폭 절감했습니다',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      metric: '고객 만족도',
      value: '98%',
      description: '설치 후 고객 만족도 조사 결과입니다',
      icon: 'ri-star-line'
    },
    {
      metric: '환경 개선도',
      value: '92%',
      description: '악취 및 위생 문제 개선 효과입니다',
      icon: 'ri-leaf-line'
    }
  ];

  const industryDistribution = [
    { industry: '외식업', percentage: 35, color: '#4CAF50' },
    { industry: '지자체/공공기관', percentage: 25, color: '#00427A' },
    { industry: '제조업', percentage: 20, color: '#2196F3' },
    { industry: '호텔/숙박업', percentage: 12, color: '#FF9800' },
    { industry: '기타', percentage: 8, color: '#9C27B0' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            전체 성과 현황
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            그린웨일 솔루션의 전체적인 성과와 업종별 분포를 확인해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {overallResults.map((result, index) => (
            <div key={index} className="bg-[#F1F3F4] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${result.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-4xl font-bold text-[#00427A] mb-2">
                {result.value}
              </div>
              <h3 className="text-lg font-semibold text-[#00427A] mb-3">
                {result.metric}
              </h3>
              <p className="text-gray-600 text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#F1F3F4] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#00427A] mb-6 text-center">
              업종별 도입 현황
            </h3>
            <div className="space-y-4">
              {industryDistribution.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 text-sm text-gray-700">
                    {item.industry}
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-10 text-sm font-semibold text-gray-700">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00427A] text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              월별 성장 추이
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span>2023년 대비 고객 증가율</span>
                <span className="font-bold text-[#4CAF50]">+145%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>신규 업종 진출</span>
                <span className="font-bold text-[#4CAF50]">+8개</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>재계약률</span>
                <span className="font-bold text-[#4CAF50]">96%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>추천 도입률</span>
                <span className="font-bold text-[#4CAF50]">87%</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#4CAF50] rounded-lg text-center">
              <p className="font-semibold">
                매월 평균 25% 성장률을 유지하고 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}