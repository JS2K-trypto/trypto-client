import path from "@/configs/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PlanCard() {
  return (
    <Link href={path.PLANS + "/1"}>
      <div className="bg-white/60 flex rounded-2xl items-center overflow-hidden shadow-md">
        <Image
          className="bg-cover shrink-0"
          src="/images/paris.png"
          alt="#"
          width={100}
          height={100}
        />
        <div className="pl-2.5 pr-5 font-bold overflow-hidden">
          <p className="text-ellipsis whitespace-nowrap overflow-hidden">
            Title
          </p>
          <p className="flex items-start flex-wrap">
            <span className="mr-2.5">D-00</span>
            <span>2023.0.00 - 0.00</span>
          </p>
          {/* <p className="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          description
        </p> */}
          {/* <p>Transtion hash: 0x.....</p> */}
        </div>
      </div>
    </Link>
  );
}
