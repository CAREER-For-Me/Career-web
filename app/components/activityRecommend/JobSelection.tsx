import { useJobDetailsQuery } from "../hooks/query/useActivityQuery";
import { jobSelectionStore } from "@/app/store/jobSelectionStore";

// 직무 선택 (직무 선택 드롭다운)
const JobSelection = () => {
  const {
    selectedValue1,
    selectedValue2,
    setSelectedValue1,
    setSelectedValue2,
    addJobPair, // 직무 쌍 추가 함수
  } = jobSelectionStore();

  const handleSelectedOption1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue1(e.target.value);
    if (e.target.value !== "") {
      setSelectedValue2(""); // 세부 직무 초기화
    }
  };

  const handleSelectedOption2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue2(e.target.value);
    if (e.target.value !== "") {
      addJobPair(); // 직무 쌍 추가
    }
  };

  const { data: jobDetails = [], isLoading, error } = useJobDetailsQuery();

  // value 추출
  const detailedJobs: string[] = Array.isArray(jobDetails[selectedValue1])
    ? jobDetails[selectedValue1]
    : [];

  if (isLoading)
    return (
      <div className="flex justify-center p-4">
        <span className="loading loading-spinner text-careerForMe-main"></span>
      </div>
    );
  if (error)
    return (
      <div role="alert" className="alert alert-error mt-4 text-white font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          에러 발생! {error.message} (터미널에 yarn server을 입력하여 서버를
          켜주세요.)
        </span>
      </div>
    );

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
