"use client";
import { config } from "@/configs/wagmi";
import React from "react";
import { RecoilRoot } from "recoil";
import { WagmiConfig } from "wagmi";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RecoilRoot>{children}</RecoilRoot>
    </WagmiConfig>
  );
}
