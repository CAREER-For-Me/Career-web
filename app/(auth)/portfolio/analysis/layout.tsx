import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import React, { ReactNode } from "react";

interface AnalysisLayoutProps {
  children: ReactNode;
}

const AnalysisLayout = ({ children }: AnalysisLayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default AnalysisLayout;
