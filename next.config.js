/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  // App Router를 사용하므로 rewrite 설정 제거
  // 각 언어별 디렉토리가 직접 해당 경로를 처리
  
  // 다국어 처리 관련 에러 개선을 위한 추가 설정
  // 정적 경로 강화
  trailingSlash: false,
  
  // 페이지 전환 간 스크립트 로드 개선
  optimizeFonts: true,
  
  // 언어 전환 시 빠른 네비게이션 허용
  reactStrictMode: true,
  
  // 로케일 링크 전환 최적화
  swcMinify: true
};

module.exports = nextConfig;
