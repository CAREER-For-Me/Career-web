"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hr from "../common/Hr";
import { useSession } from "next-auth/react";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  const isSignIn = session.status === "authenticated";
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      <nav className="flex justify-between mt-12 mb-20 font-bold">
        <section className="flex gap-9">
          <Link
            href="/activityRecommend"
            className={clsx(
              "hover:text-careerForMe-main transition-colors duration-300 ease-in-out",
              {
                "text-careerForMe-main font-bold":
                  pathname === "/activityRecommend",
              }
            )}
          >
            활동 추천
          </Link>
          <Link
            href="/firstQuestion"
            className={clsx(
              "hover:text-careerForMe-main transition-colors duration-300 ease-in-out",
              {
                "text-careerForMe-main font-bold":
                  pathname === "/firstQuestion",
              }
            )}
          >
            질의 응답
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              tabIndex={0}
              role="button"
              className={clsx(
                "hover:text-careerForMe-main transition-colors duration-300 ease-in-out",
                {
                  "text-careerForMe-main font-bold":
                    pathname === "/portfolio/analysis" ||
                    pathname === "/portfolio/info",
                }
              )}
            >
              포트폴리오 분석
            </div>
            <div
              className={clsx(
                "absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-20 w-52 transition-all duration-500 ease-in-out",
                isDropdownVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              )}
            >
              <ul className="py-2">
                <li>
                  <Link
                    href="/portfolio/analysis"
                    className={clsx(
                      "block px-4 py-2 text-gray-700 hover:text-careerForMe-main hover:bg-gray-200 transition-colors duration-200 ease-in-out",
                      {
                        "text-careerForMe-main font-bold":
                          pathname === "/portfolio/analysis",
                      }
                    )}
                  >
                    내 포트폴리오 분석하기
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio/info"
                    className={clsx(
                      "block px-4 py-2 text-gray-700 hover:text-careerForMe-main hover:bg-gray-200 transition-colors duration-200 ease-in-out",
                      {
                        "text-careerForMe-main font-bold":
                          pathname === "/portfolio/info",
                      }
                    )}
                  >
                    내 포트폴리오 정보
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/community"
            className={clsx(
              "hover:text-careerForMe-main transition-colors duration-300 ease-in-out",
              {
                "text-careerForMe-main font-bold": pathname === "/community",
              }
            )}
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
                <div className="flex items-center gap-2">
                  마이페이지
                  <FiUser className="text-xl" />
                </div>
              </Link>
            </>
          ) : (
            <></>
          )}
        </section>
      </nav>
      <div className="w-screen shadow-md text-gray-medium shadow-gray-medium mt-4 border border-l-gray-light absolute top-[12rem] right-0" />
    </>
  );
};

export default Navbar;
