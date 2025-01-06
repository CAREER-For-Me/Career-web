import { useState } from "react";

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
        <option
          value="웹개발"
          className={`font-bold ${
            selectedValue1 === "웹개발" ? "text-careerForMe-main" : "text-black"
          }`}
        >
          웹개발
        </option>
        <option
          value="백엔드 개발자"
          className={`font-bold ${
            selectedValue1 === "백엔드 개발자"
              ? "text-careerForMe-main"
              : "text-black"
          }`}
        >
          백엔드 개발자
        </option>
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
        <option
          value="웹개발"
          className={`font-bold ${
            selectedValue2 === "웹개발" ? "text-careerForMe-main" : "text-black"
          }`}
        >
          웹개발
        </option>
        <option
          value="백엔드 개발자"
          className={`font-bold ${
            selectedValue2 === "백엔드 개발자"
              ? "text-careerForMe-main"
              : "text-black"
          }`}
        >
          백엔드 개발자
        </option>
      </select>
    </div>
  );
};

export default JobSelection;
