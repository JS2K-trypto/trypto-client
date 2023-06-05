"use client";
import React, { useState } from "react";
import PageContainer from "@/components/common/PageContainer";
import useSWR, { mutate } from "swr";
import useMyPlan from "@/hooks/datas/useMyPlan";
import { TripPlanByTime, TripPlanFormData } from "@/interfaces/datas/trip";
import TimeSchedule from "@/components/plans/TimeSchedule";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import ScheduleForm from "@/components/plans/ScheduleForm";
import { updatePlan } from "@/api/plan";
import PlanForm from "@/components/plans/PlanForm";
import { useAccount } from "wagmi";
import convertInputDate from "@/utils/convertInputDate";

export default function PlanPage({ params }: { params: { id: number } }) {
  const { address } = useAccount();
  const planModal = useModal();
  const scheduleModal = useModal();
  const { data } = useMyPlan();

  const currentPlan = data.find((v) => v.tripId === Number(params.id));
  const tripDeparture = currentPlan
    ? new Date(currentPlan.tripDeparture).toLocaleDateString()
    : "0000.00.00";
  const tripArrival = currentPlan
    ? new Date(currentPlan.tripArrival).toLocaleDateString()
    : "0000.00.00";

  const handleScheduleAdd = (formData: TripPlanByTime) => {
    const newData = {
      ...formData,
      startDate: convertInputDate(new Date(formData.startDate)),
      endDate: convertInputDate(new Date(formData.endDate)),
    };
    // 스케쥴 추가
    updatePlan({
      tripId: Number(currentPlan?.tripId),
      dayItems: currentPlan?.dayItems.concat(newData) || [newData],
    }).then(() => {
      mutate(["/trip/myplan", address]);
      scheduleModal.onClose();
    });
  };

  const handlePlanUpdate = (formData: TripPlanFormData) => {
    // 날짜 형식이 맞지 않아서 임시 작성
    const newDate = {
      ...formData,
      tripDeparture: convertInputDate(new Date(formData.tripDeparture || "")),
      tripArrival: convertInputDate(new Date(formData.tripArrival || "")),
    };
    updatePlan(newDate).then(() => {
      mutate(["/trip/myplan", address]);
      planModal.onClose();
    });
  };

  const dayItems = currentPlan?.dayItems.reduce<
    Record<string, TripPlanByTime[]>
  >((acc, cur) => {
    const startDate = new Date(cur.startDate).toISOString().split("T")[0];
    if (acc[startDate]) {
      acc[startDate] = acc[startDate].concat(cur);
    } else {
      acc[startDate] = [cur];
    }
    return acc;
  }, {});

  return (
    <>
      <PageContainer
        title={currentPlan?.tripTitle || "Trip Title"}
        subTitle={`${tripDeparture}-${tripArrival}`}
      >
        <button
          type="button"
          className="absolute rounded-full bg-yellow-300 m-5 top-0 right-0 px-5 py-4 flex-center"
          onClick={planModal.onOpen}
        >
          edit
        </button>
        {dayItems &&
          Object.entries(dayItems).map(([key, value], i) => {
            return (
              <div key={key}>
                <h2 className="text-xl font-bold mb-2.5">
                  {`Day ${i + 1}`} <span className=" text-base">{key}</span>
                </h2>
                <ul>
                  {value.map((v, i) => (
                    <li key={i} className="mb-5">
                      <TimeSchedule index={i} data={v} plan={currentPlan} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

        <button
          type="button"
          className="rounded-full bg-yellow-300 px-5 py-4 w-full flex-center"
          onClick={scheduleModal.onOpen}
        >
          add schedule
        </button>
      </PageContainer>
      <Modal open={planModal.open} onClose={planModal.onClose}>
        <PlanForm
          data={currentPlan}
          onSubmit={handlePlanUpdate}
          onCancel={planModal.onClose}
        />
      </Modal>
      <Modal open={scheduleModal.open} onClose={scheduleModal.onClose}>
        <ScheduleForm
          onSubmit={handleScheduleAdd}
          onCancel={scheduleModal.onClose}
        />
      </Modal>
    </>
  );
}
