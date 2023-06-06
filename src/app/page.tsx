"use client";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Connector, useAccount, useConnect } from "wagmi";

export default function Page() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connectAsync, connectors, isLoading } = useConnect();

  const handleConnect = async (connector: Connector) => {
    if (!connector.ready) {
      router.push(path.METAMASK_DOWNLOAD);
    } else {
      await connectAsync({ connector });
      router.push(path.COMMUNITY);
    }
  };

  useEffect(() => {
    // 서버에서 렌더링 될때는 값이 false여서 무조건 홈으로 리다이렉트됨
    if (isConnected) {
      redirect(path.COMMUNITY, RedirectType.replace);
    }
  }, [isConnected]);

  return (
    <div className="absolute bottom-0 w-full h-[522px] bg-white/50 border-1 rounded-t-[15px] p-5 flex flex-col items-center font-bold">
      <Image
        className="mt-2.5"
        src="/images/airport.png"
        alt="airport-image"
        width={289}
        height={253}
      />
      <p className="mt-9 text-4xl">Make a good trip!</p>
      <p className="mt-1.5">Web3 Social travel</p>
      {connectors.map((connector) => (
        <button
          key={connector.id}
          className="w-[254px] px-5 py-4 rounded-full bg-yellow-300 shadow-md text-lg mt-9 disabled:bg-gray-300"
          onClick={() => handleConnect(connector)}
          disabled={isLoading}
        >
          {isLoading ? "Connecting..." : "Wallet Connect"}
        </button>
      ))}
    </div>
  );
}
