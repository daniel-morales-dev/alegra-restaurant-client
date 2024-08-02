import { IOrder } from "../../interfaces/orders.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrdersStateType = {
  orders: IOrder[];
};

const initialState: OrdersStateType = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "ordersApi",
  initialState: initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.push(action.payload);
    },
    updateOrders: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder, updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
