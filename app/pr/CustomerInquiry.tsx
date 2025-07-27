'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, Cpu, Users, Mail, Phone, MapPin } from 'lucide-react';

const CustomerInquiry = () => {
  const inquiryTypes = [
    {
      title: '제품 및 기술 문의',
      description: '스마트 양식 시스템, 프로바이오틱스 등 컬리버의 제품과 기술에 대해 궁금한 점을 문의하세요.',
      link: '/pr/customer-inquiry/form?type=product',
      icon: <Cpu className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: '사업 제휴 및 투자 문의',
      description: '컬리버와의 비즈니스 파트너십, 투자(IR)와 관련된 문의를 하실 수 있습니다.',
      link: '/pr/customer-inquiry/form?type=partnership',
      icon: <Briefcase className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: '채용 문의',
      description: '컬리버의 인재상, 채용 절차, 복리후생 등 채용과 관련된 모든 것을 문의하세요.',
      link: '/pr/customer-inquiry/form?type=recruit',
      icon: <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: '기타 문의',
      description: '위에 해당하지 않는 기타 일반적인 문의사항을 남겨주세요.',
      link: '/pr/customer-inquiry/form?type=etc',
      icon: <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              고객 문의
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              궁금한 점이 있으신가요? 문의 유형을 선택하고 무엇이든 물어보세요. 컬리버의 문은 언제나 열려있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Type Selection Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">문의 유형 선택</h2>
            <p className="mt-4 text-lg text-gray-600">
              문의하시려는 내용과 가장 가까운 유형을 선택하시면 담당자에게 빠르게 전달됩니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inquiryTypes.map((type) => (
              <Link href={type.link} key={type.title}>
                <div className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{type.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:underline">
                    문의하기
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              빠른 상담을 원하시나요?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              아래 연락처로 문의하시면 전문 상담원이 친절하게 안내해 드립니다.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Phone className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전화 문의</h3>
              <p className="text-2xl font-bold text-blue-600">1588-1234</p>
              <p className="text-gray-500 mt-2 text-sm">평일 09:00 ~ 18:00 (점심 12-13시)</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Mail className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">이메일 문의</h3>
              <p className="text-lg font-semibold text-blue-600">contact@culiver.com</p>
              <p className="text-gray-500 mt-2 text-sm">24시간 접수, 영업일 24시간 내 답변</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">오시는 길</h3>
              <p className="text-lg font-semibold text-gray-800">본사 및 연구소 주소</p>
              <p className="text-gray-500 mt-2 text-sm">부산광역시 기장군 일광읍... </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerInquiry;
