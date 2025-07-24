import SolutionHero from './SolutionHero';
import SolutionMenu from './SolutionMenu';
import AquacultureRD from './AquacultureRD';
import ProbioticsDevelopment from './ProbioticsDevelopment';
import VeterinaryResearch from './VeterinaryResearch';

interface SolutionsPageProps {
  searchParams: Promise<{ tab: string }>;
}

export default async function SolutionsPage({ searchParams }: SolutionsPageProps) {
  const { tab } = await searchParams;

  return (
    <div className="flex flex-col space-y-8">
      <SolutionHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <SolutionMenu />
        {(!tab || tab === "aquaculture-rd") && <AquacultureRD />}
        {tab === "probiotics-development" && <ProbioticsDevelopment />}
        {tab === "veterinary-research" && <VeterinaryResearch />}
      </div>
    </div>
  );
}