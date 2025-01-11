import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface MyPageLayoutProps {
  children: ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
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

export default MyPageLayout;
