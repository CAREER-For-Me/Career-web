"use client";

import { jobDetails } from "@/app/constants/constants";
import { useState } from "react";
import SelectedJob from "./SelectedJob";

const CareerChoiceYes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState<any | null>(
    null
  );

  const handleCategoryClick = (category: string) => {
    const categoryData = jobDetails[category]?.data;

    if (categoryData?.length === 1) {
      // 데이터가 한 개일 경우 바로 jobs를 SelectedJob에 전달
      setSelectedCategoryData({
        category: categoryData[0]?.category,
        jobs: categoryData[0]?.jobs,
      });
    } else {
      // 여러 개일 경우 선택한 카테고리를 저장
      setSelectedCategory(category);
    }
  };

  const handleSubCategoryClick = (category: string, jobs: string[]) => {
    setSelectedCategoryData({ category, jobs });
  };

  const handleBack = () => {
    if (selectedCategoryData) {
      setSelectedCategoryData(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <main className="mb-32">
      {!selectedCategory && !selectedCategoryData && (
        <>
          <p className="text-careerForMe-main leading-[2.5] my-[2rem]">
            <span className="text-[1.2rem] font-bold">
              관심있는 직무를 선택해주세요
            </span>
            <br />
            나에게 맞는 공고를 추천해드릴게요!
          </p>

          <div className="grid grid-cols-4 gap-6 max-w-[900px] mx-auto list-none">
            {Object.entries(jobDetails).map(([category, detail]) => (
              <li key={category}>
                <div
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center aspect-square border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
                >
                  <p className="text-center">{category}</p>
                  <img
                    src={detail?.icon}
                    alt={`${category} Icon`}
                    width={120}
                    height={120}
                    className="mt-[0.5rem]"
                  />
                </div>
              </li>
            ))}
          </div>
        </>
      )}

      {selectedCategory && !selectedCategoryData && (
        <div className="p-4">
          <h2 className="text-[1.2rem] font-bold text-careerForMe-main">
            세부 분야를 선택해주세요.
          </h2>
          <ul className="flex justify-center gap-4 items-center mt-32">
            {jobDetails[selectedCategory]?.data.map((dataItem, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    handleSubCategoryClick(dataItem.category, dataItem.jobs)
                  }
                  className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[24rem] h-[13rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
                >
                  {dataItem.category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCategoryData && (
        <div className="p-4">
          <SelectedJob categoryData={selectedCategoryData} />
        </div>
      )}
    </main>
  );
};

export default CareerChoiceYes;
