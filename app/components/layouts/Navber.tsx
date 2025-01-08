"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hr from "../common/Hr";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  const isSignIn = session.status === "authenticated";

  return (
    <>
      <nav className="flex justify-between mt-12 font-bold">
        <section className="flex gap-9">
          <Link
            href="/activityRecommend"
            className={clsx("", {
              "text-careerForMe-main font-bold":
                pathname === "/activityRecommend",
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
              "text-careerForMe-main font-bold":
                pathname === "/portfolioAnalysis",
            })}
          >
            포트폴리오 분석
          </Link>
          <Link
            href="/community"
            className={clsx("", {
              "text-careerForMe-main font-bold": pathname === "/community",
            })}
          >
            커뮤니티/멘토 게시판
          </Link>
        </section>
        <section>
          {isSignIn ? (
            <>
              <Link
                href="/mypage"
                className={clsx("", {
                  "text-careerForMe-main font-bold": pathname === "/mypage",
                })}
              >
                마이페이지
              </Link>
            </>
          ) : (
            <></>
          )}
        </section>
      </nav>
      <Hr my={9} mt={4} />
    </>
  );
};

export default Navbar;
