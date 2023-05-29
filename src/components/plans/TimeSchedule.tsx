"use client";
import React from "react";
import Modal from "../common/Modal";
import ScheduleForm from "./ScheduleForm";
import useModal from "@/hooks/useModal";
import CloseIcon from "../common/icons/CloseIcon";

interface TimeScheduleProps {
  index: number;
  time: string;
  title: string;
  description?: string;
  memo?: string;
}

export default function TimeSchedule({
  index,
  time,
  title,
  description = "",
  memo = "",
}: TimeScheduleProps) {
  const { open, onOpen } = useModal();
  return (
    <>
      <div className="flex items-center">
        <div>
          <div className="bg-yellow-300 rounded-full w-6 h-6 flex-center text-sm m-auto">
            {index}
          </div>
          <span className="text-xs mt-0.5">{time}</span>
        </div>
        <div
          className="flex text-sm bg-white/60 rounded-2xl flex-1 ml-2.5 shadow-md items-center"
          onClick={onOpen}
        >
          <div className="py-5 pl-5">
            <p className="text-base font-bold">{title}</p>
            <p>{description}</p>
            <p>{memo}</p>
          </div>
          <button className="ml-auto w-10 h-10">
            <CloseIcon />
          </button>
        </div>
      </div>
      <Modal open={open}>
        <ScheduleForm />
      </Modal>
    </>
  );
}
