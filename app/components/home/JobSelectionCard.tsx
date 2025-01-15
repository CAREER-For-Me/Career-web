import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const JobSelectionCard = () => {
  return (
    <article className="flex flex-1 gap-5 font-bold text-lg">
      {/* 희망 직무 선택 */}
      <div className="bg-careerForMe-gray01 rounded-xl flex-1 ">
        <div className="ml-6 mt-6">
          <span className="text-careerForMe-main mr-1">내 희망직무</span>
          선택하고 <br />
          직무 추천 받기🔍
        </div>
        <Image
          src="/images/pin.png"
          alt="pin"
          width={150}
          height={150}
          className="mx-auto"
        />
        <Link
          href="/"
          className="flex items-center justify-end underline text-[#696969] text-sm mr-6 mt-5"
        >
          희망 직무 선택하기 <GoChevronRight />
        </Link>
      </div>

      {/* 포트폴리오 분석 */}
      <div className="bg-careerForMe-gray01 rounded-xl flex-1 ">
        <div className="ml-6 mt-6">
          <span className="text-careerForMe-main mr-1">맞춤형 포트폴리오</span>
          <br />
          분석을 원하시나요?
        </div>
        <Image
          src="/images/docs.png"
          alt="pin"
          width={150}
          height={150}
          className="mx-auto mt-2"
        />

        <Link
          href="/"
          className="flex items-center justify-end underline text-[#696969] text-sm mr-6 mt-5"
        >
          내 역량 입력하기 <GoChevronRight />
        </Link>
      </div>
    </article>
  );
};

export default JobSelectionCard;
