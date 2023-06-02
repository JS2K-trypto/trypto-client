"use client";
import React from "react";
import Modal from "../common/Modal";
import ScheduleForm from "./ScheduleForm";
import useModal from "@/hooks/useModal";
import CloseIcon from "../common/icons/CloseIcon";
import { TripPlanByTime } from "@/interfaces/datas/trip";

interface TimeScheduleProps {
  index: number;
  data?: TripPlanByTime;
}

const defaultData: TripPlanByTime = {
  startDate: "00:00",
  endDate: "00:00",
  title: "title",
  note: "note",
};

export default function TimeSchedule({
  index,
  data = defaultData,
}: TimeScheduleProps) {
  const { open, onOpen, onClose } = useModal();

  const handleSubmit = (data: TripPlanByTime) => {};

  const handleScheduleRemove = () => {};

  return (
    <>
      <div className="flex items-center">
        <div>
          <div className="bg-yellow-300 rounded-full w-6 h-6 flex-center text-sm m-auto">
            {index}
          </div>
          <span className="text-xs mt-0.5">{data?.startDate}</span>
        </div>
        <div
          className="flex text-sm bg-white/60 rounded-2xl flex-1 ml-2.5 shadow-md items-center"
          onClick={onOpen}
        >
          <div className="py-5 pl-5">
            <p className="text-base font-bold">{data?.title}</p>
            <p>{data?.note}</p>
          </div>
          <button className="ml-auto w-10 h-10" onClick={handleScheduleRemove}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={onClose}>
        <ScheduleForm onSubmit={handleSubmit} onCancel={onClose} />
      </Modal>
    </>
  );
}
