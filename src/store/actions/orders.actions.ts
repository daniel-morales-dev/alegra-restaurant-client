import { addOrder, updateOrders } from "../slices/orders.slice.ts";
import { AppDispatch } from "../store.ts";
import ApiCore from "../../core/api.core.ts";
import { API_CONFIG } from "../../config/api.config.ts";
import { IOrder } from "../../interfaces/orders.interface.ts";

const api = new ApiCore(API_CONFIG.ORDERS_HOST);

export const POST_ORDER = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.post<unknown, IOrder>("/v1/orders/register");
    dispatch(addOrder(response.data));
  } catch (err) {
    console.error("Error in POST_ORDER", err);
  }
};

export const SET_ORDER_LIST = (params: IOrder[]) => (dispatch: AppDispatch) => {
  dispatch(updateOrders(params));
};
