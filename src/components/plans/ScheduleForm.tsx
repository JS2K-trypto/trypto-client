import React from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";
import FormLabel from "../common/FormLabel";
import { SubmitHandler, useForm } from "react-hook-form";
import { TripPlanByTime } from "@/interfaces/datas/trip";

interface ScheduleFormProps {
  data?: TripPlanByTime;
  onSubmit?: SubmitHandler<TripPlanByTime>;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ScheduleForm({
  data,
  onSubmit,
  onCancel,
}: ScheduleFormProps) {
  const { register, handleSubmit } = useForm<TripPlanByTime>();

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={onSubmit && handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold">Edit Schedule</h2>
      <FormLabel name="Place Title">
        <Input type="text" className="w-full" {...register("title")} />
      </FormLabel>
      <FormLabel name="Note">
        <Input type="text" className="w-full" {...register("note")} />
      </FormLabel>
      <div className="flex gap-5 w-full flex-wrap">
        <FormLabel className="flex-1" name="Departure">
          <Input type="date" className="w-full" {...register("startDate")} />
        </FormLabel>
        <FormLabel className="flex-1" name="Arrival">
          <Input type="date" className="w-full" {...register("endDate")} />
        </FormLabel>
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          className="rounded-full shadow-md h-[50px] flex-1 bg-gray-50"
          onClick={onCancel}
        >
          cancel
        </button>
        <button
          type="submit"
          className="rounded-full shadow-md h-[50px] flex-1 bg-yellow-300"
        >
          save
        </button>
      </div>
    </form>
  );
}
