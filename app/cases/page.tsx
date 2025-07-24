'use client';

import CaseHero from './CaseHero';
import CasesMenu from './CasesMenu';
import RDStatus from './CasesRDStatus';
import Patents from './CasesPatents';
import ResearchFacilities from './CasesFacilities';
import TechPartnership from './CasesPartnership';

interface CasesPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function CasesPage({ searchParams }: CasesPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <CaseHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <CasesMenu />
        {(!tab || tab === 'rd-status') && <RDStatus />}
        {tab === 'patents' && <Patents />}
        {tab === 'research-facilities' && <ResearchFacilities />}
        {tab === 'tech-partnership' && <TechPartnership />}
      </div>
    </div>
  );
}