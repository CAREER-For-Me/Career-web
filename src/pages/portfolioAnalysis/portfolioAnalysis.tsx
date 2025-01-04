import React, { useState } from "react";
import Button from "../../../components/Button";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [grade, setGrade] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");
  const [currentGPA, setCurrentGPA] = useState("");
  const [desiredGPA, setDesiredGPA] = useState("");

  const handleSubmit = () => {
    console.log("Submit the form with:");
    console.log({ grade, department, major, currentGPA, desiredGPA });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">내 포트폴리오 상태</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">학년 구분</span>
        </label>
        <select
          className="select select-bordered"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option disabled>선택하세요</option>
          <option value="4">대학교(4년)</option>
        </select>

        <label className="label">
          <span className="label-text">학교</span>
        </label>
        <input
          type="text"
          placeholder="학교명"
          className="input input-bordered"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <label className="label">
          <span className="label-text">전공 구분</span>
        </label>
        <select
          className="select select-bordered"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        >
          <option disabled>선택하세요</option>
          <option value="사이버보안">사이버보안</option>
        </select>

        <label className="label">
          <span className="label-text">현재 학점</span>
        </label>
        <input
          type="text"
          placeholder="현재 학점"
          className="input input-bordered"
          value={currentGPA}
          onChange={(e) => setCurrentGPA(e.target.value)}
        />

        <label className="label">
          <span className="label-text">희망 학점</span>
        </label>
        <input
          type="text"
          placeholder="희망 학점"
          className="input input-bordered"
          value={desiredGPA}
          onChange={(e) => setDesiredGPA(e.target.value)}
        />

        <Button label="수정하기" onClick={handleSubmit} />
      </div>
    </div>
  );
}
