import path from "@/configs/path";
import { PlanCardProps } from "@/interfaces/components/plans/PlanCardProps";
import { diffDate } from "@/utils/diffDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PlanCard({ data }: PlanCardProps) {
  const dateDeparture = data ? new Date(data?.tripDeparture) : new Date();
  const dateArrival = data ? new Date(data?.tripArrival) : new Date();

  const dDay = data ? diffDate(dateDeparture, new Date()) : 0;
  const isDDay = dDay === 0;
  const dDaySymbol = dDay > 0 ? "-" : "+";

  return (
    <Link
      href={path.PLANS_ID}
      as={path.PLANS_ID.replace(":id", `${data?.tripId || ""}`)}
    >
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
            {data?.tripTitle}
          </p>
          <p className="flex items-start flex-wrap">
            <span className="mr-2.5">{`D${
              isDDay ? "-Day" : `${dDaySymbol}${Math.abs(dDay)}`
            }`}</span>
            <span>
              {dateDeparture.toLocaleDateString()}-
              {dateArrival.toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
