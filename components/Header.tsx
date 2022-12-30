import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <div className="flex justify-between p-5 max-w-7xl mx-auto cursor-pointer">
          <div className="font-duneRise uppercase font-extrabold flex items-center text-2xl gap-3">
            <img
              src="/img/mars.png"
              alt="logo image"
              className="h-14 rounded-full"
            />
            <h1>The Mars Logbook</h1>
          </div>
          <div className="border flex items-center h-fit my-auto px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-md cursor-pointer md:hover:scale-110 ease-out duration-100 text-white">
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
