"use client";

import { credentials } from "@/app/constants/constants";
import { useAvgSpec } from "@/app/context/AvgspecContext";

import Link from "next/link";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";

const AvgSpecs = () => {
  const [loading, setLoading] = useState(true);
  const { avgspec, setAvgspec } = useAvgSpec();

  const avgSpecsDisplay = avgspec
    ? [
        avgspec.score,
        avgspec.internNum,
        avgspec.awardNum,
        avgspec.expNum,
        avgspec.skillNum,
      ]
    : [];

  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl mb-4">합격자 평균 스펙📈</h1>
      <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-md">
        <table className="table-auto border-collapse w-full text-center">
          <thead className="bg-careerForMe-main text-white">
            <tr>
              {credentials.map((item, index) => (
                <th key={index} className="p-3 border border-gray-300">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              {avgSpecsDisplay.map((item, index) => (
                <th key={index} className="py-8 border border-gray-300">
                  {item}
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex text-gray-medium items-center justify-end mt-7">
        2022~2024 대졸신입공채 최종합격자 N명의 데이터를 기반으로 한 통계
        자료입니다.
        <div className="underline ml-2">
          <Link href="/" className="flex items-center">
            상세보기
            <GoChevronRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default AvgSpecs;
