import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import SkillProgressCard from "../SkillProgressCard";

const MyCompetence = () => {
  return (
    <section className="w-2/5 flex flex-col gap-2">
      {/* top */}
      <SkillProgressCard />
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
