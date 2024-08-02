import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./slices/orders.slice";
import { orderApi } from "./apis/orders.api.ts";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
