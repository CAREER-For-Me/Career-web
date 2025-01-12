import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface MyPageLayoutProps {
  children: ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <div>
        <Header />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MyPageLayout;
