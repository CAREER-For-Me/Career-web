import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-9">
      <Link href="/activityRecommend">활동 추천</Link>
      <Link href="/firstQuestion">질의 응답</Link>
      <Link href="/portfolioAnalysis">포트폴리오 분석</Link>
    </nav>
  );
};

export default Navbar;
 