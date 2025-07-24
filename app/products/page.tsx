'use client';

import ProductHero from './ProductHero';
import ProductMenu from './ProductMenu';
import ProductCatalog from './ProductCatalog';
import OnlineQuote from './OnlineQuote';
import SmartStore from './SmartStore';

interface ProductsPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <ProductHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <ProductMenu />
        {(!tab || tab === "product-catalog") && <ProductCatalog />}
        {tab === "online-quote" && <OnlineQuote />}
        {tab === "smart-store" && <SmartStore />}
      </div>
    </div>
  );
}