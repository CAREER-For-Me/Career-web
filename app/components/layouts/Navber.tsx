"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-9">
      <Link
        href="/activityRecommend"
        className={clsx("", {
          "text-careerForMe-main font-bold": pathname === "/activityRecommend",
        })}
      >
        활동 추천
      </Link>
      <Link
        href="/firstQuestion"
        className={clsx("", {
          "text-careerForMe-main font-bold": pathname === "/firstQuestion",
        })}
      >
        질의 응답
      </Link>
      <Link
        href="/portfolioAnalysis"
        className={clsx("", {
          "text-careerForMe-main font-bold": pathname === "/portfolioAnalysis",
        })}
      >
        포트폴리오 분석
      </Link>
    </nav>
  );
};

export default Navbar;
