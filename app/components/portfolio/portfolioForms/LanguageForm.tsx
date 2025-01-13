const LanguageForm = () => {
  return (
    <section className="flex flex-col gap-8 text-nowrap">
      <h1 className="text-xl font-bold">어학</h1>
      {/* 시험종류 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">시험종류</h2>
        <select className="select select-bordered w-48">
          <option disabled>시험종류</option>
          <option>토익(TOEIC)</option>
        </select>
      </div>

      {/* 점수/급수 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">점수/급수</h2>
        <input
          type="text"
          placeholder="점수/급수"
          className="input input-bordered w-23"
        />
      </div>

      {/* 취득일 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">취득일</h2>
        <input
          type="date"
          placeholder="취득일"
          className="input input-bordered w-42"
        />
      </div>
    </section>
  );
};

export default LanguageForm;
