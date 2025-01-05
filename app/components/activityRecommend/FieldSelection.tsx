// 추천분야 선택 (분야 드롭다운)
const FieldSelection = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex text-nowrap font-bold text-2xl items-center">
        <p>나를 위한</p>
        <select className="select select-bordered border-solid border-black ml-4 mr-4 text-2xl">
          <option selected>대외활동</option>
          <option>인턴/채용</option>
          <option>동아리</option>
          <option>공모전</option>
          <option>교육/강연</option>
        </select>
        <p>추천이에요🌟</p>
      </div>

      <select className="text-gray-dark focus:outline-none">
        <option>추천순</option>
        <option>댓글순</option>
        <option>최신순</option>
      </select>
    </div>
  );
};

export default FieldSelection;
