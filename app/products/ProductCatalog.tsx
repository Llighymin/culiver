import React from 'react';
import ProductCategories from './ProductCategories';
import ProductFeatures from './ProductFeatures';
import TechnicalSpecs from './TechnicalSpecs';

const ProductCatalog = () => {
  return (
    <div className="space-y-8">
      <ProductCategories />
      <ProductFeatures />
      <TechnicalSpecs />
    </div>
  );
};

export default ProductCatalog;
