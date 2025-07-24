
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 로그인 로직 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      // 실제로는 여기서 로그인 성공 시 /admin으로 리다이렉트
      window.location.href = '/admin';
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <i className="ri-admin-line text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              관리자 로그인
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              주식회사 컬리버 관리자 시스템
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 주소
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="admin@kuliver.com"
                  />
                  <i className="ri-user-line absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 flex items-center justify-center"></i>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="비밀번호를 입력하세요"
                  />
                  <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 flex items-center justify-center"></i>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
                  >
                    <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  로그인 상태 유지
                </label>
              </div>

              <div className="text-sm">
                <Link href="/admin/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  비밀번호 찾기
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <i className="ri-loader-4-line animate-spin w-4 h-4 mr-2 flex items-center justify-center"></i>
                    로그인 중...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <i className="ri-login-circle-line w-4 h-4 mr-2 flex items-center justify-center"></i>
                    로그인
                  </div>
                )}
              </button>
            </div>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              관리자 계정이 없으신가요?{' '}
              <Link href="/admin/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                계정 신청
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">
              보안을 위해 관리자 계정은 승인이 필요합니다.
            </p>
            <p className="text-xs text-gray-500">
              문의: admin@kuliver.com | 02-1234-5678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
