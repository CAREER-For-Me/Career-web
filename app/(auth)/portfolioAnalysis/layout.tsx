import React, { ReactNode } from "react";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
