"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../components/portfolioAnalysis/sidebar";
import AcademicForm from "../../components/portfolioAnalysis/academicForm";

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
      default:
        return <p>준비 중</p>;
    }
  };

  return (
    <div>
      {/* 헤더 */}
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold flex items-center text-gray-900">
          내 포트폴리오 정보
          <span className="ml-2 text-green-500 text-lg">✔️</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          포트폴리오 분석 서비스는 합격자 대비 부족한 역량을 분석해주는
          서비스입니다.
          <br />
          상세한 정보를 입력해주시면 보다 정확한 분석이 가능해요. :)
        </p>
      </header>

      {/* 메인 */}
      <div className="flex bg-gray-50 min-h-screen">
        {/* 왼쪽 네비게이션 */}
        <Sidebar selected={selectedSection} onSelect={handleSectionChange} />

        {/* 선택된 폼 */}
        <div className="flex-grow p-6">{renderForm()}</div>
      </div>
    </div>
  );
};

export default PortfolioAnalysisPage;
