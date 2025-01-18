import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface firstQuestionLayoutProps {
  children: ReactNode;
}
const FirstQuestionLayout = ({ children }: firstQuestionLayoutProps) => {
  return (
    <div className="bg-careerForMe-gray01 relative">
      <div className="w-screen shadow-md text-gray-medium shadow-gray-medium mt-4 border border-l-gray-light absolute top-[7rem]" />
      <div className="mx-auto max-w-screen-xl min-h-screen p-6">
        <div className="flex items-center gap-3 ">
          <Link href="/">
            <Image
              src="/images/logo/career-logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>
          <span className="text-careerForMe-main font-bold text-xl">
            맞춤형 커리어 추천 플랫폼 커리어포미
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FirstQuestionLayout;
