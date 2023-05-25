"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";

export default function BottomNav() {
  const [activeMenu, setActiveMenu] = useState("Plans");
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <div className="fixed left-0 bottom-0 z-10   w-full ">
      <ul className="bg-white rounded-2xl flex  justify-between m-4 mx-8 py-4">
        <li className="mx-6 bg-yellow-500">
          <Link href="/plans">
            <Image
              alt="Plans icon"
              src="/images/PlanMenu.svg"
              width="38"
              height="30"
            />
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/community">
            <Image
              alt="Plans icon"
              src="/images/CommunityMenu.svg"
              width="37"
              height="36"
            />
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/badges">
            <Image
              alt="Plans icon"
              src="/images/BadgeMenu.svg"
              width="27"
              height="36"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
