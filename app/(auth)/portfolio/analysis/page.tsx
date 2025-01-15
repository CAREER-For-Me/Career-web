"use client";
import CompetencyDetail from "@/app/components/home/CompetencyDetail";
import SkillAnalysis from "@/app/components/portfolio/portfolioInfo/SkillAnalysis";
import AvgSpecs from "@/app/components/portfolio/portfolioInfo/AvgSpecs";
import SpecsComparison from "@/app/components/portfolio/portfolioInfo/SpecsComparison";
import LangScoreComparison from "@/app/components/portfolio/portfolioInfo/LangScoreComparison";
import EssentialSkills from "@/app/components/portfolio/portfolioInfo/EssentialSkills";

const PortfolioAnalysisPage = () => {
  return (
    <section>
      {/* 1. 직무 역량 */}
      <SkillAnalysis />
      {/* 2. 합격자 평균 스펙 */}
      <AvgSpecs />

      {/* 3. 스펙 비교 */}
      <SpecsComparison />

      {/* 4. 스펙 부족/충분 */}
      <article className="mt-24">
        <CompetencyDetail isMain={false} />
      </article>

      {/* 5. 어학 점수 비교 */}
      <LangScoreComparison />

      {/* 6. 필수 스킬 상세 비교 */}
      <EssentialSkills />
    </section>
  );
};

export default PortfolioAnalysisPage;
