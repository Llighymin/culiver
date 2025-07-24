'use client';

import { useState } from 'react';

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState('pages');
  const [showPageModal, setShowPageModal] = useState(false);

  const pages = [
    { id: 1, title: '메인 페이지', url: '/', status: '게시', lastModified: '2024-01-15' },
    { id: 2, title: '제품 소개', url: '/products', status: '게시', lastModified: '2024-01-14' },
    { id: 3, title: '회사 소개', url: '/about', status: '임시저장', lastModified: '2024-01-13' },
    { id: 4, title: '고객 지원', url: '/support', status: '게시', lastModified: '2024-01-12' },
  ];

  const mediaFiles = [
    { id: 1, name: '제품이미지1.jpg', type: 'image', size: '2.3MB', uploaded: '2024-01-15' },
    { id: 2, name: '회사소개영상.mp4', type: 'video', size: '45.2MB', uploaded: '2024-01-14' },
    { id: 3, name: '카탈로그.pdf', type: 'document', size: '8.7MB', uploaded: '2024-01-13' },
    { id: 4, name: '로고.png', type: 'image', size: '156KB', uploaded: '2024-01-12' },
  ];

  const languages = [
    { code: 'ko', name: '한국어', status: 'active' },
    { code: 'en', name: 'English', status: 'active' },
    { code: 'ja', name: '日本語', status: 'pending' },
    { code: 'zh', name: '中文', status: 'pending' },
  ];

  const seoPages = [
    { id: 1, page: '메인 페이지', title: '주식회사 컬리버 - 스마트 양식 솔루션', meta: '스마트 양식 기술의 선도기업', keywords: '양식, 스마트팜, 수산업' },
    { id: 2, page: '제품 소개', title: '첨단 양식 모니터링 시스템 - 컬리버', meta: '실시간 수질 모니터링과 자동화 시스템', keywords: '수질센서, 모니터링, 자동화' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">콘텐츠 관리 (CMS)</h2>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('pages')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'pages' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          페이지 편집
        </button>
        <button
          onClick={() => setActiveTab('languages')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'languages' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          다국어 관리
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'media' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          미디어 라이브러리
        </button>
        <button
          onClick={() => setActiveTab('seo')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'seo' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          SEO 관리
        </button>
      </div>

      {activeTab === 'pages' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">페이지 목록</h3>
            <button
              onClick={() => setShowPageModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              <span>새 페이지</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">페이지 제목</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">최종 수정일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{page.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{page.url}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        page.status === '게시' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{page.lastModified}</td>
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
      )}

      {activeTab === 'languages' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">다국어 콘텐츠 관리</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((lang) => (
                <div key={lang.code} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">{lang.code.toUpperCase()}</span>
                      </div>
                      <h4 className="font-medium text-gray-800">{lang.name}</h4>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      lang.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {lang.status === 'active' ? '활성' : '대기'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md whitespace-nowrap">
                      콘텐츠 번역 관리
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md whitespace-nowrap">
                      메뉴 번역 설정
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'media' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">미디어 라이브러리</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap">
              <i className="ri-upload-line w-4 h-4 flex items-center justify-center"></i>
              <span>파일 업로드</span>
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mediaFiles.map((file) => (
                <div key={file.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      file.type === 'image' ? 'bg-green-100' :
                      file.type === 'video' ? 'bg-purple-100' :
                      'bg-blue-100'
                    }`}>
                      <i className={`w-5 h-5 flex items-center justify-center ${
                        file.type === 'image' ? 'ri-image-line text-green-600' :
                        file.type === 'video' ? 'ri-video-line text-purple-600' :
                        'ri-file-text-line text-blue-600'
                      }`}></i>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 whitespace-nowrap">
                      <i className="ri-more-2-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm mb-1 truncate">{file.name}</h4>
                  <p className="text-xs text-gray-500">{file.size} • {file.uploaded}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'seo' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">SEO 관리</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {seoPages.map((page) => (
                <div key={page.id} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">{page.page}</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">페이지 제목</label>
                      <input
                        type="text"
                        value={page.title}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">메타 설명</label>
                      <textarea
                        value={page.meta}
                        rows={2}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">키워드</label>
                      <input
                        type="text"
                        value={page.keywords}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap">
                      수정하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showPageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">새 페이지 추가</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="페이지 제목"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="URL 경로"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option>템플릿 선택</option>
                <option>기본 페이지</option>
                <option>제품 페이지</option>
                <option>뉴스 페이지</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowPageModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 whitespace-nowrap"
              >
                취소
              </button>
              <button
                onClick={() => setShowPageModal(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                생성
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}