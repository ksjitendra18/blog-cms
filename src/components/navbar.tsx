import Link from "next/link";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="max-w-[1140px] mx-auto px-3 md:px-0 my-2 flex items-center justify-between  ">
      <h1 className="font-bold text-2xl">
        <Link href="/">JSACMS</Link>
      </h1>

      <nav>
        <ul>
          <li className="bg-slate-800 text-white rounded-md px-5 py-2">
            <Link href="/login">Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
