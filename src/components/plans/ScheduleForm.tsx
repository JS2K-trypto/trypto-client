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

const defaultData: TripPlanByTime = {
  startDate: "00:00",
  endDate: "00:00",
  title: "",
  note: "",
};

export default function ScheduleForm({
  data = defaultData,
  onSubmit,
  onCancel,
}: ScheduleFormProps) {
  // const today = new Date().toISOString().split("T").at(0);
  // const startDate = data?.startDate
  //   ? new Date(data.startDate).toISOString().split("T").at(0)
  //   : today;
  // const endDate = data?.endDate
  //   ? new Date(data.endDate).toISOString().split("T").at(0)
  //   : today;

  const { register, handleSubmit, setValue } = useForm<TripPlanByTime>({
    // defaultValues: { ...data, startDate: startDate, endDate: endDate },
    defaultValues: data,
  });

  const handleDepartureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("endDate", e.currentTarget.value);
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={onSubmit && handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold">Edit Schedule</h2>
      <FormLabel name="Place Title">
        <Input
          type="text"
          className="w-full"
          autoFocus
          {...register("title", {
            required: true,
          })}
        />
      </FormLabel>
      <div className="flex gap-5 w-full flex-wrap">
        <FormLabel className="flex-1" name="Start Date">
          <Input
            type="date"
            className="w-full"
            {...register("startDate", {
              onChange: handleDepartureChange,
            })}
          />
        </FormLabel>
        <FormLabel className="flex-1" name="End Date">
          <Input type="date" className="w-full" {...register("endDate")} />
        </FormLabel>
      </div>
      <FormLabel name="Note">
        <Input type="text" className="w-full" {...register("note")} />
      </FormLabel>
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
