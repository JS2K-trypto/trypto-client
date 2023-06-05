"use client";
import path from "@/configs/path";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function Template({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount();

  useEffect(() => {
    // 서버에서 렌더링 될때는 값이 false여서 무조건 홈으로 리다이렉트됨
    if (!isConnected) {
      redirect(path.HOME, RedirectType.replace);
    }
  }, [isConnected]);

  return <>{children}</>;
}
