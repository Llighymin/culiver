"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaTh, FaVial, FaStethoscope, FaCogs } from 'react-icons/fa';

const categories = [
  { id: 'all', name: '전체', icon: <FaTh /> },
  { id: 'probiotics', name: '프로바이오틱스', icon: <FaVial /> },
  { id: 'diagnostics', name: '진단키트', icon: <FaStethoscope /> },
  { id: 'equipment', name: '양식 장비', icon: <FaCogs /> }
];

const products = [
  {
    id: 1,
    category: 'probiotics',
    name: 'AquaPro-S',
    subtitle: '새우 전용 프로바이오틱스',
    description: '흰다리새우 최적화된 복합 유용 미생물로 소화 개선 및 면역력 강화',
    features: ['소화율 30% 향상', '면역력 강화', '스트레스 저항성 증대', '성장률 개선'],
    specs: { volume: '1L, 5L, 20L', concentration: '10^9 CFU/ml', storage: '냉장보관' },
    price: '₩45,000~',
    image: 'https://images.unsplash.com/photo-1578993738391-1914d3b1f169?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    category: 'probiotics',
    name: 'AquaPro-Plus',
    subtitle: '복합 유용 미생물 제제',
    description: '다양한 유익균의 시너지 효과로 양식 환경 전반을 개선하는 통합 솔루션',
    features: ['수질 정화 효과', '병원균 억제', '암모니아 분해', '생태계 균형 유지'],
    specs: { volume: '1L, 10L, 50L', concentration: '10^8 CFU/ml', storage: '상온보관' },
    price: '₩38,000~',
    image: 'https://images.unsplash.com/photo-1578993738391-1914d3b1f169?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    category: 'probiotics',
    name: 'AquaPro-Immune',
    subtitle: '면역증강 바이오 제품',
    description: '천연 면역증강제로 새우의 자연 면역력을 향상시키는 혁신적인 제품',
    features: ['자연 면역력 증진', '항산화 효과', '질병 저항성 향상', '생존율 개선'],
    specs: { volume: '500ml, 2L, 10L', concentration: '농축액', storage: '냉장보관' },
    price: '₩52,000~',
    image: 'https://images.unsplash.com/photo-1578993738391-1914d3b1f169?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    category: 'diagnostics',
    name: 'WSSV 진단키트',
    subtitle: '흰반점바이러스 신속진단',
    description: '흰반점바이러스병(WSSV) 조기 진단을 위한 현장용 신속 검사키트',
    features: ['15분 내 결과 확인', '95% 이상 정확도', '현장 검사 가능', '간편한 사용법'],
    specs: { tests: '10회, 50회, 100회', sensitivity: '95%', time: '15분' },
    price: '₩120,000~',
    image: 'https://images.unsplash.com/photo-1581092916346-9d63d9a4c8a8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    category: 'diagnostics',
    name: 'AHPNS 진단키트',
    subtitle: '급성간췌장괴사증 진단',
    description: '급성간췌장괴사증(AHPNS) 신속 진단을 위한 전문 검사키트',
    features: ['신속한 진단', '높은 특이성', '정량 분석 가능', '전문가 지원'],
    specs: { tests: '20회, 100회', sensitivity: '92%', time: '20분' },
    price: '₩95,000~',
    image: 'https://images.unsplash.com/photo-1581092916346-9d63d9a4c8a8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    category: 'diagnostics',
    name: '종합 질병 진단키트',
    subtitle: '멀티 질병 동시 진단',
    description: '주요 수산질병을 동시에 진단할 수 있는 종합 검사키트',
    features: ['5종 질병 동시 검사', '비용 효율적', '종합 결과 제공', '전문가 해석 서비스'],
    specs: { tests: '5회, 25회', diseases: '5종', time: '30분' },
    price: '₩180,000~',
    image: 'https://images.unsplash.com/photo-1581092916346-9d63d9a4c8a8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    category: 'equipment',
    name: 'AquaMonitor Pro',
    subtitle: 'IoT 수질 모니터링 시스템',
    description: '실시간 수질 모니터링과 자동 알림 기능을 제공하는 스마트 시스템',
    features: ['실시간 모니터링', '스마트폰 연동', '자동 알림', '데이터 분석'],
    specs: { sensors: '6종 센서', range: '반경 1km', battery: '1년 사용' },
    price: '₩380,000~',
    image: 'https://images.unsplash.com/photo-1526655813833-3dd54c0ce3a3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    category: 'equipment',
    name: 'AutoFeed System',
    subtitle: '자동 급이 시스템',
    description: '정확한 사료 공급량과 시간 제어가 가능한 자동 급이 시스템',
    features: ['정밀 급이 제어', '프로그램 설정', '원격 제어', '사료 절약'],
    specs: { capacity: '50kg, 100kg', accuracy: '±2g', control: '앱 제어' },
    price: '₩450,000~',
    image: 'https://images.unsplash.com/photo-1526655813833-3dd54c0ce3a3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            제품 카탈로그
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            컬리버의 전문 수산양식 제품을 상세히 살펴보세요
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  {category.icon}
                </div>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{product.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-3">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 특징</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">제품 사양</h4>
                    <div className="space-y-1">
                      {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs text-gray-600">
                          <span className="capitalize">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/products/OnlineQuote?product=${product.name}`}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      견적 요청
                    </Link>
                    <Link
                      href={`/pr/CustomerInquiry?inquiry=${product.name}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      문의하기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            전체 제품 카탈로그 다운로드
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            컬리버의 모든 제품 정보가 담긴 종합 카탈로그를 다운로드하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer">
              PDF 카탈로그 다운로드
            </button>
            <Link
              href="/pr/CustomerInquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              상세 상담 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
