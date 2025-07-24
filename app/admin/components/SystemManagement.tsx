'use client';

import { useState } from 'react';

export default function SystemManagement() {
  const [activeTab, setActiveTab] = useState('security');

  const securitySettings = [
    { id: 1, name: '2단계 인증', description: '로그인 시 추가 보안 인증', enabled: true },
    { id: 2, name: '자동 로그아웃', description: '30분 비활성 시 자동 로그아웃', enabled: true },
    { id: 3, name: 'IP 접근 제한', description: '허용된 IP에서만 접근 가능', enabled: false },
    { id: 4, name: '브루트포스 방어', description: '무차별 대입 공격 방어', enabled: true },
  ];

  const backupHistory = [
    { id: 1, type: '전체 백업', date: '2024-01-15 03:00', size: '2.3GB', status: '완료' },
    { id: 2, type: '데이터베이스 백업', date: '2024-01-14 03:00', size: '850MB', status: '완료' },
    { id: 3, type: '전체 백업', date: '2024-01-13 03:00', size: '2.1GB', status: '완료' },
    { id: 4, type: '데이터베이스 백업', date: '2024-01-12 03:00', size: '820MB', status: '완료' },
  ];

  const systemLogs = [
    { id: 1, type: 'INFO', message: '사용자 로그인: admin@kuliver.com', timestamp: '2024-01-15 14:30:15' },
    { id: 2, type: 'WARNING', message: '센서 A동 연결 불안정', timestamp: '2024-01-15 14:25:32' },
    { id: 3, type: 'ERROR', message: '데이터베이스 연결 오류', timestamp: '2024-01-15 14:20:45' },
    { id: 4, type: 'INFO', message: '자동 백업 완료', timestamp: '2024-01-15 03:00:00' },
  ];

  const systemStatus = {
    cpu: 45,
    memory: 68,
    disk: 34,
    network: 23,
    uptime: '15일 8시간 32분',
    lastReboot: '2024-01-01 02:00:00',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">시스템 관리</h2>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'security' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          보안 설정
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'backup' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          백업 관리
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'logs' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          로그 관리
        </button>
        <button
          onClick={() => setActiveTab('monitoring')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'monitoring' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          시스템 모니터링
        </button>
      </div>

      {activeTab === 'security' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">보안 설정</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {securitySettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">{setting.name}</h4>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setting.enabled}
                      className="sr-only peer"
                      onChange={() => {}}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">보안 권장사항</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 정기적으로 비밀번호를 변경하세요</li>
                <li>• 2단계 인증을 활성화하세요</li>
                <li>• 시스템 로그를 정기적으로 확인하세요</li>
                <li>• 불필요한 사용자 계정을 삭제하세요</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'backup' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">백업 관리</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap">
                <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                <span>백업 실행</span>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800">자동 백업</h4>
                  <p className="text-sm text-blue-600 mt-1">매일 03:00 자동 실행</p>
                  <p className="text-xs text-blue-500 mt-2">다음 백업: 2024-01-16 03:00</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800">백업 저장소</h4>
                  <p className="text-sm text-green-600 mt-1">클라우드 저장소</p>
                  <p className="text-xs text-green-500 mt-2">용량: 50GB / 100GB</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800">보관 정책</h4>
                  <p className="text-sm text-purple-600 mt-1">30일 보관</p>
                  <p className="text-xs text-purple-500 mt-2">30일 후 자동 삭제</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">백업 이력</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">백업 유형</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">실행 시간</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">파일 크기</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {backupHistory.map((backup) => (
                    <tr key={backup.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{backup.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{backup.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{backup.size}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {backup.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                            <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-800 whitespace-nowrap">
                            <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-800 whitespace-nowrap">
                            <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">시스템 로그</h3>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option>모든 로그</option>
                <option>에러 로그</option>
                <option>경고 로그</option>
                <option>정보 로그</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
                새로고침
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">레벨</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">메시지</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">시간</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {systemLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        log.type === 'ERROR' ? 'bg-red-100 text-red-800' :
                        log.type === 'WARNING' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{log.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'monitoring' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-600">CPU 사용률</h4>
                <i className="ri-cpu-line w-5 h-5 text-blue-500 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{systemStatus.cpu}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${systemStatus.cpu}%` }}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-600">메모리 사용률</h4>
                <i className="ri-hard-drive-line w-5 h-5 text-green-500 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{systemStatus.memory}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${systemStatus.memory}%` }}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-600">디스크 사용률</h4>
                <i className="ri-database-line w-5 h-5 text-purple-500 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{systemStatus.disk}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${systemStatus.disk}%` }}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-600">네트워크 사용률</h4>
                <i className="ri-wifi-line w-5 h-5 text-orange-500 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{systemStatus.network}%</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${systemStatus.network}%` }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">시스템 정보</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">시스템 가동 시간</span>
                    <span className="text-sm font-medium text-gray-900">{systemStatus.uptime}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">마지막 재시작</span>
                    <span className="text-sm font-medium text-gray-900">{systemStatus.lastReboot}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">운영체제</span>
                    <span className="text-sm font-medium text-gray-900">Linux Ubuntu 22.04</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">활성 프로세스</span>
                    <span className="text-sm font-medium text-gray-900">156개</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">활성 사용자</span>
                    <span className="text-sm font-medium text-gray-900">4명</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">시스템 버전</span>
                    <span className="text-sm font-medium text-gray-900">v2.1.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}