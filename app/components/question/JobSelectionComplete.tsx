"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const JobSelectionComplete = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 500);
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="text-center mt-28 flex flex-col items-center">
        <div className="relative h-36 w-36 flex items-center justify-center mb-14">
          <div
            className="absolute inset-0 opacity-1 bg-cover bg-center animate-revealBackground transition-all duration-500"
            style={{ backgroundImage: "url('/images/questionImages/checkmark-bg.png')" }}
          ></div>


          <img
            src="/images/questionImages/checkmark.png"
            className="absolute z-10 animate-growAndRotate filter brightness-0 invert"
            height={80}
            width={80}
            alt="checkmark"
          />
          
        </div>
        <h1 className="text-2xl font-bold text-careerForMe-main">
          직무 선택이 완료되었어요 :)
        </h1>
        <div className="flex gap-4 justify-center mt-6">
          <Link
            href="/questions/2"
            className="bg-white hover:bg-gray-100 transition-all duration-300 text-lg shadow-careerForMe-main inline-block border px-5 py-3 rounded-full shadow-sm cursor-pointer text-careerForMe-main"
          >
            다시 선택하기
          </Link>
          <Link
            href="/home"
            className="transition-all duration-300 bg-careerForMe-main text-white text-lg shadow-careerForMe-main inline-block border px-5 py-3 rounded-full shadow-sm cursor-pointer hover:text-white hover:font-bold"
          >
            메인 페이지로 이동하기
          </Link>
        </div>
      </div>
    </main>
  );
};

export default JobSelectionComplete;
