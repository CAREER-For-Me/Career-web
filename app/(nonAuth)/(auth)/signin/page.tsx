"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const session = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/"); // 인증된 경우 홈으로 리디렉션
    } else {
      setShouldRender(true);
    }
  }, [router, session, pathname]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn("email-password-credential", {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <main className="flex  flex-col items-center justify-center mx-auto max-w-screen-sm p-6">
      {shouldRender && (
        <>
          <form onSubmit={handleSubmit} className="w-full">
            {/* 아이디 (이메일) */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                autoComplete="username"
                placeholder="아이디 (이메일)"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
              />
            </div>

            {/* 비밀번호 */}
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                autoComplete="current-password"
                placeholder="비밀번호"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}

            {/* 로그인 버튼 */}
            <button
              className="w-full p-4 bg-careerForMe-main  text-white font-bold rounded-2xl"
              type="submit"
            >
              로그인
            </button>
          </form>

          {/* 회원가입 버튼 */}
          <Link href="/signup" className="w-full">
            <button className="w-full p-3 text-black font-bold rounded-2xl mt-4 border border-gray-300">
              회원가입하기
            </button>
          </Link>

          {/* 소셜 로그인 */}
          <div className="flex items-center text-gray-medium w-full my-4 mt-9">
            <hr className="flex-grow border-t border-gray-light h-0.5" />
            <span className="mx-4">소셜 아이디로 로그인</span>
            <hr className="flex-grow border-t border-l-gray-light h-0.5" />
          </div>

          <div className="flex items-center mt-2 gap-4 w-full">
            <button
              onClick={() => signIn("google")}
              className="px-2 py-4 shadow-lg bg-[#F2F2F2] text-#1F1F1F rounded-full w-full flex justify-center items-center
              gap-5 border"
            >
              <Image
                src="/images/logo/google.png"
                alt="Logo"
                width={30}
                height={40}
              />
              with Google
            </button>
            <button
              onClick={() => signIn("kakao")}
              className="px-2 py-4 shadow-lg bg-[#FEE500] text-#1F1F1F rounded-full w-full flex justify-center items-center gap-5"
            >
              <Image
                src="/images/logo/kakao.png"
                alt="Logo"
                width={30}
                height={40}
              />
              with Kakao
            </button>
            <button
              onClick={() => signIn("github")}
              className="px-2 py-4 shadow-lg bg-[#1F2937] text-white rounded-full w-full flex justify-center items-center gap-5"
            >
              <Image
                src="/images/logo/github.png"
                alt="Logo"
                width={30}
                height={40}
              />
              with GitHub
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default SignInPage;
