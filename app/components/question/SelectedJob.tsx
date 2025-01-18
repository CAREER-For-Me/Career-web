"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import axios from "axios"; // axios import

const SelectedJob = ({
  categoryData,
}: {
  categoryData: { category?: string; jobs: string[] };
}) => {
  const [selectedAbility, setSelectedAbility] = useState<string | null>(null);

  const handleSelect = async (job: string) => {
    setSelectedAbility((prev) => (prev === job ? null : job));

    try {
      const updatedField = {
        fieldName: job,
      };

      await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/field/6c89`,
        updatedField
      );
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <article>
      <h2 className="text-[1.2rem] font-bold text-careerForMe-main">
        세부 분야를 선택해주세요.
      </h2>
      <h3 className="text-careerForMe-main mb-32">
        * 희망 분야는 언제든지 변경할 수 있어요 :)
      </h3>
      <div className="selected-job-container flex justify-center items-center">
        <ul className="w-8/12 flex flex-wrap gap-4">
          {categoryData.jobs.map((job, index) => (
            <li
              key={index}
              onClick={() => handleSelect(job)}
              className={clsx(
                "hover:bg-careerForMe-main hover:text-white transition duration-300 text-lg shadow-careerForMe-main inline-block border px-5 py-3 rounded-full shadow-sm cursor-pointer text-careerForMe-main",
                selectedAbility === job ? " bg-careerForMe-main text-white" : ""
              )}
            >
              <p className="text-center">{job}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/questions/4"
        className={clsx(
          "flex justify-end mt-36 items-center text-careerForMe-main hover:font-bold",
          !selectedAbility ? "pointer-events-none opacity-50" : ""
        )}
      >
        다음으로
        <GoChevronRight />
      </Link>
    </article>
  );
};

export default SelectedJob;
