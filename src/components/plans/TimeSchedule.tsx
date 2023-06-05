"use client";
import React from "react";
import Modal from "../common/Modal";
import ScheduleForm from "./ScheduleForm";
import useModal from "@/hooks/useModal";
import CloseIcon from "../common/icons/CloseIcon";
import { TripPlan, TripPlanByTime } from "@/interfaces/datas/trip";
import { useRecoilState } from "recoil";
import useMyPlan from "@/hooks/datas/useMyPlan";
import { useParams } from "next/navigation";
import { updatePlan } from "@/api/plan";
import { mutate } from "swr";
import { useAccount } from "wagmi";

interface TimeScheduleProps {
  id: number;
  index: number;
  plan?: TripPlan;
  data?: TripPlanByTime;
}

export default function TimeSchedule({
  index,
  id,
  plan,
  data,
}: TimeScheduleProps) {
  const { open, onOpen, onClose } = useModal();
  const { address } = useAccount();
  const handleSubmit = (formData: TripPlanByTime) => {
    updatePlan({
      tripId: Number(plan?.tripId),
      dayItems: plan?.dayItems.map((v, i) =>
        i === id
          ? {
              ...formData,
              startDate: v.startDate,
              endDate: v.endDate,
            }
          : v
      ), // map을 통해서 배열을 새로 만들고 index에 대한 데이터만 변경
    }).then(() => {
      mutate(["/trip/myplan", address]);
      onClose();
    });
  };

  const handleScheduleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updatePlan({
      tripId: Number(plan?.tripId),
      dayItems: plan?.dayItems.filter((v, i) => i !== id),
    }).then(() => {
      mutate(["/trip/myplan", address]);
      onClose();
    });
  };

  return (
    <>
      <div className="flex items-center">
        <div>
          <div className="bg-yellow-300 rounded-full w-6 h-6 flex-center text-sm m-auto">
            {index + 1}
          </div>
        </div>
        <div
          className="flex text-sm bg-white/60 rounded-2xl flex-1 ml-2.5 shadow-md items-center"
          onClick={onOpen}
        >
          <div className="p-5 flex-1">
            <p className="text-base font-bold">{data?.title}</p>
            {/* <span className="text-xs mt-0.5">{data?.startDate}</span> */}
            <p>{data?.note}</p>
          </div>
          <button
            className="ml-auto w-[44px] h-[44px] flex-center"
            onClick={handleScheduleRemove}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={onClose}>
        <ScheduleForm data={data} onSubmit={handleSubmit} onCancel={onClose} />
      </Modal>
    </>
  );
}
