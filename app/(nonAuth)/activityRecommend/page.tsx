// 활동 추천 페이지
"use client";

import ActivityRecommendationList from "@/app/components/activityRecommend/ActivityRecommendationList";
import PageNation from "@/app/components/activityRecommend/PageNation";
import FieldSelection from "@/app/components/activityRecommend/FieldSelection";
import JobForm from "@/app/components/activityRecommend/JobForm";
import ActivityTopInfo from "@/app/components/activityRecommend/ActivityTopInfo";

const ActivityRecommendationPage = () => {
  return (
    <main className="mt-16">
      <ActivityTopInfo />
      <JobForm />

      <div className="border-y-[0.1px] my-9 "></div>
      <FieldSelection />
      <ActivityRecommendationList />

      <PageNation />
    </main>
  );
};

export default ActivityRecommendationPage;
