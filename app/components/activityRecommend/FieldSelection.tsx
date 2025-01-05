// 추천분야 선택 (분야 드롭다운)
const FieldSelection = () => {
  return (
    <div className="flex justify-between">
      <p className="text-2xl font-bold">
        나를 위한
        <select>
          <option>대외활동</option>
          <option>인턴십</option>
        </select>
        추천이에요🌟
      </p>
      <select className="text-gray-dark">
        <option>추천순</option>
        <option>댓글순</option>
        <option>최신순</option>
      </select>
    </div>
  );
};

export default FieldSelection;
