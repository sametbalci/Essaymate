"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="flex fixed justify-center items-center w-full min-w-[1440px] bg-gradient-to-b from-white to-white/0 h-20 z-20 max-[450px]:w-[360px]">
    //   <div className="flex flex-row justify-between items-center w-[1240px]">
    //     <Link href={"/"}>
    //       <p className="text-black text-2xl font-extrabold font-geist">
    //         EssayMate
    //       </p>
    //     </Link>
    //     <div className="flex flex-row items-center justify-center gap-5">
    //       <Link
    //         href={"/"}
    //         className={`flex items-center justify-center w-[84px] h-10 rounded-[50px] ${
    //           path === "/"
    //             ? "bg-[#1B48BB] text-white"
    //             : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
    //         }`}
    //       >
    //         <p className="font-medium text-base font-geist">Home</p>
    //       </Link>
    //       <Link
    //         href={"/blog"}
    //         className={`flex items-center justify-center w-[75px] h-10 rounded-[50px] ${
    //           path.startsWith("/blog")
    //             ? "bg-[#1B48BB] text-white"
    //             : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
    //         }`}
    //       >
    //         <p className="font-medium text-base font-geist">Blog</p>
    //       </Link>
    //       <Link
    //         href={"/contact"}
    //         className={`flex items-center justify-center w-[125px] h-10 rounded-[50px] ${
    //           path === "/contact"
    //             ? "bg-[#1B48BB] text-white"
    //             : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
    //         }`}
    //       >
    //         <p className="font-medium text-base font-geist">Contact Us</p>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <nav className="md:flex md:fixed justify-center items-center w-full bg-gradient-to-b from-white to-white/0 md:h-20 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:gap-[781px]">
        <Link href={"/"}>
          <p className="text-black text-2xl font-extrabold font-geist">
            EssayMate
          </p>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:gap-5 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent`}
          >
            <li>
              <Link href="/">
                <p
                  className={`flex md:items-center md:justify-center md:w-[84px] md:h-10 md:rounded-[50px] ${
                    path === "/"
                      ? "md:bg-[#1B48BB] text-white bg-blue-700"
                      : "md:border md:border-black/20 md:text-[#1B48BB] md:hover:bg-[#1B48BB] md:hover:text-white md:hover:border-none transition-all duration-200"
                  } py-2 px-3 rounded md:bg-transparent`}
                  aria-current="page"
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p
                  className={`flex md:items-center md:justify-center md:w-[75px] md:h-10 md:rounded-[50px] ${
                    path.startsWith("/blog")
                      ? "md:bg-[#1B48BB] text-white bg-blue-700"
                      : "md:border md:border-black/20 md:text-[#1B48BB] md:hover:bg-[#1B48BB] md:hover:text-white md:hover:border-none text-gray-900 rounded hover:bg-gray-100 transition-all duration-200"
                  } py-2 px-3 rounded md:bg-transparent`}
                  aria-current="page"
                >
                  Blog
                </p>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <p
                  className={`flex md:items-center md:justify-center md:w-[125px] md:h-10 md:rounded-[50px] ${
                    path === "/contact"
                      ? "md:bg-[#1B48BB] text-white bg-blue-700"
                      : "md:border md:border-black/20 md:text-[#1B48BB] md:hover:bg-[#1B48BB] md:hover:text-white md:hover:border-none text-gray-900 rounded hover:bg-gray-100 transition-all duration-200"
                  } py-2 px-3 rounded md:bg-transparent`}
                  aria-current="page"
                >
                  Contact Us
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
