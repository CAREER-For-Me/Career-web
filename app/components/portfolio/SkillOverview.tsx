import { useUserSpec } from "@/app/context/UserSpecContext";
import BarChart from "../chart/BarChart";
import { GoChevronRight } from "react-icons/go";

const SkillOverview = () => {
  const { myspec, setMyspec } = useUserSpec();
  return (
    <div className="bg-careerForMe-gray01 flex-1 rounded-md">
      <div className="flex justify-end items-center mr-5 mt-5 -mb-4">
        <p>상세보기</p>
        <GoChevronRight />
      </div>

      <div className="ml-6 relative">
        <div className="border-2 border-careerForMe-main rounded-lg inline-block px-3 py-1 ml-4 bg-white">
          내 필수 스킬 <span className="text-careerForMe-main">6개</span>
        </div>
        <div className="flex items-center text-nowrap h-14 justify-between mx-5">
          <div className="bg-gray-light w-[18.8rem] h-[1.3rem] absolute rounded-full" />
          <div className="absolute ">
            <BarChart
              value={6}
              max={20}
              maxBarThickness={20}
              background="#6D72FF"
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
