'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Briefcase, Cpu, Users, Mail, Send, Building, User, Phone, FileText } from 'lucide-react';

const InquiryForm = () => {
  const searchParams = useSearchParams();
  const inquiryType = searchParams.get('type');

  const [selectedType, setSelectedType] = useState(inquiryType || 'product');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    title: '',
    content: '',
    attachment: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (inquiryType) {
      setSelectedType(inquiryType);
    }
  }, [inquiryType]);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // @ts-ignore
      setFormData(prev => ({ ...prev, attachment: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 폼 제출 로직 (API 호출 등)
    console.log(formData);
    setIsSubmitted(true);
  };

  const inquiryTypes = [
    { id: 'product', label: '제품/기술', icon: <Cpu className="w-5 h-5 mr-2" /> },
    { id: 'partnership', label: '사업 제휴/투자', icon: <Briefcase className="w-5 h-5 mr-2" /> },
    { id: 'recruit', label: '채용', icon: <Users className="w-5 h-5 mr-2" /> },
    { id: 'etc', label: '기타', icon: <Mail className="w-5 h-5 mr-2" /> },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Send className="w-16 h-16 mx-auto text-green-500 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">문의가 성공적으로 접수되었습니다.</h1>
          <p className="text-lg text-gray-600 mb-8">
            검토 후 빠른 시일 내에 입력하신 연락처로 회신드리겠습니다. <br />
            문의해주셔서 감사합니다.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">온라인 문의 작성</h1>
          <p className="mt-4 text-lg text-gray-600">
            아래 양식을 작성해주시면 담당자가 신속하게 확인하고 연락드리겠습니다.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">문의 유형</label>
              <div className="flex flex-wrap gap-4">
                {inquiryTypes.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTypeChange(type.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                      selectedType === type.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                    }`}
                  >
                    {type.icon}
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="relative">
                <Building className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                <input type="text" name="company" placeholder="회사명" onChange={handleInputChange} className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                <input type="text" name="name" placeholder="담당자명 *" required onChange={handleInputChange} className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="relative">
                <Phone className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                <input type="tel" name="phone" placeholder="연락처 *" required onChange={handleInputChange} className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
                <input type="email" name="email" placeholder="이메일 *" required onChange={handleInputChange} className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2 relative">
                <input type="text" name="title" placeholder="제목 *" required onChange={handleInputChange} className="w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2 relative">
                <textarea name="content" placeholder="문의 내용 *" required rows={8} onChange={handleInputChange} className="w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">첨부파일 (선택)</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="attachment-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FileText className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">파일 선택</span> 또는 드래그 앤 드롭</p>
                      <p className="text-xs text-gray-500">최대 10MB</p>
                    </div>
                    <input id="attachment-file" type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                </div>
                {formData.attachment && (
                  // @ts-ignore
                  <p className="mt-2 text-sm text-gray-600">선택된 파일: {formData.attachment.name}</p>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full md:w-auto px-12 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-3" />
                문의 제출하기
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">
              * 표시된 항목은 필수 입력 항목입니다. <br/>
              문의하신 내용은 개인정보처리방침에 따라 안전하게 관리되며, 문의 처리 목적 외에는 사용되지 않습니다.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
