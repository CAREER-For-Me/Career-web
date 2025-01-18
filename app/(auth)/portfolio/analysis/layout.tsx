"use client";
import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";
import Navbar from "@/app/components/layouts/Navber";
import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AnalysisLayoutProps {
  children: ReactNode;
}

const AnalysisLayout = ({ children }: AnalysisLayoutProps) => {
  const [hasExp, setHasExp] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkExpExists = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/exp`
        );

        if (response.data && response.data.length > 0) {
          setHasExp(true);
        } else {
          setHasExp(false);
          setShowModal(true);
        }
      } catch (error) {
        console.error(error);
        setHasExp(false);
        setShowModal(true);
      }
    };

    checkExpExists();
  }, []);

  const handleRedirect = () => {
    setShowModal(false);
    router.push("/portfolio/info");
  };

  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <Header />
      <Navbar />
      {hasExp === null ? (
        <div>로딩중</div>
      ) : hasExp ? (
        <>{children}</>
      ) : (
        <>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-lg text-center">
                <h2 className="text-lg font-bold mb-4">
                  포트폴리오 정보가 필요합니다
                </h2>
                <p className="text-gray-700 mb-6">
                  포트폴리오 정보를 입력해주세요.
                </p>
                <button
                  onClick={handleRedirect}
                  className="bg-careerForMe-main text-white py-2 px-4 rounded transition"
                >
                  포트폴리오 입력하러 가기
                </button>
              </div>
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default AnalysisLayout;
