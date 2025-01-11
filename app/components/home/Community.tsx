import Link from "next/link";
import Hr from "../common/Hr";
import { GoChevronRight } from "react-icons/go";

const Community = () => {
  return (
    <section className="flex justify-between">
      {/* 실시간 BEST 인기글🔥 */}
      <article className="bg-careerForMe-gray01 rounded-md w-[49%]">
        <div className="m-7">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">실시간 BEST 인기글🔥</h1>

            <Link href="/community" className="flex items-center">
              더보기 <GoChevronRight />
            </Link>
          </div>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">1</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">2</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">3</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">4</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">5</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
        </div>
      </article>

      {/* 즐겨찾는 게시판📍 */}
      <article className="bg-careerForMe-gray01 rounded-md w-[49%]">
        <div className="m-7">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">즐겨찾는 게시판📍</h1>
            <Link href="/community" className="flex items-center">
              더보기 <GoChevronRight />
            </Link>
          </div>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">1</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">2</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">3</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">4</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
          <>
            <div className="flex justify-between mt-4">
              <div className="flex w-10/12">
                <p className="text-careerForMe-main font-bold mr-6">5</p>
                <p className="truncate">
                  실시간 인기글 실시간 인기글 실시간 인기글 인기 인기글 인기
                  인기글 인기글
                </p>
              </div>
              <p className="text-gray-dark text-nowrap">작성자</p>
            </div>
            <Hr mt={3} my={3} />
          </>
        </div>
      </article>
    </section>
  );
};

export default Community;
