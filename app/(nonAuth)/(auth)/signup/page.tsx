"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogin from "@/app/components/auth/SocialLogin";

const SignupPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/???", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          nickname,
          email,
          password1,
          password2,
        }), // API가 요구하는 필드 형식으로 전송
      });

      // 응답이 400번대일 경우 텍스트로 처리
      if (!res.ok) {
        const errorText = await res.text(); // 응답을 텍스트로 처리
        setError(errorText || "회원가입에 실패했습니다.");
        return;
      }
    } catch (error) {
      console.error("네트워크 오류 발생:", error);
      setError("서버와의 연결에 문제가 발생했습니다.");
    }

    // 회원가입 성공 시 로그인 페이지로 리디렉션
    router.push("/signin");
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <main className="mx-auto max-w-screen-sm p-6">
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder="아이디 (이메일)"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
        />

        <input
          id="password1"
          type="password"
          name="password1"
          value={password1}
          placeholder="비밀번호 (영문, 숫자, 특수문자를 포함한 8~20자)"
          onChange={(e) => setPassword1(e.target.value)}
          required
          minLength={8}
          maxLength={20}
          className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
        />

        <input
          id="password2"
          type="password"
          name="password2"
          value={password2}
          placeholder="비밀번호 확인"
          onChange={(e) => setPassword2(e.target.value)}
          required
          className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
        />

        <input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="이름 (실명)"
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
        />

        <input
          id="nickname"
          type="text"
          name="nickname"
          value={nickname}
          placeholder="닉네임"
          onChange={(e) => setNickname(e.target.value)}
          required
          className="w-full p-4 mt-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-careerForMe-main"
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="w-full p-4 text-white bg-careerForMe-main font-bold rounded-2xl mt-4 border border-gray-300"
          type="submit"
        >
          가입하기
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link href="/signin" className="text-careerForMe-main  text-sm">
          이미 계정이 있으신가요? 로그인하기
        </Link>
      </div>

      <SocialLogin isSignUpPage={true} />
    </main>
  );
};

export default SignupPage;
