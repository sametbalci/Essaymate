"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <div className="flex fixed justify-center items-center w-full min-w-[1440px] bg-gradient-to-b from-white to-white/0 h-20  z-20">
      <div className="flex flex-row justify-between items-center w-[1240px]">
        <Link href={"/"}>
          <p className="text-black text-2xl font-extrabold font-geist">
            EssayMate
          </p>
        </Link>
        <div className="flex flex-row items-center justify-center gap-5">
          <Link
            href={"/"}
            className={`flex items-center justify-center w-[84px] h-10 rounded-[50px] ${
              path === "/"
                ? "bg-[#1B48BB] text-white"
                : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
            }`}
          >
            <p className="font-medium text-base font-geist">Home</p>
          </Link>
          <Link
            href={"/blog"}
            className={`flex items-center justify-center w-[75px] h-10 rounded-[50px] ${
              path.startsWith("/blog")
                ? "bg-[#1B48BB] text-white"
                : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
            }`}
          >
            <p className="font-medium text-base font-geist">Blog</p>
          </Link>
          <Link
            href={"/contact"}
            className={`flex items-center justify-center w-[125px] h-10 rounded-[50px] ${
              path === "/contact"
                ? "bg-[#1B48BB] text-white"
                : "border border-black/20 text-[#1B48BB] hover:bg-[#1B48BB] hover:text-white hover:border-none transition-all duration-200"
            }`}
          >
            <p className="font-medium text-base font-geist">Contact Us</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
