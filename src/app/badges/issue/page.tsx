"use client";
import Button from "@/components/common/Button";
import Badge from "../../../components/badges/Badge";
import { useRouter } from "next/navigation";
import path from "@/configs/path";
import Lottie from "lottie-react";
import SurpriseBoxOpening from "./SurpriseBoxOpening.json";

const Issue = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-4 pt-10">
        <Lottie animationData={SurpriseBoxOpening} loop={false} />
      </div>
      <div className="font-bold text-5xl  py-10">Congratulations</div>
      <Button
        className="px-20 m-10"
        onClick={() => {
          router.push(path.BADGE);
        }}
      >
        Your Badges
      </Button>
    </div>
  );
};

export default Issue;
