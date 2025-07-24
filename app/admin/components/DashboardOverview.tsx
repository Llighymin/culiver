'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function DashboardOverview() {
  const sensorData = [
    { time: '00:00', temp: 24.5, oxygen: 8.2, ph: 7.1 },
    { time: '04:00', temp: 24.3, oxygen: 8.1, ph: 7.0 },
    { time: '08:00', temp: 25.1, oxygen: 8.3, ph: 7.2 },
    { time: '12:00', temp: 26.2, oxygen: 8.0, ph: 7.1 },
    { time: '16:00', temp: 25.8, oxygen: 7.9, ph: 7.0 },
    { time: '20:00', temp: 25.2, oxygen: 8.1, ph: 7.1 },
  ];

  const visitData = [
    { date: '월', visits: 420 },
    { date: '화', visits: 380 },
    { date: '수', visits: 490 },
    { date: '목', visits: 350 },
    { date: '금', visits: 520 },
    { date: '토', visits: 280 },
    { date: '일', visits: 310 },
  ];

  const stats = [
    { title: '총 견적 요청', value: '1,234', change: '+12.3%', icon: 'ri-file-list-line', color: 'bg-blue-500' },
    { title: '등록 제품', value: '89', change: '+5.2%', icon: 'ri-box-3-line', color: 'bg-green-500' },
    { title: '오늘 방문자', value: '2,841', change: '+8.1%', icon: 'ri-user-line', color: 'bg-purple-500' },
    { title: '활성 알람', value: '3', change: '-2', icon: 'ri-error-warning-line', color: 'bg-red-500' },
  ];

  const recentQuotes = [
    { id: 'Q001', company: '(주)해양테크', product: '수온센서 시스템', date: '2024-01-15', status: '검토중' },
    { id: 'Q002', company: '바다물산', product: '용존산소 측정기', date: '2024-01-14', status: '발송완료' },
    { id: 'Q003', company: '해양개발', product: 'pH 모니터링', date: '2024-01-13', status: '작성중' },
    { id: 'Q004', company: '수산유통', product: '염분 측정 시스템', date: '2024-01-12', status: '완료' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">대시보드</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
          <span>마지막 업데이트: 2024-01-15 14:30</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <i className={`${stat.icon} text-white w-6 h-6 flex items-center justify-center`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">양식장 센서 데이터</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#3b82f6" name="수온(°C)" />
              <Line type="monotone" dataKey="oxygen" stroke="#10b981" name="용존산소(mg/L)" />
              <Line type="monotone" dataKey="ph" stroke="#f59e0b" name="pH" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">주간 방문자 현황</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={visitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visits" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">최근 견적 요청</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">견적번호</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사명</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">요청일</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quote.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      quote.status === '완료' ? 'bg-green-100 text-green-800' :
                      quote.status === '발송완료' ? 'bg-blue-100 text-blue-800' :
                      quote.status === '검토중' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}