'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  const allNotices = [
    { id: 12, date: '2024.07.25', title: '개인정보처리방침 개정 안내 (2024.08.01 시행)', important: true, views: 345 },
    { id: 11, date: '2024.07.20', title: '스마트양식 시스템 정기 점검 안내 (7/28 02:00-04:00)', important: true, views: 512 },
    { id: 10, date: '2024.07.15', title: '2024년 하반기 신입/경력사원 채용 안내', important: false, views: 1024 },
    { id: 9, date: '2024.07.10', title: '홈페이지 리뉴얼 및 서비스 개선 안내', important: false, views: 876 },
    { id: 8, date: '2024.06.25', title: '제 5기 정기 주주총회 결과 안내', important: false, views: 450 },
    { id: 7, date: '2024.06.18', title: '친환경 포장재 도입에 따른 배송 정책 변경 안내', important: false, views: 980 },
    { id: 6, date: '2024.06.05', title: '2024년 지속가능경영보고서 발간', important: false, views: 1230 },
    { id: 5, date: '2024.05.20', title: '베트남 지사 설립 및 운영 개시 안내', important: false, views: 1500 },
    { id: 4, date: '2024.05.10', title: '이용약관 개정 안내 (2024.06.01 시행)', important: false, views: 765 },
    { id: 3, date: '2024.04.22', title: '국립수산과학원과 공동 연구 성과 발표', important: false, views: 1100 },
    { id: 2, date: '2024.04.15', title: '고객센터 전화상담 시스템 점검 안내', important: false, views: 654 },
    { id: 1, date: '2024.04.01', title: '창립 5주년 기념 고객 감사 이벤트', important: false, views: 2543 },
  ];

  const filteredNotices = allNotices.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              공지사항
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              컬리버의 새로운 소식과 중요한 정보를 알려드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Notice List Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-end mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="공지사항 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="border-t-2 border-gray-800">
            <div className="hidden md:grid md:grid-cols-12 text-center py-3 bg-gray-50 font-semibold text-gray-700 border-b">
              <div className="col-span-1">번호</div>
              <div className="col-span-8">제목</div>
              <div className="col-span-2">작성일</div>
              <div className="col-span-1">조회수</div>
            </div>
            
            {currentNotices.length > 0 ? (
              currentNotices.map(notice => (
                <div key={notice.id} className="grid grid-cols-12 py-4 border-b items-center text-sm hover:bg-gray-50 transition-colors">
                  <div className="col-span-12 md:col-span-1 text-center text-gray-500 mb-2 md:mb-0">
                    {notice.important ? (
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">중요</span>
                    ) : (
                      notice.id
                    )}
                  </div>
                  <div className="col-span-12 md:col-span-8 px-4 md:px-0">
                    <Link href={`/pr/notice/${notice.id}`} className="text-gray-800 hover:text-blue-600 hover:underline font-medium text-left">
                      {notice.title}
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-2 text-center text-gray-500">{notice.date}</div>
                  <div className="col-span-6 md:col-span-1 text-center text-gray-500">{notice.views.toLocaleString()}</div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-gray-500">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                검색된 공지사항이 없습니다.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 border rounded-lg text-sm ${currentPage === number ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'}`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Notice;
