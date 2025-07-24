'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export default function StatisticsAnalysis() {
  const [activeTab, setActiveTab] = useState('website');

  const websiteStats = [
    { name: '월', visitors: 12450, pageViews: 35600, bounceRate: 45 },
    { name: '화', visitors: 13200, pageViews: 38900, bounceRate: 42 },
    { name: '수', visitors: 11800, pageViews: 34200, bounceRate: 48 },
    { name: '목', visitors: 14600, pageViews: 41200, bounceRate: 40 },
    { name: '금', visitors: 16800, pageViews: 45600, bounceRate: 38 },
    { name: '토', visitors: 9200, pageViews: 24800, bounceRate: 52 },
    { name: '일', visitors: 8600, pageViews: 22400, bounceRate: 55 },
  ];

  const productStats = [
    { name: '수온 센서', views: 2340, inquiries: 45, conversion: 1.9 },
    { name: '용존산소 측정기', views: 1890, inquiries: 32, conversion: 1.7 },
    { name: 'pH 자동 조절', views: 1560, inquiries: 28, conversion: 1.8 },
    { name: '염분 농도 센서', views: 1220, inquiries: 19, conversion: 1.6 },
    { name: '모니터링 시스템', views: 980, inquiries: 15, conversion: 1.5 },
  ];

  const quoteStats = [
    { month: '1월', requests: 45, completed: 38, revenue: 85000000 },
    { month: '2월', requests: 52, completed: 41, revenue: 92000000 },
    { month: '3월', requests: 38, completed: 35, revenue: 78000000 },
    { month: '4월', requests: 61, completed: 48, revenue: 105000000 },
    { month: '5월', requests: 55, completed: 52, revenue: 118000000 },
    { month: '6월', requests: 49, completed: 44, revenue: 96000000 },
  ];

  const smartStoreStats = [
    { month: '1월', sales: 15600000, orders: 234, avgOrder: 66666 },
    { month: '2월', sales: 18200000, orders: 267, avgOrder: 68164 },
    { month: '3월', sales: 14800000, orders: 198, avgOrder: 74747 },
    { month: '4월', sales: 21300000, orders: 289, avgOrder: 73702 },
    { month: '5월', sales: 24500000, orders: 324, avgOrder: 75617 },
    { month: '6월', sales: 19800000, orders: 256, avgOrder: 77344 },
  ];

  const customerBehavior = [
    { name: '신규 방문자', value: 35, color: '#3b82f6' },
    { name: '재방문자', value: 45, color: '#10b981' },
    { name: '단골 고객', value: 20, color: '#f59e0b' },
  ];

  const deviceStats = [
    { name: '데스크톱', value: 55, color: '#6366f1' },
    { name: '모바일', value: 35, color: '#ec4899' },
    { name: '태블릿', value: 10, color: '#14b8a6' },
  ];

  const topPages = [
    { page: '메인 페이지', views: 45600, bounce: 32 },
    { page: '제품 소개', views: 32400, bounce: 28 },
    { page: '견적 요청', views: 18900, bounce: 45 },
    { page: '고객 지원', views: 15600, bounce: 38 },
    { page: '회사 소개', views: 12300, bounce: 42 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">통계 & 분석</h2>
        <div className="flex items-center space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
            <option>최근 7일</option>
            <option>최근 30일</option>
            <option>최근 3개월</option>
            <option>최근 6개월</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('website')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'website' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          웹사이트 통계
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'products' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          제품별 통계
        </button>
        <button
          onClick={() => setActiveTab('quotes')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'quotes' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          견적 요청 통계
        </button>
        <button
          onClick={() => setActiveTab('store')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'store' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          스마트스토어 분석
        </button>
        <button
          onClick={() => setActiveTab('behavior')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'behavior' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          고객 행동 분석
        </button>
      </div>

      {activeTab === 'website' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">총 방문자</p>
                  <p className="text-2xl font-bold text-gray-900">86,650</p>
                  <p className="text-sm text-green-600">+12.5%</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ri-user-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">페이지 뷰</p>
                  <p className="text-2xl font-bold text-gray-900">242,700</p>
                  <p className="text-sm text-green-600">+8.3%</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <i className="ri-eye-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">평균 세션</p>
                  <p className="text-2xl font-bold text-gray-900">4m 32s</p>
                  <p className="text-sm text-red-600">-2.1%</p>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">이탈률</p>
                  <p className="text-2xl font-bold text-gray-900">45.2%</p>
                  <p className="text-sm text-green-600">-3.4%</p>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <i className="ri-arrow-left-line text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">일별 방문자 추이</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={websiteStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visitors" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">디바이스별 접속 통계</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={deviceStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">인기 페이지</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">페이지</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회수</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이탈률</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{page.page}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{page.views.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{page.bounce}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">제품별 조회 통계</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={productStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#3b82f6" name="조회수" />
                <Bar dataKey="inquiries" fill="#10b981" name="문의수" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">제품별 성과</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품명</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">조회수</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">문의수</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">전환율</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productStats.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.views.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.inquiries}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.conversion}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'quotes' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">월별 견적 요청 및 완료 현황</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={quoteStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="requests" stroke="#3b82f6" strokeWidth={2} name="요청" />
                <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="완료" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">월별 매출 현황</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={quoteStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${(value / 1000000).toFixed(0)}백만원`} />
                <Bar dataKey="revenue" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'store' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">스마트스토어 월별 매출</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={smartStoreStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${(value / 1000000).toFixed(1)}백만원`} />
                <Line type="monotone" dataKey="sales" stroke="#ec4899" strokeWidth={2} name="매출" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">총 매출</h4>
              <p className="text-2xl font-bold text-gray-900">1.14억원</p>
              <p className="text-sm text-green-600">+15.3%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">총 주문수</h4>
              <p className="text-2xl font-bold text-gray-900">1,568건</p>
              <p className="text-sm text-green-600">+12.8%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-sm font-medium text-gray-600 mb-2">평균 주문금액</h4>
              <p className="text-2xl font-bold text-gray-900">72,711원</p>
              <p className="text-sm text-green-600">+3.2%</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'behavior' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">고객 유형별 분포</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={customerBehavior}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {customerBehavior.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">고객 행동 지표</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">평균 페이지 체류시간</span>
                  <span className="text-sm font-medium text-gray-900">2분 45초</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">평균 세션 페이지 수</span>
                  <span className="text-sm font-medium text-gray-900">4.2페이지</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">재방문율</span>
                  <span className="text-sm font-medium text-gray-900">65%</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">문의 전환율</span>
                  <span className="text-sm font-medium text-gray-900">2.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}