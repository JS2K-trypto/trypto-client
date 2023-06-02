"use client";
import React from "react";
import PageContainer from "@/components/common/PageContainer";
import PlusIcon from "@/components/common/icons/PlusIcon";
import PlanCard from "@/components/plans/PlanCard";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import { TripPlanFormData } from "@/interfaces/datas/trip";
import PlanForm from "@/components/plans/PlanForm";

export default function Plans() {
  const { open, onOpen, onClose } = useModal();

  const handleSubmit = (data: TripPlanFormData) => {};

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
        <section>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <article key={i} className="mb-5">
                <PlanCard />
              </article>
            ))}
        </section>
      </PageContainer>
      <Modal open={open} onClose={onClose}>
        <PlanForm onSubmit={handleSubmit} onCancel={onClose} />
      </Modal>
    </>
  );
}
