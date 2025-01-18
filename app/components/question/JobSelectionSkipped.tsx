import Link from "next/link";

const JobSelectionSkipped = () => {
  return (
    <main className="mb-32">
      <div className="text-center leading-[2.2] mt-[12rem] mb-[3rem]">
        희망 직무를 선택하지 않으면 <br />
        <span className="text-careerForMe-main font-bold">
          맞춤형 포트폴리오 분석 서비스
        </span>
        를 제공해드릴 수 없어요. <br />
        분야만이라도 선택할까요?
      </div>

      <div className="flex flex-row items-center justify-center gap-5 text-[0.95rem]">
        <div className="flex justify-center items-center h-[3.3rem] w-[13rem] bg-[rgb(109,114,255)] text-white rounded-full border border-[rgb(109,114,255)] shadow-[0px_0px_5px_rgba(109,114,255,0.5)]">
          <Link href="/questions/1">다시 선택하기</Link>
        </div>

        <div className="flex justify-center items-center h-[3.3rem] w-[13rem] text-center bg-white text-[rgb(109,114,255)] rounded-full shadow-[0px_0px_5px_rgba(109,114,255,0.5)]">
          <Link href="/home">메인페이지로 이동하기</Link>
        </div>
      </div>
    </main>
  );
};

export default JobSelectionSkipped;
