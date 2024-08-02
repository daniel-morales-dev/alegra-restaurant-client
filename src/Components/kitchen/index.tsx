import { useEffect, useMemo } from "react";
import { useGetTodayOrdersQuery } from "../../store/apis/kitchen.api.ts";
import { updateKitchenOrders } from "../../store/slices/kitchen.slice.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { RootState } from "../../store/store.ts";
import moment from "moment";
import Recipes from "./recipes";

const Kitchen = () => {
  const orders = useAppSelector(
    (state: RootState) => state.kitchen.kitchenOrders,
  );
  const dispatch = useAppDispatch();
  const { data } = useGetTodayOrdersQuery(undefined, {
    pollingInterval: 10000,
  });

  useEffect(() => {
    if (data) {
      dispatch(updateKitchenOrders(data));
    }
  }, [data, dispatch]);

  const sortedOrders = useMemo(() => {
    if (orders) {
      const ordersCopy = [...orders];
      return ordersCopy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }
    return [];
  }, [orders]);

  return (
    <div className="container-kitchen">
      <header>
        <h2>Cocina</h2>
      </header>
      <div className="container-kitchen__orders">
        <section className={"kitchen"}>
          <h2>Ordenes recibidas en cocina</h2>
          <section className="container-cards">
            {sortedOrders.map((order) => (
              <div className={"card"} key={order.id}>
                <h3 className={"uuid"}>{order.orderUuid}</h3>
                <p>
                  Fecha de creacion:{" "}
                  {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
                <h3 className={"title-recipe"}>Receta:</h3>
                {order.recipe && <p>{order.recipe.name}</p>}
              </div>
            ))}
          </section>
        </section>
        <section className={"container-kitchen__recipes"}>
          <Recipes />
        </section>
      </div>
    </div>
  );
};

export default Kitchen;
