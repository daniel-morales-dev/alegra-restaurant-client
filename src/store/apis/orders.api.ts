import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../config/api.config.ts";
import { IOrder } from "../../interfaces/orders.interface.ts";

export const orderApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.ORDERS_HOST,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStatus: builder.query<IOrder[], string[]>({
      query: (uuids) => {
        const queryString = uuids
          .map((uuid) => `uuids[]=${encodeURIComponent(uuid)}`)
          .join("&");
        return `/v1/orders/status?${queryString}`;
      },
    }),
  }),
});

export const { useGetStatusQuery } = orderApi;
