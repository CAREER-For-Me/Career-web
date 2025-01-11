"use client";
import { postingActivityStore } from "@/app/store/postingActivityStore";
import Link from "next/link";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";

interface FieldSelectionProps {
  main?: string | null;
}

const FieldSelection = ({ main }: FieldSelectionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const setPostingGubun = postingActivityStore(
    (state) => state.setPostingGubun
  );

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);

    switch (value) {
      case "대외활동":
        setPostingGubun(0);
        break;
      case "인턴/채용":
        setPostingGubun(1);
        break;
      case "공모전":
        setPostingGubun(2);
        break;
      case "동아리":
        setPostingGubun(3);
        break;
      case "교육/강연":
        setPostingGubun(4);
        break;
      default:
        setPostingGubun(0);
    }
  };

  return (
    <div className="flex justify-between items-center">
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

      {main ? (
        <Link href="/activityRecommend" className="flex items-center">
          더보기 <GoChevronRight />
        </Link>
      ) : (
        <>
          <select className="text-gray-dark focus:outline-none">
            <option value="추천순">추천순</option>
            <option value="댓글순">댓글순</option>
            <option value="최신순">최신순</option>
          </select>
        </>
      )}
    </div>
  );
};

export default FieldSelection;
