"use client";
import { useSession } from "next-auth/react";
import CompetencyChartSection from "../../CompetencyChartSection";
import SkillProgressCard from "../../SkillProgressCard";
import SkillOverview from "../SkillOverview";

const SkillAnalysis = () => {
  const session = useSession();

  return (
    <article>
      <h1 className="font-bold text-xl">
        <span className="text-careerForMe-main underline">
          {session.data?.user?.name}
        </span>
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
