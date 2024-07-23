import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bottom-0 w-full h-[134px] items-center justify-center bg-black z-10">
      <div className="flex items-center justify-center w-[1440px] h-[134px] max-[450px]:w-[390px] bg-black">
        <div className="w-[1240px] flex flex-row justify-between max-[450px]:justify-center items-center">
          <div className="flex flex-row gap-[50px] max-[450px]:hidden">
            <Link href={"/"} className="font-geist font-medium text-base text-white/70">
              HOME
            </Link>
            <Link href={"/blog"} className="font-geist font-medium text-base text-white/70">
              BLOG
            </Link>
            <Link href={"/contact"} className="font-geist font-medium text-base text-white/70">
              CONTACT US
            </Link>
          </div>
          <div>
            <p className="font-geist font-medium text-xl text-white/70">
              Made with ❤️ in Izmir, Turkey 🇹🇷{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
