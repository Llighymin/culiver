'use client';

import CaseHero from './CaseHero';
import SuccessStories from './SuccessStories';
import CaseStudies from './CaseStudies';
import Results from './Results';

export default function CasesPage() {
  return (
    <>
      <CaseHero />
      <SuccessStories />
      <CaseStudies />
      <Results />
    </>
  );
}