'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: '',
    wasteVolume: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          formId: 'greenwhale-contact'
        })
      });

      if (response.ok) {
        setSubmitMessage('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          inquiryType: '',
          wasteVolume: '',
          location: '',
          message: ''
        });
      } else {
        setSubmitMessage('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      setSubmitMessage('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00427A] mb-4">
            무료 상담 신청
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            전문가가 직접 상담해드립니다. 아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form id="greenwhale-contact" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                이름 *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                placeholder="성함을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                회사명 *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                placeholder="회사명을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                연락처 *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                placeholder="연락처를 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                이메일 *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                placeholder="이메일을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                문의 유형 *
              </label>
              <div className="relative">
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm appearance-none pr-8"
                >
                  <option value="">선택해주세요</option>
                  <option value="제품 문의">제품 문의</option>
                  <option value="견적 요청">견적 요청</option>
                  <option value="기술 지원">기술 지원</option>
                  <option value="A/S 문의">A/S 문의</option>
                  <option value="기타">기타</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                일일 폐기물 발생량
              </label>
              <div className="relative">
                <select
                  name="wasteVolume"
                  value={formData.wasteVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm appearance-none pr-8"
                >
                  <option value="">선택해주세요</option>
                  <option value="20kg 미만">20kg 미만</option>
                  <option value="20-50kg">20-50kg</option>
                  <option value="50-100kg">50-100kg</option>
                  <option value="100-500kg">100-500kg</option>
                  <option value="500kg-1톤">500kg-1톤</option>
                  <option value="1톤 이상">1톤 이상</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                설치 예정 지역
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                placeholder="예: 서울시 강남구"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-[#00427A] mb-2">
                상세 문의 내용
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm resize-none"
                placeholder="문의하실 내용을 자세히 입력해주세요 (최대 500자)"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 whitespace-nowrap ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#4CAF50] hover:bg-[#45a049] cursor-pointer'
                }`}
              >
                {isSubmitting ? '접수 중...' : '무료 상담 신청하기'}
              </button>
            </div>

            {submitMessage && (
              <div className="md:col-span-2">
                <div className={`p-4 rounded-lg text-center font-semibold ${
                  submitMessage.includes('성공') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}