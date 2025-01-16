import { useAvgSpec } from "@/app/context/AvgspecContext";
import BarChart from "../../chart/BarChart";
import { useUserSpec } from "@/app/context/UserSpecContext";

const SpecsComparison = () => {
  const { avgspec } = useAvgSpec();
  const { myspec } = useUserSpec();

  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl">합격자 스펙과 내 스펙 비교하기📈</h1>
      <div className="flex gap-10 justify-center">
        {/* 학점 */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mt-9 mb-4">학점</h2>
          <div className="border border-l-gray-light rounded-md p-4 shadow-sm shadow-gray-light  overflow-hidden h-72 ">
            <div className="flex h-screen w-40 mt-10">
              <div className="-ml-28 -mb-6 ">
                <BarChart
                  value={avgspec?.score || 0}
                  max={5}
                  maxBarThickness={40}
                  background="#D2D2D2"
                  indexAxis="x"
                  showLabels={true}
                  labelsColor="#D2D2D2"
                  lablesSize="18"
                  layoutPadding="20"
                />
              </div>
              <div className="-ml-56">
                <BarChart
                  value={myspec?.majorScore || 0}
                  max={5}
                  maxBarThickness={50}
                  background="#6D72FF"
                  indexAxis="x"
                  showLabels={true}
                  labelsColor="#6D72FF"
                  lablesSize="18"
                  layoutPadding="20"
                />
              </div>
            </div>
          </div>
          <div className="relative text-nowrap mt-2">
            <span className="absolute top-0 right-7 text-gray-medium">
              평균
            </span>
            <span className="absolute top-0 left-7 text-careerForMe-main">
              나
            </span>
          </div>
        </div>
        {/*  */}
      </div>
    </article>
  );
};

export default SpecsComparison;
