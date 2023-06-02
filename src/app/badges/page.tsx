"use client";

import React, { useEffect, useState } from "react";
import Badge from "../../components/badges/Badge";
import Button from "@/components/common/Button";
import { Connector, useAccount, useConnect } from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import axios from "axios";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/Modal";
import NewBadgeModal from "@/components/badges/NewBadgeModal";
import { useGeoLocation } from "@/app/badges/useGeoLocation";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000,
};

export default function Badges() {
  const { isConnected, address } = useAccount();
  const { open, onOpen, onClose } = useModal();
  const { location, error } = useGeoLocation(geolocationOptions);
  if (!isConnected) {
    redirect(path.AUTH, RedirectType.replace);
  }
  const [disableButton, setDisableButton] = useState(false);
  const [myBadges, setMyBadges] = useState([]);

  const handleClick = () => {
    console.log("handleClick");
    onOpen();
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 2000);
    // axios
    //   .post("http://152.69.231.140:1323/v01/badge/issue", {
    //     walletAccount: "0xCA122d8a3c6d1d2e4298e0CB7e027CD371CCAaA3",
    //     latitude: 37.5796,
    //     longitude: 126.977,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Ok clicked");
    axios
      .post("http://152.69.231.140:1323/v01/badge/issue", {
        walletAccount: address,
        latitude: location.latitude,
        longitude: location.longitude,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`http://152.69.231.140:1323/v01/badge/user?walletAccount=${address}`)
      .then((res) => {
        console.log(res.data.Arr);
        setMyBadges(res.data.Arr);
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

      <div className="grid gap-4 grid-cols-2 p-6">
        {myBadges.map((badge, idx) => (
          <Badge key={idx} />
        ))}
        {/* <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge /> */}
        {/* <Badge />
        <Badge />
        <Badge />
        <Badge /> */}
      </div>
      <Modal open={open} onClose={onClose}>
        <NewBadgeModal
          onSubmit={handleSubmit}
          onCancel={onClose}
          location={location}
        />
      </Modal>
    </div>
  );
}
