"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => {
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
