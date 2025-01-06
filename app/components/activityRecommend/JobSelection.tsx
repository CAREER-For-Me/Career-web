import { useState } from "react";
import { useJobDetailsQuery } from "../hooks/query/useActivityQuery";

// 직무 선택 (직무 선택 드롭다운)
const JobSelection = () => {
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");

  const handleSelectedOption1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue1(e.target.value);
    if (e.target.value !== "") {
      setSelectedValue2("");
    }
  };

  const handleSelectedOption2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue2(e.target.value);
  };
  const { data: jobDetails = [], isLoading, error } = useJobDetailsQuery();

  // value 추출
  const detailedJobs: string[] = jobDetails[selectedValue1] || [];

  return (
    <div className="flex items-center font-bold">
      <p className="mr-5">직무</p>

      <select
        value={selectedValue1}
        onChange={handleSelectedOption1}
        className="border-b-[1px] border-b-careerForMe-main mr-5 py-1 focus:outline-none text-careerForMe-main"
      >
        <option value="" className="text-gray-dark">
          직무를 선택하세요
        </option>
        {Object.keys(jobDetails).map((jobCategory) => (
          <option
            key={jobCategory}
            value={jobCategory}
            className={`font-bold ${
              selectedValue1 === jobCategory
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            {jobCategory}
          </option>
        ))}
      </select>
      <select
        value={selectedValue2}
        onChange={handleSelectedOption2}
        className={`border-b-[1px] border-b-careerForMe-main mr-5 py-1 focus:outline-none ${
          selectedValue1 || selectedValue2 !== ""
            ? "text-careerForMe-main"
            : "text-black"
        }`}
        disabled={selectedValue1 === ""}
      >
        <option value="" className="text-gray-dark">
          세부 직무를 선택하세요
        </option>
        {detailedJobs.map((detailedJob, index) => (
          <option
            key={index}
            value={detailedJob}
            className={`font-bold ${
              selectedValue2 === detailedJob
                ? "text-careerForMe-main"
                : "text-black"
            }`}
          >
            {detailedJob}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobSelection;
