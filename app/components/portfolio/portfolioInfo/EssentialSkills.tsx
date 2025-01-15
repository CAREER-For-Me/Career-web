"use client";
import { abilities, tools } from "@/app/constants/constants";
import SkillStatusIndicator from "../../SkillStatusIndicator";
import { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../../chart/BarChart";

const EssentialSkills = () => {
  const [loading, setLoading] = useState(true);
  const [userSkill, setUserSkill] = useState<string[] | null>(null);

  // 보유 스킬
  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/skill`
        );
        setUserSkill(response.data[0].skillName);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkill();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center p-4">
        <span className="loading loading-spinner text-careerForMe-main"></span>
      </div>
    );

  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl">필수 스킬 상세 비교하기📈</h1>
      <div className="min-w-max h-14 rounded-full mt-24 relative">
        <p className="absolute left-[3rem] bottom-[4.9rem] border-2 border-careerForMe-main rounded-lg px-4 py-1 text-nowrap">
          내 필수 스킬
          <span className="text-careerForMe-main font-bold ml-1">
            {userSkill?.length}개
          </span>
        </p>

        <div className="flex items-center text-nowrap h-24 justify-between mx-5">
          <div className="bg-gray-200 w-[70rem] h-[3.8rem] absolute rounded-xl" />
          <div className="absolute w-12/12">
            <BarChart
              value={userSkill?.length ?? 0}
              max={20}
              maxBarThickness={60}
              background="#6D72FF"
            />
          </div>
        </div>

        {/* 평균 필수 스킬 */}
        <p className="text-gray-dark absolute right-[27rem] top-19">
          평균 필수 스킬
          <span className="text-careerForMe-main"> 12개</span>
        </p>

        {/* 전체 필수 스킬 */}
        <p className="text-gray-dark absolute right-9 top-19">
          전체 필수 스킬
          <span className="text-careerForMe-main ml-1">20개</span>
        </p>
      </div>

      <div className="flex mt-32 gap-10">
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
              {abilities.map((ability, index) => {
                const isAbility = userSkill?.includes(ability);
                return (
                  <li
                    key={index}
                    className={`px-5 py-2 rounded-full shadow-sm border ${
                      isAbility
                        ? "text-careerForMe-main shadow-careerForMe-main bg-white"
                        : "text-gray-medium shadow-gray-medium bg-white"
                    }`}
                  >
                    {ability}
                  </li>
                );
              })}
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
              {tools.map((tool, index) => {
                const isUserSkill = userSkill?.includes(tool);
                return (
                  <li
                    key={index}
                    className={`px-5 py-2 rounded-full shadow-sm border ${
                      isUserSkill
                        ? "text-careerForMe-main shadow-careerForMe-main bg-white"
                        : "text-gray-medium shadow-gray-medium bg-white"
                    }`}
                  >
                    {tool}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EssentialSkills;
