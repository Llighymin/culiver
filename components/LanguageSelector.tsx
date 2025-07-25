'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n, locales, getLocaleFromPath, getPathWithoutLocale } from '@/i18n.config.js';

const LanguageSelector = ({ className = '' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(i18n.defaultLocale);

  useEffect(() => {
    setCurrentLocale(getLocaleFromPath(pathname));
  }, [pathname]);

  const handleLanguageChange = (locale: string) => {
    try {
      if (!pathname) return; // pathname이 없으면 처리하지 않음
      
      // 현재 경로에서 로케일 부분 제거
      const pathWithoutLocale = getPathWithoutLocale(pathname);
      
      // 쿠키에 선택된 로케일 저장
      document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax`;
      
      // 목적지 URL 계산
      let targetUrl = '';
      
      if (locale === i18n.defaultLocale) {
        // 기본 로케일인 경우 로케일 없이 경로 이동
        targetUrl = pathWithoutLocale;
      } else {
        // 다른 언어인 경우 로케일 추가하여 경로 이동
        // 루트 경로(/)인 경우 로케일만 추가
        if (pathWithoutLocale === '/') {
          targetUrl = `/${locale}`;
        } else {
          // 그 외의 경우 로케일과 경로를 함께 추가
          targetUrl = `/${locale}${pathWithoutLocale}`;
        }
      }
      
      console.log(`언어 변경: ${currentLocale} -> ${locale}, 이동 경로: ${targetUrl}`);
      
      // 언어 변경 전에 현재 로케일 업데이트
      setCurrentLocale(locale);
      
      // 페이지 이동
      router.push(targetUrl);
    } catch (error) {
      console.error('언어 변경 중 오류 발생:', error);
    }
  };

  return (
    <div className={`flex items-center space-x-4 text-sm ${className}`}>
      {Object.entries(locales).map(([code, name]) => (
        <button
          key={code}
          className={`${
            currentLocale === code ? 'font-bold' : ''
          } hover:text-green-whale transition-colors`}
          onClick={() => handleLanguageChange(code)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
