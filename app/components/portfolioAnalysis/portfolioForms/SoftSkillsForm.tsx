"use client";

import clsx from "clsx";
import { useState } from "react";
import { abilities } from "@/app/constants/constants";
import { tools } from "@/app/constants/constants";
import SkillStatusIndicator from "../../SkillStatusIndicator";

const SoftSkillsForm = () => {
  const [selectedAbilities, setSelectedAbilities] = useState<string[]>([]);

  const handleSelect = (params: string) => {
    setSelectedAbilities(
      (prev) =>
        prev.includes(params)
          ? prev.filter((item) => item !== params) // 선택 해제
          : [...prev, params] // 선택 추가
    );
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">보유 스킬</h1>
        <SkillStatusIndicator />
      </div>

      {/* ABILITY */}
      <div className="mt-12 mb-6  flex items-center justify-between">
        <h2 className="font-bold">내 직무 추천 ABILITY</h2>
        <p className="text-sm">ABILITY 전체보기</p>
      </div>

      <ul className="flex gap-4 flex-wrap">
        {abilities.map((ability, index) => (
          <li
            key={index}
            onClick={() => handleSelect(ability)}
            className={clsx(
              "inline-block border px-5 py-2 rounded-full shadow-sm cursor-pointer",
              selectedAbilities.includes(ability)
                ? "text-careerForMe-main shadow-careerForMe-main"
                : "text-gray-medium shadow-gray-medium"
            )}
          >
            {ability}
          </li>
        ))}
      </ul>

      {/* TOOL */}
      <div className="mt-20 mb-6 flex items-center justify-between">
        <h2 className="font-bold">내 직무 추천 TOOL</h2>
        <p className="text-sm">TOOL 전체보기</p>
      </div>

      <ul className="flex gap-4 flex-wrap">
        {tools.map((tool, index) => (
          <li
            key={index}
            onClick={() => handleSelect(tool)}
            className={clsx(
              "inline-block border px-5 py-2 rounded-full shadow-sm cursor-pointer",
              selectedAbilities.includes(tool)
                ? "text-careerForMe-main shadow-careerForMe-main"
                : "text-gray-medium shadow-gray-medium"
            )}
          >
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SoftSkillsForm;
