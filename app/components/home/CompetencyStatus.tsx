import CompetencyChartSection from "../CompetencyChartSection";
import CompetencyDetail from "./CompetencyDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const CompetencyStatus = () => {
  const [exp, setExp] = useState(null);

  useEffect(() => {
    const fetchExp = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/exp`
        );
        setExp(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExp();
    console.log(exp);
  }, []);

  return (
    <div className="h-52">
      <h1 className="text-2xl font-bold mb-5">내 역량 현황이에요📈</h1>

      <div className="flex gap-8">
        <CompetencyChartSection isMain={true} exp={exp} />
        <CompetencyDetail isMain={true} exp={exp} />
      </div>
    </div>
  );
};

export default CompetencyStatus;
