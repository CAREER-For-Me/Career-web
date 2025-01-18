"use client";
import clsx from "clsx";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useAvgSpec } from "@/app/context/AvgspecContext";
import { useUserSpec } from "@/app/context/UserSpecContext";
import { useSession } from "next-auth/react";

interface CompetencyDetailProps {
  isMain: boolean;
}

const CompetencyDetail = ({ isMain }: CompetencyDetailProps) => {
  const { avgspec } = useAvgSpec();
  const { myspec } = useUserSpec();

  const { status } = useSession();
  const isLogin = status === "authenticated";

  if (!avgspec || !myspec) {
    return <p>데이터를 불러오는 중...</p>;
  }

  // 백분율 차이 계산 함수
  const calculateDifference = (userValue: number, avgValue: number) => {
    if (avgValue === 0) return 0; // 평균 값이 0일 때는 0으로 처리
    return (((userValue - avgValue) / avgValue) * 100).toFixed(1);
  };

  const competencyData = [
    {
      name: "학점",
      difference: calculateDifference(myspec.majorScore, +avgspec.score),
      status: myspec.majorScore >= +avgspec.score ? "상위" : "하위",
    },
    {
      name: "인턴",
      difference: calculateDifference(myspec.internCount, +avgspec.internNum),
      status: myspec.internCount >= +avgspec.internNum ? "상위" : "하위",
    },
    {
      name: "수상",
      difference: calculateDifference(myspec.awardCount, +avgspec.awardNum),
      status: myspec.awardCount >= +avgspec.awardNum ? "상위" : "하위",
    },
    {
      name: "자격증",
      difference: calculateDifference(myspec.qualCount, +avgspec.qualNum),
      status: myspec.qualCount >= +avgspec.qualNum ? "상위" : "하위",
    },
    {
      name: "어학점수",
      difference: calculateDifference(myspec.toeicScore, +avgspec.langScore),
      status: myspec.toeicScore >= +avgspec.langScore ? "상위" : "하위",
    },
  ];

  // 상위/하위 항목 필터링
  const lowerStatus = competencyData.filter((item) => item.status === "하위");
  const higherStatus = competencyData.filter((item) => item.status === "상위");

  return (
    <div
      className={clsx(
        "justify-between gap-5",
        isMain ? "flex-1 flex-col" : "flex"
      )}
    >
      {/* 하위 항목 */}
      <article className={clsx("", isMain ? "" : "w-2/4")}>
        {isMain ? null : (
          <h1 className="font-bold text-2xl mb-4">
            이런 점은 <span className="text-careerForMe-main">부족</span>해요 📉
          </h1>
        )}

        <div className="border border-l-gray-light rounded-md p-4 shadow-sm shadow-gray-light">
          {lowerStatus.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mt-3">
                <p className="font-bold">{item.name}</p>
                <p className="flex items-center gap-2 text-careerForMe-main">
                  <BiSolidDownArrow />
                  {isLogin ? (
                    <>
                      {item.status} ({item.difference}%)
                    </>
                  ) : (
                    <>{item.status} (??%)</>
                  )}
                </p>
              </div>
              {index < lowerStatus.length - 1 && (
                <hr className="mt-3 border-t border-l-gray-medium" />
              )}
            </div>
          ))}
        </div>
      </article>

      {/* 상위 항목 */}
      <article className={clsx("", isMain ? "mt-3" : "w-2/4")}>
        {isMain ? null : (
          <h1 className="font-bold text-2xl mb-4">
            이런 점은 <span className="text-careerForMe-red">충분</span>해요 📈
          </h1>
        )}

        <div className="border border-l-gray-light rounded-md p-4 shadow-sm shadow-gray-light">
          {higherStatus.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mt-3">
                <p className="font-bold">{item.name}</p>
                <p className="flex items-center gap-2 text-careerForMe-red">
                  <BiSolidUpArrow />
                  {isLogin ? (
                    <>
                      {item.status} ({item.difference}%)
                    </>
                  ) : (
                    <>{item.status} (??%)</>
                  )}
                </p>
              </div>
              {index < higherStatus.length - 1 && (
                <hr className="mt-3 border-t border-l-gray-medium" />
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default CompetencyDetail;
