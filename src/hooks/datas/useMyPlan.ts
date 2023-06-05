import { fetchMyPlan } from "@/api/plan";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useSWR, { KeyedMutator, SWRConfiguration, SWRResponse } from "swr";
import { useAccount } from "wagmi";

export default function useMyPlan() {
  const router = useRouter();
  const { address } = useAccount();

  return useSWR(["/trip/myplan", address], () => fetchMyPlan(address), {
    fallbackData: [],
    suspense: true,
    onSuccess(data) {
      return data.map((v) => {
        v.tripId = Number(v.tripId);
        return v;
      });
    },
    onError: (e: AxiosError, key, config) => {
      // 로그인이 되어있지 않을 경우
      if (!address) {
        router.push("/");
      }
    },
  });
}
