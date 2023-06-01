import { PlanProps } from "@/app/community/page";
import path from "@/configs/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CommunityCard({
  plan,
  idx,
}: {
  plan: PlanProps;
  idx: number;
}) {
  return (
    <Link href={path.COMMUNITY + idx.toString()}>
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
            {plan.triptitle}
          </p>
          <p className="flex items-start flex-wrap">
            {/* <span className="mr-2.5">D-00</span> */}
            <span>{plan.triparrival}</span>
          </p>
          <Image
            className=""
            src="/images/ChatBubble.svg"
            alt="Chat Bubble"
            width={15}
            height={15}
          />
          {/* <p className="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          description
        </p> */}
          {/* <p>Transtion hash: 0x.....</p> */}
        </div>
      </div>
    </Link>
  );
}
