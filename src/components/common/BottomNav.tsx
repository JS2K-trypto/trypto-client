"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./BottomNavMenu";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("");
  const [activeMenu, setActiveMenu] = useState("Plans");
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };
  useEffect(() => {
    setCurrentPage(pathname);
    console.log(pathname);
  });
  return (
    <div className="fixed left-0 bottom-0 z-10 w-full">
      <ul className="bg-white rounded-t-2xl flex justify-between p-4">
        <li className="mx-6">
          <Link href="/plans">
            {currentPage === "/plans" ? (
              <Image
                alt="Plans icon"
                src="/images/ActivePlanMenu.svg"
                width="36"
                height="29"
              />
            ) : (
              <Image
                alt="Plans icon"
                src="/images/PlanMenu.svg"
                width="36"
                height="29"
              />
            )}
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/community">
            {currentPage === "/community" ? (
              <Image
                alt="Plans icon"
                src="/images/ActiveCommunityMenu.svg"
                width="35"
                height="35"
              />
            ) : (
              <Image
                alt="Plans icon"
                src="/images/CommunityMenu.svg"
                width="35"
                height="35"
              />
            )}
          </Link>
        </li>
        <li className="mx-6">
          <Link href="/badges">
            {currentPage === "/badges" ? (
              <Image
                alt="Plans icon"
                src="/images/ActiveBadgeMenu4.svg"
                width="34"
                height="36"
              />
            ) : (
              <Image
                alt="Plans icon"
                src="/images/BadgeMenu4.svg"
                width="34"
                height="36"
              />
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
