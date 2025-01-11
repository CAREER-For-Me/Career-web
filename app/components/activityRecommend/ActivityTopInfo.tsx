import Image from "next/image";

const ActivityTopInfo = () => {
  return (
    <div className="flex">
      <Image
        src="/images/bell.png"
        alt="search"
        width={60}
        height={60}
        className="mr-4"
      />
      <div>
        <p className="font-bold text-2xl">
          <b className="text-careerForMe-main">사이드나우님</b>을 위한 추천
          공고🌟
        </p>
        <p className="font-thin text-gray-dark text-sm">
          최근 업데이트 순으로 노출돼요.
        </p>
      </div>
    </div>
  );
};

export default ActivityTopInfo;
