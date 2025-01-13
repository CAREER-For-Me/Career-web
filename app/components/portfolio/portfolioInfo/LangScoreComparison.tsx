const LangScoreComparison = () => {
  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl mb-5">어학점수 비교하기📈</h1>

      <div className="flex">
        <div className="min-h-36 flex items-center justify-center w-52 text-white bg-careerForMe-main rounded-l-lg shadow-sm shadow-gray-light">
          <p className="">토익(TOEIC)</p>
        </div>
        <div className="flex-1 min-h-36 rounded-r-lg shadow-sm shadow-gray-light relative">
          <div className="flex flex-col gap-4 p-9">
            {/* 내 점수 */}
            <div className="flex items-center">
              <div className="bg-careerForMe-main w-1/4 h-9 rounded-lg mr-5">
                <p className="text-white font-bold my-2 mx-4">내 점수</p>
              </div>
              <span className="text-careerForMe-main font-bold ">820점</span>
            </div>

            {/* 합격자 평균 */}
            <div className="flex items-center">
              <div className="bg-[#E3E3E3] w-2/4 h-9 rounded-lg mr-5">
                <p className="text-gray-dark font-bold my-2 mx-4">
                  합격자 평균
                </p>
              </div>
              <span className="text-gray-light font-bold ">922점</span>
            </div>

            {/* 점수 */}
            <div>
              <div className="">
                <p className="absolute right-5 top-3 px-6 py-4 text-careerForMe-main text-2xl font-bold border shadow-gray-light shadow-sm inline-block rounded-2xl">
                  -102점
                </p>
              </div>
              <p className="absolute right-5 top-[4.3rem] px-6 py-4 text-gray-light">
                990점 만점
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LangScoreComparison;
