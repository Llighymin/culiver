"use client";

import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface ProductSelection {
  id: string;
  name: string;
  unit: string;
  quantity: number;
}

interface FormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  address: string;
  farmType: string;
  farmSize: string;
  products: ProductSelection[];
  requirements: string;
  deliveryDate: string;
  budget: string;
  files: File[];
}

const OnlineQuote = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    address: '',
    farmType: '',
    farmSize: '',
    products: [],
    requirements: '',
    deliveryDate: '',
    budget: '',
    files: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const productOptions = [
    {
      category: '프로바이오틱스',
      items: [
        { id: 'aquapro-s', name: 'AquaPro-S (새우 전용)', unit: '1L' },
        { id: 'aquapro-plus', name: 'AquaPro-Plus (복합균)', unit: '1L' },
        { id: 'aquapro-immune', name: 'AquaPro-Immune (면역강화)', unit: '500ml' },
        { id: 'aquapro-digest', name: 'AquaPro-Digest (소화개선)', unit: '1L' }
      ]
    },
    {
      category: '진단키트',
      items: [
        { id: 'wssv-kit', name: 'WSSV 진단키트', unit: '10회' },
        { id: 'ahpns-kit', name: 'AHPNS 진단키트', unit: '20회' },
        { id: 'vibrio-kit', name: '바이브리오 검사키트', unit: '15회' },
        { id: 'multi-kit', name: '종합 질병 진단키트', unit: '5회' }
      ]
    },
    {
      category: '양식 장비',
      items: [
        { id: 'aquamonitor', name: 'AquaMonitor Pro (수질모니터링)', unit: '1세트' },
        { id: 'autofeed', name: 'AutoFeed System (자동급이)', unit: '1대' },
        { id: 'oxygen-system', name: '산소 공급 장치', unit: '1대' },
        { id: 'biofloc-system', name: '바이오플락 관리 시스템', unit: '1세트' }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: Array.from(e.target.files || []) }));
    }
  };

  const handleProductChange = (productId: string, quantity: string) => {
    setFormData(prev => {
      const existingProduct = prev.products.find(p => p.id === productId);
      let newProducts: ProductSelection[];

      if (existingProduct) {
        if (quantity === '' || quantity === '0') {
          newProducts = prev.products.filter(p => p.id !== productId);
        } else {
          newProducts = prev.products.map(p => 
            p.id === productId ? { ...p, quantity: parseInt(quantity) } : p
          );
        }
      } else if (quantity && quantity !== '0') {
        const product = productOptions
          .flatMap(cat => cat.items)
          .find(item => item.id === productId);
        if (product) {
          newProducts = [...prev.products, { 
            id: productId, 
            name: product.name,
            unit: product.unit,
            quantity: parseInt(quantity) 
          }];
        } else {
          newProducts = prev.products;
        }
      } else {
        newProducts = prev.products;
      }

      return { ...prev, products: newProducts };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.companyName || !formData.contactName || !formData.phone || !formData.email) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    if (formData.products.length === 0) {
      alert('견적을 요청할 제품을 선택해주세요.');
      return;
    }

    try {
      console.log('견적 요청 데이터:', {
        ...formData,
        files: formData.files.map(file => ({
          name: file.name,
          size: file.size,
          type: file.type
        }))
      });
      setIsSubmitted(true);
    } catch (error) {
      alert('견적 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
            <FaCheck className="text-3xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">견적 요청이 완료되었습니다</h2>
          <p className="text-gray-600 mb-8">
            담당자가 24시간 내에 연락드리겠습니다.<br />
            문의사항이 있으시면 언제든 연락주세요.
          </p>
          <div className="space-y-3">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  companyName: '',
                  contactName: '',
                  phone: '',
                  email: '',
                  address: '',
                  farmType: '',
                  farmSize: '',
                  products: [],
                  requirements: '',
                  deliveryDate: '',
                  budget: '',
                  files: []
                });
              }}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              새 견적 요청하기
            </button>
            <a 
              href="/" 
              className="block w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-700 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            온라인 견적 요청
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            필요한 제품과 정보를 입력하시면 맞춤형 견적을 제공해드립니다
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <form id="quote-form" onSubmit={handleSubmit} className="space-y-10">
            {/* Company Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">회사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="회사명을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    담당자명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="담당자명을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@company.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    주소
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="회사 주소를 입력하세요"
                  />
                </div>
              </div>
            </div>

            {/* Farm Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">양식장 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    양식 유형
                  </label>
                  <select
                    name="farmType"
                    value={formData.farmType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="">선택하세요</option>
                    <option value="새우양식">새우양식</option>
                    <option value="어류양식">어류양식</option>
                    <option value="복합양식">복합양식</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    양식장 규모
                  </label>
                  <select
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="">선택하세요</option>
                    <option value="소규모 (1-5 수조)">소규모 (1-5 수조)</option>
                    <option value="중규모 (6-20 수조)">중규모 (6-20 수조)</option>
                    <option value="대규모 (21-50 수조)">대규모 (21-50 수조)</option>
                    <option value="초대형 (50+ 수조)">초대형 (50+ 수조)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Selection */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">제품 선택</h2>
              <div className="space-y-8">
                {productOptions.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((product) => (
                        <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{product.name}</h4>
                            <p className="text-sm text-gray-500">단위: {product.unit}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <input
                              type="number"
                              min="0"
                              placeholder="수량"
                              className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              onChange={(e) => handleProductChange(product.id, e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">추가 정보</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    특별 요구사항
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="특별한 요구사항이나 문의사항을 입력하세요 (최대 500자)"
                  />
                  <p className="text-sm text-gray-500 mt-1 text-right">{formData.requirements.length}/500자</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    파일 첨부
                  </label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>파일 선택</span>
                          <input id="file-upload" name="files" type="file" className="sr-only" onChange={handleFileChange} multiple />
                        </label>
                        <p className="pl-1">또는 드래그 앤 드롭</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF, PDF 등 최대 10MB
                      </p>
                    </div>
                  </div>
                  {formData.files.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700">첨부된 파일:</p>
                      <ul className="mt-2 space-y-2">
                        {formData.files.map((file, index) => (
                          <li key={index} className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-md flex justify-between items-center">
                            <span>{file.name}</span>
                            <span className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      희망 납기일
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      예산 범위
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    >
                      <option value="">선택하세요</option>
                      <option value="100만원 미만">100만원 미만</option>
                      <option value="100-500만원">100-500만원</option>
                      <option value="500-1000만원">500-1000만원</option>
                      <option value="1000만원 이상">1000만원 이상</option>
                      <option value="협의">협의</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Products Summary */}
            {formData.products.length > 0 && (
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">선택된 제품 요약</h3>
                <div className="space-y-2">
                  {formData.products.map((product, index) => (
                    <div key={index} className="flex justify-between items-center text-sm p-2 bg-white rounded-md">
                      <span className="text-gray-700">{product.name}</span>
                      <span className="font-medium">{product.quantity} {product.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
              >
                견적 요청하기
              </button>
              <p className="text-sm text-gray-500 mt-4">
                견적 요청 후 24시간 내에 담당자가 연락드립니다.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OnlineQuote;
