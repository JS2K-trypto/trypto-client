import { WalletAccount } from "./user";

export type TripPlanId = number;

export interface TripPlan {
  tripId: TripPlanId;
  nickName: string;
  walletAccount: WalletAccount;
  tripTitle: string;
  tripCountry: string;
  tripDeparture: string;
  tripArrival: string;
  dayItems: Array<TripPlanByTime>;
}

export interface TripPlanByDay {
  title: string;
  date: string;
  timeItems: Array<TripPlanByTime>;
}

export interface TripPlanByTime {
  startDate: string;
  endDate: string;
  title: string;
  note?: string;
}

export interface TripPlanFormData {
  tripId?: number;
  walletAccount?: WalletAccount;
  tripTitle?: string;
  tripCountry?: string;
  tripDeparture?: string;
  tripArrival?: string;
  dayItems?: Array<TripPlanByTime>;
}
