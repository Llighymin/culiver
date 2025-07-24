'use client';

import CompanyHero from './CompanyHero';
import CompanyHistory from './CompanyHistory';
import Vision from './Vision';
import Research from './Research';
import Certifications from './Certifications';

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <Vision />
      <CompanyHistory />
      <Research />
      <Certifications />
    </>
  );
}