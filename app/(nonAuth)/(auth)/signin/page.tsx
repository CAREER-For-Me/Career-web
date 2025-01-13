"use client";

import SocialLogin from "@/app/components/auth/SocialLogin";
import { signIn, useSession } from "next-auth/react";
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
    <main className="mx-auto max-w-screen-sm p-6">
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

          <SocialLogin isSignUpPage={false} />
        </>
      )}
    </main>
  );
};

export default SignInPage;
