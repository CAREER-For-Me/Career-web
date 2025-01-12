import BarChart from "./chart/BarChart";
import Hr from "./common/Hr";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import { credentials } from "../constants/constants";

interface CompetencyChartSectionProps {
  isMain: boolean;
}

const CompetencyChartSection = ({ isMain }: CompetencyChartSectionProps) => {
  return (
    <div className="bg-careerForMe-gray01 rounded-md w-3/5 relative shadow-sm shadow-gray-light">
      <div className="flex m-9 flex-col ">
        <div className="flex text-gray-medium text-sm relative">
          <p>필요 역량</p>
          <p className="absolute left-40">충족 상태</p>
        </div>

        <Hr mt={2} my={9} />

        {credentials.map((item, index) => (
          <div className="flex mb-4 items-center h-6" key={index}>
            <p className="w-40">{item}</p>
            <div className="">
              <BarChart />
            </div>
            <p className="text-careerForMe-main ml-auto">4.32점</p>
          </div>
        ))}
      </div>
      {isMain ? (
        <></>
      ) : (
        <>
          <Link
            href="/"
            className="flex items-center justify-end mr-9 mb-6 -mt-4 text-gray-medium"
          >
            내 포트폴리오 수정하기 <GoChevronRight />
          </Link>
        </>
      )}
    </div>
  );
};

export default CompetencyChartSection;
