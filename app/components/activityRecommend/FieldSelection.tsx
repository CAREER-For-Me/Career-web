"use client";
import React, { useState } from "react";

const FieldSelection = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <div className="flex text-nowrap font-bold text-2xl items-center">
        <p>나를 위한</p>
        <select
          value={selectedOption || ""}
          onChange={handleSelected}
          className="select select-bordered border-solid border-black ml-4 mr-4 text-2xl focus:outline-none text-careerForMe-main"
        >
          <option
            value="대외활동"
            className={`text-xl font-bold ${
              selectedOption === "대외활동"
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            대외활동
          </option>
          <option
            value="인턴/채용"
            className={`text-xl font-bold ${
              selectedOption === "인턴/채용"
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            인턴/채용
          </option>
          <option
            value="동아리"
            className={`text-xl font-bold ${
              selectedOption === "동아리"
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            동아리
          </option>
          <option
            value="공모전"
            className={`text-xl font-bold ${
              selectedOption === "공모전"
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            공모전
          </option>
          <option
            value="교육/강연"
            className={`text-xl font-bold ${
              selectedOption === "교육/강연"
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            교육/강연
          </option>
        </select>
        <p>추천이에요🌟</p>
      </div>

      <select className="text-gray-dark focus:outline-none">
        <option value="추천순">추천순</option>
        <option value="댓글순">댓글순</option>
        <option value="최신순">최신순</option>
      </select>
    </div>
  );
};

export default FieldSelection;
