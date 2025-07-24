'use client';

import ProductHero from './ProductHero';
import ProductCategories from './ProductCategories';
import ProductFeatures from './ProductFeatures';
import TechnicalSpecs from './TechnicalSpecs';

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <ProductCategories />
      <ProductFeatures />
      <TechnicalSpecs />
    </>
  );
}