"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const JobSelectionComplete = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 500);
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="text-center mt-28">
        <div className="flex justify-center mb-14">
          <div
            className={`bg-gradient-to-r from-[#6d72ff] to-[#89a4ff] h-36 w-36 rounded-full flex items-center justify-center transition-all duration-500`}
          >
            <FaCheck className="text-white text-4xl" />
          </div>
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
            href="/"
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
