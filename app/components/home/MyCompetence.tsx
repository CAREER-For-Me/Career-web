import Link from "next/link";
import DoughnutChart from "../chart/DoughnutChart";
import { GoChevronRight } from "react-icons/go";

const MyCompetence = () => {
  return (
    <section className="w-2/5 flex flex-col gap-2">
      {/* top */}
      <article className=" rounded-md bg-careerForMe-gray01 flex-1">
        <div className="mx-6 my-4">
          <div className="flex gap-3 text-white">
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              IT 서비스 기획자
            </div>
            <div className=" bg-careerForMe-main rounded-full px-3 py-1">
              PM
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-dark mt-14">평균역량 대비</p>
              <div className="flex font-bold text-xl gap-3">
                <p className="text-careerForMe-main">32%</p>
                <p>충족했어요.</p>
              </div>
            </div>
            <div className="w-40 relative">
              <DoughnutChart />
              <p className="absolute w-40 bottom-16 left-16 text-careerForMe-main font-bold text-xl">
                32%
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* bottom */}
      <article>
        <Link
          href="/mypage"
          className="flex rounded-md bg-careerForMe-gray01 text-gray-dark"
        >
          <article className="flex justify-between w-full items-center mx-6 my-4 ">
            <p>내 역량 수정하기</p>
            <div className="flex items-center">
              더보기 <GoChevronRight />
            </div>
          </article>
        </Link>
      </article>
    </section>
  );
};

export default MyCompetence;
