import Image from "next/image";
import Link from "next/link";
import SearchBar from "../activityRecommend/SearchBar";
import SignInOutButton from "../common/SignInOutButton";

const Header = () => {
  return (
    <header>
      <section>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </Link>
      </section>
      <section>
        <SignInOutButton />
      </section>

      <SearchBar />
    </header>
  );
};

export default Header;
