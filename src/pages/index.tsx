import { Geist, Geist_Mono } from "next/font/google";
import Button from "../../components/Button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} flex flex-col items-center justify-center min-h-screen gap-4`}
    >
      <h1 className="text-xl font-bold">커리어포미</h1>
      <Link href="/login/login">
        <Button
          label="Login"
          onClick={() => console.log("Navigating to login")}
        />
      </Link>
      <Link href="/portfolioAnalysis/portfolioAnalysis">
        <Button
          label="Portfolio Analysis"
          onClick={() => console.log("Navigating to Portfolio Analysis")}
        />
      </Link>
      <Link href="/firstQuestion/firstQuestion">
        <Button
          label="First Question"
          onClick={() => console.log("Navigating to First Question")}
        />
      </Link>
      <Link href="/activityRecommend/activityRecommend">
        <Button
          label="Activity Recommendation"
          onClick={() => console.log("Navigating to Activity Recommendation")}
        />
      </Link>
    </div>
  );
}
