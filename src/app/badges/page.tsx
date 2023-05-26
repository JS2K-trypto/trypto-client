"use client";

import Image from "next/image";
import React, { useState } from "react";
import Badge from "./Badge";
import Menu from "@/components/common/Menu";

export default function Badges() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <div className="mb-14">
      {/* SearchBar & MenuButton */}
      <div className="flex justify-between items-center p-5 pt-12">
        <div className="bg-white bg-opacity-50 w-4/5 flex justify-between rounded-2xl p-4 items-center border border-white shadow-md">
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

        <div
          className="p-4 bg-white bg-opacity-50 border border-white shadow-md rounded-2xl"
          onClick={handleClick}
        >
          <Image
            src="/images/MenuIcon.svg"
            width={34}
            height={34}
            alt="Menu Button"
          />
          {activeMenu && <Menu />}
        </div>
      </div>
      {/* Title */}
      <div className="flex justify-between items-center p-5 px-6 ">
        <div className="font-bold text-3xl">My Badges</div>
        <div className="bg-yellow-300 py-4 px-5 rounded-3xl shadow-md ">
          <div className="font-bold text-base">Get Badge</div>
        </div>
      </div>
      {/* Badges */}
      <div className="grid gap-4 grid-cols-2 p-6">
        {/* <Badge /> */}
        {/* <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge /> */}
        {/* <Badge />
        <Badge />
        <Badge />
        <Badge /> */}
      </div>
    </div>
  );
}
