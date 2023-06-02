"use client";
import React from "react";
import TimeSchedule from "./TimeSchedule";
import EditIcon from "../common/icons/EditIcon";
import PlusIcon from "../common/icons/PlusIcon";
import Modal from "../common/Modal";
import useModal from "@/hooks/useModal";
import ScheduleForm from "./ScheduleForm";
import { TripPlanByTime } from "@/interfaces/datas/trip";

interface DayScheduleProps {
  title: string;
}

export default function DaySchedule({ title }: DayScheduleProps) {
  const { open, onOpen, onClose } = useModal();

  const handleSubmit = (data: TripPlanByTime) => {};
  return (
    <>
      <div>
        <div className="flex mb-2.5 font-bold items-baseline">
          <h2 className="text-xl">{title}</h2>
          <span className="ml-1 text-sm leading-7">4.8(sat)</span>
          <button
            type="button"
            className="bg-yellow-300 rounded-full w-10 h-10 flex-center text-sm ml-auto"
            onClick={onOpen}
          >
            <PlusIcon />
          </button>
        </div>
        <ul>
          {Array.from(Array(5)).map((v, i) => (
            <li key={i} className="mb-2.5">
              <TimeSchedule key={i + 1} index={i + 1} />
            </li>
          ))}
        </ul>
      </div>
      <Modal open={open} onClose={onClose}>
        <ScheduleForm onSubmit={handleSubmit} onCancel={onClose} />
      </Modal>
    </>
  );
}
