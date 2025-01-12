import React from "react";

const SkillStatusIndicator = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="bg-careerForMe-main rounded-full w-[6px] h-[6px]"></p>
      <p className="text-careerForMe-main mr-3">내 스킬</p>
      <p className="bg-gray-medium rounded-full w-[6px] h-[6px]"></p>
      <p className="text-gray-medium">미보유 스킬</p>
    </div>
  );
};

export default SkillStatusIndicator;
