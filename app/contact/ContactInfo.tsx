'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      title: '전화 문의',
      icon: 'ri-phone-line',
      main: '1588-0000',
      sub: '평일 09:00 - 18:00',
      description: '즉시 상담 가능한 전화 문의'
    },
    {
      title: '이메일 문의',
      icon: 'ri-mail-line',
      main: 'info@greenwhale.co.kr',
      sub: '24시간 접수 가능',
      description: '상세한 자료 첨부 가능한 이메일 문의'
    },
    {
      title: '팩스 문의',
      icon: 'ri-printer-line',
      main: '02-1234-5678',
      sub: '24시간 접수 가능',
      description: '공식 문서 전송 시 이용'
    }
  ];

  const officeInfo = {
    address: '서울시 강남구 테헤란로 123 그린웨일빌딩 10층',
    hours: '평일 09:00 - 18:00 (토요일, 일요일, 공휴일 휴무)',
    parking: '건물 내 주차 가능 (방문 시 사전 예약 필요)',
    transportation: '지하철 2호선 강남역 2번 출구에서 도보 5분'
  };

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            연락처 정보
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 방법으로 그린웨일과 소통하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${method.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#00427A] mb-2">
                {method.title}
              </h3>
              <p className="text-lg font-bold text-gray-800 mb-1">
                {method.main}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                {method.sub}
              </p>
              <p className="text-sm text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#00427A] mb-6 text-center">
            본사 방문 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-[#4CAF50] text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#00427A] mb-1">주소</h4>
                    <p className="text-gray-600">{officeInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-[#4CAF50] text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#00427A] mb-1">운영 시간</h4>
                    <p className="text-gray-600">{officeInfo.hours}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-car-line text-[#4CAF50] text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#00427A] mb-1">주차 안내</h4>
                    <p className="text-gray-600">{officeInfo.parking}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-subway-line text-[#4CAF50] text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#00427A] mb-1">대중교통</h4>
                    <p className="text-gray-600">{officeInfo.transportation}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#F1F3F4] p-6 rounded-lg">
                <h4 className="font-semibold text-[#00427A] mb-4">방문 예약 안내</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                    방문 전 사전 예약 필수
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                    제품 시연 및 상담 가능
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                    전문가 1:1 맞춤 상담
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#4CAF50] mr-2"></i>
                    카탈로그 및 자료 제공
                  </li>
                </ul>
                <button className="w-full mt-4 bg-[#00427A] hover:bg-[#003366] text-white py-3 px-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  방문 예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}