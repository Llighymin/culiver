import { NextRequest, NextResponse } from 'next/server';
// ESM에서 CommonJS로 변경 (i18n.config.js 파일을 가정)
import { i18n } from './i18n.config.js';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 정적 파일 경로는 처리하지 않음
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }
  
  // 첫 번째 경로 세그먼트를 현재 로케일로 확인
  const pathnameSegments = pathname.split('/');
  const firstSegment = pathnameSegments.length > 1 ? pathnameSegments[1] : '';
  const isLocale = i18n.locales.includes(firstSegment);
  
  // 로케일이 URL에 포함되어 있는 경우 (예: /en/company, /ja/products)
  if (isLocale) {
    // 해당 로케일을 쿠키에 저장하고 계속 진행
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', firstSegment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30일
      sameSite: 'lax'
    });
    return response;
  }
  
  // URL에 로케일이 없는 경우 (예: /company, /products)
  // 쿠키에서 로케일을 확인하거나 Accept-Language 헤더를 사용하여 로케일을 결정
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 
                getLocaleFromAcceptLanguage(request);
  
  // 기본 로케일인 경우 리디렉션하지 않고 그대로 진행
  if (locale === i18n.defaultLocale) {
    return NextResponse.next();
  }
  
  // 다른 언어인 경우 로케일을 포함한 URL로 리디렉션
  // 해당 경로가 실제로 존재하는지 확인
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

// 브라우저 언어 설정으로부터 로케일 감지
function getLocaleFromAcceptLanguage(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // 브라우저에서 제공하는 언어 선호도 파싱
  const languages = acceptLanguage.split(',')
    .map(lang => {
      const [language, weight = '1'] = lang.trim().split(';q=');
      return { language: language.split('-')[0], weight: parseFloat(weight) };
    })
    .sort((a, b) => b.weight - a.weight);

  // 지원하는 로케일과 일치하는 언어 찾기
  for (const { language } of languages) {
    if (i18n.locales.includes(language)) {
      return language;
    }
  }
  
  return i18n.defaultLocale;
}

// 미들웨어를 적용할 경로 설정
export const config = {
  // 정적 파일 및 API 경로를 제외한 모든 경로에 미들웨어 적용
  matcher: [
    // 명시적으로 개별 경로 지정
    '/',
    '/company/:path*',
    '/solutions/:path*',
    '/products/:path*',
    '/cases/:path*',
    '/esg/:path*',
    '/pr/:path*',
    '/ir/:path*',
    '/en',
    '/en/:path*',
    '/ja',
    '/ja/:path*'
  ],
};
