import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-11 mt-[4rem]">
      <div className="w-screen shadow-md text-gray-medium shadow-gray-medium mt-4 border border-l-gray-light absolute left-0" />
      <div className="flex justify-center">
        {/* left */}
        <div className="flex flex-col mr-56 mt-24">
          <div>
            <Image
              src="/images/logo/career-gray-logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p>맞춤형 커리어 추천 플랫폼</p>
            <p className="font-bold">커리어포미</p>
          </div>
          <div>
            <p className="text-gray-medium mt-16">@SideNow</p>
          </div>
        </div>

        {/* right */}
        <table className="border-separate border-spacing-y-6 w-2/4 mt-24">
          <thead>
            <tr className="text-gray-dark">
              <th className="text-left">제작/개발</th>
              <th className="text-left">PM</th>
              <th className="text-left">디자인</th>
              <th className="text-left">프론트엔드</th>
              <th className="text-left">백엔드</th>
            </tr>
          </thead>
          <tbody className="text-gray-medium ">
            <tr>
              <td className="text-left"></td>
              <td className="text-left align-text-top">
                <p className="mb-4">엄지현</p>
              </td>
              <td className="text-left align-text-top">
                <p className="mb-4">김영서</p>
              </td>
              <td className="text-left align-text-top">
                <p className="mb-4">이정한</p>
                <p className="mb-4">박시은</p>
                <p className="mb-4">박진우</p>
              </td>
              <td className="text-left align-text-top">
                <p className="mb-4">이건주</p>
                <p className="mb-4">한혜수</p>
                <p className="mb-4">허유경</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
