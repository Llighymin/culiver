
'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

export default function MonitoringDashboard() {
  const [selectedFarm, setSelectedFarm] = useState('farm-a');
  const [selectedSensor, setSelectedSensor] = useState('temperature');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [isAutoRefresh, setIsAutoRefresh] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const farms = [
    { 
      id: 'farm-a', 
      name: '양식장 A동', 
      status: 'normal',
      location: '경남 통영',
      capacity: '50,000L',
      fishCount: 2400,
      feedingTime: '14:30',
      lastMaintenance: '2024-01-15'
    },
    { 
      id: 'farm-b', 
      name: '양식장 B동', 
      status: 'warning',
      location: '경남 거제',
      capacity: '75,000L',
      fishCount: 3200,
      feedingTime: '15:00',
      lastMaintenance: '2024-01-10'
    },
    { 
      id: 'farm-c', 
      name: '양식장 C동', 
      status: 'normal',
      location: '경남 고성',
      capacity: '60,000L',
      fishCount: 2800,
      feedingTime: '14:45',
      lastMaintenance: '2024-01-18'
    },
    { 
      id: 'farm-d', 
      name: '양식장 D동', 
      status: 'alert',
      location: '경남 사천',
      capacity: '80,000L',
      fishCount: 3600,
      feedingTime: '15:15',
      lastMaintenance: '2024-01-20'
    },
  ];

  const sensorData = {
    temperature: [
      { time: '00:00', value: 24.5, optimal: 25.0, min: 23.0, max: 26.0 },
      { time: '02:00', value: 24.3, optimal: 25.0, min: 23.2, max: 25.8 },
      { time: '04:00', value: 24.8, optimal: 25.0, min: 23.5, max: 26.2 },
      { time: '06:00', value: 25.1, optimal: 25.0, min: 23.8, max: 26.5 },
      { time: '08:00', value: 25.4, optimal: 25.0, min: 24.0, max: 26.8 },
      { time: '10:00', value: 25.8, optimal: 25.0, min: 24.2, max: 27.0 },
      { time: '12:00', value: 26.2, optimal: 25.0, min: 24.5, max: 27.2 },
      { time: '14:00', value: 25.9, optimal: 25.0, min: 24.3, max: 26.9 },
      { time: '16:00', value: 25.6, optimal: 25.0, min: 24.1, max: 26.7 },
      { time: '18:00', value: 25.3, optimal: 25.0, min: 23.9, max: 26.4 },
      { time: '20:00', value: 25.0, optimal: 25.0, min: 23.7, max: 26.1 },
      { time: '22:00', value: 24.7, optimal: 25.0, min: 23.5, max: 25.9 },
    ],
    oxygen: [
      { time: '00:00', value: 8.2, optimal: 8.0, min: 7.5, max: 8.5 },
      { time: '02:00', value: 8.1, optimal: 8.0, min: 7.4, max: 8.4 },
      { time: '04:00', value: 8.3, optimal: 8.0, min: 7.6, max: 8.6 },
      { time: '06:00', value: 8.0, optimal: 8.0, min: 7.3, max: 8.3 },
      { time: '08:00', value: 7.9, optimal: 8.0, min: 7.2, max: 8.2 },
      { time: '10:00', value: 7.8, optimal: 8.0, min: 7.1, max: 8.1 },
      { time: '12:00', value: 7.6, optimal: 8.0, min: 7.0, max: 8.0 },
      { time: '14:00', value: 7.7, optimal: 8.0, min: 7.1, max: 8.1 },
      { time: '16:00', value: 7.9, optimal: 8.0, min: 7.3, max: 8.3 },
      { time: '18:00', value: 8.1, optimal: 8.0, min: 7.5, max: 8.5 },
      { time: '20:00', value: 8.0, optimal: 8.0, min: 7.4, max: 8.4 },
      { time: '22:00', value: 8.2, optimal: 8.0, min: 7.6, max: 8.6 },
    ],
    ph: [
      { time: '00:00', value: 7.1, optimal: 7.0, min: 6.8, max: 7.3 },
      { time: '02:00', value: 7.0, optimal: 7.0, min: 6.7, max: 7.2 },
      { time: '04:00', value: 7.2, optimal: 7.0, min: 6.9, max: 7.4 },
      { time: '06:00', value: 7.1, optimal: 7.0, min: 6.8, max: 7.3 },
      { time: '08:00', value: 6.9, optimal: 7.0, min: 6.6, max: 7.1 },
      { time: '10:00', value: 6.8, optimal: 7.0, min: 6.5, max: 7.0 },
      { time: '12:00', value: 6.7, optimal: 7.0, min: 6.4, max: 6.9 },
      { time: '14:00', value: 6.9, optimal: 7.0, min: 6.6, max: 7.1 },
      { time: '16:00', value: 7.0, optimal: 7.0, min: 6.7, max: 7.2 },
      { time: '18:00', value: 7.1, optimal: 7.0, min: 6.8, max: 7.3 },
      { time: '20:00', value: 7.2, optimal: 7.0, min: 6.9, max: 7.4 },
      { time: '22:00', value: 7.0, optimal: 7.0, min: 6.7, max: 7.2 },
    ],
    ammonia: [
      { time: '00:00', value: 0.25, optimal: 0.2, min: 0.15, max: 0.3 },
      { time: '02:00', value: 0.23, optimal: 0.2, min: 0.18, max: 0.28 },
      { time: '04:00', value: 0.28, optimal: 0.2, min: 0.23, max: 0.33 },
      { time: '06:00', value: 0.31, optimal: 0.2, min: 0.26, max: 0.36 },
      { time: '08:00', value: 0.35, optimal: 0.2, min: 0.30, max: 0.40 },
      { time: '10:00', value: 0.38, optimal: 0.2, min: 0.33, max: 0.43 },
      { time: '12:00', value: 0.33, optimal: 0.2, min: 0.28, max: 0.38 },
      { time: '14:00', value: 0.30, optimal: 0.2, min: 0.25, max: 0.35 },
      { time: '16:00', value: 0.28, optimal: 0.2, min: 0.23, max: 0.33 },
      { time: '18:00', value: 0.26, optimal: 0.2, min: 0.21, max: 0.31 },
      { time: '20:00', value: 0.24, optimal: 0.2, min: 0.19, max: 0.29 },
      { time: '22:00', value: 0.22, optimal: 0.2, min: 0.17, max: 0.27 },
    ],
    salinity: [
      { time: '00:00', value: 35.2, optimal: 35.0, min: 34.5, max: 35.8 },
      { time: '02:00', value: 35.1, optimal: 35.0, min: 34.6, max: 35.7 },
      { time: '04:00', value: 35.3, optimal: 35.0, min: 34.8, max: 35.9 },
      { time: '06:00', value: 35.0, optimal: 35.0, min: 34.5, max: 35.6 },
      { time: '08:00', value: 34.9, optimal: 35.0, min: 34.4, max: 35.5 },
      { time: '10:00', value: 34.8, optimal: 35.0, min: 34.3, max: 35.4 },
      { time: '12:00', value: 34.7, optimal: 35.0, min: 34.2, max: 35.3 },
      { time: '14:00', value: 34.9, optimal: 35.0, min: 34.4, max: 35.5 },
      { time: '16:00', value: 35.1, optimal: 35.0, min: 34.6, max: 35.7 },
      { time: '18:00', value: 35.2, optimal: 35.0, min: 34.7, max: 35.8 },
      { time: '20:00', value: 35.0, optimal: 35.0, min: 34.5, max: 35.6 },
      { time: '22:00', value: 34.8, optimal: 35.0, min: 34.3, max: 35.4 },
    ],
  };

  const currentValues = {
    temperature: { value: 25.9, unit: '°C', status: 'normal', trend: 'up', change: '+0.3' },
    oxygen: { value: 7.7, unit: 'mg/L', status: 'warning', trend: 'down', change: '-0.5' },
    ph: { value: 6.9, unit: 'pH', status: 'normal', trend: 'stable', change: '0.0' },
    ammonia: { value: 0.3, unit: 'mg/L', status: 'warning', trend: 'up', change: '+0.1' },
    salinity: { value: 35.2, unit: 'ppt', status: 'normal', trend: 'stable', change: '0.0' },
    turbidity: { value: 15.3, unit: 'NTU', status: 'normal', trend: 'down', change: '-2.1' },
    pressure: { value: 1.2, unit: 'bar', status: 'normal', trend: 'stable', change: '0.0' },
    flow: { value: 245, unit: 'L/min', status: 'normal', trend: 'up', change: '+12' },
  };

  const equipmentStatus = [
    { name: '에어레이터 1', status: 'running', power: 85, efficiency: 92 },
    { name: '에어레이터 2', status: 'running', power: 78, efficiency: 88 },
    { name: '여과기 A', status: 'running', power: 92, efficiency: 95 },
    { name: '여과기 B', status: 'maintenance', power: 0, efficiency: 0 },
    { name: '급수 펌프', status: 'running', power: 67, efficiency: 89 },
    { name: '배수 펌프', status: 'running', power: 52, efficiency: 91 },
    { name: '자동 급이기', status: 'standby', power: 15, efficiency: 100 },
    { name: '온도 조절기', status: 'running', power: 88, efficiency: 87 },
  ];

  const productionData = [
    { month: '1월', production: 2400, target: 2500, efficiency: 96 },
    { month: '2월', production: 2600, target: 2500, efficiency: 104 },
    { month: '3월', production: 2350, target: 2500, efficiency: 94 },
    { month: '4월', production: 2700, target: 2500, efficiency: 108 },
    { month: '5월', production: 2450, target: 2500, efficiency: 98 },
    { month: '6월', production: 2800, target: 2500, efficiency: 112 },
  ];

  const alerts = [
    { id: 1, type: 'critical', message: '양식장 D동 암모니아 농도 임계치 초과', time: '5분 전', severity: 'high', affected: '양식장 D동' },
    { id: 2, type: 'warning', message: '양식장 B동 용존산소 수치 하락', time: '10분 전', severity: 'medium', affected: '양식장 B동' },
    { id: 3, type: 'alert', message: '양식장 D동 수온 급상승 감지', time: '25분 전', severity: 'high', affected: '양식장 D동' },
    { id: 4, type: 'maintenance', message: '양식장 B동 여과기 정기점검 필요', time: '1시간 전', severity: 'medium', affected: '양식장 B동' },
    { id: 5, type: 'info', message: '양식장 A동 pH 정상화', time: '1시간 전', severity: 'low', affected: '양식장 A동' },
    { id: 6, type: 'warning', message: '양식장 C동 급수 펌프 효율 저하', time: '2시간 전', severity: 'medium', affected: '양식장 C동' },
  ];

  const weatherData = {
    temperature: 18,
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    condition: 'partly-cloudy',
    forecast: [
      { time: '지금', temp: 18, condition: 'partly-cloudy' },
      { time: '15시', temp: 19, condition: 'sunny' },
      { time: '16시', temp: 20, condition: 'sunny' },
      { time: '17시', temp: 18, condition: 'cloudy' },
      { time: '18시', temp: 17, condition: 'cloudy' },
    ]
  };

  const energyData = [
    { name: '에어레이터', value: 35, color: '#3b82f6' },
    { name: '여과시설', value: 25, color: '#10b981' },
    { name: '펌프', value: 20, color: '#f59e0b' },
    { name: '온도조절', value: 15, color: '#ef4444' },
    { name: '기타', value: 5, color: '#8b5cf6' },
  ];

  const selectedFarmData = farms.find(farm => farm.id === selectedFarm);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">실시간 모니터링</h2>
          <div className="text-sm text-gray-600" suppressHydrationWarning={true}>
            마지막 업데이트: {currentTime.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
          >
            <option value="1h">1시간</option>
            <option value="6h">6시간</option>
            <option value="24h">24시간</option>
            <option value="7d">7일</option>
          </select>
          <select
            value={selectedFarm}
            onChange={(e) => setSelectedFarm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
          >
            {farms.map((farm) => (
              <option key={farm.id} value={farm.id}>{farm.name}</option>
            ))}
          </select>
          <button
            onClick={() => setIsAutoRefresh(!isAutoRefresh)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              isAutoRefresh 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isAutoRefresh ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span>자동 새로고침</span>
            </div>
          </button>
        </div>
      </div>

      {/* 양식장 정보 카드 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">선택된 양식장 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-sm text-gray-600">양식장명</div>
            <div className="text-lg font-semibold text-gray-800">{selectedFarmData?.name}</div>
            <div className="text-sm text-gray-500">{selectedFarmData?.location}</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">수용량 / 어류수</div>
            <div className="text-lg font-semibold text-gray-800">{selectedFarmData?.capacity}</div>
            <div className="text-sm text-gray-500">{selectedFarmData?.fishCount?.toLocaleString()}마리</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">다음 급이 시간</div>
            <div className="text-lg font-semibold text-gray-800">{selectedFarmData?.feedingTime}</div>
            <div className="text-sm text-gray-500">자동 급이</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">마지막 점검</div>
            <div className="text-lg font-semibold text-gray-800">{selectedFarmData?.lastMaintenance}</div>
            <div className="text-sm text-gray-500">정기점검 완료</div>
          </div>
        </div>
      </div>

      {/* 메인 센서 데이터 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(currentValues).map(([key, data]) => (
          <div key={key} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-600">
                {key === 'temperature' ? '수온' :
                 key === 'oxygen' ? '용존산소' :
                 key === 'ph' ? 'pH' :
                 key === 'ammonia' ? '암모니아' :
                 key === 'salinity' ? '염분' :
                 key === 'turbidity' ? '탁도' :
                 key === 'pressure' ? '수압' :
                 '유량'}
              </h4>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  data.status === 'normal' ? 'bg-green-500' :
                  data.status === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <i className={`w-4 h-4 flex items-center justify-center ${
                  data.trend === 'up' ? 'ri-arrow-up-line text-red-500' :
                  data.trend === 'down' ? 'ri-arrow-down-line text-blue-500' :
                  'ri-subtract-line text-gray-400'
                }`}></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{data.value}</div>
            <div className="flex items-center justify-between mt-1">
              <div className="text-sm text-gray-500">{data.unit}</div>
              <div className={`text-xs font-medium ${
                data.trend === 'up' ? 'text-red-600' :
                data.trend === 'down' ? 'text-blue-600' :
                'text-gray-500'
              }`}>{data.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* 센서 데이터 차트 */}
        <div className="xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">센서 데이터 추이</h3>
            <div className="flex items-center space-x-2">
              <select
                value={selectedSensor}
                onChange={(e) => setSelectedSensor(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
              >
                <option value="temperature">수온</option>
                <option value="oxygen">용존산소</option>
                <option value="ph">pH</option>
                <option value="ammonia">암모니아</option>
                <option value="salinity">염분</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={sensorData[selectedSensor as keyof typeof sensorData]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="max" stackId="1" stroke="#ef4444" fill="#fef2f2" fillOpacity={0.3} />
              <Area type="monotone" dataKey="min" stackId="1" stroke="#3b82f6" fill="#eff6ff" fillOpacity={0.3} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} name="실제값" />
              <Line type="monotone" dataKey="optimal" stroke="#10b981" strokeDasharray="5 5" strokeWidth={2} name="최적값" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 기상 정보 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">기상 정보</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <i className="ri-sun-line w-8 h-8 flex items-center justify-center text-yellow-500"></i>
                <div>
                  <div className="font-semibold text-gray-800">{weatherData.temperature}°C</div>
                  <div className="text-sm text-gray-600">대체로 맑음</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <i className="ri-drop-line w-4 h-4 flex items-center justify-center text-blue-500"></i>
                <span>습도 {weatherData.humidity}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-windy-line w-4 h-4 flex items-center justify-center text-gray-500"></i>
                <span>풍속 {weatherData.windSpeed}m/s</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-dashboard-line w-4 h-4 flex items-center justify-center text-purple-500"></i>
                <span>기압 {weatherData.pressure}hPa</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-700 mb-2">시간별 예보</div>
              <div className="space-y-2">
                {weatherData.forecast.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{item.time}</span>
                    <div className="flex items-center space-x-2">
                      <i className="ri-sun-line w-4 h-4 flex items-center justify-center text-yellow-500"></i>
                      <span className="font-medium">{item.temp}°C</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 장비 상태 및 생산 현황 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* 장비 상태 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">장비 상태</h3>
          <div className="space-y-3">
            {equipmentStatus.map((equipment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    equipment.status === 'running' ? 'bg-green-500' :
                    equipment.status === 'standby' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                  <div>
                    <div className="font-medium text-gray-800">{equipment.name}</div>
                    <div className="text-sm text-gray-600">
                      {equipment.status === 'running' ? '가동중' :
                       equipment.status === 'standby' ? '대기중' :
                       '점검중'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{equipment.power}W</div>
                  <div className="text-xs text-gray-600">효율 {equipment.efficiency}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 생산 현황 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">월별 생산 현황</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="production" fill="#3b82f6" name="생산량" />
              <Bar dataKey="target" fill="#10b981" name="목표량" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 에너지 사용량 및 알람 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* 에너지 사용량 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">에너지 사용량</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={energyData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {energyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {energyData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-medium text-gray-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* 알람 및 경고 */}
        <div className="xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">알람 및 경고</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">총 {alerts.length}건</span>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap">
                  전체 보기
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === 'high' ? 'border-red-500 bg-red-50' :
                  alert.severity === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <i className={`w-5 h-5 flex items-center justify-center mt-0.5 ${
                        alert.severity === 'high' ? 'ri-error-warning-line text-red-500' :
                        alert.severity === 'medium' ? 'ri-alert-line text-yellow-500' :
                        'ri-information-line text-blue-500'
                      }`}></i>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{alert.message}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <p className="text-sm text-gray-600">{alert.time}</p>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                            {alert.affected}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 whitespace-nowrap">
                      <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
