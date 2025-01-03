import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} flex items-center justify-center min-h-screen`}
    >
      <h1 className="text-xl font-bold">질의응답페이지</h1>
    </div>
  );
}
