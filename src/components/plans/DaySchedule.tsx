import React from "react";
import TimeSchedule from "./TimeSchedule";
import EditIcon from "../common/icons/EditIcon";

export default function DaySchedule({}) {
  return (
    <div>
      <div className="flex mb-2.5 font-bold items-baseline">
        <h2 className="text-xl">day 1</h2>
        <span className="ml-1 text-sm leading-7">4.8(sat)</span>
        <div className="bg-yellow-300 rounded-full w-10 h-10 flex-center text-sm ml-auto">
          <EditIcon />
        </div>
      </div>
      <ul>
        {Array.from(Array(5)).map((v, i) => (
          <li key={i} className="mb-2.5">
            <TimeSchedule
              key={i + 1}
              index={i + 1}
              time="00:00"
              title="title"
              description="description"
              memo="memo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
