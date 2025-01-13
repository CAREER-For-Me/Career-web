const AwardsForm = () => {
  return (
    <section className="flex flex-col gap-8 text-nowrap">
      <h1 className="text-xl font-bold">수상</h1>

      {/* 대회명 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">대회명</h2>
        <input
          type="text"
          placeholder="대회명"
          className="input input-bordered w-23"
        />
      </div>
      {/* 수상명 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">수상명</h2>
        <input
          type="text"
          placeholder="수상명"
          className="input input-bordered w-23"
        />
      </div>

      {/* 수여기관 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">수여기관</h2>
        <input
          type="text"
          placeholder="수여기관"
          className="input input-bordered w-23"
        />
      </div>
    </section>
  );
};

export default AwardsForm;
