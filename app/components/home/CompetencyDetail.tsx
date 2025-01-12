import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const CompetencyDetail = () => {
  return (
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
  );
};

export default CompetencyDetail;
