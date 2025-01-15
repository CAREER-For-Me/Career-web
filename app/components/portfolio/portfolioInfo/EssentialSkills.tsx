"use client";
import { abilities, tools } from "@/app/constants/constants";
import SkillStatusIndicator from "../../SkillStatusIndicator";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="bg-careerForMe-gray01 min-w-max h-9 rounded-full mt-24 relative">
        <div className="bg-careerForMe-main w-1/4 h-9 rounded-l-full mt-16 relative">
          {/* 내 필수 스킬 */}
          <p className="absolute left-[14rem] bottom-[4rem] border-2 border-careerForMe-main rounded-lg px-4 py-1 text-nowrap">
            내 필수 스킬
            <span className="text-careerForMe-main font-bold ml-1">
              {userSkill?.length}개
            </span>
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
          <span className="text-careerForMe-main ml-1">20개</span>
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
              {tools
                // .filter((tool) => !userSkill?.some((skill) => skill === tool))
                .map((tool, index) => (
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
  );
};

export default EssentialSkills;
