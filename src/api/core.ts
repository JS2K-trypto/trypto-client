import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  timeout: 500000,
});

export async function fetcher<TData, TParams = any>([url, ...params]: [
  string,
  TParams
]) {
  return api.get<TData>(url, {
    params: params,
  });
}
