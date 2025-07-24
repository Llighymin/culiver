'use client';

import { useState } from 'react';

export default function ProductManagement() {
  const [activeTab, setActiveTab] = useState('products');
  const [showProductModal, setShowProductModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const products = [
    { id: 1, name: '수온 모니터링 시스템', category: '센서', price: '2,500,000', status: '활성', stock: 15 },
    { id: 2, name: '용존산소 측정기', category: '측정장비', price: '1,800,000', status: '활성', stock: 8 },
    { id: 3, name: 'pH 자동 조절 시스템', category: '자동화', price: '4,200,000', status: '비활성', stock: 3 },
    { id: 4, name: '염분 농도 센서', category: '센서', price: '1,200,000', status: '활성', stock: 12 },
  ];

  const quotes = [
    { id: 'Q001', company: '(주)해양테크', contact: '김해양', product: '수온센서 시스템', date: '2024-01-15', status: '검토중' },
    { id: 'Q002', company: '바다물산', contact: '이바다', product: '용존산소 측정기', date: '2024-01-14', status: '발송완료' },
    { id: 'Q003', company: '해양개발', contact: '박개발', product: 'pH 모니터링', date: '2024-01-13', status: '작성중' },
  ];

  const categories = ['센서', '측정장비', '자동화', '모니터링', '제어시스템'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">제품 & 견적 관리</h2>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'products'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          제품 관리
        </button>
        <button
          onClick={() => setActiveTab('quotes')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'quotes'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          견적 관리
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
            activeTab === 'categories'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          카테고리 관리
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">제품 목록</h3>
            <button
              onClick={() => setShowProductModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              <span>새 제품 추가</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품명</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">가격</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">재고</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}원</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}개</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === '활성' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
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

      {activeTab === 'quotes' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">견적 요청 목록</h3>
            <button
              onClick={() => setShowQuoteModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              <span>견적서 작성</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">견적번호</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사명</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">담당자</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">요청일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quote.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{quote.contact}</td>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                          <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-green-600 hover:text-green-800 whitespace-nowrap">
                          <i className="ri-file-edit-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-purple-600 hover:text-purple-800 whitespace-nowrap">
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

      {activeTab === 'categories' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">카테고리 관리</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap">
              <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
              <span>새 카테고리</span>
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{category}</h4>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
                        <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      <button className="text-red-600 hover:text-red-800 whitespace-nowrap">
                        <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">새 제품 추가</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="제품명"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option>카테고리 선택</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="가격"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="제품 설명"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowProductModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 whitespace-nowrap"
              >
                취소
              </button>
              <button
                onClick={() => setShowProductModal(false)}
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