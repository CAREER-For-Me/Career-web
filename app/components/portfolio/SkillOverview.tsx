import BarChart from "../chart/BarChart";
import { GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react";
import axios from "axios";

const SkillOverview = () => {
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
    <div className="bg-careerForMe-gray01 flex-1 rounded-md">
      <div className="flex justify-end items-center mr-5 mt-5 -mb-4">
        <p>상세보기</p>
        <GoChevronRight />
      </div>

      <div className="ml-6 relative">
        <div className="border-2 border-careerForMe-main rounded-lg inline-block px-3 py-1 ml-4 bg-white">
          내 필수 스킬
          <span className="text-careerForMe-main ml-1">
            {userSkill?.length}개
          </span>
        </div>
        <div className="flex items-center text-nowrap h-14 justify-between mx-5">
          <div className="bg-gray-light w-[18.8rem] h-[1.3rem] absolute rounded-full" />
          <div className="absolute ">
            <BarChart
              value={userSkill?.length ?? 0}
              max={20}
              maxBarThickness={20}
              background="#6D72FF"
              indexAxis="y"
            />
          </div>

          <div className="absolute right-6">
            <span className="text-gray-dark mr-1">전체</span>
            <span className="text-careerForMe-main">20개</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOverview;
