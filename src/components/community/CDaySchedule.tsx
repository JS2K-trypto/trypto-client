import React from "react";
import CTimeSchedule from "./CTimeSchedule";
import EditIcon from "../common/icons/EditIcon";

interface Days {
  [day: string]: { daytime: string; items: Object };
}

interface Data {
  _id: string;
  days: Days;
  nickname: string;
  triparrival: string;
  tripcountry: string;
  tripdeparture: string;
  tripid: number;
  triptitle: string;
  walletaccount: string;
}
export interface DayProps {
  enddate: string;
  note: string;
  startdate: string;
  title: string;
}
interface CDaySchedule {
  //   data: Data;
  day: DayProps;
  idx: number;
}

export default function CDaySchedule({ day, idx }: CDaySchedule) {
  console.log("ke from cdaySchedule: ", day);
  return (
    <div>
      <div className="flex mb-2.5 font-bold items-baseline">
        {/* {Object.keys(data.days).map((key: string) => (
          <p key={key}>{data.days[key].daytime}</p>
        ))} */}

        <h2 className="text-xl">day {idx + 1}</h2>
        <span className="ml-1 text-sm leading-7">
          {/* {data.days[day].daytime.substring(5)} */}
          {day.startdate.substring(5)}
        </span>
      </div>
      <ul>
        {/* {Array.from(Array(5)).map((v, i) => (
          <li key={i} className="mb-2.5">
            <CTimeSchedule
              key={i + 1}
              index={i + 1}
              time="00:00"
              title="title"
              description="description"
              memo="memo"
            />
          </li>
        ))} */}
        <li className="mb-2.5">
          <CTimeSchedule
            time={day.startdate}
            title={day.title}
            memo={day.note}
          />
        </li>
      </ul>
    </div>
  );
}
