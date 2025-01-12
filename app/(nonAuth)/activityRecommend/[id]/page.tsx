"use client";
import Image from "next/image";
import { use, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const AtivityDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [isClipped, setIsClipped] = useState(false);

  const { id: postId } = use(params);

  const handleCliping = () => {
    setIsClipped(!isClipped);
  };

  return (
    <main>
      <section className="border shadow-lg rounded-2xl flex">
        <article className="mt-12 ml-12">
          <Image
            src="/images/공모전.png"
            alt="공모전 이미지"
            width={300}
            height={300}
          />

          <div className="flex mt-4 mb-12 mx-auto w-[300px] gap-3">
            <div
              onClick={handleCliping}
              className="p-3 bg-careerForMe-gray01 rounded-lg"
            >
              {isClipped ? (
                <>
                  <BsBookmarkFill className="text-careerForMe-red text-lg" />
                </>
              ) : (
                <>
                  <BsBookmarkFill className=" text-gray-light text-lg" />
                </>
              )}
            </div>
            <div className="text-white bg-careerForMe-main flex-1  rounded-lg flex justify-center items-center">
              <IoPaperPlaneOutline className="mr-2 text-xl" />
              <p>지원하기</p>
            </div>
          </div>
        </article>

        <article className="mt-12 ml-12">
          {/* left */}
          <div className="font-bold">
            <p className="bg-careerForMe-gray01 text-careerForMe-main inline-block px-7 py-2 rounded-full mb-5 ">
              D-28
            </p>
            <div className="text-2xl">
              [MURPLE] 네이버가 투자한 머플 서포터즈 1기 모집
            </div>
          </div>

          {/* right */}
          <div className="flex gap-20">
            <div className="mt-9 flex flex-col gap-6">
              <div className="flex gap-9">
                <p className="text-gray-dark">기업형태</p>
                <p>대기업</p>
              </div>
              <div className="flex gap-9">
                <p className="text-gray-dark">접수기간</p>
                <p>24.12.20 ~ 25.01.20</p>
              </div>
              <div className="flex gap-9">
                <p className="text-gray-dark">모집인원</p>
                <p>00명</p>
              </div>
              <div className="flex gap-9">
                <p className="text-gray-dark">홈페이지</p>
                <Link
                  href="/"
                  className="flex gap-2 text-gray-medium underline decoration-solid items-center"
                >
                  <FaExternalLinkAlt />
                  홈페이지 바로가기
                </Link>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-6">
              <div className="flex gap-9">
                <p className="text-gray-dark">활동기간</p>
                <p>0~</p>
              </div>
              <div className="flex gap-9">
                <p className="text-gray-dark">활동지역</p>
                <p>지역제한 없음</p>
              </div>
              <div className="flex gap-9">
                <p className="text-gray-dark">활동혜택</p>
                <p>사은품 지급, 인턴십 기회</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <p className="text-gray-dark font-bold text-xl py-9">상세 내용</p>

      <section className="border shadow-lg rounded-2xl flex flex-col">
        <article className="ml-11">
          <div className="my-11">
            <h1 className="font-bold text-xl">📍지원자격</h1>
            <div className="ml-6">sddd</div>
          </div>
          <div className="my-11">
            <h1 className="font-bold text-xl">📍활동내용</h1>
            <div className="ml-6">sddd</div>
          </div>
          <div className="my-11">
            <h1 className="font-bold text-xl">📍활동 혜택</h1>
            <div className="ml-6">sddd</div>
          </div>
          <div className="my-11">
            <h1 className="font-bold text-xl">📍상세 정보</h1>
            <div className="ml-6">sddd</div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AtivityDetailPage;
