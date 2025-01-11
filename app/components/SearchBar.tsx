import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="flex items-center w-full max-w-xl relative">
      <input
        placeholder="어떤 활동을 찾으시나요?"
        className="flex-1  p-3 mt-2 border-[3px] border-careerForMe-main rounded-full outline-none"
      />
      <button>
        <Image
          src="/images/search-md.png"
          alt="search"
          width={30}
          height={30}
          className="absolute right-5 bottom-3"
        />
      </button>
    </form>
  );
};

export default SearchBar;
