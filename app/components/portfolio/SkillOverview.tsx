import BarChart from "../chart/BarChart";
import { GoChevronRight } from "react-icons/go";

const SkillOverview = () => {
  return (
    <div className="bg-careerForMe-gray01 flex-1 rounded-md">
      <div className="flex justify-end items-center mr-5 mt-5 -mb-4">
        <p>상세보기</p>
        <GoChevronRight />
      </div>

      <div className="ml-6">
        <div className="border-2 border-careerForMe-main rounded-lg inline-block px-3 py-1 bg-white">
          내 필수 스킬 <span className="text-careerForMe-main">6개</span>
        </div>
        <div className="flex items-center text-nowrap h-14 justify-between mx-5">
          <div>
            <BarChart />
          </div>
          <div>
            <span className="text-gray-dark">전체</span>
            <span className="text-careerForMe-main">20개</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillOverview;
