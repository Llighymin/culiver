'use client';

import ProductsPage from '@/app/products/page';

export default function JapaneseProductsPage(props: any) {
  // 같은 제품 소개 페이지를 재사용합니다
  return <ProductsPage {...props} />;
}
