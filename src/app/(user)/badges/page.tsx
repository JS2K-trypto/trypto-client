"use client";
import React, { useEffect, useState } from "react";
import Badge from "../../../components/badges/Badge";
import Button from "@/components/common/Button";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import path from "@/configs/path";
import axios from "axios";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import NewBadgeModal from "@/components/badges/NewBadgeModal";
import { useGeoLocation } from "@/app/(user)/badges/useGeoLocation";
import Lottie from "lottie-react";
import LocationPin from "./LocationPin.json";
import AirplaneLoading from "./AirplaneLoading.json";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000,
};

export default function Badges() {
  const getMyBadgesUrl =
    "http://152.69.231.140:1323/v01/badge/user/all?walletAccount=";
  // "http://152.69.231.140:1323/v01/badge/user?walletAccount=";
  const getNewBadgeUrl = "http://152.69.231.140:1323/v01/badge/issue";
  const { address } = useAccount();
  const { open, onOpen, onClose } = useModal();
  const router = useRouter();
  const { location, error } = useGeoLocation(geolocationOptions);
  const [disableButton, setDisableButton] = useState(false);
  const [myBadges, setMyBadges] = useState([]);
  const [loadingBadge, setLoadingBadge] = useState(false);

  const handleClick = () => {
    console.log("handleClick");
    onOpen();
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 2000);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingBadge(true);
    onClose();
    axios
      .post(getNewBadgeUrl, {
        walletAccount: address,
        latitude: location.latitude,
        longitude: location.longitude,
      })
      .then((res) => {
        console.log(res);
        setLoadingBadge(false);
        router.push(path.BADGE_ISSUE);
      })
      .catch((err) => {
        console.log("Issue failed", err);
        console.log(
          "address, latitude, longitude: ",
          address,
          location.latitude,
          location.longitude
        );
        setLoadingBadge(false);
      });
  };
  useEffect(() => {
    axios
      .get(`${getMyBadgesUrl}${address}`)
      .then((res) => {
        console.log(res.data);
        setMyBadges(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-14">
      {/* SearchBar & MenuButton */}

      {/* Title */}
      <div className="flex justify-between items-center p-5 px-6 pt-8">
        <div className="font-bold text-3xl">My Badges</div>
        <Button onClick={handleClick} disabled={disableButton}>
          Get Badge
        </Button>
      </div>
      {/* Badges */}
      {/* <div className="grid gap-2 grid-cols-2 lg:grid-cols-3  auto-rows-auto">
        <Badge tier={"gold"} />
        <Badge tier={"silver"} />
        <Badge tier={"silver"} />
        <Badge tier={"gold"} />
        <Badge tier={"bronze"} />
        <Badge tier={"silver"} />
        <Badge tier={"bronze"} />
      </div> */}

      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 auto-rows-auto">
        {myBadges.map((badge, idx) => (
          <div key={idx}>
            <Badge badge={badge} />
          </div>
        ))}
      </div>
      <Modal open={open} onClose={onClose}>
        <NewBadgeModal
          onSubmit={handleSubmit}
          onCancel={onClose}
          location={location}
        />
      </Modal>
      {loadingBadge && (
        <div className="bg-slate-100 absolute left-0 top-0 w-full h-full z-50 ">
          <div className="flex flex-col items-center">
            <div className="w-40 flex justify-center items-center mt-40 pt-20">
              <Lottie animationData={LocationPin} />
            </div>
            <div className=" p-10">
              <Lottie animationData={AirplaneLoading} />
            </div>
            <div className="font-semibold text-lg">Please wait...</div>
          </div>
        </div>
      )}
    </div>
  );
}
