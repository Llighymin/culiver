export const i18n = {
  defaultLocale: 'ko',
  locales: ['ko', 'en', 'ja'],
}

export const locales = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
}

export function getLocaleFromPath(pathname) {
  if (!pathname) return i18n.defaultLocale;
  
  const segments = pathname.split('/')
  // 첫 번째 세그먼트가 로케일인 경우만 그 값을 반환, 아니면 기본 로케일
  const locale = segments.length > 1 ? segments[1] : ''
  return i18n.locales.includes(locale) ? locale : i18n.defaultLocale
}

export function getPathWithoutLocale(pathname) {
  if (!pathname) return '/';
  
  const segments = pathname.split('/')
  const locale = segments.length > 1 ? segments[1] : ''
  
  if (i18n.locales.includes(locale)) {
    const newPath = pathname.replace(`/${locale}`, '') || '/'
    return newPath
  }
  
  return pathname
}

export function createPathWithLocale(pathname, locale) {
  const pathWithoutLocale = getPathWithoutLocale(pathname)
  return locale === i18n.defaultLocale ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`
}
