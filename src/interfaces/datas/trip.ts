import { WalletAccount } from "./user";

export type TravelId = number;

export interface TripPlanArr {
  Arr: TripPlan[];
}

export interface TripPlan {
  travelId: TravelId;
  walletAccount: WalletAccount;
  tripTitle: string;
  tripCountry: string;
  tripDeparture: string;
  tripArrival: string;
  dayItems: Array<TripPlanByTime>;
}

export interface TripPlanByTime {
  startDate: string;
  endDate: string;
  title: string;
  note: string;
}

export interface TripPlanFormData
  extends Omit<TripPlan, "travelId" | "walletAccount" | "dayItems"> {}

export interface PlanByDayFormData extends TripPlanByTime {}
