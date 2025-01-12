"use client";
import CompetencyChartSection from "@/app/components/CompetencyChartSection";
import CompetencyDetail from "@/app/components/home/CompetencyDetail";
import SkillOverview from "@/app/components/portfolioAnalysis/SkillOverview";
import SkillProgressCard from "@/app/components/SkillProgressCard";
import SkillStatusIndicator from "@/app/components/SkillStatusIndicator";
import { abilities, tools } from "@/app/constants/constants";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { credentials } from "@/app/constants/constants";

const data = ["3.6", "5", "4", "4", "4"];

const PortfolioAnalysisPage = () => {
  return (
    <section>
      {/* 1. 직무 역량 */}
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

      {/* 2. 평균 스펙 */}
      <article className="mt-24">
        <h1 className="font-bold text-xl mb-4">합격자 평균 스펙📈</h1>
        <div className="overflow-hidden rounded-2xl border border-gray-300  shadow-md">
          <table className="table-auto border-collapse w-full text-center">
            <thead className="bg-careerForMe-main text-white">
              <tr>
                {credentials.map((item, index) => (
                  <th key={index} className="p-3 border border-gray-300">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                {data.map((item, index) => (
                  <th key={index} className="py-8  border border-gray-300">
                    {item}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex text-gray-medium items-center justify-end mt-7">
          2022~2024 대졸신입공채 최종합격자 N명의 데이터를 기반으로 한 통계
          자료입니다.
          <div className="underline ml-2">
            <Link href="/" className="flex items-center">
              상세보기
              <GoChevronRight />
            </Link>
          </div>
        </div>
      </article>

      {/* 3. 스펙 비교 */}
      <article className="mt-24">
        <h1 className="font-bold text-xl">합격자 스펙과 내 스펙 비교하기📈</h1>
      </article>

      {/* 4. 부족/충분 */}
      <article className="mt-24">
        <CompetencyDetail isMain={false} />
      </article>

      {/* 5. 어학 점수 비교 */}
      <article className="mt-24">
        <h1 className="font-bold text-xl mb-5">어학점수 비교하기📈</h1>

        <div className="flex">
          <div className="min-h-36 flex items-center justify-center w-52 text-white bg-careerForMe-main rounded-l-lg shadow-sm shadow-gray-light">
            <p className="">토익(TOEIC)</p>
          </div>
          <div className="flex-1 min-h-36 rounded-r-lg shadow-sm shadow-gray-light relative">
            <div className="flex flex-col gap-4 p-9">
              {/* 내 점수 */}
              <div className="flex items-center">
                <div className="bg-careerForMe-main w-1/4 h-9 rounded-lg mr-5">
                  <p className="text-white font-bold my-2 mx-4">내 점수</p>
                </div>
                <span className="text-careerForMe-main font-bold ">820점</span>
              </div>

              {/* 합격자 평균 */}
              <div className="flex items-center">
                <div className="bg-[#E3E3E3] w-2/4 h-9 rounded-lg mr-5">
                  <p className="text-gray-dark font-bold my-2 mx-4">
                    합격자 평균
                  </p>
                </div>
                <span className="text-gray-light font-bold ">922점</span>
              </div>

              {/* 점수 */}
              <div>
                <div className="">
                  <p className="absolute right-5 top-3 px-6 py-4 text-careerForMe-main text-2xl font-bold border shadow-gray-light shadow-sm inline-block rounded-2xl">
                    -102점
                  </p>
                </div>
                <p className="absolute right-5 top-[4.3rem] px-6 py-4 text-gray-light">
                  990점 만점
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 6. 필수 스킬 상세 비교 */}
      <article className="mt-24">
        <h1 className="font-bold text-xl">필수 스킬 상세 비교하기📈</h1>
        <div className="bg-careerForMe-gray01 min-w-max h-9 rounded-full mt-24 relative">
          <div className="bg-careerForMe-main w-1/4 h-9 rounded-l-full mt-16 relative">
            {/* 내 필수 스킬 */}
            <p className="absolute left-[14rem] bottom-[4rem] border-2 border-careerForMe-main rounded-lg px-4 py-1 text-nowrap">
              내 필수 스킬
              <span className="text-careerForMe-main font-bold ml-1">3개</span>
            </p>
          </div>
          {/* 평균 필수 스킬 */}
          <p className="text-gray-dark absolute right-[35rem] top-12">
            평균 필수 스킬
            <span className="text-careerForMe-main"> 12개</span>
          </p>

          {/* 전체 필수 스킬 */}
          <p className="text-gray-dark absolute right-0 top-12">
            전체 필수 스킬
            <span className="text-careerForMe-main"> 20개</span>
          </p>
        </div>

        <div className="flex mt-28 gap-10">
          {/* ABILTITY */}
          <div className="w-2/4 bg-careerForMe-gray01 rounded-xl shadow-sm shadow-gray-light">
            <div className="m-8">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">🌟ABILTITY</h2>
                <div className="flex items-center justify-between">
                  <SkillStatusIndicator />
                </div>
              </div>

              <ul className="flex gap-4 flex-wrap mt-8">
                {abilities.map((ability, index) => (
                  <li
                    key={index}
                    className="px-5 py-2 rounded-full shadow-sm border text-careerForMe-main shadow-careerForMe-main bg-white"
                  >
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🔧TOOL */}
          <div className="w-2/4 bg-careerForMe-gray01 rounded-xl shadow-sm shadow-gray-light">
            <div className="m-8">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">🔧TOOL</h2>
                <div className="flex items-center justify-between">
                  <SkillStatusIndicator />
                </div>
              </div>

              <ul className="flex gap-4 flex-wrap mt-8">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="px-5 py-2 rounded-full shadow-sm border text-careerForMe-main shadow-careerForMe-main bg-white"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PortfolioAnalysisPage;
