import { useEffect, useState } from "react";
import DoughnutChart from "./chart/DoughnutChart";
//import axios from "axios";
import { Avgspec } from "../types/avgspec-types";

const SkillProgressCard = () => {
  const [avgspec] = useState<Avgspec | null>(null);
  const [myspec] = useState<Myspec | null>(null);
  const [detailedJob] = useState<string | null>(null);

  const [loading] = useState(true);
  //const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchAvgspec = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/avgspec`
  //       );

  //       if (response.data && response.data[0]) {
  //         setAvgspec(response.data[0]);
  //       } else {
  //         setError("데이터 형식이 예상과 다릅니다.");
  //       }
  //     } catch (err) {
  //       setError("API 호출 실패");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAvgspec();
  // }, []);

  // useEffect(() => {
  //   const fetchMyspec = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/myspec`
  //       );

  //       if (response.data && response.data[0]?.result) {
  //         setMyspec(response.data[0].result);
  //       } else {
  //         setError("데이터 형식이 예상과 다릅니다.");
  //       }
  //     } catch (err) {
  //       setError("API 호출 실패");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchMyspec();
  // }, []);

  // useEffect(() => {
  //   const fetchAvgspec = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/field`
  //       );
  //       setDetailedJob(response.data[0].fieldName);
  //     } catch (err) {
  //       setError("API 호출 실패");
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAvgspec();
  // }, []);

  if (loading) {
    return (
      <span className="loading loading-spinner text-careerForMe-main"></span>
    );
  }

  // 평균 대비 내 항목별 충족률 계산
  const qualPercent =
    avgspec && myspec
      ? Math.min((+myspec.qualCount / +avgspec.qualNum) * 100, 100)
      : 0;

  const majorScorePercent =
    avgspec && myspec
      ? Math.min((+myspec.majorScore / +avgspec.score) * 100, 100)
      : 0;

  const internPercent =
    avgspec && myspec
      ? Math.min((+myspec.internCount / +avgspec.internNum) * 100, 100)
      : 0;

  const awardPercent =
    avgspec && myspec
      ? Math.min((+myspec.awardCount / +avgspec.awardNum) * 100, 100)
      : 0;

  let overallAverage = (
    (majorScorePercent + internPercent + awardPercent + qualPercent) /
    4
  ).toFixed(0);

  if (parseInt(overallAverage) > 100) {
    overallAverage = "100";
  }

  // 결과 객체로 저장
  const percentages = {
    majorScore: majorScorePercent.toFixed(2),
    intern: internPercent.toFixed(2),
    award: awardPercent.toFixed(2),
    qualification: qualPercent.toFixed(2),
  };

  // console.log("항목별 충족률:", percentages);
  // console.log("전체 평균 충족률 (%):", overallAverage);

  return (
    <article className=" rounded-xl bg-careerForMe-gray01 ">
      <div className="mx-6 my-4">
        <div className="flex gap-3 text-white">
          <div className=" bg-careerForMe-main rounded-full px-3 py-1">
            {detailedJob}
          </div>
          {/* <div className=" bg-careerForMe-main rounded-full px-3 py-1">PM</div> */}
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
              dataValues={[
                parseFloat(overallAverage) / 100,
                1 - parseFloat(overallAverage) / 100,
              ]}
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
