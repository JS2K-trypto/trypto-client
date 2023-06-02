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
    <Link href={path.COMMUNITY + "/" + (idx + 1).toString()}>
      <div className="bg-white/60 flex rounded-2xl items-center overflow-hidden shadow-md">
        {/* <Image
          className="bg-cover shrink-0"
          src="/images/paris.png"
          alt="#"
          width={100}
          height={100}
        /> */}
        <div className="py-1 pl-2.5 pr-5 font-bold overflow-hidden">
          <p className="text-ellipsis whitespace-nowrap overflow-hidden">
            {plan.triptitle}
          </p>
          <p className="flex items-start flex-wrap">
            {/* <span className="mr-2.5">D-00</span> */}
            <span>{plan.tripdeparture}</span>
          </p>
          <div className="flex py-1 text-slate-500">
            <Image
              className=""
              src="/images/ChatBubble.svg"
              alt="Chat Bubble"
              width={15}
              height={15}
            />
            {Math.floor(Math.random() * (25 - 5 + 1)) + 5}
            <Image
              className=""
              src="/images/LikeIcon.svg"
              alt="Like Icon"
              width={15}
              height={15}
            />
            {Math.floor(Math.random() * (35 - 5 + 1)) + 5}
          </div>

          {/* <p className="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          description
        </p> */}
          {/* <p>Transtion hash: 0x.....</p> */}
        </div>
      </div>
    </Link>
  );
}
