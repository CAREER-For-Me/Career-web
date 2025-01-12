import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface ActivityRecommendLayoutProps {
  children: ReactNode;
}

const ActivityRecommendLayout = ({
  children,
}: ActivityRecommendLayoutProps) => {
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

export default ActivityRecommendLayout;
