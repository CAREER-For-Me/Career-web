import Link from "next/link";

const MyCompetence = () => {
  return (
    <section className="w-2/5 flex flex-col gap-2">
      {/* top */}
      <article className=" rounded-md bg-careerForMe-gray01 flex-1">
        <div className="m-4">
          <div className="flex gap-3 text-white">
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              IT 서비스 기획자
            </div>
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              PM
            </div>
          </div>
          <div className="relative">
            <p className="text-gray-dark mt-12">평균역량 대비</p>
            <div className="flex font-bold text-xl gap-3">
              <p className="text-careerForMe-main">32%</p>
              <p>충족했어요.</p>
            </div>
            <div className="absolute right-0 bottom-0">그래프 영역</div>
          </div>
        </div>
      </article>

      {/* bottom */}
      <article>
        <Link
          href="/mypage"
          className="flex rounded-md bg-careerForMe-gray01 text-gray-dark"
        >
          <article className="flex justify-between w-full items-center m-4 ">
            <p>내 역량 수정하기</p>
            <p>{">"}</p>
          </article>
        </Link>
      </article>
    </section>
  );
};

export default MyCompetence;
