'use client';

import { useState } from 'react';

export default function UserManagement() {
  const [activeTab, setActiveTab] = useState('users');
  const [showUserModal, setShowUserModal] = useState(false);

  const users = [
    { id: 1, name: '김관리', email: 'admin@kuliver.com', role: '최고관리자', status: '활성', lastLogin: '2024-01-15 14:30' },
    { id: 2, name: '이편집', email: 'editor@kuliver.com', role: '편집자', status: '활성', lastLogin: '2024-01-15 12:15' },
    { id: 3, name: '박모니터', email: 'monitor@kuliver.com', role: '모니터링', status: '활성', lastLogin: '2024-01-15 10:45' },
    { id: 4, name: '최고객', email: 'customer@kuliver.com', role: '고객', status: '비활성', lastLogin: '2024-01-10 16:20' },
  ];

  const inquiries = [
    { id: 1, name: '김문의', email: 'inquiry@example.com', subject: '제품 견적 문의', date: '2024-01-15', status: '답변완료' },
    { id: 2, name: '이질문', email: 'question@example.com', subject: '기술 지원 요청', date: '2024-01-14', status: '처리중' },
    { id: 3, name: '박도움', email: 'help@example.com', subject: '설치 관련 문의', date: '2024-01-13', status: '대기' },
  ];

  const consultations = [
    { id: 1, name: '최상담', company: '해양테크', phone: '010-1234-5678', date: '2024-01-16', time: '14:00', status: '예약완료' },
    { id: 2, name: '정미팅', company: '바다물산', phone: '010-2345-6789', date: '2024-01-17', time: '10:00', status: '예약완료' },
    { id: 3, name: '오회의', company: '수산개발', phone: '010-3456-7890', date: '2024-01-18', time: '15:30', status: '대기' },
  ];

  const permissions = [
    { id: 1, name: '최고관리자', description: '모든 권한', users: 1, permissions: ['읽기', '쓰기', '삭제', '관리'] },
    { id: 2, name: '편집자', description: '콘텐츠 편집 권한', users: 3, permissions: ['읽기', '쓰기'] },
    { id: 3, name: '모니터링', description: '모니터링 전용', users: 2, permissions: ['읽기'] },
    { id: 4, name: '고객', description: '기본 사용자', users: 45, permissions: ['읽기'] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">사용자 관리</h2>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'users' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          사용자 목록
        </button>
        <button
          onClick={() => setActiveTab('permissions')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'permissions' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          권한 관리
        </button>
        <button
          onClick={() => setActiveTab('inquiries')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'inquiries' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          고객 문의
        </button>
        <button
          onClick={() => setActiveTab('consultations')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'consultations' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          상담 예약
        </button>
      </div>

      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">사용자 목록</h3>
            <button
              onClick={() => setShowUserModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              <span>새 사용자</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">역할</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">최근 로그인</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === '활성' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastLogin}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                          <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
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
      )}

      {activeTab === 'permissions' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">권한 관리</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {permissions.map((permission) => (
                <div key={permission.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-800">{permission.name}</h4>
                      <p className="text-sm text-gray-600">{permission.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{permission.users}명</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm whitespace-nowrap">
                        수정
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {permission.permissions.map((perm) => (
                      <span key={perm} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {perm}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inquiries' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">고객 문의 처리</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">문의일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inquiry.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inquiry.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inquiry.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{inquiry.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        inquiry.status === '답변완료' ? 'bg-green-100 text-green-800' :
                        inquiry.status === '처리중' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                          <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-green-600 hover:text-green-800 whitespace-nowrap">
                          <i className="ri-mail-send-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'consultations' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">상담 예약 관리</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연락처</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">예약일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">시간</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {consultations.map((consultation) => (
                  <tr key={consultation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{consultation.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consultation.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consultation.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consultation.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consultation.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        consultation.status === '예약완료' ? 'bg-green-100 text-green-800' :
                        consultation.status === '완료' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {consultation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                          <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-green-600 hover:text-green-800 whitespace-nowrap">
                          <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">새 사용자 추가</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="이름"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="이메일"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option>역할 선택</option>
                <option>최고관리자</option>
                <option>편집자</option>
                <option>모니터링</option>
                <option>고객</option>
              </select>
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowUserModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 whitespace-nowrap"
              >
                취소
              </button>
              <button
                onClick={() => setShowUserModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}