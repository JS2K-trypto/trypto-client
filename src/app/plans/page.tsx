"use client";
import React from "react";
import PageContainer from "@/components/common/PageContainer";
import PlusIcon from "@/components/common/icons/PlusIcon";
import PlanCard from "@/components/plans/PlanCard";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import NewPlanForm from "@/components/plans/NewPlanForm";

export default function Plans() {
  const { open, onOpen, onClose } = useModal();

  return (
    <>
      <PageContainer title="My Plan">
        <button
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
        <NewPlanForm />
      </Modal>
    </>
  );
}
