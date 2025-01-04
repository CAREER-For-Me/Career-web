import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center gap-6 text-careerForMe-main pb-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </Link>
        <p>맞춤형 커리어 추천 플랫폼, 커리어포미</p>
      </header>
      <hr className = "absolute left-0 h-1 w-screen rounded h-[0.5px] border-0 bg-gray-300 shadow-[0_2px_5px_rgba(0,0,0,0.5)]" />

    </>
  );
};

export default Header;
