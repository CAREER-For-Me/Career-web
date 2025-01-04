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
    <div className="flex min-h-screen flex-col items-center justify-center mx-auto max-w-screen-sm p-6">
      {shouldRender && (
        <>
          <div className="flex flex-col justify-center items-center mb-6">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
            <p className="text-center mt-2 text-careerForMe-main">
              맞춤형 커리어 추천 플랫폼, 커리어 포미
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-dark"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                autoComplete="username"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-dark"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              className="w-full p-3 bg-careerForMe-main  text-white font-bold rounded-md"
              type="submit"
            >
              로그인
            </button>
          </form>
          <Link href="/signup" className="w-full">
            <button className="w-full p-3 text-black font-bold rounded-md mt-4 border border-gray-300">
              회원가입하기
            </button>
          </Link>

          <div className="flex flex-col items-center mt-6 gap-4 w-full">
            <button
              onClick={() => signIn("google")}
              className="p-3 bg-white text-black font-bold rounded-md w-full flex justify-center items-center
              gap-9 border border-gray-300"
            >
              <Image src="/logo/google.png" alt="Logo" width={40} height={40} />
              Google로 로그인
            </button>
            <button
              onClick={() => signIn("kakao")}
              className="p-3 bg-yellow-500 text-white font-bold rounded-md w-full flex justify-center items-center gap-9"
            >
              <Image src="/logo/kakao.png" alt="Logo" width={40} height={50} />
              Kakao로 로그인
            </button>
            <button
              onClick={() => signIn("github")}
              className="p-3 bg-gray-800 text-white font-bold rounded-md w-full flex justify-center items-center gap-9"
            >
              <Image src="/logo/github.png" alt="Logo" width={40} height={40} />
              GitHub로 로그인
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SignInPage;
