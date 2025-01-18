import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import React, { ReactNode } from "react";

interface AnalysisLayoutProps {
  children: ReactNode;
}

const AnalysisLayout = ({ children }: AnalysisLayoutProps) => {
  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AnalysisLayout;
