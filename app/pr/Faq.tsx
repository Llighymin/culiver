'use client';

import React, { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-6 text-left"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-gray-50">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const faqData = [
    {
      category: '제품/기술',
      question: '컬리버의 스마트 양식 시스템은 어떤 기술을 사용하나요?',
      answer: '컬리버의 스마트 양식 시스템은 IoT 센서, 빅데이터 분석, AI 기반 자동 제어 기술을 핵심으로 합니다. 실시간으로 수질(수온, pH, 용존산소 등)을 모니터링하고, 데이터를 분석하여 최적의 사육 환경을 자동으로 유지합니다. 이를 통해 생산성을 극대화하고 폐사율을 최소화합니다.',
    },
    {
      category: '제품/기술',
      question: '바이오플락 기술이란 무엇이며, 어떤 장점이 있나요?',
      answer: '바이오플락 기술은 미생물을 이용하여 양식 과정에서 발생하는 오염물질(암모니아, 아질산 등)을 정화하고, 이를 다시 새우의 먹이로 활용하는 친환경 기술입니다. 물 교환을 최소화하여 수자원을 절약하고, 외부 질병 유입을 차단하며, 고밀도 양식이 가능해 생산성이 높습니다.',
    },
    {
      category: '주문/배송',
      question: '제품 주문 후 배송까지 얼마나 걸리나요?',
      answer: '일반적으로 주문 확인 후 영업일 기준 2~3일 이내에 배송이 완료됩니다. 다만, 주문량이나 지역에 따라 배송 일정이 다소 지연될 수 있습니다. 자세한 배송 현황은 마이페이지에서 확인하실 수 있습니다.',
    },
    {
      category: '파트너십',
      question: '컬리버와 사업 제휴를 맺고 싶습니다. 어떻게 해야 하나요?',
      answer: '컬리버와의 파트너십에 관심을 가져주셔서 감사합니다. 홈페이지의 [고객문의 > 사업 제휴 문의] 메뉴를 통해 제안 내용을 남겨주시면, 담당 부서에서 검토 후 신속하게 연락드리겠습니다.',
    },
    {
      category: '제품/기술',
      question: '시스템 도입을 위한 초기 비용은 어느 정도인가요?',
      answer: '초기 도입 비용은 양식장의 규모, 기존 설비, 도입하는 시스템의 종류 및 옵션에 따라 상이합니다. 저희 전문가 팀이 현장을 방문하여 실사 후, 고객 맞춤형으로 최적의 솔루션과 함께 상세 견적을 제공해 드리고 있습니다. [온라인 견적] 메뉴를 통해 상담을 신청해주세요.',
    },
    {
      category: '기타',
      question: '채용 공고는 어디서 확인할 수 있나요?',
      answer: '컬리버의 채용 정보는 [회사소개 > 인재채용] 메뉴 또는 주요 채용 포털 사이트에서 확인하실 수 있습니다. 우수한 인재 여러분의 많은 지원을 기다립니다.',
    },
  ];

  const categories = ['전체', '제품/기술', '주문/배송', '파트너십', '기타'];

  const filteredFaqs = faqData.filter(faq => {
    const categoryMatch = selectedCategory === '전체' || faq.category === selectedCategory;
    const searchMatch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              자주 묻는 질문 (FAQ)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객님들께서 가장 궁금해하시는 질문과 답변을 모았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto mt-4 md:mt-0">
              <input
                type="text"
                placeholder="질문 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
               <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="border-t-2 border-gray-800">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <div className="text-center py-16 text-gray-500">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                   <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                검색된 질문이 없습니다.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
