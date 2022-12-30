import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <div className="sm:flex justify-between p-5 max-w-7xl mx-auto cursor-pointer">
          <div className="w-fit mx-auto sm:mx-0 mb-3 sm:mb-0 font-duneRise uppercase font-extrabold flex items-center text-base sm:text-2xl md:gap-3 ">
            <img
              src="/img/mars.png"
              alt="logo image"
              className="h-10 sm:h-14 rounded-full"
            />
            <h1 className="">The Mars Logbook</h1>
          </div>
          <Link href={"/about"}>
            <div className="text-sm sm:text-base border sm:flex h-fit text-center px-5 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-md cursor-pointer md:hover:scale-110 ease-out duration-100 text-white">
              About
            </div>
          </Link>
        </div>
      </Link>
    </header>
  );
};

export default Header;
