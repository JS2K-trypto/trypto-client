import { SWRConfiguration } from "swr";

const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false, // window에 포커스 되었을 때 재검증할지 여부
  errorRetryCount: 0,
};

export default swrConfig;
