'use client';

export default function Certifications() {
  const certifications = [
    {
      name: 'ISO 9001',
      description: '품질경영시스템 국제표준 인증',
      year: '2020',
      icon: 'ri-award-line'
    },
    {
      name: 'ISO 14001',
      description: '환경경영시스템 국제표준 인증',
      year: '2020',
      icon: 'ri-leaf-line'
    },
    {
      name: '환경부 친환경 기업',
      description: '환경부 인증 친환경 기업',
      year: '2024',
      icon: 'ri-government-line'
    },
    {
      name: '녹색기술 인증',
      description: '산업통상자원부 녹색기술 인증',
      year: '2024',
      icon: 'ri-plant-line'
    }
  ];

  return (
    <section className="py-20 bg-[#F1F3F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            인증 및 수상
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            국내외 공인 기관으로부터 받은 품질과 기술력 인증
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${cert.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-[#00427A] mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {cert.description}
              </p>
              <div className="text-[#4CAF50] font-semibold">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}