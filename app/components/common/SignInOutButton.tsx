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
    <>
      <button onClick={() => signIn()} className="mr-4">
        로그인
      </button>
      <button onClick={() => router.push("/signup")}>회원가입</button>
    </>
  );
};

export default SignInOutButton;
