import React, { ReactNode } from "react";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Footer from "@/app/components/layouts/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <section>
        <Header />
        <Navbar />
      </section>

      <section className="max-w-5xl flex flex-col mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold flex items-center text-gray-900 mt-9">
            내 포트폴리오 정보
            <span className="ml-2 text-green-500 text-lg">
              <Image
                src="/images/check_perspective_matte.png"
                alt="Logo"
                width={30}
                height={30}
              />
            </span>
          </h1>
          <p className="text-sm text-gray-500 mb-3">
            포트폴리오 분석 서비스는 합격자 대비 부족한 역량을 분석해주는
            서비스입니다.
            <br />
            상세한 정보를 입력해주시면 보다 정확한 분석이 가능해요. :)
          </p>
        </div>

        <div className="flex justify-end text-sm text-gray-medium hover:underline items-center">
          <button>희망 직무 다시 선택하기</button>
          <GoChevronRight />
        </div>
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
