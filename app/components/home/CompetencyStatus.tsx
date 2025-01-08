import Hr from "../common/Hr";

const CompetencyStatus = () => {
  return (
    <div className="h-52">
      <h1 className="text-2xl font-bold mb-5">내 역량 현황이에요📈</h1>

      <div className="flex gap-8">
        <div className="bg-careerForMe-gray01 rounded-md w-3/5">
          <div className="flex m-9 flex-col">
            <div className="flex text-gray-medium text-sm">
              <p>필요 역량</p>
              <p className="ml-32">충족 상태</p>
            </div>

            <Hr mt={2} mb={5} />

            <div className="flex justify-between mb-4">
              <p>학점</p>
              <p>그래프</p>
              <p className="text-careerForMe-main">4.32점</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>인턴</p>
              <p>그래프</p>
              <p className="text-careerForMe-main">4.32점</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>수상내역</p>
              <p>그래프</p>
              <p className="text-careerForMe-main">4.32점</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>대외활동</p>
              <p>그래프</p>
              <p className="text-careerForMe-main">4.32점</p>
            </div>

            <div className="flex justify-between mb-4">
              <p>자격증</p>
              <p>그래프</p>
              <p className="text-careerForMe-main">4.32점</p>
            </div>
          </div>
        </div>

        {/* right - top */}
        <div className="flex-1 font-bold">
          <div className="border border-l-gray-light rounded-md">
            <div className="m-5">
              <div className="flex justify-between">
                <p>대외활동</p>
                <p className="text-careerForMe-main">하위 33%</p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>인턴</p>
                <p className="text-careerForMe-main">하위 33%</p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>자격증</p>
                <p className="text-careerForMe-main">하위 33%</p>
              </div>
              <hr className="mt-3" />
            </div>
          </div>
          {/* right - bottom */}
          <div className="mt-3 border border-l-gray-light rounded-md">
            <div className="m-5">
              <div className="flex justify-between">
                <p>수상내역</p>
                <p className="text-careerForMe-red">하위 33%</p>
              </div>
              <hr className="mt-3" />
            </div>

            <div className="m-5">
              <div className="flex justify-between">
                <p>학점</p>
                <p className="text-careerForMe-red">하위 33%</p>
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
