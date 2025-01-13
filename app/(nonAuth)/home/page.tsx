"use client";

import Carousel from "@/app/components/home/carousel/Carousel";
import Community from "@/app/components/home/Community";
import CompetencyStatus from "@/app/components/home/CompetencyStatus";
import MyCompetence from "@/app/components/home/MyCompetence";
import RecommendationList from "@/app/components/RecommendationList";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const HomePage = () => {
  const session = useSession();

  // console.log("====================================");
  // console.log("session", session);
  // console.log("user", session.data?.user?.name);
  // console.log("====================================");
  return (
    <main>
      <section className="flex w-full gap-5">
        <Carousel />
        <MyCompetence />
      </section>

      {/* 역량 현황 */}
      <section className="mt-14">
        <CompetencyStatus />
      </section>

      {/* 대외활동 추천 */}
      <div className="mt-64">
        <div className="flex items-center justify-between">
          <div className="flex text-nowrap font-bold text-2xl items-center">
            인기 공고 추천🔥
          </div>
          <Link
            href="/activityRecommend"
            className="flex items-center text-gray-medium"
          >
            더보기
            <GoChevronRight />
          </Link>
        </div>

        <RecommendationList isHome={true} />
      </div>

      {/* 커뮤니티 */}
      <div className="mt-12">
        <Community />
      </div>
    </main>
  );
};

export default HomePage;
