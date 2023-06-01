"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./BottomNavMenu";

export default function BottomNav() {
  const [activeMenu, setActiveMenu] = useState("Plans");
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  return (
    <div className="fixed left-0 bottom-0 z-10 w-full">
      <ul className="bg-white rounded-t-2xl flex justify-between p-4">
        <li className="mx-6">
          <Link href="/plans">
            <Image
              alt="Plans icon"
              src="/images/PlanMenu.svg"
              width="36"
              height="29"
            />
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/community">
            <Image
              alt="Plans icon"
              src="/images/CommunityMenu.svg"
              width="35"
              height="35"
            />
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/badges">
            <Image
              alt="Plans icon"
              src="/images/BadgeMenu2.svg"
              width="26"
              height="34"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
