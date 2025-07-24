import CompanyHero from "./CompanyHero";
import CompanyHistory from "./CompanyHistory";
import CompanyDetailMenu from "./CompanyDetailMenu";
import CompanyPerformance from "./CompanyPerformance";
import CompanyVision from "./CompanyVision";
import CompanyCeoMessage from "./CompanyCeoMessage";
import CompanyAwards from "./CompanyAwards";
import CompanyMembers from "./CompanyMembers";

interface CompanyPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function CompanyPage({ searchParams }: CompanyPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <CompanyHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <CompanyDetailMenu />
        {(!tab || tab === "performance") && <CompanyPerformance />}
        {tab === "ceo-message" && <CompanyCeoMessage />}
        {tab === "vision" && <CompanyVision />}
        {tab === "history" && <CompanyHistory />}
        {tab === "members" && <CompanyMembers />}
        {tab === "awards" && <CompanyAwards />}
      </div>
    </div>
  );
}
