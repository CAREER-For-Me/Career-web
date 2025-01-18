"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="text-[0.9rem] mt-[3.5rem] text-gray-400  ">
      <button onClick={() => router.back()} className="flex flex-row">
        <img
          src="/images/questionImages/questionImage3.png"
          alt="icon"
          className="h-[1.4em] w-[1.4em]"
        />
        <p>이전으로</p>
      </button>
    </div>
  );
};

export default BackButton;
