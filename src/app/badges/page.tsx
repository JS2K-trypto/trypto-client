"use client";

import React, { useState } from "react";
import Badge from "../../components/common/Badge";
import Button from "@/components/common/Button";
import { Connector, useAccount, useConnect } from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
export default function Badges() {
  const { isConnected } = useAccount();
  if (!isConnected) {
    redirect(path.AUTH, RedirectType.replace);
  }

  return (
    <div className="mb-14">
      {/* SearchBar & MenuButton */}

      {/* Title */}
      <div className="flex justify-between items-center p-5 px-6 pt-8">
        <div className="font-bold text-3xl">My Badges</div>
        <Button>Get Badge</Button>
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
