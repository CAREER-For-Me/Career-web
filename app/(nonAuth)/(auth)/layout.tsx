import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { TbHome2 } from "react-icons/tb";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-3">
        <Link
          href="/"
          className="flex item-end ml-[50rem] pt-24 text-gray-dark items-center gap-2"
        >
          <TbHome2 className="text-xl" />
          <p>커리어포미 홈</p>
        </Link>
        <div className="w-screen shadow-md text-gray-medium shadow-gray-medium mt-3 border border-l-gray-light" />

        <Link href="/" className="mt-9">
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
  );
};

export default AuthLayout;
