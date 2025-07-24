'use client';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import TechnologyHighlights from '@/components/TechnologyHighlights';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechnologyHighlights />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
