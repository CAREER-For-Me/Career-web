import { signIn } from "next-auth/react";
import Image from "next/image";

interface isSignUpPageProps {
  isSignUpPage: boolean;
}

const SocialLogin = ({ isSignUpPage }: isSignUpPageProps) => {
  return (
    <article className="mb-24">
      {/* 소셜 로그인 */}
      <div className="flex items-center text-gray-medium w-full my-4 mt-9">
        <hr className="flex-grow border-t border-gray-light h-0.5" />
        <span className="mx-4">
          소셜 아이디로 {isSignUpPage ? <>회원가입</> : <>로그인</>}
        </span>
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
    </article>
  );
};

export default SocialLogin;
