import clsx from "clsx";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useAvgSpec } from "@/app/context/AvgspecContext";
import { useUserSpec } from "@/app/context/UserSpecContext";

export const competencyData = [
  { name: "대외활동", status: "하위 33%" },
  { name: "인턴", status: "하위 33%" },
  { name: "자격증", status: "하위 33%" },
  { name: "수상내역", status: "상위 33%" },
  { name: "학점", status: "상위 33%" },
];

interface CompetencyDetailProps {
  isMain?: boolean;
}

const CompetencyDetail = ({ isMain }: CompetencyDetailProps) => {
  const { avgspec } = useAvgSpec();
  const { myspec } = useUserSpec();

  if (!avgspec || !myspec) {
    return <p>데이터를 불러오는 중...</p>;
  }

  const lowerStatus = competencyData.filter((item) =>
    item.status.includes("하위")
  );
  const higherStatus = competencyData.filter((item) =>
    item.status.includes("상위")
  );

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
          <h1 className="font-bold text-xl mb-4">
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
                  {item.status}
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
      <article className={clsx("", isMain ? "" : "w-2/4")}>
        {isMain ? null : (
          <h1 className="font-bold text-xl mb-4">
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
                  {item.status}
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
