"use client";
import swrConfig from "@/configs/swr";
import { config } from "@/configs/wagmi";
import React from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr/_internal";
import { WagmiConfig } from "wagmi";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <SWRConfig value={swrConfig}>
        <RecoilRoot>{children}</RecoilRoot>
      </SWRConfig>
    </WagmiConfig>
  );
}
