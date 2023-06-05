import {
  TripPlan,
  TripPlanByDay,
  TripPlanFormData,
} from "@/interfaces/datas/trip";
import { WalletAccount } from "@/interfaces/datas/user";
import { api } from "./core";

export async function fetchMyPlan(walletAccount?: WalletAccount) {
  return api
    .get<Array<TripPlan>>("/trip/myplan", {
      params: {
        walletAccount,
      },
    })
    .then(({ data }) => data);
}

export async function fetchAllPlan() {
  return api.get("/trip/allplan").then(({ data }) => data);
}

export async function createPlan(data: TripPlanFormData) {
  return api.post("/trip/myplan", data).then(({ data }) => data);
}

export async function updatePlan(data: TripPlanFormData) {
  return api.patch("/trip/simpleplan", data).then(({ data }) => data);
}
