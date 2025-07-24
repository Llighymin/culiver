import CompanyHero from "./CompanyHero";
import CompanyHistory from "./CompanyHistory";
import CompanyDetailMenu from "./CompanyDetailMenu";
import CompanyPerformance from "./CompanyPerformance";
import CompanyVision from "./CompanyVision";
import CompanyMoreInfo from "./CompanyMoreInfo";

interface CompanyPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function CompanyPage({ searchParams }: CompanyPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <CompanyHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CompanyDetailMenu />
        {tab === "performance" && <CompanyPerformance />}
        {tab === "vision" && <CompanyVision />}
        {tab === "history" && <CompanyHistory />}
        {tab === "more-info" && <CompanyMoreInfo />}
      </div>
    </div>
  );
}
