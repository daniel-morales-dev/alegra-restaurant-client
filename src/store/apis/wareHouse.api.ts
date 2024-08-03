import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../config/api.config.ts";
import { IIngredient } from "../../interfaces/ingredient.interface.ts";
import { IShoppingHistory } from "../../interfaces/shoppingHistory.interface.ts";

export const wareHouseApi = createApi({
  reducerPath: "wareHouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.WAREHOUSE_HOST,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIngredients: builder.query<IIngredient[], undefined>({
      query: () => `/v1/ingredients/`,
    }),
    getShoppingHistory: builder.query<IShoppingHistory[], undefined>({
      query: () => `/v1/shopping-history/`,
    }),
  }),
});

export const { useGetShoppingHistoryQuery, useGetIngredientsQuery } =
  wareHouseApi;
