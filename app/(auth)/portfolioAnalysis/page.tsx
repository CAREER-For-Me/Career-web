"use client";
import Button from "../../components/portfolioAnalysis/portfolioButton";
import "tailwindcss/tailwind.css"; //전역 스타일시트 import
import React, { useState } from "react";
const PortfolioAnalysisPage = () => {
  const [grade, setGrade] = useState("");
  const [university, setUniversity] = useState("");
  const [academicState, setAcademicState] = useState("");
  const [majorType, setMajorType] = useState("주전공");
  const [major, setMajor] = useState("");
  const [totalGPA, setTotalGPA] = useState("");
  const [majorGPA, setMajorGPA] = useState("");
  const handleSubmit = () => {};
  return (
    <>
      <main>
        <h1 className="text-xl font-bold">내 포트폴리오 정보</h1>
      </main>
      <Button label="수정하기" onClick={handleSubmit}></Button>
    </>
  );
};

export default PortfolioAnalysisPage;
