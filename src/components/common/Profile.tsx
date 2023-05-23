"use client";
import React from "react";
import { useAccount } from "wagmi";

export default function Profile() {
  const { address } = useAccount();
  return <p>{address}</p>;
}
