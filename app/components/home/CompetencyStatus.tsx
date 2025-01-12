import CompetencyChartSection from "../CompetencyChartSection";
import CompetencyDetail from "./CompetencyDetail";

const CompetencyStatus = () => {
  return (
    <div className="h-52">
      <h1 className="text-2xl font-bold mb-5">내 역량 현황이에요📈</h1>

      <div className="flex gap-8">
        <CompetencyChartSection isMain={true} />
        <CompetencyDetail isMain={true} />
      </div>
    </div>
  );
};

export default CompetencyStatus;
