"use client";
import CompetencyStatus from "@/app/components/home/CompetencyStatus";
import SkillProgressCard from "@/app/components/SkillProgressCard";

const PortfolioAnalysisPage = () => {
  return (
    <section className="w-2/5 flex flex-col gap-2">
      <SkillProgressCard />
      <CompetencyStatus />
    </section>
  );
};

export default PortfolioAnalysisPage;
