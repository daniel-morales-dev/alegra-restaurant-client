import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IOrder } from "../../interfaces/orders.interface.ts";
import { useGetStatusQuery } from "../../store/apis/orders.api.ts";
import OrderCard from "./children/orderCard.tsx";
import { AppDispatch, RootState } from "../../store/store.ts";
import {
  POST_ORDER,
  SET_ORDER_LIST,
} from "../../store/actions/orders.actions.ts";
import { getOrdersSelector } from "../../store/selectors/orders.selector.ts";

interface OrdersProps {
  orders: IOrder[];
  updateOrders: (params: IOrder[]) => void;
  createOrder: () => void;
}

const Orders: React.FC<OrdersProps> = ({
  orders,
  updateOrders,
  createOrder,
}) => {
  const uuids = orders.map((order) => order.uuid);
  const { data } = useGetStatusQuery(uuids, {
    pollingInterval: 5000,
    skip: !uuids.length,
  });

  useEffect(() => {
    if (data?.length) {
      updateOrders(data);
    }
  }, [data, updateOrders]);

  return (
    <div className="container-orders">
      <header>
        <h2>Ordenes</h2>
        <button onClick={() => createOrder()}>Pedir almuerzo</button>
      </header>
      <div className="container-orders__orders">
        <div className="container-order__pending">
          <h2 className={"title"}>Ordenes pendientes</h2>
          <div className="container-cards">
            {orders
              ?.filter((order) => order.status === "pending")
              .map((order) => (
                <OrderCard
                  key={order.uuid}
                  uuid={order.uuid}
                  status={order.status}
                />
              ))}
          </div>
        </div>
        <div className="container-order__kitchen">
          <h2 className={"title"}>Ordenes en cocina</h2>
          <div className={"container-cards"}>
            {orders
              ?.filter((order) => order.status === "in_kitchen")
              .map((order) => (
                <OrderCard
                  key={order.uuid}
                  uuid={order.uuid}
                  status={order.status}
                  recipe={order.recipe}
                />
              ))}
          </div>
        </div>
        <div className="container-order__finished">
          <h2 className={"title"}> Ordenes entregadas</h2>
          <div className="container-cards">
            {orders
              ?.filter((order) => order.status === "finished")
              .map((order) => (
                <OrderCard
                  key={order.uuid}
                  uuid={order.uuid}
                  status={order.status}
                  recipe={order.recipe}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  orders: getOrdersSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateOrders: (params: IOrder[]) => dispatch(SET_ORDER_LIST(params)),
  createOrder: () => dispatch(POST_ORDER()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Orders);
