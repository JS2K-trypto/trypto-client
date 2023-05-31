"use client";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "@/components/common/Menu";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { address, connector, isConnected } = useAccount();
  const handleClick = () => {
    setActiveMenu((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center p-5">
      <div className="bg-white bg-opacity-50 flex-1 flex justify-between rounded-2xl p-4 items-center border border-white shadow-md mr-5">
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
      </div>
      <button
        type="button"
        className="p-4 bg-white bg-opacity-50 border border-white shadow-md rounded-2xl"
        onClick={handleClick}
      >
        <Image
          src="/images/MenuIcon.svg"
          width={34}
          height={34}
          alt="Menu Button"
        />
      </button>
      {activeMenu && <Menu setActiveMenu={setActiveMenu} />}
    </div>
  );
};

export default Header;
