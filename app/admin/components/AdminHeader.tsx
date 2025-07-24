'use client';

import { useState } from 'react';

export default function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, type: 'alert', message: '양식장 A동 수온 이상 감지', time: '5분 전' },
    { id: 2, type: 'info', message: '새로운 견적 요청 접수', time: '15분 전' },
    { id: 3, type: 'warning', message: '시스템 업데이트 필요', time: '1시간 전' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-800">주식회사 컬리버 관리자 시스템</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <i className="ri-notification-line w-5 h-5 flex items-center justify-center"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">알림</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <i className={`w-4 h-4 flex items-center justify-center mt-1 ${
                          notification.type === 'alert' ? 'ri-error-warning-line text-red-500' :
                          notification.type === 'warning' ? 'ri-alert-line text-yellow-500' :
                          'ri-information-line text-blue-500'
                        }`}></i>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white w-4 h-4 flex items-center justify-center"></i>
              </div>
              <span className="text-sm font-medium">관리자</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-2">
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md whitespace-nowrap">
                    <i className="ri-user-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    프로필 설정
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md whitespace-nowrap">
                    <i className="ri-settings-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    계정 설정
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md whitespace-nowrap">
                    <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    로그아웃
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}