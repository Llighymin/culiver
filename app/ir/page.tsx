import IrHero from './IrHero';
import IrMenu from './IrMenu';
import FinancialInfo from './FinancialInfo';
import DisclosureInfo from './DisclosureInfo';
import IrLibrary from './IrLibrary';
import CorporateGovernance from './CorporateGovernance';

interface IrPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function IrPage({ searchParams }: IrPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <IrHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <IrMenu />
        {(!tab || tab === "financial-info") && <FinancialInfo />}
        {tab === "disclosure-info" && <DisclosureInfo />}
        {tab === "ir-library" && <IrLibrary />}
        {tab === "corporate-governance" && <CorporateGovernance />}
      </div>
    </div>
  );
}
