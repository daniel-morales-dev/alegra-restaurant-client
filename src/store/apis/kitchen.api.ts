import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../config/api.config.ts";
import { IKitchenOrder } from "../../interfaces/kitchenOrder.interface.ts";
import { IRecipeStatus } from "../../interfaces/recipeStatus.interface.ts";

export const kitchenApi = createApi({
  reducerPath: "kitchenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.KITCHEN_HOST,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTodayOrders: builder.query<IKitchenOrder[], void>({
      query: () => `/v1/kitchen-orders`,
    }),
    getRecipes: builder.query<IRecipeStatus, void>({
      query: () => `/v1/recipes`,
    }),
    getRecipesStatus: builder.query<IRecipeStatus, string>({
      query: (uuid: string) => `/v1/recipes/${uuid}`,
    }),
  }),
});

export const {
  useGetTodayOrdersQuery,
  useGetRecipesQuery,
  useGetRecipesStatusQuery,
} = kitchenApi;
