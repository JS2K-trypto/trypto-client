"use client";

import React, { useState } from "react";
import Badge from "../../components/common/Badge";
import Button from "@/components/common/Button";
import { Connector, useAccount, useConnect } from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import axios from "axios";
export default function Badges() {
  const { isConnected } = useAccount();
  if (!isConnected) {
    redirect(path.AUTH, RedirectType.replace);
  }

  const handleClick = () => {
    console.log("handleClick");
    axios
      .post("http://152.69.231.140:1323/v01/badge/issue", {
        walletAccount: "0xCA122d8a3c6d1d2e4298e0CB7e027CD371CCAaA3",
        latitude: 37.5796,
        longitude: 126.977,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-14">
      {/* SearchBar & MenuButton */}

      {/* Title */}
      <div className="flex justify-between items-center p-5 px-6 pt-8">
        <div className="font-bold text-3xl">My Badges</div>
        <Button onClick={handleClick} disabled={false}>
          Get Badge
        </Button>
      </div>
      {/* Badges */}
      <div className="grid gap-4 grid-cols-2 p-6">
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        {/* <Badge />
        <Badge />
        <Badge />
        <Badge /> */}
      </div>
    </div>
  );
}
