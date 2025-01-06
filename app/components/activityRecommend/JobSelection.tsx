import { useRef, useState } from "react";

// 직무 선택 (직무 선택 드롭다운)
const JobSelection = () => {
  const selectedOption1 = useRef<HTMLSelectElement | null>(null);
  const selectedOption2 = useRef<HTMLSelectElement | null>(null);
  const [selectedValue2, setSelectedValue2] = useState<string>("");

  const handleSelectedOption1 = () => {
    if (selectedOption1.current?.value !== "") {
      if (selectedOption2.current) {
        selectedOption2.current.disabled = false;
      }
    } else {
      if (selectedOption2.current) {
        selectedOption2.current.disabled = true;
      }
    }
  };

  const handleSelectedOption2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue2(e.target.value);
  };

  return (
    <div className="flex items-center font-bold">
      <p className="mr-5">직무</p>
      <select
        ref={selectedOption1}
        onChange={handleSelectedOption1}
        className="border-b-[1px] border-b-careerForMe-main mr-5 py-1 focus:outline-none text-careerForMe-main"
      >
        <option value="" className="text-gray-dark">
          직무를 선택하세요
        </option>
        <option
          value="웹개발"
          className={`font-bold ${
            selectedOption1.current?.value === "웹개발"
              ? "text-careerForMe-main"
              : "text-black"
          }`}
        >
          웹개발
        </option>
        <option
          value="백엔드 개발자"
          className={`font-bold ${
            selectedOption1.current?.value === "백엔드 개발자"
              ? "text-careerForMe-main"
              : "text-black"
          }`}
        >
          백엔드 개발자
        </option>
      </select>
      <select
        ref={selectedOption2}
        onChange={handleSelectedOption2}
        className={`border-b-[1px] border-b-careerForMe-main py-1 focus:outline-none ${
          selectedValue2 === "웹개발" ? "text-careerForMe-main" : "text-black"
        }`}
        disabled={true}
      >
        <option value="" className="text-gray-dark">
          세부 직무를 선택하세요
        </option>
        <option
          value="웹개발"
          className={`font-bold ${
            selectedOption2.current?.value === "웹개발"
              ? "text-careerForMe-main"
              : "text-black"
          }`}
        >
          웹개발
        </option>
        <option
          value="백엔드 개발자"
          className={`font-bold ${
            selectedOption2.current?.value === "백엔드 개발자"
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
