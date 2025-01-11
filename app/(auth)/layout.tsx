"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; //useclient 선언 필요. 브라우저에서 실행됨.

const authLayout = ({ children }: { children: React.ReactNode }) => {
  //타입지정. react.racctnode는 렌더링 가능한 모든 요소 포함.null, undefined 제외
  const sesstion = useSession();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (sesstion.status != "authenticated") {
      // 로그인 상태가 아니라면
      router.replace("/signin");
    } else {
      // 로그인이 되어있다면
      setShouldRender(true);
    }
  }, []);

  return <div>{shouldRender && children}</div>;
};

export default authLayout;
