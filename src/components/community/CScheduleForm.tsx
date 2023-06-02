import React from "react";
import Modal from "../common/Modal";
import Input from "../common/Input";

interface CScheduleFormProps {
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function CScheduleForm({
  onCancel,
  onSubmit,
}: CScheduleFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mt-5 px-5">Edit Schedule</h2>
      <div className="flex flex-col px-5">
        <p className="mt-5">Place Title</p>
        <Input />
        <p className="mt-5">Dmateescription</p>
        <Input />
        <p className="mt-5">Memo</p>
        <Input />
        <p className="mt-5">Time</p>
        <Input />
      </div>
      <div className="flex gap-5 border-t border-gray-300 p-5 mt-5 px-5">
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
