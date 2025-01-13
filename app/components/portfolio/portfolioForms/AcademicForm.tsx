import { useState } from "react";
import PortfolioButton from "../portfolioButton";

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

  return (
    <section>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">학력</h1>
        </div>
        {forms.map((form, index) => (
          <div
            key={index}
            className="space-y-4 border-b pb-4 last:border-none last:pb-0"
          >
            {/* 학력 구분 */}
            <div className="flex items-center gap-8">
              <h2 className="font-bold w-24">학력 구분</h2>
              <select
                value={form.grade}
                onChange={(e) =>
                  handleInputChange(index, "grade", e.target.value)
                }
                className="select select-bordered flex-grow"
              >
                <option value="" disabled>
                  학력 구분
                </option>
                <option value="고등학교 졸업">고등학교 졸업</option>
                <option value="대학교(2,3년)">대학교(2,3년)</option>
                <option value="대학교(4년)">대학교(4년)</option>
                <option value="대학원(석사)">대학원(석사)</option>
                <option value="대학원(박사)">대학원(박사)</option>
              </select>
            </div>

            {/* 학교와 상태 */}
            <div className="flex items-center gap-8">
              <h2 className="font-bold w-24">학교</h2>
              <input
                type="text"
                placeholder="학교명"
                value={form.university}
                onChange={(e) =>
                  handleInputChange(index, "university", e.target.value)
                }
                className="input input-bordered flex-grow"
              />
              <h2 className="font-bold">상태</h2>
              <select
                value={form.academicState}
                onChange={(e) =>
                  handleInputChange(index, "academicState", e.target.value)
                }
                className="select select-bordered flex-grow"
              >
                <option value="" disabled>
                  상태 선택
                </option>
                <option value="졸업">졸업</option>
                <option value="재학">재학</option>
                <option value="휴학">휴학</option>
              </select>
            </div>

            {/* 전공 구분 */}
            <div className="flex items-center gap-8">
              <h2 className="font-bold w-24">전공 구분</h2>
              <select
                value={form.academicState}
                onChange={(e) =>
                  handleInputChange(index, "academicState", e.target.value)
                }
                className="select select-bordered flex-grow"
              >
                <option value="" disabled>
                  전공 구분
                </option>
                <option value="주전공">주전공</option>
                <option value="복수전공">복수전공</option>
                <option value="부전공">부전공</option>
              </select>
            </div>

            {/* 전공 */}
            <div className="flex items-center gap-8">
              <h2 className="font-bold w-24">전공</h2>
              <input
                type="text"
                placeholder="전공"
                value={form.major}
                onChange={(e) =>
                  handleInputChange(index, "major", e.target.value)
                }
                className="input input-bordered flex-grow"
              />
            </div>

            {/* 총 학점과 전공 학점 */}
            <div className="flex items-center gap-8">
              <h2 className="font-bold w-24">총 학점</h2>
              <input
                type="text"
                placeholder="총 학점"
                value={form.totalGPA}
                onChange={(e) =>
                  handleInputChange(index, "totalGPA", e.target.value)
                }
                className="input input-bordered flex-grow"
              />
              <h2 className="font-bold">전공 학점</h2>
              <input
                type="text"
                placeholder="전공 학점"
                value={form.majorGPA}
                onChange={(e) =>
                  handleInputChange(index, "majorGPA", e.target.value)
                }
                className="input input-bordered flex-grow"
              />
            </div>
          </div>
        ))}
        <PortfolioButton label="추가하기" onClick={handleAddForm} />
      </div>
    </section>
  );
};

export default AcademicForm;
