import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const EditSkills = () => {
  return (
    <article>
      <Link
        href="/mypage"
        className="flex rounded-xl bg-careerForMe-gray01 text-gray-dark"
      >
        <article className="flex justify-between w-full items-center mx-6 my-4 ">
          <p>내 역량 수정하기</p>
          <div className="flex items-center">
            더보기 <GoChevronRight />
          </div>
        </article>
      </Link>
    </article>
  );
};

export default EditSkills;
