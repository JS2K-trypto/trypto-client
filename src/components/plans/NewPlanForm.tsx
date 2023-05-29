import React from "react";
import Input from "../common/Input";

export default function NewPlanForm() {
  return (
    <form>
      <h2 className="text-2xl font-bold px-5 mt-5">New Plan</h2>
      <div className="flex flex-col px-5">
        <p className="mt-5">Trip Title</p>
        <Input placeholder="trip title" />
        <div className="flex gap-5 w-full mt-5">
          <div className="flex-1">
            <p>Departure</p>
            <Input className="w-full" placeholder="departure" />
          </div>
          <div className="flex-1">
            <p>Arrival</p>
            <Input className="w-full" placeholder="arrival" />
          </div>
        </div>
        <p className="mt-5">Contry</p>
        <Input placeholder="contry" />
      </div>
      <div className="flex gap-5 border-t border-gray-300 p-5 mt-5">
        <button className="rounded-full shadow-md h-[50px] flex-1 bg-gray-50">
          cancel
        </button>
        <button className="rounded-full shadow-md h-[50px] flex-1 bg-yellow-300">
          save
        </button>
      </div>
    </form>
  );
}
