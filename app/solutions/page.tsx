'use client';

import SolutionHero from './SolutionHero';
import Industrysolutions from './IndustrySolutions';
import ProcessFlow from './ProcessFlow';
import Benefits from './Benefits';
import CustomSolution from './CustomSolution';

export default function SolutionsPage() {
  return (
    <>
      <SolutionHero />
      <Industrysolutions />
      <ProcessFlow />
      <Benefits />
      <CustomSolution />
    </>
  );
}