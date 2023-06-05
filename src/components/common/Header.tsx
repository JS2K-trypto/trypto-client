"use client";
import React, { useState } from "react";
import Menu from "@/components/common/Menu";
import { useAccount } from "wagmi";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import ArrowIcon from "./icons/ArrowIcon";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(false);
  const { address, connector, isConnected } = useAccount();

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
  };

  const handleSearchClick = () => {};

  const handleHistoryBack = () => {
    router.back();
  };
  return (
    <div className="flex gap-2.5 items-center p-5">
      {/* <div className="bg-white bg-opacity-50 flex-1 flex justify-between rounded-2xl p-4 items-center border border-white shadow-md mr-5">
        <div className="font-bold text-xl mx-2 text-left whitespace-nowrap overflow-hidden">
          Search
        </div>
        <Image
          src="/images/SearchIcon.svg"
          width={24}
          height={24}
          alt="Search Button"
          className="mx-1"
        />
      </div> */}
      <button
        type="button"
        className="w-[60px] h-[60px] bg-white bg-opacity-50 border border-white shadow-md rounded-2xl flex-center"
        onClick={handleHistoryBack}
      >
        <ArrowIcon direction="top" width={40} height={40} />
      </button>
      <button
        type="button"
        className="w-[60px] h-[60px] bg-white bg-opacity-50 border border-white shadow-md rounded-2xl flex-center ml-auto"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </button>
      <button
        type="button"
        className="w-[60px] h-[60px] bg-white bg-opacity-50 border border-white shadow-md rounded-2xl flex-center"
        onClick={handleMenuClick}
      >
        <MenuIcon width={30} height={30} />
      </button>
      {activeMenu && <Menu setActiveMenu={setActiveMenu} />}
    </div>
  );
};

export default Header;
