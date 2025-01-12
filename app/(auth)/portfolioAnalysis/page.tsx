"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import InternshipAndActivitiesForm from "@/app/components/portfolioAnalysis/portfolioForms/InternshipAndActivitiesForm";
import CertificatesForm from "@/app/components/portfolioAnalysis/portfolioForms/CertificatesForm";
import AwardsForm from "@/app/components/portfolioAnalysis/portfolioForms/AwardsForm";
import LanguageForm from "@/app/components/portfolioAnalysis/portfolioForms/LanguageForm";
import TechnicalSkillsForm from "@/app/components/portfolioAnalysis/portfolioForms/TechnicalSkillsForm";
import SoftSkillsForm from "@/app/components/portfolioAnalysis/portfolioForms/SoftSkillsForm";
import AcademicForm from "@/app/components/portfolioAnalysis/portfolioForms/AcademicForm";
import Sidebar from "@/app/components/portfolioAnalysis/Sidebar";
import { GoChevronRight } from "react-icons/go";

const PortfolioAnalysisPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("학력");

  // 초기 로드 시 localStorage에서 저장된 섹션을 가져오기
  useEffect(() => {
    const savedSection = localStorage.getItem("selectedSection");
    if (savedSection) {
      setSelectedSection(savedSection);
    }
  }, []);

  // 선택된 섹션 변경 시 localStorage에 저장
  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    localStorage.setItem("selectedSection", section);
  };

  const renderForm = () => {
    switch (selectedSection) {
      case "학력":
        return <AcademicForm />;
      case "인턴/대외활동":
        return <InternshipAndActivitiesForm />;
      case "수상":
        return <AwardsForm />;
      case "자격증":
        return <CertificatesForm />;
      case "어학":
        return <LanguageForm />;
      case "보유기술":
        return <TechnicalSkillsForm />;
      case "보유스킬":
        return <SoftSkillsForm />;
      default:
        return <p>준비 중</p>;
    }
  };

  return (
    <main>
      {/* 메인 */}
      <div className="flex gap-12">
        {/* 왼쪽 네비게이션 */}
        <Sidebar selected={selectedSection} onSelect={handleSectionChange} />

        {/* 선택된 폼 */}
        <div className="flex-grow p-6 shadow-md border-r rounded-xl">
          {renderForm()}
        </div>
      </div>
    </main>
  );
};

export default PortfolioAnalysisPage;
