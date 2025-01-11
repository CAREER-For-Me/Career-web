import Hr from "../common/Hr";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import BarChart from "../chart/BarChart";

const CompetencyStatus = () => {
  return (
    <div className="h-52">
      <h1 className="text-2xl font-bold mb-5">내 역량 현황이에요📈</h1>

      <div className="flex gap-8">
        <div className="bg-careerForMe-gray01 rounded-md w-3/5 relative">
          <div className="flex m-9 flex-col">
            <div className="flex text-gray-medium text-sm relative">
              <p>필요 역량</p>
              <p className="absolute left-40">충족 상태</p>
            </div>

            <Hr mt={2} my={9} />
            <div className="h-[12.4rem] w-[100rem] absolute left-52 bottom-[3.2rem]">
              <BarChart />
            </div>

            <div className="flex mb-4 relative">
              <p>학점</p>
              <p className="absolute left-48"></p>
              <p className="text-careerForMe-main ml-auto">4.32점</p>
            </div>

            <div className="flex mb-4 relative">
              <p>인턴</p>
              <p className="text-careerForMe-main ml-auto">4.32점</p>
            </div>

            <div className="flex mb-4 relative">
              <p>수상내역</p>
              <p className="text-careerForMe-main ml-auto">4.32점</p>
            </div>

            <div className="flex mb-4 relative">
              <p>대외활동</p>
              <p className="text-careerForMe-main ml-auto">4.32점</p>
            </div>

            <div className="flex mb-4 relative">
              <p>자격증</p>
              <p className="text-careerForMe-main ml-auto">4.32점</p>
            </div>
          </div>
        </div>

        {/* right - top */}
        <div className="flex-1 font-bold">
          <div className="border border-l-gray-light rounded-md">
            <div className="m-5">
              <div className="flex justify-between">
                <p>대외활동</p>

                <p className="flex items-center gap-2 text-careerForMe-main">
                  <BiSolidDownArrow />
                  하위 33%
                </p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>인턴</p>
                <p className="flex items-center gap-2 text-careerForMe-main">
                  <BiSolidDownArrow />
                  하위 33%
                </p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>자격증</p>
                <p className="flex items-center gap-2 text-careerForMe-main">
                  <BiSolidDownArrow />
                  하위 33%
                </p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>
          {/* right - bottom */}
          <div className="mt-3 border border-l-gray-light rounded-md">
            <div className="m-5">
              <div className="flex justify-between">
                <p>수상내역</p>

                <p className="flex items-center gap-2 text-careerForMe-red">
                  <BiSolidUpArrow />
                  상위 33%
                </p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>학점</p>
                <p className="flex items-center gap-2 text-careerForMe-red">
                  <BiSolidUpArrow />
                  상위 33%
                </p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencyStatus;
