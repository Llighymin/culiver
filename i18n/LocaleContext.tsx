'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { i18n, getLocaleFromPath } from '@/i18n.config.js';

type LocaleContextType = {
  locale: string;
  messages: Record<string, any>;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState('ko');
  const [messages, setMessages] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // URL에서 로케일 확인
    // 빈 경로나 '/' 경로인 경우 특별 처리
    let isLocale = false;
    let currentLocale = i18n.defaultLocale;
    
    if (!pathname) {
      // pathname이 없는 경우(아직 로드되지 않은 경우) 기본값 사용
      setLocale(currentLocale);
      return;
    }
    
    if (pathname !== '/') {
      const segments = pathname.split('/');
      const firstSegment = segments.length > 1 ? segments[1] : '';
      isLocale = i18n.locales.includes(firstSegment);
      
      // URL에 로케일이 포함되어 있으면 해당 로케일 사용
      if (isLocale) {
        currentLocale = firstSegment;
      }
    }
    
    // 쿠키에서 로케일 확인
    try {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'NEXT_LOCALE' && i18n.locales.includes(value)) {
          if (!isLocale) { // URL에 로케일이 없는 경우만 쿠키 값 사용
            currentLocale = value;
          }
          break;
        }
      }
    } catch (error) {
      console.error('쿠키 처리 중 오류 발생:', error);
    }
    
    setLocale(currentLocale);
    
    // 언어 파일 동적 로드
    const loadMessages = async () => {
      try {
        // 유효한 로케일인지 확인
        if (!i18n.locales.includes(currentLocale)) {
          throw new Error(`유효하지 않은 로케일: ${currentLocale}`);
        }
        
        const module = await import(`@/messages/${currentLocale}.json`);
        setMessages(module.default || {});
      } catch (error) {
        console.error(`${currentLocale} 언어 파일 로드 실패:`, error);
        
        // 로드 실패시 기본 언어로 폴백
        try {
          const defaultModule = await import('@/messages/ko.json');
          setMessages(defaultModule.default || {});
        } catch (fallbackError) {
          console.error('기본 언어 파일도 로드 실패:', fallbackError);
          setMessages({}); // 빈 객체로 설정하여 앱이 크래시되지 않도록 함
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadMessages();
  }, [pathname]);

  if (loading) {
    // 언어 파일 로딩 중에는 간단한 로딩 표시 또는 빈 화면을 반환
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

// 번역 함수
export function useTranslation() {
  const { messages } = useLocale();
  
  function t(key: string, params?: Record<string, string>) {
    const keys = key.split('.');
    let value = { ...messages };
    
    // 중첩된 키 탐색 (예: 'Header.company')
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key; // 키가 존재하지 않으면 키 자체 반환
    }
    
    // 문자열이 아니면 키 반환
    if (typeof value !== 'string') return key;
    
    // 매개변수 치환 (예: t('greeting', { name: 'John' }) => 'Hello, John')
    if (params) {
      return Object.entries(params).reduce(
        (acc: string, [paramKey, paramValue]) => acc.replace(`{{${paramKey}}}`, paramValue),
        value
      );
    }
    
    return value;
  }
  
  return { t };
}
