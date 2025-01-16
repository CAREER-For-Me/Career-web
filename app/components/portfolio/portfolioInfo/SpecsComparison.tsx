import { useAvgSpec } from "@/app/context/AvgspecContext";
import BarChart from "../../chart/BarChart";
import { useUserSpec } from "@/app/context/UserSpecContext";

const SpecsComparison = () => {
  const { avgspec } = useAvgSpec();
  const { myspec } = useUserSpec();
  console.log(avgspec);
  console.log(myspec);

  const specData = [
    {
      title: "학점",
      avgValue: avgspec?.score || 0,
      myValue: myspec?.majorScore || 0,
      maxValue: 10,
    },
    {
      title: "인턴",
      avgValue: avgspec?.internNum || 0,
      myValue: myspec?.internCount || 0,
      maxValue: 10,
    },
    {
      title: "수상내역",
      avgValue: avgspec?.awardNum || 0,
      myValue: myspec?.awardCount || 0,
      maxValue: 10,
    },
    {
      title: "토익",
      avgValue: avgspec?.langScore || 0,
      myValue: myspec?.toeicScore || 0,
      maxValue: 1300,
    },
    {
      title: "자격증",
      avgValue: avgspec?.skillNum || 0,
      myValue: myspec?.qualCount || 0,
      maxValue: 10,
    },
  ];

  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl">합격자 스펙과 내 스펙 비교하기📈</h1>
      <div className="flex gap-10 justify-center">
        {/* 학점 */}
        {specData.map((spec, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-lg font-bold mt-9 mb-4">{spec.title}</h2>
            <div className="border border-l-gray-light rounded-md p-4 shadow-sm shadow-gray-light h-72 overflow-hidden">
              <div className="flex  w-40 h-96 -mt-[6.7rem]">
                <div className="-ml-28">
                  <BarChart
                    value={spec.avgValue}
                    max={spec.maxValue}
                    maxBarThickness={40}
                    background="#D2D2D2"
                    indexAxis="x"
                    showLabels={true}
                    labelsColor="#D2D2D2"
                    lablesSize="18"
                    layoutPadding="30"
                  />
                </div>

                <div className="-ml-56">
                  <BarChart
                    value={spec.myValue}
                    max={spec.maxValue}
                    maxBarThickness={50}
                    background="#6D72FF"
                    indexAxis="x"
                    showLabels={true}
                    labelsColor="#6D72FF"
                    lablesSize="18"
                    layoutPadding="30"
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
        ))}

        {/*  */}
      </div>
    </article>
  );
};

export default SpecsComparison;
