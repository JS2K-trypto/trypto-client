"use client";
import { TripPlanFormData } from "@/interfaces/datas/trip";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLabel from "../common/FormLabel";
import Input from "../common/Input";

interface PlanFormProps {
  data?: TripPlanFormData;
  onSubmit?: SubmitHandler<TripPlanFormData>;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PlanForm({ data, onSubmit, onCancel }: PlanFormProps) {
  const today = new Date().toISOString().split("T").at(0);

  const { register, handleSubmit } = useForm<TripPlanFormData>({
    defaultValues: {
      tripDeparture: today,
      tripArrival: today,
      ...data,
    },
  });

  const isEdit = Boolean(data);

  return (
    <>
      <form
        className="flex flex-col gap-5"
        onSubmit={onSubmit && handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold">{isEdit ? "Edit" : "New"} Plan</h2>
        <FormLabel name="Trip Title">
          <Input
            className="w-full"
            {...register("tripTitle", {
              required: true,
            })}
          />
        </FormLabel>
        <div className="flex gap-5 w-full flex-wrap">
          <FormLabel className="flex-1" name="Departure">
            <Input
              type="date"
              className="w-full"
              {...register("tripDeparture", {
                required: true,
              })}
            />
          </FormLabel>
          <FormLabel className="flex-1" name="Arrival">
            <Input
              type="date"
              className="w-full"
              {...register("tripArrival", {
                required: true,
              })}
            />
          </FormLabel>
        </div>
        <FormLabel name="Contry">
          <Input className="w-full" {...register("tripCountry")} />
        </FormLabel>
        <div className="flex gap-5">
          <button
            type="button"
            className="rounded-full flex-1 shadow-md items-end ml-auto w-[150px] h-[50px] bg-gray-50"
            onClick={onCancel}
          >
            cancel
          </button>
          <button
            type="submit"
            className="rounded-full flex-1 shadow-md items-end w-[150px] h-[50px] bg-yellow-300"
          >
            save
          </button>
        </div>
      </form>
    </>
  );
}
