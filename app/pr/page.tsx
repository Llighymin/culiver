import PrHero from './PrHero';
import PrMenu from './PrMenu';
import Notice from './Notice';
import PressRelease from './PressRelease';
import TechData from './TechData';
import Faq from './Faq';
import CustomerInquiry from './CustomerInquiry';

interface PrPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function PrPage({ searchParams }: PrPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <PrHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <PrMenu />
        {(!tab || tab === "notice") && <Notice />}
        {tab === "press-release" && <PressRelease />}
        {tab === "tech-data" && <TechData />}
        {tab === "faq" && <Faq />}
        {tab === "customer-inquiry" && <CustomerInquiry />}
      </div>
    </div>
  );
}
