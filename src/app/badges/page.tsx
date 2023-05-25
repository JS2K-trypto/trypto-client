import Image from "next/image";
import React from "react";

export default function Badges() {
  return (
    <div>
      {/* SearchBar & MenuButton */}
      <div className="flex justify-between items-center p-5 pt-12 gap-2">
        <div className="bg-white w-3/4 flex rounded-3xl p-4 items-center">
          <Image
            src="/images/SearchIcon.svg"
            width={27}
            height={27}
            alt="Search Button"
            className="mx-1"
          />
          <div className="text-xl mx-2 text-left whitespace-nowrap overflow-hidden">
            Search Travel plan...
          </div>
        </div>

        <div className="p-4 menu_background ">
          <Image
            src="/images/MenuIcon.svg"
            width={34}
            height={34}
            alt="Menu Button"
          />
        </div>
      </div>
      {/* Title */}
      <div className="flex justify-between items-center p-5 px-6">
        <div className="font-extrabold text-3xl">My Badges</div>
        <div className="font-extrabold">Total plan: 5</div>
      </div>
      {/* SubTitle */}
      <div className="text-xl font-bold m-6">Recent travel badges</div>
    </div>
  );
}
