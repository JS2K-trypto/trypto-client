"use client";

import React from "react";
import { useAccount } from "wagmi";
import { redirect } from "next/navigation";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";

export default function Community() {
  const { isConnected } = useAccount();

  return <div>Community page</div>;
}
