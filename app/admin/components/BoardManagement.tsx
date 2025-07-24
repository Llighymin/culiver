'use client';

import { useState } from 'react';

export default function BoardManagement() {
  const [activeTab, setActiveTab] = useState('notice');
  const [showPostModal, setShowPostModal] = useState(false);

  const notices = [
    { id: 1, title: '시스템 정기 점검 안내', author: '관리자', date: '2024-01-15', views: 245, status: '게시' },
    { id: 2, title: '신제품 출시 안내', author: '관리자', date: '2024-01-14', views: 189, status: '게시' },
    { id: 3, title: '연말 휴무 안내', author: '관리자', date: '2024-01-13', views: 156, status: '비공개' },
  ];

  const news = [
    { id: 1, title: '컬리버, 스마트 양식 기술 특허 획득', author: '홍보팀', date: '2024-01-15', views: 892, status: '게시' },
    { id: 2, title: '해양수산부 장관 방문 및 간담회', author: '홍보팀', date: '2024-01-14', views: 654, status: '게시' },
    { id: 3, title: '2024 수산업 박람회 참가', author: '홍보팀', date: '2024-01-13', views: 423, status: '임시저장' },
  ];

  const techDocs = [
    { id: 1, title: '수온 센서 설치 가이드', author: '기술팀', date: '2024-01-15', downloads: 89, status: '게시' },
    { id: 2, title: 'pH 측정기 교정 방법', author: '기술팀', date: '2024-01-14', downloads: 65, status: '게시' },
    { id: 3, title: '시스템 유지보수 매뉴얼', author: '기술팀', date: '2024-01-13', downloads: 124, status: '게시' },
  ];

  const faqs = [
    { id: 1, question: '센서 교체 주기는 얼마나 되나요?', category: '유지보수', author: '고객지원', date: '2024-01-15', status: '게시' },
    { id: 2, question: '데이터 백업은 어떻게 진행되나요?', category: '시스템', author: '고객지원', date: '2024-01-14', status: '게시' },
    { id: 3, question: '알람 설정을 변경할 수 있나요?', category: '기능', author: '고객지원', date: '2024-01-13', status: '게시' },
  ];

  const getTabData = () => {
    switch (activeTab) {
      case 'notice': return notices;
      case 'news': return news;
      case 'tech': return techDocs;
      case 'faq': return faqs;
      default: return notices;
    }
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'notice': return '공지사항';
      case 'news': return '보도자료';
      case 'tech': return '기술자료';
      case 'faq': return 'FAQ';
      default: return '공지사항';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">게시판 관리</h2>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('notice')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'notice' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          공지사항
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'news' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          보도자료
        </button>
        <button
          onClick={() => setActiveTab('tech')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'tech' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          기술자료
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'faq' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          FAQ
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{getTabTitle()} 관리</h3>
          <button
            onClick={() => setShowPostModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
          >
            <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
            <span>새 게시물</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {activeTab === 'faq' ? '질문' : '제목'}
                </th>
                {activeTab === 'faq' && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {activeTab === 'tech' ? '다운로드' : '조회수'}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {getTabData().map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {'title' in item ? item.title : item.question}
                  </td>
                  {activeTab === 'faq' && 'category' in item && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {item.category}
                      </span>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {'downloads' in item ? item.downloads : 'views' in item ? item.views : null}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === '게시' ? 'bg-green-100 text-green-800' :
                      item.status === '비공개' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-800 whitespace-nowrap">
                        <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
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

      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">새 {getTabTitle()} 작성</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={activeTab === 'faq' ? '질문을 입력하세요' : '제목을 입력하세요'}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              {activeTab === 'faq' && (
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                  <option>카테고리 선택</option>
                  <option>유지보수</option>
                  <option>시스템</option>
                  <option>기능</option>
                  <option>기타</option>
                </select>
              )}
              
              <textarea
                placeholder={activeTab === 'faq' ? '답변을 입력하세요' : '내용을 입력하세요'}
                rows={8}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-700">즉시 게시</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-700">상단 고정</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowPostModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 whitespace-nowrap"
              >
                취소
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors whitespace-nowrap">
                임시저장
              </button>
              <button
                onClick={() => setShowPostModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                게시
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}