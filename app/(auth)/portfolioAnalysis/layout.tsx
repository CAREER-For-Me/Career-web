import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface ActivityRecommendLayoutProps {
  //속성타입 정의
  children: ReactNode;
}

const ActivityRecommendLayout = ({
  children,
}: ActivityRecommendLayoutProps) => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default ActivityRecommendLayout;
