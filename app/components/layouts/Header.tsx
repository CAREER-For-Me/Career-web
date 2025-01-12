import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";
import SignInOutButton from "../common/SignInOutButton";

const Header = () => {
  return (
    <header className="flex items-center ">
      <section className="mr-7">
        <Link href="/">
          <Image
            src="/images/logo/career-logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
      </section>
      <SearchBar />
      <section className="ml-auto">
        <SignInOutButton />
      </section>
    </header>
  );
};

export default Header;
