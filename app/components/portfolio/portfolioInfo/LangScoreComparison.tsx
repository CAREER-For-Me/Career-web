import { useAvgSpec } from "@/app/context/AvgspecContext";
import { useUserSpec } from "@/app/context/UserSpecContext";
import BarChart from "../../chart/BarChart";

const LangScoreComparison = () => {
  const { avgspec, setAvgspec } = useAvgSpec();
  const { myspec, setMyspec } = useUserSpec();

  const mySpecToEicScore = myspec?.toeicScore || 0;
  const avgToEicScore = avgspec?.langScore || 0;

  let toeicScoreDifference = 0;

  if (mySpecToEicScore > avgToEicScore) {
    toeicScoreDifference = mySpecToEicScore - avgToEicScore;
  } else {
    toeicScoreDifference = avgToEicScore - mySpecToEicScore;
  }

  toeicScoreDifference = Math.round(toeicScoreDifference);

  return (
    <article className="mt-24">
      <h1 className="font-bold text-xl mb-5">어학점수 비교하기📈</h1>

      <div className="flex">
        <div className="min-h-36 flex items-center justify-center w-52 text-white bg-careerForMe-main rounded-l-lg shadow-sm shadow-gray-light">
          <p className="">토익(TOEIC)</p>
        </div>
        <div className="flex-1 min-h-36 rounded-r-lg shadow-sm shadow-gray-light relative">
          <div className="flex flex-col gap-4 p-9">
            {/* 내 점수 */}
            <div className="flex items-center -mt-14 w-9/12">
              <div className="relative w-full">
                <BarChart
                  value={myspec?.toeicScore || 0}
                  max={990}
                  maxBarThickness={40}
                  background="#6D72FF"
                />
              </div>
              <p className="text-white font-bold my-2 mx-4 absolute">
                내 점수 ({myspec?.toeicScore}점)
              </p>
              {/* <span
                className="text-careerForMe-main font-bold text-nowrap absolute"
                style={{
                  left: `calc(${myspec?.toeicScore}px)`,
                }}
              >
                {myspec?.toeicScore}점
              </span> */}
            </div>

            {/* 합격자 평균 */}
            <div className="flex items-center -mt-24 w-9/12">
              <div className="relative w-full ">
                <BarChart
                  value={avgspec?.langScore || 0}
                  max={990}
                  maxBarThickness={40}
                  background="#E3E3E3"
                />
              </div>
              <p className="text-gray-dark font-bold my-2 mx-4 absolute">
                합격자 평균 ({avgspec?.langScore}점)
              </p>
              {/* <span
                className="text-gray-light font-bold text-nowrap absolute"
                style={{
                  left: `calc(${avgspec?.langScore}px)`,
                }}
              >
                {avgspec?.langScore}점
              </span> */}
            </div>
            {/* 점수 */}
            <div className="-mt-20">
              <div>
                <p className="absolute right-5 top-3 px-6 py-4 text-careerForMe-main text-2xl font-bold border shadow-gray-light shadow-sm inline-block rounded-2xl">
                  {mySpecToEicScore > avgToEicScore
                    ? `+${toeicScoreDifference}점`
                    : `-${toeicScoreDifference}점`}
                </p>
              </div>
              <p className="absolute right-5 top-[4.3rem] px-6 py-4 text-gray-light">
                990점 만점
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LangScoreComparison;
