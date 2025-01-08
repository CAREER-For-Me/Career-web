import Link from "next/link";

const MyCompetence = () => {
  return (
    <div className="w-2/5 flex flex-col gap-2">
      <div className="h-52 rounded-md bg-careerForMe-gray01">
        <div className="m-4">
          <div className="flex gap-3 text-white">
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              IT 서비스 기획자
            </div>
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              PM
            </div>
          </div>
          <p className="text-gray-dark mt-10">평균역량 대비</p>
          <div className="flex font-bold text-xl gap-3">
            <p className="text-careerForMe-main">32%</p>
            <p>충족했어요.</p>
          </div>
        </div>
      </div>
      <Link
        href="/mypage"
        className="flex rounded-md bg-careerForMe-gray01 text-gray-dark"
      >
        <div className="flex justify-between w-full items-center m-4 ">
          <p>내 역량 수정하기</p>
          <p>{">"}</p>
        </div>
      </Link>
    </div>
  );
};

export default MyCompetence;
