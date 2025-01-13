import CompetencyChartSection from "../../CompetencyChartSection";
import SkillProgressCard from "../../SkillProgressCard";
import SkillOverview from "../SkillOverview";

const SkillAnalysis = () => {
  return (
    <article>
      <h1 className="font-bold text-xl">
        <span className="text-careerForMe-main underline">사이드나우</span>
        님의 직무 역량 📊
      </h1>
      <div className="flex gap-8 mt-6 justify-between">
        <div className="flex flex-col flex-1 gap-4">
          <SkillProgressCard />
          <SkillOverview />
        </div>
        <CompetencyChartSection isMain={false} />
      </div>
    </article>
  );
};

export default SkillAnalysis;
