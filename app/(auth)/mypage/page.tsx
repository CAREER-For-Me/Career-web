"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

const MyPage = () => {
  const { data } = useSession();
  const { email, image, name } = data?.user || {};

  return (
    <main>
      <p>{name}님 반갑습니다!</p>
      <p>이메일: {email}</p>
      {image && (
        <Image
          src={image}
          alt={`${name} 프로필`}
          width={200}
          height={200}
          className="rounded-full"
        />
      )}
    </main>
  );
};

export default MyPage;
