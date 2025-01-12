const CertificatesForm = () => {
  return (
    <section className="flex flex-col gap-8 text-nowrap">
      <h1 className="text-xl font-bold">자격증</h1>
      {/* 자격증명 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">자격증명</h2>
        <input
          type="text"
          placeholder="자격증명"
          className="input input-bordered w-23"
        />
      </div>
      {/* 급수 */}
      <div className="flex items-center gap-8">
        <h2 className="font-bold w-24">급수</h2>
        <select className="select select-bordered w-32">
          <option disabled>급수</option>
          <option>1급</option>
          <option>2급</option>
          <option>3급</option>
        </select>
      </div>
    </section>
  );
};

export default CertificatesForm;
