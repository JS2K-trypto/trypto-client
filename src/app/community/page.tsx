"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import axios from "axios";
import CommunityCard from "@/components/community/CommunityCard";

interface ItemProps {
  enddate: string;
  imgsrc: string;
  itemdescription: string;
  itemmemo: string;
  itemtitle: string;
  startdate: string;
}
interface ItemsProps {
  item1: ItemProps;
  item2: ItemProps;
  item3: ItemProps;
}
interface DayProps {
  daytime: string;
  items: ItemsProps;
}
interface DaysProps {
  day1: DayProps;
  day2: DayProps;
}
export interface PlanProps {
  _id: string;
  days: DaysProps;
  triparrival: string;
  tripcountry: string;
  tripdeparture: string;
  tripid: number;
  triptitle: string;
  walletaccount: string;
}

export default function Community() {
  const { isConnected } = useAccount();
  const [allPlan, setAllPlan] = useState<PlanProps[]>([]);
  useEffect(() => {
    axios
      .get("http://152.69.231.140:1323/v01/trip/allplan")
      .then((res) => {
        console.log(res.data);
        setAllPlan(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Title */}
      <div className="relative flex flex-col bg-glass rounded-t-2xl h-full overflow-hidden pt-5 pb-[75px]">
        <div className="px-5 font-bold">
          <h1 className="text-3xl">Community</h1>
        </div>
        <div className="mt-5 overflow-y-auto px-5">
          <section>
            {allPlan.map((plan, idx) => (
              <div key={plan._id} className="mb-5">
                <CommunityCard plan={plan} idx={idx} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
