"use client";

import Image from "next/image";
import Link from "next/link";

const CareerRecommendation = () => {
  return (
    <main className="mb-32">
      <p className="text-careerForMe-main leading-[2.5] my-[2rem] ">
        간단한 조사를 진행할게요 ☺️ <br />
        <span className="text-[1.2rem] font-bold">
          현재 고려중인 진로가 있나요?
        </span>
      </p>

      <div className="flex flex-col items-center mt-16">
        <div className="flex gap-6">
          <div>
            <Link
              href="/questions/2"
              className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[2rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
            >
              <p className="text-center">네, 있습니다!</p>
              <Image
                src="/images/questionImages/questionImage4.png"
                alt="img1"
                width={180}
                height={220}
              />
            </Link>
          </div>

          <div>
            <Link
              href="/questions/3"
              className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] pt-[1rem] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
            >
              <p className="text-center">아직 고민 중입니다!</p>
              <Image
                src="/images/questionImages/questionImage5.png"
                alt="img1"
                width={160}
                height={180}
                className="pt-[1rem]"
              />
            </Link>
          </div>

          <div>
            <Link
              href="/questions/3"
              className="flex flex-col items-center border-[1.4px] border-[rgb(109,114,255)] justify-center text-[rgb(109,114,255)] bg-white rounded-2xl w-[18rem] h-[20rem] font-semibold shadow-[0px_0px_5px_rgba(109,114,255,0.5)] hover:bg-[rgb(109,114,255)] hover:text-white transition duration-300"
            >
              <p className="text-center">
                일단 스펙부터
                <br />
                갖추고 생각할게요.
              </p>
              <Image
                src="/images/questionImages/questionImage6.png"
                alt="img1"
                width={160}
                height={180}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareerRecommendation;
