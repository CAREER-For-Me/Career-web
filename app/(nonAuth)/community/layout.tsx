import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import { ReactNode } from "react";

interface PostLayoutProps {
  children: ReactNode;
}

const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PostLayout;
