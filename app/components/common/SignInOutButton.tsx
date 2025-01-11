"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInOutButton = () => {
  const session = useSession();
  const router = useRouter();
  const isSignIn = session.status === "authenticated";

  return isSignIn ? (
    <>
      <button onClick={() => signOut()}>로그아웃</button>
    </>
  ) : (
    <div className="flex text-gray-dark">
      <button onClick={() => signIn()}>로그인</button>
      <p className="mx-3">|</p>
      <button onClick={() => router.push("/signup")}>회원가입</button>
    </div>
  );
};

export default SignInOutButton;
