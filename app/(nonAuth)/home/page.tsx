"use client";

import FieldSelection from "@/app/components/FieldSelection";
import Carousel from "@/app/components/home/Carousel";
import Community from "@/app/components/home/Community";
import CompetencyStatus from "@/app/components/home/CompetencyStatus";
import MyCompetence from "@/app/components/home/MyCompetence";
import RecommendationList from "@/app/components/RecommendationList";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const session = useSession();

  console.log("====================================");
  console.log("session", session);
  console.log("user", session.data?.user?.name);
  console.log("====================================");
  return (
    <main>
      <div className="flex w-full gap-5 h-64">
        <Carousel />
        <MyCompetence />
      </div>
      <div className="mt-12">
        <CompetencyStatus />
      </div>
      <div className="mt-64">
        <FieldSelection />

        <RecommendationList maxItem={8} />
      </div>

      <div>
        <Community />
      </div>
    </main>
  );
};

export default HomePage;
