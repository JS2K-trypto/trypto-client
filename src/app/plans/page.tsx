"use client";
import React from "react";
import PageContainer from "@/components/common/PageContainer";
import PlusIcon from "@/components/common/icons/PlusIcon";
import PlanCard from "@/components/plans/PlanCard";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import { TripPlanFormData } from "@/interfaces/datas/trip";
import PlanForm from "@/components/plans/PlanForm";
import { createPlan } from "@/api/plan";
import useMyPlan from "@/hooks/datas/useMyPlan";
import { mutate } from "swr";
import { useAccount } from "wagmi";
import convertInputDate from "@/utils/convertInputDate";

export default function Plans() {
  const { data, isLoading } = useMyPlan();
  const { address } = useAccount();
  const { open, onOpen, onClose } = useModal();

  const handleSubmit = (formData: TripPlanFormData) => {
    createPlan({
      ...formData,
      walletAccount: address,
      tripDeparture: convertInputDate(new Date(formData.tripDeparture || "")),
      tripArrival: convertInputDate(new Date(formData.tripArrival || "")),
    }).then(() => {
      mutate(["/trip/myplan", address]);
      onClose();
    });
  };

  return (
    <>
      <PageContainer title="My Plan">
        <button
          type="button"
          className="absolute rounded-full bg-yellow-300 m-5 top-0 right-0 w-10 h-10 flex-center"
          onClick={onOpen}
        >
          <PlusIcon />
        </button>
        {isLoading ? (
          <h2>여행 계획을 가져오고 있습니다. 잠시만 기다려 주세요.</h2>
        ) : (
          <section>
            {data.length > 0 ? (
              <ul>
                {data?.map((v, i) => (
                  <li key={i} className="mb-5">
                    <PlanCard data={v} />
                  </li>
                ))}
              </ul>
            ) : (
              <h2>새로운 여행 계획을 만들어보세요.</h2>
            )}
          </section>
        )}
      </PageContainer>
      <Modal open={open} onClose={onClose}>
        <PlanForm onSubmit={handleSubmit} onCancel={onClose} />
      </Modal>
    </>
  );
}
