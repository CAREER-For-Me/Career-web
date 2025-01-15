import { useAvgSpec } from "../context/AvgspecContext";
import { useUserSpec } from "../context/UserSpecContext";
import DoughnutChart from "./chart/DoughnutChart";

const SkillProgressCard = () => {
  const { avgspec } = useAvgSpec();
  const { myspec } = useUserSpec();
  if (!avgspec || !myspec) {
    return <p>데이터를 불러오는 중...</p>;
  }

  // 항목별 충족률 계산
  const majorScorePercent =
    +myspec.majorScore >= +avgspec.score
      ? ((myspec.majorScore = +avgspec.score),
        (myspec.majorScore / +avgspec.score) * 100)
      : (+avgspec.score / +myspec.majorScore) * 100;

  const internPercent =
    +myspec.internCount >= +avgspec.internNum
      ? ((myspec.internCount = +avgspec.internNum),
        (myspec.internCount / +avgspec.internNum) * 100)
      : (+avgspec.internNum / +myspec.internCount) * 100;

  const awardPercent =
    +myspec.awardCount >= +avgspec.awardNum
      ? ((myspec.awardCount = +avgspec.awardNum),
        (+myspec.awardCount / +avgspec.awardNum) * 100)
      : (+avgspec.awardNum / +myspec.awardCount) * 100;

  const qualPercent =
    +myspec.qualCount >= +avgspec.qualNum
      ? (+myspec.qualCount / +avgspec.qualNum) * 100
      : (+avgspec.qualNum / +myspec.qualCount) * 100;

  // 결과 객체로 저장
  const percentages = {
    majorScore: majorScorePercent.toFixed(2),
    intern: internPercent.toFixed(2),
    award: awardPercent.toFixed(2),
    qualification: qualPercent.toFixed(2),
  };

  // 전체 평균 충족률 계산
  let overallAverage =
    (majorScorePercent + internPercent + awardPercent + qualPercent) / 4;

  // 전체 평균 충족률이 100을 초과하지 않도록
  if (overallAverage > 100) {
    overallAverage = 100;
  }

  // console.log("항목별 충족률:", percentages);
  // console.log("전체 평균 충족률 (%):", overallAverage);

  return (
    <article className=" rounded-xl bg-careerForMe-gray01 ">
      <div className="mx-6 my-4">
        <div className="flex gap-3 text-white">
          <div className=" bg-careerForMe-main rounded-full px-3 py-1">
            IT 서비스 기획자
          </div>
          <div className=" bg-careerForMe-main rounded-full px-3 py-1">PM</div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-dark mt-14">평균역량 대비</p>
            <div className="flex font-bold text-xl gap-3">
              <p className="text-careerForMe-main">{overallAverage}%</p>
              <p>충족했어요.</p>
            </div>
          </div>
          <div className="w-40 relative">
            <DoughnutChart
              dataValues={[overallAverage / 100, 1 - overallAverage / 100]}
            />
            <p className="absolute w-40 bottom-16 left-[3.8rem] text-careerForMe-main font-bold text-xl">
              {overallAverage}%
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillProgressCard;
