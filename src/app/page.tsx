import path from "@/configs/path";
import { redirect } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

export default function Home() {
  return (
    <div>
      <p>여행 커뮤니티</p>
    </div>
  );
}
