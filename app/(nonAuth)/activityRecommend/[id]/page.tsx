"use client";
import Image from "next/image";
import { use, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";

const AtivityDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [isClipped, setIsClipped] = useState(false);

  const { id: postId } = use(params);

  const handleCliping = () => {
    setIsClipped(!isClipped);
  };

  return (
    <main>
      <section className="border shadow-lg rounded-2xl">
        <div>
          <Image
            src="/images/공모전.png"
            alt="공모전 이미지"
            width={300}
            height={300}
          />
          <div className="bg-careerForMe-gray01">
            <div onClick={handleCliping}>
              {isClipped ? (
                <>
                  <BsBookmarkFill className="relative left-[16rem] top-8 text-careerForMe-red text-lg" />
                </>
              ) : (
                <>
                  <BsBookmarkFill className="relative left-[16rem] top-8 text-gray-light text-lg" />
                </>
              )}
            </div>
          </div>
          <div>지원하기</div>
        </div>
      </section>
      <p className="text-gray-dark font-bold">상세 내용</p>

      <section className="border shadow-lg rounded-2xl flex justify-center flex-col w-auto items-center">
        <Image
          src="/images/공모전디테일.png"
          alt="공모전디테일 이미지"
          width={800}
          height={800}
        />
        <article>
          <h1>📍지원자격</h1>
          <div></div>
        </article>
        <article>
          <h1>📍활동내용</h1>
          <div></div>
        </article>
        <article>
          <h1>📍활동 혜택</h1>
          <div></div>
        </article>
      </section>
    </main>
  );
};

export default AtivityDetailPage;
