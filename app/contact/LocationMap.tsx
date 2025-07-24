'use client';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            오시는 길
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            그린웨일 본사 위치를 확인하세요
          </p>
        </div>

        <div className="bg-[#F1F3F4] rounded-lg overflow-hidden">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3947479428277!2d127.02621431531166!3d37.50150127979654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a1b8e6a59%3A0x1e0e7adade1a0f1e!2z7YWM7ZWc65295LiA!5e0!3m2!1sko!2skr!4v1644489213892!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="그린웨일 본사 위치"
            ></iframe>
          </div>
          
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-map-pin-line text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#00427A] mb-1">주소</h4>
                <p className="text-sm text-gray-600">서울시 강남구 테헤란로 123</p>
                <p className="text-sm text-gray-600">그린웨일빌딩 10층</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-subway-line text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#00427A] mb-1">지하철</h4>
                <p className="text-sm text-gray-600">2호선 강남역 2번 출구</p>
                <p className="text-sm text-gray-600">도보 5분</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-bus-line text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#00427A] mb-1">버스</h4>
                <p className="text-sm text-gray-600">강남역 정류장</p>
                <p className="text-sm text-gray-600">146, 360, 740번 등</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            방문 전 미리 연락주시면 더욱 원활한 상담이 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1588-0000" 
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              전화 문의: 1588-0000
            </a>
            <a 
              href="mailto:info@greenwhale.co.kr" 
              className="bg-[#00427A] hover:bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              이메일: info@greenwhale.co.kr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}