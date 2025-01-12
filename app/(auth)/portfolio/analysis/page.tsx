"use client";
import CompetencyChartSection from "@/app/components/home/CompetencyChartSection";
import SkillProgressCard from "@/app/components/SkillProgressCard";
import { GoChevronRight } from "react-icons/go";

const PortfolioAnalysisPage = () => {
  return (
    <section>
      <h1 className="font-bold text-xl">
        <span className="text-careerForMe-main">사이드나우</span>
        님의 직무 역량 📊
      </h1>
      <div className="flex gap-8 mt-6 justify-between">
        <div className="flex flex-col flex-1 gap-4">
          <SkillProgressCard />
          <div className="bg-careerForMe-gray01 flex-1">
            <p>상세보기</p>
            <GoChevronRight />
            <div className="border-2 border-careerForMe-main rounded-lg inline-block px-3 py-1 bg-white">
              내 필수 스킬 <span className="text-careerForMe-main">6개</span>
            </div>
          </div>
        </div>

        <CompetencyChartSection />
      </div>
    </section>
  );
};

export default PortfolioAnalysisPage;
