// 직무 선택 (직무 선택 드롭다운)
const JobSelection = () => {
  return (
    <div className="flex items-center font-bold">
      <p className="mr-5">직무</p>
      <select className="border-b-[1px] border-b-careerForMe-main mr-5 py-1 focus:outline-none">
        <option value={0}>웹개발</option>
        <option value={1}>백엔드 개발자</option>
        <option value={2}>23</option>
      </select>
      <select className="border-b-[1px] border-b-careerForMe-main py-1 focus:outline-none">
        <option value={1}>백엔드 개발자</option>
        <option value={2}>23</option>
        <option value={3}>23</option>
      </select>
    </div>
  );
};

export default JobSelection;
