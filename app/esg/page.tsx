'use client';

import EsgHero from './EsgHero';
import EsgMenu from './EsgMenu';
import EcoFriendlyAquaculture from './EcoFriendlyAquaculture';
import SocialResponsibility from './EsgSocial';
import EthicalManagement from './EsgEthical';
import EsgManagement from './EsgManagement';

interface EsgPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function EsgPage({ searchParams }: EsgPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <EsgHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <EsgMenu />
        {(!tab || tab === "esg-management") && <EsgManagement />}
        {tab === "eco-friendly-aquaculture" && <EcoFriendlyAquaculture />}
        {tab === "social-responsibility" && <SocialResponsibility />}
        {tab === "ethical-management" && <EthicalManagement />}
      </div>
    </div>
  );
}