import BarChart from "./chart/BarChart";
import Hr from "./common/Hr";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import { useUserSpec } from "../context/UserSpecContext";

interface CompetencyChartSectionProps {
  isMain: boolean;
}

const CompetencyChartSection = ({ isMain }: CompetencyChartSectionProps) => {
  const { myspec, setMyspec } = useUserSpec();

  return (
    <div className="bg-careerForMe-gray01 rounded-md w-3/5 relative shadow-sm shadow-gray-light">
      <div className="flex m-9 flex-col ">
        <div className="flex text-gray-medium text-sm relative">
          <p>필요 역량</p>
          <p className="absolute left-40">충족 상태</p>
        </div>

        <Hr mt={2} my={9} />

        <div className="flex mb-4 items-center h-6 relative">
          <p className="w-40">학점</p>
          <div className="bg-gray-light w-[18.8rem] h-[0.6rem] absolute left-[10rem] rounded-full" />
          <div className="absolute left-[10rem]">
            <BarChart
              value={myspec?.majorScore || 0}
              max={4.5}
              maxBarThickness={10}
              background="#6D72FF"
            />
          </div>

          <p className="text-careerForMe-main ml-auto">
            {myspec?.majorScore}점
          </p>
        </div>

        <div className="flex mb-4 items-center h-6 relative">
          <p className="w-40">인턴</p>
          <div className="bg-gray-light w-[18.8rem] h-[0.6rem] absolute left-[10rem] rounded-full" />
          <div className="absolute left-[10rem]">
            <BarChart
              value={myspec?.internCount || 0}
              max={5}
              maxBarThickness={10}
              background="#6D72FF"
            />
          </div>

          <p className="text-careerForMe-main ml-auto">
            {myspec?.internCount}점
          </p>
        </div>

        <div className="flex mb-4 items-center h-6 relative">
          <p className="w-40">수상내역</p>
          <div className="bg-gray-light w-[18.8rem] h-[0.6rem] absolute left-[10rem] rounded-full" />
          <div className="absolute left-[10rem]">
            <BarChart
              value={myspec?.awardCount || 0}
              max={5}
              maxBarThickness={10}
              background="#6D72FF"
            />
          </div>

          <p className="text-careerForMe-main ml-auto">
            {myspec?.awardCount}점
          </p>
        </div>

        <div className="flex mb-4 items-center h-6 relative">
          <p className="w-40">자격증</p>
          <div className="bg-gray-light w-[18.8rem] h-[0.6rem] absolute left-[10rem] rounded-full" />
          <div className="absolute left-[10rem]">
            <BarChart
              value={myspec?.qualCount || 0}
              max={5}
              maxBarThickness={10}
              background="#6D72FF"
            />
          </div>

          <p className="text-careerForMe-main ml-auto">{myspec?.qualCount}점</p>
        </div>

        <div className="flex mb-4 items-center h-6 relative">
          <p className="w-40">토익</p>
          <div className="bg-gray-light w-[18.8rem] h-[0.6rem] absolute left-[10rem] rounded-full" />
          <div className="absolute left-[10rem]">
            <BarChart
              value={myspec?.toeicScore || 0}
              max={990}
              maxBarThickness={10}
              background="#6D72FF"
            />
          </div>

          <p className="text-careerForMe-main ml-auto">
            {myspec?.toeicScore}점
          </p>
        </div>
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
