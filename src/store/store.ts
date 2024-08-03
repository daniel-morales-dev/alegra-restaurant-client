import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./slices/orders.slice";
import kitchenReducer from "./slices/kitchen.slice";
import wareHouseReducer from "./slices/wareHouse.slice";
import { orderApi } from "./apis/orders.api.ts";
import { kitchenApi } from "./apis/kitchen.api.ts";
import { wareHouseApi } from "./apis/wareHouse.api.ts";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    kitchen: kitchenReducer,
    wareHouse: wareHouseReducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [kitchenApi.reducerPath]: kitchenApi.reducer,
    [wareHouseApi.reducerPath]: wareHouseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(orderApi.middleware)
      .concat(kitchenApi.middleware)
      .concat(wareHouseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
