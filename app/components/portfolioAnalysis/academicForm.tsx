import React, { useState } from "react";
import PortfolioButton from "./portfolioButton";

interface AcademicData {
  grade: string;
  university: string;
  academicState: string;
  major: string;
  totalGPA: string;
  majorGPA: string;
}

const AcademicForm: React.FC = () => {
  const [forms, setForms] = useState<AcademicData[]>([
    {
      grade: "",
      university: "",
      academicState: "",
      major: "",
      totalGPA: "",
      majorGPA: "",
    },
  ]);

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        grade: "",
        university: "",
        academicState: "",
        major: "",
        totalGPA: "",
        majorGPA: "",
      },
    ]);
  };

  const handleInputChange = (
    index: number,
    field: keyof AcademicData,
    value: string
  ) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  const handleReset = () => {
    setForms([
      {
        grade: "",
        university: "",
        academicState: "",
        major: "",
        totalGPA: "",
        majorGPA: "",
      },
    ]);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">학력</h1>
        <button
          className="text-sm text-blue-500 hover:underline"
          onClick={handleReset}
        >
          희망 직무 다시 선택하기
        </button>
      </div>
      {forms.map((form, index) => (
        <div
          key={index}
          className="space-y-4 border-b pb-4 last:border-none last:pb-0"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="학교명"
              value={form.university}
              onChange={(e) =>
                handleInputChange(index, "university", e.target.value)
              }
              className="input input-bordered w-full"
            />
            <select
              value={form.academicState}
              onChange={(e) =>
                handleInputChange(index, "academicState", e.target.value)
              }
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                상태 선택
              </option>
              <option value="졸업">졸업</option>
              <option value="재학">재학</option>
              <option value="휴학">휴학</option>
            </select>
            <input
              type="text"
              placeholder="전공"
              value={form.major}
              onChange={(e) =>
                handleInputChange(index, "major", e.target.value)
              }
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="총 학점"
              value={form.totalGPA}
              onChange={(e) =>
                handleInputChange(index, "totalGPA", e.target.value)
              }
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="전공 학점"
              value={form.majorGPA}
              onChange={(e) =>
                handleInputChange(index, "majorGPA", e.target.value)
              }
              className="input input-bordered w-full"
            />
          </div>
        </div>
      ))}
      <PortfolioButton label="추가하기" onClick={handleAddForm} />
    </div>
  );
};

export default AcademicForm;
