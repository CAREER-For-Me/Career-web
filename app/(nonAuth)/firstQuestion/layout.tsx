import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface FirstQuestionLayoutProps {
  children: ReactNode;
}

const firstQuestionLayout = ({ children }: FirstQuestionLayoutProps) => {
  return (
    <>
      <header className="flex items-center gap-6 text-careerForMe-main">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </Link>
        <p>맞춤형 커리어 추천 플랫폼, 커리어포미</p>
      </header>
      <main>{children}</main>
    </>
  );
};

export default firstQuestionLayout;
