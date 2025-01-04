import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomePageLayoutProps) => {
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

export default HomeLayout;
