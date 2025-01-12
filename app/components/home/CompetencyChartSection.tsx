import React from "react";
import BarChart from "../chart/BarChart";
import Hr from "../common/Hr";

const CompetencyChartSection = () => {
  return (
    <div className="bg-careerForMe-gray01 rounded-md w-3/5 relative">
      <div className="flex m-9 flex-col">
        <div className="flex text-gray-medium text-sm relative">
          <p>필요 역량</p>
          <p className="absolute left-40">충족 상태</p>
        </div>

        <Hr mt={2} my={9} />
        <div className="h-[12.4rem] w-[100rem] absolute left-52 bottom-[3.2rem]">
          <BarChart />
        </div>

        <div className="flex mb-4 relative">
          <p>학점</p>
          <p className="absolute left-48"></p>
          <p className="text-careerForMe-main ml-auto">4.32점</p>
        </div>

        <div className="flex mb-4 relative">
          <p>인턴</p>
          <p className="text-careerForMe-main ml-auto">4.32점</p>
        </div>

        <div className="flex mb-4 relative">
          <p>수상내역</p>
          <p className="text-careerForMe-main ml-auto">4.32점</p>
        </div>

        <div className="flex mb-4 relative">
          <p>대외활동</p>
          <p className="text-careerForMe-main ml-auto">4.32점</p>
        </div>

        <div className="flex mb-4 relative">
          <p>자격증</p>
          <p className="text-careerForMe-main ml-auto">4.32점</p>
        </div>
      </div>
    </div>
  );
};

export default CompetencyChartSection;
