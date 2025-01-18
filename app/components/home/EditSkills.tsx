import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

interface editSkillsProps {
  exp: null;
}

const EditSkills = ({ exp }: editSkillsProps) => {
  return (
    <article>
      <Link
        href="/portfolio/info"
        className="flex rounded-xl bg-careerForMe-gray01 text-gray-dark"
      >
        <article className="flex justify-between items-center mx-6 my-4 ">
          {exp ? (
            <div className="flex items-center">
              <p>내 역량 수정하기</p>

              <GoChevronRight />
            </div>
          ) : (
            <div className="flex gap-3">
              <Image src="/images/docs.png" alt="docs" height={55} width={55} />
              <div>
                <p>내 역량 입력하고</p>
                <p className="text-careerForMe-main font-bold">
                  맞춤형 포트폴리오 분석 받기!
                </p>
              </div>
            </div>
          )}
        </article>
      </Link>
    </article>
  );
};

export default EditSkills;
