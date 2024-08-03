import { IOrder } from "../../interfaces/orders.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrdersStateType = {
  orders: IOrder[];
};

const initialState: OrdersStateType = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.push(action.payload);
    },
    updateOrders: (state, action: PayloadAction<IOrder[]>) => {
      const existingOrdersMap = new Map(
        state.orders.map((order) => [order.uuid, order]),
      );

      action.payload.forEach((order) => {
        existingOrdersMap.set(order.uuid, order);
      });

      state.orders = Array.from(existingOrdersMap.values());
    },
  },
});

export const { addOrder, updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
