import { RootState } from "../store.ts";

export const getOrdersSelector = (state: RootState) => state.orders.orders;
