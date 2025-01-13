import Image from "next/image";
import Link from "next/link";

const FirstQuestion = () => {
  return (
    <main className="mb-32">
      {/* 첫번째 선택지 */}
      <p className="text-careerForMe-main my-[3.5rem] leading-[2.5]">
        <b>커리어포미</b>에 오신 걸 환영해요 ☺️ <br />
        회원님의 진로 분야를 선택해주시면 <b>회원님께 꼭 맞는 맞춤형 활동</b>을
        추천해드릴 수 있어요. <br />
        <span className="text-[1.2rem] font-bold">분야를 선택하시겠어요?</span>
      </p>

      <div className="flex gap-6 justify-center">
        <Link
          href="/firstQuestion/1-2"
          className="flex flex-col items-center justify-center text-white bg-[rgb(109,114,255)] rounded-2xl w-[25rem] h-[21rem] shadow-[0_0_15px_rgba(109,114,255,0.7)] pt-[4rem] hover:bg-opacity-60 transition duration-300"
        >
          <p className="text-center">
            네, 선택하고 <b>맞춤 커리어</b> <br />
            추천 받고 싶어요!
          </p>
          <Image
            src="/images/questionImages/questionImage1.png"
            alt="img1"
            width={220}
            height={220}
          />
        </Link>
        <Link
          href="/home"
          className="flex flex-col items-center justify-center text-white bg-[rgb(109,114,255)] rounded-2xl w-[25rem] h-[21rem] shadow-[0_0_15px_rgba(109,114,255,0.7)] hover:bg-opacity-60 transition duration-300"
        >
          <p className="text-center">
            아니요, <b>홈페이지</b>만<br />
            둘러보고 싶어요.
          </p>
          <Image
            src="/images/questionImages/questionImage2.png"
            alt="img1"
            width={160}
            height={180}
          />
        </Link>
      </div>
    </main>
  );
};

export default FirstQuestion;
