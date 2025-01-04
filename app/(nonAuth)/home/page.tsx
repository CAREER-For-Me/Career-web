"use client";

import { useSession } from "next-auth/react";

const HomePage = () => {
  const session = useSession();

  console.log("====================================");
  console.log("session", session);
  console.log("user", session.data?.user?.name);
  console.log("====================================");
  return <div>HomePage</div>;
};

export default HomePage;
