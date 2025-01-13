const InternshipAndActivitiesForm = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-xl font-bold ">인턴/대외활동</h1>

      {/* 활동 구분 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">활동 구분</h2>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      {/* 활동명 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">활동명</h2>
        <input
          type="text"
          placeholder="전공"
          className="input input-bordered flex-grow"
        />
      </div>

      {/* 시작일과 종료일 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">시작일</h2>
        <input
          type="date"
          placeholder="시작일"
          className="input input-bordered flex-grow"
        />
        <h2 className="font-bold">종료일</h2>
        <input
          type="date"
          placeholder="종료일"
          className="input input-bordered flex-grow"
        />
      </div>

      {/* 활동 내용 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">활동 내용</h2>

        <textarea
          className="textarea textarea-bordered w-5/6 resize-none"
          placeholder="Bio"
        ></textarea>
      </div>
    </section>
  );
};

export default InternshipAndActivitiesForm;
